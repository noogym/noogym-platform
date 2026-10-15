"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, LocateFixed, MapPin, Navigation, Star, X } from "lucide-react";
import type { Gym } from "@/data/gyms";
import { cn, formatKz } from "@/lib/utils";

type WindowWithMapsCallback = Window & {
  [key: string]: GoogleMapsApi | (() => void) | undefined;
};

type LatLngLiteral = {
  lat: number;
  lng: number;
};

type GoogleLatLng = {
  lat: () => number;
  lng: () => number;
};

type GoogleLatLngBounds = {
  extend: (position: LatLngLiteral) => void;
};

type GoogleMapMouseEvent = {
  latLng?: GoogleLatLng;
  placeId?: string;
  stop?: () => void;
};

type GoogleListener = {
  remove: () => void;
};

type GoogleMap = {
  addListener: (eventName: "click" | "idle", handler: (event?: GoogleMapMouseEvent) => void) => GoogleListener;
  fitBounds: (bounds: GoogleLatLngBounds, padding?: number) => void;
  getCenter: () => GoogleLatLng | undefined;
  panTo: (position: LatLngLiteral) => void;
  setCenter: (position: LatLngLiteral) => void;
  setZoom: (zoom: number) => void;
};

type GoogleMarker = {
  addListener: (eventName: "click", handler: () => void) => GoogleListener;
  setMap: (map: GoogleMap | null) => void;
};

type GoogleMapOptions = {
  center: LatLngLiteral;
  clickableIcons?: boolean;
  disableDefaultUI?: boolean;
  fullscreenControl?: boolean;
  mapTypeControl?: boolean;
  streetViewControl?: boolean;
  zoom: number;
  zoomControl?: boolean;
};

type GoogleMarkerOptions = {
  map: GoogleMap;
  position: LatLngLiteral;
  title?: string;
};

type PlaceDetailsRequest = {
  fields: string[];
  placeId: string;
};

type GooglePlacePhoto = {
  getUrl: (options: { maxHeight?: number; maxWidth?: number }) => string;
};

type GooglePlaceResult = {
  formatted_address?: string;
  formatted_phone_number?: string;
  geometry?: {
    location?: GoogleLatLng;
  };
  name?: string;
  opening_hours?: {
    isOpen?: (date?: Date) => boolean;
    weekday_text?: string[];
  };
  photos?: GooglePlacePhoto[];
  place_id?: string;
  rating?: number;
  types?: string[];
  user_ratings_total?: number;
  website?: string;
};

type GooglePlacesService = {
  getDetails: (
    request: PlaceDetailsRequest,
    callback: (place: GooglePlaceResult | null, status: string) => void,
  ) => void;
};

type GoogleMapsApi = {
  maps: {
    Animation?: {
      DROP?: number;
    };
    LatLngBounds: new () => GoogleLatLngBounds;
    Map: new (element: HTMLElement, options: GoogleMapOptions) => GoogleMap;
    Marker: new (options: GoogleMarkerOptions & { animation?: number }) => GoogleMarker;
    places: {
      PlacesService: new (map: GoogleMap) => GooglePlacesService;
      PlacesServiceStatus: {
        OK: string;
      };
    };
  };
};

type MapsConfigResponse = {
  apiKey: string;
  configured: boolean;
};

export type GoogleMapGymPlace = {
  address: string;
  distance: string;
  image?: string;
  isPartner: false;
  latitude?: number;
  longitude?: number;
  name: string;
  openNow?: boolean | null;
  phone?: string;
  placeId: string;
  rating: number;
  reviews: number;
  source: "google";
  types: string[];
  website?: string;
  weekdayText?: string[];
};

type GymMapProps = {
  compact?: boolean;
  gyms?: Gym[];
  onGooglePlaceSelect?: (place: GoogleMapGymPlace) => void;
  onSearchArea?: (center: LatLngLiteral) => void;
  onSelectGym?: (gym: Gym) => void;
  searchAreaLabel?: string;
  searchAreaLoading?: boolean;
  selectedGym?: Gym;
  showSummary?: boolean;
  statusMessage?: React.ReactNode;
};

const defaultCenter = { lat: -8.839988, lng: 13.289437 };
const defaultMapQuery = "ginásios em Luanda Angola";
const googleMapsScriptId = "google-maps-js-api";
let googleMapsPromise: Promise<GoogleMapsApi> | null = null;

declare global {
  interface Window {
    google?: GoogleMapsApi;
  }
}

function loadGoogleMaps(apiKey: string) {
  if (window.google?.maps?.places) {
    return Promise.resolve(window.google);
  }

  if (googleMapsPromise) {
    return googleMapsPromise;
  }

  googleMapsPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(googleMapsScriptId) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => {
        if (window.google) resolve(window.google);
      });
      existingScript.addEventListener("error", () => reject(new Error("Google Maps não carregou.")));
      return;
    }

    const script = document.createElement("script");
    const callbackName = `initNoogymMap_${Date.now()}`;
    const params = new URLSearchParams({
      callback: callbackName,
      key: apiKey,
      language: "pt",
      libraries: "places",
      region: "AO",
      v: "weekly",
    });

    const callbackWindow = window as unknown as WindowWithMapsCallback;

    callbackWindow[callbackName] = () => {
      delete callbackWindow[callbackName];
      if (window.google) {
        resolve(window.google);
      } else {
        reject(new Error("Google Maps não está disponível."));
      }
    };

    script.id = googleMapsScriptId;
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?${params.toString()}`;
    script.onerror = () => reject(new Error("Google Maps não carregou."));
    document.head.appendChild(script);
  });

  return googleMapsPromise;
}

function gymPosition(gym?: Gym): LatLngLiteral | null {
  if (typeof gym?.latitude !== "number" || typeof gym.longitude !== "number") {
    return null;
  }

  return {
    lat: gym.latitude,
    lng: gym.longitude,
  };
}

function directionsUrl(place: GoogleMapGymPlace | Gym | undefined) {
  if (!place) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(defaultMapQuery)}`;

  if (isMapPreviewPlace(place)) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.address || place.name)}&destination_place_id=${encodeURIComponent(place.placeId)}`;
  }

  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${place.name}, ${place.location}, Angola`)}`;
}

function detailsUrl(place: GoogleMapGymPlace | Gym | undefined) {
  if (!place) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(defaultMapQuery)}`;

  if (isMapPreviewPlace(place)) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name)}&query_place_id=${encodeURIComponent(place.placeId)}`;
  }

  if (place.isPartner === false) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${place.name}, ${place.location}`)}`;
  }

  return `/explorar-ginasios/${place.slug}`;
}

function isFitnessPlace(place: GooglePlaceResult) {
  const searchable = `${place.name ?? ""} ${(place.types ?? []).join(" ")}`.toLowerCase();
  return ["gym", "health", "fitness", "academia", "ginásio", "ginasio", "crossfit"].some((term) => searchable.includes(term));
}

function isMapPreviewPlace(place: GoogleMapGymPlace | Gym): place is GoogleMapGymPlace {
  return "types" in place && "placeId" in place && typeof place.placeId === "string";
}

function getOpenNow(place: GooglePlaceResult) {
  try {
    return place.opening_hours?.isOpen?.() ?? null;
  } catch {
    return null;
  }
}

function placeFromGoogleResult(place: GooglePlaceResult): GoogleMapGymPlace | null {
  if (!place.place_id || !place.name) return null;

  const location = place.geometry?.location;

  return {
    address: place.formatted_address ?? "Endereço indisponível",
    distance: "Google Maps",
    image: place.photos?.[0]?.getUrl({ maxHeight: 320, maxWidth: 420 }),
    isPartner: false,
    latitude: location?.lat(),
    longitude: location?.lng(),
    name: place.name,
    openNow: getOpenNow(place),
    phone: place.formatted_phone_number,
    placeId: place.place_id,
    rating: place.rating ?? 0,
    reviews: place.user_ratings_total ?? 0,
    source: "google",
    types: place.types ?? [],
    website: place.website,
    weekdayText: place.opening_hours?.weekday_text,
  };
}

function previewTitle(place: GoogleMapGymPlace | Gym) {
  return place.name;
}

function previewAddress(place: GoogleMapGymPlace | Gym) {
  return isMapPreviewPlace(place) ? place.address : place.location;
}

function previewImage(place: GoogleMapGymPlace | Gym) {
  return place.image;
}

function previewRating(place: GoogleMapGymPlace | Gym) {
  return {
    rating: place.rating,
    reviews: place.reviews,
  };
}

export function GymMap({
  compact = false,
  gyms,
  onGooglePlaceSelect,
  onSearchArea,
  onSelectGym,
  searchAreaLabel = "Pesquisar nesta área",
  searchAreaLoading = false,
  selectedGym,
  showSummary = true,
  statusMessage,
}: GymMapProps) {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<GoogleMap | null>(null);
  const placesServiceRef = useRef<GooglePlacesService | null>(null);
  const markerRefs = useRef<GoogleMarker[]>([]);
  const [apiKey, setApiKey] = useState("");
  const [googleApi, setGoogleApi] = useState<GoogleMapsApi | null>(null);
  const [loadStatus, setLoadStatus] = useState<"idle" | "loading" | "ready" | "unconfigured" | "error">("idle");
  const [locationStatus, setLocationStatus] = useState<string | null>(null);
  const [clickedPlace, setClickedPlace] = useState<GoogleMapGymPlace | null>(null);
  const [mapMoved, setMapMoved] = useState(false);
  const [hiddenPreviewId, setHiddenPreviewId] = useState<string | null>(null);
  const [placeStatus, setPlaceStatus] = useState<string | null>(null);
  const resultCount = gyms?.length ?? 24;
  const selectedPosition = gymPosition(selectedGym);
  const previewPlace = clickedPlace ?? selectedGym;
  const previewId = clickedPlace?.placeId ?? selectedGym?.slug ?? "";
  const showSelectedPreview = Boolean(previewPlace && hiddenPreviewId !== previewId);
  const isPartnerPreview = previewPlace ? !isMapPreviewPlace(previewPlace) && previewPlace.isPartner !== false : false;
  const openMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    selectedGym ? `${selectedGym.name}, ${selectedGym.location}, Angola` : defaultMapQuery,
  )}`;

  const partnerMarkers = useMemo(
    () => (gyms ?? []).filter((gym) => typeof gym.latitude === "number" && typeof gym.longitude === "number"),
    [gyms],
  );

  useEffect(() => {
    let cancelled = false;

    async function loadConfig() {
      setLoadStatus("loading");

      try {
        const response = await fetch("/api/maps/config");

        if (!response.ok) {
          throw new Error("Configuração do mapa indisponível.");
        }

        const config = (await response.json()) as MapsConfigResponse;

        if (!config.configured) {
          if (!cancelled) setLoadStatus("unconfigured");
          return;
        }

        if (!cancelled) {
          setApiKey(config.apiKey);
        }
      } catch {
        if (!cancelled) setLoadStatus("error");
      }
    }

    void loadConfig();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!apiKey) return;
    let cancelled = false;

    async function loadMapApi() {
      try {
        const api = await loadGoogleMaps(apiKey);
        if (!cancelled) {
          setGoogleApi(api);
          setLoadStatus("ready");
        }
      } catch {
        if (!cancelled) setLoadStatus("error");
      }
    }

    void loadMapApi();

    return () => {
      cancelled = true;
    };
  }, [apiKey]);

  const fetchPlaceDetails = useCallback(
    (placeId: string, latLng?: GoogleLatLng) => {
      if (!googleApi || !placesServiceRef.current) return;

      setPlaceStatus("A carregar detalhes do ginásio...");

      placesServiceRef.current.getDetails(
        {
          fields: [
            "formatted_address",
            "formatted_phone_number",
            "geometry",
            "name",
            "opening_hours",
            "photos",
            "place_id",
            "rating",
            "types",
            "user_ratings_total",
            "website",
          ],
          placeId,
        },
        (place, status) => {
          if (status !== googleApi.maps.places.PlacesServiceStatus.OK || !place) {
            setPlaceStatus("Não foi possível carregar os detalhes deste local.");
            return;
          }

          if (!isFitnessPlace(place)) {
            setPlaceStatus("Selecione um ginásio ou espaço fitness no mapa.");
            return;
          }

          const nextPlace = placeFromGoogleResult(place);

          if (!nextPlace) {
            setPlaceStatus("Este local não tem informações suficientes no Google Maps.");
            return;
          }

          if (latLng && !nextPlace.latitude && !nextPlace.longitude) {
            nextPlace.latitude = latLng.lat();
            nextPlace.longitude = latLng.lng();
          }

          setClickedPlace(nextPlace);
          onGooglePlaceSelect?.(nextPlace);
          setHiddenPreviewId(null);
          setPlaceStatus(null);

          if (typeof nextPlace.latitude === "number" && typeof nextPlace.longitude === "number") {
            mapRef.current?.panTo({ lat: nextPlace.latitude, lng: nextPlace.longitude });
          }
        },
      );
    },
    [googleApi, onGooglePlaceSelect],
  );

  useEffect(() => {
    if (!googleApi || !mapElementRef.current || mapRef.current) return;

    const map = new googleApi.maps.Map(mapElementRef.current, {
      center: selectedPosition ?? defaultCenter,
      clickableIcons: true,
      disableDefaultUI: true,
      fullscreenControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      zoom: compact ? 14 : 13,
      zoomControl: true,
    });

    mapRef.current = map;
    placesServiceRef.current = new googleApi.maps.places.PlacesService(map);

    map.addListener("click", (event) => {
      event?.stop?.();

      if (event?.placeId) {
        fetchPlaceDetails(event.placeId, event.latLng);
        return;
      }

      setClickedPlace(null);
      setPlaceStatus(null);
    });

    let firstIdle = true;
    map.addListener("idle", () => {
      if (firstIdle) {
        firstIdle = false;
        return;
      }

      setMapMoved(true);
    });
  }, [compact, fetchPlaceDetails, googleApi, selectedPosition]);

  useEffect(() => {
    if (!googleApi || !mapRef.current) return;

    markerRefs.current.forEach((marker) => marker.setMap(null));
    markerRefs.current = [];

    const bounds = new googleApi.maps.LatLngBounds();

    partnerMarkers.forEach((gym) => {
      const position = gymPosition(gym);
      if (!position || !mapRef.current) return;

      bounds.extend(position);

      const marker = new googleApi.maps.Marker({
        animation: googleApi.maps.Animation?.DROP,
        map: mapRef.current,
        position,
        title: gym.name,
      });

      marker.addListener("click", () => {
        setClickedPlace(null);
        setHiddenPreviewId(null);
        setMapMoved(false);
        onSelectGym?.(gym);
        mapRef.current?.panTo(position);
      });

      markerRefs.current.push(marker);
    });

    if (partnerMarkers.length > 1) {
      mapRef.current.fitBounds(bounds, 56);
    }

    return () => {
      markerRefs.current.forEach((marker) => marker.setMap(null));
      markerRefs.current = [];
    };
  }, [googleApi, onSelectGym, partnerMarkers]);

  useEffect(() => {
    if (!mapRef.current || !selectedPosition || clickedPlace) return;

    setHiddenPreviewId((current) => (current === selectedGym?.slug ? current : null));
    setMapMoved(false);
    mapRef.current.panTo(selectedPosition);
    mapRef.current.setZoom(compact ? 14 : 13);
  }, [clickedPlace, compact, selectedGym?.slug, selectedPosition]);

  function useCurrentLocation() {
    if (!navigator.geolocation) {
      setLocationStatus("O navegador não suporta localização.");
      return;
    }

    setLocationStatus("A localizar...");
    navigator.geolocation.getCurrentPosition(
      (result) => {
        const nextPosition = {
          latitude: result.coords.latitude,
          longitude: result.coords.longitude,
        };

        mapRef.current?.setCenter({ lat: nextPosition.latitude, lng: nextPosition.longitude });
        mapRef.current?.setZoom(14);
        setLocationStatus("Mapa atualizado com a sua localização.");
      },
      () => {
        setLocationStatus("Não foi possível obter a sua localização.");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 60_000,
        timeout: 10_000,
      },
    );
  }

  function searchCurrentArea() {
    const center = mapRef.current?.getCenter();
    if (!center) return;

    onSearchArea?.({
      lat: center.lat(),
      lng: center.lng(),
    });
    setMapMoved(false);
  }

  const loadingMessage =
    loadStatus === "unconfigured"
      ? "Configure GOOGLE_MAPS_API_KEY para ativar o mapa interativo."
      : loadStatus === "error"
        ? "Não foi possível carregar o Google Maps agora."
        : "A carregar mapa interativo...";

  return (
    <div className={`relative overflow-hidden rounded-lg border border-white/12 bg-black ${compact ? "h-72" : "h-80 sm:h-[400px] lg:h-[430px]"}`}>
      <div ref={mapElementRef} className="h-full w-full" />

      {loadStatus !== "ready" ? (
        <div className="absolute inset-0 grid place-items-center bg-black/80 px-6 text-center text-sm text-white/64">
          {loadingMessage}
        </div>
      ) : null}

      {showSummary ? (
        <div
          className={cn(
            "absolute z-20 flex flex-col gap-3 sm:bottom-6 sm:left-6 sm:right-auto sm:top-auto sm:max-w-[calc(100%-3rem)]",
            showSelectedPreview ? "left-4 right-[4.75rem] top-4" : "bottom-4 left-4 right-4",
          )}
        >
          <div className="w-fit rounded-md border border-black/25 bg-[#111514] px-3 py-2 text-xs text-white shadow-[0_18px_45px_rgba(0,0,0,0.35)] sm:px-4 sm:py-3 sm:text-sm">
            <span className="font-bold text-limebrand">{resultCount}</span>{" "}
            {resultCount === 1 ? "ginásio encontrado" : "ginásios encontrados"} no Google Maps
            {statusMessage ? <span className="mt-1 block text-white/66">{statusMessage}</span> : null}
            {placeStatus ? <span className="mt-1 block text-limebrand">{placeStatus}</span> : null}
            {locationStatus ? <span className="mt-1 block text-white/58">{locationStatus}</span> : null}
          </div>
        </div>
      ) : null}

      <div className="absolute right-4 top-4 z-20 grid gap-2 sm:right-5 sm:top-5">
        {onSearchArea ? (
          <button
            className={cn(
              "inline-flex h-11 items-center justify-center gap-2 rounded-md border px-3 text-sm font-bold shadow-[0_14px_35px_rgba(0,0,0,0.32)] transition",
              mapMoved
                ? "border-limebrand bg-limebrand text-black"
                : "border-black/25 bg-[#111514] text-white hover:border-limebrand hover:text-limebrand",
            )}
            disabled={searchAreaLoading || loadStatus !== "ready"}
            onClick={searchCurrentArea}
            type="button"
          >
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">{searchAreaLoading ? "A pesquisar..." : searchAreaLabel}</span>
          </button>
        ) : null}
        <button
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-black/25 bg-[#111514] px-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(0,0,0,0.32)] transition hover:border-limebrand hover:text-limebrand"
          onClick={useCurrentLocation}
          type="button"
        >
          <LocateFixed className="h-4 w-4" />
          <span className="hidden sm:inline">Perto de mim</span>
        </button>
        <a
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-black/25 bg-[#111514] px-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(0,0,0,0.32)] transition hover:border-limebrand hover:text-limebrand"
          href={openMapsUrl}
          rel="noreferrer"
          target="_blank"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="hidden sm:inline">Abrir mapa</span>
        </a>
        {previewPlace ? (
          <a
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-limebrand/70 bg-[#111514] px-3 text-sm font-bold text-limebrand shadow-[0_14px_35px_rgba(0,0,0,0.32)] transition hover:bg-limebrand hover:text-black"
            href={directionsUrl(previewPlace)}
            rel="noreferrer"
            target="_blank"
          >
            <Navigation className="h-4 w-4" />
            <span className="hidden sm:inline">Rotas</span>
          </a>
        ) : null}
      </div>

      {previewPlace && showSelectedPreview ? (
        <div className="absolute bottom-4 left-4 right-4 z-30 rounded-md border border-black/35 bg-[#0b0f0e] p-3 text-white shadow-[0_24px_70px_rgba(0,0,0,0.46)] sm:bottom-auto sm:left-5 sm:right-auto sm:top-5 sm:w-[min(390px,calc(100%-10rem))]">
          <div className="flex gap-3">
            {previewImage(previewPlace) ? (
              <Link
                href={detailsUrl(previewPlace)}
                className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md bg-white/8"
                rel={isPartnerPreview ? undefined : "noreferrer"}
                target={isPartnerPreview ? undefined : "_blank"}
              >
                {isMapPreviewPlace(previewPlace) ? (
                  <span
                    aria-label={previewTitle(previewPlace)}
                    className="absolute inset-0 bg-cover bg-center"
                    role="img"
                    style={{ backgroundImage: `url("${previewImage(previewPlace)}")` }}
                  />
                ) : (
                  <Image src={previewImage(previewPlace) ?? ""} alt={previewTitle(previewPlace)} fill className="object-cover" />
                )}
                <span className="absolute inset-0 bg-black/20" />
              </Link>
            ) : (
              <div className="grid h-20 w-24 shrink-0 place-items-center rounded-md bg-limebrand/12 text-limebrand">
                <MapPin className="h-8 w-8" />
              </div>
            )}
            <div className="min-w-0 flex-1 pr-6">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-limebrand" />
                <div className="min-w-0">
                  <h3 className="truncate text-base font-black text-white">{previewTitle(previewPlace)}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-white/82">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    {previewRating(previewPlace).rating || "Sem nota"} ({previewRating(previewPlace).reviews} avaliações)
                  </p>
                </div>
              </div>
              <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/76">{previewAddress(previewPlace)}</p>
              {isMapPreviewPlace(previewPlace) && previewPlace.openNow !== null ? (
                <p className="mt-1 text-xs font-bold text-limebrand">{previewPlace.openNow ? "Aberto agora" : "Fechado agora"}</p>
              ) : null}
              {isMapPreviewPlace(previewPlace) && previewPlace.phone ? (
                <p className="mt-1 truncate text-xs text-white/72">{previewPlace.phone}</p>
              ) : null}
            </div>
            <button
              aria-label="Fechar prévia do ginásio"
              className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-md border border-white/16 bg-white/5 text-white/72 transition hover:border-limebrand/70 hover:text-limebrand"
              onClick={() => setHiddenPreviewId(previewId)}
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 flex items-end justify-between gap-3 border-t border-white/14 pt-3">
            {isPartnerPreview ? (
              <div className="min-w-0">
                <p className="text-xs text-white/76">Plano a partir de</p>
                <p className="break-words text-xl font-black text-limebrand">
                  {formatKz((previewPlace as Gym).price)}
                  <span className="text-xs">/mês</span>
                </p>
              </div>
            ) : (
              <div className="min-w-0">
                <p className="text-xs text-white/76">Fonte</p>
                <p className="text-sm font-black text-limebrand">Google Maps</p>
              </div>
            )}
            <div className="flex shrink-0 flex-wrap justify-end gap-2">
              <Link
                href={detailsUrl(previewPlace)}
                className={cn(
                  "inline-flex h-10 items-center justify-center rounded-md px-3 text-xs font-black transition",
                  isPartnerPreview ? "bg-limebrand text-black hover:bg-limebrand2" : "border border-white/24 bg-white/6 text-white hover:border-limebrand hover:text-limebrand",
                )}
                rel={isPartnerPreview ? undefined : "noreferrer"}
                target={isPartnerPreview ? undefined : "_blank"}
              >
                {isPartnerPreview ? "Ver detalhes" : "Abrir Maps"}
              </Link>
              {isPartnerPreview ? (
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white/24 bg-white/6 px-3 text-xs font-black text-white transition hover:border-limebrand hover:text-limebrand"
                  href={`/planos?gym=${encodeURIComponent((previewPlace as Gym).slug)}`}
                >
                  Ver planos
                </Link>
              ) : (
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-limebrand px-3 text-xs font-black text-black transition hover:bg-limebrand2"
                  href="/para-ginasios#agendar-demonstracao"
                >
                  Sugerir parceria
                </Link>
              )}
              <a
                className="inline-flex h-10 items-center justify-center gap-1 rounded-md border border-white/24 bg-white/6 px-3 text-xs font-black text-white transition hover:border-limebrand hover:text-limebrand"
                href={directionsUrl(previewPlace)}
                rel="noreferrer"
                target="_blank"
              >
                <Navigation className="h-3.5 w-3.5" />
                Rotas
              </a>
            </div>
          </div>
          {isMapPreviewPlace(previewPlace) && (previewPlace.website || previewPlace.weekdayText?.length) ? (
            <div className="mt-3 grid gap-2 border-t border-white/14 pt-3 text-xs text-white/76">
              {previewPlace.weekdayText?.[0] ? <p className="line-clamp-1">{previewPlace.weekdayText[0]}</p> : null}
              {previewPlace.website ? (
                <a className="truncate font-bold text-limebrand" href={previewPlace.website} rel="noreferrer" target="_blank">
                  {previewPlace.website.replace(/^https?:\/\//, "")}
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
