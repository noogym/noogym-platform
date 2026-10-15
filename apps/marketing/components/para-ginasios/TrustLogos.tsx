import { Dumbbell } from "lucide-react";
import { trustLogos } from "./data";

export function TrustLogos() {
  return (
    <section className="section-shell" aria-label="Ginásios que confiam">
      <div className="glass-card rounded-lg px-4 py-5">
        <p className="mb-5 text-center text-[11px] font-black uppercase tracking-[0.18em] text-zinc-500">
          Confiado por ginásios que crescem
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {trustLogos.map((logo) => (
            <div
              className="flex min-h-10 min-w-0 items-center justify-center gap-2 text-center text-sm font-black uppercase tracking-tight text-zinc-300 opacity-80"
              key={logo}
            >
              <Dumbbell className="h-4 w-4 shrink-0 text-zinc-500" />
              <span className="min-w-0 break-words">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
