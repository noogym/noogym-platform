import type { DashboardIconName } from "@/components/dashboard/icons";

export type DashboardAccessScope =
  | "SITE"
  | "MOBILE_APP"
  | "GYM_ERP"
  | "PERSONAL_PANEL"
  | "MARKET_SELLER"
  | "ADMIN_PANEL";

export type DashboardNavItem = {
  href: string;
  label: string;
  icon: DashboardIconName;
  external?: boolean;
  roles?: string[];
  accesses?: DashboardAccessScope[];
};

export type DashboardNavSection = {
  label: string;
  items: DashboardNavItem[];
};

export type DashboardSlug =
  | "resumo"
  | "academias"
  | "ginasios"
  | "marketplace"
  | "check-ins"
  | "treinos"
  | "nutricao"
  | "progresso"
  | "relatorios"
  | "produtos"
  | "pedidos"
  | "cupons"
  | "favoritos"
  | "perfil"
  | "painel-personal"
  | "minha-loja"
  | "assinatura"
  | "pagamentos"
  | "configuracoes"
  | "seguranca";

export const dashboardSlugs: DashboardSlug[] = [
  "resumo",
  "academias",
  "ginasios",
  "marketplace",
  "check-ins",
  "treinos",
  "nutricao",
  "progresso",
  "relatorios",
  "produtos",
  "pedidos",
  "cupons",
  "favoritos",
  "perfil",
  "painel-personal",
  "minha-loja",
  "assinatura",
  "pagamentos",
  "configuracoes",
  "seguranca",
];

export const screenMeta: Record<DashboardSlug, { title: string; description: string; icon: DashboardIconName; tabs?: string[] }> = {
  resumo: { title: "A tua jornada", description: "A tua actividade Noogym num só lugar.", icon: "Home" },
  academias: { title: "Ginásios", description: "Descobre espaços para treinar perto de ti.", icon: "MapPin" },
  ginasios: { title: "Encontrar ginásios", description: "Pesquisa ginásios parceiros e guarda os teus favoritos.", icon: "MapPin" },
  marketplace: { title: "Marketplace", description: "Encontra produtos para apoiar a tua rotina de treino.", icon: "ShoppingBag" },
  "check-ins": { title: "Check-ins", description: "Os teus registos de presença nos ginásios.", icon: "CalendarCheck" },
  treinos: { title: "Treinos", description: "Os teus treinos e planos ligados à conta.", icon: "Dumbbell" },
  nutricao: { title: "Nutrição", description: "Acompanha a tua alimentação na app Noogym.", icon: "Apple" },
  progresso: { title: "Evolução", description: "Acompanha os dados sincronizados da tua actividade.", icon: "Activity" },
  relatorios: { title: "Evolução", description: "Acompanha os dados sincronizados da tua actividade.", icon: "Activity" },
  produtos: { title: "Marketplace", description: "Produtos e serviços para a tua rotina de treino.", icon: "ShoppingBag" },
  pedidos: { title: "As minhas compras", description: "Consulta as compras feitas no marketplace Noogym.", icon: "Package" },
  cupons: { title: "Ofertas", description: "Ofertas disponíveis para a tua conta.", icon: "TicketPercent" },
  favoritos: { title: "Guardados", description: "Os ginásios e itens que guardaste.", icon: "Heart" },
  perfil: { title: "A minha conta", description: "Os teus dados, preferências e segurança.", icon: "User", tabs: ["Dados pessoais", "Preferências", "Segurança"] },
  "painel-personal": { title: "Painel de personal trainer", description: "Ferramentas profissionais da tua actividade.", icon: "User" },
  "minha-loja": { title: "Gestão da loja", description: "Ferramentas profissionais para vender no Noogym Market.", icon: "ShoppingBag" },
  assinatura: { title: "Plano e pagamentos", description: "Consulta as opções de plano e os pagamentos associados à tua conta.", icon: "CreditCard", tabs: ["Planos", "Pagamentos"] },
  pagamentos: { title: "Plano e pagamentos", description: "Consulta as opções de plano e os pagamentos associados à tua conta.", icon: "CreditCard" },
  configuracoes: { title: "A minha conta", description: "Os teus dados, preferências e segurança.", icon: "User" },
  seguranca: { title: "A minha conta", description: "Os teus dados, preferências e segurança.", icon: "User" },
};

export const navSections: DashboardNavSection[] = [
  {
    label: "Para ti",
    items: [
      { href: "/dashboard/resumo", label: "Início", icon: "Home" },
      { href: "/dashboard/ginasios", label: "Encontrar ginásios", icon: "MapPin" },
      { href: "/dashboard/treinos", label: "Treinos", icon: "Dumbbell" },
      { href: "/dashboard/progresso", label: "Evolução", icon: "Activity" },
    ],
  },
  {
    label: "Comprar",
    items: [
      { href: "/dashboard/marketplace", label: "Marketplace", icon: "ShoppingBag" },
      { href: "/dashboard/pedidos", label: "As minhas compras", icon: "Package" },
    ],
  },
  {
    label: "Painéis profissionais",
    items: [
      { href: process.env.NEXT_PUBLIC_NOOGYM_WEB_URL ? new URL(process.env.NEXT_PUBLIC_NOOGYM_WEB_URL).origin : process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://admin.noogym.com", label: "ERP do ginásio", icon: "Home", roles: ["GYM_OWNER", "GYM_STAFF"], accesses: ["GYM_ERP"], external: true },
      { href: "/dashboard/painel-personal", label: "Painel Personal", icon: "User", roles: ["PERSONAL_TRAINER"], accesses: ["PERSONAL_PANEL"] },
      { href: "/dashboard/minha-loja", label: "Minha Loja", icon: "ShoppingBag", roles: ["SELLER"], accesses: ["MARKET_SELLER"] },
    ],
  },
  {
    label: "Gestão Noogym",
    items: [
      { href: "/gestao", label: "Gestão", icon: "Shield", roles: ["ADMIN"], accesses: ["ADMIN_PANEL"] },
      { href: "/gestao/contas", label: "Contas", icon: "User", roles: ["ADMIN"], accesses: ["ADMIN_PANEL"] },
      { href: "/gestao/ginasios-cadastrados", label: "Ginásios cadastrados", icon: "Home", roles: ["ADMIN"], accesses: ["ADMIN_PANEL"] },
      { href: "/gestao/ginasios", label: "Descoberta Google", icon: "MapPin", roles: ["ADMIN"], accesses: ["ADMIN_PANEL"] },
      { href: "/gestao/usuarios", label: "Usuários admin", icon: "User", roles: ["ADMIN"], accesses: ["ADMIN_PANEL"] },
    ],
  },
  {
    label: "Conta",
    items: [
      { href: "/dashboard/perfil", label: "A minha conta", icon: "User" },
      { href: "/dashboard/assinatura", label: "Plano e pagamentos", icon: "CreditCard" },
    ],
  },
];
