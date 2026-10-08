import type { Metadata } from "next";
import { CalendarCheck, Car, Dumbbell, MapPin, QrCode, Shirt, ShowerHead, Snowflake, Users, Wifi } from "lucide-react";
import { gyms, gymClasses } from "@/data/gyms";
import { GymDetailsHero } from "@/components/gyms/GymDetailsHero";
import { GymMap } from "@/components/gyms/GymMap";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Noogym Center",
  description: "Detalhes do Noogym Center: planos, aulas, estrutura, avaliações, horários e localização.",
};

export default function GymDetailsPage() {
  const gym = gyms[0];
  const icons = [Dumbbell, Users, Users, Car, ShowerHead, Wifi, Snowflake, Shirt, CalendarCheck, Dumbbell, ShowerHead, Shirt];
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${gym.name}, ${gym.location}, Angola`)}`;
  const tabs = [
    ["Visão geral", "#visao-geral"],
    ["Planos", "#planos"],
    ["Aulas", "#aulas"],
    ["Estrutura", "#estrutura"],
    ["Avaliações (256)", "#avaliacoes"],
    ["Localização", "#localizacao"],
  ];

  return (
    <section id="visao-geral" className="container-page py-8">
      <div className="mb-7 text-sm text-white/50">Explorar ginásios &gt; <span className="text-white">Noogym Center</span></div>
      <GymDetailsHero gym={gym} />
      <div className="mt-8 flex gap-4 overflow-x-auto rounded-lg border border-white/12 bg-white/[0.025] p-2">
        {tabs.map(([tab, href], index) => <a key={tab} href={href} className={`shrink-0 rounded-md px-5 py-3 ${index === 0 ? "bg-limebrand text-black" : "text-white/70 hover:text-limebrand"}`}>{tab}</a>)}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <Card id="estrutura" className="scroll-mt-24 p-6">
            <h2 className="text-2xl font-bold">Estrutura e recursos</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {gym.features.map((feature, index) => {
                const Icon = icons[index % icons.length];
                return <div key={feature} className="rounded-md border border-white/10 bg-white/[0.025] p-4 text-center text-sm"><Icon className="mx-auto mb-3 h-5 w-5 text-limebrand" />{feature}</div>;
              })}
            </div>
          </Card>
          <Card id="planos" className="grid scroll-mt-24 gap-6 p-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Horário de funcionamento</h2>
              {gym.hours.map((hour) => <p key={hour.day} className="mt-4 flex justify-between gap-4 border-b border-white/10 pb-3 text-white/66"><span>{hour.day}</span><span className="text-right">{hour.time}</span></p>)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">Planos disponíveis</h2>
              {["Essencial", "Plus", "Total"].map((plan, index) => <div key={plan} className="mt-3 rounded-md border border-white/10 bg-white/[0.03] p-4"><p className="font-bold">{plan}</p><p className="text-limebrand">{[17900, 29900, 44900][index].toLocaleString("pt-AO")} Kz/mês</p></div>)}
            </div>
          </Card>
          <Card id="aulas" className="scroll-mt-24 p-6">
            <h2 className="text-2xl font-bold">Aulas em destaque</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {gymClasses.map((item) => <div key={item} className="rounded-md border border-white/10 bg-white/[0.03] p-4"><h3 className="font-bold">{item}</h3><p className="mt-1 text-sm text-white/55">Ter, Qui · 18:30 · Incluído</p></div>)}
            </div>
          </Card>
          <Card id="avaliacoes" className="scroll-mt-24 p-6">
            <h2 className="text-2xl font-bold">Avaliações dos alunos</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {["Ana Luísa Santos", "Carlos Mendes", "Lucas Ferreira"].map((name) => <div key={name} className="rounded-md border border-white/10 bg-white/[0.03] p-4"><p className="font-bold">{name}</p><p className="my-2 text-yellow-400">★★★★★</p><p className="text-sm text-white/58">Atendimento personalizado e estrutura de primeiro mundo.</p></div>)}
            </div>
          </Card>
          <Card id="localizacao" className="scroll-mt-24 overflow-hidden">
            <div className="grid lg:grid-cols-[330px_1fr]">
              <div className="p-6">
                <h2 className="text-2xl font-bold">Localização</h2>
                <p className="mt-3 text-white/62">Rua Comandante Hoji Ya Henda, 23 Maianga, Luanda - Angola</p>
                <p className="mt-3 text-limebrand">2,4 km de você</p>
                <div className="mt-5 flex gap-3"><Button href={directionsHref} variant="secondary"><MapPin className="h-4 w-4" /> Como chegar</Button></div>
              </div>
              <GymMap compact gyms={[gym]} selectedGym={gym} />
            </div>
          </Card>
        </div>
        <aside className="h-max lg:sticky lg:top-24">
          <CTASection title="Treine neste ginásio" text="Escolha um plano e comece hoje mesmo a transformar seu corpo." primary="Ver planos disponíveis" href={`/planos?gym=${gym.slug}`} />
          <div className="mt-4 grid gap-3">
            <Button href={`/login?next=${encodeURIComponent(`/dashboard/academias?gym=${gym.slug}`)}`} variant="secondary"><QrCode className="h-4 w-4" /> Fazer check-in agora</Button>
            <Button href={directionsHref} variant="secondary"><MapPin className="h-4 w-4" /> Como chegar</Button>
          </div>
        </aside>
      </div>
    </section>
  );
}
