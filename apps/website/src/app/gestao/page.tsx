import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ChevronRight, MapPinned, ShieldCheck, UserCog, UsersRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Gestao",
  description: "Area de gestao Noogym para operacoes internas e onboarding de parceiros.",
};

const adminAreas = [
  {
    href: "/gestao/contas",
    icon: UserCog,
    title: "Contas",
    description: "Ver todos os usuarios criados, permissoes, vinculos e atividade basica.",
    meta: "Usuarios",
  },
  {
    href: "/gestao/ginasios-cadastrados",
    icon: Building2,
    title: "Ginasios cadastrados",
    description: "Listar parceiros, rascunhos, status, donos e dados oficiais da base Noogym.",
    meta: "Base oficial",
  },
  {
    href: "/gestao/ginasios",
    icon: MapPinned,
    title: "Descoberta de ginasios",
    description: "Descobrir locais do Google Maps, revisar duplicados e cadastrar parceiros Noogym.",
    meta: "Onboarding e curadoria",
  },
  {
    href: "/gestao/usuarios",
    icon: UsersRound,
    title: "Usuarios admin",
    description: "Criar o primeiro administrador e promover usuarios com permissao de gestao.",
    meta: "Permissoes",
  },
  {
    href: "/explorar-ginasios",
    icon: MapPinned,
    title: "Explorar publico",
    description: "Ver como a listagem aparece para usuarios depois da curadoria.",
    meta: "Experiencia do cliente",
  },
  {
    href: "/dashboard/resumo",
    icon: ShieldCheck,
    title: "Dashboard",
    description: "Acompanhar a experiencia autenticada usada por atletas e parceiros.",
    meta: "Operacao",
  },
];

export default function ManagementPage() {
  return (
    <section className="container-page py-10 sm:py-14">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-limebrand">Admin Noogym</p>
        <h1 className="mt-3 text-3xl font-black sm:text-5xl">Gestao operacional</h1>
        <p className="mt-4 text-base leading-7 text-white/64">
          Entrada interna para gerir contas, ginasios cadastrados, descoberta no Google Maps e permissoes administrativas.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {adminAreas.map((area) => {
          const Icon = area.icon;
          return (
            <Link
              key={area.href}
              href={area.href}
              className="group flex min-h-48 flex-col rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-limebrand/70 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-limebrand text-black">
                  <Icon className="h-5 w-5" />
                </span>
                <ChevronRight className="h-5 w-5 text-white/36 transition group-hover:translate-x-1 group-hover:text-limebrand" />
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-white/42">{area.meta}</p>
              <h2 className="mt-2 text-xl font-black">{area.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/60">{area.description}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
