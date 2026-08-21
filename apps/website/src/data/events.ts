export type EventItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  image: string;
  description: string;
};

export const eventCategories = ["Todos os eventos", "Desafios", "Competições", "Workshops", "Aulas especiais", "Corridas", "Webinars"];

export const events: EventItem[] = [
  { id: "desafio-30", title: "Desafio 30 Dias Noogym", category: "Desafios", date: "01 Jun - 30 Jun 2024", time: "Online", location: "Noogym App", participants: 1245, image: "/images/events/noogym-events/desafio-30-noogym.png", description: "Transforme seu corpo e sua mente em 30 dias com treinos guiados e prêmios exclusivos." },
  { id: "run-10k", title: "Noogym Run Luanda 10K", category: "Corridas", date: "15 Jun 2024", time: "06:00", location: "Marginal de Luanda", participants: 892, image: "/images/events/noogym-events/noogym-run-luanda-10k.png", description: "Corrida de 10km pelas principais ruas da cidade. Superação, saúde e energia." },
  { id: "hipertrofia", title: "Workshop: Hipertrofia Inteligente", category: "Workshops", date: "25 Jun 2024", time: "09:00", location: "Noogym Center", participants: 156, image: "/images/events/noogym-events/workshop-hipertrofia-inteligente.png", description: "Aprenda técnicas avançadas para ganhos de massa muscular com especialistas." },
  { id: "yoga", title: "Yoga Recovery", category: "Aulas especiais", date: "25 Mai 2024", time: "08:00", location: "Noogym Center", participants: 88, image: "/assets/events-reference.png", description: "Sessão de recuperação ativa, mobilidade e respiração." },
  { id: "supino", title: "Competição de Supino", category: "Competições", date: "08 Jun 2024", time: "14:00", location: "Iron House Fitness", participants: 210, image: "/assets/events-reference.png", description: "Teste força, técnica e foco em uma competição aberta à comunidade." },
];
