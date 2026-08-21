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
  resumo: { title: "Resumo", description: "Acompanhe seu progresso e continue evoluindo.", icon: "Home" },
  academias: { title: "Ginásios", description: "Encontre ginásios, acompanhe visitas e faça check-in.", icon: "MapPin", tabs: ["Todos", "Meus ginásios", "Visitados", "Favoritos", "Mapa"] },
  "check-ins": { title: "Check-ins", description: "Acompanhe sua frequência e mantenha a consistência.", icon: "CalendarCheck", tabs: ["Visão geral", "Frequência", "Histórico", "Conquistas", "Locais"] },
  treinos: { title: "Treinos", description: "Acompanhe seus treinos, evolução e mantenha o foco nos seus objetivos.", icon: "Dumbbell", tabs: ["Meus treinos", "Biblioteca de treinos", "Planos de treino"] },
  nutricao: { title: "Nutrição", description: "Acompanhe sua alimentação diária e mantenha o foco nos seus objetivos.", icon: "Apple", tabs: ["Visão geral", "Refeições", "Diário alimentar", "Plano alimentar", "Alimentos", "Receitas", "Suplementos"] },
  progresso: { title: "Progresso", description: "Acompanhe sua evolução e conquiste sua melhor versão.", icon: "Activity", tabs: ["Visão geral", "Composição corporal", "Força", "Medidas", "Fotos", "Metas", "Análises"] },
  relatorios: { title: "Relatórios", description: "Visão completa do seu desempenho e evolução.", icon: "FileBarChart", tabs: ["Visão geral", "Treinos", "Nutrição", "Progresso", "Hábitos", "Sono", "Avaliações"] },
  produtos: { title: "Produtos", description: "Tudo o que você precisa para potencializar seus treinos.", icon: "ShoppingBag", tabs: ["Suplementos", "Alimentação", "Acessórios", "Kits", "Favoritos", "Ofertas"] },
  pedidos: { title: "Pedidos", description: "Acompanhe todos os seus pedidos e entregas.", icon: "Package", tabs: ["Todos", "Em andamento", "Enviados", "Entregues", "Cancelados"] },
  cupons: { title: "Cupons", description: "Aproveite descontos exclusivos para turbinar seus resultados.", icon: "TicketPercent", tabs: ["Meus cupons", "Cupons disponíveis"] },
  favoritos: { title: "Favoritos", description: "Acesse tudo o que você salvou na sua jornada Noogym.", icon: "Heart", tabs: ["Ginásios", "Treinos", "Dietas", "Eventos"] },
  perfil: { title: "Perfil", description: "Gerencie sua identidade, dados pessoais, perfis e vínculos Noogym.", icon: "User", tabs: ["Informações", "Perfis e vínculos"] },
  "painel-personal": { title: "Painel Personal", description: "Gerencie alunos, planos e acompanhamentos profissionais.", icon: "User", tabs: ["Visão geral", "Meus alunos", "Planos de treino", "Avaliações", "Agenda"] },
  "minha-loja": { title: "Minha Loja", description: "Gerencie sua operação no Noogym Market.", icon: "ShoppingBag", tabs: ["Visão geral", "Produtos", "Pedidos", "Estoque", "Pagamentos"] },
  assinatura: { title: "Planos", description: "Gerencie sua assinatura, benefícios e uso do plano.", icon: "CreditCard", tabs: ["Meu plano", "Benefícios", "Uso do plano"] },
  pagamentos: { title: "Pagamentos", description: "Acompanhe seus pagamentos, faturas e métodos.", icon: "WalletCards", tabs: ["Resumo", "Métodos de pagamento", "Histórico", "Faturas"] },
  configuracoes: { title: "Configurações", description: "Personalize sua experiência Noogym.", icon: "Settings", tabs: ["Geral", "Perfil", "Privacidade", "Notificações", "Preferências", "Aparência", "Integrações"] },
  seguranca: { title: "Segurança", description: "Proteja sua conta e mantenha suas informações seguras.", icon: "Shield", tabs: ["Senha", "Autenticação em duas etapas", "Dispositivos", "Sessões ativas", "Logs de segurança"] },
};

export const navSections: DashboardNavSection[] = [
  {
    label: "Minha rotina",
    items: [
      { href: "/dashboard/resumo", label: "Resumo", icon: "Home" },
      { href: "/dashboard/academias", label: "Ginásios", icon: "MapPin" },
      { href: "/dashboard/check-ins", label: "Check-ins", icon: "CalendarCheck" },
      { href: "/dashboard/treinos", label: "Treinos", icon: "Dumbbell" },
      { href: "/dashboard/nutricao", label: "Nutrição", icon: "Apple" },
      { href: "/dashboard/progresso", label: "Progresso", icon: "Activity" },
      { href: "/dashboard/relatorios", label: "Relatórios", icon: "FileBarChart" },
    ],
  },
  {
    label: "Marketplace",
    items: [
      { href: "/dashboard/produtos", label: "Produtos", icon: "ShoppingBag" },
      { href: "/dashboard/pedidos", label: "Pedidos", icon: "Package" },
      { href: "/dashboard/cupons", label: "Cupons", icon: "TicketPercent" },
      { href: "/dashboard/favoritos", label: "Favoritos", icon: "Heart" },
    ],
  },
  {
    label: "Painéis profissionais",
    items: [
      { href: "/dashboard/painel-personal", label: "Painel Personal", icon: "User", accesses: ["PERSONAL_PANEL"] },
      { href: "/dashboard/minha-loja", label: "Minha Loja", icon: "ShoppingBag", accesses: ["MARKET_SELLER"] },
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
      { href: "/dashboard/perfil", label: "Perfil", icon: "User" },
      { href: "/dashboard/assinatura", label: "Planos", icon: "CreditCard" },
      { href: "/dashboard/pagamentos", label: "Pagamentos", icon: "WalletCards" },
      { href: "/dashboard/configuracoes", label: "Configurações", icon: "Settings" },
      { href: "/dashboard/seguranca", label: "Segurança", icon: "Shield" },
    ],
  },
];

export const products = [
  { id: "whey", name: "Whey Protein Concentrado", category: "Suplementos", detail: "900g • Noogym", price: "19.900 Kz", rating: "4,8", reviews: 342, image: "/images/products/noogym-market/whey-concentrado-noogym.png", discount: "-15%" },
  { id: "creatina", name: "Creatina Monohidratada", category: "Suplementos", detail: "300g • Noogym", price: "9.900 Kz", rating: "4,9", reviews: 276, image: "/images/products/noogym-market/creatina-monohidratada-noogym.png" },
  { id: "shaker", name: "Coqueteleira Noogym", category: "Acessórios", detail: "600ml • Livre de BPA", price: "4.500 Kz", rating: "4,7", reviews: 189, image: "/images/products/noogym-market/coqueteleira-noogym.png" },
  { id: "belt", name: "Cinto de Musculação", category: "Acessórios", detail: "Tamanho único", price: "7.500 Kz", rating: "4,6", reviews: 142, image: "/images/products/noogym-market/cinto-musculacao-noogym.png" },
  { id: "omega", name: "Ômega 3 1000mg", category: "Suplementos", detail: "120 cápsulas • Noogym", price: "8.900 Kz", rating: "4,8", reviews: 213, image: "/images/dashboard/omega-3.png" },
  { id: "pre", name: "Pré-treino Hardcore", category: "Suplementos", detail: "300g • Noogym", price: "8.900 Kz", rating: "4,8", reviews: 158, image: "/images/products/noogym-market/pre-treino-explosive-noogym.png" },
  { id: "zma", name: "ZMA Noogym", category: "Suplementos", detail: "90 cápsulas", price: "6.900 Kz", rating: "4,7", reviews: 96, image: "/images/dashboard/zma-noogym.png" },
  { id: "bag", name: "Mochila Noogym", category: "Acessórios", detail: "Capacidade 30L", price: "17.900 Kz", rating: "4,9", reviews: 118, image: "/images/dashboard/mochila-noogym.png" },
  { id: "straps", name: "Straps de Levantamento", category: "Acessórios", detail: "Par • Alta resistência", price: "4.900 Kz", rating: "4,6", reviews: 85, image: "/images/dashboard/straps-noogym.png" },
  { id: "bar", name: "NooBar Protein Bar", category: "Alimentação", detail: "Sabor chocolate • 60g", price: "1.900 Kz", rating: "4,5", reviews: 202, image: "/images/dashboard/noobar.png" },
];

export const workouts = [
  { name: "Upper Body", group: "Peito, Ombro, Tríceps", date: "20 Mai, 19:30", duration: "60 min", kcal: "620 kcal", status: "Concluído", image: "/images/dashboard/workout-upper.png" },
  { name: "Lower Body", group: "Pernas, Glúteos, Panturrilhas", date: "22 Mai, 18:00", duration: "55 min", kcal: "580 kcal", status: "Continuar", image: "/images/dashboard/workout-lower.png" },
  { name: "Back Day", group: "Costas, Bíceps", date: "24 Mai, 17:00", duration: "50 min", kcal: "480 kcal", status: "Iniciar", image: "/images/dashboard/workout-back.png" },
  { name: "Core Workout", group: "Abdômen, Lombar", date: "25 Mai, 10:00", duration: "30 min", kcal: "280 kcal", status: "Iniciar", image: "/images/dashboard/workout-core.png" },
];

export const orders = [
  { id: "#NMG-98432", date: "22 Mai 2024", status: "Entregue", detail: "Entregue em 24 Mai 2024", items: "2 itens", total: "24.400 Kz", color: "text-limebrand", images: [products[0].image, products[2].image] },
  { id: "#NMG-98115", date: "15 Mai 2024", status: "Em trânsito", detail: "Previsão de entrega 20 Mai 2024", items: "2 itens", total: "12.400 Kz", color: "text-sky-400", images: [products[1].image, products[3].image] },
  { id: "#NMG-97670", date: "05 Mai 2024", status: "Processando", detail: "Pagamento aprovado", items: "2 itens", total: "8.900 Kz", color: "text-yellow-300", images: [products[2].image, products[7].image] },
  { id: "#NMG-97211", date: "28 Abr 2024", status: "Enviado", detail: "Enviado em 29 Abr 2024", items: "1 item", total: "8.900 Kz", color: "text-purple-400", images: [products[4].image] },
  { id: "#NMG-96321", date: "10 Abr 2024", status: "Cancelado", detail: "Cancelado em 11 Abr 2024", items: "1 item", total: "19.900 Kz", color: "text-red-400", images: [products[0].image] },
];

export const coupons = [
  { code: "NOO20", tag: "20% OFF", title: "20% de desconto em suplementos", details: "Válido em todos os suplementos da categoria.", expires: "31 Mai 2024", min: "Mín. 10.000 Kz" },
  { code: "FRETEGRATIS", tag: "FRETE GRÁTIS", title: "Frete grátis", details: "Válido para qualquer compra acima de 15.000 Kz.", expires: "25 Mai 2024", min: "Sem valor mínimo" },
  { code: "NOO15", tag: "15% OFF", title: "15% de desconto em acessórios", details: "Válido em acessórios e equipamentos.", expires: "15 Jun 2024", min: "Mín. 8.000 Kz" },
  { code: "WELCOME", tag: "EXCLUSIVO", title: "Boas-vindas ao Noogym", details: "Desconto especial para novos membros.", expires: "30 Jun 2024", min: "Sem valor mínimo", used: true },
];

export const gyms = [
  { name: "Academia X", area: "Talatona, Luanda", distance: "1,2 km", visits: 24, plan: "Premium", image: "/images/gyms/noogym-network/noogym-center.png" },
  { name: "Noogym Center", area: "Kilamba, Luanda", distance: "3,8 km", visits: 18, plan: "Premium", image: "/images/gyms/noogym-network/iron-house-fitness.png" },
  { name: "Power Fit", area: "Centro, Benguela", distance: "Visitada recentemente", visits: 6, plan: "Standard", image: "/images/gyms/noogym-network/elite-training.png" },
  { name: "Move Fitness", area: "Namibe, Angola", distance: "Favorita", visits: 4, plan: "Basic", image: "/images/gyms/noogym-network/move-fitness.png" },
];

export const activity = [
  ["Check-in realizado", "Academia X • Hoje, 08:15"],
  ["Treino concluído", "Treino Upper Body • Ontem, 19:45"],
  ["Meta diária alcançada", "Parabéns! Você atingiu sua meta de calorias"],
  ["Plano atualizado", "Premium renovado com sucesso"],
];
