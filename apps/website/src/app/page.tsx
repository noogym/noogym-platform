import type { Metadata } from "next";
import { BookOpenText, CalendarDays, TabletSmartphone, Users } from "lucide-react";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { GymPreview } from "@/components/home/GymPreview";
import { MarketplacePreview } from "@/components/home/MarketplacePreview";
import { Testimonials } from "@/components/home/Testimonials";
import { ReadyToEvolveSection } from "@/components/home/ReadyToEvolveSection";
import { WhyNoogymSection } from "@/components/home/WhyNoogymSection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { noogymIdentity } from "@/config/identity";

export const metadata: Metadata = {
  title: "Noogym | Plataforma fitness em Angola",
  description: "A plataforma que conecta atletas, ginasios, lojas, eventos, marketplace e gestao fitness em Angola.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhyNoogymSection />
      <EcosystemSection />
      <GymPreview />
      <MarketplacePreview />
      <section className="container-page py-12">
        <SectionHeader
          eyebrow="Portas de entrada"
          title={<>Uma plataforma, varios caminhos de <span className="text-limebrand">crescimento</span></>}
          subtitle="Cada area resolve um problema especifico, mas todas reforcam a mesma rede."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={Users} title="Para atletas" text="Planos, check-ins, beneficios e evolucao numa conta unica." />
          <FeatureCard icon={CalendarDays} title="Eventos fitness" text="Desafios, corridas, workshops e experiencias para a comunidade." />
          <FeatureCard icon={TabletSmartphone} title="Para ginasios" text="Presenca digital, novos clientes e gestao da operacao." />
          <FeatureCard icon={BookOpenText} title="Conteudo e ferramentas" text="Artigos, calculadoras e recursos para atrair quem quer evoluir." />
        </div>
      </section>
      <section className="container-page py-12">
        <div className="rounded-lg border border-white/12 bg-white/[0.035] p-5 sm:p-8">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-limebrand">{noogymIdentity.accessLabel}</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">{noogymIdentity.title}</h2>
              <p className="mt-4 leading-7 text-white/62">{noogymIdentity.detailText}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {noogymIdentity.accessScopes.map((scope) => {
                const Icon = scope.icon;

                return (
                  <div key={scope.label} className="rounded-md border border-white/10 bg-black/18 p-4">
                    <Icon className="h-6 w-6 text-limebrand" />
                    <h3 className="mt-3 font-bold">{scope.label}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/56">{scope.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <ReadyToEvolveSection />
      <Testimonials />
      <section className="container-page py-12">
        <CTASection
          title={<>Entre no <span className="text-limebrand">ecossistema Noogym</span></>}
          text="Crie sua conta para acompanhar planos, ginasios, marketplace, eventos e beneficios enquanto a rede cresce."
          primary="Criar conta"
          href="/criar-conta"
          secondary="Ver planos"
          secondaryHref="/planos"
        />
      </section>
    </>
  );
}
