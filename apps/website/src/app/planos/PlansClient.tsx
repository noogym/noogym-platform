"use client";

import {
  Apple,
  Bell,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Dumbbell,
  Heart,
  MapPin,
  Play,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  UserRound,
  Utensils,
} from "lucide-react";
import { PlanComparison } from "@/components/plans/PlanComparison";
import { PricingCard } from "@/components/plans/PricingCard";
import { AppMockup } from "@/components/ui/AppMockup";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PageHero } from "@/components/ui/PageHero";
import { gymPlanPrices, plans } from "@/data/plans";
import { formatKz } from "@/lib/utils";

const benefits = [
  { icon: ShieldCheck, title: "Preço transparente", text: "O valor final aparece depois de escolher o ginásio parceiro." },
  { icon: MapPin, title: "Rede em expansão", text: "Escolha ginásios por localização, estrutura e modalidade." },
  { icon: TrendingUp, title: "Evolução inteligente", text: "Acompanhe presença, rotina e progresso dentro da plataforma." },
  { icon: Smartphone, title: "Check-in digital", text: "Entrada organizada para atletas e validação simples para parceiros." },
  { icon: Heart, title: "Benefícios Noogym", text: "Desafios, marketplace, eventos e campanhas para membros." },
];

const steps = [
  {
    title: "Escolha o tipo de acesso",
    text: "Essencial, Plus ou Total definem o nível de flexibilidade e benefícios Noogym.",
  },
  {
    title: "Selecione o ginásio",
    text: "Cada parceiro pode ter preço próprio conforme estrutura, localização e modalidades.",
  },
  {
    title: "Confirme o preço real",
    text: "Antes de pagar, o usuário vê o plano disponível naquele ginásio e as condições incluídas.",
  },
];

const coachingServices = [
  {
    icon: Dumbbell,
    title: "Programa de treino",
    text: "Planos por objetivo, nível, frequência semanal e estrutura do ginásio escolhido.",
    items: ["Hipertrofia", "Perda de peso", "Força", "Condicionamento"],
  },
  {
    icon: Utensils,
    title: "Plano de nutrição",
    text: "Metas alimentares, sugestões de refeições e acompanhamento progressivo conforme o plano.",
    items: ["Guia inicial", "Macros", "Substituições", "Revisões"],
  },
  {
    icon: UserRound,
    title: "Personal trainer",
    text: "Acesso a revisões, avaliações e sessões com profissionais parceiros sem prometer uso ilimitado.",
    items: ["Revisão mensal", "Avaliação física", "Sessões incluídas", "Extras com desconto"],
  },
];

export function PlansClient() {
  return (
    <>
      <PageHero
        eyebrow="Planos flexíveis por ginásio"
        title={<>Escolha seu plano Noogym, depois o <span className="text-limebrand">ginásio ideal</span>.</>}
        subtitle="Os benefícios são organizados pela Noogym, mas o preço final respeita a realidade de cada ginásio parceiro em Angola."
        image="/images/plans/athlete-phone-noogym.png"
        primary="Explorar ginásios"
        primaryHref="/explorar-ginasios"
        secondary="Comparar planos"
        secondaryHref="#comparar"
      />

      <section className="container-page py-10">
        <div className="mb-7 grid gap-4 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-limebrand">Como os preços funcionam</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
              Um plano Noogym não precisa forçar todos os ginásios a terem o mesmo preço.
            </h2>
          </div>
          <div className="rounded-lg border border-white/12 bg-white/[0.035] p-5 text-sm leading-7 text-white/64">
            A Noogym organiza o acesso, check-in, pagamentos e benefícios. Cada ginásio mantém sua faixa de preço, e o usuário vê o valor real ao selecionar onde pretende treinar.
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-lg border border-white/12 bg-white/[0.035] p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-limebrand text-sm font-black text-black">{index + 1}</span>
              <h3 className="mt-5 text-lg font-black">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/58">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-6">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-limebrand">Mais que acesso ao ginásio</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Treino, nutrição e personal como parte da evolução.</h2>
          <p className="mt-4 text-base leading-7 text-white/62">
            Esses serviços entram por nível de plano, com limites claros como revisões mensais, sessões incluídas e extras pagos. Assim o benefício é real para o atleta e sustentável para a operação.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {coachingServices.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="rounded-lg border border-white/12 bg-white/[0.035] p-5 transition hover:border-limebrand/40">
                <Icon className="h-10 w-10 rounded-md bg-limebrand/12 p-2 text-limebrand" />
                <h3 className="mt-5 text-xl font-black">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{service.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/24 px-3 py-1 text-xs font-semibold text-white/68">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-start gap-3 rounded-lg border border-limebrand/25 bg-limebrand/8 p-4 text-sm leading-6 text-white/68">
          <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-limebrand" />
          <p>
            Personal trainer e nutrição devem funcionar por créditos, revisões ou sessões mensais. Isso evita prometer acompanhamento ilimitado e permite vender extras quando o atleta quiser mais proximidade.
          </p>
        </div>
      </section>

      <section className="container-page py-6">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-limebrand">Planos Noogym</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Benefícios claros, preço por ginásio.</h2>
          </div>
          <Button href="/explorar-ginasios" variant="secondary">Ver ginásios disponíveis</Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="container-page py-8">
        <div className="rounded-lg border border-white/12 bg-white/[0.035] p-5 sm:p-7">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-limebrand">Exemplos por parceiro</p>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl">O mesmo plano pode mudar conforme o ginásio.</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-white/56">
              Estes valores ajudam o usuário a entender a lógica. No checkout, a plataforma deve carregar os preços cadastrados por cada parceiro.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {gymPlanPrices.map((gym) => (
              <div key={gym.gym} className="rounded-lg border border-white/10 bg-black/18 p-5">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-1 h-5 w-5 shrink-0 text-limebrand" />
                  <div>
                    <h3 className="font-black">{gym.gym}</h3>
                    <p className="text-sm text-white/50">{gym.location}</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 text-sm">
                  <PriceRow label="Essencial" value={gym.essential} />
                  <PriceRow label="Plus" value={gym.plus} highlight />
                  <PriceRow label="Total" value={gym.total} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="comparar" className="container-page py-8"><PlanComparison /></section>

      <section className="container-page grid gap-8 py-10 xl:grid-cols-[0.75fr_1fr]">
        <div className="glass noise relative overflow-hidden rounded-lg p-5 sm:p-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(182,255,0,0.18),transparent_34%),linear-gradient(135deg,rgba(182,255,0,0.08),transparent_42%)]" />
          <div className="inline-flex items-center gap-2 rounded-full border border-limebrand/25 bg-limebrand/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-limebrand">
            <Smartphone className="h-3.5 w-3.5" />
            App Noogym
          </div>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
            Tudo na <span className="text-limebrand">palma da mão</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Centralize check-ins, plano ativo, pagamentos e benefícios num só lugar, com informações claras antes de escolher o ginásio.
          </p>

          <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
            <AppValue icon={CheckCircle2} title="Plano sempre visível" text="Veja ginásio escolhido, preço mensal e benefícios incluídos." />
            <AppValue icon={Bell} title="Lembretes e campanhas" text="Receba avisos de pagamento, desafios, eventos e ofertas Noogym." />
            <AppValue icon={ShieldCheck} title="Pagamentos organizados" text="Histórico simples para o atleta e validação mais segura para parceiros." />
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="border-l-2 border-limebrand pl-4">
              <p className="text-2xl font-black">3 passos</p>
              <p className="mt-1 text-sm text-white/54">Escolher plano, selecionar ginásio e confirmar preço.</p>
            </div>
            <div className="border-l-2 border-limebrand pl-4">
              <p className="text-2xl font-black">24/7</p>
              <p className="mt-1 text-sm text-white/54">Acesso ao histórico e benefícios do plano.</p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <StoreButton icon={Apple} label="Em breve na" name="App Store" />
            <StoreButton icon={Play} label="Em breve no" name="Google Play" />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3"><AppMockup /><AppMockup title="Check-in" /><AppMockup title="Benefícios" /></div>
      </section>

      <section className="container-page grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {benefits.map((benefit) => <FeatureCard key={benefit.title} {...benefit} />)}
      </section>
    </>
  );
}

function PriceRow({ highlight, label, value }: { highlight?: boolean; label: string; value?: number }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2">
      <span className="inline-flex items-center gap-2 text-white/68">
        <CheckCircle2 className={`h-4 w-4 ${highlight ? "text-limebrand" : "text-white/35"}`} />
        {label}
      </span>
      <strong className={highlight ? "text-limebrand" : "text-white"}>
        {value ? formatKz(value) : "Sob consulta"}
      </strong>
    </div>
  );
}

function AppValue({
  icon: Icon,
  text,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  title: string;
}) {
  return (
    <div className="flex gap-3 py-4">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-limebrand" />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-white/56">{text}</p>
      </div>
    </div>
  );
}

function StoreButton({
  icon: Icon,
  label,
  name,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  name: string;
}) {
  return (
    <button
      aria-disabled="true"
      className="inline-flex min-h-12 flex-1 cursor-default items-center justify-center gap-3 rounded-md border border-white/16 bg-black/32 px-4 text-left text-white/78"
      disabled
      type="button"
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span className="grid leading-none">
        <span className="text-[10px] font-semibold text-white/58">{label}</span>
        <span className="text-sm font-black">{name}</span>
      </span>
    </button>
  );
}
