import { ArrowRight, MessageCircle } from "lucide-react";
import { heroBadges, whatsappUrl } from "./data";
import { SoftwareMockupImage } from "./SoftwareMockupImage";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-36"
      id="inicio"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(182,255,0,0.14),transparent_32%),linear-gradient(180deg,rgba(2,4,3,0)_0%,#020403_95%)]" />
      <div className="absolute right-0 top-24 h-72 w-2/3 opacity-[0.08] [background-image:linear-gradient(#B6FF00_1px,transparent_1px)] [background-size:100%_18px] [mask-image:linear-gradient(90deg,transparent,black,transparent)]" />

      <div className="section-shell relative grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12">
        <div className="min-w-0 max-w-[calc(100vw-2rem)] overflow-hidden sm:max-w-none">
          <p className="eyebrow mb-5">
            Software de gestão para ginásios em Angola
          </p>
          <h1 className="max-w-3xl break-words text-2xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Software de gestão para{" "}
            <span className="text-noogym-green">ginásios e academias</span> em
            Angola
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
            O Noogym centraliza alunos, pagamentos, acessos, treinos,
            funcionários, faturação AGT e relatórios em um único sistema. Menos
            trabalho. Mais controle. Mais lucro.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              className="green-button w-full sm:w-auto"
              data-demo-trigger
              type="button"
            >
              Agendar demonstração
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              className="dark-button w-full sm:w-auto"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex max-w-full flex-wrap gap-4">
            {heroBadges.map((badge) => (
              <div
                className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                key={badge.text}
              >
                <badge.icon className="h-4 w-4 text-noogym-green" />
                {badge.text}
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:translate-x-3">
          <SoftwareMockupImage
            alt="Dashboard Noogym com app mobile e certificacao AGT"
            priority
            src="/images/software-gestao-noogym-hero-agt.webp"
          />
        </div>
      </div>
    </section>
  );
}
