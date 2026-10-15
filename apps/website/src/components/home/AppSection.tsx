import Image from "next/image";
import { ArrowRight, ChartNoAxesColumnIncreasing, Dumbbell, MapPin, ShoppingBag, UsersRound } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const appBenefits = [
  { icon: Dumbbell, text: "Planos de treino personalizados" },
  { icon: ChartNoAxesColumnIncreasing, text: "Acompanhamento de progresso" },
  { icon: MapPin, text: "Ginásios e profissionais perto de ti" },
  { icon: ShoppingBag, text: "Produtos e serviços fitness" },
  { icon: UsersRound, text: "Comunidade e desafios" },
];

export function AppSection() {
  return (
    <section id="app" className="scroll-mt-20 overflow-hidden border-b border-white/8 bg-[#050807]">
      <div className="container-page grid items-center gap-8 py-14 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:py-20">
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-limebrand">App Noogym</p>
          <h2 className="mt-4 max-w-xl text-balance text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            A tua evolução na <span className="text-limebrand">palma da mão.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/68 sm:text-base sm:leading-7">
            Treinos, alimentação e acompanhamento de progresso numa experiência pensada para te ajudar a manter o foco e a consistência.
          </p>
          <ul className="mt-6 grid gap-3">
            {appBenefits.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-white/76">
                <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-limebrand" />
                {text}
              </li>
            ))}
          </ul>
          <TrackedLink
            href="/criar-conta"
            eventName="homepage_cta_click"
            eventParams={{ cta_name: "conhecer_app", section: "app" }}
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-md bg-limebrand px-5 text-sm font-bold text-black transition hover:bg-limebrand2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-limebrand"
          >
            Criar conta <ArrowRight className="h-4 w-4" />
          </TrackedLink>
          <p className="mt-3 text-xs leading-5 text-white/48">O download do app móvel estará disponível em breve. A imagem é uma demonstração visual, não uma captura da app publicada.</p>
        </div>

        <div className="relative">
          <div className="absolute inset-8 rounded-full bg-limebrand/6 blur-3xl" />
          <Image
            src="/images/home/gym-phone-hero.png"
            alt="Demonstração visual de uma interface Noogym num telemóvel"
            width={1600}
            height={983}
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="relative w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
