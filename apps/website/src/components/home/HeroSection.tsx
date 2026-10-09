import Image from "next/image";
import { ArrowRight, Heart, Sparkles, Trophy, Zap } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const benefits = [
  { icon: Heart, label: "Mais saúde" },
  { icon: Zap, label: "Mais energia" },
  { icon: Sparkles, label: "Mais confiança" },
  { icon: Trophy, label: "Mais conquistas" },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[#050807]" />
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home/hero-athlete-noogym.jpg"
          alt="Atleta a treinar num ginásio"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_center] sm:object-[center_46%]"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050807_0%,rgba(5,8,7,0.96)_30%,rgba(5,8,7,0.76)_56%,rgba(5,8,7,0.22)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#050807_0%,transparent_27%,rgba(5,8,7,0.18)_100%)]" />

      <div className="container-page flex min-h-[580px] items-center py-16 sm:min-h-[650px] md:min-h-[690px]">
        <div className="max-w-[610px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-limebrand">O teu bem-estar começa aqui</p>
          <h1 className="mt-5 text-balance text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl">
            Saúde hoje.<br />Mais <span className="text-limebrand">vida amanhã.</span>
          </h1>
          <p className="mt-6 max-w-[540px] text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
            Treina, alimenta-te melhor, acompanha a tua evolução e descobre novas formas de viver uma vida mais activa e equilibrada.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[430px]:flex-row">
            <TrackedLink
              href="/criar-conta"
              eventName="homepage_cta_click"
              eventParams={{ cta_name: "conhecer_app", section: "hero" }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-limebrand px-6 text-sm font-bold text-black transition hover:bg-limebrand2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-limebrand focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Conhecer o App <ArrowRight className="h-4 w-4" />
            </TrackedLink>
            <TrackedLink
              href="#empresas"
              eventName="homepage_cta_click"
              eventParams={{ cta_name: "para_empresas", section: "hero" }}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/25 bg-black/25 px-6 text-sm font-semibold text-white transition hover:border-limebrand hover:text-limebrand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-limebrand"
            >
              Para empresas <ArrowRight className="h-4 w-4" />
            </TrackedLink>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#050807]/85 backdrop-blur-sm">
        <div className="container-page grid grid-cols-2 py-4 sm:grid-cols-4 sm:py-5">
          {benefits.map(({ icon: Icon, label }) => (
            <div key={label} className="flex min-h-11 items-center justify-center gap-2.5 px-2 text-xs font-medium text-white/75 sm:text-sm">
              <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-limebrand sm:h-6 sm:w-6" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
