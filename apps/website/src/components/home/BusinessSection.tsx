import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, LayoutGrid, Store, UserRound } from "lucide-react";
import { TrackedLink } from "@/components/analytics/TrackedLink";

const businessTypes = [
  { icon: Building2, title: "Ginásios", text: "Gestão de membros, treinos, pagamentos e operações.", href: "/para-ginasios" },
  { icon: Store, title: "Lojas fitness", text: "Soluções para vendas, stock e relacionamento com clientes.", href: "/para-empresas#lojas" },
  { icon: UserRound, title: "Personal trainers", text: "Ferramentas para gerir clientes e desenvolver a carreira.", href: "/para-empresas#profissionais" },
  { icon: LayoutGrid, title: "Outros parceiros", text: "Marcas, eventos e serviços ligados ao fitness.", href: "/para-empresas#parceiros" },
];

export function BusinessSection() {
  return (
    <section id="empresas" className="scroll-mt-20 border-b border-white/8 bg-[#090d0c]">
      <div className="container-page grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:py-16">
        <div>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-limebrand">Para empresas</p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Negócios mais fortes.<br />Comunidades <span className="text-limebrand">mais saudáveis.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
              Soluções digitais para ginásios, lojas fitness e profissionais, com ferramentas para simplificar a gestão e aproximar mais pessoas do bem-estar.
            </p>
            <TrackedLink
              href="/para-empresas"
              eventName="homepage_cta_click"
              eventParams={{ cta_name: "conhecer_solucoes", section: "business" }}
              className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-md bg-limebrand px-5 text-sm font-bold text-black transition hover:bg-limebrand2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-limebrand"
            >
              Conhecer soluções <ArrowRight className="h-4 w-4" />
            </TrackedLink>
          </div>
        </div>
        <div className="relative order-first min-h-[230px] overflow-hidden rounded-sm sm:min-h-[330px] lg:order-last lg:min-h-[390px]">
          <Image
            src="/images/home/business-tablet-noogym.jpg"
            alt="Dois profissionais de fitness a consultar um tablet no ginásio"
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090d0c]/35 to-transparent lg:bg-gradient-to-l lg:from-[#090d0c]/30 lg:to-transparent" />
        </div>
      </div>

      <div className="container-page grid grid-cols-1 gap-3 pb-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:pb-14">
        {businessTypes.map(({ icon: Icon, title, text, href }) => {
          const content = (
            <>
              <Icon aria-hidden="true" className="h-6 w-6 text-limebrand" />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-5 text-white/58">{text}</p>
              {href ? <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-limebrand">Saber mais <ArrowRight className="h-3.5 w-3.5" /></span> : null}
            </>
          );

          return href ? (
            <Link key={title} href={href} className="group min-h-44 rounded-md border border-white/8 bg-[#111715]/95 p-5 transition hover:border-limebrand/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-limebrand">
              {content}
            </Link>
          ) : (
            <div key={title} className="min-h-44 rounded-md border border-white/8 bg-[#111715]/95 p-5">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
