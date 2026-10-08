"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, CalendarDays, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="container-page pt-8">
      <div className="noise relative min-h-[560px] overflow-hidden rounded-lg border border-white/12 bg-black md:min-h-[680px]">
        <div className="absolute inset-0 bg-[url('/images/home/gym-phone-hero.png')] bg-cover bg-[62%_center] opacity-90 sm:bg-[58%_center] sm:opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/10 md:via-black/68 md:to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-transparent to-black/15 md:from-black/58 md:to-black/10" />
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex min-h-[560px] w-full min-w-0 max-w-4xl flex-col justify-center p-5 sm:p-8 md:min-h-[680px] md:p-12"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 inline-flex w-fit rounded-full border border-limebrand/25 bg-limebrand/10 px-3 py-1 text-xs font-bold uppercase text-limebrand">
            Ecossistema fitness
          </p>
          <h1 className="text-balance text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl">
            A plataforma que conecta o <span className="text-limebrand">fitness em Angola.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            Noogym liga atletas, ginasios, lojas, eventos e gestao num unico lugar para treinar, comprar, participar e crescer com mais clareza.
          </p>
          <div className="mt-8 grid gap-3 min-[430px]:flex min-[430px]:flex-wrap">
            <Button href="/criar-conta">
              Criar minha conta <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/explorar-ginasios" variant="secondary">
              Explorar ginasios
            </Button>
          </div>
          <div className="mt-10 grid max-w-2xl gap-4 text-sm text-white/70 md:grid-cols-3">
            {[
              [Building2, "Rede de ginasios"],
              [ShoppingBag, "Marketplace fitness"],
              [CalendarDays, "Eventos e comunidade"],
            ].map(([Icon, text]) => (
              <div key={text as string} className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-limebrand" /> {text as string}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
