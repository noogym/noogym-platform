"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  Building2,
  Copy,
  EyeOff,
  Filter,
  Link2,
  Loader2,
  MapPin,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useSession } from "@/components/auth/SessionContext";

type DiscoveredStatus = "DISCOVERED" | "MATCHED" | "CLAIMED" | "DUPLICATE" | "HIDDEN" | string;

type MatchedGym = {
  id: string;
  name: string;
  slug: string;
  status: string;
};

type DiscoveredGym = {
  id: string;
  provider: string;
  placeId: string;
  name: string;
  address: string | null;
  city: string | null;
  country: string;
  latitude: number | null;
  longitude: number | null;
  rating: number | null;
  reviewCount: number;
  openNow: boolean | null;
  types: string[];
  status: DiscoveredStatus;
  hiddenAt: string | null;
  matchedGym: MatchedGym | null;
  lastFetchedAt: string;
  updatedAt: string;
};

type AdminListResponse = {
  items: DiscoveredGym[];
  meta?: {
    count?: number;
    provider?: string;
  };
};

type StatusFilter = "Todos" | "Novos" | "Vinculados" | "Reivindicados" | "Duplicados" | "Ocultos";

const storageKey = "noogym:admin-api-key";
const statusFilters: StatusFilter[] = ["Todos", "Novos", "Vinculados", "Reivindicados", "Duplicados", "Ocultos"];

const statusLabels: Record<string, string> = {
  DISCOVERED: "Novo",
  MATCHED: "Vinculado",
  CLAIMED: "Reivindicado",
  DUPLICATE: "Duplicado",
  HIDDEN: "Oculto",
};

const statusStyles: Record<string, string> = {
  DISCOVERED: "border-limebrand/45 bg-limebrand/10 text-limebrand",
  MATCHED: "border-sky-400/40 bg-sky-400/10 text-sky-200",
  CLAIMED: "border-amber-300/45 bg-amber-300/10 text-amber-200",
  DUPLICATE: "border-white/16 bg-white/8 text-white/64",
  HIDDEN: "border-red-300/35 bg-red-400/10 text-red-200",
};

function formatDate(value: string | null) {
  if (!value) return "Nunca";

  return new Intl.DateTimeFormat("pt-AO", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function mapsHref(gym: DiscoveredGym) {
  if (gym.latitude && gym.longitude) {
    return `https://www.google.com/maps/search/?api=1&query=${gym.latitude},${gym.longitude}&query_place_id=${encodeURIComponent(gym.placeId)}`;
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${gym.name} ${gym.address ?? ""}`)}`;
}

function getStatusFilter(status: DiscoveredStatus): StatusFilter {
  if (status === "MATCHED") return "Vinculados";
  if (status === "CLAIMED") return "Reivindicados";
  if (status === "DUPLICATE") return "Duplicados";
  if (status === "HIDDEN") return "Ocultos";
  return "Novos";
}

function responseMessage(payload: unknown, fallback: string) {
  if (payload && typeof payload === "object" && "message" in payload && typeof payload.message === "string") {
    return payload.message;
  }

  return fallback;
}

export function GymAdminClient() {
  const { user } = useSession();
  const [adminKey, setAdminKey] = useState("");
  const [items, setItems] = useState<DiscoveredGym[]>([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("Todos");
  const [limit, setLimit] = useState(120);
  const [limitPerZone, setLimitPerZone] = useState(12);
  const [refreshDiscovery, setRefreshDiscovery] = useState(false);
  const [loading, setLoading] = useState(false);
  const [discovering, setDiscovering] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [gymIds, setGymIds] = useState<Record<string, string>>({});
  const [prices, setPrices] = useState<Record<string, string>>({});
  const [createStatus, setCreateStatus] = useState<Record<string, "DRAFT" | "ACTIVE">>({});
  const hasAdminSession = user?.role === "ADMIN" || user?.accesses?.includes("ADMIN_PANEL");
  const canUseAdmin = hasAdminSession || Boolean(adminKey.trim());

  useEffect(() => {
    setAdminKey(window.localStorage.getItem(storageKey) ?? "");
  }, []);

  const requestAdmin = useCallback(
    async (path: string, init?: RequestInit) => {
      const key = adminKey.trim();

      const headers = new Headers(init?.headers);
      if (key) {
        headers.set("x-api-key", key);
      }
      if (init?.body && !headers.has("content-type")) {
        headers.set("content-type", "application/json");
      }

      const response = await fetch(path, {
        ...init,
        headers,
      });
      const payload = (await response.json().catch(() => null)) as unknown;

      if (!response.ok) {
        throw new Error(responseMessage(payload, "Inicie sessão como admin ou informe a ADMIN_API_KEY."));
      }

      return payload;
    },
    [adminKey],
  );

  const loadGyms = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const payload = (await requestAdmin(`/api/places/gyms/discovered/admin?limit=${limit}`)) as AdminListResponse;
      setItems(payload.items ?? []);
      window.localStorage.setItem(storageKey, adminKey.trim());
      setMessage(`${payload.items?.length ?? 0} locais carregados para revisão.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao carregar ginásios.");
    } finally {
      setLoading(false);
    }
  }, [adminKey, limit, requestAdmin]);

  const discoverGyms = useCallback(async () => {
    setDiscovering(true);
    setError(null);
    setMessage(null);

    try {
      const params = new URLSearchParams({
        limitPerZone: String(limitPerZone),
        radius: "8000",
        refresh: refreshDiscovery ? "true" : "false",
      });
      const payload = (await requestAdmin(`/api/places/gyms/discover-luanda?${params.toString()}`, {
        method: "POST",
      })) as { meta?: { count?: number; discovered?: number } };
      const total = payload.meta?.count ?? payload.meta?.discovered ?? 0;
      setMessage(`${total} locais encontrados na descoberta de Luanda.`);
      await loadGyms();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao descobrir ginásios.");
    } finally {
      setDiscovering(false);
    }
  }, [limitPerZone, loadGyms, refreshDiscovery, requestAdmin]);

  const runItemAction = useCallback(
    async (gym: DiscoveredGym, action: "hide" | "duplicate" | "claim") => {
      setActiveId(gym.id);
      setError(null);
      setMessage(null);

      try {
        await requestAdmin(`/api/places/gyms/discovered/${gym.id}/${action}`, { method: "PATCH" });
        setMessage(`${gym.name} atualizado.`);
        await loadGyms();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ação não concluída.");
      } finally {
        setActiveId(null);
      }
    },
    [loadGyms, requestAdmin],
  );

  const linkGym = useCallback(
    async (gym: DiscoveredGym) => {
      const gymId = gymIds[gym.id]?.trim();
      if (!gymId) {
        setError("Informe o ID do parceiro Noogym que deve ser vinculado.");
        return;
      }

      setActiveId(gym.id);
      setError(null);
      setMessage(null);

      try {
        await requestAdmin(`/api/places/gyms/discovered/${gym.id}/link`, {
          body: JSON.stringify({ gymId }),
          method: "PATCH",
        });
        setMessage(`${gym.name} vinculado a um parceiro Noogym.`);
        await loadGyms();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Não foi possível vincular o ginásio.");
      } finally {
        setActiveId(null);
      }
    },
    [gymIds, loadGyms, requestAdmin],
  );

  const createPartner = useCallback(
    async (gym: DiscoveredGym) => {
      setActiveId(gym.id);
      setError(null);
      setMessage(null);

      const basePrice = Number(prices[gym.id]);
      const body = {
        city: gym.city ?? "Luanda",
        status: createStatus[gym.id] ?? "DRAFT",
        ...(Number.isFinite(basePrice) && basePrice > 0 ? { basePrice } : {}),
      };

      try {
        await requestAdmin(`/api/places/gyms/discovered/${gym.id}/create-partner`, {
          body: JSON.stringify(body),
          method: "POST",
        });
        setMessage(`${gym.name} criado como parceiro Noogym.`);
        await loadGyms();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Não foi possível criar parceiro.");
      } finally {
        setActiveId(null);
      }
    },
    [createStatus, loadGyms, prices, requestAdmin],
  );

  const copyText = useCallback(async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setMessage(`${label} copiado.`);
  }, []);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesStatus = statusFilter === "Todos" || getStatusFilter(item.status) === statusFilter;
      const matchesQuery =
        !normalizedQuery ||
        item.name.toLowerCase().includes(normalizedQuery) ||
        item.address?.toLowerCase().includes(normalizedQuery) ||
        item.matchedGym?.name.toLowerCase().includes(normalizedQuery);

      return matchesStatus && matchesQuery;
    });
  }, [items, query, statusFilter]);

  const stats = useMemo(() => {
    const byStatus = items.reduce<Record<string, number>>((acc, item) => {
      acc[item.status] = (acc[item.status] ?? 0) + 1;
      return acc;
    }, {});

    return {
      total: items.length,
      discovered: byStatus.DISCOVERED ?? 0,
      matched: byStatus.MATCHED ?? 0,
      hidden: (byStatus.HIDDEN ?? 0) + (byStatus.DUPLICATE ?? 0),
    };
  }, [items]);

  return (
    <section className="container-page py-8 sm:py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-limebrand">Admin Noogym</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Gestão de ginásios</h1>
          <p className="mt-4 text-base leading-7 text-white/64">
            Reveja ginásios encontrados no Google Maps, vincule duplicados a parceiros existentes e crie novos parceiros em rascunho.
          </p>
        </div>
        <Button href="/explorar-ginasios" variant="secondary">
          <MapPin className="h-4 w-4" />
          Ver listagem pública
        </Button>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(280px,360px)_1fr]">
        <aside className="space-y-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-limebrand text-black">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-black">Acesso admin</h2>
                <p className="text-xs text-white/52">
                  {hasAdminSession ? `Sessão admin: ${user?.name}` : "Login admin ou chave de bootstrap."}
                </p>
              </div>
            </div>
            <label className="mt-5 block text-sm font-bold text-white/82" htmlFor="admin-key">
              Chave de administração opcional
            </label>
            <input
              id="admin-key"
              type="password"
              value={adminKey}
              onChange={(event) => setAdminKey(event.target.value)}
              placeholder="ADMIN_API_KEY para bootstrap"
              className="mt-2 h-11 w-full rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none transition placeholder:text-white/35 focus:border-limebrand/70"
            />
            {!hasAdminSession ? (
              <p className="mt-3 text-xs leading-5 text-white/50">
                Depois de criar um usuário admin, entre com ele e já não precisa preencher a chave aqui.
              </p>
            ) : null}
            <Button onClick={loadGyms} disabled={loading || !canUseAdmin} className="mt-3 w-full">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              Carregar admin
            </Button>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-white/8 text-limebrand">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-black">Descoberta Google</h2>
                <p className="text-xs text-white/52">Busca por zonas de Luanda.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <label className="block text-sm font-bold text-white/82">
                Por zona
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={limitPerZone}
                  onChange={(event) => setLimitPerZone(Number(event.target.value))}
                  className="mt-2 h-11 w-full rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none focus:border-limebrand/70"
                />
              </label>
              <label className="block text-sm font-bold text-white/82">
                Listar
                <input
                  type="number"
                  min={1}
                  max={200}
                  value={limit}
                  onChange={(event) => setLimit(Number(event.target.value))}
                  className="mt-2 h-11 w-full rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none focus:border-limebrand/70"
                />
              </label>
            </div>
            <label className="mt-4 flex items-center gap-3 rounded-md border border-white/10 bg-black/20 px-3 py-3 text-sm text-white/72">
              <input
                type="checkbox"
                checked={refreshDiscovery}
                onChange={(event) => setRefreshDiscovery(event.target.checked)}
                className="h-4 w-4 accent-limebrand"
              />
              Forçar nova busca no Google
            </label>
            <Button onClick={discoverGyms} disabled={discovering || !canUseAdmin} className="mt-3 w-full">
              {discovering ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              Descobrir Luanda
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Total" value={stats.total} />
            <StatCard label="Novos" value={stats.discovered} />
            <StatCard label="Vinculados" value={stats.matched} />
            <StatCard label="Ocultos/Dupl." value={stats.hidden} />
          </div>
        </aside>

        <div className="min-w-0">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div className="relative min-w-0 flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/42" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Buscar por nome, endereço ou parceiro..."
                  className="h-11 w-full rounded-md border border-white/10 bg-black/28 pl-10 pr-3 text-sm outline-none transition placeholder:text-white/35 focus:border-limebrand/70"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {statusFilters.map((item) => (
                  <button
                    key={item}
                    onClick={() => setStatusFilter(item)}
                    className={cn(
                      "h-10 rounded-md border px-3 text-sm font-bold transition",
                      statusFilter === item
                        ? "border-limebrand bg-limebrand text-black"
                        : "border-white/10 bg-black/20 text-white/70 hover:border-limebrand/60 hover:text-limebrand",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {(message || error) && (
              <div
                className={cn(
                  "mt-4 rounded-md border px-4 py-3 text-sm",
                  error ? "border-red-300/35 bg-red-500/10 text-red-100" : "border-limebrand/35 bg-limebrand/10 text-limebrand",
                )}
              >
                {error ?? message}
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 text-sm text-white/58">
            <span className="inline-flex items-center gap-2">
              <Filter className="h-4 w-4" />
              {filteredItems.length} de {items.length} locais
            </span>
            <button onClick={loadGyms} disabled={loading || !canUseAdmin} className="font-bold text-limebrand disabled:text-white/34">
              Atualizar
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {filteredItems.length ? (
              filteredItems.map((gym) => (
                <DiscoveredGymRow
                  key={gym.id}
                  active={activeId === gym.id}
                  gym={gym}
                  gymId={gymIds[gym.id] ?? ""}
                  price={prices[gym.id] ?? ""}
                  createStatus={createStatus[gym.id] ?? "DRAFT"}
                  onCopy={copyText}
                  onCreatePartner={createPartner}
                  onGymIdChange={(value) => setGymIds((current) => ({ ...current, [gym.id]: value }))}
                  onLink={linkGym}
                  onMark={runItemAction}
                  onPriceChange={(value) => setPrices((current) => ({ ...current, [gym.id]: value }))}
                  onStatusChange={(value) => setCreateStatus((current) => ({ ...current, [gym.id]: value }))}
                />
              ))
            ) : (
              <div className="rounded-lg border border-dashed border-white/12 bg-white/[0.02] p-8 text-center">
                <Building2 className="mx-auto h-9 w-9 text-white/36" />
                <h2 className="mt-4 text-xl font-black">Nenhum ginásio para mostrar</h2>
                <p className="mt-2 text-sm text-white/58">Carregue a área admin ou ajuste os filtros.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <p className="text-2xl font-black text-limebrand">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/46">{label}</p>
    </div>
  );
}

function DiscoveredGymRow({
  active,
  gym,
  gymId,
  price,
  createStatus,
  onCopy,
  onCreatePartner,
  onGymIdChange,
  onLink,
  onMark,
  onPriceChange,
  onStatusChange,
}: {
  active: boolean;
  gym: DiscoveredGym;
  gymId: string;
  price: string;
  createStatus: "DRAFT" | "ACTIVE";
  onCopy: (value: string, label: string) => void;
  onCreatePartner: (gym: DiscoveredGym) => void;
  onGymIdChange: (value: string) => void;
  onLink: (gym: DiscoveredGym) => void;
  onMark: (gym: DiscoveredGym, action: "hide" | "duplicate" | "claim") => void;
  onPriceChange: (value: string) => void;
  onStatusChange: (value: "DRAFT" | "ACTIVE") => void;
}) {
  const statusLabel = statusLabels[gym.status] ?? gym.status;

  return (
    <article className="rounded-lg border border-white/10 bg-[#071011] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className={cn("rounded-full border px-2.5 py-1 text-xs font-black", statusStyles[gym.status] ?? "border-white/16 bg-white/8 text-white/70")}>
                  {statusLabel}
                </span>
                {gym.matchedGym ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-limebrand/35 bg-limebrand/10 px-2.5 py-1 text-xs font-black text-limebrand">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Parceiro Noogym
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/6 px-2.5 py-1 text-xs font-bold text-white/62">
                    Google Maps
                  </span>
                )}
              </div>
              <h2 className="mt-3 truncate text-xl font-black">{gym.name}</h2>
              <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-white/58">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-limebrand" />
                <span>{gym.address ?? "Endereço não disponível"}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onCopy(gym.id, "ID interno")}
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white/62 transition hover:border-limebrand/60 hover:text-limebrand"
                title="Copiar ID interno"
              >
                <Copy className="h-4 w-4" />
              </button>
              <a
                href={mapsHref(gym)}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white/62 transition hover:border-limebrand/60 hover:text-limebrand"
                title="Abrir no Google Maps"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-4 grid gap-3 text-sm text-white/62 sm:grid-cols-2 lg:grid-cols-4">
            <Info label="Avaliação" value={gym.rating ? `${gym.rating.toFixed(1)} (${gym.reviewCount})` : "Sem avaliação"} />
            <Info label="Estado" value={gym.openNow === true ? "Aberto agora" : gym.openNow === false ? "Fechado agora" : "Não informado"} />
            <Info label="Cidade" value={gym.city ?? "Luanda"} />
            <Info label="Atualizado" value={formatDate(gym.updatedAt)} />
          </div>

          {gym.matchedGym ? (
            <div className="mt-4 rounded-md border border-limebrand/18 bg-limebrand/8 p-3 text-sm">
              <p className="font-bold text-limebrand">Vinculado a {gym.matchedGym.name}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/58">
                <button onClick={() => onCopy(gym.matchedGym?.id ?? "", "ID do parceiro")} className="font-bold text-white/72 hover:text-limebrand">
                  ID: {gym.matchedGym.id}
                </button>
                <span>Status: {gym.matchedGym.status}</span>
                <Link href={`/explorar-ginasios/${gym.matchedGym.slug}`} className="font-bold text-limebrand">
                  Ver página
                </Link>
              </div>
            </div>
          ) : null}
        </div>

        <div className="space-y-3 rounded-md border border-white/10 bg-black/24 p-3">
          <div className="grid grid-cols-[1fr_auto] gap-2">
            <input
              value={gymId}
              onChange={(event) => onGymIdChange(event.target.value)}
              placeholder="ID do parceiro existente"
              className="h-10 rounded-md border border-white/10 bg-white/[0.035] px-3 text-sm outline-none placeholder:text-white/34 focus:border-limebrand/70"
            />
            <button
              onClick={() => onLink(gym)}
              disabled={active || !gymId.trim()}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/14 px-3 text-sm font-black transition hover:border-limebrand/70 hover:text-limebrand disabled:opacity-45"
            >
              {active ? <Loader2 className="h-4 w-4 animate-spin" /> : <Link2 className="h-4 w-4" />}
              Vincular
            </button>
          </div>

          <div className="grid gap-2 sm:grid-cols-[1fr_116px]">
            <input
              value={price}
              onChange={(event) => onPriceChange(event.target.value)}
              placeholder="Preço base Kz"
              type="number"
              min={0}
              className="h-10 rounded-md border border-white/10 bg-white/[0.035] px-3 text-sm outline-none placeholder:text-white/34 focus:border-limebrand/70"
            />
            <select
              value={createStatus}
              onChange={(event) => onStatusChange(event.target.value as "DRAFT" | "ACTIVE")}
              className="h-10 rounded-md border border-white/10 bg-[#071011] px-3 text-sm outline-none focus:border-limebrand/70"
            >
              <option value="DRAFT">Rascunho</option>
              <option value="ACTIVE">Ativo</option>
            </select>
          </div>
          <Button onClick={() => onCreatePartner(gym)} disabled={active || gym.status === "MATCHED"} className="w-full" size="sm">
            {active ? <Loader2 className="h-4 w-4 animate-spin" /> : <Building2 className="h-4 w-4" />}
            Criar parceiro
          </Button>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => onMark(gym, "claim")}
              disabled={active}
              className="h-10 rounded-md border border-white/10 px-2 text-xs font-black text-white/68 transition hover:border-amber-300/60 hover:text-amber-200 disabled:opacity-45"
            >
              Reivindicado
            </button>
            <button
              onClick={() => onMark(gym, "duplicate")}
              disabled={active}
              className="h-10 rounded-md border border-white/10 px-2 text-xs font-black text-white/68 transition hover:border-white/35 hover:text-white disabled:opacity-45"
            >
              Duplicado
            </button>
            <button
              onClick={() => onMark(gym, "hide")}
              disabled={active}
              className="inline-flex h-10 items-center justify-center gap-1 rounded-md border border-white/10 px-2 text-xs font-black text-white/68 transition hover:border-red-300/50 hover:text-red-200 disabled:opacity-45"
            >
              <EyeOff className="h-3.5 w-3.5" />
              Ocultar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-white/8 bg-white/[0.025] p-3">
      <p className="text-xs font-black uppercase tracking-[0.12em] text-white/38">{label}</p>
      <p className="mt-1 truncate font-bold text-white/82">{value}</p>
    </div>
  );
}
