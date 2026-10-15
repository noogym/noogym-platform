import Image from "next/image";
import { CalendarDays, MapPin, Users } from "lucide-react";
import type { EventItem } from "@/data/events";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const originLabels: Record<EventItem["origin"], string> = {
  noogym: "Evento Oficial Noogym",
  partner: "Parceiro",
  community: "Comunidade",
  external: "Evento externo",
};

export function EventCard({ event }: { event: EventItem }) {
  const actionLabel = event.registrationUrl ? "Ver inscrição" : event.id === "desafio-30" ? "Inscrever-se" : "Receber novidades";
  const href = event.registrationUrl ?? `/criar-conta?next=${encodeURIComponent(`/eventos?evento=${event.id}`)}`;

  return (
    <div className="rounded-lg border border-white/12 bg-white/[0.035] p-4 transition hover:border-limebrand/45">
      <div className="relative h-64 overflow-hidden rounded-md">
        <Image src={event.image} alt={event.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/10" />
        <Badge className="absolute left-3 top-3 bg-limebrand text-black">{event.category}</Badge>
        <span className="absolute bottom-3 left-3 rounded-md border border-white/14 bg-black/65 px-3 py-1.5 text-xs font-bold text-white">
          {originLabels[event.origin]}
        </span>
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm text-white/58"><CalendarDays className="h-4 w-4" /> {event.date} · {event.time}</p>
      <h3 className="mt-3 text-xl font-bold">{event.title}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-white/60">{event.description}</p>
      <div className="mt-4 grid gap-2 text-sm text-white/58">
        <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-limebrand" /> {event.location}, {event.city}</p>
        <p className="flex items-center gap-2"><Users className="h-4 w-4 text-limebrand" /> {event.participants.toLocaleString("pt-AO")} participantes</p>
      </div>
      <p className="mt-3 text-xs text-white/45">Organizador: {event.organizer}</p>
      <Button
        className="mt-5 w-full"
        href={href}
        variant={event.origin === "noogym" ? "primary" : "secondary"}
      >
        {actionLabel}
      </Button>
    </div>
  );
}
