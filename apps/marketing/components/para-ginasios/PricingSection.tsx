import { Check } from "lucide-react";
import { pricingPlans } from "./data";
import { SectionHeading } from "./SectionHeading";

export function PricingSection() {
  return (
    <section className="section-shell scroll-mt-24 py-16" id="precos">
      <SectionHeading
        eyebrow="Planos para ginásios de todos os tamanhos"
        title="Planos para ginásios de todos os tamanhos"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article
            className={`relative flex h-full flex-col rounded-lg border p-5 transition duration-200 hover:-translate-y-1 sm:p-7 ${
              plan.featured
                ? "border-noogym-green bg-noogym-green/[0.045] shadow-neon-soft"
                : "border-white/10 bg-white/[0.025]"
            }`}
            key={plan.name}
          >
            {plan.featured && (
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-noogym-green px-4 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-black">
                Mais escolhido
              </div>
            )}
            <h3 className="text-xl font-black text-white">{plan.name}</h3>
            <p className="mt-1 text-sm text-zinc-400">{plan.subtitle}</p>
            <div className="mt-7 flex flex-wrap items-end gap-x-1 gap-y-2">
              <span className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                {plan.price}
              </span>
              <span className="pb-1 text-sm font-bold text-zinc-300">
                AOA/mês
              </span>
            </div>
            <ul className="mt-7 space-y-3">
              {plan.features.map((feature) => (
                <li className="flex items-start gap-3 text-sm leading-6 text-zinc-300" key={feature}>
                  <Check className="mt-1 h-4 w-4 shrink-0 text-noogym-green" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <button
                className={`w-full ${plan.featured ? "green-button" : "dark-button"}`}
                data-demo-trigger
                type="button"
              >
                {plan.action}
              </button>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-5 text-center text-xs text-zinc-500">
        Todos os planos incluem atualizações e suporte.
      </p>
    </section>
  );
}
