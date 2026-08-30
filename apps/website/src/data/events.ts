import generatedPublications from "./generated/intelligence-publications.json";

export type EventOrigin = "noogym" | "partner" | "community" | "external";

export type EventItem = {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  city: string;
  province: string;
  origin: EventOrigin;
  organizer: string;
  status?: "draft" | "pending_review" | "approved" | "rejected" | "published" | "archived";
  price?: string;
  registrationUrl?: string;
  sourceName?: string;
  participants: number;
  image: string;
  description: string;
};

export const eventCategories = ["Todos os eventos", "Desafios", "Competições", "Workshops", "Aulas especiais", "Corridas", "Webinars", "Bodybuilding", "Wellness"];

export const events: EventItem[] = [
  { id: "desafio-30", title: "Desafio 30 Dias Noogym", category: "Desafios", date: "01 Jun - 30 Jun 2024", time: "Online", location: "Noogym App", city: "Online", province: "Angola", origin: "noogym", organizer: "Noogym", status: "published", participants: 1245, image: "/images/events/noogym-events/desafio-30-noogym.png", description: "Transforme seu corpo e sua mente em 30 dias com treinos guiados e prêmios exclusivos." },
  { id: "run-10k", title: "Noogym Run Luanda 10K", category: "Corridas", date: "15 Jun 2024", time: "06:00", location: "Marginal de Luanda", city: "Luanda", province: "Luanda", origin: "noogym", organizer: "Noogym", status: "published", participants: 892, image: "/images/events/noogym-events/noogym-run-luanda-10k.png", description: "Corrida de 10km pelas principais ruas da cidade. Superação, saúde e energia." },
  { id: "hipertrofia", title: "Workshop: Hipertrofia Inteligente", category: "Workshops", date: "25 Jun 2024", time: "09:00", location: "Noogym Center", city: "Luanda", province: "Luanda", origin: "noogym", organizer: "Noogym", status: "published", participants: 156, image: "/images/events/noogym-events/workshop-hipertrofia-inteligente.png", description: "Aprenda técnicas avançadas para ganhos de massa muscular com especialistas." },
  { id: "yoga", title: "Yoga Recovery", category: "Aulas especiais", date: "25 Mai 2024", time: "08:00", location: "Noogym Center", city: "Luanda", province: "Luanda", origin: "partner", organizer: "Noogym Center", status: "published", participants: 88, image: "/assets/events-reference.png", description: "Sessão de recuperação ativa, mobilidade e respiração." },
  { id: "supino", title: "Competição de Supino", category: "Competições", date: "08 Jun 2024", time: "14:00", location: "Iron House Fitness", city: "Luanda", province: "Luanda", origin: "community", organizer: "Iron House Fitness", status: "published", participants: 210, image: "/assets/events-reference.png", description: "Teste força, técnica e foco em uma competição aberta à comunidade." },
  { id: "bodybuilding-benguela", title: "Open Bodybuilding Benguela", category: "Bodybuilding", date: "12 Set 2026", time: "16:00", location: "Pavilhão Multiusos de Benguela", city: "Benguela", province: "Benguela", origin: "external", organizer: "Organização local", status: "published", price: "A confirmar", sourceName: "Submissão em revisão editorial", participants: 320, image: "/assets/events-reference.png", description: "Competição externa listada como parte da agenda fitness nacional, sujeita a confirmação do organizador." },
  { id: "wellness-lubango", title: "Manhã Wellness Lubango", category: "Wellness", date: "19 Set 2026", time: "07:30", location: "Jardim da Nossa Senhora do Monte", city: "Lubango", province: "Huíla", origin: "community", organizer: "Comunidade Wellness Huíla", status: "published", price: "Gratuito", sourceName: "Submissão da comunidade", participants: 140, image: "/images/gyms/noogym-network/body-positive.png", description: "Aula aberta com mobilidade, caminhada leve e conversa sobre hábitos saudáveis." },
  ...(generatedPublications.events as EventItem[]),
];

export const eventsByProvince = events.reduce<Record<string, EventItem[]>>((acc, event) => {
  const province = event.province || "Angola";
  acc[province] = [...(acc[province] ?? []), event];
  return acc;
}, {});
