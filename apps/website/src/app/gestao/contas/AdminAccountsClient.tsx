"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Copy, KeyRound, Loader2, RefreshCw, Search, ShieldCheck, UserPlus, UsersRound } from "lucide-react";
import { useSession } from "@/components/auth/SessionContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type AdminAccount = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  accesses: { scope: string; status: string }[];
  gymMemberships: { role: string; status: string; gym: { id: string; name: string; slug: string; status: string } }[];
  counts: { checkIns: number; orders: number; ownedGyms: number; subscriptions: number };
};

type AccountsResponse = {
  items: AdminAccount[];
};

const storageKey = "noogym:admin-api-key";
const roles = ["Todos", "CUSTOMER", "GYM_OWNER", "GYM_STAFF", "ADMIN", "AUTHOR"];
const statuses = ["Todos", "ACTIVE", "INVITED", "SUSPENDED", "DELETED"];

function responseMessage(payload: unknown, fallback: string) {
  if (payload && typeof payload === "object" && "message" in payload && typeof payload.message === "string") {
    return payload.message;
  }

  return fallback;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-AO", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

export function AdminAccountsClient() {
  const { user } = useSession();
  const [adminKey, setAdminKey] = useState("");
  const [items, setItems] = useState<AdminAccount[]>([]);
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("Todos");
  const [status, setStatus] = useState("Todos");
  const [limit, setLimit] = useState(160);
  const [loading, setLoading] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
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
      if (init?.body && !headers.has("content-type")) headers.set("content-type", "application/json");

      const response = await fetch(path, { ...init, headers });
      const payload = (await response.json().catch(() => null)) as unknown;

      if (!response.ok) throw new Error(responseMessage(payload, "Não foi possível concluir a ação."));
      return payload;
    },
    [adminKey],
  );

  const loadAccounts = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const params = new URLSearchParams({ limit: String(limit) });
      if (query.trim()) params.set("search", query.trim());
      if (role !== "Todos") params.set("role", role);
      if (status !== "Todos") params.set("status", status);

      const payload = (await requestAdmin(`/api/admin/accounts?${params.toString()}`)) as AccountsResponse;
      setItems(payload.items ?? []);
      if (adminKey.trim()) window.localStorage.setItem(storageKey, adminKey.trim());
      setMessage(`${payload.items?.length ?? 0} contas carregadas.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao carregar contas.");
    } finally {
      setLoading(false);
    }
  }, [adminKey, limit, query, requestAdmin, role, status]);

  const promoteAdmin = useCallback(
    async (account: AdminAccount) => {
      setActiveId(account.id);
      setError(null);
      setMessage(null);

      try {
        await requestAdmin("/api/admin/users", {
          body: JSON.stringify({
            email: account.email,
            name: account.name,
            phone: account.phone ?? undefined,
          }),
          method: "POST",
        });
        setMessage(`${account.name} agora tem permissão admin.`);
        await loadAccounts();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Não foi possível promover a conta.");
      } finally {
        setActiveId(null);
      }
    },
    [loadAccounts, requestAdmin],
  );

  const copyText = useCallback(async (value: string, label: string) => {
    await navigator.clipboard.writeText(value);
    setMessage(`${label} copiado.`);
  }, []);

  const stats = useMemo(
    () => ({
      total: items.length,
      admins: items.filter((item) => item.role === "ADMIN" || item.accesses.some((access) => access.scope === "ADMIN_PANEL" && access.status === "ACTIVE")).length,
      suspended: items.filter((item) => item.status === "SUSPENDED").length,
      partners: items.filter((item) => item.role === "GYM_OWNER" || item.role === "GYM_STAFF" || item.accesses.some((access) => access.scope === "GYM_ERP")).length,
    }),
    [items],
  );

  return (
    <section className="container-page py-8 sm:py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-limebrand">Admin Noogym</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Contas criadas</h1>
          <p className="mt-4 text-base leading-7 text-white/64">Veja todos os usuários, permissões, vínculos e atividade básica da plataforma.</p>
        </div>
        <Button href="/gestao/usuarios" variant="secondary">
          <UserPlus className="h-4 w-4" />
          Criar admin
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
            <input
              type="password"
              value={adminKey}
              onChange={(event) => setAdminKey(event.target.value)}
              placeholder="ADMIN_API_KEY opcional"
              className="mt-4 h-11 w-full rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none placeholder:text-white/35 focus:border-limebrand/70"
            />
            <Button onClick={loadAccounts} disabled={loading || !canUseAdmin} className="mt-3 w-full">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              Carregar contas
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Total" value={stats.total} />
            <StatCard label="Admins" value={stats.admins} />
            <StatCard label="Parceiros" value={stats.partners} />
            <StatCard label="Suspensas" value={stats.suspended} />
          </div>
        </aside>

        <div className="min-w-0 space-y-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="grid gap-3 xl:grid-cols-[1fr_150px_150px_110px_auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/42" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por nome, e-mail ou telefone..." className="h-11 w-full rounded-md border border-white/10 bg-black/28 pl-10 pr-3 text-sm outline-none placeholder:text-white/35 focus:border-limebrand/70" />
              </div>
              <select value={role} onChange={(event) => setRole(event.target.value)} className="h-11 rounded-md border border-white/10 bg-[#071011] px-3 text-sm outline-none focus:border-limebrand/70">{roles.map((item) => <option key={item}>{item}</option>)}</select>
              <select value={status} onChange={(event) => setStatus(event.target.value)} className="h-11 rounded-md border border-white/10 bg-[#071011] px-3 text-sm outline-none focus:border-limebrand/70">{statuses.map((item) => <option key={item}>{item}</option>)}</select>
              <input value={limit} type="number" min={1} max={500} onChange={(event) => setLimit(Number(event.target.value))} className="h-11 rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none focus:border-limebrand/70" />
              <Button onClick={loadAccounts} disabled={loading || !canUseAdmin}>Filtrar</Button>
            </div>
            {(message || error) ? <Alert tone={error ? "error" : "success"}>{error ?? message}</Alert> : null}
          </div>

          <div className="space-y-3">
            {items.length ? items.map((account) => (
              <article key={account.id} className="rounded-lg border border-white/10 bg-[#071011] p-4">
                <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone={account.status === "ACTIVE" ? "lime" : account.status === "SUSPENDED" ? "red" : "muted"}>{account.status}</Badge>
                      <Badge tone={account.role === "ADMIN" ? "lime" : "muted"}>{account.role}</Badge>
                      {account.accesses.slice(0, 4).map((access) => <Badge key={access.scope} tone={access.status === "ACTIVE" ? "blue" : "muted"}>{access.scope}</Badge>)}
                    </div>
                    <h2 className="mt-3 truncate text-xl font-black">{account.name}</h2>
                    <p className="mt-1 text-sm text-white/58">{account.email}</p>
                    <div className="mt-4 grid gap-3 text-sm sm:grid-cols-4">
                      <Info label="Telefone" value={account.phone ?? "Não informado"} />
                      <Info label="Check-ins" value={String(account.counts.checkIns)} />
                      <Info label="Pedidos" value={String(account.counts.orders)} />
                      <Info label="Criada em" value={formatDate(account.createdAt)} />
                    </div>
                  </div>
                  <div className="space-y-2 rounded-md border border-white/10 bg-black/24 p-3">
                    <button onClick={() => copyText(account.id, "ID da conta")} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-white/12 text-sm font-black hover:border-limebrand/70 hover:text-limebrand"><Copy className="h-4 w-4" /> Copiar ID</button>
                    <button onClick={() => promoteAdmin(account)} disabled={activeId === account.id || account.role === "ADMIN"} className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-limebrand text-sm font-black text-black disabled:opacity-45">
                      {activeId === account.id ? <Loader2 className="h-4 w-4 animate-spin" /> : <ShieldCheck className="h-4 w-4" />}
                      Promover admin
                    </button>
                    <div className="rounded-md border border-white/8 bg-white/[0.025] p-3 text-xs leading-5 text-white/58">
                      {account.gymMemberships.length ? `${account.gymMemberships.length} vínculo(s) com ginásios` : "Sem vínculo de ginásio"}
                    </div>
                  </div>
                </div>
              </article>
            )) : (
              <EmptyState icon={UsersRound} title="Nenhuma conta carregada" description="Carregue a listagem ou ajuste os filtros." />
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

function Badge({ children, tone }: { children: React.ReactNode; tone: "lime" | "blue" | "red" | "muted" }) {
  return <span className={cn("rounded-full border px-2.5 py-1 text-xs font-black", tone === "lime" && "border-limebrand/35 bg-limebrand/10 text-limebrand", tone === "blue" && "border-sky-300/30 bg-sky-400/10 text-sky-200", tone === "red" && "border-red-300/35 bg-red-400/10 text-red-200", tone === "muted" && "border-white/12 bg-white/6 text-white/62")}>{children}</span>;
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-md border border-white/8 bg-white/[0.025] p-3"><p className="text-xs font-black uppercase tracking-[0.12em] text-white/38">{label}</p><p className="mt-1 truncate font-bold text-white/82">{value}</p></div>;
}

function Alert({ children, tone }: { children: React.ReactNode; tone: "success" | "error" }) {
  return <div className={cn("mt-4 rounded-md border px-4 py-3 text-sm", tone === "error" ? "border-red-300/35 bg-red-500/10 text-red-100" : "border-limebrand/35 bg-limebrand/10 text-limebrand")}>{children}</div>;
}

function EmptyState({ description, icon: Icon, title }: { description: string; icon: typeof UsersRound; title: string }) {
  return <div className="rounded-lg border border-dashed border-white/12 bg-white/[0.02] p-8 text-center"><Icon className="mx-auto h-9 w-9 text-white/36" /><h2 className="mt-4 text-xl font-black">{title}</h2><p className="mt-2 text-sm text-white/58">{description}</p></div>;
}
