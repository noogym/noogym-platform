"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BadgeCheck, Building2, Copy, ExternalLink, ImageIcon, KeyRound, Loader2, MapPin, RefreshCw, Search } from "lucide-react";
import { useSession } from "@/components/auth/SessionContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type AdminGym = {
  id: string;
  ownerId: string | null;
  slug: string;
  name: string;
  shortDescription: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  address: string | null;
  neighborhood: string | null;
  city: string;
  province: string | null;
  country: string;
  latitude: number | null;
  longitude: number | null;
  basePrice: number | null;
  ratingAvg: number;
  reviewCount: number;
  coverImage: string | null;
  status: string;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
  owner: { id: string; name: string; email: string } | null;
  counts: {
    checkIns: number;
    classes: number;
    discoveredPlaces: number;
    images: number;
    plans: number;
    reviews: number;
    staffMemberships: number;
  };
};

type GymsResponse = {
  items: AdminGym[];
};

const storageKey = "noogym:admin-api-key";
const statuses = ["Todos", "DRAFT", "ACTIVE", "PAUSED", "ARCHIVED"];

function responseMessage(payload: unknown, fallback: string) {
  if (payload && typeof payload === "object" && "message" in payload && typeof payload.message === "string") {
    return payload.message;
  }

  return fallback;
}

function formatDate(value: string | null) {
  if (!value) return "Não publicado";
  return new Intl.DateTimeFormat("pt-AO", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function formatKz(value: number | null) {
  if (!value) return "Sem preço";
  return new Intl.NumberFormat("pt-AO").format(value) + " Kz";
}

export function RegisteredGymsClient() {
  const { user } = useSession();
  const [adminKey, setAdminKey] = useState("");
  const [items, setItems] = useState<AdminGym[]>([]);
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("Todos");
  const [limit, setLimit] = useState(160);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const hasAdminSession = user?.role === "ADMIN" || user?.accesses?.includes("ADMIN_PANEL");
  const canUseAdmin = hasAdminSession || Boolean(adminKey.trim());

  useEffect(() => {
    setAdminKey(window.localStorage.getItem(storageKey) ?? "");
  }, []);

  const requestAdmin = useCallback(
    async (path: string, init?: RequestInit) => {
      const headers = new Headers(init?.headers);
      const key = adminKey.trim();

      if (key) headers.set("x-api-key", key);
      const response = await fetch(path, { ...init, headers });
      const payload = (await response.json().catch(() => null)) as unknown;

      if (!response.ok) throw new Error(responseMessage(payload, "Não foi possível concluir a ação."));
      return payload;
    },
    [adminKey],
  );

  const loadGyms = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const params = new URLSearchParams({ limit: String(limit) });
      if (query.trim()) params.set("search", query.trim());
      if (city.trim()) params.set("city", city.trim());
      if (status !== "Todos") params.set("status", status);

      const payload = (await requestAdmin(`/api/admin/gyms?${params.toString()}`)) as GymsResponse;
      setItems(payload.items ?? []);
      if (adminKey.trim()) window.localStorage.setItem(storageKey, adminKey.trim());
      setMessage(`${payload.items?.length ?? 0} ginásios cadastrados carregados.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao carregar ginásios.");
    } finally {
      setLoading(false);
    }
  }, [adminKey, city, limit, query, requestAdmin, status]);

  const copyText = useCallback(async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setMessage(`${label} copiado.`);
  }, []);

  const stats = useMemo(
    () => ({
      total: items.length,
      active: items.filter((item) => item.status === "ACTIVE").length,
      draft: items.filter((item) => item.status === "DRAFT").length,
      withPhoto: items.filter((item) => item.coverImage || item.counts.images > 0).length,
    }),
    [items],
  );

  return (
    <section className="container-page py-8 sm:py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-limebrand">Admin Noogym</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Ginásios cadastrados</h1>
          <p className="mt-4 text-base leading-7 text-white/64">Base oficial de parceiros e rascunhos Noogym, separada da descoberta do Google Maps.</p>
        </div>
        <Button href="/gestao/ginasios" variant="secondary">
          <MapPin className="h-4 w-4" />
          Descoberta Google
        </Button>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-limebrand text-black"><KeyRound className="h-5 w-5" /></span>
              <div>
                <h2 className="font-black">Autorização</h2>
                <p className="text-xs text-white/52">{hasAdminSession ? `Sessão admin: ${user?.name}` : "Use ADMIN_API_KEY."}</p>
              </div>
            </div>
            <input type="password" value={adminKey} onChange={(event) => setAdminKey(event.target.value)} placeholder="ADMIN_API_KEY opcional" className="mt-4 h-11 w-full rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none placeholder:text-white/35 focus:border-limebrand/70" />
            <Button onClick={loadGyms} disabled={loading || !canUseAdmin} className="mt-3 w-full">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              Carregar ginásios
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Total" value={stats.total} />
            <StatCard label="Ativos" value={stats.active} />
            <StatCard label="Rascunhos" value={stats.draft} />
            <StatCard label="Com foto" value={stats.withPhoto} />
          </div>
        </aside>

        <div className="min-w-0 space-y-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="grid gap-3 xl:grid-cols-[1fr_150px_150px_110px_auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/42" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por nome, slug, endereço, e-mail..." className="h-11 w-full rounded-md border border-white/10 bg-black/28 pl-10 pr-3 text-sm outline-none placeholder:text-white/35 focus:border-limebrand/70" />
              </div>
              <input value={city} onChange={(event) => setCity(event.target.value)} placeholder="Cidade" className="h-11 rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none placeholder:text-white/35 focus:border-limebrand/70" />
              <select value={status} onChange={(event) => setStatus(event.target.value)} className="h-11 rounded-md border border-white/10 bg-[#071011] px-3 text-sm outline-none focus:border-limebrand/70">{statuses.map((item) => <option key={item}>{item}</option>)}</select>
              <input value={limit} type="number" min={1} max={500} onChange={(event) => setLimit(Number(event.target.value))} className="h-11 rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none focus:border-limebrand/70" />
              <Button onClick={loadGyms} disabled={loading || !canUseAdmin}>Filtrar</Button>
            </div>
            {(message || error) ? <Alert tone={error ? "error" : "success"}>{error ?? message}</Alert> : null}
          </div>

          <div className="space-y-3">
            {items.length ? items.map((gym) => (
              <article key={gym.id} className="rounded-lg border border-white/10 bg-[#071011] p-4">
                <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone={gym.status === "ACTIVE" ? "lime" : gym.status === "DRAFT" ? "blue" : "muted"}>{gym.status}</Badge>
                      {gym.publishedAt ? <Badge tone="lime">Publicado</Badge> : <Badge tone="muted">Não publicado</Badge>}
                      {gym.coverImage || gym.counts.images > 0 ? <Badge tone="blue">Com imagem</Badge> : <Badge tone="muted">Sem imagem</Badge>}
                    </div>
                    <h2 className="mt-3 truncate text-xl font-black">{gym.name}</h2>
                    <p className="mt-1 text-sm text-white/58">{gym.neighborhood ? `${gym.neighborhood}, ` : ""}{gym.city}, {gym.country}</p>
                    <p className="mt-2 text-sm text-white/46">{gym.address ?? "Endereço não informado"}</p>
                    <div className="mt-4 grid gap-3 text-sm sm:grid-cols-4">
                      <Info label="Preço base" value={formatKz(gym.basePrice)} />
                      <Info label="Avaliação" value={`${gym.ratingAvg.toFixed(1)} (${gym.reviewCount})`} />
                      <Info label="Planos" value={String(gym.counts.plans)} />
                      <Info label="Publicado" value={formatDate(gym.publishedAt)} />
                    </div>
                  </div>
                  <div className="space-y-2 rounded-md border border-white/10 bg-black/24 p-3">
                    <button onClick={() => copyText(gym.id, "ID do ginásio")} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-white/12 text-sm font-black hover:border-limebrand/70 hover:text-limebrand"><Copy className="h-4 w-4" /> Copiar ID</button>
                    <Link href={`/explorar-ginasios/${gym.slug}`} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-limebrand text-sm font-black text-black"><ExternalLink className="h-4 w-4" /> Ver página pública</Link>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <MiniInfo icon={BadgeCheck} label="Equipa" value={gym.counts.staffMemberships} />
                      <MiniInfo icon={ImageIcon} label="Fotos" value={gym.counts.images} />
                    </div>
                    <div className="rounded-md border border-white/8 bg-white/[0.025] p-3 text-xs leading-5 text-white/58">
                      Dono: {gym.owner ? `${gym.owner.name} (${gym.owner.email})` : "não definido"}
                    </div>
                  </div>
                </div>
              </article>
            )) : (
              <EmptyState icon={Building2} title="Nenhum ginásio carregado" description="Carregue a listagem ou ajuste os filtros." />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4"><p className="text-2xl font-black text-limebrand">{value}</p><p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/46">{label}</p></div>;
}

function Badge({ children, tone }: { children: React.ReactNode; tone: "lime" | "blue" | "muted" }) {
  return <span className={cn("rounded-full border px-2.5 py-1 text-xs font-black", tone === "lime" && "border-limebrand/35 bg-limebrand/10 text-limebrand", tone === "blue" && "border-sky-300/30 bg-sky-400/10 text-sky-200", tone === "muted" && "border-white/12 bg-white/6 text-white/62")}>{children}</span>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-white/8 bg-white/[0.025] p-3"><p className="text-xs font-black uppercase tracking-[0.12em] text-white/38">{label}</p><p className="mt-1 truncate font-bold text-white/82">{value}</p></div>;
}

function MiniInfo({ icon: Icon, label, value }: { icon: typeof BadgeCheck; label: string; value: number }) {
  return <div className="rounded-md border border-white/8 bg-white/[0.025] p-2"><Icon className="h-4 w-4 text-limebrand" /><p className="mt-1 text-white/46">{label}</p><p className="font-black">{value}</p></div>;
}

function Alert({ children, tone }: { children: React.ReactNode; tone: "success" | "error" }) {
  return <div className={cn("mt-4 rounded-md border px-4 py-3 text-sm", tone === "error" ? "border-red-300/35 bg-red-500/10 text-red-100" : "border-limebrand/35 bg-limebrand/10 text-limebrand")}>{children}</div>;
}

function EmptyState({ description, icon: Icon, title }: { description: string; icon: typeof Building2; title: string }) {
  return <div className="rounded-lg border border-dashed border-white/12 bg-white/[0.02] p-8 text-center"><Icon className="mx-auto h-9 w-9 text-white/36" /><h2 className="mt-4 text-xl font-black">{title}</h2><p className="mt-2 text-sm text-white/58">{description}</p></div>;
}
