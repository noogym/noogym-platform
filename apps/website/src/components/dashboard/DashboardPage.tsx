import Image from "next/image";
import Link from "next/link";
import {
  Apple,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Download,
  Dumbbell,
  Headphones,
  HelpCircle,
  Lock,
  MoreVertical,
  Plus,
  Shield,
  Star,
  Target,
  Trophy,
  WalletCards,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { activity, coupons, gyms, orders, products, screenMeta, workouts, type DashboardSlug } from "@/data/dashboard";
import { CouponCard } from "./CouponCard";
import { DashboardCartSummary } from "./DashboardCartSummary";
import { EmptyState } from "./EmptyState";
import { Filters } from "./Filters";
import { dashboardIcons } from "./icons";
import { MetricCard } from "./MetricCard";
import { OrderCard } from "./OrderCard";
import { ProductCard } from "./ProductCard";
import { ProgressChartCard } from "./ProgressChartCard";
import { RightPanelCard } from "./RightPanelCard";
import { SectionCard } from "./SectionCard";
import { DashboardTabScreen } from "./DashboardTabScreens";
import { DashboardRoleSummary } from "./DashboardRoleSummary";
import { TabsNavigation } from "./TabsNavigation";
import { findActiveTab } from "./tabUtils";
import { UserAvatar } from "./UserAvatar";

type Metric = Parameters<typeof MetricCard>[0];

const overviewMetrics: Metric[] = [
  { icon: "Dumbbell", label: "Treinos realizados", value: "18", trend: "+12% vs. período anterior" },
  { icon: "MapPin", label: "Check-ins", value: "12", trend: "+20% vs. período anterior" },
  { icon: "Activity", label: "Calorias queimadas", value: "4.250 kcal", trend: "+18% vs. período anterior" },
  { icon: "Flame", label: "Dias de sequência", value: "7", detail: "Mantenha o foco! 🔥" },
];

const performanceMetrics: Metric[] = [
  { icon: "Dumbbell", label: "Treinos realizados", value: "18", trend: "+12% vs. período anterior" },
  { icon: "Activity", label: "Calorias queimadas", value: "4.250 kcal", trend: "+18% vs. período anterior" },
  { icon: "CalendarCheck", label: "Tempo total", value: "12h 45m", trend: "+1h 30m vs. período anterior" },
  { icon: "MapPin", label: "Check-ins", value: "12", trend: "+20% vs. período anterior" },
];

function Header({ slug, activeTab }: { slug: DashboardSlug; activeTab?: string }) {
  const meta = screenMeta[slug];
  const Icon = dashboardIcons[meta.icon];
  const isProgress = slug === "progresso";
  const reportsDescription = (() => {
    if (slug !== "relatorios") return meta.description;
    if (activeTab === "Treinos") return "Acompanhe seu desempenho e evolução nos treinos.";
    if (activeTab === "Nutrição") return "Acompanhe sua nutrição e alcance seus objetivos com mais inteligência.";
    if (activeTab === "Progresso") return "Acompanhe sua evolução ao longo do tempo e veja o quanto você já conquistou.";
    if (activeTab === "Hábitos") return "Veja como sua consistência diária impacta seus resultados no Noogym.";
    if (activeTab === "Sono") return "Acompanhe sua recuperação e entenda a relação entre descanso e performance.";
    if (activeTab === "Avaliações") return "Compare avaliações físicas, indicadores e recomendações profissionais.";
    return meta.description;
  })();

  return (
    <div className="mb-6 min-w-0 max-w-full overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="w-full min-w-0 flex-1 sm:w-auto">
          <div className="flex items-center gap-3">
            {isProgress ? null : <Icon className="h-7 w-7 shrink-0 text-limebrand sm:h-8 sm:w-8" />}
            <h1 className="min-w-0 text-2xl font-black tracking-normal sm:text-3xl md:text-4xl">{meta.title}</h1>
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-white/74 sm:text-base">{reportsDescription}</p>
        </div>
        {isProgress ? (
          <button className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/12 bg-black/25 px-4 text-sm font-semibold text-white/90 shadow-card sm:w-auto">
            <HelpCircle className="h-4 w-4 shrink-0" />
            Entender como funciona
          </button>
        ) : slug === "relatorios" ? (
          <div className="grid w-full grid-cols-1 gap-3 sm:flex sm:w-auto">
            <button className="inline-flex min-w-0 items-center justify-center gap-2 rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/86"><CalendarCheck className="h-4 w-4 shrink-0" /><span className="truncate">01 Mai - 22 Mai 2024</span></button>
            <button className="inline-flex min-w-0 items-center justify-center gap-2 rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/86"><Download className="h-4 w-4 shrink-0" /><span className="truncate">Exportar</span></button>
          </div>
        ) : ["resumo"].includes(slug) ? (
          <div className="grid w-full grid-cols-1 gap-3 sm:flex sm:w-auto">
            <button className="min-w-0 rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/86"><span className="truncate">01 Mai - 22 Mai 2024</span></button>
            <button className="hidden items-center gap-2 rounded-md border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/86 sm:flex"><Download className="h-4 w-4" /> Exportar relatório</button>
          </div>
        ) : null}
      </div>
      {meta.tabs ? <div className="mt-5"><TabsNavigation tabs={meta.tabs} active={activeTab} baseHref={`/dashboard/${slug}`} /></div> : null}
    </div>
  );
}

function Donut({ value, label, sublabel, className }: { value: number; label: string; sublabel?: string; className?: string }) {
  return (
    <div className={cn("grid place-items-center rounded-full", className)} style={{ background: `conic-gradient(#b6ff00 ${value * 3.6}deg, rgba(255,255,255,.13) 0deg)` }}>
      <div className="grid h-[72%] w-[72%] place-items-center rounded-full bg-[#071113] text-center shadow-inner">
        <div>
          <p className="text-3xl font-black">{label}</p>
          {sublabel ? <p className="text-xs text-white/64">{sublabel}</p> : null}
        </div>
      </div>
    </div>
  );
}

function ProgressLine({ label, value, right }: { label: string; value: number; right?: string }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>{label}</span>
        <span className="text-white/64">{right ?? `${value}%`}</span>
      </div>
      <div className="h-2 rounded-full bg-white/12">
        <div className="h-full rounded-full bg-limebrand" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function GoalsCard() {
  return (
    <SectionCard title="Metas">
      <div className="space-y-5">
        <ProgressLine label="Perder gordura" value={68} />
        <ProgressLine label="Treinar 4x por semana" value={75} />
        <ProgressLine label="Beber 2L de agua por dia" value={80} />
      </div>
    </SectionCard>
  );
}

function ActivityList() {
  return (
    <div className="space-y-3">
      {activity.map(([title, detail]) => (
        <div key={title} className="flex items-center gap-4 rounded-md border border-white/8 bg-black/18 p-3">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-limebrand" />
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-sm text-white/58">{detail}</p>
          </div>
          <ChevronRight className="ml-auto h-4 w-4 text-white/54" />
        </div>
      ))}
    </div>
  );
}

function HelpPanel() {
  return (
    <RightPanelCard title="Precisa de ajuda?">
      {["Central de ajuda", "Falar com suporte", "Perguntas frequentes", "Política de reembolso"].map((item) => (
        <div key={item} className="flex items-center gap-3 border-b border-white/8 py-3 last:border-0">
          <Headphones className="h-5 w-5 text-white/80" />
          <span>{item}</span>
          <ChevronRight className="ml-auto h-4 w-4 text-white/56" />
        </div>
      ))}
    </RightPanelCard>
  );
}

function PlanPanel() {
  return (
    <RightPanelCard title="Seu plano" action={<span className="rounded bg-limebrand/18 px-2 py-1 text-xs font-bold text-limebrand">Premium</span>}>
      <div className="flex items-start gap-3">
        <Trophy className="h-9 w-9 text-limebrand" />
        <div>
          <h3 className="text-xl font-bold">Noogym Premium</h3>
          <p className="mt-1 text-sm text-white/64">Aproveite todos os benefícios do seu plano.</p>
        </div>
      </div>
      <p className="mt-6 text-sm text-white/62">Próxima cobrança</p>
      <p className="mt-1 text-lg font-bold">22 de Junho de 2024</p>
      <Link href="/dashboard/assinatura" className="mt-6 flex h-11 items-center justify-center rounded-md border border-limebrand/80 font-bold text-limebrand">Gerenciar plano</Link>
    </RightPanelCard>
  );
}

function MetricsGrid({ metrics = overviewMetrics }: { metrics?: Metric[] }) {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}</div>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SummaryScreen() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-6">
        <MetricsGrid metrics={overviewMetrics} />
        <ProgressChartCard title="Seu progresso" />
        <SectionCard title="Acesso rápido">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
            {[
              { title: "Check-in", desc: "Registrar presença", Icon: CalendarCheck, href: "/dashboard/check-ins" },
              { title: "Treinos", desc: "Ver treinos", Icon: Dumbbell, href: "/dashboard/treinos" },
              { title: "Planos", desc: "Meu plano", Icon: CreditCard, href: "/dashboard/assinatura" },
              { title: "Marketplace", desc: "Ver produtos", Icon: WalletCards, href: "/dashboard/produtos" },
              { title: "Progresso", desc: "Ver evolução", Icon: Target, href: "/dashboard/progresso" },
              { title: "Nutrição", desc: "Ver dieta", Icon: Apple, href: "/dashboard/nutricao" },
            ].map(({ title, desc, Icon, href }) => (
              <Link key={title} href={href} className="rounded-md border border-white/10 bg-white/[0.03] p-4 hover:border-limebrand/60">
                <Icon className="h-6 w-6 text-limebrand" />
                <p className="mt-3 font-bold">{title}</p>
                <p className="text-sm text-white/58">{desc}</p>
              </Link>
            ))}
          </div>
        </SectionCard>
        <div className="grid gap-6 xl:grid-cols-2">
          <SectionCard title="Atividade recente" action={<span className="text-sm text-limebrand">Ver todas</span>}><ActivityList /></SectionCard>
          <SectionCard title="Calendário de treinos" action={<span className="text-sm text-limebrand">Ver calendário</span>}><CalendarGrid compact /></SectionCard>
        </div>
        <SectionCard className="overflow-hidden border-limebrand/40">
          <div className="grid items-center gap-4 md:grid-cols-[1fr_320px]">
            <div>
              <h2 className="text-2xl font-black">Novidade no Marketplace!</h2>
              <p className="mt-2 text-white/68">Whey Protein Isolado Noogym para mais desempenho e melhores resultados.</p>
              <Link href="/dashboard/produtos" className="mt-5 inline-flex rounded-md border border-white/15 px-5 py-3 font-bold">Ver produto</Link>
            </div>
            <Image src="/images/products/noogym-market/whey-isolado-iron-house.png" alt="Whey Protein" width={300} height={220} className="mx-auto max-h-56 object-contain" />
          </div>
        </SectionCard>
      </div>
      <div className="space-y-5">
        <PlanPanel />
        <RightPanelCard title="Próximos treinos" action={<span className="text-sm text-limebrand">Ver todos</span>}>
          {workouts.slice(0, 3).map((workout) => (
            <div key={workout.name} className="mb-3 flex items-center gap-3 rounded-md border border-white/8 bg-black/18 p-3 last:mb-0">
              <Image src={workout.image} alt={workout.name} width={64} height={54} className="h-14 w-16 rounded object-cover" />
              <div>
                <p className="font-bold">{workout.name}</p>
                <p className="text-sm text-white/58">{workout.date}</p>
              </div>
              <Dumbbell className="ml-auto h-5 w-5 text-white/76" />
            </div>
          ))}
        </RightPanelCard>
        <RightPanelCard title="Desafios ativos" action={<span className="text-sm text-limebrand">Ver todos</span>}>
          <div className="space-y-5">
            <ProgressLine label="Desafio 30 Dias" value={75} right="75%" />
            <ProgressLine label="Queime 10k kcal" value={60} right="60%" />
          </div>
        </RightPanelCard>
      </div>
    </div>
  );
}

function ProductGrid({ favorite = false, count = 10 }: { favorite?: boolean; count?: number }) {
  return <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">{products.slice(0, count).map((product) => <ProductCard key={product.id} product={product} removable={favorite} />)}</div>;
}

export function MarketplaceScreen({ favorite = false }: { favorite?: boolean }) {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-6">
        <Filters search={favorite ? "Buscar nos favoritos..." : "Buscar produtos..."} options={["Categorias", "Marcas", "Ordenar: Popular"]} />
        {!favorite ? (
          <SectionCard className="overflow-hidden border-limebrand/40">
            <div className="grid items-center gap-4 md:grid-cols-[1fr_440px]">
              <div>
                <h2 className="text-xl font-black">Desempenho de outro nível ⚡</h2>
                <p className="mt-3 text-white/70">Produtos selecionados para elevar seus resultados.</p>
                <button className="mt-6 rounded-md bg-limebrand px-5 py-3 font-bold text-black">Ver ofertas</button>
              </div>
              <div className="flex items-end justify-center gap-2">
                {products.slice(0, 3).map((product) => <Image key={product.id} src={product.image} alt={product.name} width={150} height={160} className="max-h-40 object-contain" />)}
              </div>
            </div>
          </SectionCard>
        ) : null}
        <div className="flex items-center justify-between"><h2 className="text-xl font-bold">{favorite ? "12 itens" : "Destaques para você"}</h2><Link href="#" className="text-sm text-limebrand">Ver todos</Link></div>
        <ProductGrid favorite={favorite} count={favorite ? 10 : 5} />
      </div>
      <div className="space-y-5">
        {favorite ? (
          <RightPanelCard title="Sua lista">
            <div className="text-center">
              <Donut value={100} label="12" sublabel="itens favoritos" className="mx-auto h-36 w-36" />
              <button className="mt-5 h-11 w-full rounded-md bg-limebrand font-bold text-black">Ver todos os produtos</button>
            </div>
          </RightPanelCard>
        ) : (
          <DashboardCartSummary />
        )}
        <RightPanelCard title="Categorias em alta">
          {["Proteínas", "Acessórios", "Pré-treinos", "Vitaminas", "Vestuário"].map((item) => (
            <div key={item} className="flex items-center border-b border-white/8 py-3 last:border-0"><ShoppingIcon /> <span className="ml-3">{item}</span><ChevronRight className="ml-auto h-4 w-4" /></div>
          ))}
        </RightPanelCard>
        <RightPanelCard title="Ofertas que você pode gostar">
          <div className="rounded-md bg-white/[0.035] p-4">
            <span className="rounded bg-limebrand px-2 py-1 text-sm font-black text-black">-20%</span>
            <p className="mt-3 font-bold">Em pré-treinos selecionados</p>
            <Image src="/images/products/noogym-market/pre-treino-explosive-noogym.png" alt="Oferta" width={180} height={110} className="mx-auto mt-2 max-h-28 object-contain" />
          </div>
        </RightPanelCard>
      </div>
    </div>
  );
}

function ShoppingIcon() {
  return <WalletCards className="h-5 w-5 text-limebrand" />;
}

export function OrdersScreen() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <Filters search="Buscar pedidos..." options={["Período: Últimos 6 meses", "Ordenar: Mais recentes"]} showFilterButton={false} />
        {orders.map((order) => <OrderCard key={order.id} order={order} />)}
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Resumo dos pedidos">{["Todos os pedidos 18", "Em andamento 4", "Enviados 3", "Entregues 9", "Cancelados 2"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}</p>)}</RightPanelCard>
        <RightPanelCard title="Rastrear pedido"><p className="text-sm text-white/62">Acompanhe seu pedido em tempo real.</p><div className="mt-5 flex gap-2"><input className="h-11 flex-1 rounded-md border border-white/10 bg-black/25 px-3 text-sm" placeholder="Código de rastreio" /><button className="rounded-md bg-limebrand px-4 font-bold text-black">Rastrear</button></div></RightPanelCard>
        <HelpPanel />
      </div>
    </div>
  );
}

export function CouponsScreen() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <MetricsGrid metrics={[
          { icon: "TicketPercent", label: "Cupons disponíveis", value: "12", detail: "Prontos para usar" },
          { icon: "CalendarCheck", label: "Cupons usados", value: "3", detail: "Este mês" },
          { icon: "BadgePercent", label: "Economia total", value: "27.450 Kz", detail: "Com cupons" },
          { icon: "Star", label: "Ofertas exclusivas", value: "5", detail: "Somente para você" },
        ]} />
        <Filters search="Buscar cupons..." options={["Todos os tipos", "Ordenar: Mais recentes"]} showFilterButton={false} />
        {coupons.map((coupon) => <CouponCard key={coupon.code} coupon={coupon} />)}
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Resumo dos cupons"><Donut value={75} label="12" sublabel="disponíveis" className="mx-auto h-36 w-36" /><button className="mt-5 h-11 w-full rounded-md bg-limebrand font-bold text-black">Ver cupons disponíveis</button></RightPanelCard>
        <RightPanelCard title="Cupons prestes a expirar">{coupons.slice(0, 2).map((c) => <div key={c.code} className="flex justify-between border-b border-white/8 py-3 last:border-0"><span>{c.code}<br /><small className="text-white/52">{c.expires}</small></span><TicketPercentIcon /></div>)}</RightPanelCard>
        <RightPanelCard title="Como usar cupons?">{["Escolha os produtos", "Aplique o cupom", "Aproveite o desconto"].map((i) => <p key={i} className="border-b border-white/8 py-3 last:border-0">{i}</p>)}</RightPanelCard>
      </div>
    </div>
  );
}

function TicketPercentIcon() {
  return <span className="text-limebrand">%</span>;
}

export function WorkoutsScreen() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-6">
        <MetricsGrid metrics={performanceMetrics} />
        <Filters search="Buscar treinos..." options={["Todos os treinos", "Grupo muscular", "Tipo de treino"]} showFilterButton={false} />
        <SectionCard title="Treinos da semana">
          <div className="space-y-3">
            {workouts.map((workout) => (
              <div key={workout.name} className="grid gap-4 rounded-md border border-white/8 bg-black/18 p-3 md:grid-cols-[140px_1fr_160px_130px] md:items-center">
                <Image src={workout.image} alt={workout.name} width={140} height={88} className="h-24 w-full rounded object-cover" />
                <div><h3 className="font-bold">{workout.name}</h3><p className="text-sm text-white/58">{workout.group}</p><p className="mt-2 text-sm text-white/58">{workout.duration} • {workout.kcal}</p></div>
                <p className="text-sm text-white/72">{workout.date}</p>
                <button className="h-10 rounded-md border border-limebrand/70 px-4 text-sm font-bold text-limebrand">{workout.status === "Concluído" ? "Ver treino" : workout.status}</button>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Seu progresso"><Donut value={75} label="75%" sublabel="meta de treinos" className="mx-auto h-36 w-36" /><button className="mt-5 h-11 w-full rounded-md border border-limebrand/70 font-bold text-limebrand">Ver metas</button></RightPanelCard>
        <RightPanelCard title="Próximo treino" action={<span className="text-sm text-limebrand">Ver calendário</span>}><Image src={workouts[2].image} alt="Back Day" width={96} height={78} className="mb-3 h-20 w-24 rounded object-cover" /><h3 className="font-bold">Back Day</h3><p className="text-sm text-white/58">Costas, Bíceps • 24 Mai, 17:00</p></RightPanelCard>
        <RightPanelCard title="Atividade recente"><ActivityList /></RightPanelCard>
      </div>
    </div>
  );
}

function CalendarGrid({ compact = false }: { compact?: boolean }) {
  const days = Array.from({ length: compact ? 35 : 35 }, (_, i) => i + 1);
  return (
    <div className="grid grid-cols-7 gap-1 text-center text-sm">
      {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => <div key={day} className="py-2 text-white/58">{day}</div>)}
      {days.map((day) => <div key={day} className={cn("grid rounded-md border border-white/8 bg-black/16", compact ? "h-10" : "h-16", [1, 2, 3, 5, 7, 10, 13, 15, 18, 20, 22, 25, 29].includes(day) && "text-limebrand")}><span className="m-auto">{day === 22 ? <span className="rounded-full bg-limebrand px-2 py-1 font-black text-black">22</span> : day}</span></div>)}
    </div>
  );
}

export function CheckinsScreen() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-6">
        <MetricsGrid metrics={[
          { icon: "CalendarCheck", label: "Check-ins este mês", value: "12", trend: "+20% em relação ao mês passado" },
          { icon: "BarChart3", label: "Total de check-ins", value: "98", detail: "Desde que começou" },
          { icon: "Activity", label: "Melhor sequência", value: "15 dias", detail: "22 Set - 06 Out 2024" },
          { icon: "Target", label: "Frequência semanal", value: "4,2", detail: "Média de check-ins" },
        ]} />
        <SectionCard title="Calendário de check-ins"><CalendarGrid /></SectionCard>
        <SectionCard title="Histórico recente">
          {["Hoje - Academia X - Treino Upper Body", "20 Mai - Noogym Center - Treino Lower Body", "18 Mai - Academia X - Treino Funcional"].map((i) => <p key={i} className="border-b border-white/8 py-4 last:border-0"><CheckCircle2 className="mr-3 inline h-5 w-5 text-limebrand" />{i}</p>)}
        </SectionCard>
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Sua sequência atual"><Donut value={86} label="7" sublabel="dias" className="mx-auto h-40 w-40" /><p className="mt-4 text-center text-white/64">Faltam 1 dia para bater seu recorde!</p></RightPanelCard>
        <RightPanelCard title="Estatísticas"><div className="space-y-5"><ProgressLine label="Frequência mensal" value={60} right="12 / 20 dias" /><ProgressLine label="Frequência semanal" value={57} right="4 / 7 dias" /><p>Total de horas treinadas <b className="float-right">28h 30m</b></p></div></RightPanelCard>
        <RightPanelCard title="Conquistas recentes">{["Sequência de 7 dias", "Frequência em dia"].map((i) => <p key={i} className="border-b border-white/8 py-3 last:border-0"><Trophy className="mr-3 inline h-5 w-5 text-limebrand" />{i}</p>)}</RightPanelCard>
      </div>
    </div>
  );
}

export function NutritionScreen() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-6">
        <MetricsGrid metrics={[
          { icon: "Activity", label: "Calorias restantes", value: "620 kcal", detail: "Meta: 2.300 kcal" },
          { icon: "Activity", label: "Calorias consumidas", value: "1.680 kcal", detail: "73% da meta" },
          { icon: "Apple", label: "Macros", value: "45% / 30% / 25%", detail: "Carbo / Prot / Gord" },
          { icon: "Target", label: "Água", value: "1,8 L", detail: "Meta: 2,5 L" },
        ]} />
        <div className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
          <SectionCard title="Distribuição de macronutrientes"><div className="flex items-center gap-8"><Donut value={73} label="1.680" sublabel="kcal" className="h-36 w-36" /><div className="space-y-3 text-sm"><p>Carboidratos <b className="float-right ml-10">189g</b></p><p>Proteínas <b className="float-right ml-10">126g</b></p><p>Gorduras <b className="float-right ml-10">47g</b></p></div></div></SectionCard>
          <SectionCard title="Evolução semanal"><BarChart /></SectionCard>
        </div>
        <SectionCard title="Refeições de hoje" action={<span className="text-sm text-limebrand">Ver todas as refeições</span>}>
          {["Café da manhã - Omelete com aveia e banana - 420 kcal", "Almoço - Frango grelhado com arroz e legumes - 650 kcal", "Lanche da tarde - Iogurte natural com granola - 280 kcal", "Jantar - Salmão grelhado com batata doce - 330 kcal"].map((meal) => <p key={meal} className="border-b border-white/8 py-4 last:border-0">{meal}<MoreVertical className="float-right h-4 w-4 text-white/50" /></p>)}
          <button className="mt-4 h-10 rounded-md border border-limebrand/70 px-6 text-limebrand"><Plus className="mr-2 inline h-4 w-4" />Adicionar refeição</button>
        </SectionCard>
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Seu plano nutricional"><h3 className="text-lg font-bold">Plano Hipertrofia</h3><p className="text-white/64">2.300 kcal diárias</p><button className="mt-6 h-11 w-full rounded-md border border-limebrand/70 text-limebrand">Ver plano completo</button></RightPanelCard>
        <RightPanelCard title="Nutrientes"><div className="space-y-5"><ProgressLine label="Carboidratos" value={73} right="189g / 260g" /><ProgressLine label="Proteínas" value={73} right="126g / 172g" /><ProgressLine label="Gorduras" value={73} right="47g / 64g" /><ProgressLine label="Fibras" value={60} right="18g / 30g" /></div></RightPanelCard>
        <RightPanelCard title="Dicas para você"><p className="font-bold">Inclua mais proteínas</p><p className="mt-2 text-sm text-white/62">Você ainda pode consumir 46g de proteína hoje.</p></RightPanelCard>
      </div>
    </div>
  );
}

function BarChart() {
  return <div className="flex h-44 items-end gap-5 border-b border-white/10 px-4">{[70, 55, 68, 64, 72, 66, 62].map((h, i) => <div key={i} className="flex flex-1 flex-col items-center gap-2"><div className="w-full rounded-t bg-limebrand/85" style={{ height: `${h}%` }} /><span className="text-xs text-white/56">{["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][i]}</span></div>)}</div>;
}

export function ProgressScreen({ reports = false }: { reports?: boolean }) {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-6">
        <MetricsGrid metrics={reports ? performanceMetrics : [
          { icon: "CalendarCheck", label: "Peso atual", value: "78,4 kg", trend: "-2,6 kg desde 01 Mai" },
          { icon: "Dumbbell", label: "Massa muscular", value: "34,7 kg", trend: "+1,8 kg desde 01 Mai" },
          { icon: "Activity", label: "Gordura corporal", value: "16,2%", trend: "-2,3% desde 01 Mai" },
          { icon: "Target", label: "% de progresso", value: "72%", detail: "Você está no caminho certo" },
        ]} />
        <ProgressChartCard title={reports ? "Desempenho mensal" : "Evolução do peso"} />
        {!reports ? <GoalsCard /> : null}
        <SectionCard title={reports ? "Relatório detalhado" : "Resumo de medidas"}>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {["Peito 101 cm", "Cintura 82 cm", "Braço 34 cm", "Coxa 58 cm", "Panturrilha 38 cm"].map((i) => <div key={i} className="rounded-md border border-white/8 bg-black/18 p-4"><Target className="h-5 w-5 text-limebrand" /><p className="mt-3 font-bold">{i}</p><p className="text-sm text-limebrand">+1 este mês</p></div>)}
          </div>
        </SectionCard>
      </div>
      <div className="space-y-5">
        <RightPanelCard title={reports ? "Resumo rápido" : "Conquistas"}><Donut value={72} label="72%" sublabel="desempenho" className="mx-auto h-36 w-36" /><p className="mt-4 text-center font-bold">Muito bom! 🔥</p></RightPanelCard>
        <RightPanelCard title="Melhores conquistas">{["Recorde de calorias", "Sequência de treinos", "Meta alcançada"].map((i) => <p key={i} className="border-b border-white/8 py-3 last:border-0"><Trophy className="mr-3 inline h-5 w-5 text-limebrand" />{i}</p>)}</RightPanelCard>
        {reports ? <RightPanelCard title="Relatórios disponíveis">{["Relatório completo (PDF)", "Relatório de treinos (PDF)", "Relatório de nutrição (PDF)", "Comparativo mensal (PDF)"].map((i) => <p key={i} className="border-b border-white/8 py-3 last:border-0"><Download className="mr-3 inline h-4 w-4 text-limebrand" />{i}</p>)}</RightPanelCard> : <RightPanelCard title="Avaliação física"><Donut value={85} label="8,5" sublabel="de 10" className="mx-auto h-32 w-32" /></RightPanelCard>}
      </div>
    </div>
  );
}

export function GymsScreen() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-6">
        <MetricsGrid metrics={[
          { icon: "MapPin", label: "Academias próximas", value: "24", trend: "Em Angola" },
          { icon: "CalendarCheck", label: "Visitadas", value: "8", detail: "No seu histórico" },
          { icon: "Heart", label: "Favoritas", value: "5", detail: "Salvas para check-in rápido" },
          { icon: "CheckCircle2", label: "Check-ins este mês", value: "12", trend: "+22% este mês" },
        ]} />
        <Filters search="Buscar academias..." options={["Cidade", "Plano", "Distância"]} />
        <div className="grid gap-4 md:grid-cols-2">
          {gyms.map((gym) => (
            <SectionCard key={gym.name}>
              <Image src={gym.image} alt={gym.name} width={520} height={220} className="h-40 w-full rounded-md object-cover" />
              <div className="mt-4 flex items-start justify-between gap-3">
                <div><h3 className="text-lg font-bold">{gym.name}</h3><p className="text-sm text-white/62">{gym.area}</p><p className="mt-2 text-sm text-limebrand">{gym.distance}</p></div>
                <span className="rounded bg-limebrand/18 px-2 py-1 text-xs font-bold text-limebrand">{gym.plan}</span>
              </div>
              <button className="mt-4 h-10 w-full rounded-md bg-limebrand font-bold text-black">Fazer check-in</button>
            </SectionCard>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Mapa próximo"><div className="map-grid h-64 rounded-md border border-white/10" /></RightPanelCard>
        <RightPanelCard title="Academias por cidade"><div className="space-y-5"><ProgressLine label="Luanda" value={80} right="12" /><ProgressLine label="Benguela" value={35} right="4" /><ProgressLine label="Huíla" value={25} right="3" /></div></RightPanelCard>
        <RightPanelCard title="Atividades recentes">{["Check-in na Academia X", "Noogym Center adicionada aos favoritos", "Power Fit visitada"].map((i) => <p key={i} className="border-b border-white/8 py-3 last:border-0">{i}</p>)}</RightPanelCard>
      </div>
    </div>
  );
}

export function PlansScreen({ subscription = false }: { subscription?: boolean }) {
  const plans = [
    ["Básico", "9.900 Kz", "Ideal para começar sua jornada fitness.", "Acesso a treinos básicos"],
    ["Premium", "19.900 Kz", "Recursos completos para elevar seus resultados.", "Treinos avançados e nutrição personalizada"],
    ["Elite", "29.900 Kz", "Acompanhamento total para alta performance.", "Consultoria 1:1 e relatórios personalizados"],
  ];
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-6">
        <SectionCard title={subscription ? "Seu plano atual" : "Plano ativo"}>
          <div className="grid gap-5 xl:grid-cols-[1fr_1fr] xl:items-center">
            <div className="rounded-lg border border-white/10 bg-black/20 p-6">
              <Trophy className="h-14 w-14 text-limebrand" />
              <p className="mt-4 text-sm uppercase text-white/58">Plano</p>
              <h2 className="text-3xl font-black">Premium <span className="rounded bg-limebrand/18 px-2 py-1 text-sm text-limebrand">Ativo</span></h2>
              <p className="mt-3 text-white/62">O melhor para quem busca resultados superiores.</p>
            </div>
            <div className="grid gap-3 text-sm text-white/72">
              {["Valor mensal 19.900 Kz / mês", "Próxima cobrança 20 Jun 2024", "Forma de pagamento VISA •••• 4242", "Renovação automática ativa"].map((i) => <p key={i}><Check className="mr-2 inline h-4 w-4 text-limebrand" />{i}</p>)}
            </div>
          </div>
        </SectionCard>
        <SectionCard title="Outros planos disponíveis">
          <div className="grid gap-4 xl:grid-cols-3">
            {plans.map(([name, price, desc, benefit]) => (
              <div key={name} className={cn("rounded-lg border bg-black/18 p-5", name === "Premium" ? "border-limebrand" : "border-white/10")}>
                <Star className="h-8 w-8 text-limebrand" />
                <h3 className="mt-4 text-xl font-bold">{name}</h3>
                <p className="mt-2 text-sm text-white/62">{desc}</p>
                <p className="mt-5 text-2xl font-black">{price}<span className="text-sm text-white/58"> /mês</span></p>
                {[benefit, "Acompanhamento de progresso", "Suporte Noogym"].map((i) => <p key={i} className="mt-3 text-sm"><Check className="mr-2 inline h-4 w-4 text-limebrand" />{i}</p>)}
                <button className={cn("mt-6 h-11 w-full rounded-md font-bold", name === "Premium" ? "bg-limebrand text-black" : "border border-limebrand/70 text-limebrand")}>{name === "Premium" ? "Plano atual" : "Fazer upgrade"}</button>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Resumo de uso"><div className="space-y-5"><ProgressLine label="Check-ins" value={98} right="98 / ilimitado" /><ProgressLine label="Treinos concluídos" value={75} right="45 / ilimitado" /><ProgressLine label="Relatórios gerados" value={55} right="18 / ilimitado" /></div></RightPanelCard>
        <RightPanelCard title="Último pagamento"><p className="text-2xl font-bold">19.900 Kz</p><p className="text-white/58">20 Mai 2024 • VISA •••• 4242</p><button className="mt-5 h-10 w-full rounded-md border border-limebrand/70 text-limebrand">Ver histórico</button></RightPanelCard>
        <HelpPanel />
      </div>
    </div>
  );
}

export function PaymentsScreen() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-6">
        <MetricsGrid metrics={[
          { icon: "WalletCards", label: "Saldo em conta", value: "12.400 Kz", detail: "Créditos disponíveis" },
          { icon: "BarChart3", label: "Total gasto", value: "118.500 Kz", detail: "Últimos 6 meses", accent: "purple" },
          { icon: "CheckCircle2", label: "Pagamentos realizados", value: "9", detail: "Nos últimos 6 meses" },
          { icon: "CalendarCheck", label: "Próxima cobrança", value: "20 Jun 2024", detail: "19.900 Kz", accent: "blue" },
        ]} />
        <SectionCard title="Histórico de pagamentos">
          {["20 Mai 2024 - Assinatura Premium - 19.900 Kz - Pago", "20 Abr 2024 - Assinatura Premium - 19.900 Kz - Pago", "15 Abr 2024 - Compra no Marketplace - -19.900 Kz - Pago", "20 Mar 2024 - Assinatura Premium - 19.900 Kz - Pago", "20 Jan 2024 - Assinatura Premium - 19.900 Kz - Pago"].map((i) => <p key={i} className="border-b border-white/8 py-4 last:border-0"><FileTextIcon />{i}</p>)}
        </SectionCard>
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Resumo financeiro"><Donut value={79} label="118.500" sublabel="Kz total gasto" className="mx-auto h-40 w-40" /></RightPanelCard>
        <RightPanelCard title="Próxima cobrança"><h3 className="font-bold">Assinatura Premium</h3><p className="text-white/58">20 Jun 2024</p><button className="mt-5 h-11 w-full rounded-md bg-limebrand font-bold text-black">Pagar agora</button></RightPanelCard>
        <RightPanelCard title="Métodos de pagamento">{["VISA •••• 4242  Padrão", "Mastercard •••• 8888"].map((i) => <p key={i} className="border-b border-white/8 py-3 last:border-0"><CreditCard className="mr-3 inline h-5 w-5 text-limebrand" />{i}</p>)}</RightPanelCard>
      </div>
    </div>
  );
}

function FileTextIcon() {
  return <Download className="mr-3 inline h-4 w-4 text-limebrand" />;
}

export function ProfileScreen() {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-6">
        <SectionCard>
          <div className="grid gap-6 md:grid-cols-[160px_1fr_1fr] md:items-center">
            <UserAvatar size={128} />
            <div><h2 className="text-3xl font-black">Miguel Silva <span className="rounded bg-limebrand/12 px-2 py-1 text-xs text-limebrand">Membro Noogym</span></h2><p className="mt-4 text-white/70">miguel.silva@email.com</p><p className="mt-2 text-white/70">+244 923 456 789</p><p className="mt-2 text-white/70">Luanda, Angola</p></div>
            <div><p className="text-white/62">Nível</p><h3 className="text-2xl font-bold">Avançado</h3><ProgressLine label="1.250 / 2.000 XP" value={62} /></div>
          </div>
        </SectionCard>
        <div className="grid gap-6 xl:grid-cols-2">
          <SectionCard title="Estatísticas gerais"><div className="space-y-4">{["Check-ins 98", "Treinos concluídos 45", "Horas treinadas 28h 30m", "Calorias queimadas 18.250 kcal"].map((i) => <p key={i} className="text-lg font-bold">{i}</p>)}</div></SectionCard>
          <SectionCard title="Atividade recente"><ActivityList /></SectionCard>
          <SectionCard title="Ações rápidas"><div className="grid grid-cols-2 gap-3">{["Editar perfil", "Ver progresso", "Preferências", "Privacidade"].map((i) => <button key={i} className="h-20 rounded-md border border-white/10 bg-black/18">{i}</button>)}</div></SectionCard>
        </div>
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Sua consistência"><Donut value={86} label="7" sublabel="dias" className="mx-auto h-40 w-40" /></RightPanelCard>
        <RightPanelCard title="Composição corporal"><Donut value={78} label="78,5" sublabel="kg" className="mx-auto h-36 w-36" /></RightPanelCard>
        <RightPanelCard title="Últimas conquistas">{["7 dias consecutivos", "Frequência em dia", "Meta de proteína"].map((i) => <p key={i} className="border-b border-white/8 py-3 last:border-0"><Trophy className="mr-3 inline h-5 w-5 text-limebrand" />{i}</p>)}</RightPanelCard>
      </div>
    </div>
  );
}

export function SettingsScreen({ security = false }: { security?: boolean }) {
  if (security) {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-5">
          <SectionCard title="Nível de segurança">
            <div className="grid gap-8 md:grid-cols-[260px_1fr] md:items-center">
              <Donut value={90} label="90%" sublabel="Muito forte" className="mx-auto h-48 w-48" />
              <div className="space-y-4">{["Senha forte", "Autenticação em duas etapas", "E-mail verificado", "Dispositivos reconhecidos"].map((i) => <p key={i}><CheckCircle2 className="mr-3 inline h-5 w-5 text-limebrand" />{i}<span className="float-right text-white/58">Concluído</span></p>)}</div>
            </div>
          </SectionCard>
          {["Autenticação em duas etapas", "Dispositivos conectados", "Sessões ativas", "Precisando de ajuda?"].map((i) => <SectionCard key={i}><div className="flex items-center gap-5"><Lock className="h-9 w-9 text-limebrand" /><div><h3 className="font-bold">{i}</h3><p className="text-sm text-white/62">Revise e gerencie esta camada de proteção da sua conta.</p></div><button className="ml-auto rounded-md border border-limebrand/70 px-5 py-2 text-limebrand">Gerenciar</button></div></SectionCard>)}
        </div>
        <div className="space-y-5">
          <RightPanelCard title="Proteção da conta"><Donut value={100} label="✓" sublabel="Tudo certo" className="mx-auto h-40 w-40" /></RightPanelCard>
          <RightPanelCard title="Dicas de segurança">{["Não compartilhe sua senha", "Ative a autenticação em duas etapas", "Verifique dispositivos conectados", "Desconfie de links suspeitos"].map((i) => <p key={i} className="border-b border-white/8 py-3 last:border-0">{i}<ChevronRight className="float-right h-4 w-4" /></p>)}</RightPanelCard>
          <RightPanelCard title="Atividade de segurança">{["Novo login", "Senha alterada", "E-mail verificado"].map((i) => <p key={i} className="border-b border-white/8 py-3 last:border-0"><Shield className="mr-3 inline h-5 w-5 text-limebrand" />{i}</p>)}</RightPanelCard>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        {["Conta e idioma", "Notificações", "Preferências de treino", "Privacidade", "Integrações do app"].map((title) => (
          <SectionCard key={title} title={title}>
            <div className="space-y-4">
              {["Sincronizado com o app mobile", "Receber atualizações importantes", "Usar recomendações personalizadas"].map((i) => <label key={i} className="flex items-center justify-between border-b border-white/8 py-3 last:border-0"><span>{i}</span><span className="h-6 w-11 rounded-full bg-limebrand p-1"><span className="block h-4 w-4 translate-x-5 rounded-full bg-black" /></span></label>)}
            </div>
          </SectionCard>
        ))}
      </div>
      <div className="space-y-5"><RightPanelCard title="Preferências ativas"><div className="space-y-4"><ProgressLine label="Perfil completo" value={92} /><ProgressLine label="Notificações" value={80} /><ProgressLine label="Privacidade" value={75} /></div></RightPanelCard><HelpPanel /></div>
    </div>
  );
}

export function DashboardPage({ slug, tab }: { slug: DashboardSlug; tab?: string }) {
  const activeTab = findActiveTab(screenMeta[slug].tabs, tab);
  const content = (() => {
    switch (slug) {
      case "academias":
      case "check-ins":
      case "treinos":
      case "nutricao":
      case "progresso":
      case "relatorios":
      case "produtos":
      case "assinatura":
      case "pagamentos":
      case "configuracoes":
      case "seguranca":
      case "perfil":
      case "painel-personal":
      case "minha-loja":
      case "pedidos":
      case "favoritos":
      case "cupons":
        return <DashboardTabScreen slug={slug} activeTab={activeTab} />;
    }

    switch (slug) {
      case "resumo": return <DashboardRoleSummary />;
      default: return <EmptyState title="Tela não encontrada" description="Esta área ainda não está disponível." />;
    }
  })();

  return (
    <>
      <Header slug={slug} activeTab={activeTab} />
      <div className="min-w-0 max-w-full overflow-hidden">{content}</div>
    </>
  );
}
