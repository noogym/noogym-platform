"use client";

import Link from "next/link";
import { ArrowRight, Dumbbell, Heart, MapPin, ShieldCheck, Smartphone, UserRound, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSession } from "@/components/auth/SessionContext";
import { Button } from "@/components/ui/Button";
import { hasAdminAccess } from "@/lib/dashboard-access";

const favoriteGymsStorageKey = "noogym.favoriteGyms";

function readFavoriteSlugs() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(favoriteGymsStorageKey) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((value): value is string => typeof value === "string") : [];
  } catch {
    window.localStorage.removeItem(favoriteGymsStorageKey);
    return [];
  }
}

export function DashboardRoleSummary() {
  const { user } = useSession();
  const firstName = user?.name?.trim().split(/\s+/)[0] || "";
  const admin = hasAdminAccess(user);

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_90%_0%,rgba(182,255,0,.15),transparent_32rem),rgba(255,255,255,.025)] p-6 sm:p-9">
        <p className="text-xs font-black uppercase tracking-[.18em] text-limebrand">A tua jornada Noogym</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">{firstName ? `Olá, ${firstName}.` : "Bem-vindo ao Noogym."}</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-white/68">Um só lugar para acompanhares a tua actividade, descobrires ginásios e encontrares o que precisas para treinar.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={admin ? "/gestao" : "/dashboard/ginasios"}>
            {admin ? <ShieldCheck className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}{admin ? "Abrir gestão" : "Encontrar um ginásio"}
          </Button>
          <Link href="/dashboard/treinos" className="inline-flex h-11 items-center gap-2 rounded-md border border-white/15 px-5 text-sm font-bold text-white transition hover:border-limebrand/50">
            <Dumbbell className="h-4 w-4" />Ver os meus treinos
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <QuickLink href="/dashboard/ginasios" icon={MapPin} title="Ginásios" description="Descobre espaços e guarda os teus favoritos." />
        <QuickLink href="/dashboard/treinos" icon={Dumbbell} title="Treinos" description="Acede aos teus treinos quando estiverem ligados à conta." />
        <QuickLink href="/dashboard/perfil" icon={UserRound} title="A minha conta" description="Actualiza os teus dados e preferências." />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
          <div className="flex items-center gap-3"><Heart className="h-5 w-5 text-limebrand" /><h3 className="font-bold">Os teus favoritos</h3></div>
          <FavoriteGyms />
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
          <div className="flex items-center gap-3"><Smartphone className="h-5 w-5 text-limebrand" /><h3 className="font-bold">Continua na app</h3></div>
          <p className="mt-3 text-sm leading-6 text-white/62">A experiência de treino acompanha-te no telemóvel. As actividades e o progresso aparecem aqui quando estiverem sincronizados com a tua conta.</p>
          <Link href="/planos" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-limebrand">Ver planos Noogym <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

    </div>
  );
}

function QuickLink({ href, icon: Icon, title, description }: { href: string; icon: LucideIcon; title: string; description: string }) {
  return <Link href={href} className="rounded-xl border border-white/10 bg-white/[0.025] p-5 transition hover:border-limebrand/45"><Icon className="h-5 w-5 text-limebrand" /><h3 className="mt-4 font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-white/58">{description}</p></Link>;
}

function FavoriteGyms() {
  const [slugs, setSlugs] = useState<string[]>([]);
  useEffect(() => setSlugs(readFavoriteSlugs()), []);
  return <><p className="mt-3 text-sm text-white/58">{slugs.length ? `${slugs.length} ginásio${slugs.length === 1 ? " guardado" : "s guardados"} neste navegador.` : "Ainda não guardaste nenhum ginásio neste navegador."}</p><Link href="/dashboard/ginasios" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-limebrand">Explorar ginásios <ArrowRight className="h-4 w-4" /></Link></>;
}
