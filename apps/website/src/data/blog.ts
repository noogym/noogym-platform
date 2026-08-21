export type Article = {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  author: string;
};

export const blogCategories = ["Todos", "Treino", "Nutrição", "Saúde", "Mindset", "Tecnologia", "Histórias", "Noogym"];

export const articles: Article[] = [
  { id: "forca", title: "5 estratégias para aumentar sua força e performance", category: "Treino", date: "15 Mai 2024", readTime: "6 min", image: "/images/blog/noogym-articles/forca-performance.png", summary: "Técnicas comprovadas para quebrar platôs e alcançar novos níveis.", author: "Ricardo Domingos" },
  { id: "alimentacao", title: "Alimentação pré e pós treino: o que realmente funciona", category: "Nutrição", date: "12 Mai 2024", readTime: "5 min", image: "/images/blog/noogym-articles/alimentacao-pre-pos-treino.png", summary: "Guia completo para potencializar seus treinos com a nutrição certa.", author: "Dra. Ana Luísa" },
  { id: "ia", title: "Como a IA do Noogym otimiza seus resultados", category: "Tecnologia", date: "10 Mai 2024", readTime: "4 min", image: "/images/blog/noogym-articles/ia-noogym-resultados.png", summary: "Entenda como nossa inteligência artificial personaliza seus treinos.", author: "Equipe Noogym" },
  { id: "funcional", title: "Treino funcional x musculação: qual é melhor para você?", category: "Treino", date: "14 Mai 2024", readTime: "7 min", image: "/images/blog/noogym-articles/treino-funcional-musculacao.png", summary: "Entenda diferenças, benefícios e como escolher o treino ideal.", author: "Carlos Mendes" },
  { id: "carboidratos", title: "Carboidratos: inimigos ou aliados?", category: "Nutrição", date: "13 Mai 2024", readTime: "6 min", image: "/images/blog/noogym-articles/carboidratos-aliados.png", summary: "Descubra a verdade sobre carboidratos e como incluí-los na dieta.", author: "Dra. Ana Luísa" },
  { id: "sono", title: "Sono de qualidade: o pilar esquecido dos resultados", category: "Saúde", date: "11 Mai 2024", readTime: "5 min", image: "/images/blog/noogym-articles/sono-qualidade-resultados.png", summary: "Aprenda como melhorar seu sono e potencializar sua recuperação.", author: "Equipe Noogym" },
];
