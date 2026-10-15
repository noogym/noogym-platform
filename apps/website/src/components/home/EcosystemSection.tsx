import Image from "next/image";
import { ArrowUpRight, Heart, Network, UsersRound, Globe2 } from "lucide-react";

const pillars = [
  { icon: UsersRound, title: "Pessoas", text: "mais activas" },
  { icon: Network, title: "Negócios", text: "mais fortes" },
  { icon: Heart, title: "Comunidades", text: "mais saudáveis" },
  { icon: Globe2, title: "Um futuro", text: "com mais oportunidades" },
];

export function EcosystemSection() {
  return (
    <section id="ecossistema" className="scroll-mt-20 border-b border-white/8 bg-[#050807]">
      <div className="container-page grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        <div className="relative min-h-[260px] overflow-hidden rounded-sm sm:min-h-[370px] lg:min-h-[430px]">
          <Image
            src="/images/home/community-team-noogym.jpg"
            alt="Equipa de atletas a celebrar o treino em conjunto"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[45%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050807]/65 lg:bg-gradient-to-l" />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-limebrand">Um ecossistema conectado</p>
          <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Pessoas, tecnologia e <span className="text-limebrand">propósito.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/68 sm:text-base sm:leading-7">
            Atletas, profissionais, ginásios e empresas ligados por um objectivo comum: tornar o fitness e o bem-estar mais acessíveis para todos.
          </p>
          <a href="#empresas" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-limebrand transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-limebrand">
            Fazer parte desta visão <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="container-page grid grid-cols-2 gap-3 pb-12 sm:grid-cols-4 sm:gap-4 sm:pb-16">
        {pillars.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex min-h-[90px] items-center gap-3 rounded-md border border-white/8 bg-[#0d1210] px-3 py-4 sm:min-h-[104px] sm:px-5">
            <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-limebrand sm:h-8 sm:w-8" />
            <p className="text-xs leading-5 text-white/58 sm:text-sm"><span className="block font-bold text-white">{title}</span>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
