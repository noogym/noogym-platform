import Image from "next/image";
import { Clock, MapPin, QrCode, Star, TicketCheck, WalletCards } from "lucide-react";
import type { Gym } from "@/data/gyms";
import { Badge } from "@/components/ui/Badge";
import { formatKz } from "@/lib/utils";

export function GymDetailsHero({ gym }: { gym: Gym }) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
      <div>
        <div className="relative h-72 overflow-hidden rounded-lg border border-white/12 sm:h-96 lg:h-[430px]">
          <Image src={gym.image} alt={gym.name} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/28" />
          <Badge className="absolute left-4 top-4 bg-emerald-500 text-white">Parceiro verificado</Badge>
        </div>
        <div className="mt-3 grid grid-cols-5 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative h-14 overflow-hidden rounded-md border border-white/10 sm:h-20">
              <Image src={gym.image} alt="" fill className="object-cover" />
            </div>
          ))}
          <div className="grid place-items-center rounded-md border border-white/10 bg-white/[0.04] text-center font-bold">+12<br /><span className="text-xs font-normal text-white/50">Ver todas</span></div>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">{gym.name} <span className="text-limebrand">●</span></h1>
        <div className="mt-5 flex flex-wrap gap-5 text-sm text-white/68">
          <span className="flex items-center gap-2"><Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {gym.rating} ({gym.reviews} avaliações)</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {gym.location}</span>
          <span className="text-limebrand">+ {gym.distance} de você</span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">{gym.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white/72">{tag}</span>)}</div>
        <p className="mt-6 max-w-2xl leading-7 text-white/68">Espaço moderno, equipamentos de última geração e uma equipe pronta para te ajudar a alcançar teus objetivos.</p>
        <div className="mt-8 grid gap-3 rounded-lg border border-white/12 bg-white/[0.035] p-5 sm:grid-cols-2 xl:grid-cols-4">
          {[
            [Clock, "Aberto agora", "05:00 - 22:00"],
            [WalletCards, "Preço a partir de", `${formatKz(gym.price)}/mês`],
            [QrCode, "Check-in", "QR Code"],
            [TicketCheck, "Plano day pass", "2.000 Kz"],
          ].map(([Icon, title, value]) => (
            <div key={title as string}>
              <Icon className="mb-3 h-5 w-5 text-white/76" />
              <p className="text-sm text-white/58">{title as string}</p>
              <p className="mt-1 font-bold text-limebrand">{value as string}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
