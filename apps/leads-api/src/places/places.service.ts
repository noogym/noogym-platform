import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import { CreatePartnerFromDiscoveredGymDto } from "./dto/create-partner-from-discovered-gym.dto";
import { DiscoverLuandaGymsQueryDto } from "./dto/discover-luanda-gyms-query.dto";
import { LinkDiscoveredGymDto } from "./dto/link-discovered-gym.dto";
import { ListDiscoveredLuandaGymsQueryDto } from "./dto/list-discovered-luanda-gyms-query.dto";
import { ListNearbyGymsQueryDto } from "./dto/list-nearby-gyms-query.dto";

type GooglePlace = {
  id?: string;
  displayName?: {
    text?: string;
  };
  formattedAddress?: string;
  location?: {
    latitude?: number;
    longitude?: number;
  };
  rating?: number;
  userRatingCount?: number;
  businessStatus?: string;
  regularOpeningHours?: {
    openNow?: boolean;
  };
  types?: string[];
};

type GoogleNearbySearchResponse = {
  places?: GooglePlace[];
};

type DiscoveryZone = {
  name: string;
  lat: number;
  lng: number;
};

type CachedDiscoveredGymPlace = {
  placeId: string;
  name: string;
  address: string | null;
  rating: number | null;
  reviewCount: number;
  openNow: boolean | null;
  latitude: Prisma.Decimal | null;
  longitude: Prisma.Decimal | null;
  types: Prisma.JsonValue | null;
};

export type NearbyGym = {
  source: "google";
  placeId: string;
  name: string;
  address: string;
  rating: number | null;
  reviewCount: number;
  openNow: boolean | null;
  latitude: number | null;
  longitude: number | null;
  types: string[];
  isPartner: false;
};

const googleProvider = "google";
const discoveredStatus = "DISCOVERED";
const matchedStatus = "MATCHED";
const cacheTtlDays = 7;
const defaultLimit = 12;
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const luandaDiscoveryZones: DiscoveryZone[] = [
  { name: "Maianga", lat: -8.8328, lng: 13.2425 },
  { name: "Talatona", lat: -8.9187, lng: 13.1849 },
  { name: "Ingombota", lat: -8.8131, lng: 13.2359 },
  { name: "Miramar", lat: -8.8117, lng: 13.2416 },
  { name: "Benfica", lat: -8.9825, lng: 13.1877 },
  { name: "Kilamba", lat: -8.9997, lng: 13.2804 },
  { name: "Viana", lat: -8.9047, lng: 13.3723 },
  { name: "Cacuaco", lat: -8.8054, lng: 13.3669 },
  { name: "Samba", lat: -8.8722, lng: 13.2239 },
  { name: "Rangel", lat: -8.8362, lng: 13.2657 },
  { name: "Sambizanga", lat: -8.7982, lng: 13.2755 },
  { name: "Camama", lat: -8.9016, lng: 13.2356 },
];

@Injectable()
export class PlacesService {
  private readonly logger = new Logger(PlacesService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {}

  async listNearbyGyms(query: ListNearbyGymsQueryDto) {
    await this.deleteExpiredDiscoveryCache();

    const searchCacheKey = createSearchCacheKey(query);
    const searchCache = await this.prisma.placeDiscoverySearch.findUnique({
      where: {
        provider_cacheKey: {
          provider: googleProvider,
          cacheKey: searchCacheKey,
        },
      },
    });
    const cachedItems = await this.listCachedNearbyGyms(query);

    if (searchCache || cachedItems.length >= query.limit) {
      return {
        items: cachedItems,
        meta: {
          source: "cache",
          provider: googleProvider,
          configured: true,
          count: cachedItems.length,
          cached: true,
        },
      };
    }

    const apiKey = this.configService.get<string>("GOOGLE_MAPS_API_KEY");

    if (!apiKey) {
      return {
        items: [],
        meta: {
          source: "google",
          configured: false,
          message: "GOOGLE_MAPS_API_KEY is not configured.",
        },
      };
    }

    let items: NearbyGym[];

    try {
      items = await this.fetchGoogleNearbyGyms(query, apiKey);
    } catch (error) {
      this.logger.warn(`Google Places lookup failed: ${error}`);

      return {
        items: cachedItems,
        meta: {
          source: cachedItems.length ? "cache" : "google",
          provider: googleProvider,
          configured: true,
          count: cachedItems.length,
          cached: Boolean(cachedItems.length),
          unavailable: true,
          message: "Nao foi possivel carregar ginasios do Google Maps neste momento.",
        },
      };
    }

    await this.upsertDiscoveredGyms(items);
    await this.upsertDiscoverySearch(query, searchCacheKey, items.length);
    const publicItems = await this.listCachedNearbyGyms(query);

    return {
      items: publicItems,
      meta: {
        source: "google",
        provider: googleProvider,
        configured: true,
        count: publicItems.length,
        fetchedCount: items.length,
        cached: false,
      },
    };
  }

  async discoverLuandaGyms(query: DiscoverLuandaGymsQueryDto) {
    await this.deleteExpiredDiscoveryCache();

    const apiKey = this.configService.get<string>("GOOGLE_MAPS_API_KEY");

    if (!apiKey) {
      return {
        items: [],
        zones: [],
        meta: {
          provider: googleProvider,
          configured: false,
          message: "GOOGLE_MAPS_API_KEY is not configured.",
        },
      };
    }

    const zoneResults: Array<{ count: number; error?: string; name: string }> = [];
    const allItems: NearbyGym[] = [];

    for (const zone of luandaDiscoveryZones) {
      const zoneQuery = toNearbyGymsQuery({
        lat: zone.lat,
        limit: query.limitPerZone,
        lng: zone.lng,
        radius: query.radius,
      });

      try {
        const cachedItems = query.refresh ? [] : await this.listCachedNearbyGyms(zoneQuery);
        const items = cachedItems.length >= query.limitPerZone ? cachedItems : await this.fetchGoogleNearbyGyms(zoneQuery, apiKey);

        zoneResults.push({ name: zone.name, count: items.length });
        allItems.push(...items);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unknown error";
        this.logger.warn(`Google Places discovery failed for ${zone.name}: ${message}`);
        zoneResults.push({ name: zone.name, count: 0, error: message });
      }
    }

    const uniqueItems = uniqueNearbyGyms(allItems);
    await this.upsertDiscoveredGyms(uniqueItems);

    const savedCount = await this.prisma.discoveredGymPlace.count({
      where: {
        provider: googleProvider,
        status: discoveredStatus,
        hiddenAt: null,
        matchedGymId: null,
        city: "Luanda",
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    return {
      items: uniqueItems,
      zones: zoneResults,
      meta: {
        provider: googleProvider,
        configured: true,
        city: "Luanda",
        zoneCount: luandaDiscoveryZones.length,
        fetchedCount: allItems.length,
        uniqueCount: uniqueItems.length,
        savedCount,
        refreshed: query.refresh,
      },
    };
  }

  async listDiscoveredLuandaGyms(query: ListDiscoveredLuandaGymsQueryDto) {
    await this.deleteExpiredDiscoveryCache();

    const places = await this.prisma.discoveredGymPlace.findMany({
      where: {
        provider: googleProvider,
        status: discoveredStatus,
        hiddenAt: null,
        matchedGymId: null,
        city: "Luanda",
        expiresAt: {
          gt: new Date(),
        },
      },
      orderBy: [
        {
          rating: "desc",
        },
        {
          reviewCount: "desc",
        },
        {
          name: "asc",
        },
      ],
      take: query.limit,
    });

    const items = places.map((place) => this.toNearbyGym(place));

    return {
      items,
      meta: {
        source: "cache",
        provider: googleProvider,
        configured: true,
        city: "Luanda",
        count: items.length,
        cached: true,
      },
    };
  }

  async listDiscoveredAdmin(query: ListDiscoveredLuandaGymsQueryDto) {
    const places = await this.prisma.discoveredGymPlace.findMany({
      orderBy: [
        {
          updatedAt: "desc",
        },
        {
          rating: "desc",
        },
      ],
      take: query.limit,
      include: {
        matchedGym: {
          select: {
            id: true,
            name: true,
            slug: true,
            status: true,
          },
        },
      },
    });

    return {
      items: places.map((place) => ({
        id: place.id,
        provider: place.provider,
        placeId: place.placeId,
        name: place.name,
        address: place.address,
        city: place.city,
        country: place.country,
        latitude: place.latitude === null ? null : Number(place.latitude),
        longitude: place.longitude === null ? null : Number(place.longitude),
        rating: place.rating,
        reviewCount: place.reviewCount,
        openNow: place.openNow,
        types: normalizeTypes(place.types),
        status: place.status,
        hiddenAt: place.hiddenAt,
        matchedGym: place.matchedGym,
        lastFetchedAt: place.lastFetchedAt,
        updatedAt: place.updatedAt,
      })),
      meta: {
        count: places.length,
        provider: googleProvider,
      },
    };
  }

  async linkDiscoveredGym(id: string, dto: LinkDiscoveredGymDto) {
    const [place, gym] = await Promise.all([
      this.prisma.discoveredGymPlace.findUnique({ where: { id } }),
      this.prisma.gym.findUnique({ where: { id: dto.gymId } }),
    ]);

    if (!place) {
      throw new NotFoundException("Local descoberto não encontrado.");
    }

    if (!gym) {
      throw new NotFoundException("Ginásio parceiro não encontrado.");
    }

    const updated = await this.prisma.discoveredGymPlace.update({
      where: { id },
      data: {
        matchedGymId: gym.id,
        status: matchedStatus,
        hiddenAt: null,
      },
      include: {
        matchedGym: {
          select: {
            id: true,
            name: true,
            slug: true,
            status: true,
          },
        },
      },
    });

    return {
      item: updated,
      meta: {
        action: "linked",
      },
    };
  }

  async createPartnerFromDiscoveredGym(id: string, dto: CreatePartnerFromDiscoveredGymDto) {
    const place = await this.prisma.discoveredGymPlace.findUnique({ where: { id } });

    if (!place) {
      throw new NotFoundException("Local descoberto não encontrado.");
    }

    if (place.matchedGymId) {
      return this.linkDiscoveredGym(id, { gymId: place.matchedGymId });
    }

    const slug = await this.createUniqueGymSlug(dto.slug ?? place.name);
    const city = dto.city ?? place.city ?? "Luanda";
    const gym = await this.prisma.gym.create({
      data: {
        slug,
        name: place.name,
        shortDescription: "Parceiro criado a partir de descoberta no Google Maps.",
        phone: dto.phone,
        email: dto.email,
        website: dto.website,
        address: place.address,
        neighborhood: dto.neighborhood,
        city,
        country: place.country,
        latitude: place.latitude,
        longitude: place.longitude,
        basePrice: dto.basePrice,
        ratingAvg: place.rating ?? 0,
        reviewCount: place.reviewCount,
        status: dto.status ?? "DRAFT",
        publishedAt: dto.status === "ACTIVE" ? new Date() : null,
      },
    });

    await this.prisma.discoveredGymPlace.update({
      where: { id },
      data: {
        matchedGymId: gym.id,
        status: matchedStatus,
        hiddenAt: null,
      },
    });

    return {
      item: gym,
      meta: {
        action: "created_partner",
        discoveredPlaceId: id,
      },
    };
  }

  async updateDiscoveredStatus(id: string, status: "CLAIMED" | "DUPLICATE" | "HIDDEN") {
    const place = await this.prisma.discoveredGymPlace.findUnique({ where: { id } });

    if (!place) {
      throw new NotFoundException("Local descoberto não encontrado.");
    }

    const updated = await this.prisma.discoveredGymPlace.update({
      where: { id },
      data: {
        status,
        hiddenAt: new Date(),
      },
    });

    return {
      item: updated,
      meta: {
        action: status.toLowerCase(),
      },
    };
  }

  private async fetchGoogleNearbyGyms(query: ListNearbyGymsQueryDto, apiKey: string): Promise<NearbyGym[]> {
    const limit = getLimit(query);

    const response = await fetch("https://places.googleapis.com/v1/places:searchNearby", {
      method: "POST",
      signal: AbortSignal.timeout(10_000),
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": [
          "places.id",
          "places.displayName",
          "places.formattedAddress",
          "places.location",
          "places.rating",
          "places.userRatingCount",
          "places.businessStatus",
          "places.regularOpeningHours",
          "places.types",
        ].join(","),
      },
      body: JSON.stringify({
        includedTypes: ["gym"],
        maxResultCount: limit,
        rankPreference: "DISTANCE",
        locationRestriction: {
          circle: {
            center: {
              latitude: query.lat,
              longitude: query.lng,
            },
            radius: query.radius,
          },
        },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      this.logger.warn(`Google Places request failed: ${response.status} ${errorBody}`);
      throw new Error(`Google Places returned ${response.status}`);
    }

    const body = (await response.json()) as GoogleNearbySearchResponse;

    return (body.places ?? [])
      .filter((place) => place.id && place.displayName?.text)
      .map((place): NearbyGym => ({
        source: "google",
        placeId: place.id as string,
        name: place.displayName?.text ?? "Ginasio",
        address: place.formattedAddress ?? "Endereco nao disponivel",
        rating: typeof place.rating === "number" ? place.rating : null,
        reviewCount: place.userRatingCount ?? 0,
        openNow: typeof place.regularOpeningHours?.openNow === "boolean" ? place.regularOpeningHours.openNow : null,
        latitude: typeof place.location?.latitude === "number" ? place.location.latitude : null,
        longitude: typeof place.location?.longitude === "number" ? place.location.longitude : null,
        types: place.types ?? [],
        isPartner: false,
      }));
  }

  private async listCachedNearbyGyms(query: ListNearbyGymsQueryDto): Promise<NearbyGym[]> {
    const bounds = calculateBounds(query.lat, query.lng, query.radius);
    const limit = getLimit(query);
    const cachedPlaces = await this.prisma.discoveredGymPlace.findMany({
      where: {
        provider: googleProvider,
        status: discoveredStatus,
        hiddenAt: null,
        matchedGymId: null,
        expiresAt: {
          gt: new Date(),
        },
        latitude: {
          gte: bounds.minLat,
          lte: bounds.maxLat,
        },
        longitude: {
          gte: bounds.minLng,
          lte: bounds.maxLng,
        },
      },
      orderBy: [
        {
          rating: "desc",
        },
        {
          reviewCount: "desc",
        },
      ],
      take: Math.max(limit * 3, limit),
    });

    return cachedPlaces
      .map((place) => this.toNearbyGym(place))
      .filter((place) => {
        if (place.latitude === null || place.longitude === null) {
          return false;
        }

        return calculateDistanceMeters(query.lat, query.lng, place.latitude, place.longitude) <= query.radius;
      })
      .sort((first, second) => {
        const firstDistance =
          first.latitude === null || first.longitude === null
            ? Number.POSITIVE_INFINITY
            : calculateDistanceMeters(query.lat, query.lng, first.latitude, first.longitude);
        const secondDistance =
          second.latitude === null || second.longitude === null
            ? Number.POSITIVE_INFINITY
            : calculateDistanceMeters(query.lat, query.lng, second.latitude, second.longitude);

        return firstDistance - secondDistance;
      })
      .slice(0, limit);
  }

  private async upsertDiscoveredGyms(items: NearbyGym[]) {
    const expiresAt = new Date(Date.now() + cacheTtlDays * millisecondsPerDay);
    const now = new Date();

    await Promise.all(
      items.map(async (item) => {
        const existing = await this.prisma.discoveredGymPlace.findUnique({
          where: {
            provider_placeId: {
              provider: googleProvider,
              placeId: item.placeId,
            },
          },
        });
        const matchedGym = await this.findMatchingGym(item);
        const manuallyResolved = existing?.hiddenAt || ["CLAIMED", "DUPLICATE", "HIDDEN"].includes(existing?.status ?? "");
        const nextStatus = manuallyResolved ? existing?.status : matchedGym ? matchedStatus : discoveredStatus;
        const nextMatchedGymId = existing?.matchedGymId ?? matchedGym?.id;

        return this.prisma.discoveredGymPlace.upsert({
          where: {
            provider_placeId: {
              provider: googleProvider,
              placeId: item.placeId,
            },
          },
          create: {
            provider: googleProvider,
            placeId: item.placeId,
            name: item.name,
            address: item.address,
            city: inferCityFromAddress(item.address),
            latitude: item.latitude,
            longitude: item.longitude,
            rating: item.rating,
            reviewCount: item.reviewCount,
            openNow: item.openNow,
            types: item.types,
            matchedGymId: nextMatchedGymId,
            status: nextStatus ?? discoveredStatus,
            lastFetchedAt: now,
            expiresAt,
          },
          update: {
            name: item.name,
            address: item.address,
            city: inferCityFromAddress(item.address),
            latitude: item.latitude,
            longitude: item.longitude,
            rating: item.rating,
            reviewCount: item.reviewCount,
            openNow: item.openNow,
            types: item.types,
            matchedGymId: nextMatchedGymId,
            status: nextStatus,
            hiddenAt: manuallyResolved ? existing?.hiddenAt : matchedGym ? null : undefined,
            lastFetchedAt: now,
            expiresAt,
          },
        });
      }),
    );
  }

  private async findMatchingGym(item: NearbyGym) {
    const normalizedItemName = normalizeName(item.name);
    const candidates = await this.prisma.gym.findMany({
      where: {
        status: {
          in: ["ACTIVE", "DRAFT"],
        },
        city: {
          equals: "Luanda",
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        name: true,
        latitude: true,
        longitude: true,
      },
      take: 500,
    });

    return (
      candidates.find((gym) => normalizeName(gym.name) === normalizedItemName) ??
      candidates.find((gym) => {
        if (
          item.latitude === null ||
          item.longitude === null ||
          gym.latitude === null ||
          gym.longitude === null
        ) {
          return false;
        }

        const closeEnough = calculateDistanceMeters(item.latitude, item.longitude, Number(gym.latitude), Number(gym.longitude)) <= 150;
        const nameSimilar =
          normalizeName(gym.name).includes(normalizedItemName) ||
          normalizedItemName.includes(normalizeName(gym.name));

        return closeEnough && nameSimilar;
      }) ??
      null
    );
  }

  private async createUniqueGymSlug(name: string) {
    const baseSlug = slugify(name) || "ginasio";
    let slug = baseSlug;
    let suffix = 2;

    while (await this.prisma.gym.findUnique({ where: { slug }, select: { id: true } })) {
      slug = `${baseSlug}-${suffix}`;
      suffix += 1;
    }

    return slug;
  }

  private async upsertDiscoverySearch(query: ListNearbyGymsQueryDto, cacheKey: string, resultCount: number) {
    const expiresAt = new Date(Date.now() + cacheTtlDays * millisecondsPerDay);

    await this.prisma.placeDiscoverySearch.upsert({
      where: {
        provider_cacheKey: {
          provider: googleProvider,
          cacheKey,
        },
      },
      create: {
        provider: googleProvider,
        cacheKey,
        latitude: query.lat,
        longitude: query.lng,
        radiusMeters: query.radius,
        limit: query.limit,
        resultCount,
        expiresAt,
      },
      update: {
        latitude: query.lat,
        longitude: query.lng,
        radiusMeters: query.radius,
        limit: query.limit,
        resultCount,
        expiresAt,
      },
    });
  }

  private async deleteExpiredDiscoveryCache() {
    const now = new Date();

    await this.prisma.$transaction([
      this.prisma.placeDiscoverySearch.deleteMany({
        where: {
          provider: googleProvider,
          expiresAt: {
            lt: now,
          },
        },
      }),
      this.prisma.discoveredGymPlace.deleteMany({
        where: {
          provider: googleProvider,
          matchedGymId: null,
          expiresAt: {
            lt: now,
          },
        },
      }),
    ]);
  }

  private toNearbyGym(place: CachedDiscoveredGymPlace): NearbyGym {
    return {
      source: "google",
      placeId: place.placeId,
      name: place.name,
      address: place.address ?? "Endereco nao disponivel",
      rating: place.rating,
      reviewCount: place.reviewCount,
      openNow: place.openNow,
      latitude: place.latitude === null ? null : Number(place.latitude),
      longitude: place.longitude === null ? null : Number(place.longitude),
      types: normalizeTypes(place.types),
      isPartner: false,
    };
  }
}

function calculateBounds(lat: number, lng: number, radiusMeters: number) {
  const latDelta = radiusMeters / 111_320;
  const lngDelta = radiusMeters / (111_320 * Math.cos((lat * Math.PI) / 180) || 1);

  return {
    minLat: lat - latDelta,
    maxLat: lat + latDelta,
    minLng: lng - lngDelta,
    maxLng: lng + lngDelta,
  };
}

function calculateDistanceMeters(firstLat: number, firstLng: number, secondLat: number, secondLng: number) {
  const earthRadiusMeters = 6_371_000;
  const latDistance = toRadians(secondLat - firstLat);
  const lngDistance = toRadians(secondLng - firstLng);
  const firstLatRadians = toRadians(firstLat);
  const secondLatRadians = toRadians(secondLat);
  const haversine =
    Math.sin(latDistance / 2) * Math.sin(latDistance / 2) +
    Math.cos(firstLatRadians) *
      Math.cos(secondLatRadians) *
      Math.sin(lngDistance / 2) *
      Math.sin(lngDistance / 2);

  return earthRadiusMeters * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

function normalizeTypes(value: Prisma.JsonValue | null): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string");
}

function inferCityFromAddress(address: string) {
  const normalizedAddress = address.toLowerCase();

  if (normalizedAddress.includes("luanda") || normalizedAddress.includes("angola")) {
    return "Luanda";
  }

  return null;
}

function createSearchCacheKey(query: ListNearbyGymsQueryDto) {
  const roundedLat = query.lat.toFixed(3);
  const roundedLng = query.lng.toFixed(3);
  const roundedRadius = Math.round(query.radius / 1000) * 1000;

  return `${roundedLat}:${roundedLng}:${roundedRadius}:${getLimit(query)}`;
}

function getLimit(query: ListNearbyGymsQueryDto) {
  return query.limit ?? defaultLimit;
}

function toNearbyGymsQuery(input: { lat: number; limit: number; lng: number; radius: number }): ListNearbyGymsQueryDto {
  const query = new ListNearbyGymsQueryDto();
  query.lat = input.lat;
  query.lng = input.lng;
  query.radius = input.radius;
  query.limit = input.limit;
  return query;
}

function uniqueNearbyGyms(items: NearbyGym[]) {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = item.placeId || normalizeName(item.name);

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function normalizeName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function slugify(value: string) {
  return normalizeName(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
