import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";
import { whatsappUrl } from "./data";

export function FinalCTA() {
  return (
    <section className="section-shell py-12">
      <div className="relative overflow-hidden rounded-2xl border border-noogym-green/30 bg-white/[0.035] p-6 md:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(182,255,0,0.12),transparent_28%)]" />
        <div className="relative grid min-w-0 items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border border-noogym-green/40 bg-noogym-green/10 text-noogym-green shadow-neon-soft">
              <CalendarCheck className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">
                Pronto para levar seu ginásio para o{" "}
                <span className="text-noogym-green">próximo nível?</span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                Agende uma demonstração gratuita e descubra como o Noogym pode
                transformar a gestão do seu negócio.
              </p>
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:justify-end">
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
        </div>
      </div>
    </section>
  );
}
