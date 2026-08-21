"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Dumbbell, ExternalLink, Eye, Heart, MapPin, Navigation, Star } from "lucide-react";
import type { Gym } from "@/data/gyms";
import { cn, formatKz } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

type GymCardProps = {
  compareDisabled?: boolean;
  compareSelected?: boolean;
  compact?: boolean;
  favorite?: boolean;
  gym: Gym;
  hideSelectButton?: boolean;
  onQuickView?: (gym: Gym) => void;
  onSelect?: (gym: Gym) => void;
  onToggleCompare?: (gym: Gym) => void;
  onToggleFavorite?: (gym: Gym) => void;
  selected?: boolean;
};

export function GymCard({
  compareDisabled = false,
  compareSelected = false,
  compact = false,
  favorite = false,
  gym,
  hideSelectButton = false,
  onQuickView,
  onSelect,
  onToggleCompare,
  onToggleFavorite,
  selected = false,
}: GymCardProps) {
  const isPartner = gym.isPartner !== false;
  const detailsHref = isPartner
    ? `/explorar-ginasios/${gym.slug}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${gym.name}, ${gym.location}`)}`;
  const imageUrl = gym.photoUrl || gym.image;
  const shouldShowPlaceholder = !imageUrl || (!isPartner && !gym.photoUrl && !gym.hasPhoto);

  return (
    <article
      aria-current={selected ? "true" : undefined}
      className={cn(
        "grid cursor-pointer gap-5 rounded-lg border bg-white/[0.035] p-3 transition hover:border-limebrand/45",
        selected ? "border-limebrand/70 bg-limebrand/[0.055] shadow-[0_0_0_1px_rgba(182,255,0,0.14)]" : "border-white/12",
        !compact && "md:grid-cols-[240px_1fr]",
      )}
      onClick={() => onSelect?.(gym)}
    >
      <Link
        href={detailsHref}
        className={cn("relative overflow-hidden rounded-md", compact ? "min-h-48 sm:min-h-56" : "min-h-52")}
        onClick={(event) => event.stopPropagation()}
        rel={isPartner ? undefined : "noreferrer"}
        target={isPartner ? undefined : "_blank"}
      >
        {shouldShowPlaceholder ? (
          <div className="absolute inset-0 grid place-items-center bg-[linear-gradient(135deg,#101514,#1c2321)]">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(182,255,0,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(182,255,0,0.14)_1px,transparent_1px)] [background-size:26px_26px]" />
            <div className="relative z-10 flex flex-col items-center px-4 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-limebrand/35 bg-limebrand/10 text-limebrand">
                <Dumbbell className="h-7 w-7" />
              </span>
              <span className="mt-3 text-sm font-black text-white">Foto indisponível</span>
              <span className="mt-1 text-xs text-white/58">Google Maps</span>
            </div>
          </div>
        ) : gym.photoUrl ? (
          <span aria-label={gym.name} className="absolute inset-0 bg-cover bg-center" role="img" style={{ backgroundImage: `url("${imageUrl}")` }} />
        ) : (
          <Image src={imageUrl} alt={gym.name} fill className="object-cover" />
        )}
        <div className={cn("absolute inset-0", shouldShowPlaceholder ? "bg-black/10" : "bg-black/30")} />
        {gym.slug === "noogym-center" ? <Badge className="absolute left-4 top-4 bg-limebrand text-black">Mais popular</Badge> : null}
        <Badge
          className={cn(
            "absolute right-4 top-4 inline-flex items-center gap-1",
            isPartner ? "bg-limebrand text-black" : "bg-black/80 text-white",
          )}
        >
          {isPartner ? <BadgeCheck className="h-3.5 w-3.5" /> : null}
          {isPartner ? "Verificado" : "Não verificado"}
        </Badge>
        {!isPartner ? <Badge className="absolute left-4 top-4 bg-black/75 text-limebrand">Google Maps</Badge> : null}
      </Link>
      <div className="flex min-w-0 flex-col justify-between gap-4 p-2">
        <div className="min-w-0">
          <div className="flex min-w-0 items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="break-words text-xl font-bold">
                {gym.name} <span className="text-limebrand">•</span>
              </h3>
              <p className={cn("mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-black", isPartner ? "bg-limebrand/10 text-limebrand" : "bg-white/8 text-white/58")}>
                {isPartner ? <BadgeCheck className="h-3.5 w-3.5" /> : null}
                {isPartner ? "Parceiro verificado" : "Não verificado pela Noogym"}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-white/58">
                <Star className="h-4 w-4 shrink-0 fill-yellow-400 text-yellow-400" />
                <span className="min-w-0 break-words">{gym.rating} ({gym.reviews} avaliações)</span>
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-white/58">
                <MapPin className="h-4 w-4 shrink-0" />
                <span className="min-w-0 break-words">{gym.location} · {gym.distance}</span>
              </p>
            </div>
            <button
              aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-md border border-white/10 text-white/60 transition hover:border-limebrand hover:text-limebrand", favorite && "border-limebrand/40 text-limebrand")}
              onClick={(event) => {
                event.stopPropagation();
                onToggleFavorite?.(gym);
              }}
              type="button"
            >
              <Heart className={cn("h-5 w-5", favorite && "fill-current")} />
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {gym.tags.slice(0, 4).map((tag) => <span key={tag} className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/70">{tag}</span>)}
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          {isPartner ? (
            <div className="min-w-0 text-sm text-white/50">
              Plano Noogym a partir de{" "}
              <div className="break-words text-2xl font-black text-limebrand">
                {formatKz(gym.price)}
                <span className="text-xs">/mês</span>
              </div>
            </div>
          ) : (
            <div className="min-w-0 text-sm text-white/50">
              Encontrado no Google Maps
              <div className="mt-1 flex items-center gap-2 text-sm font-black text-limebrand">
                <Navigation className="h-4 w-4" />
                Rotas disponíveis
              </div>
            </div>
          )}
          <div className={cn("flex flex-wrap gap-2", compact && "w-full")}>
            {onQuickView ? (
              <button
                className={cn(
                  "inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/14 px-4 text-sm font-black text-white/78 transition hover:border-limebrand hover:text-limebrand",
                  compact && "w-full",
                )}
                onClick={(event) => {
                  event.stopPropagation();
                  onQuickView(gym);
                }}
                type="button"
              >
                <Eye className="h-4 w-4" />
                Detalhes
              </button>
            ) : null}
            {onToggleCompare ? (
              <button
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-md border px-4 text-sm font-black transition",
                  compareSelected ? "border-limebrand bg-limebrand/12 text-limebrand" : "border-white/14 text-white/78 hover:border-limebrand hover:text-limebrand",
                  compact && "w-full",
                )}
                disabled={compareDisabled && !compareSelected}
                onClick={(event) => {
                  event.stopPropagation();
                  onToggleCompare(gym);
                }}
                type="button"
              >
                {compareSelected ? "Comparando" : "Comparar"}
              </button>
            ) : null}
            {!hideSelectButton ? (
              <button
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-md border px-5 text-sm font-black transition",
                  selected ? "border-limebrand bg-limebrand text-black" : "border-white/14 text-white/78 hover:border-limebrand hover:text-limebrand",
                  compact && "w-full",
                )}
                onClick={(event) => {
                  event.stopPropagation();
                  onSelect?.(gym);
                }}
                type="button"
              >
                {selected ? "Selecionado" : "Selecionar"}
              </button>
            ) : null}
            {isPartner ? (
              <Button
                href={`/explorar-ginasios/${gym.slug}`}
                className={cn(compact && "w-full")}
                onClick={(event) => event.stopPropagation()}
              >
                Ver detalhes
              </Button>
            ) : (
              <a
                href={detailsHref}
                className={cn(
                  "inline-flex h-11 items-center justify-center gap-2 rounded-md bg-limebrand px-5 text-sm font-black text-black transition hover:bg-limebrand2",
                  compact && "w-full",
                )}
                onClick={(event) => event.stopPropagation()}
                target="_blank"
                rel="noreferrer"
              >
                Abrir Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
