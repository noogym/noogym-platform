export type Plan = {
  name: string;
  subtitle: string;
  priceFrom: number;
  priceNote: string;
  access: string;
  partnerRule: string;
  coaching: string[];
  popular?: boolean;
  features: string[];
};

export type GymPlanPrice = {
  gym: string;
  location: string;
  essential: number;
  plus: number;
  total?: number;
};

export const plans: Plan[] = [
  {
    name: "Essencial",
    subtitle: "Para treinar num ginásio parceiro",
    priceFrom: 14900,
    priceNote: "Preço final definido pelo ginásio selecionado.",
    access: "1 ginásio parceiro",
    partnerRule: "Ideal para ginásios que querem manter sua mensalidade base.",
    coaching: ["Treino base por objetivo", "Guia alimentar inicial", "Personal como extra"],
    features: [
      "Acesso a 1 ginásio parceiro",
      "Check-in digital Noogym",
      "Programa de treino base",
      "Guia alimentar com metas simples",
      "Histórico de presença",
      "Participação em desafios básicos",
      "Pagamento mensal pela Noogym",
      "Suporte padrão",
    ],
  },
  {
    name: "Plus",
    subtitle: "Mais flexibilidade na rede Noogym",
    priceFrom: 24900,
    priceNote: "Inclui ginásios selecionados conforme parceria e capacidade.",
    access: "Rede selecionada",
    partnerRule: "Bom equilíbrio entre acesso, benefícios e repasse ao parceiro.",
    coaching: ["Treino personalizado", "Plano nutricional base", "1 revisão mensal"],
    popular: true,
    features: [
      "Acesso a ginásios selecionados",
      "Check-in digital ilimitado nos ginásios incluídos",
      "Programa de treino personalizado por objetivo",
      "Plano nutricional base",
      "1 revisão mensal de treino",
      "Histórico de treinos e presença",
      "Desafios e benefícios Noogym",
      "Descontos no marketplace",
      "Suporte prioritário",
    ],
  },
  {
    name: "Total",
    subtitle: "Experiência completa com prioridade",
    priceFrom: 39900,
    priceNote: "Disponibilidade depende dos ginásios premium aderentes.",
    access: "Rede ampliada",
    partnerRule: "Para parceiros com oferta premium, maior estrutura ou alta procura.",
    coaching: ["Treino personalizado", "Nutrição personalizada", "Sessões com personal"],
    features: [
      "Acesso ampliado à rede Noogym",
      "Prioridade em ginásios populares",
      "Programa de treino personalizado",
      "Plano nutricional personalizado",
      "Sessões com personal trainer incluídas",
      "Avaliação física periódica",
      "Benefícios exclusivos em eventos",
      "Relatórios de evolução",
      "Maiores descontos no marketplace",
      "Suporte premium",
    ],
  },
];

export const gymPlanPrices: GymPlanPrice[] = [
  {
    gym: "Body Positive",
    location: "Miramar, Luanda",
    essential: 14900,
    plus: 24900,
  },
  {
    gym: "Noogym Center",
    location: "Maianga, Luanda",
    essential: 17900,
    plus: 29900,
    total: 44900,
  },
  {
    gym: "CrossFit Angola",
    location: "Benfica, Luanda",
    essential: 24900,
    plus: 39900,
    total: 59900,
  },
];

export const comparison = [
  ["Acesso", "1 ginásio parceiro", "Ginásios selecionados", "Rede ampliada"],
  ["Preço", "Por ginásio", "Por ginásios incluídos", "Por ginásios premium aderentes"],
  ["Check-in", "Digital", "Digital ilimitado", "Digital com prioridade"],
  ["Programa de treino", "Base por objetivo", "Personalizado + revisão mensal", "Personalizado + acompanhamento"],
  ["Plano de nutrição", "Guia alimentar inicial", "Plano nutricional base", "Plano personalizado"],
  ["Personal trainer", "Contratação extra", "1 revisão mensal", "Sessões incluídas conforme ginásio"],
  ["Avaliação física", "Extra", "Incluída em campanhas", "Periódica"],
  ["Evolução", "Presença e rotina", "Treinos e desafios", "Relatórios e benefícios avançados"],
  ["Marketplace", "Preços para membros", "Descontos selecionados", "Melhores condições"],
  ["Eventos", "Campanhas abertas", "Convites e desafios", "Experiências especiais"],
  ["Suporte", "Padrão", "Prioritário", "Premium"],
];
