import { CalendarDays, MapPin, Trophy, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export function EventHero() {
  return (
    <>
      <PageHero
        eyebrow="Agenda fitness de Angola"
        title={<>Eventos que <span className="text-limebrand">movem</span> a comunidade</>}
        subtitle="Descubra eventos Noogym, parceiros e iniciativas externas relevantes para treino, saúde, competições e bem-estar em Angola."
        image="/images/events/events-hero-showcase.png"
        primary="Criar conta para eventos"
        primaryHref="/criar-conta?next=/eventos"
      />
      <div className="container-page mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          [CalendarDays, "Agenda nacional", "Corridas, workshops, competições e aulas abertas."],
          [MapPin, "Por província", "Veja o que acontece perto de você."],
          [Users, "Comunidade", "Eventos oficiais, parceiros e iniciativas externas."],
          [Trophy, "Evolua sempre", "Supere limites e conquiste resultados."],
        ].map(([Icon, title, text]) => (
          <div key={title as string} className="glass rounded-lg p-5"><Icon className="h-7 w-7 text-limebrand" /><h3 className="mt-3 font-bold">{title as string}</h3><p className="mt-1 text-sm text-white/58">{text as string}</p></div>
        ))}
      </div>
    </>
  );
}
