import Image from "next/image";
import { ArrowRight, ChartNoAxesColumnIncreasing, Heart, Star, UsersRound } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const principles = [
  { icon: Heart, title: "Hábitos", text: "mais saudáveis" },
  { icon: ChartNoAxesColumnIncreasing, title: "Acompanhamento", text: "da tua evolução" },
  { icon: UsersRound, title: "Profissionais", text: "mais próximos" },
  { icon: Star, title: "Mais oportunidades", text: "para viver melhor" },
];

export function PurposeSection() {
  return (
    <section id="sobre" className="relative isolate scroll-mt-20 overflow-hidden border-b border-white/8 bg-[#0b110e]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_12%_45%,rgba(46,78,25,0.34),transparent_42%),linear-gradient(115deg,#0b110e_0%,#0d1510_52%,#090d0c_100%)]" />
      <div className="container-page grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-16">
        <div className="relative min-h-[280px] overflow-hidden rounded-sm sm:min-h-[390px] lg:min-h-[430px]">
          <Image
            src="/images/home/purpose-athlete-noogym.jpg"
            alt="Atleta a hidratar-se durante o treino"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-[45%_center]"
          />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b110e]/65 via-transparent to-transparent" />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-limebrand">Mais do que fitness</p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Cuidar de ti deve ser <span className="text-limebrand">mais simples.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/68 sm:text-base sm:leading-7">
            Acreditamos que o bem-estar deve fazer parte da vida de todos. Por isso, conectamos pessoas, profissionais e negócios a ferramentas e experiências que tornam o fitness e o bem-estar mais acessíveis, inteligentes e motivadores.
          </p>
          <TrackedLink
            href="#ecossistema"
            eventName="homepage_cta_click"
            eventParams={{ cta_name: "sobre_noogym", section: "purpose" }}
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-limebrand px-5 text-sm font-bold text-black transition hover:bg-limebrand2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-limebrand"
          >
            Sobre o Noogym <ArrowRight className="h-4 w-4" />
          </TrackedLink>
        </div>
      </div>

      <div className="container-page grid grid-cols-2 gap-3 pb-10 sm:grid-cols-4 sm:gap-4 sm:pb-14">
        {principles.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex min-h-[86px] items-center gap-3 rounded-md border border-white/[0.09] bg-[#152019]/90 px-3 py-4 shadow-[0_12px_36px_rgba(0,0,0,0.16)] sm:min-h-20 sm:px-5">
            <Icon aria-hidden="true" className="h-7 w-7 shrink-0 text-limebrand sm:h-8 sm:w-8" />
            <p className="text-xs leading-5 text-white/65 sm:text-sm"><span className="block font-bold text-white">{title}</span>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
