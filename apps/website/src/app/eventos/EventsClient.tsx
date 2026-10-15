"use client";

import { useMemo, useState } from "react";
import { Bell, CalendarDays, Handshake, MapPin, Medal, ShieldCheck, TicketCheck, Trophy, Users } from "lucide-react";
import { eventCategories, events, eventsByProvince } from "@/data/events";
import { EventHero } from "@/components/events/EventHero";
import { EventCard } from "@/components/events/EventCard";
import { Input } from "@/components/ui/Input";
import { CTASection } from "@/components/ui/CTASection";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatCard } from "@/components/ui/StatCard";

const communityFaces = ["MA", "JS", "CA", "AN", "ML", "PT"];
const provinces = ["Todas as provincias", ...Object.keys(eventsByProvince)];

export function EventsClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos os eventos");
  const [province, setProvince] = useState("Todas as provincias");
  const filtered = useMemo(
    () => events.filter((event) => {
      const matchesCategory = category === "Todos os eventos" || event.category === category;
      const matchesProvince = province === "Todas as provincias" || event.province === province;
      const normalizedQuery = query.toLowerCase();
      const matchesQuery = [event.title, event.category, event.city, event.organizer].some((value) => value.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesProvince && matchesQuery;
    }),
    [query, category, province],
  );
  const featuredEvent = filtered[0] ?? events[0];

  return (
    <>
      <EventHero />
      <section className="container-page py-10">
        <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
          <Input icon placeholder="Buscar eventos por nome ou tipo..." value={query} onChange={(event) => setQuery(event.target.value)} />
          <select value={province} onChange={(event) => setProvince(event.target.value)} className="h-12 rounded-md border border-white/12 bg-white/[0.04] px-4 text-sm">
            {provinces.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {eventCategories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-md border px-4 py-2 text-sm ${category === item ? "border-limebrand bg-limebrand/10 text-limebrand" : "border-white/12 text-white/64"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_330px]">
          <div>
            <h2 className="mb-5 text-2xl font-bold">Eventos em destaque</h2>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filtered.slice(0, 3).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-white/12 bg-white/[0.03] p-5">
              <div className="grid gap-6 lg:grid-cols-[1fr_260px] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-limebrand">Comunidade em movimento</p>
                  <h2 className="mt-3 text-2xl font-black">{featuredEvent.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    A agenda Noogym destaca iniciativas oficiais, parceiras e externas sem atribuir ao Noogym eventos organizados por terceiros.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <CommunityStat icon={Users} label="Participantes" value={featuredEvent.participants.toLocaleString("pt-AO")} />
                    <CommunityStat icon={Medal} label="Origem" value={featuredEvent.origin === "noogym" ? "Noogym" : "Externa"} />
                    <CommunityStat icon={Handshake} label="Organizador" value={featuredEvent.organizer} />
                  </div>
                </div>
                <div className="rounded-md border border-white/10 bg-black/24 p-4">
                  <p className="text-sm font-bold">Quem vai?</p>
                  <div className="mt-4 flex -space-x-2">
                    {communityFaces.map((face) => (
                      <span key={face} className="grid h-10 w-10 place-items-center rounded-full border border-black bg-limebrand text-xs font-black text-black">
                        {face}
                      </span>
                    ))}
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-xs font-bold text-white">
                      +{Math.max(featuredEvent.participants - communityFaces.length, 0)}
                    </span>
                  </div>
                  <div className="mt-5 grid gap-2 text-xs text-white/58">
                    <p>Organizador identificado</p>
                    <p>Origem editorial preservada</p>
                    <p>Publicação sujeita a revisão</p>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-10 rounded-lg border border-limebrand/25 bg-limebrand/[0.04] p-5">
              <div className="mb-5 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-limebrand" />
                <h2 className="text-2xl font-bold">Acontecendo em Angola</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {Object.entries(eventsByProvince).map(([provinceName, provinceEvents]) => (
                  <button
                    key={provinceName}
                    onClick={() => setProvince(provinceName)}
                    className="rounded-md border border-white/10 bg-black/20 p-4 text-left transition hover:border-limebrand/45"
                  >
                    <p className="font-bold text-white">{provinceName}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[...new Set(provinceEvents.map((event) => event.category))].slice(0, 3).map((item) => (
                        <span key={item} className="rounded-md bg-white/8 px-2 py-1 text-xs text-white/62">{item}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <h2 className="mb-5 mt-10 text-2xl font-bold">Eventos por categoria</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {eventCategories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-lg border p-5 text-center text-sm transition ${category === item ? "border-limebrand text-limebrand" : "border-white/10 text-white/65 hover:border-limebrand/45"}`}
                >
                  <CalendarDays className="mx-auto mb-3 h-6 w-6" />
                  {item}
                </button>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <div className="glass rounded-lg p-5">
              <h2 className="mb-4 text-xl font-bold">Proximos eventos</h2>
              {events.slice(3).map((event) => (
                <div key={event.id} className="border-b border-white/10 py-4 last:border-0">
                  <p className="text-xs text-limebrand">{event.category}</p>
                  <h3 className="font-bold">{event.title}</h3>
                  <p className="text-sm text-white/50">
                    {event.date} - {event.city}
                  </p>
                </div>
              ))}
            </div>
            <CTASection title="Divulgue seu evento no Noogym" text="Envie os dados do evento para revisão editorial. O Noogym não precisa ser o organizador." primary="Cadastrar evento" href="/eventos/divulgar" />
          </aside>
        </div>
      </section>
      <section className="container-page py-8">
        <CTASection title="Nao perca nada! Fique por dentro dos proximos eventos." text="Receba lembretes, descontos exclusivos, check-in rapido e certificados." primary="Criar conta para receber alertas" href="/criar-conta?next=/eventos" />
      </section>
      <section className="container-page grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        <FeatureCard icon={Bell} title="Lembretes" text="Receba alertas antes dos eventos." />
        <FeatureCard icon={TicketCheck} title="Descontos exclusivos" text="Acesso a precos para membros." />
        <FeatureCard icon={ShieldCheck} title="Check-in rapido" text="Evite filas pelo app." />
        <FeatureCard icon={Trophy} title="Certificados" text="Ganhe certificados nos eventos." />
      </section>
      <section className="container-page grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard value="+120" label="Eventos realizados" />
        <StatCard value="+25.000" label="Participantes" />
        <StatCard value="+300" label="Parceiros" />
        <StatCard value="17" label="Cidades" />
      </section>
    </>
  );
}

function CommunityStat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-black/20 p-3">
      <Icon className="h-5 w-5 text-limebrand" />
      <p className="mt-3 text-sm font-bold">{value}</p>
      <p className="mt-1 text-xs text-white/48">{label}</p>
    </div>
  );
}
