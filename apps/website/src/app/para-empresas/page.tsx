import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, LayoutGrid, Store, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Soluções para empresas",
  description: "Descobre como a Noogym pode aproximar o teu negócio das pessoas e comunidades ligadas ao fitness em Angola.",
};

const businessSolutions = [
  {
    id: "ginasios",
    icon: Building2,
    title: "Ginásios",
    description: "Dá visibilidade ao teu ginásio e conhece as ferramentas Noogym para apoiar a gestão da operação.",
    action: "Conhecer a solução para ginásios",
    href: "/para-ginasios",
    bullets: ["Presença na rede Noogym", "Gestão de membros e planos", "Acompanhamento da operação"],
  },
  {
    id: "lojas",
    icon: Store,
    title: "Lojas fitness",
    description: "Apresenta os teus produtos a pessoas que procuram soluções para apoiar a sua rotina de treino.",
    action: "Falar sobre a minha loja",
    href: "mailto:suporte@noogym.com?subject=Noogym%20para%20lojas%20fitness",
    bullets: ["Produtos ligados ao universo fitness", "Oportunidade de presença no marketplace", "Contacto direto com a equipa Noogym"],
  },
  {
    id: "profissionais",
    icon: UserRound,
    title: "Personal trainers e profissionais",
    description: "Mostra os teus serviços e aproxima-te de pessoas à procura de acompanhamento profissional.",
    action: "Falar sobre serviços profissionais",
    href: "mailto:suporte@noogym.com?subject=Noogym%20para%20profissionais%20de%20fitness",
    bullets: ["Apresentação dos teus serviços", "Ligação a praticantes e comunidades", "Contacto direto com a equipa Noogym"],
  },
  {
    id: "parceiros",
    icon: LayoutGrid,
    title: "Marcas, eventos e parceiros",
    description: "Explora formas de colaborar com uma plataforma dedicada à saúde, ao fitness e ao bem-estar.",
    action: "Propor uma parceria",
    href: "mailto:suporte@noogym.com?subject=Proposta%20de%20parceria%20Noogym",
    bullets: ["Parcerias de marca", "Eventos e experiências", "Iniciativas para a comunidade"],
  },
];

export default function ForBusinessesPage() {
  return (
    <main>
      <section className="border-b border-white/8 bg-[radial-gradient(ellipse_at_75%_0%,rgba(182,255,0,0.12),transparent_45%),#070a09]">
        <div className="container-page py-16 sm:py-20 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-limebrand">Noogym para empresas</p>
          <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            O teu negócio pode fazer parte de uma comunidade <span className="text-limebrand">mais activa.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
            A Noogym aproxima praticantes, ginásios, lojas e profissionais. Escolhe o teu tipo de negócio para conhecer o próximo passo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#solucoes">Explorar soluções <ArrowRight className="h-4 w-4" /></Button>
            <Button href="mailto:suporte@noogym.com?subject=Quero%20saber%20mais%20sobre%20a%20Noogym" variant="secondary">Falar com a Noogym</Button>
          </div>
        </div>
      </section>

      <section id="solucoes" className="container-page scroll-mt-24 py-14 sm:py-18">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-limebrand">Escolhe o teu caminho</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Uma porta de entrada para cada negócio.</h2>
          <p className="mt-3 leading-6 text-white/58">Começa pela área que melhor descreve o que fazes. A página de ginásios detalha a solução; para as restantes áreas, fala connosco sobre disponibilidade e próximos passos.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {businessSolutions.map(({ id, icon: Icon, title, description, action, href, bullets }) => {
            const isInternal = href.startsWith("/");
            return (
              <article id={id} key={id} className="scroll-mt-24 flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.025] p-5 sm:p-7">
                <Icon aria-hidden="true" className="h-7 w-7 text-limebrand" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-white/60">{description}</p>
                <ul className="mt-5 space-y-2.5">
                  {bullets.map((bullet) => <li key={bullet} className="flex items-start gap-2.5 text-sm text-white/72"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-limebrand" />{bullet}</li>)}
                </ul>
                {isInternal ? (
                  <Link href={href} className="mt-7 inline-flex min-h-11 items-center gap-2 self-start rounded-md bg-limebrand px-4 text-sm font-bold text-black transition hover:bg-limebrand2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-limebrand">{action}<ArrowRight className="h-4 w-4" /></Link>
                ) : (
                  <a href={href} className="mt-7 inline-flex min-h-11 items-center gap-2 self-start rounded-md border border-white/20 px-4 text-sm font-bold text-white transition hover:border-limebrand hover:text-limebrand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-limebrand">{action}<ArrowRight className="h-4 w-4" /></a>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="flex flex-col gap-5 rounded-xl border border-limebrand/20 bg-limebrand/[0.06] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-limebrand">Tens dúvidas?</p>
            <h2 className="mt-2 text-2xl font-black">Conta-nos o que o teu negócio precisa.</h2>
            <p className="mt-2 text-sm leading-6 text-white/58">A nossa equipa pode orientar-te sobre a opção mais adequada.</p>
          </div>
          <Button href="mailto:suporte@noogym.com?subject=Quero%20falar%20sobre%20solu%C3%A7%C3%B5es%20Noogym" className="shrink-0">Contactar a equipa <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </section>
    </main>
  );
}
