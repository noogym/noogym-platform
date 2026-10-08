import {
  BarChart3,
  Building2,
  CheckCircle2,
  FileCheck2,
  Cloud,
  CreditCard,
  DatabaseBackup,
  Dumbbell,
  Gauge,
  Lock,
  Megaphone,
  Network,
  Smartphone,
  TrendingDown,
  TrendingUp,
  UserCog,
  Users,
  WifiOff,
  Zap,
} from "lucide-react";

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Recursos", href: "#recursos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Casos de sucesso", href: "#casos" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export const trustLogos = [
  "Fit Club",
  "Max Fitness",
  "Mega Gym",
  "Evolve",
  "Energy Fitness",
  "Power House",
  "Shape",
  "Top Gym",
];

export const featureCards = [
  {
    icon: Users,
    title: "Gestão de alunos",
    description: "Cadastros completos, históricos, planos, avaliações e muito mais.",
  },
  {
    icon: CreditCard,
    title: "Pagamentos, cobranças e faturação",
    description:
      "Mensalidades, vendas, recebimentos e módulo de faturação certificado pela AGT.",
  },
  {
    icon: Lock,
    title: "Controle de acesso",
    description: "Integração com catracas, QR Code e biometria.",
  },
  {
    icon: Smartphone,
    title: "App do aluno",
    description: "Treinos, check-in, planos, pagamentos e notificações.",
  },
  {
    icon: BarChart3,
    title: "Relatórios e métricas",
    description: "Dashboards completos para tomar decisões melhores.",
  },
  {
    icon: Megaphone,
    title: "Marketing e CRM",
    description: "Campanhas, comunicação e retenção de alunos.",
  },
  {
    icon: UserCog,
    title: "Gestão de funcionários",
    description: "Permissões, comissões, escalas e desempenho.",
  },
  {
    icon: Building2,
    title: "Multiunidades",
    description: "Gerencie uma ou várias unidades de forma centralizada.",
  },
];

export const benefitItems = [
  "Reduzir inadimplência",
  "Aumentar retenção de alunos",
  "Automatizar processos",
  "Tomar decisões com dados reais",
  "Crescer com sustentabilidade",
];

export const metricCards = [
  { label: "Retenção de alunos", value: "+28%", meta: "últimos 3 meses", icon: TrendingUp },
  { label: "Inadimplência", value: "-32%", meta: "últimos 3 meses", icon: TrendingDown },
  { label: "Receita mensal", value: "+18%", meta: "vs mês anterior", icon: TrendingUp },
];

export const resources = [
  {
    icon: WifiOff,
    title: "Funciona offline",
    description: "Continue usando mesmo sem internet.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup automático",
    description: "Seus dados sempre protegidos.",
  },
  {
    icon: Users,
    title: "Suporte local",
    description: "Suporte rápido e humano em Angola.",
  },
  {
    icon: Network,
    title: "Integrações",
    description: "Conecte catracas, apps, pagamentos e mais.",
  },
  {
    icon: FileCheck2,
    title: "Faturação certificada",
    description: "Módulo de faturação certificado pela AGT.",
  },
  {
    icon: Cloud,
    title: "Atualizações constantes",
    description: "Novas funcionalidades sempre para você.",
  },
];

export const testimonials = [
  {
    quote:
      "O Noogym mudou totalmente a forma como gerimos o ginásio. Mais controle e menos dor de cabeça.",
    name: "Carlos Mendes",
    role: "CEO, Fit Club",
    initials: "CM",
  },
  {
    quote:
      "A inadimplência caiu mais de 30% e conseguimos focar no que realmente importa: nossos alunos.",
    name: "Juliana Amaral",
    role: "Gestora, Mega Gym",
    initials: "JA",
  },
  {
    quote:
      "Relatórios em tempo real nos ajudam a tomar decisões muito mais assertivas.",
    name: "Rui Domingos",
    role: "Diretor, Energy Fitness",
    initials: "RD",
  },
];

export const pricingPlans = [
  {
    name: "Básico",
    subtitle: "Ideal para pequenos ginásios",
    price: "29.000",
    action: "Começar agora",
    features: [
      "Gestão de alunos",
      "Check-in QR",
      "App do aluno",
      "Pagamentos e cobranças",
      "Faturação AGT",
      "Relatórios básicos",
      "Presença automática",
      "WhatsApp de lembrete",
    ],
  },
  {
    name: "Profissional",
    subtitle: "Para ginásios em crescimento",
    price: "59.000",
    action: "Começar agora",
    featured: true,
    features: [
      "Inclui tudo do Básico",
      "Controle de acesso/catraca",
      "Cobranças automáticas",
      "CRM de alunos",
      "Marketing e promoções",
      "Relatórios avançados",
      "Gestão financeira",
      "Multi-utilizador",
      "Campanhas automáticas",
      "Recuperação de alunos inativos",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Para grandes redes",
    price: "99.000",
    action: "Falar com especialista",
    features: [
      "Inclui tudo do Profissional",
      "Multiunidades",
      "Dashboard executivo",
      "API integrações",
      "White-label",
      "App personalizada",
      "BI avançado",
      "Marketplace Noogym",
      "Gestão de franquias",
      "Suporte prioritário",
      "Treinamento da equipa",
    ],
  },
];

export const faqs = [
  {
    question: "O Noogym funciona sem internet?",
    answer:
      "Sim. Recursos essenciais continuam disponíveis offline e os dados são sincronizados assim que a conexão voltar.",
  },
  {
    question: "Como é feito o controle de acesso?",
    answer:
      "O sistema pode operar com QR Code, biometria ou integração com catracas compatíveis, conforme a estrutura do ginásio.",
  },
  {
    question: "É difícil migrar meus dados para o Noogym?",
    answer:
      "Não. A equipa Noogym acompanha a migração de alunos, planos e informações essenciais para reduzir interrupções.",
  },
  {
    question: "Posso usar o Noogym em mais de uma unidade?",
    answer:
      "Sim. Os planos avançados permitem gerir múltiplas unidades com relatórios consolidados e permissões por equipa.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "A plataforma suporta registo de pagamentos, cobranças recorrentes e pode ser preparada para integrações locais de pagamento. Inclui módulo de faturação certificado pela AGT.",
  },
  {
    question: "O módulo de faturação é certificado pela AGT?",
    answer:
      "Sim. O Noogym inclui um módulo de faturação certificado pela AGT para apoiar a emissão e organização fiscal do ginásio.",
  },
  {
    question: "A equipa ajuda na configuração inicial do sistema?",
    answer:
      "Sim. A equipa Noogym acompanha a configuração inicial, ajuda a preparar os dados essenciais e orienta a equipa do ginásio para começar a usar a plataforma com segurança.",
  },
  {
    question: "Existe contrato de fidelidade?",
    answer:
      "Os detalhes comerciais são definidos na demonstração, de acordo com o tamanho e a necessidade do seu ginásio.",
  },
];

export const modalBenefits = [
  { icon: TrendingUp, text: "Aumente a retenção de alunos" },
  { icon: CreditCard, text: "Reduza a inadimplência e faltas" },
  { icon: Gauge, text: "Automatize tarefas e economize tempo" },
  { icon: BarChart3, text: "Tenha relatórios em tempo real" },
];

export const heroBadges = [
  { icon: CheckCircle2, text: "Setup rápido" },
  { icon: Dumbbell, text: "Suporte em Angola" },
  { icon: Zap, text: "Funciona offline" },
];

export const whatsappUrl =
  "https://api.whatsapp.com/send?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o%20do%20Noogym%20para%20o%20meu%20gin%C3%A1sio.";

export const studentOptions = [
  "Até 100",
  "101-300",
  "301-500",
  "501-1000",
  "Mais de 1000",
];

export const unitOptions = [
  "1 unidade",
  "2-3 unidades",
  "4-10 unidades",
  "Mais de 10",
];

export const challengeOptions = [
  "Pagamentos atrasados",
  "Controle de acesso",
  "Falta de relatórios",
  "Gestão de alunos",
  "Retenção de alunos",
  "Outro",
];
