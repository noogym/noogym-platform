import { Activity, Building2, CalendarDays, Dumbbell, Network, ShoppingBag, Users, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ecosystemNodes = [
  {
    icon: Activity,
    title: "App",
    text: "Plano, check-in, evolucao e beneficios para o atleta.",
  },
  {
    icon: Building2,
    title: "Ginasios",
    text: "Descoberta, planos e presenca digital para parceiros.",
  },
  {
    icon: Dumbbell,
    title: "Treinadores",
    text: "Rotinas, acompanhamento e autoridade profissional.",
  },
  {
    icon: CalendarDays,
    title: "Eventos",
    text: "Desafios, workshops, corridas e experiencias presenciais.",
  },
  {
    icon: ShoppingBag,
    title: "Marketplace",
    text: "Produtos, lojas e ofertas conectadas ao treino.",
  },
  {
    icon: Wrench,
    title: "ERP",
    text: "Gestao de alunos, acessos, planos e operacao do ginasio.",
  },
];

export function EcosystemSection() {
  const leftNodes = ecosystemNodes.slice(0, 3);
  const rightNodes = ecosystemNodes.slice(3);

  return (
    <section className="container-page py-14">
      <SectionHeader
        eyebrow="Ecossistema Noogym"
        title={<>Uma infraestrutura para o mercado <span className="text-limebrand">fitness</span></>}
        subtitle="O Noogym organiza diferentes partes do mercado numa experiencia unica: quem treina, quem vende, quem gere e quem cria comunidade."
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_260px_1fr] lg:items-center">
        <div className="grid gap-4">
          {leftNodes.map((node) => (
            <EcosystemNode key={node.title} {...node} />
          ))}
        </div>

        <div className="relative flex min-h-[220px] items-center justify-center rounded-lg border border-limebrand/35 bg-limebrand/10 p-6 text-center">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-limebrand/20 lg:block" />
          <div className="relative rounded-lg border border-limebrand/35 bg-black/70 p-6 shadow-glow">
            <Network className="mx-auto h-9 w-9 text-limebrand" />
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-limebrand">Noogym</p>
            <h3 className="mt-2 text-2xl font-black">Conta unica</h3>
            <p className="mt-2 text-sm leading-6 text-white/62">Um ponto de acesso para atletas, parceiros e operacao.</p>
          </div>
        </div>

        <div className="grid gap-4">
          {rightNodes.map((node) => (
            <EcosystemNode key={node.title} {...node} />
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-white/12 bg-white/[0.035] p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">Comunidade como resultado</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-white/58">
              Quanto mais atletas, ginasios, lojas e eventos entram, mais util a rede se torna para todos.
            </p>
          </div>
          <Users className="h-9 w-9 text-limebrand md:mr-4" />
        </div>
      </div>
    </section>
  );
}

function EcosystemNode({
  icon: Icon,
  text,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  title: string;
}) {
  return (
    <div className="rounded-lg border border-white/12 bg-white/[0.035] p-5 transition hover:border-limebrand/45">
      <Icon className="h-7 w-7 text-limebrand" />
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
    </div>
  );
}
