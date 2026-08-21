import { Check, Crown, Dumbbell, Network, Star } from "lucide-react";
import type { Plan } from "@/data/plans";
import { Button } from "@/components/ui/Button";
import { formatKz } from "@/lib/utils";

export function PricingCard({ plan }: { plan: Plan }) {
  const Icon = plan.name === "Essencial" ? Dumbbell : plan.name === "Plus" ? Crown : Network;

  return (
    <div className={`relative flex h-full flex-col rounded-lg border p-5 sm:p-7 ${plan.popular ? "border-limebrand bg-limebrand/5 shadow-glow" : "border-white/12 bg-white/[0.035]"}`}>
      {plan.popular ? <span className="absolute -top-3 left-1/2 max-w-[calc(100%-2rem)] -translate-x-1/2 whitespace-nowrap rounded-full bg-limebrand px-4 py-1 text-xs font-bold text-black sm:px-5">MAIS ESCOLHIDO</span> : null}
      <div className="flex min-w-0 items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="break-words text-2xl font-bold">{plan.name}</h3>
          <p className="break-words text-white/58">{plan.subtitle}</p>
        </div>
        <Icon className="h-10 w-10 shrink-0 rounded-full bg-limebrand/14 p-2 text-limebrand" />
      </div>
      <p className="mt-6 inline-flex w-fit rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-bold text-white/68">
        {plan.access}
      </p>
      <div className="mt-5 break-words text-3xl font-black sm:text-4xl">
        <span className="mb-1 block text-xs font-bold uppercase tracking-[0.18em] text-limebrand">A partir de</span>
        {formatKz(plan.priceFrom).replace(" Kz", "")}
        <span className="text-sm font-semibold"> Kz/mês</span>
      </div>
      <p className="mt-3 text-sm leading-6 text-white/56">{plan.priceNote}</p>
      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/42">Acompanhamento</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {plan.coaching.map((item) => (
            <span key={item} className="rounded-full border border-limebrand/20 bg-limebrand/8 px-3 py-1 text-xs font-bold text-limebrand">
              {item}
            </span>
          ))}
        </div>
      </div>
      <ul className="mt-7 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex min-w-0 gap-3 text-sm text-white/75">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-limebrand" />
            <span className="min-w-0 break-words">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-7">
        <p className="mb-4 rounded-md border border-limebrand/25 bg-limebrand/8 p-3 text-xs leading-5 text-white/62">
          {plan.partnerRule}
        </p>
        <Button href="/explorar-ginasios" className="w-full" variant={plan.popular ? "primary" : "secondary"}>
          Escolher ginásio
          <Star className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
