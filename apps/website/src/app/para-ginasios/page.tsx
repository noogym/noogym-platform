import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  MessageCircle,
  QrCode,
  ShieldCheck,
  Users,
} from "lucide-react";
import { partners } from "@/data/testimonials";
import { PageHero } from "@/components/ui/PageHero";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StatCard } from "@/components/ui/StatCard";
import { CTASection } from "@/components/ui/CTASection";
import { Button } from "@/components/ui/Button";
import { DemoRequestModal } from "@/components/gyms/DemoRequestModal";

export const metadata: Metadata = {
  title: "Para Ginásios",
  description: "Software de gestão e rede Noogym para ginásios captarem mais alunos, automatizarem operações e crescerem com dados.",
};

const growthPillars = [
  { icon: Users, title: "Capte novos alunos", text: "Coloque o seu ginásio na rede Noogym e apareça para pessoas prontas para começar a treinar." },
  { icon: QrCode, title: "Controle o acesso", text: "Check-in por QR Code, histórico de entradas e visibilidade sobre a frequência dos alunos." },
  { icon: CreditCard, title: "Receba com menos atrito", text: "Planos, pagamentos e recebimentos organizados para reduzir inadimplência e retrabalho." },
];

const managementFeatures = [
  { icon: Users, title: "Alunos e planos", text: "Cadastre alunos, acompanhe status, organize planos e mantenha tudo acessível em poucos cliques." },
  { icon: CalendarCheck, title: "Aulas e horários", text: "Gerencie turmas, reservas, capacidade e rotinas da equipa sem planilhas soltas." },
  { icon: CreditCard, title: "Financeiro completo", text: "Controle receitas, pagamentos pendentes, recibos e indicadores financeiros do negócio." },
  { icon: BarChart3, title: "Dashboard em tempo real", text: "Veja check-ins, receita, crescimento e ocupação com relatórios simples de interpretar." },
  { icon: MessageCircle, title: "Comunicação integrada", text: "Envie avisos, campanhas e lembretes para manter os alunos próximos do ginásio." },
  { icon: ShieldCheck, title: "Segurança e suporte", text: "Dados organizados, permissões por perfil e apoio para a operação não parar." },
];

const steps = [
  "Mapeamos a operação do seu ginásio e configuramos os planos, equipa e acessos.",
  "Publicamos o ginásio na rede Noogym para aumentar a descoberta por novos alunos.",
  "Acompanhamos métricas de crescimento, check-ins e receita para melhorar resultados.",
];

const partnerQuotes = [
  {
    quote: "A página na rede trouxe novos alunos e o painel ajudou a equipa a controlar check-ins sem complicação.",
    name: "Ana Paula",
    role: "Proprietária de ginásio",
  },
  {
    quote: "Antes tínhamos informação espalhada. Agora conseguimos ver planos, pagamentos e movimento do ginásio no mesmo lugar.",
    name: "Miguel Santos",
    role: "Gestor operacional",
  },
  {
    quote: "O Noogym deixou a nossa oferta mais fácil de vender e a rotina administrativa muito mais leve.",
    name: "Carla Domingos",
    role: "Diretora comercial",
  },
];

const consultantWhatsappHref =
  "https://wa.me/244923456789?text=Ol%C3%A1%20Noogym%2C%20quero%20falar%20com%20um%20consultor%20sobre%20a%20solu%C3%A7%C3%A3o%20para%20gin%C3%A1sios.";
const demoRequestHref = "#agendar-demonstracao";

export default function ForGymsPage() {
  return (
    <>
      <PageHero
        eyebrow="Para Ginásios"
        title={<>Mais alunos, gestão simples e crescimento <span className="text-limebrand">previsível.</span></>}
        subtitle="Una o seu ginásio à rede Noogym e use um software de gestão pensado para captar alunos, controlar acessos, organizar pagamentos e acompanhar resultados em tempo real."
        image="/images/for-gyms/for-gyms-hero-showcase.png"
        primary="Solicitar demonstração"
        secondary="Falar com consultor"
        primaryHref={demoRequestHref}
        secondaryHref={consultantWhatsappHref}
      />

      <section className="container-page grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard value="+25.000" label="potenciais alunos na rede" />
        <StatCard value="120+" label="ginásios parceiros" />
        <StatCard value="QR" label="check-in integrado" />
        <StatCard value="24/7" label="suporte à operação" />
      </section>

      <section className="container-page py-10">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-limebrand">Uma solução, três frentes</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black md:text-4xl">Transforme descoberta, operação e receita em uma rotina mais fácil de gerir.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-white/60">O Noogym combina presença comercial, ferramenta de gestão e dados de performance para o ginásio crescer com menos improviso.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {growthPillars.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="container-page grid gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase text-limebrand">Software de gestão Noogym</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Tudo que o seu ginásio precisa para operar melhor.</h2>
          <p className="mt-4 leading-7 text-white/64">Centralize alunos, planos, check-ins, pagamentos, comunicação e indicadores em uma experiência simples para a equipa e clara para a gestão.</p>
          <div className="mt-7 grid gap-3">
            {["Menos tempo em tarefas manuais", "Mais controle sobre entradas e pagamentos", "Relatórios prontos para decisões comerciais", "Experiência mais organizada para alunos e equipa"].map((item) => (
              <p key={item} className="flex items-center gap-3 text-sm text-white/72">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-limebrand" />
                {item}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={demoRequestHref} className="w-full sm:w-auto">Começar agora <ArrowRight className="h-4 w-4" /></Button>
            <Button href={consultantWhatsappHref} variant="secondary" className="w-full sm:w-auto">Falar com vendas</Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg border border-limebrand/20 bg-black/40 p-3 shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_72%,rgba(182,255,0,0.18),transparent_22rem)]" />
          <Image
            src="/images/for-gyms/management-dashboard-devices.png"
            alt="Sistema de gestão Noogym exibido em computador e telemóvel"
            width={1484}
            height={1060}
            className="relative w-full rounded-md object-cover"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="mb-8 text-center text-3xl font-bold">Funcionalidades para gerir e vender melhor</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {managementFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="container-page py-10">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase text-limebrand">Implantação assistida</p>
            <h2 className="mt-3 text-3xl font-black">Entrar na Noogym é simples para a sua equipa.</h2>
            <p className="mt-4 leading-7 text-white/62">Nós ajudamos na configuração inicial para que o ginásio comece a operar e vender com segurança desde os primeiros dias.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-lg border border-white/12 bg-white/[0.035] p-6">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-limebrand font-black text-black">{index + 1}</div>
                <p className="mt-5 text-sm leading-6 text-white/66">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="rounded-lg border border-white/12 bg-white/[0.035] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase text-limebrand">Rede e integrações</p>
              <h2 className="mt-3 text-3xl font-black">O ginásio fica visível para novos alunos e conectado às ferramentas certas.</h2>
              <p className="mt-4 leading-7 text-white/62">Integre comunicação, agenda, pagamentos e relatórios enquanto ganha presença na rede de parceiros Noogym.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {["WhatsApp Business", "Pagamentos locais", "Google Calendar", "Relatórios CSV", "Campanhas", ...partners].map((item) => (
                <div key={item} className="grid min-h-20 place-items-center rounded-md border border-white/10 bg-black/18 p-4 text-center text-sm font-bold text-white/78">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="mb-7 text-center text-3xl font-bold">Prova social de quem gere ginásios</h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {partnerQuotes.map((item) => (
            <div key={item.name} className="rounded-lg border border-white/12 bg-white/[0.035] p-6">
              <p className="text-limebrand">★★★★★</p>
              <p className="mt-4 text-sm leading-6 text-white/72">&quot;{item.quote}&quot;</p>
              <p className="mt-5 font-bold">{item.name}</p>
              <p className="text-sm text-white/45">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-8">
        <CTASection
          title={<>Pronto para vender mais e gerir melhor o seu <span className="text-limebrand">ginásio?</span></>}
          text="Solicite uma demonstração e veja como a Noogym pode ajudar na captação, operação e crescimento do seu negócio."
          primary="Solicitar demonstração"
          href={demoRequestHref}
          secondary="Falar com consultor"
          secondaryHref={consultantWhatsappHref}
        />
      </section>
      <DemoRequestModal />
    </>
  );
}
