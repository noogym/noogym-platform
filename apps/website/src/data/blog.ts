import generatedPublications from "./generated/intelligence-publications.json";

export type Article = {
  id: string;
  title: string;
  category: string;
  contentType?: "editorial" | "news" | "community";
  date: string;
  readTime: string;
  image: string;
  summary: string;
  author: string;
  city?: string;
  province?: string;
  sourceName?: string;
  sourceUrl?: string;
  sourcePublishedAt?: string;
  verificationStatus?: "draft" | "pending_review" | "approved" | "published";
};

export const blogCategories = ["Todos", "Treino", "Nutrição", "Saúde", "Mindset", "Tecnologia", "Histórias", "Noogym", "Atualidade"];

export const articles: Article[] = [
  { id: "forca", title: "5 estratégias para aumentar sua força e performance", category: "Treino", contentType: "editorial", date: "15 Mai 2024", readTime: "6 min", image: "/images/blog/noogym-articles/forca-performance.png", summary: "Técnicas comprovadas para quebrar platôs e alcançar novos níveis.", author: "Ricardo Domingos" },
  { id: "alimentacao", title: "Alimentação pré e pós treino: o que realmente funciona", category: "Nutrição", contentType: "editorial", date: "12 Mai 2024", readTime: "5 min", image: "/images/blog/noogym-articles/alimentacao-pre-pos-treino.png", summary: "Guia completo para potencializar seus treinos com a nutrição certa.", author: "Dra. Ana Luísa" },
  { id: "ia", title: "Como a IA do Noogym otimiza seus resultados", category: "Tecnologia", contentType: "editorial", date: "10 Mai 2024", readTime: "4 min", image: "/images/blog/noogym-articles/ia-noogym-resultados.png", summary: "Entenda como nossa inteligência artificial personaliza seus treinos.", author: "Equipe Noogym" },
  { id: "funcional", title: "Treino funcional x musculação: qual é melhor para você?", category: "Treino", contentType: "editorial", date: "14 Mai 2024", readTime: "7 min", image: "/images/blog/noogym-articles/treino-funcional-musculacao.png", summary: "Entenda diferenças, benefícios e como escolher o treino ideal.", author: "Carlos Mendes" },
  { id: "carboidratos", title: "Carboidratos: inimigos ou aliados?", category: "Nutrição", contentType: "editorial", date: "13 Mai 2024", readTime: "6 min", image: "/images/blog/noogym-articles/carboidratos-aliados.png", summary: "Descubra a verdade sobre carboidratos e como incluí-los na dieta.", author: "Dra. Ana Luísa" },
  { id: "sono", title: "Sono de qualidade: o pilar esquecido dos resultados", category: "Saúde", contentType: "editorial", date: "11 Mai 2024", readTime: "5 min", image: "/images/blog/noogym-articles/sono-qualidade-resultados.png", summary: "Aprenda como melhorar seu sono e potencializar sua recuperação.", author: "Equipe Noogym" },
  { id: "bodybuilding-luanda", title: "Competição de bodybuilding reúne atletas em Luanda", category: "Atualidade", contentType: "news", date: "29 Ago 2026", readTime: "3 min", image: "/assets/blog-reference.png", summary: "Resumo editorial sobre uma competição aberta e o crescimento da modalidade na capital.", author: "Redação Noogym", city: "Luanda", province: "Luanda", sourceName: "Fonte comunitária verificada", sourceUrl: "#", sourcePublishedAt: "29 Ago 2026", verificationStatus: "approved" },
  { id: "running-benguela", title: "Corrida comunitária ganha nova edição em Benguela", category: "Atualidade", contentType: "community", date: "28 Ago 2026", readTime: "2 min", image: "/assets/events-reference.png", summary: "Organizadores locais preparam uma manhã de corrida, saúde e integração para atletas amadores.", author: "Redação Noogym", city: "Benguela", province: "Benguela", sourceName: "Submissão da comunidade", sourceUrl: "#", sourcePublishedAt: "28 Ago 2026", verificationStatus: "approved" },
  { id: "novo-ginasio-huila", title: "Novo ginásio anuncia abertura experimental na Huíla", category: "Atualidade", contentType: "news", date: "27 Ago 2026", readTime: "2 min", image: "/images/gyms/noogym-network/elite-training.png", summary: "A pré-abertura inclui aulas especiais, avaliação física e vagas para personal trainers parceiros.", author: "Redação Noogym", city: "Lubango", province: "Huíla", sourceName: "Diretório fitness local", sourceUrl: "#", sourcePublishedAt: "27 Ago 2026", verificationStatus: "approved" },
  ...(generatedPublications.articles as Article[]),
];

export const fitnessUpdates = articles.filter((article) => article.contentType === "news" || article.contentType === "community");
