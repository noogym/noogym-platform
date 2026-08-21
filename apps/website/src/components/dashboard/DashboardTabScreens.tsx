import type { ReactNode } from "react";
import Image from "next/image";
import {
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  Download,
  Dumbbell,
  Eye,
  Flame,
  Globe2,
  Heart,
  HelpCircle,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  MoreVertical,
  Moon,
  Palette,
  Phone,
  Plus,
  Search,
  Shield,
  SlidersHorizontal,
  Smartphone,
  Star,
  Target,
  Trophy,
  User,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { coupons, gyms, orders, products, workouts, type DashboardSlug } from "@/data/dashboard";
import { events } from "@/data/events";
import { CouponCard } from "./CouponCard";
import { ConnectedServicesPanel } from "./ConnectedServicesPanel";
import { MetricCard } from "./MetricCard";
import { OrderCard } from "./OrderCard";
import { ProductCard } from "./ProductCard";
import { RightPanelCard } from "./RightPanelCard";
import { SectionCard } from "./SectionCard";
import { tabToSlug } from "./tabUtils";
import { UserAvatar } from "./UserAvatar";

type DashboardTabScreenProps = {
  slug: DashboardSlug;
  activeTab?: string;
};

type Row = ReactNode[];

const paymentRows = [
  ["10/05/2024", "Assinatura anual Noogym Premium", "199.000 Kz", "Multicaixa 4242", "Pago"],
  ["10/04/2024", "Assinatura mensal Noogym Premium", "19.900 Kz", "Visa 4242", "Pago"],
  ["10/03/2024", "Assinatura mensal Noogym Premium", "19.900 Kz", "Mastercard 4242", "Pago"],
  ["10/02/2024", "Assinatura mensal Noogym Premium", "19.900 Kz", "Multicaixa 4242", "Pago"],
  ["10/12/2023", "Assinatura anual Noogym Basico", "99.000 Kz", "Visa 4242", "Falhou"],
];

const invoiceRows = [
  ["#202405100942", "10/05/2024 a 09/06/2024", "Noogym Premium", "10/05/2024", "199.000 Kz", "Paga"],
  ["#202404100941", "10/04/2024 a 09/05/2024", "Noogym Premium", "10/04/2024", "19.900 Kz", "Paga"],
  ["#202403100940", "10/03/2024 a 09/04/2024", "Noogym Premium", "10/03/2024", "19.900 Kz", "Paga"],
  ["#202402100939", "10/02/2024 a 09/03/2024", "Noogym Premium", "10/02/2024", "19.900 Kz", "Paga"],
  ["#202311100936", "10/11/2023 a 09/12/2023", "Noogym Basico", "10/11/2023", "99.000 Kz", "Vencida"],
];

const deviceRows = [
  ["MacBook Pro de Miguel", "macOS - Chrome 124.0", "Luanda, Angola", "Agora", "Atual"],
  ["iPhone 13", "iOS - Noogym App 5.2.1", "Luanda, Angola", "Hoje, 08:45", "Recente"],
  ["Windows Desktop", "Windows 11 - Chrome 122.0", "Benguela, Angola", "Ontem, 21:30", "Recente"],
  ["Samsung Galaxy S21", "Android - Noogym App 5.1.0", "Huíla, Angola", "12/05/2024, 19:10", "Inativo"],
];

const sessionRows = [
  ["MacBook Pro de Miguel", "Navegador atual", "Luanda, Angola", "Agora", "Ativa"],
  ["iPhone 13", "Aplicativo Noogym", "Luanda, Angola", "Hoje, 08:45", "Ativa"],
  ["Chrome Desktop", "Sessao web", "Benguela, Angola", "Ontem, 21:30", "Encerrada"],
];

const logRows = [
  ["Hoje, 08:15", "Novo login", "Luanda, Angola", "Chrome em macOS", "Atual"],
  ["19 Mai 2024, 14:32", "Senha alterada", "Luanda, Angola", "Conta", "Concluido"],
  ["18 Mai 2024, 10:21", "2FA ativada", "Luanda, Angola", "Seguranca", "Concluido"],
  ["12 Jan 2024, 09:45", "E-mail verificado", "Luanda, Angola", "Perfil", "Concluido"],
];

const profileGoals: {
  name: string;
  category: string;
  value: string;
  progress: number;
  deadline: string;
  pace: string;
  note: string;
  Icon: LucideIcon;
  color: string;
  bar: string;
}[] = [
  { name: "Peso alvo", category: "Composição corporal", value: "72,4 kg / 68,0 kg", progress: 68, deadline: "30/08/2024", pace: "No ritmo", note: "Perder 4,4 kg mantendo massa muscular.", Icon: Target, color: "text-purple-400", bar: "bg-purple-400" },
  { name: "Ganho de massa muscular", category: "Força e hipertrofia", value: "6,2 kg / 8,0 kg", progress: 77, deadline: "15/12/2024", pace: "Adiantada", note: "Foco em proteína, progressão de carga e sono.", Icon: Dumbbell, color: "text-orange-400", bar: "bg-orange-400" },
  { name: "Correr 10 km", category: "Condicionamento", value: "7,2 km / 10 km", progress: 72, deadline: "20/07/2024", pace: "Atenção", note: "Adicionar 1 sessão leve de cardio na semana.", Icon: Flame, color: "text-limebrand", bar: "bg-limebrand" },
  { name: "Hidratação diária", category: "Hábitos", value: "18 / 30 dias", progress: 60, deadline: "31/07/2024", pace: "Construindo", note: "Meta de 2,8 L por dia com lembretes ativos.", Icon: CheckCircle2, color: "text-sky-400", bar: "bg-sky-400" },
];

const preferenceRows: { title: string; value: string; Icon: LucideIcon }[] = [
  { title: "Idioma", value: "Portugues (Angola)", Icon: Globe2 },
  { title: "Fuso horario", value: "(GMT+01:00) Luanda", Icon: CalendarCheck },
  { title: "Formato de data", value: "DD/MM/AAAA", Icon: CalendarCheck },
  { title: "Formato de hora", value: "24 horas (14:30)", Icon: CalendarCheck },
  { title: "Unidade de medida", value: "Metrico (kg, cm)", Icon: Target },
];

function StatusBadge({ children, tone = "lime" }: { children: string; tone?: "lime" | "red" | "blue" | "yellow" | "gray" }) {
  const tones = {
    lime: "border-limebrand/35 bg-limebrand/10 text-limebrand",
    red: "border-red-500/40 bg-red-500/10 text-red-300",
    blue: "border-sky-400/40 bg-sky-400/10 text-sky-300",
    yellow: "border-yellow-400/40 bg-yellow-400/10 text-yellow-300",
    gray: "border-white/15 bg-white/8 text-white/62",
  };

  return <span className={cn("rounded-full border px-2.5 py-1 text-xs font-bold", tones[tone])}>{children}</span>;
}

function MiniIcon({ children }: { children: ReactNode }) {
  return <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-limebrand">{children}</div>;
}

function DataTable({ headers, rows }: { headers: string[]; rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-white/10">
      <div className="grid min-w-[760px] bg-white/[0.035] text-xs uppercase text-white/62" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(120px, 1fr))` }}>
        {headers.map((header) => <div key={header} className="px-5 py-4">{header}</div>)}
      </div>
      {rows.map((row, index) => (
        <div key={index} className="grid min-w-[760px] border-t border-white/8" style={{ gridTemplateColumns: `repeat(${headers.length}, minmax(120px, 1fr))` }}>
          {row.map((cell, cellIndex) => <div key={cellIndex} className="px-5 py-4 text-sm text-white/86">{cell}</div>)}
        </div>
      ))}
    </div>
  );
}

function SidebarHelp({ title = "Precisa de ajuda?" }: { title?: string }) {
  return (
    <RightPanelCard title={title}>
      {["Central de ajuda", "Falar com suporte", "Perguntas frequentes"].map((item) => (
        <div key={item} className="flex items-center gap-3 border-b border-white/8 py-3 last:border-0">
          <HelpCircle className="h-5 w-5 text-limebrand" />
          <span>{item}</span>
          <ChevronRight className="ml-auto h-4 w-4 text-white/56" />
        </div>
      ))}
      <button className="mt-4 h-11 w-full rounded-md border border-limebrand/70 font-bold text-limebrand">Abrir atendimento</button>
    </RightPanelCard>
  );
}

function TipPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <RightPanelCard title={title}>
      {items.map((item) => (
        <div key={item} className="flex gap-3 border-b border-white/8 py-3 last:border-0">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-limebrand" />
          <p className="text-sm text-white/76">{item}</p>
        </div>
      ))}
    </RightPanelCard>
  );
}

function PaymentMethodCard({ brand, detail, isDefault }: { brand: string; detail: string; isDefault?: boolean }) {
  return (
    <div className={cn("flex items-center gap-5 rounded-md border bg-black/18 p-5", isDefault ? "border-limebrand/80" : "border-white/10")}>
      <MiniIcon><CreditCard className="h-6 w-6" /></MiniIcon>
      <div>
        <h3 className="text-lg font-bold">{brand}</h3>
        <p className="text-sm text-white/58">{detail}</p>
      </div>
      <div className="ml-auto flex items-center gap-3">
        {isDefault ? <StatusBadge>Padrao</StatusBadge> : <button className="rounded-md border border-white/12 px-4 py-2 text-sm">Definir como padrao</button>}
        <button className="rounded-md border border-white/12 px-4 py-2 text-sm">Editar</button>
        <button className="grid h-10 w-10 place-items-center rounded-md border border-white/12"><MoreVertical className="h-4 w-4" /></button>
      </div>
    </div>
  );
}

function PaymentsTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Resumo");
  if (active === "metodos-de-pagamento") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <SectionCard title="Meus metodos de pagamento" action={<button className="inline-flex items-center gap-2 rounded-md bg-limebrand px-4 py-2 font-bold text-black"><Plus className="h-4 w-4" />Adicionar metodo</button>}>
          <div className="space-y-4">
            <PaymentMethodCard brand="Mastercard 4242" detail="Vencimento 08/28" isDefault />
            <PaymentMethodCard brand="Visa 1998" detail="Vencimento 11/27" />
            <PaymentMethodCard brand="Multicaixa 5555" detail="Vencimento 03/26" />
            <PaymentMethodCard brand="Multicaixa Express" detail="Telefone: +244 923 456 789" isDefault />
            <p className="pt-4 text-center text-sm text-white/54"><Lock className="mr-2 inline h-4 w-4" />Seus metodos sao armazenados com seguranca.</p>
          </div>
        </SectionCard>
        <div className="space-y-5">
          <TipPanel title="Sobre os metodos de pagamento" items={["Nao armazenamos o numero completo do seu cartao.", "Voce pode editar ou remover metodos quando quiser.", "Todas as transacoes sao protegidas com criptografia."]} />
          <SidebarHelp />
        </div>
      </div>
    );
  }

  if (active === "historico") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <SectionCard title="Historico de pagamentos" action={<button className="rounded-md border border-white/10 px-4 py-2 text-sm">Todos os status</button>}>
          <DataTable
            headers={["Data", "Descricao", "Valor", "Metodo", "Status", "Recibo"]}
            rows={paymentRows.map(([date, description, value, method, status]) => [
              date,
              description,
              value,
              method,
              <StatusBadge key="status" tone={status === "Falhou" ? "red" : "lime"}>{status}</StatusBadge>,
              <Download key="download" className="h-5 w-5 text-limebrand" />,
            ])}
          />
        </SectionCard>
        <div className="space-y-5">
          <RightPanelCard title="Resumo de pagamentos">
            <p className="text-sm text-white/62">Total pago</p>
            <p className="mt-2 text-3xl font-black text-limebrand">258.700 Kz</p>
            {["Transacoes aprovadas 6", "Transacoes falhas 1", "Metodos utilizados 2"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}</p>)}
          </RightPanelCard>
          <SidebarHelp />
        </div>
      </div>
    );
  }

  if (active === "faturas") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <SectionCard title="Suas faturas" action={<button className="rounded-md border border-white/10 px-4 py-2 text-sm">Todos os status</button>}>
          <DataTable
            headers={["Fatura", "Periodo", "Plano", "Vencimento", "Valor", "Status", "Acoes"]}
            rows={invoiceRows.map(([invoice, period, plan, due, value, status]) => [
              invoice,
              period,
              plan,
              due,
              value,
              <StatusBadge key="status" tone={status === "Vencida" ? "red" : "lime"}>{status}</StatusBadge>,
              <Download key="download" className="h-5 w-5 text-limebrand" />,
            ])}
          />
        </SectionCard>
        <div className="space-y-5">
          <RightPanelCard title="Resumo de faturas">
            <p className="text-sm text-white/62">Total pago</p>
            <p className="mt-2 text-3xl font-black text-limebrand">258.700 Kz</p>
            {["Faturas pagas 6", "Faturas pendentes 0", "Faturas vencidas 1"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}</p>)}
          </RightPanelCard>
          <SidebarHelp />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard icon="WalletCards" label="Saldo em conta" value="12.400 Kz" detail="Creditos disponiveis" />
          <MetricCard icon="BarChart3" label="Total gasto" value="118.500 Kz" detail="Ultimos 6 meses" accent="purple" />
          <MetricCard icon="CheckCircle2" label="Pagamentos realizados" value="9" detail="Nos ultimos 6 meses" />
          <MetricCard icon="CalendarCheck" label="Proxima cobranca" value="20 Jun 2024" detail="19.900 Kz" accent="blue" />
        </div>
        <SectionCard title="Historico recente">
          <DataTable headers={["Data", "Descricao", "Metodo", "Valor", "Status"]} rows={paymentRows.slice(0, 4).map(([date, description, value, method, status]) => [date, description, method, value, <StatusBadge key="status">{status}</StatusBadge>])} />
        </SectionCard>
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Resumo financeiro">
          <div className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-[conic-gradient(#b6ff00_79%,rgba(255,255,255,.13)_0)]">
            <div className="grid h-28 w-28 place-items-center rounded-full bg-[#071113] text-center"><b className="text-2xl">118.500</b><span className="-mt-7 text-xs text-white/58">Kz</span></div>
          </div>
        </RightPanelCard>
        <RightPanelCard title="Proxima cobranca">
          <h3 className="font-bold">Assinatura Premium</h3>
          <p className="text-white/58">20 Jun 2024</p>
          <button className="mt-5 h-11 w-full rounded-md bg-limebrand font-bold text-black">Pagar agora</button>
        </RightPanelCard>
      </div>
    </div>
  );
}

function Toggle({ checked = true }: { checked?: boolean }) {
  return (
    <span className={cn("relative h-7 w-12 rounded-full p-1", checked ? "bg-limebrand" : "bg-white/20")}>
      <span className={cn("block h-5 w-5 rounded-full bg-white transition", checked && "translate-x-5")} />
    </span>
  );
}

function SettingsTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Geral");
  if (active === "privacidade") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-5">
          <SectionCard title="Privacidade e dados">
            {["Informacoes do perfil", "Progresso e atividades", "Estatisticas corporais", "Listas de treinos", "Seguindo e seguidores"].map((item, index) => (
              <div key={item} className="flex items-center gap-4 border-b border-white/8 py-4 last:border-0">
                <MiniIcon><Lock className="h-5 w-5" /></MiniIcon>
                <div><p className="font-bold">{item}</p><p className="text-sm text-white/58">Controle quem pode visualizar esta informacao.</p></div>
                <button className="ml-auto rounded-md border border-white/12 px-4 py-2 text-sm">{index === 4 ? "Publico" : "Apenas eu"}</button>
              </div>
            ))}
          </SectionCard>
          <SectionCard title="Compartilhamento de dados">
            {["Permitir analises para melhorar sua experiencia", "Compartilhar dados com parceiros"].map((item, index) => (
              <div key={item} className="flex items-center justify-between border-b border-white/8 py-4 last:border-0"><span>{item}</span><Toggle checked={index === 0} /></div>
            ))}
          </SectionCard>
        </div>
        <div className="space-y-5"><TipPanel title="Sua privacidade e importante" items={["Voce tem controle total sobre suas informacoes.", "Compartilhe apenas o que se sente confortavel.", "Suas informacoes estao protegidas com seguranca."]} /><SidebarHelp /></div>
      </div>
    );
  }

  if (active === "notificacoes") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-5">
          <SectionCard title="Notificacoes" action={<button className="rounded-md border border-limebrand/70 px-4 py-2 text-limebrand">Salvar alteracoes</button>}>
            <DataTable headers={["Canal", "E-mail", "Push", "SMS"]} rows={[["E-mail", <Check key="email-check" className="h-5 w-5 text-limebrand" />, "-", "-"], ["Push", "-", <Check key="push-check" className="h-5 w-5 text-limebrand" />, "-"], ["SMS", "-", "-", <Check key="sms-check" className="h-5 w-5 text-limebrand" />]]} />
          </SectionCard>
          <SectionCard title="Tipos de notificacao">
            {["Agendamentos", "Treinos", "Pagamentos e faturas", "Promocoes e novidades", "Conquistas"].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-white/8 py-4 last:border-0"><span>{item}</span><Toggle /></div>
            ))}
          </SectionCard>
        </div>
        <div className="space-y-5"><TipPanel title="Dicas rapidas" items={["Ative notificacoes importantes para nao perder nada.", "Push chega mais rapido no seu dispositivo.", "Organize sua caixa de entrada e pasta de spam."]} /><SidebarHelp title="Ajuda" /></div>
      </div>
    );
  }

  if (active === "preferencias" || active === "geral") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <SectionCard title={activeTab === "Geral" ? "Configuracoes gerais" : "Suas preferencias"}>
          {preferenceRows.map(({ title, value, Icon }) => {
            return (
              <div key={title} className="flex items-center gap-5 border-b border-white/8 py-5 last:border-0">
                <MiniIcon><Icon className="h-5 w-5" /></MiniIcon>
                <div><p className="font-bold">{title}</p><p className="text-sm text-white/58">Sincronizado com o app mobile.</p></div>
                <button className="ml-auto rounded-md border border-white/12 px-4 py-2 text-sm">{value}</button>
              </div>
            );
          })}
          {["Receber novidades e atualizacoes", "Dicas e conteudos personalizados", "Promocoes exclusivas"].map((item, index) => (
            <div key={item} className="flex items-center justify-between border-b border-white/8 py-5 last:border-0"><span>{item}</span><Toggle checked={index !== 2} /></div>
          ))}
        </SectionCard>
        <div className="space-y-5"><TipPanel title="Dicas rapidas" items={["Personalize a experiencia para que o Noogym funcione do seu jeito.", "Escolhas bem definidas entregam uma experiencia mais relevante.", "Suas preferencias sao salvas com seguranca."]} /><SidebarHelp /></div>
      </div>
    );
  }

  if (active === "aparencia") {
    return <SimpleSettingsPanel title="Aparencia" icon={<Palette className="h-6 w-6" />} rows={["Tema escuro ativo", "Contraste alto desativado", "Animacoes reduzidas desativadas", "Densidade compacta desativada"]} />;
  }

  if (active === "integracoes") {
    return <SimpleSettingsPanel title="Integracoes" icon={<Globe2 className="h-6 w-6" />} rows={["App mobile Noogym conectado", "Google Fit aguardando conexao", "Apple Health aguardando conexao", "Calendario sincronizado"]} />;
  }

  return <SimpleSettingsPanel title="Perfil" icon={<User className="h-6 w-6" />} rows={["Nome publico: Miguel Silva", "E-mail: miguel.silva@email.com", "Telefone: +244 923 456 789", "Cidade: Luanda, Angola"]} />;
}

function SimpleSettingsPanel({ title, icon, rows }: { title: string; icon: ReactNode; rows: string[] }) {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <SectionCard title={title}>
        {rows.map((row, index) => (
          <div key={row} className="flex items-center gap-5 border-b border-white/8 py-5 last:border-0">
            <MiniIcon>{icon}</MiniIcon>
            <div><p className="font-bold">{row}</p><p className="text-sm text-white/58">Configuracao sincronizada com sua conta Noogym.</p></div>
            <div className="ml-auto">{index < 2 ? <Toggle /> : <button className="rounded-md border border-white/12 px-4 py-2 text-sm">Gerenciar</button>}</div>
          </div>
        ))}
      </SectionCard>
      <div className="space-y-5"><TipPanel title="Dica Noogym" items={["Mantenha suas preferencias atualizadas.", "As mudancas tambem ficam disponiveis no app mobile.", "Voce pode revisar tudo a qualquer momento."]} /><SidebarHelp /></div>
    </div>
  );
}

function SecurityTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Senha");
  if (active === "autenticacao-em-duas-etapas") {
    return (
      <SecurityLayout tips={["Mantenha seu aplicativo autenticador atualizado.", "Guarde seus codigos de recuperacao em local seguro.", "Nunca compartilhe seus codigos de verificacao."]}>
        <SectionCard title="Autenticacao em duas etapas (2FA)">
          <div className="flex items-center gap-6">
            <Shield className="h-20 w-20 text-limebrand" />
            <div><h3 className="text-xl font-bold">Camada extra ativada</h3><p className="text-white/64">Voce precisa inserir um codigo alem da senha para acessar sua conta.</p></div>
            <StatusBadge>Ativada</StatusBadge>
          </div>
        </SectionCard>
        <SectionCard title="Metodo de autenticacao">
          {["Aplicativo autenticador (recomendado)", "SMS"].map((item, index) => (
            <div key={item} className="flex items-center gap-4 border-b border-white/8 py-4 last:border-0">
              <MiniIcon>{index === 0 ? <Smartphone className="h-5 w-5" /> : <Phone className="h-5 w-5" />}</MiniIcon>
              <div><p className="font-bold">{item}</p><p className="text-sm text-white/58">Receba codigos de verificacao.</p></div>
              <button className="ml-auto rounded-md border border-white/12 px-4 py-2 text-sm">{index === 0 ? "Ativo" : "Configurar"}</button>
            </div>
          ))}
        </SectionCard>
        <SectionCard title="Codigos de recuperacao">
          <div className="flex items-center gap-4"><MiniIcon><Lock className="h-5 w-5" /></MiniIcon><div><p className="font-bold">10 codigos disponiveis</p><p className="text-sm text-white/58">Ultima geracao em 15/04/2024</p></div><button className="ml-auto rounded-md border border-white/12 px-4 py-2 text-sm">Gerar novos codigos</button></div>
        </SectionCard>
      </SecurityLayout>
    );
  }

  if (active === "dispositivos") {
    return (
      <SecurityLayout tips={["Revise seus dispositivos regularmente.", "Encerre sessoes desconhecidas.", "Use senha forte e autenticacao em duas etapas."]}>
        <SectionCard title="Dispositivos">
          <div className="mb-5 flex items-center gap-4 rounded-md border border-white/10 bg-black/18 p-4"><Shield className="h-8 w-8 text-limebrand" /><div><p className="font-bold">1 dispositivo atual</p><p className="text-sm text-white/58">Este e o dispositivo que voce esta usando no momento.</p></div></div>
          <DataTable headers={["Dispositivo", "Sistema", "Localizacao", "Ultimo acesso", "Status", "Acoes"]} rows={deviceRows.map(([name, system, location, access, status]) => [name, system, location, access, <StatusBadge key="status" tone={status === "Inativo" ? "gray" : "lime"}>{status}</StatusBadge>, <MoreVertical key="actions" className="h-5 w-5" />])} />
        </SectionCard>
      </SecurityLayout>
    );
  }

  if (active === "sessoes-ativas") {
    return (
      <SecurityLayout tips={["Encerre sessoes em dispositivos que voce nao usa.", "Nao mantenha sessoes abertas em computadores publicos.", "Ative alertas de novo login."]}>
        <SectionCard title="Sessoes ativas">
          <DataTable headers={["Dispositivo", "Tipo", "Localizacao", "Ultimo acesso", "Status", "Acoes"]} rows={sessionRows.map(([device, type, location, access, status]) => [device, type, location, access, <StatusBadge key="status" tone={status === "Encerrada" ? "gray" : "lime"}>{status}</StatusBadge>, <button key="end" className="text-limebrand">Encerrar</button>])} />
        </SectionCard>
      </SecurityLayout>
    );
  }

  if (active === "logs-de-seguranca") {
    return (
      <SecurityLayout tips={["Monitore acessos e alteracoes importantes.", "Fale com suporte ao notar atividade suspeita.", "Mantenha seu e-mail verificado."]}>
        <SectionCard title="Logs de seguranca">
          <DataTable headers={["Data", "Evento", "Localizacao", "Canal", "Status"]} rows={logRows.map(([date, event, location, channel, status]) => [date, event, location, channel, <StatusBadge key="status">{status}</StatusBadge>])} />
        </SectionCard>
      </SecurityLayout>
    );
  }

  return (
    <SecurityLayout tips={["Nao use informacoes pessoais.", "Use combinacao de letras, numeros e caracteres especiais.", "Nao reutilize senhas.", "Atualize sua senha regularmente."]}>
      <SectionCard title="Alterar senha">
        {["Senha atual", "Nova senha", "Confirmar nova senha"].map((label) => (
          <label key={label} className="mb-5 block">
            <span className="mb-2 block text-sm">{label}</span>
            <div className="flex h-12 items-center rounded-md border border-white/10 bg-black/20 px-4">
              <input type="password" placeholder={label} className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-white/40" />
              <Eye className="h-5 w-5 text-white/70" />
            </div>
          </label>
        ))}
        <div className="mb-6 space-y-2 text-sm text-white/64">
          {["Minimo de 8 caracteres", "Letras maiusculas e minusculas", "Pelo menos um numero", "Pelo menos um caractere especial"].map((item) => <p key={item}><CheckCircle2 className="mr-2 inline h-4 w-4" />{item}</p>)}
        </div>
        <button className="ml-auto flex h-12 items-center gap-2 rounded-md bg-limebrand px-6 font-bold text-black"><Lock className="h-4 w-4" />Salvar nova senha</button>
      </SectionCard>
    </SecurityLayout>
  );
}

function SecurityLayout({ children, tips }: { children: ReactNode; tips: string[] }) {
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="space-y-5">{children}</div>
      <div className="space-y-5"><TipPanel title="Dicas de seguranca" items={tips} /><SidebarHelp /></div>
    </div>
  );
}

function ProfileGoalStat({ label, value, detail, Icon }: { label: string; value: string; detail: string; Icon: LucideIcon }) {
  return (
    <div className="rounded-lg border border-white/10 bg-panel p-5 shadow-card">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-limebrand/35 bg-limebrand/10 text-limebrand"><Icon className="h-5 w-5" /></span>
        <div>
          <p className="text-sm text-white/62">{label}</p>
          <p className="mt-2 text-2xl font-black">{value}</p>
          <p className="mt-1 text-sm text-limebrand">{detail}</p>
        </div>
      </div>
    </div>
  );
}

function ProfileGoalCard({ goal }: { goal: (typeof profileGoals)[number] }) {
  const Icon = goal.Icon;
  return (
    <SectionCard>
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 gap-4">
          <span className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-full border border-current bg-current/10", goal.color)}><Icon className="h-6 w-6" /></span>
          <div className="min-w-0">
            <p className="text-lg font-black">{goal.name}</p>
            <p className="mt-1 text-sm text-white/58">{goal.category}</p>
          </div>
        </div>
        <StatusBadge tone={goal.pace === "Atenção" ? "yellow" : "lime"}>{goal.pace}</StatusBadge>
      </div>
      <div className="mt-5">
        <div className="mb-2 flex justify-between gap-3 text-sm"><span className="text-white/62">{goal.value}</span><b className={goal.color}>{goal.progress}%</b></div>
        <div className="h-2.5 rounded-full bg-white/12"><div className={cn("h-full rounded-full", goal.bar)} style={{ width: `${goal.progress}%` }} /></div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-white/10 bg-black/18 p-3 text-sm"><span className="text-white/54">Prazo</span><br /><b>{goal.deadline}</b></div>
        <div className="rounded-md border border-white/10 bg-black/18 p-3 text-sm"><span className="text-white/54">Próxima ação</span><br /><b>{goal.note}</b></div>
      </div>
    </SectionCard>
  );
}

function GoalsTab() {
  return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black">Metas da jornada</h2>
              <p className="mt-1 text-sm text-white/62">Objetivos ligados ao seu treino, nutrição, progresso e rotina.</p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-md bg-limebrand px-4 py-2 font-bold text-black"><Plus className="h-4 w-4" />Criar nova meta</button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <ProfileGoalStat label="Metas ativas" value="4" detail="2 em ritmo forte" Icon={Target} />
            <ProfileGoalStat label="Progresso médio" value="69%" detail="+8% este mês" Icon={Trophy} />
            <ProfileGoalStat label="Próxima revisão" value="20 Jul" detail="Condicionamento" Icon={CalendarCheck} />
            <ProfileGoalStat label="Consistência" value="18 dias" detail="82% do período" Icon={CheckCircle2} />
          </div>

          <SectionCard title="Foco principal" action={<StatusBadge>Prioridade</StatusBadge>}>
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div>
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full border border-limebrand/40 bg-limebrand/10 text-limebrand"><Dumbbell className="h-7 w-7" /></span>
                  <div>
                    <p className="text-xl font-black">Ganho de massa muscular</p>
                    <p className="text-sm text-white/62">Meta mais alinhada ao plano atual de treino e nutrição.</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-md border border-white/10 bg-black/18 p-4"><p className="text-sm text-white/58">Atual</p><b className="text-xl">6,2 kg</b></div>
                  <div className="rounded-md border border-white/10 bg-black/18 p-4"><p className="text-sm text-white/58">Meta</p><b className="text-xl">8,0 kg</b></div>
                  <div className="rounded-md border border-white/10 bg-black/18 p-4"><p className="text-sm text-white/58">Faltam</p><b className="text-xl text-limebrand">1,8 kg</b></div>
                </div>
              </div>
              <div className="rounded-md border border-limebrand/25 bg-limebrand/8 p-5">
                <div className="mb-3 flex justify-between text-sm"><span>Progresso</span><b className="text-limebrand">77%</b></div>
                <div className="h-3 rounded-full bg-white/12"><div className="h-full rounded-full bg-limebrand shadow-[0_0_20px_rgba(182,255,0,.28)]" style={{ width: "77%" }} /></div>
                <p className="mt-4 text-sm text-white/68">Recomendação: manter proteína em 140 g+ e subir carga com controle técnico.</p>
              </div>
            </div>
          </SectionCard>

          <div className="grid gap-4 xl:grid-cols-2">
            {profileGoals.map((goal) => <ProfileGoalCard key={goal.name} goal={goal} />)}
          </div>

          <SectionCard title="Linha do tempo das metas">
            <div className="grid gap-3 md:grid-cols-4">
              {[
                ["Hoje", "Registrar água e treino", "Ação diária"],
                ["20 Jul", "Teste de corrida 10 km", "Condicionamento"],
                ["30 Ago", "Revisão de peso alvo", "Composição"],
                ["15 Dez", "Fechamento de massa muscular", "Hipertrofia"],
              ].map(([date, title, detail]) => (
                <div key={title} className="rounded-md border border-white/10 bg-black/18 p-4">
                  <p className="text-sm font-bold text-limebrand">{date}</p>
                  <p className="mt-2 font-semibold">{title}</p>
                  <p className="mt-1 text-xs text-white/54">{detail}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
        <div className="space-y-5">
          <RightPanelCard title="Resumo inteligente">
            <InlineProgress label="Metas no prazo" value={75} right="3 / 4" />
            <div className="mt-4"><InlineProgress label="Aderência semanal" value={82} right="82%" /></div>
            <div className="mt-4"><InlineProgress label="Prioridade concluída" value={77} right="77%" /></div>
            <p className="mt-5 rounded-md border border-limebrand/25 bg-limebrand/8 p-4 text-sm text-white/72">Seu melhor caminho agora é proteger o sono e manter a progressão de carga. Isso sustenta a meta principal.</p>
          </RightPanelCard>
          <RightPanelCard title="Conquistas recentes">
            {[
              ["Meta intermediária", "Massa muscular passou de 75%.", Trophy],
              ["Hábito formado", "18 dias registrando hidratação.", CheckCircle2],
              ["Recorde pessoal", "Maior volume semanal do mês.", Flame],
            ].map(([title, detail, Icon]) => <p key={title as string} className="flex gap-3 border-b border-white/8 py-3 last:border-0"><Icon className="h-5 w-5 text-limebrand" /><span><b>{title as string}</b><br /><small className="text-white/58">{detail as string}</small></span></p>)}
          </RightPanelCard>
          <TipPanel title="Dicas para suas metas" items={["Defina um objetivo principal para cada ciclo.", "Conecte cada meta a uma ação semanal.", "Revise prazos quando o treino ou a rotina mudarem.", "Celebre metas intermediárias para manter consistência."]} />
        </div>
      </div>
  );
}

function ProfileTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Informacoes");

  if (active === "perfis-e-vinculos" || active === "servicos") {
    return <ConnectedServicesPanel />;
  }

  if (active === "preferencias") {
    return <SettingsTabs activeTab="Preferencias" />;
  }

  if (active === "privacidade") {
    return <SettingsTabs activeTab="Privacidade" />;
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[250px_minmax(0,1fr)_340px]">
      <SectionCard>
        <div className="flex flex-col items-center text-center">
          <UserAvatar size={128} />
          <h2 className="mt-5 text-2xl font-black">Miguel Silva</h2>
          <StatusBadge>Membro Noogym</StatusBadge>
          <p className="mt-3 text-sm text-white/58">Membro desde Maio de 2024</p>
          <div className="mt-5 w-full rounded-md border border-white/10 bg-black/18 p-4 text-left">
            <div className="mb-2 flex justify-between text-sm"><span>Nivel</span><b>Avancado</b></div>
            <InlineProgress label="XP" value={62} right="1.250 / 2.000" />
          </div>
          <div className="mt-6 space-y-3 text-left text-sm text-white/68">
            <p><Mail className="mr-2 inline h-4 w-4" />miguel.silva@email.com</p>
            <p><Phone className="mr-2 inline h-4 w-4" />+244 923 456 789</p>
            <p><MapPin className="mr-2 inline h-4 w-4" />Luanda, Angola</p>
          </div>
        </div>
      </SectionCard>
      <div className="space-y-5">
        <SectionCard title="Informacoes pessoais">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Nome completo", "Miguel Silva"],
              ["Documento / NIF", "006789123LA042"],
              ["Email", "miguel.silva@email.com"],
              ["Telefone", "+244 923 456 789"],
              ["Data de nascimento", "14/08/1994"],
              ["Genero", "Masculino"],
              ["Cidade", "Luanda"],
              ["Provincia", "Luanda"],
            ].map(([label, value]) => <label key={label} className="text-sm"><span className="mb-2 block text-white/64">{label}</span><input className="h-11 w-full rounded-md border border-white/10 bg-black/20 px-3 outline-none" defaultValue={value} /></label>)}
          </div>
          <button className="mt-5 rounded-md bg-limebrand px-5 py-3 font-bold text-black">Salvar alteracoes</button>
        </SectionCard>
        <SectionCard title="Perfil fitness">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Objetivo principal", "Ganho de massa muscular"],
              ["Nivel de treino", "Avancado"],
              ["Frequencia semanal", "4 a 5 vezes por semana"],
              ["Horario preferido", "18:00 - 20:00"],
              ["Altura", "1,78 m"],
              ["Peso atual", "78,4 kg"],
              ["Modalidade favorita", "Musculacao"],
              ["Restricoes ou lesoes", "Sem restricoes ativas"],
            ].map(([label, value]) => <label key={label} className="text-sm"><span className="mb-2 block text-white/64">{label}</span><input className="h-11 w-full rounded-md border border-white/10 bg-black/20 px-3 outline-none" defaultValue={value} /></label>)}
          </div>
        </SectionCard>
        <SectionCard title="Contato de emergencia">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Nome", "Ana Silva"],
              ["Relacao", "Irma"],
              ["Telefone", "+244 923 111 222"],
            ].map(([label, value]) => <label key={label} className="text-sm"><span className="mb-2 block text-white/64">{label}</span><input className="h-11 w-full rounded-md border border-white/10 bg-black/20 px-3 outline-none" defaultValue={value} /></label>)}
          </div>
        </SectionCard>
        <SectionCard title="Sobre voce"><textarea className="h-28 w-full rounded-md border border-white/10 bg-black/20 p-3 outline-none" defaultValue="Apaixonado por treinos e por uma vida saudavel." /></SectionCard>
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Plano atual"><h3 className="font-bold">Noogym Premium <StatusBadge>Ativo</StatusBadge></h3><p className="mt-4 text-sm text-white/64">Ativo desde 20 Mai 2024</p><button className="mt-5 h-10 w-full rounded-md border border-limebrand/70 text-limebrand">Ver plano</button></RightPanelCard>
        <RightPanelCard title="Resumo da jornada">{["Check-ins 98", "Treinos concluidos 45", "Sequencia atual 7 dias", "Academia mais visitada Academia X", "Treino favorito Upper Body", "Calorias queimadas 18.450"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}</p>)}</RightPanelCard>
        <RightPanelCard title="Conquistas recentes">{["7 dias consecutivos", "Frequencia em dia", "Meta de proteina"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0"><TrophyIcon />{item}</p>)}</RightPanelCard>
      </div>
    </div>
  );
}

function TrophyIcon() {
  return <Target className="mr-3 inline h-5 w-5 text-limebrand" />;
}

function OrdersTabs({ activeTab }: { activeTab?: string }) {
  const statusMap: Record<string, string[]> = {
    Todos: [],
    "Em andamento": ["Processando", "Em transito"],
    Enviados: ["Enviado", "Em transito"],
    Entregues: ["Entregue"],
    Cancelados: ["Cancelado"],
  };
  const selected = statusMap[activeTab ?? "Todos"] ?? [];
  const filtered = selected.length ? orders.filter((order) => selected.includes(order.status.replace("â", "a"))) : orders;

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-3">
          <input className="h-11 min-w-0 flex-1 rounded-md border border-white/10 bg-black/20 px-4 outline-none sm:min-w-[260px]" placeholder="Buscar pedidos..." />
          <button className="rounded-md border border-white/10 px-4">Todos os metodos</button>
          <button className="rounded-md border border-white/10 px-4">Filtros</button>
        </div>
        {filtered.map((order) => <OrderCard key={order.id} order={order} />)}
      </div>
      <div className="space-y-5">
        <RightPanelCard title={activeTab === "Entregues" ? "Resumo de entregas" : "Resumo dos pedidos"}>
          {["Todos os pedidos 18", "Em andamento 4", "Enviados 3", "Entregues 9", "Cancelados 2"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}</p>)}
        </RightPanelCard>
        <RightPanelCard title="Rastrear pedido"><p className="text-sm text-white/62">Acompanhe seu pedido em tempo real.</p><button className="mt-5 h-11 w-full rounded-md border border-limebrand/70 text-limebrand">Ver todos os pedidos</button></RightPanelCard>
        <SidebarHelp />
      </div>
    </div>
  );
}

function FavoritesTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Ginásios");
  const dietPlans = [
    { title: "Plano Hipertrofia", subtitle: "2.300 kcal diarias", meta: "132 g de proteina" },
    { title: "Definicao Avancada", subtitle: "1.950 kcal diarias", meta: "Baixo teor de gordura" },
    { title: "Manutencao Equilibrada", subtitle: "2.150 kcal diarias", meta: "Rotina semanal" },
    { title: "Receitas de Pre-treino", subtitle: "Opcoes rapidas", meta: "8 receitas salvas" },
  ];

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <div className="flex items-center justify-between"><p className="text-sm text-white/70">{favoriteCountLabel(active)}</p><button className="rounded-md border border-white/10 px-4 py-2 text-sm">Mais recentes</button></div>
        {active === "treinos" ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {workouts.map((workout) => <FavoriteTile key={workout.name} image={workout.image} title={workout.name} subtitle={workout.group} meta={`${workout.duration} - ${workout.kcal}`} />)}
          </div>
        ) : active === "dietas" ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {dietPlans.map((plan) => <FavoriteTile key={plan.title} title={plan.title} subtitle={plan.subtitle} meta={plan.meta} />)}
          </div>
        ) : active === "eventos" ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {events.slice(0, 4).map((event) => <FavoriteTile key={event.id} image={event.image} title={event.title} subtitle={event.location} meta={`${event.date} - ${event.category}`} />)}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {gyms.slice(0, 4).map((gym) => <FavoriteTile key={gym.name} image={gym.image} title={gym.name} subtitle={gym.area} meta={`${gym.visits} visitas - ${gym.plan}`} />)}
          </div>
        )}
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Resumo dos favoritos">{["4 Ginásios", "4 Treinos", "4 Dietas", "4 Eventos", "Atualizado hoje as 10:30"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}</p>)}</RightPanelCard>
        <RightPanelCard title="Filtros"><button className="h-11 w-full rounded-md border border-limebrand/70 text-limebrand">Aplicar filtros</button></RightPanelCard>
        <SidebarHelp title="Duvidas?" />
      </div>
    </div>
  );
}

function favoriteCountLabel(active: string) {
  if (active === "treinos") return "4 treinos favoritos";
  if (active === "dietas") return "4 dietas favoritas";
  if (active === "eventos") return "4 eventos favoritos";
  return "4 ginásios favoritos";
}

function FavoriteTile({ image, title, subtitle, meta }: { image?: string; title: string; subtitle: string; meta: string }) {
  return (
    <SectionCard className="overflow-hidden p-0">
      {image ? <Image src={image} alt={title} width={360} height={180} className="h-36 w-full object-cover" /> : <div className="grid h-36 place-items-center bg-limebrand/10"><Target className="h-10 w-10 text-limebrand" /></div>}
      <div className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="mt-1 text-sm text-white/58">{subtitle}</p>
        <p className="mt-3 text-sm text-limebrand">{meta}</p>
        <button className="mt-4 h-10 w-full rounded-md border border-white/12 text-sm font-bold">Remover dos favoritos</button>
      </div>
    </SectionCard>
  );
}

function CouponsTabs({ activeTab }: { activeTab?: string }) {
  const available = tabToSlug(activeTab ?? "Meus cupons") === "cupons-disponiveis";
  const list = available ? coupons.filter((coupon) => !coupon.used) : coupons;
  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard icon="TicketPercent" label="Cupons disponiveis" value="12" detail="Prontos para usar" />
          <MetricCard icon="CalendarCheck" label="Cupons usados" value="3" detail="Este mes" />
          <MetricCard icon="BadgePercent" label="Economia total" value="27.450 Kz" detail="Com cupons" />
          <MetricCard icon="Star" label="Ofertas exclusivas" value="5" detail="Somente para voce" />
        </div>
        <div className="flex flex-wrap gap-3"><input className="h-11 min-w-0 flex-1 rounded-md border border-white/10 bg-black/20 px-4 outline-none sm:min-w-[260px]" placeholder="Buscar cupons..." /><button className="min-h-11 rounded-md border border-white/10 px-4">Todos os tipos</button></div>
        {list.map((coupon) => <CouponCard key={coupon.code} coupon={coupon} />)}
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Resumo dos cupons"><div className="mx-auto grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#b6ff00_75%,rgba(255,255,255,.13)_0)]"><div className="grid h-24 w-24 place-items-center rounded-full bg-[#071113] text-center"><b className="text-3xl">12</b><span className="-mt-7 text-xs text-white/58">disponiveis</span></div></div></RightPanelCard>
        <RightPanelCard title="Como usar cupons?">{["Escolha os produtos", "Aplique o cupom", "Aproveite o desconto"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}</p>)}</RightPanelCard>
        <RightPanelCard title="Dicas Noogym"><p className="text-white/64">Novos cupons sao liberados semanalmente com ofertas para membros.</p></RightPanelCard>
      </div>
    </div>
  );
}

function InlineProgress({ label, value, right }: { label: string; value: number; right?: string }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span>{label}</span>
        <span className="text-white/60">{right ?? `${value}%`}</span>
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div className="h-full rounded-full bg-limebrand" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function EmptyTabCard({ title, description }: { title: string; description: string }) {
  return (
    <SectionCard>
      <div className="grid min-h-48 place-items-center text-center">
        <div>
          <Target className="mx-auto h-10 w-10 text-limebrand" />
          <h2 className="mt-4 text-xl font-bold">{title}</h2>
          <p className="mt-2 max-w-md text-sm text-white/60">{description}</p>
        </div>
      </div>
    </SectionCard>
  );
}

function AcademiesTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Todos");
  const favorites = active === "favoritas";
  const visited = active === "visitadas";
  const mine = active === "meus-ginasios" || active === "minhas-academias";
  const data = favorites || visited || mine ? gyms.slice(0, favorites ? 3 : 4) : gyms;

  if (active === "mapa") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-3">
            <input className="h-11 min-w-0 flex-1 rounded-md border border-white/10 bg-black/20 px-4 outline-none sm:min-w-[260px]" placeholder="Buscar ginásios no mapa..." />
            <button className="rounded-md border border-white/10 px-4">Cidade</button>
            <button className="rounded-md border border-white/10 px-4">Plano</button>
          </div>
          <SectionCard>
            <div className="map-grid relative h-[420px] overflow-hidden rounded-md border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(5,7,8,0.78))]" />
              <div className="absolute left-[45%] top-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-limebrand px-4 py-3 font-black text-black shadow-glow">Luanda</div>
              {[["30%", "24%", "2"], ["62%", "35%", "5"], ["23%", "70%", "4"], ["48%", "30%", "3"]].map(([left, top, label]) => (
                <span key={label} className="absolute grid h-9 w-9 place-items-center rounded-full border border-limebrand bg-black/70 text-sm font-bold text-limebrand" style={{ left, top }}>{label}</span>
              ))}
            </div>
          </SectionCard>
        </div>
        <AcademiesSidePanel />
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard icon="MapPin" label={favorites ? "Favoritos" : visited ? "Visitados" : "Ginásios"} value={String(data.length)} detail="Disponíveis para você" />
          <MetricCard icon="CalendarCheck" label="Check-ins" value={visited ? "48" : "12"} detail="Este mes" />
          <MetricCard icon="Heart" label="Salvas" value="6" detail="Check-in rapido" />
          <MetricCard icon="Target" label="Cidades" value="5" detail="Na rede Noogym" />
        </div>
        <div className="flex flex-wrap gap-3">
          <input className="h-11 min-w-0 flex-1 rounded-md border border-white/10 bg-black/20 px-4 outline-none sm:min-w-[260px]" placeholder="Buscar ginásios..." />
          <button className="rounded-md border border-white/10 px-4">Cidade</button>
          <button className="rounded-md border border-white/10 px-4">Plano</button>
        </div>
        <SectionCard title={favorites ? "Ginásios favoritos" : visited ? "Ginásios visitados" : mine ? "Meus ginásios" : "Todos os ginásios"}>
          <DataTable
            headers={["Ginásio", "Localização", "Plano", "Visitas", "Ação"]}
            rows={data.map((gym) => [
              gym.name,
              gym.area,
              <StatusBadge key="plan">{gym.plan}</StatusBadge>,
              String(gym.visits),
              <button key="checkin" className="text-limebrand">Fazer check-in</button>,
            ])}
          />
        </SectionCard>
      </div>
      <AcademiesSidePanel />
    </div>
  );
}

function AcademiesSidePanel() {
  return (
    <div className="space-y-5">
      <RightPanelCard title="Ginásios por cidade">
        <div className="space-y-4">
          <InlineProgress label="Luanda" value={80} right="12" />
          <InlineProgress label="Benguela" value={35} right="4" />
          <InlineProgress label="Huila" value={25} right="3" />
        </div>
      </RightPanelCard>
      <RightPanelCard title="Ultimas visitas">
        {gyms.slice(0, 3).map((gym) => <p key={gym.name} className="border-b border-white/8 py-3 last:border-0">{gym.name}<br /><span className="text-sm text-white/54">{gym.area}</span></p>)}
      </RightPanelCard>
      <TipPanel title="Dica Noogym" items={["Use o mapa para encontrar ginásios próximos.", "Favoritos ficam sincronizados com o app.", "Check-in fica disponível nos ginásios ativos."]} />
    </div>
  );
}

function CheckinTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Visao geral");
  if (active === "historico") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <div className="flex flex-wrap gap-3">
            <div className="relative min-w-0 flex-1 sm:min-w-[260px]">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/54" />
              <input className="h-11 w-full rounded-md border border-white/10 bg-black/20 pl-11 pr-4 outline-none" placeholder="Buscar no histórico..." />
            </div>
            <select className="h-11 rounded-md border border-white/10 bg-[#071113] px-4 text-sm"><option>Todas as academias</option></select>
            <select className="h-11 rounded-md border border-white/10 bg-[#071113] px-4 text-sm"><option>Todos os tipos</option></select>
            <button className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 px-4 text-sm font-semibold"><Download className="h-4 w-4" />Exportar histórico</button>
          </div>
          <CheckinsHistoryTable />
        </div>
        <CheckinSidePanel variant="history" />
      </div>
    );
  }

  if (active === "locais") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <SectionCard title="Locais de check-in">
          <DataTable
            headers={["Academia", "Cidade", "Check-ins", "Ultima visita", "Acao"]}
            rows={gyms.map((gym, index) => [gym.name, gym.area, String(gym.visits), index === 0 ? "Hoje, 09:15" : "20 Mai 2024", <button key="open" className="text-limebrand">Ver detalhes</button>])}
          />
        </SectionCard>
        <CheckinSidePanel />
      </div>
    );
  }

  if (active === "conquistas") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <div className="grid overflow-hidden rounded-lg border border-white/10 bg-panel shadow-card lg:grid-cols-[minmax(0,1fr)_360px]">
            <AchievementProgressCard />
            <NextAchievementCard />
          </div>
          <AchievementFilters />
          <h2 className="text-xl font-bold">Todas as conquistas</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {checkinAchievements.map((achievement) => <AchievementCard key={achievement.title} achievement={achievement} />)}
          </div>
          <div className="flex justify-center"><button className="rounded-md border border-white/12 px-8 py-3 font-semibold">Ver todas as conquistas</button></div>
        </div>
        <CheckinSidePanel variant="achievements" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard icon="CalendarCheck" label="Check-ins este mes" value="12" trend="+20%" />
          <MetricCard icon="BarChart3" label="Total de check-ins" value="98" detail="Desde que comecou" />
          <MetricCard icon="Activity" label="Sequencia" value="7 dias" detail="Faltam 1 dia" />
          <MetricCard icon="Target" label="Frequencia semanal" value="4,2" detail="Media" />
        </div>
        <SectionCard title={active === "frequencia" ? "Frequencia semanal" : "Calendario de check-ins"}>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {Array.from({ length: 35 }, (_, i) => i + 1).map((day) => <div key={day} className={cn("grid h-12 rounded-md border border-white/8 bg-black/18", [1, 2, 5, 8, 10, 15, 20, 22, 25, 29].includes(day) && "text-limebrand")}><span className="m-auto">{day}</span></div>)}
          </div>
        </SectionCard>
      </div>
      <CheckinSidePanel />
    </div>
  );
}

const checkinHistoryRows = [
  { date: "22 Mai 2024", day: "Hoje, 09:15", academy: "Noogym Center", initials: "NC", city: "Luanda, Angola", type: "Academia", checkIn: "09:15", checkOut: "10:45", duration: "1h 30m" },
  { date: "20 Mai 2024", day: "Seg, 18:30", academy: "Power Fit", initials: "PF", city: "Benguela, Angola", type: "Academia", checkIn: "18:30", checkOut: "20:00", duration: "1h 30m" },
  { date: "18 Mai 2024", day: "Sáb, 07:45", academy: "Ultimate Performance", initials: "UP", city: "Huíla, Angola", type: "Academia", checkIn: "07:45", checkOut: "09:10", duration: "1h 25m" },
  { date: "17 Mai 2024", day: "Sex, 08:15", academy: "Noogym Center", initials: "NC", city: "Luanda, Angola", type: "Academia", checkIn: "08:15", checkOut: "09:45", duration: "1h 30m" },
  { date: "15 Mai 2024", day: "Qua, 19:00", academy: "Power Fit", initials: "PF", city: "Benguela, Angola", type: "Academia", checkIn: "19:00", checkOut: "20:20", duration: "1h 20m" },
  { date: "13 Mai 2024", day: "Seg, 06:50", academy: "Academia Boa Forma", initials: "AB", city: "Huambo, Angola", type: "Academia", checkIn: "06:50", checkOut: "08:10", duration: "1h 20m" },
  { date: "10 Mai 2024", day: "Sex, 18:40", academy: "Fit Training Studio", initials: "FT", city: "Cabinda, Angola", type: "Academia", checkIn: "18:40", checkOut: "20:10", duration: "1h 30m" },
  { date: "08 Mai 2024", day: "Qua, 07:30", academy: "Ultimate Performance", initials: "UP", city: "Huíla, Angola", type: "Academia", checkIn: "07:30", checkOut: "08:55", duration: "1h 25m" },
  { date: "06 Mai 2024", day: "Seg, 18:00", academy: "Power Fit", initials: "PF", city: "Benguela, Angola", type: "Academia", checkIn: "18:00", checkOut: "19:30", duration: "1h 30m" },
  { date: "04 Mai 2024", day: "Sáb, 09:20", academy: "Noogym Center", initials: "NC", city: "Luanda, Angola", type: "Academia", checkIn: "09:20", checkOut: "10:40", duration: "1h 20m" },
];

const checkinAchievements = [
  { title: "Primeiro passo", description: "Faça seu primeiro check-in.", icon: Check, unlocked: true, date: "04 Mai 2024" },
  { title: "Frequência de 7 dias", description: "Faça check-in por 7 dias consecutivos.", icon: Flame, unlocked: true, date: "10 Mai 2024" },
  { title: "Frequência de 14 dias", description: "Faça check-in por 14 dias consecutivos.", icon: CalendarCheck, unlocked: true, date: "22 Mai 2024" },
  { title: "Frequência de 30 dias", description: "Faça check-in por 30 dias consecutivos.", icon: CalendarCheck, progress: 73, progressText: "22 / 30 dias" },
  { title: "Frequência de 50 dias", description: "Faça check-in por 50 dias consecutivos.", icon: CalendarCheck, progress: 44, progressText: "22 / 50 dias" },
  { title: "Frequência mensal", description: "Faça check-in em 4 semanas seguidas.", icon: Dumbbell, unlocked: true, date: "18 Mai 2024" },
  { title: "Academia explorada", description: "Faça check-in em 3 academias diferentes.", icon: Star, unlocked: true, date: "25 Mai 2024" },
  { title: "Visitante assíduo", description: "Faça check-in em 5 academias diferentes.", icon: MapPin, progress: 60, progressText: "3 / 5 academias" },
  { title: "Mestre da constância", description: "Faça check-in por 100 dias consecutivos.", icon: Trophy, progress: 22, progressText: "22 / 100 dias" },
  { title: "Lenda Noogym", description: "Faça check-in por 365 dias consecutivos.", icon: Trophy, progress: 6, progressText: "22 / 365 dias" },
];

function CheckinsHistoryTable() {
  return (
    <SectionCard className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="min-w-[920px] w-full border-collapse">
          <thead className="bg-white/[0.035] text-left text-xs text-white/64">
            <tr>{["Data e hora", "Academia", "Tipo", "Check-in", "Check-out", "Duração", "Ações"].map((header) => <th key={header} className="px-5 py-4 font-medium">{header}</th>)}</tr>
          </thead>
          <tbody>
            {checkinHistoryRows.map((row) => (
              <tr key={`${row.date}-${row.academy}-${row.checkIn}`} className="border-t border-white/8">
                <td className="px-5 py-4"><p className="font-semibold">{row.date}</p><p className="mt-1 text-sm text-white/58">{row.day}</p></td>
                <td className="px-5 py-4"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full border border-limebrand/70 bg-limebrand/10 text-sm font-black text-limebrand">{row.initials}</span><div><p className="font-semibold">{row.academy}</p><p className="mt-1 text-sm text-white/58">{row.city}</p></div></div></td>
                <td className="px-5 py-4"><span className="inline-flex items-center gap-2 text-sm"><CalendarCheck className="h-4 w-4 text-limebrand" />{row.type}</span></td>
                <td className="px-5 py-4 font-bold text-limebrand">{row.checkIn}</td>
                <td className="px-5 py-4">{row.checkOut}</td>
                <td className="px-5 py-4">{row.duration}</td>
                <td className="px-5 py-4"><button className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-black/18"><MoreVertical className="h-4 w-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 px-5 py-4 text-sm text-white/64">
        <span>Mostrando 1 a 10 de 48 check-ins</span>
        <div className="flex items-center gap-2">
          {["‹", "1", "2", "3", "...", "5", "›"].map((item) => <button key={item} className={cn("h-9 min-w-9 rounded-md border border-white/10 px-3", item === "1" && "border-limebrand text-limebrand")}>{item}</button>)}
        </div>
      </div>
    </SectionCard>
  );
}

function CheckinSidePanel({ variant = "default" }: { variant?: "default" | "history" | "achievements" }) {
  return (
    <div className="space-y-5">
      <CheckinsSummaryCard />
      <CheckinsCalendarCard />
      {variant === "history" ? <PersonalStatsCard /> : <TipPanel title="Dica Noogym" items={["A constancia e o segredo dos melhores resultados!", "Mantenha o foco e desbloqueie todas as conquistas."]} />}
    </div>
  );
}

function CheckinsSummaryCard() {
  return (
    <RightPanelCard title="Resumo dos check-ins" action={<span className="text-sm font-semibold text-limebrand">Ver detalhes</span>}>
      <div className="flex items-center gap-6">
        <div className="grid h-36 w-36 shrink-0 place-items-center rounded-full bg-[conic-gradient(#b6ff00_82%,rgba(255,255,255,.14)_0)]">
          <div className="grid h-24 w-24 place-items-center rounded-full bg-[#071113] text-center"><b className="text-3xl">48</b><span className="-mt-7 text-xs text-white/64">check-ins</span></div>
        </div>
        <div className="flex-1 space-y-4 text-sm">
          {["Este mês 12", "Mês passado 10", "Total 48"].map((item) => <p key={item} className="flex justify-between gap-4"><span>{item.replace(/\s\d+$/, "")}</span><b>{item.match(/\d+$/)?.[0]}</b></p>)}
        </div>
      </div>
      <div className="mt-5 rounded-md border border-limebrand/40 bg-limebrand/8 p-4"><b className="mr-2 text-2xl text-limebrand">+22%</b><span className="text-sm text-white/70">em relação ao mês passado</span></div>
    </RightPanelCard>
  );
}

function CheckinsCalendarCard() {
  const marked = [6, 7, 8, 10, 11, 12, 15, 16, 17, 20, 21, 22, 23, 24, 31];
  return (
    <RightPanelCard title="Calendário de check-ins" action={<span className="text-sm font-semibold text-limebrand">Ver calendário</span>}>
      <div className="mb-4 flex items-center justify-between"><b>Maio 2024</b><span className="text-white/54">‹  ›</span></div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => <span key={day} className="py-1 text-xs text-white/58">{day}</span>)}
        {[29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2].map((day, index) => {
          const activeDay = day === 22 && index > 20;
          const hasCheckin = marked.includes(day) && index > 5 && index < 33;
          return <span key={`${day}-${index}`} className={cn("relative grid h-9 place-items-center rounded-full", activeDay && "bg-limebrand font-black text-black")}>{day}<i className={cn("absolute bottom-1 h-1.5 w-1.5 rounded-full", hasCheckin ? "bg-limebrand" : "bg-transparent")} /></span>;
        })}
      </div>
      <p className="mt-5 text-sm text-white/72"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-limebrand" />Check-in realizado</p>
    </RightPanelCard>
  );
}

function PersonalStatsCard() {
  return (
    <RightPanelCard title="Estatísticas pessoais" action={<span className="text-sm font-semibold text-limebrand">Ver todas</span>}>
      <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-3">
        {[["28h 30m", "Tempo total"], ["12", "Dias ativos"], ["4,2", "Média semanal"]].map(([value, label]) => <div key={label} className="rounded-md bg-white/[0.035] p-4 text-center"><p className="text-xl font-black">{value}</p><p className="mt-1 text-xs text-white/62">{label}</p></div>)}
      </div>
    </RightPanelCard>
  );
}

function HexIcon({ Icon, muted = false }: { Icon: LucideIcon; muted?: boolean }) {
  return (
    <div className={cn("mx-auto grid h-20 w-20 place-items-center text-limebrand [clip-path:polygon(50%_0%,92%_25%,92%_75%,50%_100%,8%_75%,8%_25%)]", muted ? "border border-white/20 bg-white/5 text-white/42" : "bg-limebrand/10 ring-2 ring-limebrand")}>
      <Icon className="h-9 w-9" />
    </div>
  );
}

function AchievementProgressCard() {
  return (
    <div className="grid gap-5 p-7 md:grid-cols-[100px_1fr] md:items-center">
      <HexIcon Icon={Trophy} />
      <div>
        <h3 className="text-xl font-bold">Seu progresso em conquistas</h3>
        <p className="mt-2 text-sm text-white/66">Continue assim! Você está no caminho certo.</p>
        <div className="mt-5 flex items-center gap-5"><div className="h-2 flex-1 rounded-full bg-white/12"><div className="h-full w-[56%] rounded-full bg-limebrand" /></div><b>56%</b></div>
        <p className="mt-3 text-sm"><b className="text-limebrand">18</b> / 32 conquistas desbloqueadas</p>
      </div>
    </div>
  );
}

function NextAchievementCard() {
  return (
    <div className="border-t border-white/10 p-7 lg:border-l lg:border-t-0">
      <p className="font-bold">Próxima conquista</p>
      <div className="mt-5 flex gap-5"><HexIcon Icon={Flame} /><div><h3 className="font-bold">Frequência de 30 dias</h3><p className="mt-1 text-sm text-white/62">Faça check-in por 30 dias consecutivos.</p><p className="mt-4 text-sm">22 / 30 dias</p><InlineProgress label="" value={73} /></div></div>
    </div>
  );
}

function AchievementFilters() {
  return <div className="flex flex-wrap gap-3">{["Todas", "Frequência", "Sequência", "Dedicação", "Marcos", "Especiais"].map((filter, index) => <button key={filter} className={cn("rounded-md border px-5 py-3 text-sm font-semibold", index === 0 ? "border-limebrand bg-limebrand text-black" : "border-white/10 bg-black/18")}>{filter}</button>)}</div>;
}

function AchievementCard({ achievement }: { achievement: { title: string; description: string; icon: LucideIcon; unlocked?: boolean; date?: string; progress?: number; progressText?: string } }) {
  return (
    <SectionCard className="min-h-[240px]">
      <div className="text-center">
        <HexIcon Icon={achievement.icon} muted={!achievement.unlocked && !achievement.progress} />
        <h3 className="mt-5 font-bold">{achievement.title}</h3>
        <p className="mt-2 text-sm text-white/62">{achievement.description}</p>
        {achievement.unlocked ? <p className="mt-5 text-xs text-white/50">Conquistada em<br /><b className="text-white/82">{achievement.date}</b></p> : null}
        {achievement.progress ? <div className="mt-5"><InlineProgress label={achievement.progressText ?? "Progresso"} value={achievement.progress} /></div> : null}
      </div>
    </SectionCard>
  );
}

const workoutLibraryCategories = [
  { title: "Peito", count: "28 treinos", Icon: Target, color: "text-limebrand" },
  { title: "Costas", count: "32 treinos", Icon: Dumbbell, color: "text-sky-400" },
  { title: "Pernas", count: "35 treinos", Icon: Flame, color: "text-yellow-300" },
  { title: "Ombros", count: "22 treinos", Icon: User, color: "text-purple-400" },
  { title: "Bíceps", count: "18 treinos", Icon: Dumbbell, color: "text-limebrand" },
  { title: "Tríceps", count: "16 treinos", Icon: Dumbbell, color: "text-orange-300" },
];

const workoutLibraryItems = [
  { title: "Supino Reto com Halteres", image: "/images/dashboard/workout-upper.png", category: "Peito", objective: "Hipertrofia", level: "Intermediário", type: "Equipamento", exercises: 4, duration: "45 min" },
  { title: "Puxada na Frente", image: "/images/dashboard/workout-back.png", category: "Costas", objective: "Força", level: "Intermediário", type: "Equipamento", exercises: 5, duration: "50 min" },
  { title: "Agachamento Livre", image: "/images/dashboard/workout-lower.png", category: "Pernas", objective: "Força", level: "Avançado", type: "Equipamento", exercises: 6, duration: "60 min" },
  { title: "Desenvolvimento com Halteres", image: "/images/dashboard/workout-upper.png", category: "Ombros", objective: "Hipertrofia", level: "Intermediário", type: "Equipamento", exercises: 4, duration: "40 min" },
  { title: "Rosca Direta com Barra", image: "/images/dashboard/workout-upper.png", category: "Bíceps", objective: "Hipertrofia", level: "Iniciante", type: "Equipamento", exercises: 3, duration: "30 min" },
  { title: "Tríceps na Polia", image: "/images/dashboard/workout-back.png", category: "Tríceps", objective: "Hipertrofia", level: "Intermediário", type: "Equipamento", exercises: 3, duration: "30 min" },
  { title: "Levantamento Terra", image: "/images/dashboard/workout-lower.png", category: "Costas", objective: "Força", level: "Avançado", type: "Equipamento", exercises: 5, duration: "60 min" },
  { title: "Abdominal Prancha", image: "/images/dashboard/workout-core.png", category: "Abdômen", objective: "Resistência", level: "Iniciante", type: "Peso corporal", exercises: 3, duration: "20 min" },
];

const trainingPlanItems = [
  { title: "Hipertrofia Avançada", image: "/images/dashboard/workout-upper.png", status: "Ativo", objective: "Hipertrofia", level: "Avançado", frequency: "6 dias/semana", dateLabel: "Iniciado em", date: "10 Mai 2024", nextLabel: "Próximo treino", next: "Hoje, 18:30", progress: 68, description: "Plano completo para ganho de massa muscular com foco em sobrecarga progressiva e volume." },
  { title: "Emagrecimento & Definição", image: "/images/dashboard/workout-lower.png", status: "Ativo", objective: "Perda de peso", level: "Intermediário", frequency: "5 dias/semana", dateLabel: "Iniciado em", date: "28 Abr 2024", nextLabel: "Próximo treino", next: "Amanhã, 07:00", progress: 52, description: "Combinação de treinos funcionais e musculação para queima de gordura e definição muscular." },
  { title: "Força Máxima", image: "/images/dashboard/workout-back.png", status: "Ativo", objective: "Força", level: "Avançado", frequency: "4 dias/semana", dateLabel: "Iniciado em", date: "05 Mai 2024", nextLabel: "Próximo treino", next: "Sex, 19:00", progress: 75, description: "Desenvolva força e potência com treinos focados em exercícios compostos." },
  { title: "Mobilidade & Flexibilidade", image: "/images/dashboard/workout-core.png", status: "Pausado", objective: "Saúde", level: "Iniciante", frequency: "3 dias/semana", dateLabel: "Pausado em", date: "15 Mai 2024", nextLabel: "Último treino", next: "14 Mai 2024", progress: 30, description: "Melhore sua mobilidade, postura e previna lesões com alongamentos e exercícios específicos." },
];

function WorkoutTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Meus treinos");
  if (active === "biblioteca-de-treinos") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-7">
          <WorkoutLibraryFilters />
          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold">Categorias populares</h2>
              <button className="text-sm font-semibold text-limebrand">Ver todas</button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
              {workoutLibraryCategories.map((category) => <WorkoutCategoryCard key={category.title} category={category} />)}
            </div>
          </section>
          <section className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-bold">Todos os treinos</h2>
              <select className="h-10 rounded-md border border-white/10 bg-[#071113] px-3 text-sm outline-none"><option>Ordenar: Mais recentes</option></select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
              {workoutLibraryItems.map((workout) => <WorkoutCard key={workout.title} workout={workout} />)}
            </div>
            <div className="flex justify-center">
              <button className="inline-flex h-11 items-center gap-3 rounded-md border border-white/10 px-8 font-semibold">Ver mais treinos <ChevronRight className="h-4 w-4 rotate-90" /></button>
            </div>
          </section>
        </div>
        <WorkoutSidePanel variant="library" />
      </div>
    );
  }

  if (active === "planos-de-treino") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <div className="flex justify-end">
            <button className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-black/18 px-4 text-sm font-semibold"><HelpCircle className="h-4 w-4" />Entender como funciona</button>
          </div>
          <TrainingPlanStats />
          <TrainingPlanFilters />
          <div className="space-y-3">
            {trainingPlanItems.map((plan) => <TrainingPlanItem key={plan.title} plan={plan} />)}
          </div>
          <div className="flex justify-center">
            <button className="inline-flex h-11 items-center gap-3 rounded-md border border-white/10 px-8 font-semibold">Ver mais planos <ChevronRight className="h-4 w-4 rotate-90" /></button>
          </div>
        </div>
        <WorkoutSidePanel variant="plans" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard icon="Dumbbell" label="Treinos concluidos" value="18" trend="+12%" />
          <MetricCard icon="CalendarCheck" label="Treinos este mes" value="6" detail="Este mes" />
          <MetricCard icon="Activity" label="Tempo total" value="12h 45m" trend="+1h 30m" />
          <MetricCard icon="Flame" label="Calorias" value="4.250 kcal" trend="+580 kcal" />
        </div>
        {workouts.map((workout) => <OrderLikeWorkout key={workout.name} workout={workout} />)}
      </div>
      <WorkoutSidePanel />
    </div>
  );
}

function WorkoutLibraryFilters() {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="relative min-w-0 flex-1 sm:min-w-[260px]">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/54" />
        <input className="h-11 w-full rounded-md border border-white/10 bg-black/20 pl-11 pr-4 outline-none" placeholder="Buscar treinos na biblioteca..." />
      </div>
      {["Grupo muscular", "Tipo de treino", "Nível"].map((label) => <select key={label} className="h-11 min-w-[150px] rounded-md border border-white/10 bg-[#071113] px-4 text-sm outline-none"><option>{label}</option></select>)}
      <button className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 px-4 text-sm font-semibold"><SlidersHorizontal className="h-4 w-4" />Filtros</button>
    </div>
  );
}

function WorkoutCategoryCard({ category }: { category: (typeof workoutLibraryCategories)[number] }) {
  const { Icon } = category;
  return (
    <SectionCard className="p-4">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-md bg-limebrand/8">
          <Icon className={cn("h-7 w-7", category.color)} />
        </div>
        <div>
          <h3 className="font-bold">{category.title}</h3>
          <p className="mt-1 text-sm text-white/58">{category.count}</p>
        </div>
      </div>
    </SectionCard>
  );
}

function WorkoutCard({ workout }: { workout: (typeof workoutLibraryItems)[number] }) {
  return (
    <SectionCard className="overflow-hidden border-white/10 p-0">
      <div className="relative">
        <Image src={workout.image} alt={workout.title} width={420} height={220} className="h-36 w-full object-cover" />
        <span className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-panel" />
        <button className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/45"><Heart className="h-5 w-5" /></button>
      </div>
      <div className="p-4">
        <h3 className="font-bold">{workout.title}</h3>
        <p className="mt-1 text-sm text-white/58">{workout.category} • {workout.objective}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-md bg-limebrand/12 px-2.5 py-1 text-xs font-bold text-limebrand">{workout.level}</span>
          <span className="rounded-md bg-white/8 px-2.5 py-1 text-xs text-white/78">{workout.type}</span>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-white/70">
          <span><CalendarCheck className="mr-1.5 inline h-4 w-4" />{workout.exercises} exercícios</span>
          <span><Clock className="mr-1.5 inline h-4 w-4" />{workout.duration}</span>
        </div>
      </div>
    </SectionCard>
  );
}

function TrainingPlanStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard icon="CalendarCheck" label="Planos ativos" value="3" trend="+1 este mês" />
      <MetricCard icon="CheckCircle2" label="Treinos programados" value="18" detail="esta semana" />
      <MetricCard icon="CalendarCheck" label="Duração média" value="50 min" detail="por treino" />
      <MetricCard icon="Flame" label="Calorias estimadas" value="3.850 kcal" detail="esta semana" />
    </div>
  );
}

function TrainingPlanFilters() {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="relative min-w-0 flex-1 sm:min-w-[240px]">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/54" />
        <input className="h-11 w-full rounded-md border border-white/10 bg-black/20 pl-11 pr-4 outline-none" placeholder="Buscar planos..." />
      </div>
      {["Status: Todos", "Objetivo: Todos", "Dificuldade: Todas"].map((label) => <select key={label} className="h-11 min-w-[150px] rounded-md border border-white/10 bg-[#071113] px-4 text-sm outline-none"><option>{label}</option></select>)}
      <button className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 px-4 text-sm font-semibold"><SlidersHorizontal className="h-4 w-4" />Filtros</button>
    </div>
  );
}

function TrainingPlanItem({ plan }: { plan: (typeof trainingPlanItems)[number] }) {
  const paused = plan.status === "Pausado";
  return (
    <SectionCard className="relative overflow-hidden border-white/10 p-0">
      {!paused ? <span className="absolute left-3 top-5 h-[calc(100%-2.5rem)] w-px rounded-full bg-limebrand/45" /> : null}
      <div className="grid gap-5 p-4 md:grid-cols-[170px_minmax(0,1fr)_220px_190px_36px] md:items-center">
        <Image src={plan.image} alt={plan.title} width={220} height={140} className="h-32 w-full rounded-md object-cover md:h-28" />
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-bold">{plan.title}</h3>
            <StatusBadge tone={paused ? "gray" : "lime"}>{plan.status}</StatusBadge>
          </div>
          <p className="mt-2 text-sm text-white/62">Objetivo: {plan.objective} • Nível: {plan.level} • {plan.frequency}</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/66">{plan.description}</p>
        </div>
        <div className="grid gap-4 text-sm">
          <div><p className="text-white/54"><CalendarCheck className="mr-2 inline h-4 w-4" />{plan.dateLabel}</p><b>{plan.date}</b></div>
          <div><p className="text-white/54"><Clock className="mr-2 inline h-4 w-4" />{plan.nextLabel}</p><b>{plan.next}</b></div>
        </div>
        <div className="grid gap-4">
          <InlineProgress label="" value={plan.progress} right={`${plan.progress}%`} />
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-limebrand/70 px-4 font-bold text-limebrand">{paused ? "Continuar" : "Ver plano"} <ChevronRight className="h-4 w-4" /></button>
        </div>
        <button className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-black/20"><MoreVertical className="h-4 w-4" /></button>
      </div>
    </SectionCard>
  );
}

function OrderLikeWorkout({ workout }: { workout: (typeof workouts)[number] }) {
  return (
    <SectionCard>
      <div className="grid gap-4 md:grid-cols-[140px_1fr_160px_120px] md:items-center">
        <Image src={workout.image} alt={workout.name} width={180} height={110} className="h-24 w-full rounded-md object-cover" />
        <div><h3 className="font-bold">{workout.name}</h3><p className="text-sm text-white/58">{workout.group}</p><p className="mt-2 text-sm text-white/58">{workout.duration} - {workout.kcal}</p></div>
        <p className="text-sm text-white/70">{workout.date}</p>
        <button className="h-10 rounded-md border border-limebrand/70 text-limebrand">{workout.status}</button>
      </div>
    </SectionCard>
  );
}

function WorkoutSidePanel({ variant = "default" }: { variant?: "default" | "library" | "plans" }) {
  return (
    <div className="space-y-5">
      <TrainingProgressCard />
      {variant === "plans" ? <NextWorkoutCard /> : <MuscleGroupsCard />}
      {variant === "plans" ? <RecentActivityCard /> : null}
      <TrainingTipCard />
    </div>
  );
}

function TrainingProgressCard() {
  return (
    <RightPanelCard title="Seu progresso" action={<span className="text-sm text-white/72">Este mês</span>}>
      <div className="flex items-center gap-6">
        <div className="grid h-36 w-36 shrink-0 place-items-center rounded-full bg-[conic-gradient(#b6ff00_75%,rgba(62,179,65,.45)_0,rgba(255,255,255,.13)_0)]">
          <div className="grid h-24 w-24 place-items-center rounded-full bg-[#071113] text-center"><b className="text-3xl">75%</b></div>
        </div>
        <div>
          <p className="font-bold">Meta de treinos</p>
          <p className="mt-2 text-white/82">15 / 20 treinos</p>
          <p className="mt-4 text-sm leading-6 text-white/64">Faltam 5 treinos para alcançar sua meta!</p>
        </div>
      </div>
      <button className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-md border border-limebrand/70 font-bold text-limebrand">Ver metas <ChevronRight className="h-4 w-4" /></button>
    </RightPanelCard>
  );
}

function MuscleGroupsCard() {
  const groups = [
    ["Peito", 75, "12 / 16 treinos", "bg-limebrand", Target],
    ["Costas", 71, "10 / 14 treinos", "bg-sky-400", Dumbbell],
    ["Pernas", 64, "9 / 14 treinos", "bg-yellow-300", Flame],
    ["Ombros", 60, "6 / 10 treinos", "bg-purple-500", User],
    ["Braços", 67, "8 / 12 treinos", "bg-orange-400", Dumbbell],
  ] as const;

  return (
    <RightPanelCard title="Grupos musculares" action={<span className="text-sm font-semibold text-limebrand">Ver todos</span>}>
      <div className="space-y-5">
        {groups.map(([name, value, total, color, Icon]) => (
          <div key={name} className="grid grid-cols-[48px_1fr] gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-white/5"><Icon className="h-6 w-6 text-limebrand" /></div>
            <div>
              <div className="mb-2 flex justify-between gap-3 text-sm"><b>{name}</b><span className="text-white/62">{total}</span></div>
              <div className="h-2 rounded-full bg-white/10"><div className={cn("h-full rounded-full", color)} style={{ width: `${value}%` }} /></div>
            </div>
          </div>
        ))}
      </div>
    </RightPanelCard>
  );
}

function NextWorkoutCard() {
  return (
    <RightPanelCard title="Próximo treino" action={<span className="text-sm font-semibold text-limebrand">Ver calendário</span>}>
      <div className="grid gap-4 sm:grid-cols-[96px_1fr]">
        <Image src="/images/dashboard/workout-upper.png" alt="Treino Upper Body" width={120} height={90} className="h-24 w-full rounded-md object-cover" />
        <div>
          <h3 className="font-bold">Treino Upper Body</h3>
          {["Hoje, 18:30", "Academia X", "60 min"].map((item, index) => <p key={item} className="mt-2 text-sm text-white/70">{index === 0 ? <CalendarCheck className="mr-2 inline h-4 w-4" /> : index === 1 ? <MapPin className="mr-2 inline h-4 w-4" /> : <Clock className="mr-2 inline h-4 w-4" />}{item}</p>)}
        </div>
      </div>
      <button className="mt-5 h-11 w-full rounded-md border border-limebrand/70 font-bold text-limebrand">Iniciar treino</button>
    </RightPanelCard>
  );
}

function RecentActivityCard() {
  const activityItems = [
    ["Treino Upper Body concluído", "20 Mai, 19:30", "620 kcal", CheckCircle2],
    ["Check-in realizado", "20 Mai, 18:45", "Academia X", MapPin],
    ["Plano atualizado", "20 Mai, 09:15", "Hipertrofia Avançada", CalendarCheck],
  ] as const;

  return (
    <RightPanelCard title="Atividade recente" action={<span className="text-sm font-semibold text-limebrand">Ver todas</span>}>
      <div className="space-y-4">
        {activityItems.map(([title, date, detail, Icon]) => (
          <div key={title} className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-limebrand/30 bg-limebrand/8"><Icon className="h-5 w-5 text-limebrand" /></div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold">{title}</p>
              <p className="mt-1 text-sm text-white/58">{date}</p>
            </div>
            <span className="text-sm text-white/64">{detail}</span>
            <ChevronRight className="h-4 w-4 text-white/50" />
          </div>
        ))}
      </div>
    </RightPanelCard>
  );
}

function TrainingTipCard() {
  return (
    <RightPanelCard title="Dica Noogym">
      <div className="grid gap-4 sm:grid-cols-[1fr_80px] sm:items-center">
        <div>
          <p className="text-sm leading-6 text-white/72">Varie seus treinos e desafie seu corpo com novos estímulos para continuar evoluindo.</p>
          <button className="mt-4 text-sm font-bold text-limebrand">Ver dicas de treino →</button>
        </div>
        <div className="grid h-20 w-20 place-items-center rounded-full border border-limebrand/30 bg-limebrand/8 text-limebrand">
          <Lightbulb className="h-11 w-11" />
        </div>
      </div>
    </RightPanelCard>
  );
}

const nutritionMetrics = [
  { label: "Calorias", value: "1.850 / 2.400", unit: "kcal", progress: 77, color: "bg-limebrand", Icon: Flame },
  { label: "Proteínas", value: "132 / 160", unit: "g", progress: 83, color: "bg-sky-400", Icon: Dumbbell },
  { label: "Carboidratos", value: "210 / 280", unit: "g", progress: 75, color: "bg-yellow-300", Icon: Target },
  { label: "Gorduras", value: "58 / 80", unit: "g", progress: 72, color: "bg-purple-400", Icon: Flame },
  { label: "Fibras", value: "22 / 30", unit: "g", progress: 73, color: "bg-orange-400", Icon: Star },
];

const mealRows = [
  { title: "Café da manhã", time: "07:30", description: "Omelete com aveia, banana e whey protein", kcal: "520", protein: "32g", carbs: "58g", fat: "14g", Icon: Target },
  { title: "Lanche da manhã", time: "10:30", description: "Iogurte grego com granola e frutas", kcal: "250", protein: "18g", carbs: "28g", fat: "6g", Icon: Star },
  { title: "Almoço", time: "13:00", description: "Frango grelhado, arroz integral, feijão e salada", kcal: "680", protein: "48g", carbs: "78g", fat: "18g", Icon: Flame },
  { title: "Lanche da tarde", time: "16:30", description: "Whey protein com banana e pasta de amendoim", kcal: "210", protein: "24g", carbs: "22g", fat: "6g", Icon: Star },
  { title: "Jantar", time: "19:30", description: "Salmão grelhado, batata doce e legumes", kcal: "430", protein: "40g", carbs: "24g", fat: "14g", Icon: Moon },
  { title: "Ceia", time: "22:00", description: "Cottage com mel e amêndoas", kcal: "180", protein: "12g", carbs: "10g", fat: "4g", Icon: Moon },
];

const foodRows = [
  { name: "Peito de frango grelhado", detail: "Sem pele", category: "Carnes", portion: "100 g", kcal: "165", protein: "31", carbs: "0", fat: "3,6", token: "PF", tone: "from-orange-400/70 to-emerald-500/35" },
  { name: "Arroz integral cozido", category: "Grãos", portion: "100 g", kcal: "124", protein: "2,6", carbs: "25,8", fat: "1,0", token: "AI", tone: "from-stone-200/70 to-amber-700/35" },
  { name: "Aveia em flocos", category: "Cereais", portion: "30 g", kcal: "114", protein: "4,1", carbs: "19,4", fat: "2,0", token: "AV", tone: "from-yellow-200/70 to-orange-700/35" },
  { name: "Ovo inteiro cozido", category: "Ovos", portion: "1 unidade (50 g)", kcal: "78", protein: "6,3", carbs: "0,6", fat: "5,3", token: "OV", tone: "from-white/80 to-yellow-400/45" },
  { name: "Banana prata", category: "Frutas", portion: "1 unidade (100 g)", kcal: "89", protein: "1,1", carbs: "22,8", fat: "0,3", token: "BN", tone: "from-yellow-300/80 to-lime-500/30" },
  { name: "Batata doce cozida", category: "Tubérculos", portion: "100 g", kcal: "86", protein: "1,6", carbs: "20,1", fat: "0,1", token: "BD", tone: "from-orange-400/75 to-amber-900/35" },
  { name: "Feijão preto cozido", category: "Leguminosas", portion: "100 g", kcal: "77", protein: "4,8", carbs: "13,8", fat: "0,5", token: "FP", tone: "from-stone-900 to-orange-800/40" },
  { name: "Pasta de amendoim", category: "Oleaginosas", portion: "15 g", kcal: "90", protein: "3,6", carbs: "3,2", fat: "7,6", token: "PA", tone: "from-amber-300/80 to-orange-900/45" },
];

const nutritionPlanningRows = [
  { title: "Definição Avançada", status: "Ativo", objective: "Perda de peso", duration: "8 semanas", dateLabel: "Iniciado em", date: "10 Mai 2024", mealLabel: "Próxima refeição", meal: "Almoço - 13:00", progress: 62, action: "Ver detalhes", description: "Plano hipocalórico com alto teor de proteínas para redução de gordura corporal e preservação muscular.", tone: "from-orange-400/70 to-limebrand/30" },
  { title: "Ganho de Massa Muscular", status: "Pausado", objective: "Ganho de massa", duration: "12 semanas", dateLabel: "Pausado em", date: "18 Abr 2024", mealLabel: "Última refeição", meal: "Jantar - 19:30", progress: 45, action: "Continuar", description: "Plano hipercalórico equilibrado para ganho de massa magra com desempenho nos treinos.", tone: "from-amber-300/65 to-sky-500/30" },
  { title: "Manutenção Equilibrada", status: "Ativo", objective: "Manutenção", duration: "4 semanas", dateLabel: "Iniciado em", date: "01 Mai 2024", mealLabel: "Próxima refeição", meal: "Ceia - 22:00", progress: 30, action: "Ver detalhes", description: "Plano balanceado para manutenção do peso e melhora da composição corporal.", tone: "from-emerald-300/60 to-yellow-500/35" },
  { title: "Reeducação Alimentar", status: "Concluído", objective: "Hábitos saudáveis", duration: "6 semanas", dateLabel: "Concluído em", date: "12 Abr 2024", mealLabel: "Última refeição", meal: "Ceia - 21:30", progress: 100, action: "Ver resumo", description: "Plano focado na criação de hábitos alimentares saudáveis e sustentáveis.", tone: "from-pink-300/65 to-red-500/30" },
];

const nutritionDiaryRows = [
  { date: "22 Mai 2024", label: "Hoje", kcal: "1.850 kcal", adherence: 77, meals: "6 refeições", note: "Dentro da meta de proteína", status: "Em progresso" },
  { date: "21 Mai 2024", label: "Ontem", kcal: "2.180 kcal", adherence: 91, meals: "6 refeições", note: "Meta diária quase completa", status: "Concluído" },
  { date: "20 Mai 2024", label: "Segunda", kcal: "2.030 kcal", adherence: 85, meals: "5 refeições", note: "Faltou fibra no jantar", status: "Concluído" },
  { date: "19 Mai 2024", label: "Domingo", kcal: "1.720 kcal", adherence: 72, meals: "4 refeições", note: "Dia com menor ingestão", status: "Atenção" },
];

const recipeRows = [
  { title: "Frango com arroz integral", meta: "680 kcal • 48g proteína", time: "25 min", level: "Fácil", tags: ["Almoço", "Hipertrofia"], tone: "from-orange-400/70 to-limebrand/30" },
  { title: "Omelete proteico com aveia", meta: "520 kcal • 32g proteína", time: "15 min", level: "Fácil", tags: ["Café da manhã", "Rápida"], tone: "from-yellow-300/70 to-orange-500/30" },
  { title: "Salmão com batata doce", meta: "430 kcal • 40g proteína", time: "30 min", level: "Médio", tags: ["Jantar", "Equilíbrio"], tone: "from-sky-400/65 to-emerald-500/30" },
  { title: "Shake de whey com banana", meta: "210 kcal • 24g proteína", time: "5 min", level: "Fácil", tags: ["Lanche", "Pós-treino"], tone: "from-purple-400/60 to-limebrand/25" },
];

const supplementRows = [
  { title: "Whey protein", dose: "30 g", time: "Pós-treino", stock: "14 doses", progress: 70, status: "Ativo" },
  { title: "Creatina", dose: "5 g", time: "Todos os dias, 08:00", stock: "22 doses", progress: 88, status: "Ativo" },
  { title: "Ômega 3", dose: "2 cápsulas", time: "Almoço", stock: "18 doses", progress: 60, status: "Ativo" },
  { title: "ZMA Noogym", dose: "1 cápsula", time: "Antes de dormir", stock: "8 doses", progress: 35, status: "Baixo estoque" },
];

function NutritionTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Visao geral");

  if (active === "refeicoes" || active === "refeicao") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <NutritionHelpAction />
          <div className="flex flex-wrap items-center gap-3">
            <button className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-black/18"><ChevronRight className="h-4 w-4 rotate-180" /></button>
            <button className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-black/18 px-4 font-semibold"><CalendarCheck className="h-4 w-4" />Hoje, 22 Mai 2024</button>
            <button className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-black/18"><ChevronRight className="h-4 w-4" /></button>
            <button className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-black/18 px-4 font-semibold"><Plus className="h-4 w-4" />Copiar refeições</button>
            <button className="ml-auto inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-black/18 px-4 font-semibold"><MoreVertical className="h-4 w-4" />Mais ações</button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {nutritionMetrics.map((metric) => <NutritionMetricCard key={metric.label} metric={metric} />)}
          </div>
          <section className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold">Suas refeições</h2>
              <button className="inline-flex items-center gap-2 font-semibold text-limebrand"><Plus className="h-4 w-4" />Adicionar refeição</button>
            </div>
            <div className="space-y-3">
              {mealRows.map((meal) => <MealListItem key={`${meal.title}-${meal.time}`} meal={meal} />)}
            </div>
            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-black/18 font-semibold">Ver sugestões para hoje <ChevronRight className="ml-auto mr-5 h-4 w-4 text-limebrand" /></button>
          </section>
        </div>
        <NutritionSidePanel variant="meal" />
      </div>
    );
  }

  if (active === "alimentos") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <NutritionHelpAction />
          <FoodTable />
        </div>
        <NutritionSidePanel variant="foods" />
      </div>
    );
  }

  if (active === "plano-alimentar" || active === "planejamentos") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <NutritionHelpAction />
          <div className="flex flex-wrap gap-3">
            <div className="relative min-w-0 flex-1 sm:min-w-[260px]">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/54" />
              <input className="h-11 w-full rounded-md border border-white/10 bg-black/20 pl-11 pr-4 outline-none" placeholder="Buscar planos alimentares..." />
            </div>
            {["Status: Todos", "Objetivo: Todos"].map((label) => <select key={label} className="h-11 min-w-[160px] rounded-md border border-white/10 bg-[#071113] px-4 text-sm outline-none"><option>{label}</option></select>)}
            <button className="inline-flex h-11 items-center gap-2 rounded-md bg-limebrand px-5 font-bold text-black"><Plus className="h-4 w-4" />Criar plano</button>
          </div>
          <section className="space-y-4">
            <h2 className="text-lg font-bold">Seus planos alimentares</h2>
            {nutritionPlanningRows.map((plan) => <NutritionPlanningItem key={plan.title} plan={plan} />)}
          </section>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/62">
            <span>Mostrando 1 a 4 de 4 planos alimentares</span>
            <div className="flex gap-2">{["‹", "1", "›"].map((item) => <button key={item} className={cn("h-9 min-w-9 rounded-md border border-white/10 px-3", item === "1" && "border-limebrand text-limebrand")}>{item}</button>)}</div>
          </div>
        </div>
        <NutritionSidePanel variant="planning" />
      </div>
    );
  }

  if (active === "diario-alimentar") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <NutritionHelpAction />
          <div className="grid gap-4 md:grid-cols-4">
            <MetricCard icon="CalendarCheck" label="Dias registados" value="18" detail="Este mês" />
            <MetricCard icon="Target" label="Aderência média" value="84%" detail="Últimos 7 dias" />
            <MetricCard icon="Flame" label="Calorias médias" value="2.040 kcal" detail="Por dia" />
            <MetricCard icon="CheckCircle2" label="Sequência" value="7 dias" detail="Registos completos" />
          </div>
          <SectionCard title="Histórico alimentar" action={<button className="rounded-md border border-white/10 px-4 py-2 text-sm">Exportar diário</button>}>
            <div className="space-y-3">
              {nutritionDiaryRows.map((entry) => <NutritionDiaryItem key={entry.date} entry={entry} />)}
            </div>
          </SectionCard>
          <SectionCard title="Calendário de aderência">
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day) => <span key={day} className="py-1 text-xs text-white/58">{day}</span>)}
              {Array.from({ length: 35 }, (_, index) => {
                const day = index < 2 ? 29 + index : index - 1;
                const activeDay = day === 22;
                const logged = [3, 5, 7, 8, 10, 12, 14, 15, 17, 18, 20, 21, 22, 24, 27, 30].includes(day);
                return <span key={`${day}-${index}`} className={cn("relative grid h-9 place-items-center rounded-md border border-white/8", activeDay && "border-limebrand bg-limebrand text-black font-black")}>{day}<i className={cn("absolute bottom-1 h-1 w-4 rounded-full", logged ? "bg-limebrand" : "bg-transparent")} /></span>;
              })}
            </div>
          </SectionCard>
        </div>
        <NutritionSidePanel variant="diary" />
      </div>
    );
  }

  if (active === "receitas") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <NutritionHelpAction />
          <div className="flex flex-wrap gap-3">
            <div className="relative min-w-0 flex-1 sm:min-w-[260px]">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/54" />
              <input className="h-11 w-full rounded-md border border-white/10 bg-black/20 pl-11 pr-4 outline-none" placeholder="Buscar receitas..." />
            </div>
            {["Objetivo: Todos", "Tempo: Todos", "Macros: Todos"].map((label) => <select key={label} className="h-11 min-w-[150px] rounded-md border border-white/10 bg-[#071113] px-4 text-sm outline-none"><option>{label}</option></select>)}
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {recipeRows.map((recipe) => <RecipeCard key={recipe.title} recipe={recipe} />)}
          </div>
          <SectionCard title="Sugestões para hoje">
            <div className="grid gap-3 md:grid-cols-3">
              {["Adicionar receita ao almoço", "Trocar lanche por shake", "Gerar lista de compras"].map((item) => <button key={item} className="rounded-md border border-white/10 bg-black/18 p-4 text-left font-semibold hover:border-limebrand/50">{item}<ChevronRight className="float-right h-4 w-4 text-limebrand" /></button>)}
            </div>
          </SectionCard>
        </div>
        <NutritionSidePanel variant="recipes" />
      </div>
    );
  }

  if (active === "suplementos") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <NutritionHelpAction />
          <div className="grid gap-4 md:grid-cols-4">
            <MetricCard icon="ShoppingBag" label="Suplementos ativos" value="4" detail="Na rotina" />
            <MetricCard icon="CalendarCheck" label="Doses hoje" value="3 / 4" detail="75%" />
            <MetricCard icon="BadgePercent" label="Estoque baixo" value="1" detail="ZMA Noogym" />
            <MetricCard icon="CheckCircle2" label="Aderência" value="86%" detail="Esta semana" />
          </div>
          <SectionCard title="Rotina de suplementação" action={<button className="inline-flex items-center gap-2 rounded-md bg-limebrand px-4 py-2 font-bold text-black"><Plus className="h-4 w-4" />Adicionar</button>}>
            <div className="space-y-3">
              {supplementRows.map((supplement) => <SupplementRoutineItem key={supplement.title} supplement={supplement} />)}
            </div>
          </SectionCard>
          <SectionCard title="Recomendações Noogym">
            <div className="grid gap-3 md:grid-cols-3">
              {["Creatina todos os dias", "Whey após treinos intensos", "Repor estoque de ZMA"].map((item) => <div key={item} className="rounded-md border border-white/10 bg-black/18 p-4"><CheckCircle2 className="h-5 w-5 text-limebrand" /><p className="mt-3 font-semibold">{item}</p></div>)}
            </div>
          </SectionCard>
        </div>
        <NutritionSidePanel variant="supplements" />
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-5">
        <NutritionHelpAction />
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {nutritionMetrics.map((metric) => <NutritionMetricCard key={metric.label} metric={metric} />)}
        </div>
        <SectionCard title="Resumo de hoje" action={<button className="text-sm font-semibold text-limebrand">Abrir refeições</button>}>
          <div className="space-y-4">
            {mealRows.slice(0, 4).map((meal) => <MealListItem key={meal.title} meal={meal} compact />)}
          </div>
        </SectionCard>
        <SectionCard title="Ações rápidas">
          <div className="grid gap-3 md:grid-cols-4">
            {[
              ["Registar refeição", "Adicionar alimento ao dia"],
              ["Ver diário", "Comparar dias anteriores"],
              ["Plano alimentar", "Acompanhar progresso"],
              ["Receitas", "Encontrar sugestões"],
            ].map(([title, desc]) => <button key={title} className="rounded-md border border-white/10 bg-black/18 p-4 text-left hover:border-limebrand/50"><b>{title}</b><p className="mt-1 text-sm text-white/56">{desc}</p></button>)}
          </div>
        </SectionCard>
      </div>
      <NutritionSidePanel />
    </div>
  );
}

function NutritionHelpAction() {
  return <div className="flex justify-end"><button className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-black/18 px-4 text-sm font-semibold"><HelpCircle className="h-4 w-4" />Entender como funciona</button></div>;
}

function NutritionMetricCard({ metric }: { metric: (typeof nutritionMetrics)[number] }) {
  const { Icon } = metric;
  return (
    <SectionCard className="p-4">
      <div className="flex items-center gap-2 text-sm"><span className={cn("h-3 w-3 rounded-full", metric.color)} /><span>{metric.label}</span></div>
      <p className="mt-3 text-xl font-black">{metric.value} <span className="text-sm font-medium text-white/62">{metric.unit}</span></p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-2 flex-1 rounded-full bg-white/10"><div className={cn("h-full rounded-full", metric.color)} style={{ width: `${metric.progress}%` }} /></div>
        <span className="text-sm text-white/72">{metric.progress}%</span>
      </div>
      <Icon className="mt-4 h-5 w-5 text-limebrand" />
    </SectionCard>
  );
}

function MealListItem({ meal, compact = false }: { meal: (typeof mealRows)[number]; compact?: boolean }) {
  const { Icon } = meal;
  return (
    <SectionCard className={cn("p-4", compact && "bg-black/12")}>
      <div className="grid gap-4 md:grid-cols-[48px_minmax(0,1fr)_72px_repeat(4,82px)_28px] md:items-center">
        <div className="grid h-11 w-11 place-items-center rounded-md bg-limebrand/8 text-limebrand"><Icon className="h-7 w-7" /></div>
        <div><h3 className="font-bold">{meal.title}</h3><p className="mt-1 text-sm text-white/60">{meal.description}</p></div>
        <p className="text-white/72">{meal.time}</p>
        {[[meal.kcal, "kcal"], [meal.protein, "proteínas"], [meal.carbs, "carboidratos"], [meal.fat, "gorduras"]].map(([value, label]) => <p key={label} className="text-center"><b>{value}</b><span className="block text-sm text-white/58">{label}</span></p>)}
        <button className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-black/20"><MoreVertical className="h-4 w-4" /></button>
      </div>
    </SectionCard>
  );
}

function NutritionDiaryItem({ entry }: { entry: (typeof nutritionDiaryRows)[number] }) {
  const tone = entry.status === "Atenção" ? "yellow" : entry.status === "Concluído" ? "blue" : "lime";
  return (
    <div className="grid gap-4 rounded-md border border-white/10 bg-black/18 p-4 md:grid-cols-[minmax(0,1fr)_140px_180px_120px] md:items-center">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-bold">{entry.date}</h3>
          <StatusBadge tone={tone}>{entry.status}</StatusBadge>
        </div>
        <p className="mt-1 text-sm text-white/58">{entry.label} • {entry.meals} • {entry.note}</p>
      </div>
      <p><span className="block text-sm text-white/54">Calorias</span><b>{entry.kcal}</b></p>
      <InlineProgress label="Aderência" value={entry.adherence} right={`${entry.adherence}%`} />
      <button className="h-10 rounded-md border border-white/10 text-sm font-semibold">Abrir dia</button>
    </div>
  );
}

function RecipeCard({ recipe }: { recipe: (typeof recipeRows)[number] }) {
  return (
    <SectionCard className="overflow-hidden p-0">
      <div className={cn("grid h-32 place-items-center bg-gradient-to-br text-3xl font-black", recipe.tone)}>{recipe.title.slice(0, 2).toUpperCase()}</div>
      <div className="p-4">
        <h3 className="font-bold">{recipe.title}</h3>
        <p className="mt-1 text-sm text-white/58">{recipe.meta}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {recipe.tags.map((tag) => <span key={tag} className="rounded-md bg-limebrand/10 px-2.5 py-1 text-xs font-semibold text-limebrand">{tag}</span>)}
        </div>
        <div className="mt-4 flex items-center justify-between text-sm text-white/68">
          <span><Clock className="mr-1.5 inline h-4 w-4" />{recipe.time}</span>
          <span>{recipe.level}</span>
        </div>
        <button className="mt-4 h-10 w-full rounded-md border border-limebrand/60 font-semibold text-limebrand">Adicionar à refeição</button>
      </div>
    </SectionCard>
  );
}

function SupplementRoutineItem({ supplement }: { supplement: (typeof supplementRows)[number] }) {
  const lowStock = supplement.status === "Baixo estoque";
  return (
    <div className="grid gap-4 rounded-md border border-white/10 bg-black/18 p-4 md:grid-cols-[48px_minmax(0,1fr)_150px_180px_120px] md:items-center">
      <div className="grid h-12 w-12 place-items-center rounded-md bg-limebrand/8 text-limebrand"><Target className="h-6 w-6" /></div>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-bold">{supplement.title}</h3>
          <StatusBadge tone={lowStock ? "yellow" : "lime"}>{supplement.status}</StatusBadge>
        </div>
        <p className="mt-1 text-sm text-white/58">{supplement.dose} • {supplement.time}</p>
      </div>
      <p><span className="block text-sm text-white/54">Estoque</span><b>{supplement.stock}</b></p>
      <InlineProgress label="Disponível" value={supplement.progress} right={`${supplement.progress}%`} />
      <button className="h-10 rounded-md border border-limebrand/60 text-sm font-semibold text-limebrand">Registar dose</button>
    </div>
  );
}

function FoodThumbnail({ item }: { item: (typeof foodRows)[number] }) {
  return <div className={cn("grid h-12 w-14 place-items-center rounded-md bg-gradient-to-br text-sm font-black text-white shadow-inner", item.tone)}>{item.token}</div>;
}

function FoodTable() {
  return (
    <SectionCard className="overflow-hidden p-0">
      <div className="flex flex-wrap gap-3 p-4">
        <div className="relative min-w-0 flex-1 sm:min-w-[260px]">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/54" />
          <input className="h-11 w-full rounded-md border border-white/10 bg-black/20 pl-11 pr-4 outline-none" placeholder="Buscar alimentos..." />
        </div>
        {["Todas as categorias", "Todos os tipos"].map((label) => <select key={label} className="h-11 min-w-[210px] rounded-md border border-white/10 bg-[#071113] px-4 text-sm outline-none"><option>{label}</option></select>)}
        <button className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 px-4 text-sm font-semibold"><SlidersHorizontal className="h-4 w-4" />Filtros</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[980px] w-full border-collapse">
          <thead className="bg-white/[0.035] text-left text-xs text-white/64">
            <tr>{["Alimento", "Categoria", "Porção padrão", "Calorias (kcal)", "Proteínas (g)", "Carboidratos (g)", "Gorduras (g)", "Ações"].map((header) => <th key={header} className="px-4 py-4 font-medium">{header}</th>)}</tr>
          </thead>
          <tbody>
            {foodRows.map((item) => (
              <tr key={item.name} className="border-t border-white/8">
                <td className="px-4 py-4"><div className="flex items-center gap-3"><FoodThumbnail item={item} /><div><p className="font-semibold">{item.name}</p>{item.detail ? <p className="mt-1 text-sm text-white/50">{item.detail}</p> : null}</div></div></td>
                <td className="px-4 py-4 text-white/74">{item.category}</td>
                <td className="px-4 py-4">{item.portion}</td>
                <td className="px-4 py-4 font-semibold">{item.kcal}</td>
                <td className="px-4 py-4">{item.protein}</td>
                <td className="px-4 py-4">{item.carbs}</td>
                <td className="px-4 py-4">{item.fat}</td>
                <td className="px-4 py-4"><div className="flex gap-2"><button className="grid h-9 w-9 place-items-center rounded-md border border-white/10"><Star className="h-4 w-4" /></button><button className="grid h-9 w-9 place-items-center rounded-md border border-white/10"><MoreVertical className="h-4 w-4" /></button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 px-5 py-4 text-sm text-white/64">
        <span>Mostrando 1 a 8 de 128 alimentos</span>
        <div className="flex items-center gap-2">{["‹", "1", "2", "3", "...", "16", "›"].map((item) => <button key={item} className={cn("h-9 min-w-9 rounded-md border border-white/10 px-3", item === "1" && "border-limebrand text-limebrand")}>{item}</button>)}</div>
      </div>
    </SectionCard>
  );
}

function NutritionPlanningItem({ plan }: { plan: (typeof nutritionPlanningRows)[number] }) {
  const statusTone = plan.status === "Concluído" ? "blue" : plan.status === "Pausado" ? "gray" : "lime";
  return (
    <SectionCard className="overflow-hidden p-0">
      <div className="grid gap-5 p-4 md:grid-cols-[140px_minmax(0,1fr)_210px_180px_36px] md:items-center">
        <div className={cn("grid h-28 place-items-center rounded-md bg-gradient-to-br text-xl font-black", plan.tone)}>{plan.title.slice(0, 2).toUpperCase()}</div>
        <div>
          <div className="flex flex-wrap items-center gap-3"><h3 className="text-lg font-bold">{plan.title}</h3><StatusBadge tone={statusTone}>{plan.status}</StatusBadge></div>
          <p className="mt-2 text-sm text-white/62">Objetivo: {plan.objective} • Duração: {plan.duration}</p>
          <p className="mt-3 text-sm leading-6 text-white/66">{plan.description}</p>
        </div>
        <div className="grid gap-4 text-sm">
          <p><CalendarCheck className="mr-2 inline h-4 w-4 text-white/62" /><span className="text-white/56">{plan.dateLabel}</span><br /><b className="ml-6">{plan.date}</b></p>
          <p><Clock className="mr-2 inline h-4 w-4 text-white/62" /><span className="text-white/56">{plan.mealLabel}</span><br /><b className="ml-6">{plan.meal}</b></p>
        </div>
        <div className="grid gap-4">
          <InlineProgress label="Progresso" value={plan.progress} right={`${plan.progress}%`} />
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-4 font-semibold">{plan.action} <ChevronRight className="h-4 w-4" /></button>
        </div>
        <button className="grid h-9 w-9 place-items-center rounded-md border border-white/10 bg-black/20"><MoreVertical className="h-4 w-4" /></button>
      </div>
    </SectionCard>
  );
}

function NutritionSidePanel({ variant = "default" }: { variant?: "default" | "meal" | "foods" | "planning" | "diary" | "recipes" | "supplements" }) {
  return (
    <div className="space-y-5">
      <DailyNutritionSummaryCard title={variant === "foods" ? "Resumo de nutrientes" : "Resumo do dia"} />
      <MacroDistributionCard />
      {variant === "default" ? <WeeklyAdherenceCard /> : null}
      {variant === "foods" ? <FoodConsumedCard /> : null}
      {variant === "planning" || variant === "diary" ? <NextMealsCard /> : null}
      <NutritionTipCard variant={variant} />
    </div>
  );
}

function DailyNutritionSummaryCard({ title }: { title: string }) {
  return (
    <RightPanelCard title={title} action={<span className="text-sm text-white/72">Este mês</span>}>
      <div className="flex items-center gap-6">
        <div className="grid h-36 w-36 shrink-0 place-items-center rounded-full bg-[conic-gradient(#1da5ff_0_28%,#facc15_28%_73%,#a855f7_73%_91%,#fb7c1e_91%_100%)]">
          <div className="grid h-24 w-24 place-items-center rounded-full bg-[#071113] text-center"><div><b className="text-3xl">1.850</b><p className="text-xs text-white/62">kcal<br />de 2.400 kcal</p></div></div>
        </div>
        <div className="flex-1 space-y-3 text-sm">
          {["Proteínas 132g (28%)", "Carboidratos 210g (45%)", "Gorduras 58g (28%)", "Fibras 22g (9%)"].map((item, index) => <p key={item} className="flex justify-between gap-3"><span><i className={cn("mr-2 inline-block h-2.5 w-2.5 rounded-full", ["bg-sky-400", "bg-yellow-300", "bg-purple-400", "bg-orange-400"][index])} />{item.replace(/\s\d.+$/, "")}</span><b className="font-medium text-white/72">{item.match(/\d.+$/)?.[0]}</b></p>)}
        </div>
      </div>
      <div className="mt-5 rounded-md border border-limebrand/35 bg-limebrand/8 p-4 text-center"><p className="text-sm text-white/66">Você ainda pode consumir</p><b className="text-3xl text-limebrand">550 kcal</b><p className="text-sm text-white/66">para atingir sua meta diária.</p></div>
    </RightPanelCard>
  );
}

function MacroDistributionCard() {
  const macros = [
    ["Proteínas", "132g / 160g", 88, "bg-sky-400"],
    ["Carboidratos", "210g / 280g", 75, "bg-yellow-300"],
    ["Gorduras", "58g / 80g", 72, "bg-purple-400"],
    ["Fibras", "22g / 30g", 73, "bg-orange-400"],
  ] as const;
  return (
    <RightPanelCard title="Distribuição de macronutrientes" action={<span className="text-sm font-semibold text-limebrand">Ver detalhes</span>}>
      <div className="space-y-5">
        {macros.map(([label, right, value, color]) => (
          <div key={label}>
            <div className="mb-2 flex justify-between text-sm"><span>{label}</span><span className="text-white/66">{right}</span></div>
            <div className="flex items-center gap-3"><div className="h-2 flex-1 rounded-full bg-white/10"><div className={cn("h-full rounded-full", color)} style={{ width: `${value}%` }} /></div><span className="text-sm">{value}%</span></div>
          </div>
        ))}
      </div>
    </RightPanelCard>
  );
}

function WeeklyAdherenceCard() {
  const items = [
    ["Plano alimentar", "84%", 84],
    ["Registos completos", "18 / 23", 78],
    ["Meta de proteína", "132 / 160g", 83],
    ["Hidratação", "2,1 / 3L", 70],
  ] as const;

  return (
    <aside className="min-w-0 rounded-lg border border-white/10 bg-panel p-4 shadow-card">
      <h3 className="text-base font-bold">Aderência semanal</h3>
      <div className="mt-4 space-y-3">
        {items.map(([label, right, value]) => (
          <div key={label}>
            <div className="mb-1.5 flex items-center justify-between gap-3 text-xs">
              <span className="text-white/82">{label}</span>
              <span className="text-white/58">{right}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-limebrand" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function FoodConsumedCard() {
  return (
    <RightPanelCard title="Alimentos mais consumidos" action={<span className="text-sm font-semibold text-limebrand">Ver todos</span>}>
      <div className="space-y-3">
        {foodRows.slice(0, 5).map((item, index) => <div key={item.name} className="flex items-center gap-3"><FoodThumbnail item={item} /><div><p className="font-semibold">{item.name}</p><p className="text-sm text-white/56">{[24, 18, 15, 14, 12][index]} porções</p></div></div>)}
      </div>
    </RightPanelCard>
  );
}

function NextMealsCard() {
  const next = [
    ["Almoço", "Frango grelhado, arroz integral e salada", "13:00", Target],
    ["Lanche da tarde", "Iogurte grego com granola e frutas", "16:30", Star],
    ["Jantar", "Salmão grelhado, batata doce e legumes", "19:30", Moon],
  ] as const;
  return (
    <RightPanelCard title="Próximas refeições" action={<span className="text-sm font-semibold text-limebrand">Ver todas</span>}>
      <div className="space-y-4">
        {next.map(([title, detail, time, Icon]) => <div key={title} className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-md bg-limebrand/8 text-limebrand"><Icon className="h-6 w-6" /></div><div className="min-w-0 flex-1"><p className="font-semibold">{title}</p><p className="text-sm text-white/56">{detail}</p></div><span className="text-sm text-white/66">{time}</span></div>)}
      </div>
    </RightPanelCard>
  );
}

function NutritionTipCard({ variant }: { variant: "default" | "meal" | "foods" | "planning" | "diary" | "recipes" | "supplements" }) {
  const text = variant === "foods"
    ? "Varie seus alimentos para garantir todos os nutrientes que seu corpo precisa para performar melhor."
    : variant === "diary"
      ? "Revise seu diário alimentar semanalmente para identificar padrões e ajustar a rotina com mais precisão."
    : variant === "recipes"
      ? "Salve receitas que batem com seus macros para montar refeições rápidas sem sair do plano."
    : variant === "supplements"
      ? "Mantenha doses e horários consistentes; suplementação funciona melhor quando acompanha uma boa alimentação."
    : variant === "planning"
      ? "Planeje suas refeições com antecedência para manter a consistência e alcançar seus objetivos mais rápido."
      : "Inclua alimentos ricos em fibras e mantenha-se hidratado para melhor digestão e desempenho.";
  return (
    <RightPanelCard title="Dica Noogym">
      <div className="grid gap-4 sm:grid-cols-[1fr_80px] sm:items-center">
        <div><p className="text-sm leading-6 text-white/72">{text}</p><button className="mt-4 text-sm font-bold text-limebrand">Ver dicas de nutrição →</button></div>
        <div className="grid h-20 w-20 place-items-center rounded-full border border-limebrand/30 bg-limebrand/8 text-limebrand"><Lightbulb className="h-11 w-11" /></div>
      </div>
    </RightPanelCard>
  );
}

const bodyMetrics = [
  { label: "Peso", value: "78,4 kg", trend: "↓ 2,1 kg", positive: true, Icon: Target, color: "text-limebrand" },
  { label: "Massa muscular", value: "36,8 kg", trend: "↑ 1,4 kg", positive: true, Icon: Dumbbell, color: "text-limebrand" },
  { label: "Gordura corporal", value: "14,6%", trend: "↓ 1,8%", positive: true, Icon: Flame, color: "text-yellow-300" },
  { label: "Água corporal", value: "58,2%", trend: "↑ 0,9%", positive: true, Icon: Target, color: "text-sky-400" },
  { label: "IMC", value: "24,1", trend: "↓ 0,6", positive: true, Icon: Heart, color: "text-purple-400" },
];

const compositionSeries = [
  { label: "Peso (kg)", value: "78,4 kg", color: "#b6ff00", points: [82, 79, 78, 79, 76, 74, 74, 71] },
  { label: "Massa muscular (kg)", value: "36,8 kg", color: "#2788ff", points: [49, 50, 51, 51, 52, 53, 54, 55] },
  { label: "Gordura corporal (%)", value: "14,6%", color: "#ff7a1a", points: [30, 30, 30, 30, 29, 29, 29, 28] },
  { label: "Água corporal (%)", value: "58,2%", color: "#8b4cf6", points: [16, 16, 16, 16, 16, 16, 16, 16] },
];

const compositionDetails = [
  { label: "Massa muscular", value: "46,9%", sub: "36,8 kg", color: "#b6ff00" },
  { label: "Gordura corporal", value: "14,6%", sub: "14,6 kg", color: "#ff7a1a" },
  { label: "Água corporal", value: "58,2%", sub: "45,6 kg", color: "#2788ff" },
  { label: "Massa óssea", value: "8,5%", sub: "6,7 kg", color: "#8b4cf6" },
  { label: "Outros", value: "19,0%", sub: "14,9 kg", color: "#94a3b8" },
];

const strengthMetrics = [
  { label: "Carga levantada", value: "12.540 kg", trend: "↑ 15,6%", Icon: Dumbbell, color: "text-purple-400" },
  { label: "Volume de treino", value: "24.780 kg", trend: "↑ 17,2%", Icon: Target, color: "text-sky-400" },
  { label: "Treinos registrados", value: "16", trend: "↑ 23,1%", Icon: CalendarCheck, color: "text-orange-400" },
  { label: "Exercícios", value: "8", trend: "sem alteração", Icon: Dumbbell, color: "text-limebrand" },
];

const strengthExercises = [
  { exercise: "Supino reto", group: "Peito", best: "80 kg", current: "92,5 kg", evolution: "↑ 15,6%" },
  { exercise: "Agachamento livre", group: "Pernas", best: "100 kg", current: "112,5 kg", evolution: "↑ 12,5%" },
  { exercise: "Levantamento terra", group: "Costas", best: "120 kg", current: "137,5 kg", evolution: "↑ 14,6%" },
  { exercise: "Desenvolvimento militar", group: "Ombros", best: "50 kg", current: "57,5 kg", evolution: "↑ 15,0%" },
  { exercise: "Rosca direta", group: "Bíceps", best: "30 kg", current: "33,5 kg", evolution: "↑ 11,7%" },
];

const measureMetrics = [
  { label: "Peso", value: "78,4 kg", trend: "↓ 2,1 kg", Icon: Target, color: "text-limebrand" },
  { label: "Cintura", value: "84,0 cm", trend: "↓ 3,5 cm", Icon: Target, color: "text-sky-400" },
  { label: "Quadril", value: "98,0 cm", trend: "↓ 2,0 cm", Icon: User, color: "text-purple-400" },
  { label: "Peito", value: "104,0 cm", trend: "↑ 1,0 cm", Icon: Dumbbell, color: "text-orange-400" },
  { label: "Braço dir.", value: "34,0 cm", trend: "↑ 0,8 cm", Icon: Dumbbell, color: "text-yellow-300" },
  { label: "Coxa dir.", value: "58,0 cm", trend: "↓ 1,0 cm", Icon: User, color: "text-pink-400" },
];

const measureSeries = [
  { label: "Peso (kg)", value: "78,4 kg", color: "#b6ff00", points: [78, 78, 78, 78, 78, 78, 78, 78] },
  { label: "Cintura (cm)", value: "84,0 cm", color: "#2788ff", points: [83, 83, 83, 83, 83, 83, 83, 84] },
  { label: "Quadril (cm)", value: "98,0 cm", color: "#8b4cf6", points: [99, 99, 100, 100, 100, 100, 100, 103] },
  { label: "Peito (cm)", value: "104,0 cm", color: "#ff7a1a", points: [95, 96, 96, 97, 97, 97, 97, 98] },
  { label: "Braço dir. (cm)", value: "34,0 cm", color: "#facc15", points: [63, 64, 64, 65, 65, 65, 65, 65] },
  { label: "Coxa dir. (cm)", value: "58,0 cm", color: "#ec4899", points: [56, 56, 56, 57, 57, 57, 57, 57] },
];

const measureHistory = [
  ["22 Mai 2024", "78,4", "84,0", "98,0", "104,0", "34,0", "58,0"],
  ["15 Mai 2024", "79,1", "85,0", "98,5", "103,5", "33,7", "58,5"],
  ["08 Mai 2024", "79,8", "86,0", "99,0", "103,0", "33,5", "59,0"],
  ["01 Mai 2024", "80,5", "87,5", "100,0", "103,0", "33,2", "59,0"],
];

function ProgressTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Visao geral");
  const title = activeTab ?? "Visao geral";

  if (active === "composicao-corporal") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <ProgressHelpAction />
          <ProgressFilters buttonLabel="Registrar medida" metricLabel="Todas as métricas" />
          <ProgressProofPanel variant="composition" />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">{bodyMetrics.map((metric) => <ProgressMetricCard key={metric.label} metric={metric} />)}</div>
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
            <LineChartPanel title="Evolução das métricas" series={compositionSeries} />
            <BodyCompositionCurrent />
          </div>
          <SectionCard title="Detalhamento da composição corporal">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">{compositionDetails.map((item) => <CompositionDetailCard key={item.label} item={item} />)}</div>
          </SectionCard>
        </div>
        <ProgressSidePanel variant="composition" />
      </div>
    );
  }

  if (active === "forca") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <ProgressHelpAction />
          <ProgressFilters buttonLabel="Registrar treino" metricLabel="Todos os exercícios" />
          <ProgressProofPanel variant="strength" />
          <div className="grid gap-4 md:grid-cols-4">{strengthMetrics.map((metric) => <ProgressMetricCard key={metric.label} metric={metric} />)}</div>
          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_300px]">
            <LineChartPanel title="Evolução da carga levantada (kg)" series={[{ label: "Carga levantada", value: "12.540 kg", color: "#b6ff00", points: [54, 61, 66, 72, 86, 91, 99, 108, 118, 121, 122, 125, 126] }]} filled />
            <MuscleVolumeCard />
          </div>
          <ExerciseProgressTable />
        </div>
        <ProgressSidePanel variant="strength" />
      </div>
    );
  }

  if (active === "medidas") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="space-y-5">
          <ProgressHelpAction />
          <ProgressFilters buttonLabel="Registrar medida" metricLabel="Todas as medidas" />
          <ProgressProofPanel variant="measures" />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">{measureMetrics.map((metric) => <ProgressMetricCard key={metric.label} metric={metric} />)}</div>
          <LineChartPanel title="Evolução das medidas" series={measureSeries} />
          <MeasuresHistoryTable />
        </div>
        <ProgressSidePanel variant="measures" />
      </div>
    );
  }

  if (active === "metas") {
    return <GoalsTab />;
  }

  if (["fotos", "analises"].includes(active)) {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <EmptyTabCard title={title} description="Esta area ja esta preparada com dados mockados para receber a integracao da API do app mobile." />
        <ProgressSidePanel />
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-5">
        <ProgressHelpAction />
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard icon="CalendarCheck" label="Peso atual" value="78,4 kg" trend="-2,1 kg" />
          <MetricCard icon="Dumbbell" label="Massa muscular" value="36,8 kg" trend="+1,4 kg" />
          <MetricCard icon="Activity" label="Gordura corporal" value="14,6%" trend="-1,8%" />
          <MetricCard icon="Target" label="Progresso" value="82%" detail="Meta atingida" />
        </div>
        <LineChartPanel title="Evolução geral" series={compositionSeries.slice(0, 3)} />
      </div>
      <ProgressSidePanel />
    </div>
  );
}

function ProgressHelpAction() {
  return null;
}

function ProgressFilters({ buttonLabel, metricLabel }: { buttonLabel: string; metricLabel: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-black/18"><ChevronRight className="h-4 w-4 rotate-180" /></button>
      <button className="inline-flex h-11 items-center gap-2 rounded-md border border-white/10 bg-black/18 px-3 font-semibold"><CalendarCheck className="h-4 w-4" />01 Mai - 22 Mai 2024</button>
      <button className="grid h-11 w-11 place-items-center rounded-md border border-white/10 bg-black/18"><ChevronRight className="h-4 w-4" /></button>
      <select className="h-11 min-w-[156px] rounded-md border border-white/10 bg-[#071113] px-3 text-sm outline-none"><option>{metricLabel}</option></select>
      <select className="h-11 min-w-[150px] rounded-md border border-white/10 bg-[#071113] px-3 text-sm outline-none"><option>Comparar período</option></select>
      <button className="ml-auto inline-flex h-11 items-center gap-2 rounded-md bg-limebrand px-4 font-bold text-black"><Plus className="h-4 w-4" />{buttonLabel}</button>
    </div>
  );
}

type ProgressProofVariant = "composition" | "strength" | "measures";

function ProgressProofPanel({ variant }: { variant: ProgressProofVariant }) {
  const content = {
    composition: {
      title: "Leitura corporal",
      badge: "Distribuição",
      summary: "A recomposição está positiva: gordura em queda, músculo em alta e peso descendo sem perda agressiva.",
      Icon: Target,
      tone: "border-limebrand/35 bg-limebrand/6",
      iconTone: "bg-limebrand/12 text-limebrand",
      items: [
        ["O que melhorou", "Gordura corporal caiu", "14,6%"],
        ["Quanto melhorou", "Menos gordura no período", "↓ 1,8%"],
        ["Próximo passo", "Manter proteína e registrar nova medida", "22 Mai"],
      ],
    },
    strength: {
      title: "Pulso de performance",
      badge: "Recordes",
      summary: "A força subiu com consistência: mais carga total, melhor volume semanal e novo pico no supino reto.",
      Icon: Trophy,
      tone: "border-purple-400/35 bg-purple-500/6",
      iconTone: "bg-purple-500/12 text-purple-300",
      items: [
        ["O que melhorou", "Carga levantada acumulada", "12.540 kg"],
        ["Quanto melhorou", "Evolução vs. período anterior", "↑ 15,6%"],
        ["Próximo passo", "Confirmar recordes com treino registrado", "Hoje"],
      ],
    },
    measures: {
      title: "Leitura de medidas",
      badge: "Comparação",
      summary: "As medidas mostram redução clara na cintura e controle do peso, com peito e braço evoluindo.",
      Icon: CalendarCheck,
      tone: "border-sky-400/35 bg-sky-500/6",
      iconTone: "bg-sky-500/12 text-sky-300",
      items: [
        ["O que melhorou", "Cintura reduziu com estabilidade", "84,0 cm"],
        ["Quanto melhorou", "Maior variação do período", "↓ 3,5 cm"],
        ["Próximo passo", "Repetir medição no mesmo horário", "7 dias"],
      ],
    },
  }[variant];
  const Icon = content.Icon;

  return (
    <section className={cn("grid gap-4 rounded-lg border p-4 shadow-card xl:grid-cols-[minmax(220px,.9fr)_minmax(0,1.7fr)_160px]", content.tone)}>
      <div className="flex items-start gap-4">
        <span className={cn("grid h-12 w-12 shrink-0 place-items-center rounded-md", content.iconTone)}><Icon className="h-6 w-6" /></span>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-bold">{content.title}</h2>
            <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-semibold text-white/70">{content.badge}</span>
          </div>
          <p className="mt-2 text-sm leading-6 text-white/68">{content.summary}</p>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {content.items.map(([label, text, value]) => (
          <div key={label} className="rounded-md border border-white/10 bg-black/18 p-3">
            <p className="text-xs uppercase text-white/46">{label}</p>
            <p className="mt-2 min-h-10 text-sm font-semibold leading-5 text-white/88">{text}</p>
            <p className="mt-2 text-xl font-black text-limebrand">{value}</p>
          </div>
        ))}
      </div>
      <ProgressProofVisual variant={variant} />
    </section>
  );
}

function ProgressProofVisual({ variant }: { variant: ProgressProofVariant }) {
  if (variant === "strength") {
    return (
      <div className="hidden h-full min-h-32 flex-col justify-center gap-2 xl:flex">
        {[78, 64, 92].map((width, index) => (
          <div key={index} className="h-3 rounded-full bg-white/10">
            <div className={cn("h-full rounded-full", index === 0 ? "bg-limebrand" : index === 1 ? "bg-sky-400" : "bg-orange-400")} style={{ width: `${width}%` }} />
          </div>
        ))}
        <p className="mt-2 text-center text-xs font-semibold text-white/54">força, volume e recorde</p>
      </div>
    );
  }

  if (variant === "measures") {
    return (
      <div className="hidden h-full min-h-32 flex-col justify-center gap-3 xl:flex">
        {["Cintura", "Quadril", "Peito"].map((label, index) => (
          <div key={label}>
            <div className="mb-1 flex justify-between text-xs text-white/54"><span>{label}</span><span>{["↓ 3,5", "↓ 2,0", "↑ 1,0"][index]} cm</span></div>
            <div className="h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-limebrand" style={{ width: `${[82, 58, 46][index]}%` }} /></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden place-items-center xl:grid">
      <div className="grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#b6ff00_0_47%,#ff7a1a_47%_61%,#2788ff_61%_83%,#64748b_83%_100%)]">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-[#071113] text-center">
          <b className="text-2xl">82%</b>
          <span className="-mt-5 text-[10px] text-white/54">meta</span>
        </div>
      </div>
    </div>
  );
}

function ProgressMetricCard({ metric }: { metric: { label: string; value: string; trend: string; Icon: LucideIcon; color: string } }) {
  const { Icon } = metric;
  return (
    <SectionCard className="p-4">
      <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-md bg-limebrand/8"><Icon className={cn("h-6 w-6", metric.color)} /></span><span className="text-sm font-semibold">{metric.label}</span></div>
      <p className="mt-3 text-2xl font-black">{metric.value}</p>
      <p className="mt-1 text-sm font-semibold text-limebrand">{metric.trend}</p>
    </SectionCard>
  );
}

function LineChartPanel({ title, series, filled = false }: { title: string; series: { label: string; value: string; color: string; points: number[] }[]; filled?: boolean }) {
  const width = 720;
  const height = 260;
  const all = series.flatMap((item) => item.points);
  const min = Math.min(...all) - 5;
  const max = Math.max(...all) + 5;
  const toPath = (points: number[]) => points.map((point, index) => {
    const x = 36 + (index * (width - 92)) / (points.length - 1);
    const y = 32 + ((max - point) / (max - min)) * (height - 70);
    return `${index ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
  const areaPath = filled ? `${toPath(series[0].points)} L ${width - 56} ${height - 36} L 36 ${height - 36} Z` : "";

  return (
    <SectionCard title={title}>
      <div className="mb-4 flex flex-wrap gap-4 text-sm">
        {series.map((item) => <span key={item.label}><i className="mr-2 inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />{item.label}</span>)}
      </div>
      <div>
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
          {[0, 1, 2, 3, 4].map((line) => <line key={line} x1="36" x2={width - 56} y1={32 + line * 42} y2={32 + line * 42} stroke="rgba(255,255,255,.08)" />)}
          {filled ? <path d={areaPath} fill="rgba(182,255,0,.16)" /> : null}
          {series.map((item) => (
            <g key={item.label}>
              <path d={toPath(item.points)} fill="none" stroke={item.color} strokeWidth="4" strokeLinecap="round" />
              {item.points.map((point, index) => {
                const x = 36 + (index * (width - 92)) / (item.points.length - 1);
                const y = 32 + ((max - point) / (max - min)) * (height - 70);
                return <circle key={`${item.label}-${index}`} cx={x} cy={y} r="4" fill={item.color} />;
              })}
              <text x={width - 46} y={32 + ((max - item.points.at(-1)!) / (max - min)) * (height - 70) + 4} fill={item.color} fontSize="14" fontWeight="700">{item.value}</text>
            </g>
          ))}
          {["01 Mai", "06 Mai", "11 Mai", "16 Mai", "22 Mai"].map((label, index) => <text key={label} x={36 + index * ((width - 92) / 4)} y={height - 12} fill="rgba(255,255,255,.75)" fontSize="14">{label}</text>)}
        </svg>
      </div>
    </SectionCard>
  );
}

function BodyCompositionCurrent() {
  return (
    <SectionCard title="Composição atual">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_150px]">
        <div className="min-w-0">
          <Image
            src="/images/dashboard/progress-body-composition.svg"
            alt="Ilustração corporal frontal e traseira com composição muscular e gordura"
            width={420}
            height={340}
            className="mx-auto h-64 w-full object-contain"
          />
        </div>
        <div className="min-w-0 space-y-3 text-xs">
          {compositionDetails.slice(0, 4).map((item) => <p key={item.label}><i className="mr-2 inline-block h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} /><b>{item.label}</b><span className="block pl-5 text-white/62">{item.sub} ({item.value})</span></p>)}
        </div>
      </div>
    </SectionCard>
  );
}

function CompositionDetailCard({ item }: { item: (typeof compositionDetails)[number] }) {
  return (
    <div className="rounded-md border border-white/10 bg-black/18 p-4 text-center">
      <h3 className="font-bold">{item.label}</h3>
      <div className="mx-auto mt-5 grid h-28 w-28 place-items-center rounded-full" style={{ background: `conic-gradient(${item.color} ${Number(item.value.replace(",", ".").replace("%", "")) * 3.6}deg, rgba(255,255,255,.14) 0deg)` }}>
        <div className="grid h-20 w-20 place-items-center rounded-full bg-[#071113]"><b className="text-xl">{item.value}</b></div>
      </div>
      <p className="mt-3 font-bold">{item.sub}</p>
      <div className="mx-auto mt-4 h-8 w-24 rounded-[50%] border-b-2" style={{ borderColor: item.color }} />
    </div>
  );
}

function MuscleVolumeCard() {
  const groups = [["Peito", "25%", "#b6ff00"], ["Costas", "23%", "#2788ff"], ["Pernas", "20%", "#6366f1"], ["Ombros", "12%", "#ff7a1a"], ["Bíceps", "10%", "#ec4899"], ["Tríceps", "10%", "#8b4cf6"]] as const;
  return (
    <SectionCard title="Grupos musculares">
      <p className="text-sm text-white/62">Volume de treino</p>
      <div className="mt-5 flex items-center gap-5">
        <div className="grid h-32 w-32 shrink-0 place-items-center rounded-full bg-[conic-gradient(#b6ff00_0_25%,#2788ff_25%_48%,#6366f1_48%_68%,#ff7a1a_68%_80%,#ec4899_80%_90%,#8b4cf6_90%_100%)]">
          <div className="grid h-22 w-22 place-items-center rounded-full bg-[#071113] text-center"><b className="text-xl">24.780</b><span className="-mt-6 text-xs">kg</span></div>
        </div>
        <div className="space-y-2 text-sm">{groups.map(([name, value, color]) => <p key={name} className="flex justify-between gap-4"><span><i className="mr-2 inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />{name}</span><b>{value}</b></p>)}</div>
      </div>
    </SectionCard>
  );
}

function ExerciseProgressTable() {
  return (
    <SectionCard title="Evolução dos principais exercícios" className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="min-w-[860px] w-full border-collapse">
          <thead className="text-left text-xs text-white/60"><tr>{["Exercício", "Melhor carga (1RM)", "Carga atual (1RM)", "Evolução", "Gráfico", ""].map((header) => <th key={header} className="px-5 py-4 font-medium">{header}</th>)}</tr></thead>
          <tbody>{strengthExercises.map((row) => <tr key={row.exercise} className="border-t border-white/8"><td className="px-5 py-3"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-limebrand/8 text-limebrand"><Dumbbell className="h-5 w-5" /></span><div><b>{row.exercise}</b><p className="text-sm text-white/54">{row.group}</p></div></div></td><td className="px-5 py-3">{row.best}</td><td className="px-5 py-3">{row.current}</td><td className="px-5 py-3 font-bold text-limebrand">{row.evolution}</td><td className="px-5 py-3"><MiniSparkline /></td><td className="px-5 py-3"><ChevronRight className="h-4 w-4" /></td></tr>)}</tbody>
        </table>
      </div>
      <button className="h-12 w-full border-t border-white/8 font-semibold text-limebrand">Ver todos os exercícios <ChevronRight className="ml-2 inline h-4 w-4" /></button>
    </SectionCard>
  );
}

function MiniSparkline() {
  return <svg viewBox="0 0 120 32" className="h-8 w-28"><path d="M4 25 L22 20 L40 19 L58 17 L76 15 L94 12 L116 7" fill="none" stroke="#b6ff00" strokeWidth="3" strokeLinecap="round" /></svg>;
}

function MeasuresHistoryTable() {
  return (
    <SectionCard title="Histórico de medidas" className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="min-w-[880px] w-full border-collapse">
          <thead className="text-left text-sm text-white/62"><tr>{["Data", "Peso (kg)", "Cintura (cm)", "Quadril (cm)", "Peito (cm)", "Braço dir. (cm)", "Coxa dir. (cm)", "Ações"].map((header) => <th key={header} className="px-5 py-4 font-medium">{header}</th>)}</tr></thead>
          <tbody>{measureHistory.map((row) => <tr key={row[0]} className="border-t border-white/8">{row.map((cell) => <td key={cell} className="px-5 py-4">{cell}</td>)}<td className="px-5 py-4"><MoreVertical className="h-4 w-4" /></td></tr>)}</tbody>
        </table>
      </div>
      <button className="h-12 w-full border-t border-white/8 font-semibold text-limebrand">Ver todas as medidas registradas <ChevronRight className="ml-2 inline h-4 w-4" /></button>
    </SectionCard>
  );
}

function ProgressSidePanel({ variant = "default" }: { variant?: "default" | "composition" | "strength" | "measures" }) {
  if (variant === "strength") {
    return <div className="space-y-5"><StrengthGaugeCard /><ProgressNextActionCard variant="strength" /><HighlightsCard /><RecordsCard /></div>;
  }
  if (variant === "measures") {
    return <div className="space-y-5"><MeasuresSummaryCard /><ProgressNextActionCard variant="measures" /><LatestMeasureCard /><ProgressTipsCard /><ContinueCard /></div>;
  }
  return <div className="space-y-5"><BodyCompositionSummaryCard /><ProgressNextActionCard variant="composition" /><GoalHighlightCard /><LatestMeasurementsCard /><BodyGoalsCard /></div>;
}

function ProgressNextActionCard({ variant }: { variant: ProgressProofVariant }) {
  const content = {
    composition: {
      title: "Próxima ação corporal",
      value: "Reavaliar em 7 dias",
      text: "Peso e gordura estão descendo juntos; mantenha o padrão e evite trocar a meta antes da próxima medição.",
      Icon: Target,
    },
    strength: {
      title: "Próximo treino-chave",
      value: "Supino reto",
      text: "O novo recorde pede confirmação: registre uma série pesada e compare com o 1RM atual.",
      Icon: Dumbbell,
    },
    measures: {
      title: "Próxima medição",
      value: "29 Mai - 08:30",
      text: "Repita cintura, quadril e peito no mesmo horário para manter a comparação limpa.",
      Icon: CalendarCheck,
    },
  }[variant];
  const Icon = content.Icon;

  return (
    <RightPanelCard title={content.title}>
      <div className="flex gap-4 rounded-md border border-limebrand/25 bg-limebrand/8 p-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-black/24 text-limebrand"><Icon className="h-5 w-5" /></span>
        <div>
          <p className="text-lg font-black text-limebrand">{content.value}</p>
          <p className="mt-2 text-sm leading-6 text-white/70">{content.text}</p>
        </div>
      </div>
    </RightPanelCard>
  );
}

function BodyCompositionSummaryCard() {
  return (
    <RightPanelCard title="Resumo de composição">
      <div className="flex items-center gap-6">
        <div className="grid h-36 w-36 shrink-0 place-items-center rounded-full bg-[conic-gradient(#b6ff00_0_47%,#ff7a1a_47%_61%,#2788ff_61%_83%,#64748b_83%_100%)]"><div className="grid h-24 w-24 place-items-center rounded-full bg-[#071113] text-center"><b className="text-3xl">78,4</b><span className="-mt-7 text-xs">kg</span></div></div>
        <div className="space-y-3 text-sm">{["Músculo 36,8 kg", "Gordura 14,6 kg", "Água 45,6 kg", "Outros 14,9 kg"].map((item) => <p key={item}>{item}</p>)}</div>
      </div>
    </RightPanelCard>
  );
}

function GoalHighlightCard() {
  return <RightPanelCard title="Você evoluiu nos últimos 30 dias!"><div className="rounded-md border border-limebrand/35 bg-limebrand/8 p-4"><b className="text-3xl text-limebrand">82%</b><p className="text-sm text-white/70">da sua meta atingida.</p></div></RightPanelCard>;
}

function LatestMeasurementsCard() {
  return <RightPanelCard title="Últimas medições" action={<span className="text-sm font-semibold text-limebrand">Ver todas</span>}>{[["22 Mai 2024", "78,4 kg", "14,6%", "Atual"], ["15 Mai 2024", "79,1 kg", "15,1%", ""], ["08 Mai 2024", "79,8 kg", "15,6%", ""], ["01 Mai 2024", "80,5 kg", "16,4%", ""]].map(([date, weight, fat, tag]) => <p key={date} className="flex items-center justify-between gap-3 border-b border-white/8 py-3 last:border-0"><span>{date}</span><b>{weight}</b><span>{fat}</span>{tag ? <StatusBadge>{tag}</StatusBadge> : null}</p>)}</RightPanelCard>;
}

function BodyGoalsCard() {
  return <RightPanelCard title="Metas corporais" action={<span className="text-sm font-semibold text-limebrand">Editar</span>}><div className="space-y-5"><InlineProgress label="Reduzir gordura para 12%" value={78} right="78%" /><InlineProgress label="Aumentar massa muscular" value={64} right="64%" /><InlineProgress label="Peso alvo: 75 kg" value={82} right="82%" /></div></RightPanelCard>;
}

function StrengthGaugeCard() {
  return (
    <RightPanelCard title="Seu índice de força">
      <div className="relative mx-auto h-44 w-64 max-w-full">
        <svg viewBox="0 0 260 170" className="h-full w-full">
          <path d="M 38 138 A 92 92 0 0 1 222 138" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="24" strokeLinecap="round" />
          <path d="M 38 138 A 92 92 0 0 1 190 70" fill="none" stroke="#b6ff00" strokeWidth="24" strokeLinecap="round" />
          <path d="M 190 70 A 92 92 0 0 1 222 138" fill="none" stroke="#ff7a1a" strokeWidth="24" strokeLinecap="round" />
        </svg>
        <div className="absolute inset-x-0 top-16 text-center">
          <b className="block text-5xl">78</b>
          <span className="text-sm text-white/74">de 100</span>
        </div>
      </div>
      <p className="mt-2 text-center text-sm leading-6 text-white/70">Bom trabalho! Você está mais forte do que <b className="text-xl text-limebrand">78%</b> dos usuários Noogym.</p>
    </RightPanelCard>
  );
}

function HighlightsCard() {
  return <RightPanelCard title="Destaques do período">{[["Novo recorde no supino reto", "92,5 kg (1RM)", Trophy], ["Maior volume semanal", "3.120 kg", Star], ["Sequência de treinos", "6 treinos", Flame]].map(([title, detail, Icon]) => <div key={title as string} className="flex items-center gap-4 border-b border-white/8 py-4 last:border-0"><span className="grid h-11 w-11 place-items-center rounded-full bg-limebrand/8 text-limebrand"><Icon className="h-6 w-6" /></span><div><p className="font-semibold">{title as string}</p><p className="text-sm text-white/62">{detail as string}</p></div><ChevronRight className="ml-auto h-4 w-4" /></div>)}</RightPanelCard>;
}

function RecordsCard() {
  return <RightPanelCard title="Seus recordes (1RM)" action={<span className="text-sm font-semibold text-limebrand">Ver todos</span>}>{[["Levantamento terra", "137,5 kg", "22 Mai 2024"], ["Agachamento livre", "112,5 kg", "20 Mai 2024"], ["Supino reto", "92,5 kg", "22 Mai 2024"], ["Desenvolvimento militar", "57,5 kg", "18 Mai 2024"], ["Rosca direta", "33,5 kg", "21 Mai 2024"]].map(([name, value, date]) => <p key={name} className="flex justify-between gap-3 border-b border-white/8 py-3 last:border-0"><span>{name}</span><b>{value}</b><span className="text-sm text-white/54">{date}</span></p>)}</RightPanelCard>;
}

function MeasuresSummaryCard() {
  return (
    <RightPanelCard title="Resumo das medidas">
      <div className="grid gap-4 md:grid-cols-[150px_1fr]">
        <Image
          src="/images/dashboard/progress-measures-summary.svg"
          alt="Ilustração corporal frontal e lateral com linhas de medidas"
          width={360}
          height={320}
          className="h-56 w-full object-contain"
        />
        <div className="space-y-3 text-sm">{measureMetrics.map((metric) => <p key={metric.label} className="flex justify-between gap-3"><span>{metric.label}</span><b>{metric.value}</b><span className="text-limebrand">{metric.trend}</span></p>)}</div>
      </div>
    </RightPanelCard>
  );
}

function LatestMeasureCard() {
  return <RightPanelCard title="Registro mais recente"><p className="font-semibold"><CalendarCheck className="mr-2 inline h-5 w-5" />22 Mai 2024 - 08:30</p><button className="mt-5 flex h-11 w-full items-center justify-between rounded-md border border-white/10 px-4">Ver registro completo <ChevronRight className="h-4 w-4" /></button></RightPanelCard>;
}

function ProgressTipsCard() {
  return <RightPanelCard title="Dicas">{["Meça sempre no mesmo horário do dia, preferencialmente em jejum.", "Utilize uma fita métrica e roupas leves para maior precisão.", "A consistência nas medições é essencial para acompanhar sua evolução."].map((tip) => <p key={tip} className="border-b border-white/8 py-3 text-sm text-white/72 last:border-0">{tip}</p>)}</RightPanelCard>;
}

function ContinueCard() {
  return <RightPanelCard title="Continue assim!"><div className="flex gap-4 rounded-md border border-limebrand/25 bg-limebrand/8 p-4"><Trophy className="h-10 w-10 text-limebrand" /><p className="text-sm text-white/72">Você está evoluindo. Pequenas mudanças hoje, grandes resultados amanhã.</p></div></RightPanelCard>;
}

const reportTrainingMetrics = [
  { label: "Total de treinos", value: "18", trend: "↑ 20% vs período anterior", Icon: CalendarCheck, color: "text-limebrand" },
  { label: "Tempo total", value: "12h 45m", trend: "↑ 18% vs período anterior", Icon: Clock, color: "text-sky-400" },
  { label: "Volume total", value: "24.780 kg", trend: "↑ 24% vs período anterior", Icon: Dumbbell, color: "text-purple-400" },
  { label: "Calorias estimadas", value: "8.620 kcal", trend: "↑ 16% vs período anterior", Icon: Flame, color: "text-orange-400" },
  { label: "Melhor sequência", value: "12 dias", trend: "Atual", Icon: Trophy, color: "text-yellow-300" },
];

const reportNutritionMetrics = [
  { label: "Calorias médias", value: "2.125 kcal", trend: "↑ 8% vs período anterior", Icon: Flame, color: "text-limebrand" },
  { label: "Proteína média", value: "142 g", trend: "↑ 6% vs período anterior", Icon: Dumbbell, color: "text-sky-400" },
  { label: "Carboidratos médios", value: "218 g", trend: "↓ 4% vs período anterior", Icon: Target, color: "text-orange-400" },
  { label: "Gorduras médias", value: "72 g", trend: "↓ 6% vs período anterior", Icon: Flame, color: "text-purple-400" },
  { label: "Aderência ao plano", value: "87%", trend: "↑ 10% vs período anterior", Icon: Target, color: "text-limebrand" },
];

const reportProgressMetrics = [
  { label: "Peso atual", value: "78,4 kg", trend: "↓ 2,1 kg", Icon: Target, color: "text-limebrand" },
  { label: "Gordura corporal", value: "16,8%", trend: "↓ 1,4%", Icon: User, color: "text-purple-400" },
  { label: "Massa muscular", value: "62,1 kg", trend: "↑ 1,6 kg", Icon: Dumbbell, color: "text-sky-400" },
  { label: "Perda de cintura", value: "3,5 cm", trend: "↓ 3,5 cm", Icon: Target, color: "text-orange-400" },
  { label: "Desempenho", value: "+12,4%", trend: "↑ 12,4%", Icon: Trophy, color: "text-limebrand" },
];

const reportHabitsMetrics = [
  { label: "Score de hábitos", value: "84%", trend: "↑ 9% vs período anterior", Icon: CheckCircle2, color: "text-limebrand" },
  { label: "Dias consistentes", value: "18", trend: "82% do período", Icon: CalendarCheck, color: "text-sky-400" },
  { label: "Hidratação média", value: "2,8 L", trend: "↑ 0,4 L por dia", Icon: Target, color: "text-cyan-300" },
  { label: "Rotina concluída", value: "76%", trend: "↑ 12% vs período anterior", Icon: Star, color: "text-purple-400" },
  { label: "Sequência atual", value: "9 dias", trend: "Melhor marca do mês", Icon: Flame, color: "text-orange-400" },
];

const reportSleepMetrics = [
  { label: "Sono médio", value: "7h 18m", trend: "↑ 42 min vs período anterior", Icon: Moon, color: "text-limebrand" },
  { label: "Qualidade média", value: "82%", trend: "↑ 8% vs período anterior", Icon: Star, color: "text-sky-400" },
  { label: "Recuperação", value: "78%", trend: "Pronto para treinar", Icon: Heart, color: "text-purple-400" },
  { label: "Consistência", value: "16 dias", trend: "73% do período", Icon: CalendarCheck, color: "text-orange-400" },
  { label: "Débito de sono", value: "3h 20m", trend: "↓ 1h 10m", Icon: Clock, color: "text-limebrand" },
];

const reportEvaluationMetrics = [
  { label: "Avaliações", value: "4", trend: "2 profissionais", Icon: CheckCircle2, color: "text-limebrand" },
  { label: "Score físico", value: "82%", trend: "↑ 11% vs primeira avaliação", Icon: Trophy, color: "text-sky-400" },
  { label: "Risco postural", value: "Baixo", trend: "Melhora em ombros", Icon: Shield, color: "text-purple-400" },
  { label: "Metas validadas", value: "6/8", trend: "75% concluídas", Icon: Target, color: "text-orange-400" },
  { label: "Próxima revisão", value: "05 Jun", trend: "Agendada", Icon: CalendarCheck, color: "text-limebrand" },
];

const weeklyTrainingBars = [
  ["22 Abr - 28 Abr", 6],
  ["29 Abr - 05 Mai", 4],
  ["06 Mai - 12 Mai", 5],
  ["13 Mai - 19 Mai", 7],
  ["20 Mai - 22 Mai", 6],
] as const;

const trainingRows = [
  ["22 Mai 2024", "Push - Peito e Ombros", "48 min", "1.842 kg", "7", "612 kcal"],
  ["20 Mai 2024", "Pull - Costas e Bíceps", "45 min", "1.612 kg", "8", "598 kcal"],
  ["18 Mai 2024", "Pernas", "50 min", "2.430 kg", "9", "721 kcal"],
  ["16 Mai 2024", "Push - Peito e Tríceps", "41 min", "1.520 kg", "7", "540 kcal"],
  ["14 Mai 2024", "Pull - Costas e Bíceps", "44 min", "1.650 kg", "8", "585 kcal"],
];

const nutrientRows = [
  ["Calorias", "2.125 kcal", "2.100 kcal", 101, "bg-limebrand"],
  ["Proteínas", "142 g", "140 g", 101, "bg-limebrand"],
  ["Carboidratos", "218 g", "230 g", 95, "bg-orange-400"],
  ["Gorduras", "72 g", "70 g", 103, "bg-limebrand"],
  ["Fibras", "24 g", "25 g", 96, "bg-orange-400"],
  ["Sódio", "1.980 mg", "2.000 mg", 99, "bg-limebrand"],
] as const;

const habitRows = [
  ["Treino planejado", "16/18", 89, "bg-limebrand"],
  ["Água registrada", "19/22", 86, "bg-sky-400"],
  ["Refeições no horário", "17/22", 77, "bg-orange-400"],
  ["Sono mínimo", "16/22", 73, "bg-purple-400"],
  ["Check-in diário", "18/22", 82, "bg-limebrand"],
] as const;

const evaluationRows = [
  ["22 Mai 2024", "Avaliação física completa", "82%", "Peso, medidas, postura", "Concluída"],
  ["08 Mai 2024", "Bioimpedância", "78%", "Composição corporal", "Concluída"],
  ["01 Mai 2024", "Revisão postural", "74%", "Ombros e quadril", "Concluída"],
  ["22 Abr 2024", "Avaliação inicial", "71%", "Baseline do plano", "Referência"],
] as const;

function ReportsTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Visao geral");

  if (active === "treinos") return <TrainingReportsView />;
  if (active === "nutricao") return <NutritionReportsView />;
  if (active === "progresso") return <ProgressReportsView />;
  if (active === "habitos") return <HabitsReportsView />;
  if (active === "sono") return <SleepReportsView />;
  if (active === "avaliacoes") return <EvaluationsReportsView />;

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard icon="Dumbbell" label="Treinos" value="18" trend="+20%" />
          <MetricCard icon="Activity" label="Calorias" value="4.250 kcal" trend="+18%" />
          <MetricCard icon="CalendarCheck" label="Check-ins" value="12" trend="+20%" />
          <MetricCard icon="Target" label="Desempenho" value="72%" detail={activeTab ?? "Visão geral"} />
        </div>
        <SectionCard title="Relatório geral">
          <DataTable headers={["Categoria", "Total", "Média diária", "Melhor dia", "Evolução"]} rows={["Treinos", "Nutrição", "Progresso", "Hábitos"].map((item, index) => [item, String([18, 2125, 82, 7][index]), String([0.86, 202, 72, 1][index]), "22 Mai 2024", <InlineProgress key="progress" label="" value={[72, 87, 82, 70][index]} />])} />
        </SectionCard>
      </div>
      <div className="space-y-5">
        <RightPanelCard title="Relatórios disponíveis">{["Relatório completo (PDF)", "Relatório de treinos", "Relatório de nutrição", "Comparativo mensal"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0"><Download className="mr-2 inline h-4 w-4 text-limebrand" />{item}</p>)}</RightPanelCard>
        <TipPanel title="Insight do período" items={["Sua consistência está acima da média.", "Treinos e alimentação seguem sincronizados.", "Continue acompanhando seus indicadores."]} />
      </div>
    </div>
  );
}

function ReportMetricCard({ metric }: { metric: { label: string; value: string; trend: string; Icon: LucideIcon; color: string } }) {
  const Icon = metric.Icon;
  return (
    <div className="min-w-0 rounded-lg border border-white/10 bg-panel p-4 shadow-card sm:p-5">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-current bg-current/10"><Icon className={cn("h-6 w-6", metric.color)} /></span>
        <div className="min-w-0">
          <p className="text-sm text-white/78">{metric.label}</p>
          <p className="mt-2 break-words text-2xl font-black xl:text-3xl">{metric.value}</p>
          <p className="mt-2 text-sm text-limebrand">{metric.trend}</p>
        </div>
      </div>
    </div>
  );
}

function ReportChartCard({ title, action, children }: { title: string; action?: ReactNode; children: ReactNode }) {
  const chartAction = action === null ? null : <span className="hidden sm:block">{action ?? <ReportSelect />}</span>;
  return (
    <SectionCard title={title} action={chartAction} className="overflow-hidden">
      {children}
    </SectionCard>
  );
}

function ReportSelect() {
  return <button className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/76">Por semana</button>;
}

function ReportInsightBanner({ text }: { text: string }) {
  return (
    <section className="flex flex-wrap items-center gap-4 rounded-lg border border-limebrand/30 bg-limebrand/8 p-4 shadow-card sm:p-5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-limebrand/60 text-limebrand"><Trophy className="h-6 w-6" /></span>
      <div className="min-w-0 flex-[1_1_240px]">
        <h2 className="font-bold text-limebrand">Insights do período</h2>
        <p className="mt-1 text-sm text-white/70">{text}</p>
      </div>
      <button className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-limebrand/70 px-5 font-bold text-limebrand sm:w-auto">Ver análise completa <ChevronRight className="h-4 w-4 shrink-0" /></button>
    </section>
  );
}

function ReportBarChart({ data }: { data: readonly (readonly [string, number])[] }) {
  const max = Math.max(...data.map(([, value]) => value));
  return (
    <div className="min-w-0 max-w-full overflow-x-auto pb-1">
      <div className="flex h-56 w-full min-w-0 items-end gap-2 border-b border-white/10 px-1 pt-4 sm:gap-6 sm:px-5">
        {data.map(([label, value]) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-2">
            <span className="text-sm font-black text-limebrand">{value}</span>
            <div className="w-full rounded-t bg-gradient-to-t from-limebrand/65 to-limebrand shadow-[0_0_24px_rgba(182,255,0,.22)]" style={{ height: `${42 + (value / max) * 128}px` }} />
            <span className="min-h-10 text-center text-xs text-white/62">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportLineChart({ points, labels, color = "#b6ff00", valueLabel, filled = true }: { points: number[]; labels: string[]; color?: string; valueLabel?: string; filled?: boolean }) {
  const width = 640;
  const height = 220;
  const min = Math.min(...points) - 4;
  const max = Math.max(...points) + 4;
  const coords = points.map((point, index) => {
    const x = 28 + (index * (width - 72)) / (points.length - 1);
    const y = 28 + ((max - point) / (max - min)) * (height - 62);
    return [x, y] as const;
  });
  const path = coords.map(([x, y], index) => `${index ? "L" : "M"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${path} L ${coords.at(-1)![0]} ${height - 34} L ${coords[0][0]} ${height - 34} Z`;

  return (
    <div className="min-w-0 max-w-full overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-64 w-full min-w-0">
      {[0, 1, 2, 3].map((line) => <line key={line} x1="28" x2={width - 36} y1={32 + line * 40} y2={32 + line * 40} stroke="rgba(255,255,255,.08)" />)}
      {filled ? <path d={area} fill={color} opacity=".15" /> : null}
      <path d={path} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {coords.map(([x, y], index) => <circle key={index} cx={x} cy={y} r="4" fill={color} />)}
      {valueLabel ? <text x={width - 86} y={coords.at(-1)![1] - 8} fill="#071113" fontSize="14" fontWeight="800"><tspan>{valueLabel}</tspan></text> : null}
      {labels.map((label, index) => <text key={label} x={28 + index * ((width - 72) / (labels.length - 1))} y={height - 10} fill="rgba(255,255,255,.7)" fontSize="12">{label}</text>)}
      </svg>
    </div>
  );
}

function ReportDonut({ center, sub, items, conic }: { center: string; sub?: string; items: { label: string; value: string; color: string }[]; conic: string }) {
  return (
    <div className="flex min-w-0 flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-8">
      <div className="grid h-36 w-36 shrink-0 place-items-center rounded-full sm:h-44 sm:w-44" style={{ background: conic }}>
        <div className="grid h-24 w-24 place-items-center rounded-full bg-[#071113] text-center sm:h-28 sm:w-28">
          <div><b className="text-3xl">{center}</b>{sub ? <p className="text-sm text-white/62">{sub}</p> : null}</div>
        </div>
      </div>
      <div className="grid w-full min-w-0 grid-cols-1 gap-3 text-sm min-[420px]:grid-cols-2 sm:w-auto sm:min-w-44 sm:space-y-3">{items.map((item) => <p key={item.label} className="flex min-w-0 gap-3"><i className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: item.color }} /><span className="min-w-0">{item.label}<br /><b className="break-words text-white/70">{item.value}</b></span></p>)}</div>
    </div>
  );
}

function TrainingReportsView() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{reportTrainingMetrics.map((metric) => <ReportMetricCard key={metric.label} metric={metric} />)}</div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,.95fr)_360px]">
        <ReportChartCard title="Número de treinos por semana"><ReportBarChart data={weeklyTrainingBars} /></ReportChartCard>
        <ReportChartCard title="Distribuição dos treinos por grupo muscular" action={null}>
          <ReportDonut center="18" sub="treinos" conic="conic-gradient(#2788ff 0 20%, #79c742 20% 38%, #8b4cf6 38% 60%, #ff7a1a 60% 72%, #facc15 72% 86%, #2dd4bf 86% 94%, #64748b 94% 100%)" items={[
            { label: "Peito", value: "20% (18)", color: "#2788ff" },
            { label: "Costas", value: "18% (16)", color: "#79c742" },
            { label: "Pernas", value: "22% (20)", color: "#8b4cf6" },
            { label: "Ombros", value: "12% (11)", color: "#ff7a1a" },
            { label: "Braços", value: "14% (13)", color: "#facc15" },
            { label: "Abdômen", value: "8% (7)", color: "#2dd4bf" },
          ]} />
        </ReportChartCard>
        <TrainingReportSidebar />
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,.85fr)_360px]">
        <ReportTableCard />
        <ReportChartCard title="Volume de treino (kg)">
          <ReportLineChart points={[9850, 7420, 10650, 13480, 10480]} labels={["22 Abr - 28 Abr", "29 Abr - 05 Mai", "06 Mai - 12 Mai", "13 Mai - 19 Mai", "20 Mai - 22 Mai"]} valueLabel="10.480" />
        </ReportChartCard>
        <BestMarksCard />
      </div>
      <ReportInsightBanner text="Você aumentou seu volume total em 24% e sua consistência melhorou. Continue assim para alcançar seus objetivos." />
    </div>
  );
}

function TrainingReportSidebar() {
  return (
    <div className="space-y-5">
      <RightPanelCard title="Resumo do período">
        {[
          ["Dias treinados", "16 dias", "73% do período"],
          ["Dias de descanso", "6 dias", "27% do período"],
          ["Média de treinos/semana", "5,4", "↑ 20%"],
          ["Duração média", "42 min", "↑ 6 min"],
          ["Volume médio/treino", "1.376 kg", "↑ 12%"],
        ].map(([label, value, trend]) => <p key={label} className="flex justify-between gap-3 border-b border-white/8 py-3 last:border-0"><span>{label}</span><span className="text-right"><b>{value}</b><br /><small className="text-limebrand">{trend}</small></span></p>)}
      </RightPanelCard>
    </div>
  );
}

function ReportTableCard() {
  return (
    <SectionCard title="Últimos treinos" className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full border-collapse">
          <thead className="text-left text-sm text-white/58"><tr>{["Data", "Treino", "Duração", "Volume", "Exercícios", "Calorias", ""].map((header) => <th key={header} className="px-5 py-4 font-medium">{header}</th>)}</tr></thead>
          <tbody>{trainingRows.map((row) => <tr key={`${row[0]}-${row[1]}`} className="border-t border-white/8">{row.map((cell) => <td key={cell} className="px-5 py-4 text-sm">{cell}</td>)}<td className="px-5 py-4"><ChevronRight className="h-4 w-4 text-white/60" /></td></tr>)}</tbody>
        </table>
      </div>
      <button className="h-12 w-full border-t border-white/8 font-semibold text-limebrand">Ver todos os treinos <ChevronRight className="ml-2 inline h-4 w-4" /></button>
    </SectionCard>
  );
}

function BestMarksCard() {
  return (
    <RightPanelCard title="Melhores marcas">
      {[
        ["Maior volume em um treino", "2.840 kg", "08 Mai 2024", Dumbbell],
        ["Maior duração de treino", "62 min", "10 Mai 2024", Clock],
        ["Mais exercícios em um treino", "11 exercícios", "08 Mai 2024", CalendarCheck],
        ["Maior sequência de treinos", "12 dias", "Atual", Trophy],
      ].map(([title, value, date, Icon]) => <div key={title as string} className="flex gap-4 border-b border-white/8 py-4 last:border-0"><span className="grid h-11 w-11 place-items-center rounded-full border border-limebrand/30 text-limebrand"><Icon className="h-5 w-5" /></span><p className="flex-1 text-sm">{title as string}<br /><b className="text-base">{value as string}</b><br /><small className="text-white/52">{date as string}</small></p></div>)}
    </RightPanelCard>
  );
}

function NutritionReportsView() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{reportNutritionMetrics.map((metric) => <ReportMetricCard key={metric.label} metric={metric} />)}</div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)_360px]">
        <ReportChartCard title="Evolução das calorias (kcal)" action={<button className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm">Por dia</button>}>
          <ReportLineChart points={[2020, 1740, 2125, 2420, 1880, 1700, 2190, 2105, 2410, 1840, 1720, 2150, 2390, 1920, 1980, 2125, 2380]} labels={["01 Mai", "06 Mai", "11 Mai", "16 Mai", "22 Mai"]} valueLabel="2.125 kcal" />
        </ReportChartCard>
        <ReportChartCard title="Distribuição de macronutrientes" action={null}>
          <ReportDonut center="2.125" sub="kcal" conic="conic-gradient(#2788ff 0 27%, #ff7a1a 27% 68%, #8b4cf6 68% 83%, #64748b 83% 100%)" items={[
            { label: "Proteínas", value: "142 g (27%)", color: "#2788ff" },
            { label: "Carboidratos", value: "218 g (41%)", color: "#ff7a1a" },
            { label: "Gorduras", value: "72 g (15%)", color: "#8b4cf6" },
            { label: "Outros", value: "48 g (9%)", color: "#64748b" },
          ]} />
        </ReportChartCard>
        <NutritionSummaryCard />
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,.7fr)_minmax(0,.95fr)]">
        <NutrientsAverageCard />
        <AdherenceCard />
        <FrequentMealsCard />
      </div>
      <ReportInsightBanner text="Você manteve uma ótima consistência! Sua ingestão de proteínas aumentou 6% e a aderência ao plano melhorou 10%." />
    </div>
  );
}

function NutritionSummaryCard() {
  return (
    <RightPanelCard title="Resumo do período">
      {[
        ["Dias registrados", "18 de 22", "82%"],
        ["Calorias totais", "38.250 kcal", "↑ 8%"],
        ["Média de refeições/dia", "4,2", "↑ 5%"],
        ["Melhor dia", "1.980 kcal", "16 Mai 2024"],
        ["Maior consumo de proteína", "162 g", "10 Mai 2024"],
      ].map(([label, value, detail]) => <p key={label} className="flex justify-between gap-3 border-b border-white/8 py-3 last:border-0"><span>{label}</span><span className="text-right"><b>{value}</b><br /><small className="text-limebrand">{detail}</small></span></p>)}
    </RightPanelCard>
  );
}

function NutrientsAverageCard() {
  return (
    <SectionCard title="Média de nutrientes por dia" className="overflow-x-auto">
      <div className="grid min-w-[520px] grid-cols-[1fr_1fr_1fr_1.3fr] gap-3 text-sm">
        {["Nutriente", "Média", "Meta", "Aderência"].map((header) => <b key={header} className="text-white/58">{header}</b>)}
        {nutrientRows.map(([nutrient, average, target, value, color]) => (
          <div key={nutrient} className="contents">
            <span>{nutrient}</span><span>{average}</span><span>{target}</span>
            <span className="flex items-center gap-3"><i className="h-2 flex-1 rounded-full bg-white/12"><i className={cn("block h-full rounded-full", color)} style={{ width: `${Math.min(value, 100)}%` }} /></i>{value}%</span>
          </div>
        ))}
      </div>
      <button className="mt-5 h-10 w-full border-t border-white/8 pt-3 font-semibold text-limebrand">Ver relatório completo de nutrientes <ChevronRight className="ml-2 inline h-4 w-4" /></button>
    </SectionCard>
  );
}

function AdherenceCard() {
  return (
    <SectionCard title="Aderência ao plano alimentar">
      <div className="grid gap-5 md:grid-cols-[160px_1fr] md:items-center">
        <div className="grid h-36 w-36 place-items-center rounded-full bg-[conic-gradient(#b6ff00_0_87%,rgba(255,255,255,.13)_87%_100%)]"><div className="grid h-24 w-24 place-items-center rounded-full bg-[#071113]"><b className="text-3xl">87%</b></div></div>
        <div className="space-y-3 text-sm">{[["Dias com boa aderência", "16 dias", "↑ 10%"], ["Dias com baixa aderência", "2 dias", "↓ 33%"], ["Dias não registrados", "4 dias", "—"]].map(([label, value, trend]) => <p key={label} className="border-b border-white/8 pb-3 last:border-0"><span>{label}</span><br /><b className="text-lg">{value}</b> <small className="text-limebrand">{trend}</small></p>)}</div>
      </div>
    </SectionCard>
  );
}

function FrequentMealsCard() {
  const meals = [["Frango grelhado com arroz", 12, "bg-limebrand"], ["Omelete com ovos", 9, "bg-limebrand"], ["Shake de proteínas", 8, "bg-limebrand"], ["Aveia com frutas", 7, "bg-yellow-300"], ["Batata doce com frango", 6, "bg-orange-400"]] as const;
  return (
    <SectionCard title="Refeições mais consumidas" action={<span className="text-sm font-semibold text-limebrand">Ver todas</span>}>
      <div className="space-y-4">{meals.map(([meal, count, color]) => <div key={meal} className="grid grid-cols-[1fr_32px] items-center gap-3"><span className="text-sm">{meal}</span><b>{count}x</b><i className="col-span-2 h-2 rounded-full bg-white/10"><i className={cn("block h-full rounded-full", color)} style={{ width: `${count * 8}%` }} /></i></div>)}</div>
      <button className="mt-5 h-10 w-full border-t border-white/8 pt-3 font-semibold text-limebrand">Ver relatório de refeições <ChevronRight className="ml-2 inline h-4 w-4" /></button>
    </SectionCard>
  );
}

function ProgressReportsView() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{reportProgressMetrics.map((metric) => <ReportMetricCard key={metric.label} metric={metric} />)}</div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,.9fr)_360px]">
        <ReportChartCard title="Evolução do peso (kg)" action={<button className="rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm">Por dia</button>}><ReportLineChart points={[82.2, 81.7, 81.1, 80.7, 80.2, 79.8, 79.5, 79.0, 78.7, 78.4]} labels={["01 Mai", "06 Mai", "11 Mai", "16 Mai", "22 Mai"]} valueLabel="78,4 kg" /></ReportChartCard>
        <ReportChartCard title="Composição corporal">
          <StackedCompositionBars />
        </ReportChartCard>
        <ProgressHighlightsCard />
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,.9fr)_360px]">
        <ReportChartCard title="Evolução das medidas (cm)"><MultiMeasureChart /></ReportChartCard>
        <ReportChartCard title="Evolução da força (carga total levantada)"><ReportLineChart points={[14800, 19100, 21900, 22400, 24780]} labels={["22 Abr - 28 Abr", "29 Abr - 05 Mai", "06 Mai - 12 Mai", "13 Mai - 19 Mai", "20 Mai"]} valueLabel="24.780 kg" /></ReportChartCard>
        <PhotoCompareCard />
      </div>
      <ReportInsightBanner text="Você está evoluindo muito bem! Sua consistência nos treinos e na alimentação está trazendo excelentes resultados." />
    </div>
  );
}

function StackedCompositionBars() {
  const weeks = ["22 Abr - 28 Abr", "29 Abr - 05 Mai", "06 Mai - 12 Mai", "13 Mai - 19 Mai", "20 Mai"];
  return (
    <div className="min-w-0 overflow-hidden">
      <div className="flex h-56 min-w-0 items-end justify-center gap-4 border-b border-white/10">
        {weeks.map((week, index) => <div key={week} className="flex min-w-0 flex-1 flex-col items-center gap-2"><div className="flex h-40 w-8 flex-col-reverse overflow-hidden rounded-t bg-white/10"><i className="bg-slate-500" style={{ height: "7%" }} /><i className="bg-teal-400" style={{ height: "28%" }} /><i className="bg-sky-500" style={{ height: `${48 - index}%` }} /><i className="bg-purple-500" style={{ height: `${17 - index * 0.3}%` }} /></div><span className="min-h-10 text-center text-[10px] leading-4 text-white/58">{week}</span></div>)}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">{[["Gordura", "16,8%", "#8b4cf6"], ["Músculo", "48,2%", "#2788ff"], ["Água", "28,1%", "#2dd4bf"], ["Outros", "6,9%", "#64748b"]].map(([label, value, color]) => <p key={label} className="min-w-0"><i className="mr-2 inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: color }} />{label} <b className="text-white/62">{value}</b></p>)}</div>
    </div>
  );
}

function MultiMeasureChart() {
  return <ReportLineChart points={[104, 104, 104, 104, 104, 84, 84, 84, 98, 98, 58, 58, 34, 34]} labels={["22 Abr - 28 Abr", "29 Abr - 05 Mai", "06 Mai - 12 Mai", "13 Mai - 19 Mai", "20 Mai"]} color="#2788ff" filled={false} valueLabel="104,0" />;
}

function ProgressHighlightsCard() {
  return (
    <RightPanelCard title="Destaques do período">
      {[
        ["Você perdeu 2,1 kg", "Ótimo trabalho! Continue assim.", Target],
        ["Redução de 1,4% na gordura corporal", "Seu corpo está mais definido.", Dumbbell],
        ["Aumento de 1,6 kg na massa muscular", "Força e consistência geram resultados.", Star],
        ["Cintura reduzida em 3,5 cm", "Excelente progresso!", Trophy],
      ].map(([title, detail, Icon]) => <div key={title as string} className="flex gap-4 border-b border-white/8 py-4 last:border-0"><span className="grid h-11 w-11 place-items-center rounded-full border border-limebrand/30 text-limebrand"><Icon className="h-5 w-5" /></span><p className="text-sm"><b>{title as string}</b><br /><span className="text-white/62">{detail as string}</span></p></div>)}
      <button className="mt-2 h-10 w-full rounded-md border border-white/10 font-semibold text-limebrand">Ver todas as conquistas <ChevronRight className="ml-2 inline h-4 w-4" /></button>
    </RightPanelCard>
  );
}

function PhotoCompareCard() {
  return (
    <RightPanelCard title="Comparativo de fotos" action={<span className="text-sm font-semibold text-limebrand">Ver todas</span>}>
      <div className="grid grid-cols-[1fr_36px_1fr] items-center gap-3">
        {["22 Abr 2024", ""].map((date, index) => index === 1 ? <span key="arrow" className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-black/30"><ChevronRight className="h-5 w-5" /></span> : <div key={date} className="overflow-hidden rounded-md border border-white/10 bg-white/[0.03]"><p className="py-2 text-center text-xs text-white/70">{date}</p><Image src="/images/dashboard/avatar-miguel.png" alt={date} width={160} height={160} className="mx-auto h-36 w-full object-cover object-top opacity-85" /></div>)}
        <div className="overflow-hidden rounded-md border border-white/10 bg-white/[0.03]"><p className="py-2 text-center text-xs text-white/70">22 Mai 2024</p><Image src="/images/dashboard/avatar-miguel.png" alt="22 Mai 2024" width={160} height={160} className="mx-auto h-36 w-full object-cover object-top" /></div>
      </div>
      <p className="mt-4 text-sm text-white/58"><Lock className="mr-2 inline h-4 w-4" />Fotos privadas. Visíveis apenas para você.</p>
    </RightPanelCard>
  );
}

function HabitsReportsView() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{reportHabitsMetrics.map((metric) => <ReportMetricCard key={metric.label} metric={metric} />)}</div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)_360px]">
        <ReportChartCard title="Consistência semanal"><ReportBarChart data={[["22 Abr - 28 Abr", 5], ["29 Abr - 05 Mai", 6], ["06 Mai - 12 Mai", 4], ["13 Mai - 19 Mai", 7], ["20 Mai - 22 Mai", 6]]} /></ReportChartCard>
        <ReportChartCard title="Distribuição dos hábitos" action={null}>
          <ReportDonut center="84%" sub="score" conic="conic-gradient(#b6ff00 0 34%, #2788ff 34% 56%, #ff7a1a 56% 74%, #8b4cf6 74% 88%, #64748b 88% 100%)" items={[
            { label: "Treinos", value: "34% concluídos", color: "#b6ff00" },
            { label: "Hidratação", value: "22% do score", color: "#2788ff" },
            { label: "Refeições", value: "18% do score", color: "#ff7a1a" },
            { label: "Sono", value: "14% do score", color: "#8b4cf6" },
            { label: "Outros", value: "12% do score", color: "#64748b" },
          ]} />
        </ReportChartCard>
        <HabitsSummaryCard />
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,.85fr)_360px]">
        <HabitChecklistCard />
        <ReportChartCard title="Impacto na performance">
          <ReportLineChart points={[68, 72, 70, 76, 79, 84]} labels={["01 Mai", "06 Mai", "11 Mai", "16 Mai", "20 Mai", "22 Mai"]} valueLabel="84%" />
        </ReportChartCard>
        <HabitStreakCard />
      </div>
      <ReportInsightBanner text="Sua rotina ficou mais consistente nos últimos 22 dias. Hidratação e sono estão ajudando diretamente na recuperação e nos treinos." />
    </div>
  );
}

function HabitsSummaryCard() {
  return (
    <RightPanelCard title="Resumo do período">
      {[["Hábitos registrados", "96", "↑ 18%"], ["Dias completos", "18 de 22", "82%"], ["Melhor hábito", "Treino planejado", "89%"], ["Hábito em atenção", "Sono mínimo", "73%"], ["Maior sequência", "9 dias", "Atual"]].map(([label, value, detail]) => <p key={label} className="flex justify-between gap-3 border-b border-white/8 py-3 last:border-0"><span>{label}</span><span className="text-right"><b>{value}</b><br /><small className="text-limebrand">{detail}</small></span></p>)}
    </RightPanelCard>
  );
}

function HabitChecklistCard() {
  return (
    <SectionCard title="Hábitos acompanhados">
      <div className="space-y-4">
        {habitRows.map(([habit, count, value, color]) => (
          <div key={habit} className="grid gap-2 text-sm">
            <div className="flex justify-between gap-3"><span>{habit}</span><b>{count}</b></div>
            <div className="h-2 rounded-full bg-white/10"><i className={cn("block h-full rounded-full", color)} style={{ width: `${value}%` }} /></div>
          </div>
        ))}
      </div>
      <button className="mt-5 h-10 w-full border-t border-white/8 pt-3 font-semibold text-limebrand">Ver rotina completa <ChevronRight className="ml-2 inline h-4 w-4" /></button>
    </SectionCard>
  );
}

function HabitStreakCard() {
  return (
    <RightPanelCard title="Sequências e alertas">
      {[["9 dias", "Rotina matinal completa", Flame], ["6 dias", "Água acima da meta", Target], ["3 dias", "Refeições fora do horário", Clock], ["Hoje", "Registrar sono antes das 23h", Moon]].map(([value, label, Icon]) => <div key={label as string} className="flex gap-4 border-b border-white/8 py-4 last:border-0"><span className="grid h-11 w-11 place-items-center rounded-full border border-limebrand/30 text-limebrand"><Icon className="h-5 w-5" /></span><p className="text-sm"><b>{value as string}</b><br /><span className="text-white/62">{label as string}</span></p></div>)}
    </RightPanelCard>
  );
}

function SleepReportsView() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{reportSleepMetrics.map((metric) => <ReportMetricCard key={metric.label} metric={metric} />)}</div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)_360px]">
        <ReportChartCard title="Evolução do sono">
          <ReportLineChart points={[6.4, 6.9, 7.1, 6.6, 7.4, 7.2, 7.3]} labels={["01 Mai", "04 Mai", "08 Mai", "12 Mai", "16 Mai", "20 Mai", "22 Mai"]} valueLabel="7h18m" />
        </ReportChartCard>
        <ReportChartCard title="Qualidade do sono" action={null}>
          <ReportDonut center="82%" sub="qualidade" conic="conic-gradient(#b6ff00 0 82%, rgba(255,255,255,.14) 82% 100%)" items={[
            { label: "Sono profundo", value: "2h 10m", color: "#b6ff00" },
            { label: "Sono leve", value: "4h 05m", color: "#2788ff" },
            { label: "REM", value: "1h 03m", color: "#8b4cf6" },
            { label: "Acordado", value: "18 min", color: "#ff7a1a" },
          ]} />
        </ReportChartCard>
        <SleepSummaryCard />
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,.85fr)_360px]">
        <SleepRoutineCard />
        <ReportChartCard title="Sono x desempenho">
          <ReportLineChart points={[72, 74, 71, 78, 80, 82, 86]} labels={["01 Mai", "04 Mai", "08 Mai", "12 Mai", "16 Mai", "20 Mai", "22 Mai"]} color="#2788ff" valueLabel="86%" />
        </ReportChartCard>
        <SleepRecommendationsCard />
      </div>
      <ReportInsightBanner text="Seu desempenho subiu quando a média de sono passou de 7 horas. Manter horários consistentes deve melhorar ainda mais a recuperação." />
    </div>
  );
}

function SleepSummaryCard() {
  return (
    <RightPanelCard title="Resumo do período">
      {[["Noites registradas", "19 de 22", "86%"], ["Média para dormir", "23:18", "18 min mais cedo"], ["Média ao acordar", "06:36", "Consistente"], ["Melhor noite", "8h 02m", "16 Mai 2024"], ["Pior noite", "5h 48m", "08 Mai 2024"]].map(([label, value, detail]) => <p key={label} className="flex justify-between gap-3 border-b border-white/8 py-3 last:border-0"><span>{label}</span><span className="text-right"><b>{value}</b><br /><small className="text-limebrand">{detail}</small></span></p>)}
    </RightPanelCard>
  );
}

function SleepRoutineCard() {
  const rows = [["Dormiu antes das 23h", 68], ["Acordou no horário", 82], ["Sem cafeína à noite", 74], ["Treino favoreceu sono", 88], ["Sono mínimo de 7h", 73]] as const;
  return (
    <SectionCard title="Rotina de recuperação">
      <div className="space-y-4">{rows.map(([label, value]) => <InlineProgress key={label} label={label} value={value} right={`${value}%`} />)}</div>
      <button className="mt-5 h-10 w-full border-t border-white/8 pt-3 font-semibold text-limebrand">Ver relatório de recuperação <ChevronRight className="ml-2 inline h-4 w-4" /></button>
    </SectionCard>
  );
}

function SleepRecommendationsCard() {
  return (
    <RightPanelCard title="Recomendações">
      {["Dormir 30 min mais cedo nos dias de perna.", "Evitar cafeína após 18h para reduzir despertares.", "Manter treino intenso longe do horário de dormir.", "Registrar energia ao acordar para melhorar a análise."].map((item) => <p key={item} className="border-b border-white/8 py-3 text-sm text-white/72 last:border-0"><Lightbulb className="mr-2 inline h-4 w-4 text-limebrand" />{item}</p>)}
    </RightPanelCard>
  );
}

function EvaluationsReportsView() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{reportEvaluationMetrics.map((metric) => <ReportMetricCard key={metric.label} metric={metric} />)}</div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)_360px]">
        <ReportChartCard title="Evolução do score físico">
          <ReportLineChart points={[71, 74, 78, 82]} labels={["22 Abr", "01 Mai", "08 Mai", "22 Mai"]} valueLabel="82%" />
        </ReportChartCard>
        <EvaluationBodyCard />
        <EvaluationHighlightsCard />
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,.85fr)_360px]">
        <EvaluationHistoryCard />
        <EvaluationTargetsCard />
        <ProfessionalNotesCard />
      </div>
      <ReportInsightBanner text="As avaliações confirmam evolução consistente: cintura menor, postura mais estável e melhor score físico desde a avaliação inicial." />
    </div>
  );
}

function EvaluationBodyCard() {
  return (
    <SectionCard title="Mapa da avaliação corporal" action={<span className="text-sm text-limebrand">22 Mai 2024</span>}>
      <div className="grid gap-4 md:grid-cols-[150px_1fr] md:items-center">
        <div className="relative mx-auto h-56 w-32">
          <div className="absolute left-1/2 top-2 h-12 w-12 -translate-x-1/2 rounded-full border border-white/28 bg-white/[0.03]" />
          <div className="absolute left-1/2 top-16 h-28 w-24 -translate-x-1/2 rounded-[48px] border border-white/28 bg-limebrand/10" />
          <div className="absolute left-5 top-24 h-28 w-4 rounded-full border border-sky-400/50 bg-sky-400/10" />
          <div className="absolute right-5 top-24 h-28 w-4 rounded-full border border-sky-400/50 bg-sky-400/10" />
          <div className="absolute left-10 top-40 h-36 w-5 rounded-full border border-orange-400/50 bg-orange-400/10" />
          <div className="absolute right-10 top-40 h-36 w-5 rounded-full border border-orange-400/50 bg-orange-400/10" />
        </div>
        <div className="space-y-3 text-sm">{[["Postura", "Boa", 82], ["Mobilidade", "76%", 76], ["Composição", "78%", 78], ["Força base", "86%", 86]].map(([label, value, score]) => <InlineProgress key={label as string} label={label as string} value={score as number} right={value as string} />)}</div>
      </div>
    </SectionCard>
  );
}

function EvaluationHighlightsCard() {
  return (
    <RightPanelCard title="Destaques técnicos">
      {[["Postura mais alinhada", "Ombros com melhor simetria.", Shield], ["Cintura reduzida", "Menos 3,5 cm desde abril.", Target], ["Força em evolução", "Carga total subiu 17,2%.", Dumbbell], ["Revisão marcada", "05 Jun 2024 às 08:30.", CalendarCheck]].map(([title, detail, Icon]) => <div key={title as string} className="flex gap-4 border-b border-white/8 py-4 last:border-0"><span className="grid h-11 w-11 place-items-center rounded-full border border-limebrand/30 text-limebrand"><Icon className="h-5 w-5" /></span><p className="text-sm"><b>{title as string}</b><br /><span className="text-white/62">{detail as string}</span></p></div>)}
    </RightPanelCard>
  );
}

function EvaluationHistoryCard() {
  return (
    <SectionCard title="Histórico de avaliações" className="overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full border-collapse">
          <thead className="text-left text-sm text-white/58"><tr>{["Data", "Avaliação", "Score", "Foco", "Status", ""].map((header) => <th key={header} className="px-5 py-4 font-medium">{header}</th>)}</tr></thead>
          <tbody>{evaluationRows.map((row) => <tr key={`${row[0]}-${row[1]}`} className="border-t border-white/8">{row.map((cell) => <td key={cell} className="px-5 py-4 text-sm">{cell}</td>)}<td className="px-5 py-4"><ChevronRight className="h-4 w-4 text-white/60" /></td></tr>)}</tbody>
        </table>
      </div>
      <button className="h-12 w-full border-t border-white/8 font-semibold text-limebrand">Ver todas as avaliações <ChevronRight className="ml-2 inline h-4 w-4" /></button>
    </SectionCard>
  );
}

function EvaluationTargetsCard() {
  return (
    <SectionCard title="Metas revisadas">
      <div className="space-y-4">
        <InlineProgress label="Redução de gordura" value={78} right="78%" />
        <InlineProgress label="Ganho de massa muscular" value={64} right="64%" />
        <InlineProgress label="Mobilidade de quadril" value={71} right="71%" />
        <InlineProgress label="Estabilidade postural" value={82} right="82%" />
      </div>
      <button className="mt-5 h-10 w-full border-t border-white/8 pt-3 font-semibold text-limebrand">Ver plano de ajustes <ChevronRight className="ml-2 inline h-4 w-4" /></button>
    </SectionCard>
  );
}

function ProfessionalNotesCard() {
  return (
    <RightPanelCard title="Notas do profissional">
      <div className="rounded-md border border-limebrand/25 bg-limebrand/8 p-4">
        <p className="text-sm text-white/76">Miguel está respondendo bem ao plano. Manter progressão de carga e reforçar mobilidade antes dos treinos de perna.</p>
        <p className="mt-4 text-xs text-white/52">Assinado por Coach Ana · 22 Mai 2024</p>
      </div>
      <button className="mt-4 h-10 w-full rounded-md border border-white/10 font-semibold text-limebrand">Abrir avaliação completa</button>
    </RightPanelCard>
  );
}

function ProductsTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Suplementos");
  const filtered = products.filter((product) => {
    if (active === "favoritos") return ["whey", "creatina", "shaker", "omega", "bar", "bag"].includes(product.id);
    if (active === "ofertas") return Boolean(product.discount) || ["pre", "zma", "straps"].includes(product.id);
    if (active === "alimentacao") return product.category === "Alimentação";
    if (active === "acessorios") return product.category === "Acessórios";
    if (active === "kits") return ["whey", "creatina", "shaker", "straps"].includes(product.id);
    return product.category === "Suplementos";
  });

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <div className="flex flex-wrap gap-3"><input className="h-11 min-w-0 flex-1 rounded-md border border-white/10 bg-black/20 px-4 outline-none sm:min-w-[260px]" placeholder="Buscar produtos..." /><button className="min-h-11 rounded-md border border-white/10 px-4">Filtros</button></div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((product, index) => (
            <div key={product.id} className="relative">
              {active === "ofertas" ? <span className="absolute left-3 top-3 z-10 rounded bg-red-500 px-2 py-1 text-xs font-black">-{12 + index * 3}%</span> : null}
              <ProductCard product={product} removable={active === "favoritos"} />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <RightPanelCard title={active === "favoritos" ? "Favoritos do marketplace" : active === "ofertas" ? "Ofertas ativas" : "Categorias em alta"}>{["Proteinas", "Acessorios", "Pre-treinos", "Kits"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}<ChevronRight className="float-right h-4 w-4" /></p>)}</RightPanelCard>
        <TipPanel title="Marketplace Noogym" items={["Produtos sincronizados com o carrinho.", "Ofertas exclusivas para membros.", "Favoritos ficam salvos na sua conta."]} />
      </div>
    </div>
  );
}

function SubscriptionTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Meu plano");
  const planOptions = [
    {
      name: "Basico",
      price: "9.900 Kz",
      description: "Para quem esta a comecar e quer organizar a rotina fitness.",
      status: "Disponivel para upgrade.",
      highlights: ["Acesso a academias selecionadas", "Check-ins mensais controlados", "Treinos basicos", "Historico de progresso"],
      usage: "Ideal para treinar 2 a 3 vezes por semana.",
    },
    {
      name: "Premium",
      price: "19.900 Kz",
      description: "O equilibrio entre rede de academias, treino, nutricao e relatorios.",
      status: "Plano atual sincronizado com sua conta.",
      highlights: ["Check-ins ilimitados", "Treinos personalizados", "Nutricao personalizada", "Relatorios avancados", "Descontos no marketplace"],
      usage: "Melhor escolha para uso frequente.",
      current: true,
    },
    {
      name: "Elite",
      price: "29.900 Kz",
      description: "Para acompanhamento mais completo e evolucao com prioridade.",
      status: "Disponivel para upgrade.",
      highlights: ["Tudo do Premium", "Suporte prioritario", "Consultoria mensal", "Analises avancadas", "Eventos exclusivos"],
      usage: "Pensado para alta performance.",
    },
  ];

  if (active === "beneficios") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <SectionCard title="Beneficios do plano Premium">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {["Check-ins ilimitados", "Treinos personalizados", "Nutricao personalizada", "Relatorios avancados", "Descontos no marketplace", "Suporte prioritario"].map((benefit) => (
              <div key={benefit} className="rounded-md border border-white/10 bg-black/18 p-5">
                <CheckCircle2 className="h-6 w-6 text-limebrand" />
                <h3 className="mt-4 font-bold">{benefit}</h3>
                <p className="mt-2 text-sm text-white/58">Disponivel enquanto sua assinatura estiver ativa.</p>
              </div>
            ))}
          </div>
        </SectionCard>
        <div className="space-y-5">
          <RightPanelCard title="Resumo dos beneficios">{["6 beneficios ativos", "2 beneficios usados hoje", "Marketplace com desconto", "Suporte prioritario ativo"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}</p>)}</RightPanelCard>
          <SidebarHelp />
        </div>
      </div>
    );
  }

  if (active === "uso-do-plano") {
    return (
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-4">
            <MetricCard icon="CalendarCheck" label="Check-ins" value="98" detail="Ilimitado" />
            <MetricCard icon="Dumbbell" label="Treinos" value="45" detail="Ilimitado" />
            <MetricCard icon="FileBarChart" label="Relatorios" value="18" detail="Ilimitado" />
            <MetricCard icon="ShoppingBag" label="Descontos usados" value="7" detail="Este mes" />
          </div>
          <SectionCard title="Uso por recurso">
            <div className="space-y-5">
              <InlineProgress label="Check-ins" value={98} right="98 / ilimitado" />
              <InlineProgress label="Treinos concluidos" value={75} right="45 / ilimitado" />
              <InlineProgress label="Relatorios gerados" value={55} right="18 / ilimitado" />
              <InlineProgress label="Beneficios utilizados" value={68} right="12 / 18" />
            </div>
          </SectionCard>
        </div>
        <div className="space-y-5">
          <RightPanelCard title="Status do plano"><StatusBadge>Premium ativo</StatusBadge><p className="mt-4 text-sm text-white/62">Renovacao automatica ativa.</p></RightPanelCard>
          <TipPanel title="Dica Noogym" items={["Use seus beneficios antes da renovacao.", "Acompanhe limites e recursos nesta tela.", "Planos superiores liberam acompanhamento dedicado."]} />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-5">
        <SectionCard title="Meu plano">
          <div className="grid gap-4 xl:grid-cols-3">
            {planOptions.map((plan) => (
              <div key={plan.name} className={cn("flex flex-col rounded-md border p-5", plan.current ? "border-limebrand bg-limebrand/8" : "border-white/10 bg-black/18")}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  {plan.current ? <StatusBadge>Atual</StatusBadge> : null}
                </div>
                <p className="mt-2 text-sm text-white/58">{plan.status}</p>
                <p className="mt-4 text-sm leading-6 text-white/72">{plan.description}</p>
                <p className="mt-5 text-2xl font-black">{plan.price}<span className="text-sm font-semibold text-white/54"> / mes</span></p>
                <div className="mt-5 space-y-3">
                  {plan.highlights.map((highlight) => <p key={highlight} className="text-sm text-white/76"><Check className="mr-2 inline h-4 w-4 text-limebrand" />{highlight}</p>)}
                </div>
                <p className="mt-5 rounded-md border border-white/10 bg-black/18 p-3 text-sm text-white/62">{plan.usage}</p>
                <button className={cn("mt-auto h-11 w-full rounded-md font-bold", plan.current ? "bg-limebrand text-black" : "border border-limebrand/70 text-limebrand")}>{plan.current ? "Plano atual" : "Fazer upgrade"}</button>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
      <div className="space-y-5"><RightPanelCard title="Resumo de uso"><InlineProgress label="Check-ins" value={98} right="98 / ilimitado" /><div className="mt-4"><InlineProgress label="Treinos" value={75} right="45 / ilimitado" /></div></RightPanelCard><SidebarHelp /></div>
    </div>
  );
}

function PersonalWorkspaceTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Visao geral");
  const views: Record<string, { title: string; description: string; headers: string[]; rows: Row[] }> = {
    "meus-alunos": {
      title: "Meus alunos",
      description: "Acompanhe vínculos ativos e evolução recente.",
      headers: ["Aluno", "Objetivo", "Plano", "Último treino", "Status"],
      rows: [
        ["Ana Silva", "Hipertrofia", "Upper/Lower", "Hoje, 07:30", <StatusBadge key="a">Ativo</StatusBadge>],
        ["Carlos Manuel", "Perda de gordura", "Full Body", "Ontem, 18:20", <StatusBadge key="b">Ativo</StatusBadge>],
        ["Marta João", "Condicionamento", "Corrida 10K", "20 Mai", <StatusBadge key="c" tone="yellow">Revisão</StatusBadge>],
      ],
    },
    "planos-de-treino": {
      title: "Planos de treino",
      description: "Planos criados e compartilhados com seus alunos.",
      headers: ["Plano", "Alunos", "Semanas", "Atualizado", "Status"],
      rows: [["Upper/Lower Avançado", "8", "12", "Hoje", <StatusBadge key="a">Publicado</StatusBadge>], ["Full Body Base", "12", "8", "18 Mai", <StatusBadge key="b">Publicado</StatusBadge>], ["Corrida 10K", "4", "10", "15 Mai", <StatusBadge key="c" tone="gray">Rascunho</StatusBadge>]],
    },
    avaliacoes: {
      title: "Avaliações",
      description: "Revisões físicas e retornos agendados.",
      headers: ["Aluno", "Tipo", "Data", "Evolução", "Status"],
      rows: [["Ana Silva", "Composição corporal", "25 Mai", "+8%", <StatusBadge key="a" tone="blue">Agendada</StatusBadge>], ["Carlos Manuel", "Revisão mensal", "27 Mai", "+5%", <StatusBadge key="b" tone="blue">Agendada</StatusBadge>]],
    },
    agenda: {
      title: "Agenda profissional",
      description: "Próximos acompanhamentos e sessões.",
      headers: ["Horário", "Aluno", "Atividade", "Local", "Status"],
      rows: [["Hoje, 17:00", "Ana Silva", "Treino acompanhado", "Noogym Center", <StatusBadge key="a">Confirmado</StatusBadge>], ["Hoje, 19:00", "Carlos Manuel", "Avaliação", "Online", <StatusBadge key="b" tone="blue">Agendado</StatusBadge>]],
    },
  };

  if (active !== "visao-geral") {
    const view = views[active] ?? views["meus-alunos"];
    return <SectionCard title={view.title} action={<span className="text-sm text-white/55">{view.description}</span>}><DataTable headers={view.headers} rows={view.rows} /></SectionCard>;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon="User" label="Alunos ativos" value="24" trend="+3 este mês" />
        <MetricCard icon="CalendarCheck" label="Sessões na semana" value="18" detail="5 agendadas hoje" />
        <MetricCard icon="Dumbbell" label="Planos publicados" value="7" detail="2 em revisão" />
        <MetricCard icon="Trophy" label="Metas alcançadas" value="82%" trend="+6% este mês" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <SectionCard title="Atividade dos alunos"><DataTable headers={["Aluno", "Plano", "Aderência", "Próxima ação"]} rows={[["Ana Silva", "Upper/Lower", "92%", "Revisar cargas"], ["Carlos Manuel", "Full Body", "84%", "Ajustar cardio"], ["Marta João", "Corrida 10K", "78%", "Avaliação em 2 dias"]]} /></SectionCard>
        <RightPanelCard title="Hoje">{["17:00 · Ana Silva", "19:00 · Carlos Manuel", "20:30 · Revisar plano da Marta"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}</p>)}</RightPanelCard>
      </div>
    </div>
  );
}

function SellerWorkspaceTabs({ activeTab }: { activeTab?: string }) {
  const active = tabToSlug(activeTab ?? "Visao geral");
  const views: Record<string, { title: string; headers: string[]; rows: Row[] }> = {
    produtos: { title: "Produtos da loja", headers: ["Produto", "SKU", "Preço", "Estoque", "Status"], rows: [["Whey Protein Concentrado", "WHEY-900", "19.900 Kz", "42", <StatusBadge key="a">Ativo</StatusBadge>], ["Creatina Monohidratada", "CREA-300", "9.900 Kz", "18", <StatusBadge key="b">Ativo</StatusBadge>], ["Pré-treino Explosive", "PRE-300", "8.900 Kz", "0", <StatusBadge key="c" tone="yellow">Sem estoque</StatusBadge>]] },
    pedidos: { title: "Pedidos da loja", headers: ["Pedido", "Cliente", "Data", "Total", "Status"], rows: [["#NMG-98432", "Ana Silva", "Hoje", "24.400 Kz", <StatusBadge key="a" tone="blue">Preparando</StatusBadge>], ["#NMG-98418", "João Pedro", "Ontem", "19.900 Kz", <StatusBadge key="b">Enviado</StatusBadge>]] },
    estoque: { title: "Controle de estoque", headers: ["Produto", "Disponível", "Reservado", "Mínimo", "Situação"], rows: [["Whey Protein", "42", "5", "10", <StatusBadge key="a">Normal</StatusBadge>], ["Creatina", "18", "3", "8", <StatusBadge key="b">Normal</StatusBadge>], ["Pré-treino", "0", "0", "6", <StatusBadge key="c" tone="red">Repor</StatusBadge>]] },
    pagamentos: { title: "Pagamentos da loja", headers: ["Período", "Vendas", "Taxas", "Líquido", "Status"], rows: [["Mai 2024", "486.500 Kz", "38.920 Kz", "447.580 Kz", <StatusBadge key="a">Disponível</StatusBadge>], ["Abr 2024", "412.800 Kz", "33.024 Kz", "379.776 Kz", <StatusBadge key="b" tone="gray">Pago</StatusBadge>]] },
  };

  if (active !== "visao-geral") {
    const view = views[active] ?? views.produtos;
    return <SectionCard title={view.title}><DataTable headers={view.headers} rows={view.rows} /></SectionCard>;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard icon="ShoppingBag" label="Vendas no mês" value="486.500 Kz" trend="+18%" />
        <MetricCard icon="Package" label="Pedidos abertos" value="12" detail="5 para enviar hoje" />
        <MetricCard icon="CheckCircle2" label="Produtos ativos" value="28" detail="3 sem estoque" />
        <MetricCard icon="WalletCards" label="Saldo disponível" value="447.580 Kz" detail="Próximo repasse: 28 Mai" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <SectionCard title="Pedidos recentes"><DataTable headers={["Pedido", "Cliente", "Itens", "Total", "Status"]} rows={[["#NMG-98432", "Ana Silva", "2", "24.400 Kz", <StatusBadge key="a" tone="blue">Preparando</StatusBadge>], ["#NMG-98418", "João Pedro", "1", "19.900 Kz", <StatusBadge key="b">Enviado</StatusBadge>], ["#NMG-98396", "Marta João", "3", "32.700 Kz", <StatusBadge key="c">Entregue</StatusBadge>]]} /></SectionCard>
        <RightPanelCard title="Ações da loja">{["5 pedidos para preparar", "3 produtos com estoque baixo", "Repasse disponível", "2 avaliações novas"].map((item) => <p key={item} className="border-b border-white/8 py-3 last:border-0">{item}</p>)}</RightPanelCard>
      </div>
    </div>
  );
}

export function DashboardTabScreen({ slug, activeTab }: DashboardTabScreenProps) {
  switch (slug) {
    case "academias":
      return <AcademiesTabs activeTab={activeTab} />;
    case "check-ins":
      return <CheckinTabs activeTab={activeTab} />;
    case "treinos":
      return <WorkoutTabs activeTab={activeTab} />;
    case "nutricao":
      return <NutritionTabs activeTab={activeTab} />;
    case "progresso":
      return <ProgressTabs activeTab={activeTab} />;
    case "relatorios":
      return <ReportsTabs activeTab={activeTab} />;
    case "produtos":
      return <ProductsTabs activeTab={activeTab} />;
    case "assinatura":
      return <SubscriptionTabs activeTab={activeTab} />;
    case "pagamentos":
      return <PaymentsTabs activeTab={activeTab} />;
    case "configuracoes":
      return <SettingsTabs activeTab={activeTab} />;
    case "seguranca":
      return <SecurityTabs activeTab={activeTab} />;
    case "perfil":
      return <ProfileTabs activeTab={activeTab} />;
    case "painel-personal":
      return <PersonalWorkspaceTabs activeTab={activeTab} />;
    case "minha-loja":
      return <SellerWorkspaceTabs activeTab={activeTab} />;
    case "pedidos":
      return <OrdersTabs activeTab={activeTab} />;
    case "favoritos":
      return <FavoritesTabs activeTab={activeTab} />;
    case "cupons":
      return <CouponsTabs activeTab={activeTab} />;
    default:
      return null;
  }
}
