"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { BadgeCheck, KeyRound, Loader2, RefreshCw, ShieldCheck, UserPlus, UsersRound } from "lucide-react";
import { useSession } from "@/components/auth/SessionContext";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type AdminUser = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  adminAccess: {
    scope: string;
    status: string;
    approvedAt: string | null;
  } | null;
};

type AdminUsersResponse = {
  items: AdminUser[];
  meta?: {
    count?: number;
  };
};

type AdminUserPayload = {
  name: string;
  email: string;
  phone?: string;
  password?: string;
};

const storageKey = "noogym:admin-api-key";

function responseMessage(payload: unknown, fallback: string) {
  if (payload && typeof payload === "object" && "message" in payload && typeof payload.message === "string") {
    return payload.message;
  }

  return fallback;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("pt-AO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function AdminUsersClient() {
  const { user } = useSession();
  const [adminKey, setAdminKey] = useState("");
  const [items, setItems] = useState<AdminUser[]>([]);
  const [form, setForm] = useState<AdminUserPayload>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
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

  const loadUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const payload = (await requestAdmin("/api/admin/users")) as AdminUsersResponse;
      setItems(payload.items ?? []);
      if (adminKey.trim()) {
        window.localStorage.setItem(storageKey, adminKey.trim());
      }
      setMessage(`${payload.items?.length ?? 0} usuários admin carregados.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha ao carregar usuários admin.");
    } finally {
      setLoading(false);
    }
  }, [adminKey, requestAdmin]);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setMessage(null);

    const body = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone?.trim() || undefined,
      password: form.password?.trim() || undefined,
    };

    try {
      if (!body.name || !body.email) {
        throw new Error("Informe nome e e-mail.");
      }

      await requestAdmin("/api/admin/users", {
        body: JSON.stringify(body),
        method: "POST",
      });
      setForm({ name: "", email: "", phone: "", password: "" });
      setMessage("Usuário admin criado ou promovido com sucesso.");
      await loadUsers();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível criar o usuário admin.");
    } finally {
      setSubmitting(false);
    }
  }

  const activeAdmins = useMemo(
    () => items.filter((item) => item.role === "ADMIN" || item.adminAccess?.status === "ACTIVE").length,
    [items],
  );

  return (
    <section className="container-page py-8 sm:py-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-limebrand">Admin Noogym</p>
          <h1 className="mt-3 text-3xl font-black sm:text-5xl">Usuários com permissão admin</h1>
          <p className="mt-4 text-base leading-7 text-white/64">
            Crie o primeiro administrador com a chave de bootstrap e depois faça a gestão usando login normal.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/gestao/ginasios" variant="secondary">
            <ShieldCheck className="h-4 w-4" />
            Gestão de ginásios
          </Button>
          <Button href="/login?next=/gestao/usuarios" variant="secondary">
            <KeyRound className="h-4 w-4" />
            Login admin
          </Button>
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(280px,380px)_1fr]">
        <aside className="space-y-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-limebrand text-black">
                <KeyRound className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-black">Autorização</h2>
                <p className="text-xs text-white/52">
                  {hasAdminSession ? `Sessão admin: ${user?.name}` : "Use ADMIN_API_KEY para o primeiro admin."}
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
              placeholder="ADMIN_API_KEY"
              className="mt-2 h-11 w-full rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none placeholder:text-white/35 focus:border-limebrand/70"
            />
            <Button onClick={loadUsers} disabled={loading || !canUseAdmin} className="mt-3 w-full">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
              Carregar usuários
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <StatCard label="Admins" value={activeAdmins} />
            <StatCard label="Registos" value={items.length} />
          </div>
        </aside>

        <div className="min-w-0 space-y-4">
          <form onSubmit={submit} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-white/8 text-limebrand">
                <UserPlus className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-black">Criar ou promover admin</h2>
                <p className="text-sm text-white/54">Se o e-mail já existir, o usuário recebe `ADMIN_PANEL` e role `ADMIN`.</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <input
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                placeholder="Nome"
                className="h-11 rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none placeholder:text-white/35 focus:border-limebrand/70"
              />
              <input
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="email@noogym.com"
                type="email"
                className="h-11 rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none placeholder:text-white/35 focus:border-limebrand/70"
              />
              <input
                value={form.phone}
                onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                placeholder="Telefone opcional"
                className="h-11 rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none placeholder:text-white/35 focus:border-limebrand/70"
              />
              <input
                value={form.password}
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                placeholder="Senha inicial, mínimo 8 caracteres"
                type="password"
                className="h-11 rounded-md border border-white/10 bg-black/28 px-3 text-sm outline-none placeholder:text-white/35 focus:border-limebrand/70"
              />
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

            <Button type="submit" disabled={submitting || !canUseAdmin} className="mt-4 w-full md:w-auto">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserPlus className="h-4 w-4" />}
              Salvar admin
            </Button>
          </form>

          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="font-black">Admins cadastrados</h2>
                <p className="mt-1 text-sm text-white/52">Usuários com role admin ou escopo ADMIN_PANEL.</p>
              </div>
              <UsersRound className="h-5 w-5 text-limebrand" />
            </div>

            <div className="mt-4 space-y-3">
              {items.length ? (
                items.map((item) => <AdminUserRow key={item.id} item={item} />)
              ) : (
                <div className="rounded-lg border border-dashed border-white/12 bg-black/18 p-8 text-center">
                  <UsersRound className="mx-auto h-9 w-9 text-white/36" />
                  <h3 className="mt-4 text-lg font-black">Nenhum admin carregado</h3>
                  <p className="mt-2 text-sm text-white/58">Carregue a lista ou crie o primeiro usuário admin.</p>
                </div>
              )}
            </div>
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

function AdminUserRow({ item }: { item: AdminUser }) {
  return (
    <article className="rounded-lg border border-white/10 bg-[#071011] p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-limebrand/35 bg-limebrand/10 px-2.5 py-1 text-xs font-black text-limebrand">
              <BadgeCheck className="h-3.5 w-3.5" />
              {item.role}
            </span>
            <span className="rounded-full border border-white/12 bg-white/6 px-2.5 py-1 text-xs font-bold text-white/62">
              {item.adminAccess?.status ?? "Sem ADMIN_PANEL"}
            </span>
          </div>
          <h3 className="mt-3 truncate text-lg font-black">{item.name}</h3>
          <p className="mt-1 text-sm text-white/58">{item.email}</p>
        </div>
        <div className="grid gap-2 text-sm text-white/58 sm:grid-cols-2 md:min-w-72">
          <Info label="Telefone" value={item.phone ?? "Não informado"} />
          <Info label="Atualizado" value={formatDate(item.updatedAt)} />
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
