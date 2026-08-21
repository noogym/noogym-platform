import Image from "next/image";
import { CalendarDays, Users } from "lucide-react";
import type { EventItem } from "@/data/events";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function EventCard({ event }: { event: EventItem }) {
  const actionLabel = event.id === "desafio-30" ? "Inscrever-se" : "Receber novidades";

  return (
    <div className="rounded-lg border border-white/12 bg-white/[0.035] p-4 transition hover:border-limebrand/45">
      <div className="relative h-64 overflow-hidden rounded-md">
        <Image src={event.image} alt={event.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/10" />
        <Badge className="absolute left-3 top-3 bg-limebrand text-black">{event.category}</Badge>
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm text-white/58"><CalendarDays className="h-4 w-4" /> {event.date} · {event.time}</p>
      <h3 className="mt-3 text-xl font-bold">{event.title}</h3>
      <p className="mt-2 min-h-12 text-sm leading-6 text-white/60">{event.description}</p>
      <p className="mt-4 flex items-center gap-2 text-sm text-white/58"><Users className="h-4 w-4" /> {event.participants.toLocaleString("pt-AO")} participantes</p>
      <Button
        className="mt-5 w-full"
        href={`/criar-conta?next=${encodeURIComponent(`/eventos?evento=${event.id}`)}`}
        variant={event.id === "desafio-30" ? "primary" : "secondary"}
      >
        {actionLabel}
      </Button>
    </div>
  );
}
