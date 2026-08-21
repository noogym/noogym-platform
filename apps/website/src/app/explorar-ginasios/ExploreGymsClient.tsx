"use client";

import Link from "next/link";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { BadgeCheck, ExternalLink, Grid2X2, LayoutList, Loader2, MapPin, Navigation, Star, Table2, X } from "lucide-react";
import { gyms, type Gym } from "@/data/gyms";
import { GymCard } from "@/components/gyms/GymCard";
import { defaultGymFilters, GymFilters, type GymFiltersState, type GymSortOption, type PriceRangeFilter } from "@/components/gyms/GymFilters";
import { GymMap, type GoogleMapGymPlace } from "@/components/gyms/GymMap";
import { Button } from "@/components/ui/Button";
import { cn, formatKz } from "@/lib/utils";

type GoogleNearbyGym = {
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

type GoogleNearbyGymResponse = {
  items: GoogleNearbyGym[];
  meta: {
    configured: boolean;
    message?: string;
  };
};

type MapSearchCenter = {
  lat: number;
  lng: number;
};

type GymListView = "compacto" | "cards" | "tabela";

const googleGymPlaceholderImage = "";
const locationCoordinates: Record<string, { lat: number; lng: number }> = {
  "Luanda, Angola": { lat: -8.839988, lng: 13.289437 },
  Maianga: { lat: -8.8328, lng: 13.2425 },
  Talatona: { lat: -8.9187, lng: 13.1849 },
  Ingombota: { lat: -8.8131, lng: 13.2359 },
  Miramar: { lat: -8.8117, lng: 13.2416 },
  Benfica: { lat: -8.9825, lng: 13.1877 },
  Kilamba: { lat: -8.9997, lng: 13.2804 },
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function gymDistance(gym: Gym) {
  if (gym.distance === "Maps" || gym.distance === "Google Maps") return 0;
  return Number(gym.distance.replace(",", ".").replace(/[^\d.]/g, ""));
}

function gymSortDistance(gym: Gym) {
  if (gym.distance === "Maps" || gym.distance === "Google Maps") return Number.MAX_SAFE_INTEGER;
  return gymDistance(gym);
}

function matchesType(gym: Gym, type: string) {
  if (type === "Todos") return true;

  if (type === "Yoga/Pilates") {
    const tags = gym.tags.map(normalizeText);
    return tags.includes("yoga") || tags.includes("pilates");
  }

  return gym.tags.some((tag) => normalizeText(tag) === normalizeText(type));
}

function matchesPrice(gym: Gym, priceRange: PriceRangeFilter) {
  if (priceRange === "Todos") return true;
  if (priceRange === "Até Kz 20.000") return gym.price <= 20000;
  if (priceRange === "Kz 20.000 - 35.000") return gym.price > 20000 && gym.price <= 35000;
  return gym.price > 35000;
}

function matchesLocation(gym: Gym, location: string) {
  if (location === "Luanda, Angola") return true;
  return normalizeText(gym.location).includes(normalizeText(location));
}

function matchesResources(gym: Gym, resources: string[]) {
  if (!resources.length) return true;

  const searchableFeatures = gym.features.map(normalizeText);
  return resources.every((resource) => searchableFeatures.includes(normalizeText(resource)));
}

function matchesSource(gym: Gym, source: GymFiltersState["source"]) {
  if (source === "Todos") return true;
  if (source === "Parceiros Noogym") return gym.isPartner !== false;
  return gym.isPartner === false;
}

function filterGyms(query: string, filters: GymFiltersState, sourceGyms: Gym[], favoriteSlugs: string[]) {
  const normalizedQuery = normalizeText(query.trim());
  const favorites = new Set(favoriteSlugs);

  return sourceGyms.filter((gym) => {
    const searchable = normalizeText(`${gym.name} ${gym.location} ${gym.tags.join(" ")} ${gym.features.join(" ")}`);
    const queryOk = !normalizedQuery || searchable.includes(normalizedQuery);

    return (
      queryOk &&
      matchesLocation(gym, filters.location) &&
      gymDistance(gym) <= filters.radius &&
      matchesType(gym, filters.type) &&
      matchesPrice(gym, filters.priceRange) &&
      matchesResources(gym, filters.resources) &&
      matchesSource(gym, filters.source) &&
      (!filters.openNow || gym.openNow === true) &&
      (!filters.hasPhoto || gym.isPartner !== false || gym.hasPhoto || Boolean(gym.photoUrl)) &&
      (!filters.minRating || gym.rating >= 4.6) &&
      (!filters.favoritesOnly || favorites.has(gym.slug))
    );
  });
}

function sortGyms(sourceGyms: Gym[], sort: GymSortOption) {
  return [...sourceGyms].sort((first, second) => {
    if (sort === "Mais perto") return gymSortDistance(first) - gymSortDistance(second);
    if (sort === "Melhor avaliação") return second.rating - first.rating || second.reviews - first.reviews;
    if (sort === "Menor preço") return (first.price || Number.MAX_SAFE_INTEGER) - (second.price || Number.MAX_SAFE_INTEGER);
    if (sort === "Mais avaliações") return second.reviews - first.reviews;
    if (sort === "Parceiros primeiro") return Number(second.isPartner !== false) - Number(first.isPartner !== false);

    return (
      Number(second.isPartner !== false) - Number(first.isPartner !== false) ||
      second.rating - first.rating ||
      gymSortDistance(first) - gymSortDistance(second)
    );
  });
}

function directionsUrl(gym: Gym) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${gym.name}, ${gym.location}, Angola`)}`;
}

function detailsUrl(gym: Gym) {
  return gym.isPartner === false
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${gym.name}, ${gym.location}`)}`
    : `/explorar-ginasios/${gym.slug}`;
}

function slugFromGooglePlace(placeId: string) {
  return `google-${placeId.replace(/[^a-zA-Z0-9]/g, "").slice(0, 28)}`;
}

function googleTypesToTags(types: string[]) {
  const mapped = types
    .filter((type) => ["gym", "health", "point_of_interest", "establishment"].includes(type))
    .map((type) => {
      if (type === "gym") return "Ginásio";
      if (type === "health") return "Fitness";
      return "Google Maps";
    });

  return Array.from(new Set(mapped)).slice(0, 4);
}

function toGoogleGym(place: GoogleNearbyGym): Gym {
  return {
    source: "google",
    placeId: place.placeId,
    slug: slugFromGooglePlace(place.placeId),
    name: place.name,
    rating: place.rating ?? 0,
    reviews: place.reviewCount,
    location: place.address,
    distance: "Maps",
    price: 0,
    image: googleGymPlaceholderImage,
    hasPhoto: false,
    tags: googleTypesToTags(place.types),
    features: [
      "Google Maps",
      place.openNow === true ? "Aberto agora" : place.openNow === false ? "Fechado agora" : "Horário indisponível",
      "Rotas disponíveis",
    ],
    hours: [
      {
        day: "Estado",
        time: place.openNow === true ? "Aberto agora" : place.openNow === false ? "Fechado agora" : "Consultar no Google Maps",
      },
    ],
    address: place.address,
    latitude: place.latitude,
    longitude: place.longitude,
    openNow: place.openNow,
    isPartner: false,
  };
}

function splitWeekdayText(text: string) {
  const separatorIndex = text.indexOf(":");
  if (separatorIndex === -1) return { day: "Horário", time: text };

  return {
    day: text.slice(0, separatorIndex),
    time: text.slice(separatorIndex + 1).trim(),
  };
}

function gymFromMapPlace(place: GoogleMapGymPlace): Gym {
  return {
    source: "google",
    placeId: place.placeId,
    slug: slugFromGooglePlace(place.placeId),
    name: place.name,
    rating: place.rating,
    reviews: place.reviews,
    location: place.address,
    distance: "Google Maps",
    price: 0,
    image: googleGymPlaceholderImage,
    photoUrl: place.image,
    hasPhoto: Boolean(place.image),
    tags: googleTypesToTags(place.types),
    features: [
      "Google Maps",
      place.openNow === true ? "Aberto agora" : place.openNow === false ? "Fechado agora" : "Horário indisponível",
      place.phone ? "Telefone disponível" : "Contacto indisponível",
      place.website ? "Site disponível" : "Site indisponível",
    ],
    hours: place.weekdayText?.length ? place.weekdayText.map(splitWeekdayText) : [{ day: "Estado", time: place.openNow === true ? "Aberto agora" : place.openNow === false ? "Fechado agora" : "Consultar no Google Maps" }],
    address: place.address,
    latitude: place.latitude,
    longitude: place.longitude,
    openNow: place.openNow,
    phone: place.phone,
    isPartner: false,
    website: place.website,
  };
}

function mergeGyms(partnerGyms: Gym[], googleGyms: Gym[], mapGyms: Gym[]) {
  const partnerNames = new Set(partnerGyms.map((gym) => normalizeText(gym.name)));
  const seenKeys = new Set(partnerGyms.map((gym) => normalizeText(gym.name)));
  const uniqueGoogleGyms = [...mapGyms, ...googleGyms].filter((gym) => {
    const key = gym.placeId ?? normalizeText(gym.name);
    const nameKey = normalizeText(gym.name);

    if (partnerNames.has(nameKey) || seenKeys.has(key) || seenKeys.has(nameKey)) {
      return false;
    }

    seenKeys.add(key);
    seenKeys.add(nameKey);
    return true;
  });

  return [
    ...partnerGyms.map((gym) => ({ ...gym, source: "noogym" as const, isPartner: true })),
    ...uniqueGoogleGyms,
  ];
}

function mergeUniqueGyms(currentGyms: Gym[], nextGyms: Gym[]) {
  const seen = new Set<string>();

  return [...nextGyms, ...currentGyms].filter((gym) => {
    const key = gym.placeId ?? normalizeText(gym.name);
    const nameKey = normalizeText(gym.name);

    if (seen.has(key) || seen.has(nameKey)) {
      return false;
    }

    seen.add(key);
    seen.add(nameKey);
    return true;
  });
}

function nearbySearchCenters(center: MapSearchCenter, radiusKm: number) {
  const offsetKm = Math.min(Math.max(radiusKm * 0.45, 2), 8);
  const latOffset = offsetKm / 111;
  const lngOffset = offsetKm / (111 * Math.max(Math.cos((center.lat * Math.PI) / 180), 0.2));

  return [
    center,
    { lat: center.lat + latOffset, lng: center.lng },
    { lat: center.lat - latOffset, lng: center.lng },
    { lat: center.lat, lng: center.lng + lngOffset },
    { lat: center.lat, lng: center.lng - lngOffset },
  ];
}

async function fetchNearbyGyms(center: MapSearchCenter, radiusMeters: number, signal?: AbortSignal) {
  const params = new URLSearchParams({
    lat: String(center.lat),
    lng: String(center.lng),
    radius: String(radiusMeters),
    limit: "20",
  });
  const response = await fetch(`/api/places/gyms?${params}`, { signal });

  if (!response.ok) {
    throw new Error("Failed to load Google gyms.");
  }

  const payload = (await response.json()) as GoogleNearbyGymResponse;
  return payload;
}

async function fetchDiscoveredLuandaGyms(signal?: AbortSignal) {
  const response = await fetch("/api/places/gyms/discovered-luanda?limit=120", { signal });

  if (!response.ok) {
    throw new Error("Failed to load discovered Luanda gyms.");
  }

  return (await response.json()) as GoogleNearbyGymResponse;
}

export function ExploreGymsClient() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<GymFiltersState>(defaultGymFilters);
  const [sort, setSort] = useState<GymSortOption>("Recomendados");
  const [googleGyms, setGoogleGyms] = useState<Gym[]>([]);
  const [googleStatus, setGoogleStatus] = useState<"idle" | "loading" | "ready" | "unconfigured" | "error">("idle");
  const [areaSearchStatus, setAreaSearchStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [areaSearchCount, setAreaSearchCount] = useState(0);
  const [mapGyms, setMapGyms] = useState<Gym[]>([]);
  const [selectedSlug, setSelectedSlug] = useState(gyms[0]?.slug ?? "");
  const [currentPage, setCurrentPage] = useState(1);
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>([]);
  const [compareSlugs, setCompareSlugs] = useState<string[]>([]);
  const [quickViewGym, setQuickViewGym] = useState<Gym | null>(null);
  const [mobileView, setMobileView] = useState<"lista" | "mapa">("lista");
  const [listView, setListView] = useState<GymListView>("compacto");
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const allGyms = useMemo(() => mergeGyms(gyms, googleGyms, mapGyms), [googleGyms, mapGyms]);
  const filtered = useMemo(() => sortGyms(filterGyms(query, filters, allGyms, favoriteSlugs), sort), [allGyms, favoriteSlugs, filters, query, sort]);
  const pageSize = listView === "cards" ? 6 : listView === "tabela" ? 15 : 12;
  const totalPages = Math.max(Math.ceil(filtered.length / pageSize), 1);
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const pageStart = (safeCurrentPage - 1) * pageSize;
  const visibleGyms = filtered.slice(pageStart, pageStart + pageSize);
  const visiblePartnerCount = filtered.filter((gym) => gym.isPartner !== false).length;
  const visibleGoogleCount = filtered.length - visiblePartnerCount;
  const selected = filtered.find((gym) => gym.slug === selectedSlug) ?? filtered[0];
  const compareGyms = compareSlugs
    .map((slug) => allGyms.find((gym) => gym.slug === slug))
    .filter((gym): gym is Gym => Boolean(gym));
  const mapStatusMessage = useMemo(() => {
    if (googleStatus === "loading") {
      return (
        <span className="inline-flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin text-limebrand" />
          A carregar ginásios reais do Google Maps...
        </span>
      );
    }

    if (googleStatus === "ready" && googleGyms.length) {
      return (
        <span>
          <span className="font-bold text-limebrand">{googleGyms.length}</span> resultados reais adicionados à descoberta.
        </span>
      );
    }

    if (googleStatus === "unconfigured") {
      return "Configure GOOGLE_MAPS_API_KEY na API para listar ginásios reais do Google Maps.";
    }

    if (googleStatus === "error") {
      return "Não foi possível carregar os ginásios do Google Maps agora. A listar parceiros Noogym.";
    }

    return null;
  }, [googleGyms.length, googleStatus]);

  useEffect(() => {
    const controller = new AbortController();
    const coordinates = locationCoordinates[filters.location] ?? locationCoordinates["Luanda, Angola"];

    async function loadGoogleGyms() {
      setGoogleStatus("loading");

      try {
        const [nearbyPayload, discoveredPayload] = await Promise.allSettled([
          fetchNearbyGyms(coordinates, filters.radius * 1000, controller.signal),
          fetchDiscoveredLuandaGyms(controller.signal),
        ]);
        const payload = nearbyPayload.status === "fulfilled" ? nearbyPayload.value : null;
        const discoveredItems = discoveredPayload.status === "fulfilled" ? discoveredPayload.value.items : [];

        if (!payload && discoveredPayload.status !== "fulfilled") {
          throw new Error("Failed to load Google gyms.");
        }

        if (payload && !payload.meta.configured) {
          setGoogleGyms([]);
          setGoogleStatus("unconfigured");
          return;
        }

        setGoogleGyms(mergeUniqueGyms(discoveredItems.map(toGoogleGym), payload?.items.map(toGoogleGym) ?? []));
        setGoogleStatus("ready");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setGoogleGyms([]);
        setGoogleStatus("error");
      }
    }

    void loadGoogleGyms();

    return () => controller.abort();
  }, [filters.location, filters.radius]);

  useEffect(() => {
    if (!filtered.length) return;
    if (!filtered.some((gym) => gym.slug === selectedSlug)) {
      setSelectedSlug(filtered[0].slug);
    }
  }, [filtered, selectedSlug]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, listView, query, sort]);

  useEffect(() => {
    if (currentPage <= totalPages) return;
    setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  useEffect(() => {
    const stored = window.localStorage.getItem("noogym.favoriteGyms");
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setFavoriteSlugs(parsed.filter((item): item is string => typeof item === "string"));
      }
    } catch {
      setFavoriteSlugs([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("noogym.favoriteGyms", JSON.stringify(favoriteSlugs));
  }, [favoriteSlugs]);

  useEffect(() => {
    const selectedCard = cardRefs.current[selectedSlug];
    if (!selectedCard) return;

    selectedCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [selectedSlug, safeCurrentPage, visibleGyms.length]);

  function selectGym(gym: Gym) {
    setSelectedSlug(gym.slug);
  }

  function selectGoogleMapPlace(place: GoogleMapGymPlace) {
    const gym = gymFromMapPlace(place);

    setQuery("");
    setFilters((current) => ({
      ...current,
      favoritesOnly: false,
      location: "Luanda, Angola",
      source: "Todos",
    }));
    setMapGyms((current) => {
      const withoutCurrent = current.filter((item) => item.slug !== gym.slug);
      return [gym, ...withoutCurrent].slice(0, 8);
    });
    setSelectedSlug(gym.slug);
    setMobileView("lista");
    setCurrentPage(1);
  }

  async function searchMapArea(center: MapSearchCenter) {
    setAreaSearchStatus("loading");

    try {
      const radiusMeters = Math.min(Math.max(filters.radius * 1000, 3000), 12000);
      const centers = nearbySearchCenters(center, radiusMeters / 1000);
      const payloads = await Promise.all(centers.map((item) => fetchNearbyGyms(item, radiusMeters)));

      if (payloads.some((payload) => !payload.meta.configured)) {
        setGoogleStatus("unconfigured");
        setAreaSearchStatus("error");
        return;
      }

      const nextGyms = payloads.flatMap((payload) => payload.items.map(toGoogleGym));

      setGoogleGyms((current) => {
        const merged = mergeUniqueGyms(current, nextGyms);
        setAreaSearchCount(Math.max(merged.length - current.length, 0));
        return merged;
      });
      setQuery("");
      setFilters((current) => ({
        ...current,
        favoritesOnly: false,
        location: "Luanda, Angola",
        source: "Todos",
      }));
      setGoogleStatus("ready");
      setAreaSearchStatus("ready");
      setCurrentPage(1);
      setMobileView("lista");
    } catch {
      setAreaSearchStatus("error");
    }
  }

  function toggleFavorite(gym: Gym) {
    setFavoriteSlugs((current) => (
      current.includes(gym.slug) ? current.filter((slug) => slug !== gym.slug) : [...current, gym.slug]
    ));
  }

  function toggleCompare(gym: Gym) {
    setCompareSlugs((current) => {
      if (current.includes(gym.slug)) {
        return current.filter((slug) => slug !== gym.slug);
      }

      if (current.length >= 3) return current;
      return [...current, gym.slug];
    });
  }

  function resetDiscovery() {
    setQuery("");
    setFilters(defaultGymFilters);
    setSort("Recomendados");
  }

  return (
    <section className="container-page py-10">
      <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">Explore <span className="text-limebrand">ginásios</span> perto de você</h1>
      <p className="mt-3 text-base leading-7 text-white/64 sm:text-lg">Treine em qualquer ginásio parceiro da rede Noogym.</p>

      <div className="mt-6 grid grid-cols-2 gap-2 rounded-lg border border-white/10 bg-white/[0.025] p-1 lg:hidden">
        {(["lista", "mapa"] as const).map((view) => (
          <button
            key={view}
            className={cn("h-10 rounded-md text-sm font-black capitalize transition", mobileView === view ? "bg-limebrand text-black" : "text-white/68")}
            onClick={() => setMobileView(view)}
            type="button"
          >
            {view}
          </button>
        ))}
      </div>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[330px_1fr]">
        <div className={cn(mobileView === "mapa" && "hidden lg:block")}>
          <GymFilters
            filters={filters}
            query={query}
            resultCount={filtered.length}
            setFilters={setFilters}
            setQuery={setQuery}
            setSort={setSort}
            sort={sort}
          />
        </div>
        <div className={cn(mobileView === "lista" && "hidden lg:block")}>
          <GymMap
            gyms={filtered}
            onGooglePlaceSelect={selectGoogleMapPlace}
            onSearchArea={searchMapArea}
            onSelectGym={selectGym}
            searchAreaLoading={areaSearchStatus === "loading"}
            selectedGym={selected}
            statusMessage={mapStatusMessage}
          />
        </div>
      </div>

      {compareGyms.length ? (
        <ComparisonPanel gyms={compareGyms} onClear={() => setCompareSlugs([])} onRemove={(gym) => toggleCompare(gym)} />
      ) : null}

      <div className={cn("mt-5 grid gap-6 lg:grid-cols-[360px_1fr]", mobileView === "mapa" && "hidden lg:grid")}>
        {selected ? (
          <aside className="glass h-max rounded-lg p-5 lg:sticky lg:top-24">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-limebrand">Ginásio selecionado</p>
                <h2 className="mt-2 text-2xl font-bold">{selected.name}</h2>
              </div>
              <span className="rounded-full border border-limebrand/35 bg-limebrand/10 px-3 py-1 text-xs font-black text-limebrand">
                Ativo
              </span>
            </div>
            <p className="mt-2 text-sm text-white/56">{selected.rating} ★ ({selected.reviews} avaliações)</p>
            <p className="mt-2 text-sm text-limebrand">{selected.isPartner === false ? "Encontrado no Google Maps" : "Parceiro verificado"}</p>
            <p className="mt-5 text-sm leading-6 text-white/62">Espaço moderno, equipamentos de última geração e uma equipe pronta para te ajudar.</p>
            {selected.phone || selected.website ? (
              <div className="mt-4 grid gap-2 text-sm text-white/62">
                {selected.phone ? <p>{selected.phone}</p> : null}
                {selected.website ? (
                  <a className="truncate font-bold text-limebrand" href={selected.website} rel="noreferrer" target="_blank">
                    {selected.website.replace(/^https?:\/\//, "")}
                  </a>
                ) : null}
              </div>
            ) : null}
            <div className="mt-5 grid grid-cols-2 gap-3 text-center text-xs text-white/60">
              {selected.features.slice(0, 6).map((feature) => <div key={feature} className="rounded-md border border-white/10 bg-white/[0.03] p-3">{feature}</div>)}
            </div>
            <div className="mt-6 border-t border-white/10 pt-5">
              <h3 className="font-bold">Horário de funcionamento</h3>
              {selected.hours.map((hour) => <p key={hour.day} className="mt-2 flex justify-between text-sm text-white/60"><span>{hour.day}</span><span>{hour.time}</span></p>)}
            </div>
            <div className="mt-6 rounded-lg border border-white/10 bg-limebrand/8 p-5">
              {selected.isPartner === false ? (
                <>
                  <p className="text-sm text-white/58">Este ginásio ainda não é parceiro Noogym.</p>
                  <p className="mt-2 text-lg font-black text-limebrand">Dados via Google Maps</p>
                  <Button href="/para-ginasios#agendar-demonstracao" variant="secondary" className="mt-5 w-full">Sugerir parceria</Button>
                </>
              ) : (
                <>
                  <p className="text-sm text-white/58">Plano Noogym a partir de</p>
                  <p className="text-3xl font-black text-limebrand">{formatKz(selected.price)}<span className="text-sm">/mês</span></p>
                  <Button href={`/planos?gym=${encodeURIComponent(selected.slug)}`} className="mt-5 w-full">Selecionar este ginásio</Button>
                  <Button href={`/planos?gym=${encodeURIComponent(selected.slug)}#comparar`} variant="secondary" className="mt-3 w-full">Ver planos disponíveis</Button>
                </>
              )}
              <Link
                className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/14 text-sm font-black text-white/78 transition hover:border-limebrand hover:text-limebrand"
                href={directionsUrl(selected)}
                rel="noreferrer"
                target="_blank"
              >
                <Navigation className="h-4 w-4" />
                Como chegar
              </Link>
            </div>
          </aside>
        ) : (
          <aside className="glass h-max rounded-lg p-5 lg:sticky lg:top-24">
            <h2 className="text-2xl font-bold">Sem seleção</h2>
            <p className="mt-3 text-sm leading-6 text-white/62">
              Ajuste os filtros para encontrar ginásios disponíveis na rede Noogym.
            </p>
            <Button className="mt-5 w-full" onClick={resetDiscovery}>
              Limpar filtros
            </Button>
          </aside>
        )}

        <div className="grid gap-4">
          <ListViewSwitcher listView={listView} setListView={setListView} total={filtered.length} />

          {mapGyms.length ? (
            <div className="rounded-lg border border-limebrand/24 bg-limebrand/[0.055] p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-limebrand">Encontrado no Google Maps</p>
                  <h2 className="mt-1 text-lg font-black">{mapGyms[0].name}</h2>
                  <p className="mt-1 text-sm text-white/58">Clique no mapa para trazer ginásios que ainda não estão cadastrados no site.</p>
                </div>
                <Button size="sm" variant="secondary" onClick={() => setQuickViewGym(mapGyms[0])}>
                  Ver resumo
                </Button>
              </div>
            </div>
          ) : null}

          {areaSearchStatus === "ready" ? (
            <div className="rounded-lg border border-white/12 bg-white/[0.035] p-4 text-sm text-white/68">
              <span className="font-black text-limebrand">{areaSearchCount}</span>{" "}
              {areaSearchCount === 1 ? "novo ginásio encontrado" : "novos ginásios encontrados"} nesta área do mapa.
            </div>
          ) : null}

          {areaSearchStatus === "error" ? (
            <div className="rounded-lg border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100">
              Não foi possível pesquisar esta área agora. Tenta novamente em alguns segundos.
            </div>
          ) : null}

          {filtered.length ? (
            <GymResults
              cardRefs={cardRefs}
              compareSlugs={compareSlugs}
              favoriteSlugs={favoriteSlugs}
              listView={listView}
              onQuickView={setQuickViewGym}
              onSelect={selectGym}
              onToggleCompare={toggleCompare}
              onToggleFavorite={toggleFavorite}
              selectedSlug={selected?.slug}
              visibleGoogleCount={visibleGoogleCount}
              visibleGyms={visibleGyms}
              visiblePartnerCount={visiblePartnerCount}
            />
          ) : (
            <div className="rounded-lg border border-white/12 bg-white/[0.035] p-8 text-center">
              <h2 className="text-2xl font-black">Nenhum ginásio encontrado</h2>
              <p className="mx-auto mt-3 max-w-md text-white/58">
                Ajuste a busca, aumente o raio ou limpe os filtros para ver mais opções.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Button size="sm" onClick={() => setFilters({ ...filters, radius: Math.min(filters.radius + 10, 30) })}>
                  Aumentar raio
                </Button>
                <Button size="sm" variant="secondary" onClick={resetDiscovery}>
                  Mostrar Luanda
                </Button>
              </div>
            </div>
          )}
          {filtered.length ? (
            <PaginationControls
              currentPage={safeCurrentPage}
              onPageChange={setCurrentPage}
              pageSize={pageSize}
              totalItems={filtered.length}
              totalPages={totalPages}
            />
          ) : null}
        </div>
      </div>

      {quickViewGym ? <QuickDetailsModal gym={quickViewGym} onClose={() => setQuickViewGym(null)} /> : null}
    </section>
  );
}

function ComparisonPanel({ gyms, onClear, onRemove }: { gyms: Gym[]; onClear: () => void; onRemove: (gym: Gym) => void }) {
  return (
    <section className="mt-5 rounded-lg border border-white/12 bg-white/[0.035] p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-limebrand">Comparação</p>
          <h2 className="mt-1 text-xl font-black">Compare até 3 ginásios</h2>
        </div>
        <Button size="sm" variant="ghost" onClick={onClear}>
          Limpar
        </Button>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-[620px] w-full text-left text-sm">
          <thead className="text-white/54">
            <tr>
              <th className="py-3 font-medium">Ginásio</th>
              <th className="py-3 font-medium">Fonte</th>
              <th className="py-3 font-medium">Avaliação</th>
              <th className="py-3 font-medium">Distância</th>
              <th className="py-3 font-medium">Preço</th>
              <th className="py-3 font-medium">Estado</th>
              <th className="py-3" />
            </tr>
          </thead>
          <tbody>
            {gyms.map((gym) => (
              <tr key={gym.slug} className="border-t border-white/8">
                <td className="py-3 font-bold">{gym.name}</td>
                <td className="py-3 text-white/62">{gym.isPartner === false ? "Google Maps" : "Noogym"}</td>
                <td className="py-3 text-white/62">{gym.rating} ({gym.reviews})</td>
                <td className="py-3 text-white/62">{gym.distance}</td>
                <td className="py-3 text-limebrand">{gym.price ? formatKz(gym.price) : "N/D"}</td>
                <td className="py-3 text-white/62">{gym.openNow === true ? "Aberto" : gym.openNow === false ? "Fechado" : "Consultar"}</td>
                <td className="py-3 text-right">
                  <button className="text-xs font-bold text-white/58 hover:text-limebrand" onClick={() => onRemove(gym)} type="button">
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ListViewSwitcher({ listView, setListView, total }: { listView: GymListView; setListView: (view: GymListView) => void; total: number }) {
  const views: Array<{ icon: React.ElementType; label: string; value: GymListView }> = [
    { icon: LayoutList, label: "Compacto", value: "compacto" },
    { icon: Grid2X2, label: "Cards", value: "cards" },
    { icon: Table2, label: "Tabela", value: "tabela" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-2">
      <p className="px-2 text-sm text-white/58">
        <span className="font-black text-limebrand">{total}</span> resultados
      </p>
      <div className="grid grid-cols-3 gap-1 rounded-md border border-white/10 bg-black/20 p-1">
        {views.map(({ icon: Icon, label, value }) => (
          <button
            key={value}
            className={cn(
              "inline-flex h-9 items-center justify-center gap-2 rounded-md px-3 text-xs font-black transition",
              listView === value ? "bg-limebrand text-black" : "text-white/62 hover:text-white",
            )}
            onClick={() => setListView(value)}
            type="button"
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function PaginationControls({
  currentPage,
  onPageChange,
  pageSize,
  totalItems,
  totalPages,
}: {
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}) {
  const startItem = totalItems ? (currentPage - 1) * pageSize + 1 : 0;
  const endItem = Math.min(currentPage * pageSize, totalItems);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1).filter((page) => (
    page === 1 || page === totalPages || Math.abs(page - currentPage) <= 1
  ));

  function changePage(page: number) {
    onPageChange(Math.min(Math.max(page, 1), totalPages));
  }

  return (
    <nav className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-3" aria-label="Paginação de ginásios">
      <p className="text-sm text-white/58">
        A mostrar <span className="font-black text-white">{startItem}-{endItem}</span> de{" "}
        <span className="font-black text-limebrand">{totalItems}</span>
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <button
          className="h-9 rounded-md border border-white/12 px-3 text-xs font-black text-white/70 transition hover:border-limebrand hover:text-limebrand disabled:opacity-40"
          disabled={currentPage <= 1}
          onClick={() => changePage(currentPage - 1)}
          type="button"
        >
          Anterior
        </button>
        {pages.map((page, index) => {
          const previousPage = pages[index - 1];
          const showGap = previousPage !== undefined && page - previousPage > 1;

          return (
            <span key={page} className="inline-flex items-center gap-2">
              {showGap ? <span className="text-xs text-white/40">...</span> : null}
              <button
                aria-current={page === currentPage ? "page" : undefined}
                className={cn(
                  "h-9 min-w-9 rounded-md border px-3 text-xs font-black transition",
                  page === currentPage
                    ? "border-limebrand bg-limebrand text-black"
                    : "border-white/12 text-white/70 hover:border-limebrand hover:text-limebrand",
                )}
                onClick={() => changePage(page)}
                type="button"
              >
                {page}
              </button>
            </span>
          );
        })}
        <button
          className="h-9 rounded-md border border-white/12 px-3 text-xs font-black text-white/70 transition hover:border-limebrand hover:text-limebrand disabled:opacity-40"
          disabled={currentPage >= totalPages}
          onClick={() => changePage(currentPage + 1)}
          type="button"
        >
          Próxima
        </button>
      </div>
    </nav>
  );
}

function GymResults({
  cardRefs,
  compareSlugs,
  favoriteSlugs,
  listView,
  onQuickView,
  onSelect,
  onToggleCompare,
  onToggleFavorite,
  selectedSlug,
  visibleGoogleCount,
  visibleGyms,
  visiblePartnerCount,
}: {
  cardRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  compareSlugs: string[];
  favoriteSlugs: string[];
  listView: GymListView;
  onQuickView: (gym: Gym) => void;
  onSelect: (gym: Gym) => void;
  onToggleCompare: (gym: Gym) => void;
  onToggleFavorite: (gym: Gym) => void;
  selectedSlug?: string;
  visibleGoogleCount: number;
  visibleGyms: Gym[];
  visiblePartnerCount: number;
}) {
  if (listView === "tabela") {
    return (
      <>
        <ListSectionHeader description="Comparação densa para grandes volumes." hidden={false} title="Tabela de ginásios" count={visibleGyms.length} />
        <GymTable
          compareSlugs={compareSlugs}
          favoriteSlugs={favoriteSlugs}
          gyms={visibleGyms}
          onQuickView={onQuickView}
          onSelect={onSelect}
          onToggleCompare={onToggleCompare}
          onToggleFavorite={onToggleFavorite}
          selectedSlug={selectedSlug}
        />
      </>
    );
  }

  return (
    <>
      <ListSectionHeader
        description={listView === "compacto" ? "Linhas densas para explorar muitos resultados rapidamente." : "Fotos, planos e detalhes geridos pela Noogym."}
        hidden={!visiblePartnerCount}
        title="Parceiros Noogym"
        count={visiblePartnerCount}
      />
      {visibleGyms.map((gym, index) => {
        const shouldShowGoogleHeader = gym.isPartner === false && (index === 0 || visibleGyms[index - 1]?.isPartner !== false);

        return (
          <div
            key={gym.slug}
            ref={(element) => {
              cardRefs.current[gym.slug] = element;
            }}
          >
            {shouldShowGoogleHeader ? (
              <ListSectionHeader
                description="Dados externos do Google Maps. Fotos aparecem apenas quando disponíveis."
                hidden={!visibleGoogleCount}
                title="Encontrados no Google Maps"
                count={visibleGoogleCount}
              />
            ) : null}
            {listView === "compacto" ? (
              <CompactGymRow
                compareDisabled={compareSlugs.length >= 3 && !compareSlugs.includes(gym.slug)}
                compareSelected={compareSlugs.includes(gym.slug)}
                favorite={favoriteSlugs.includes(gym.slug)}
                gym={gym}
                onQuickView={onQuickView}
                onSelect={onSelect}
                onToggleCompare={onToggleCompare}
                onToggleFavorite={onToggleFavorite}
                selected={selectedSlug === gym.slug}
              />
            ) : (
              <GymCard
                compareDisabled={compareSlugs.length >= 3 && !compareSlugs.includes(gym.slug)}
                compareSelected={compareSlugs.includes(gym.slug)}
                favorite={favoriteSlugs.includes(gym.slug)}
                gym={gym}
                onQuickView={onQuickView}
                onSelect={onSelect}
                onToggleCompare={onToggleCompare}
                onToggleFavorite={onToggleFavorite}
                selected={selectedSlug === gym.slug}
              />
            )}
          </div>
        );
      })}
    </>
  );
}

function ListSectionHeader({ count, description, hidden, title }: { count: number; description: string; hidden: boolean; title: string }) {
  if (hidden) return null;

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.025] px-4 py-3">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-lg font-black">{title}</h2>
          <p className="mt-1 text-sm text-white/54">{description}</p>
        </div>
        <span className="rounded-full border border-limebrand/30 bg-limebrand/10 px-3 py-1 text-xs font-black text-limebrand">
          {count}
        </span>
      </div>
    </div>
  );
}

function CompactGymRow({
  compareDisabled,
  compareSelected,
  favorite,
  gym,
  onQuickView,
  onSelect,
  onToggleCompare,
  onToggleFavorite,
  selected,
}: {
  compareDisabled: boolean;
  compareSelected: boolean;
  favorite: boolean;
  gym: Gym;
  onQuickView: (gym: Gym) => void;
  onSelect: (gym: Gym) => void;
  onToggleCompare: (gym: Gym) => void;
  onToggleFavorite: (gym: Gym) => void;
  selected: boolean;
}) {
  const isPartner = gym.isPartner !== false;

  return (
    <article
      aria-current={selected ? "true" : undefined}
      className={cn(
        "grid cursor-pointer gap-3 rounded-lg border bg-white/[0.035] p-3 transition hover:border-limebrand/45 sm:grid-cols-[88px_1fr]",
        selected ? "border-limebrand/70 bg-limebrand/[0.055]" : "border-white/12",
      )}
      onClick={() => onSelect(gym)}
    >
      <CompactGymMedia gym={gym} />
      <div className="min-w-0">
        <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <h3 className="min-w-0 break-words text-base font-black">{gym.name}</h3>
              <VerificationPill isPartner={isPartner} />
            </div>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/58">
              <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" /> {gym.rating || "N/D"} ({gym.reviews})</span>
              <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {gym.location}</span>
              <span>{isPartner ? `A partir de ${formatKz(gym.price)}` : "Google Maps"}</span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {gym.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full bg-white/8 px-2 py-0.5 text-[11px] text-white/62">{tag}</span>
              ))}
            </div>
          </div>
          <button
            aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            className={cn("grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/10 text-white/60 hover:border-limebrand hover:text-limebrand", favorite && "border-limebrand/40 text-limebrand")}
            onClick={(event) => {
              event.stopPropagation();
              onToggleFavorite(gym);
            }}
            type="button"
          >
            <Star className={cn("h-4 w-4", favorite && "fill-current")} />
          </button>
        </div>
        <div className="mt-3 flex flex-wrap justify-end gap-2">
          <SmallActionButton onClick={(event) => { event.stopPropagation(); onSelect(gym); }}>
            Selecionar
          </SmallActionButton>
          <SmallActionButton onClick={(event) => { event.stopPropagation(); onQuickView(gym); }}>
            Detalhes
          </SmallActionButton>
          <SmallActionButton disabled={compareDisabled && !compareSelected} active={compareSelected} onClick={(event) => { event.stopPropagation(); onToggleCompare(gym); }}>
            {compareSelected ? "Comparando" : "Comparar"}
          </SmallActionButton>
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-limebrand px-3 text-xs font-black text-black transition hover:bg-limebrand2"
            href={detailsUrl(gym)}
            onClick={(event) => event.stopPropagation()}
            rel={isPartner ? undefined : "noreferrer"}
            target={isPartner ? undefined : "_blank"}
          >
            {isPartner ? "Ver detalhes" : "Abrir Maps"}
          </Link>
        </div>
      </div>
    </article>
  );
}

function CompactGymMedia({ gym }: { gym: Gym }) {
  const imageUrl = gym.photoUrl || gym.image;
  const shouldShowPlaceholder = !imageUrl || (gym.isPartner === false && !gym.photoUrl && !gym.hasPhoto);

  return (
    <div className="relative h-24 overflow-hidden rounded-md bg-white/8 sm:h-full sm:min-h-24">
      {shouldShowPlaceholder ? (
        <div className="absolute inset-0 grid place-items-center bg-[#111514]">
          <DumbbellFallback />
        </div>
      ) : gym.photoUrl ? (
        <span aria-label={gym.name} className="absolute inset-0 bg-cover bg-center" role="img" style={{ backgroundImage: `url("${imageUrl}")` }} />
      ) : (
        <span aria-label={gym.name} className="absolute inset-0 bg-cover bg-center" role="img" style={{ backgroundImage: `url("${imageUrl}")` }} />
      )}
      <span className="absolute inset-0 bg-black/20" />
    </div>
  );
}

function DumbbellFallback() {
  return (
    <span className="grid h-10 w-10 place-items-center rounded-full border border-limebrand/35 bg-limebrand/10 text-limebrand">
      <MapPin className="h-5 w-5" />
    </span>
  );
}

function VerificationPill({ isPartner }: { isPartner: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-black", isPartner ? "bg-limebrand/10 text-limebrand" : "bg-white/8 text-white/58")}>
      {isPartner ? <BadgeCheck className="h-3.5 w-3.5" /> : null}
      {isPartner ? "Verificado" : "Não verificado"}
    </span>
  );
}

function SmallActionButton({
  active = false,
  children,
  disabled = false,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className={cn(
        "inline-flex h-9 items-center justify-center rounded-md border px-3 text-xs font-black transition disabled:opacity-40",
        active ? "border-limebrand bg-limebrand/12 text-limebrand" : "border-white/14 text-white/78 hover:border-limebrand hover:text-limebrand",
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function GymTable({
  compareSlugs,
  favoriteSlugs,
  gyms,
  onQuickView,
  onSelect,
  onToggleCompare,
  onToggleFavorite,
  selectedSlug,
}: {
  compareSlugs: string[];
  favoriteSlugs: string[];
  gyms: Gym[];
  onQuickView: (gym: Gym) => void;
  onSelect: (gym: Gym) => void;
  onToggleCompare: (gym: Gym) => void;
  onToggleFavorite: (gym: Gym) => void;
  selectedSlug?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/12 bg-white/[0.035]">
      <table className="min-w-[860px] w-full text-left text-sm">
        <thead className="bg-white/[0.035] text-xs text-white/54">
          <tr>
            <th className="px-4 py-3 font-medium">Nome</th>
            <th className="px-4 py-3 font-medium">Fonte</th>
            <th className="px-4 py-3 font-medium">Avaliação</th>
            <th className="px-4 py-3 font-medium">Localização</th>
            <th className="px-4 py-3 font-medium">Preço</th>
            <th className="px-4 py-3 font-medium">Estado</th>
            <th className="px-4 py-3 text-right font-medium">Ações</th>
          </tr>
        </thead>
        <tbody>
          {gyms.map((gym) => {
            const isPartner = gym.isPartner !== false;
            const selected = selectedSlug === gym.slug;

            return (
              <tr key={gym.slug} className={cn("border-t border-white/8 transition hover:bg-white/[0.025]", selected && "bg-limebrand/[0.055]")}>
                <td className="px-4 py-3">
                  <button className="text-left font-black hover:text-limebrand" onClick={() => onSelect(gym)} type="button">
                    {gym.name}
                  </button>
                </td>
                <td className="px-4 py-3"><VerificationPill isPartner={isPartner} /></td>
                <td className="px-4 py-3 text-white/62">{gym.rating || "N/D"} ({gym.reviews})</td>
                <td className="max-w-[240px] truncate px-4 py-3 text-white/62">{gym.location}</td>
                <td className="px-4 py-3 text-limebrand">{gym.price ? formatKz(gym.price) : "N/D"}</td>
                <td className="px-4 py-3 text-white/62">{gym.openNow === true ? "Aberto" : gym.openNow === false ? "Fechado" : "Consultar"}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <IconTableButton active={favoriteSlugs.includes(gym.slug)} label="Favorito" onClick={() => onToggleFavorite(gym)}>
                      <Star className="h-4 w-4" />
                    </IconTableButton>
                    <IconTableButton label="Detalhes rápidos" onClick={() => onQuickView(gym)}>
                      <ExternalLink className="h-4 w-4" />
                    </IconTableButton>
                    <IconTableButton active={compareSlugs.includes(gym.slug)} disabled={compareSlugs.length >= 3 && !compareSlugs.includes(gym.slug)} label="Comparar" onClick={() => onToggleCompare(gym)}>
                      <Table2 className="h-4 w-4" />
                    </IconTableButton>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function IconTableButton({
  active = false,
  children,
  disabled = false,
  label,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      aria-label={label}
      className={cn(
        "grid h-8 w-8 place-items-center rounded-md border text-white/62 transition hover:border-limebrand hover:text-limebrand disabled:opacity-40",
        active ? "border-limebrand/50 text-limebrand" : "border-white/12",
      )}
      disabled={disabled}
      onClick={onClick}
      title={label}
      type="button"
    >
      {children}
    </button>
  );
}

function QuickDetailsModal({ gym, onClose }: { gym: Gym; onClose: () => void }) {
  const isPartner = gym.isPartner !== false;
  const detailsHref = isPartner
    ? `/explorar-ginasios/${gym.slug}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${gym.name}, ${gym.location}`)}`;

  return (
    <div className="fixed inset-0 z-50 grid place-items-end bg-black/68 p-3 backdrop-blur-sm sm:place-items-center" role="dialog" aria-modal="true">
      <div className="w-full max-w-2xl rounded-lg border border-white/12 bg-[#070909] p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-limebrand">{isPartner ? "Parceiro Noogym" : "Google Maps"}</p>
            <h2 className="mt-2 break-words text-2xl font-black">{gym.name}</h2>
            <p className="mt-2 flex items-center gap-2 text-sm text-white/58">
              <MapPin className="h-4 w-4 shrink-0" />
              {gym.location} · {gym.distance}
            </p>
          </div>
          <button className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-white/12 text-white/64 hover:border-limebrand hover:text-limebrand" onClick={onClose} type="button">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <p className="mt-3 text-2xl font-black">{gym.rating || "N/D"}</p>
            <p className="text-xs text-white/54">{gym.reviews} avaliações</p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
            <Navigation className="h-5 w-5 text-limebrand" />
            <p className="mt-3 text-2xl font-black">{gym.openNow === true ? "Aberto" : gym.openNow === false ? "Fechado" : "Consultar"}</p>
            <p className="text-xs text-white/54">Estado atual</p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
            <ExternalLink className="h-5 w-5 text-limebrand" />
            <p className="mt-3 text-2xl font-black">{gym.price ? formatKz(gym.price) : "N/D"}</p>
            <p className="text-xs text-white/54">{isPartner ? "Plano mensal" : "Preço indisponível"}</p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <h3 className="font-bold">Recursos</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {gym.features.slice(0, 8).map((feature) => (
                <span key={feature} className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/70">{feature}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold">Horários</h3>
            <div className="mt-3 grid gap-2">
              {gym.hours.slice(0, 4).map((hour) => (
                <p key={`${hour.day}-${hour.time}`} className="flex justify-between gap-3 text-sm text-white/60">
                  <span>{hour.day}</span>
                  <span className="text-right">{hour.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {(gym.phone || gym.website) ? (
          <div className="mt-5 grid gap-2 text-sm text-white/62">
            {gym.phone ? <p>{gym.phone}</p> : null}
            {gym.website ? <a className="truncate font-bold text-limebrand" href={gym.website} rel="noreferrer" target="_blank">{gym.website.replace(/^https?:\/\//, "")}</a> : null}
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap justify-end gap-3">
          {!isPartner ? (
            <Button href="/para-ginasios#agendar-demonstracao" variant="secondary">
              Sugerir parceria
            </Button>
          ) : (
            <Button href={`/planos?gym=${encodeURIComponent(gym.slug)}`} variant="secondary">
              Ver planos
            </Button>
          )}
          <a className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/14 px-5 text-sm font-black text-white/78 transition hover:border-limebrand hover:text-limebrand" href={directionsUrl(gym)} rel="noreferrer" target="_blank">
            <Navigation className="h-4 w-4" />
            Como chegar
          </a>
          <Button href={detailsHref}>
            {isPartner ? "Ver detalhes" : "Abrir Maps"}
          </Button>
        </div>
      </div>
    </div>
  );
}
