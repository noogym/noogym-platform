import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { benefitItems, metricCards } from "./data";

export function BenefitsSection() {
  return (
    <section className="section-shell scroll-mt-24 py-12 sm:py-16" id="beneficios">
      <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <div className="min-w-0">
          <p className="eyebrow mb-4">Mais controle, mais resultados</p>
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            O Noogym ajuda o seu ginásio a{" "}
            <span className="text-noogym-green">crescer</span>
          </h2>
          <ul className="mt-7 space-y-3">
            {benefitItems.map((item) => (
              <li className="flex items-start gap-3 text-sm leading-6 text-zinc-300" key={item}>
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-noogym-green" />
                {item}
              </li>
            ))}
          </ul>
          <button
            className="green-button mt-8 w-full sm:w-auto"
            data-demo-trigger
            type="button"
          >
            Agendar demonstração
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-black sm:min-h-[500px] lg:min-h-[430px]">
          <Image
            src="/images/software-gestao-noogym.webp"
            alt="Dashboard Noogym em ambiente escuro"
            fill
            sizes="(min-width: 1024px) 720px, 100vw"
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(182,255,0,0.16),transparent_36%),linear-gradient(90deg,rgba(2,4,3,0.82),rgba(2,4,3,0.18))]" />
          <svg
            className="absolute inset-x-0 bottom-8 h-48 w-full opacity-80"
            viewBox="0 0 650 210"
            aria-hidden="true"
          >
            <path
              d="M0 180 C70 170 76 112 142 130 C207 148 216 64 282 86 C348 108 366 42 430 62 C502 85 538 25 650 14"
              fill="none"
              stroke="#B6FF00"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {[142, 282, 430, 538, 650].map((cx, index) => (
              <circle
                cx={cx}
                cy={[130, 86, 62, 25, 14][index]}
                fill="#B6FF00"
                key={cx}
                r="5"
              />
            ))}
          </svg>
          <div className="absolute right-4 top-5 grid w-[min(330px,calc(100%-32px))] gap-3 sm:right-5 sm:top-6">
            {metricCards.map((metric) => (
              <div
                className="rounded-lg border border-white/10 bg-black/70 p-4 shadow-neon-soft backdrop-blur sm:p-5"
                key={metric.label}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-black text-noogym-green">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-3xl font-black text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{metric.meta}</p>
                  </div>
                  <metric.icon className="h-7 w-7 text-noogym-green" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
