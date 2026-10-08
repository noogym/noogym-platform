"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CalendarCheck, CheckCircle2, CreditCard, Dumbbell, Heart, MapPin, ShieldCheck, ShoppingBag, User, UsersRound } from "lucide-react";
import { useSession } from "@/components/auth/SessionContext";
import { Button } from "@/components/ui/Button";
import { gyms as publicGyms } from "@/data/gyms";
import { hasAdminAccess, hasPartnerGymAccess, hasPersonalAccess, hasSellerAccess } from "@/lib/dashboard-access";
import { cn } from "@/lib/utils";

const favoriteGymsStorageKey = "noogym.favoriteGyms";

type ActionCardProps = {
  description: string;
  href: string;
  icon: typeof MapPin;
  title: string;
  tone?: "lime" | "blue" | "amber";
};

function readFavoriteSlugs() {
  try {
    const stored = window.localStorage.getItem(favoriteGymsStorageKey);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    window.localStorage.removeItem(favoriteGymsStorageKey);
    return [];
  }
}

export function DashboardRoleSummary() {
  const { user } = useSession();
  const [favoriteSlugs, setFavoriteSlugs] = useState<string[]>([]);

  useEffect(() => {
    setFavoriteSlugs(readFavoriteSlugs());
  }, []);

  const favoriteGyms = useMemo(
    () => publicGyms.filter((gym) => favoriteSlugs.includes(gym.slug)).slice(0, 3),
    [favoriteSlugs],
  );
  const isAdmin = hasAdminAccess(user);
  const isGymPartner = hasPartnerGymAccess(user);
  const isPersonal = hasPersonalAccess(user);
  const isSeller = hasSellerAccess(user);

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-6">
        <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-limebrand">Próxima melhor ação</p>
              <h2 className="mt-2 text-2xl font-black">Olá, {user?.name?.split(" ")[0] ?? "Noogym"}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">
                O dashboard agora mostra atalhos conforme as permissões da conta, para separar rotina do atleta, operação Noogym e painéis profissionais.
              </p>
            </div>
            <Button href={isAdmin ? "/gestao" : "/explorar-ginasios"}>
              {isAdmin ? <ShieldCheck className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
              {isAdmin ? "Abrir gestão" : "Explorar ginásios"}
            </Button>
          </div>
        </section>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Metric label="Plano atual" value="Premium" detail="Benefícios ativos" icon={CreditCard} />
          <Metric label="Check-ins" value="12" detail="Este mês" icon={CalendarCheck} />
          <Metric label="Favoritos" value={String(favoriteSlugs.length)} detail="Ginásios salvos" icon={Heart} />
          <Metric label="Sequência" value="7 dias" detail="Ritmo de treino" icon={CheckCircle2} />
        </div>

        {isAdmin ? <AdminOperationsBlock /> : null}

        <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-black">Atalhos por perfil</h2>
              <p className="mt-1 text-sm text-white/56">Só aparecem módulos compatíveis com a conta.</p>
            </div>
            <Link href="/dashboard/perfil?tab=perfis-e-vinculos" className="text-sm font-bold text-limebrand">
              Gerir vínculos
            </Link>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <ActionCard href="/dashboard/academias" icon={MapPin} title="Ginásios" description="Favoritos, visitas e check-in." />
            <ActionCard href="/dashboard/check-ins" icon={CalendarCheck} title="Check-ins" description="Histórico e frequência." />
            <ActionCard href="/dashboard/treinos" icon={Dumbbell} title="Treinos" description="Planos e biblioteca." />
            {isPersonal ? <ActionCard href="/dashboard/painel-personal" icon={User} title="Painel Personal" description="Alunos, agenda e avaliações." tone="blue" /> : null}
            {isSeller ? <ActionCard href="/dashboard/minha-loja" icon={ShoppingBag} title="Minha loja" description="Produtos, pedidos e estoque." tone="amber" /> : null}
            {isGymPartner ? <ActionCard href="/dashboard/academias?tab=meus-ginasios" icon={BadgeCheck} title="Painel do ginásio" description="Vínculos e operação do parceiro." tone="blue" /> : null}
          </div>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-black">Ginásios favoritos</h2>
              <p className="mt-1 text-sm text-white/56">Sincronizado com a página Explorar Ginásios neste navegador.</p>
            </div>
            <Link href="/explorar-ginasios" className="text-sm font-bold text-limebrand">
              Explorar mais
            </Link>
          </div>

          {favoriteGyms.length ? (
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {favoriteGyms.map((gym) => (
                <Link key={gym.slug} href={`/explorar-ginasios/${gym.slug}`} className="overflow-hidden rounded-lg border border-white/10 bg-black/18 transition hover:border-limebrand/55">
                  <Image src={gym.image} alt={gym.name} width={360} height={180} className="h-32 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-black">{gym.name}</h3>
                    <p className="mt-1 text-sm text-white/58">{gym.location}</p>
                    <p className="mt-3 text-sm font-bold text-limebrand">Fazer check-in</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-lg border border-dashed border-white/12 bg-black/18 p-6 text-center">
              <Heart className="mx-auto h-8 w-8 text-white/35" />
              <h3 className="mt-3 font-black">Ainda sem ginásios favoritos</h3>
              <p className="mt-2 text-sm text-white/56">Salve ginásios na página de exploração para acelerar check-ins e comparação.</p>
              <Button href="/explorar-ginasios" variant="secondary" className="mt-4">
                Ver ginásios
              </Button>
            </div>
          )}
        </section>
      </div>

      <aside className="space-y-5">
        <section className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
          <h2 className="text-lg font-black">Estado da conta</h2>
          <div className="mt-4 space-y-3">
            <StatusLine label="Sessão" value="Ativa" />
            <StatusLine label="Perfil" value={user?.role ?? "CUSTOMER"} />
            <StatusLine label="Acessos" value={user?.accesses?.length ? `${user.accesses.length} ativos` : "Conta base"} />
          </div>
        </section>

        <section className="rounded-lg border border-limebrand/30 bg-limebrand/8 p-5">
          <h2 className="text-lg font-black text-limebrand">Melhoria aplicada</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">
            O dashboard agora tem menus por permissão, resumo por perfil e ligação inicial com favoritos reais dos ginásios.
          </p>
        </section>
      </aside>
    </div>
  );
}

function Metric({ detail, icon: Icon, label, value }: { detail: string; icon: typeof MapPin; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <Icon className="h-5 w-5 text-limebrand" />
      <p className="mt-4 text-sm text-white/54">{label}</p>
      <p className="mt-1 text-2xl font-black">{value}</p>
      <p className="mt-1 text-xs text-white/44">{detail}</p>
    </div>
  );
}

function ActionCard({ description, href, icon: Icon, title, tone = "lime" }: ActionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-lg border p-4 transition",
        tone === "lime" && "border-white/10 bg-black/18 hover:border-limebrand/55",
        tone === "blue" && "border-sky-300/18 bg-sky-400/8 hover:border-sky-300/45",
        tone === "amber" && "border-amber-300/18 bg-amber-300/8 hover:border-amber-300/45",
      )}
    >
      <Icon className="h-5 w-5 text-limebrand" />
      <h3 className="mt-4 font-black">{title}</h3>
      <p className="mt-1 text-sm leading-5 text-white/56">{description}</p>
    </Link>
  );
}

function AdminOperationsBlock() {
  return (
    <section className="rounded-lg border border-limebrand/24 bg-limebrand/8 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-limebrand">Operação Noogym</p>
          <h2 className="mt-1 text-xl font-black">Fila de gestão</h2>
        </div>
        <ShieldCheck className="h-6 w-6 text-limebrand" />
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <ActionCard href="/gestao/contas" icon={UsersRound} title="Contas" description="Todos os usuários e permissões." />
        <ActionCard href="/gestao/ginasios-cadastrados" icon={BadgeCheck} title="Ginásios cadastrados" description="Base oficial de parceiros." />
        <ActionCard href="/gestao/ginasios" icon={MapPin} title="Descoberta Google" description="Google Maps, duplicados e parceiros." />
        <ActionCard href="/gestao/usuarios" icon={UsersRound} title="Usuários admin" description="Criar e promover administradores." />
      </div>
    </section>
  );
}

function StatusLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-white/8 pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-white/58">{label}</span>
      <span className="truncate text-sm font-bold text-white">{value}</span>
    </div>
  );
}
