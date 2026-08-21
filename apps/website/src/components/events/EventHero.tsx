import { CalendarDays, Trophy, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export function EventHero() {
  return (
    <>
      <PageHero
        eyebrow="Eventos Noogym"
        title={<>Eventos que <span className="text-limebrand">movem</span> você mais longe</>}
        subtitle="Participe de desafios, competições, workshops e experiências exclusivas da comunidade fitness Noogym."
        image="/images/events/events-hero-showcase.png"
        primary="Criar conta para eventos"
        primaryHref="/criar-conta?next=/eventos"
      />
      <div className="container-page mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          [CalendarDays, "Diversos tipos de eventos", "Desafios, competições, workshops e muito mais."],
          [Users, "Conecte-se", "Encontre pessoas, faça amizades e evolua juntos."],
          [Trophy, "Evolua sempre", "Supere limites e conquiste resultados."],
        ].map(([Icon, title, text]) => (
          <div key={title as string} className="glass rounded-lg p-5"><Icon className="h-7 w-7 text-limebrand" /><h3 className="mt-3 font-bold">{title as string}</h3><p className="mt-1 text-sm text-white/58">{text as string}</p></div>
        ))}
      </div>
    </>
  );
}
