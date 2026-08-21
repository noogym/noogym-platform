import { ArrowRight } from "lucide-react";
import { featureCards } from "./data";
import { SectionHeading } from "./SectionHeading";

export function FeaturesSection() {
  return (
    <section className="section-shell scroll-mt-24 py-16" id="funcionalidades">
      <SectionHeading
        eyebrow="Tudo que você precisa em um só lugar"
        title={
          <>
            Funcionalidades que simplificam a gestão do{" "}
            <span className="text-noogym-green">seu ginásio</span>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featureCards.map((feature) => (
          <article
            className="glass-card group rounded-lg p-5 transition duration-200 hover:-translate-y-1 hover:border-noogym-green/45 hover:shadow-neon-soft sm:p-6"
            key={feature.title}
          >
            <feature.icon className="mb-5 h-8 w-8 text-noogym-green" />
            <h3 className="text-base font-black text-white">{feature.title}</h3>
            <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-400">
              {feature.description}
            </p>
            <a
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-black text-noogym-green"
              href="#precos"
            >
              Saiba mais
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
