export type Gym = {
  source?: "noogym" | "google";
  placeId?: string;
  slug: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  distance: string;
  price: number;
  image: string;
  tags: string[];
  features: string[];
  hours: { day: string; time: string }[];
  address?: string;
  hasPhoto?: boolean;
  latitude?: number | null;
  longitude?: number | null;
  openNow?: boolean | null;
  phone?: string;
  photoUrl?: string;
  isPartner?: boolean;
  website?: string;
};

export const gyms: Gym[] = [
  {
    slug: "noogym-center",
    name: "Noogym Center",
    rating: 4.8,
    reviews: 256,
    location: "Maianga, Luanda",
    distance: "2,4 km",
    price: 17900,
    latitude: -8.8328,
    longitude: 13.2425,
    image: "/images/gyms/noogym-network/noogym-center.png",
    tags: ["Musculação", "Aulas coletivas", "Personal trainer", "Vestiários"],
    features: ["Musculação", "Aulas coletivas", "Personal Trainer", "Estacionamento", "Vestiários", "Wi-Fi", "Ar condicionado", "Cacifos", "Balança corporal", "Área de alongamento", "Bebedouros", "Loja de suplementos"],
    hours: [
      { day: "Segunda - Sexta", time: "05:00 - 22:00" },
      { day: "Sábado", time: "06:00 - 20:00" },
      { day: "Domingo", time: "06:00 - 14:00" },
    ],
  },
  {
    slug: "iron-house-fitness",
    name: "Iron House Fitness",
    rating: 4.6,
    reviews: 189,
    location: "Talatona, Luanda",
    distance: "4,1 km",
    price: 19900,
    latitude: -8.9187,
    longitude: 13.1849,
    image: "/images/gyms/noogym-network/iron-house-fitness.png",
    tags: ["Musculação", "Funcional", "Personal trainer", "Estacionamento"],
    features: ["Musculação", "Funcional", "Personal Trainer", "Estacionamento", "Wi-Fi"],
    hours: [
      { day: "Segunda - Sexta", time: "05:30 - 21:30" },
      { day: "Sábado", time: "07:00 - 19:00" },
      { day: "Domingo", time: "07:00 - 13:00" },
    ],
  },
  {
    slug: "elite-training",
    name: "Elite Training",
    rating: 4.7,
    reviews: 132,
    location: "Ingombota, Luanda",
    distance: "3,7 km",
    price: 24900,
    latitude: -8.8131,
    longitude: 13.2359,
    image: "/images/gyms/noogym-network/elite-training.png",
    tags: ["Musculação", "CrossFit", "Lutas", "Vestiários"],
    features: ["Musculação", "CrossFit", "Lutas", "Vestiários", "Ar condicionado"],
    hours: [
      { day: "Segunda - Sexta", time: "06:00 - 22:00" },
      { day: "Sábado", time: "07:00 - 20:00" },
      { day: "Domingo", time: "Fechado" },
    ],
  },
  {
    slug: "body-positive",
    name: "Body Positive",
    rating: 4.5,
    reviews: 98,
    location: "Miramar, Luanda",
    distance: "5,6 km",
    price: 14900,
    latitude: -8.8117,
    longitude: 13.2416,
    image: "/images/gyms/noogym-network/body-positive.png",
    tags: ["Musculação", "Yoga", "Pilates", "Aulas coletivas"],
    features: ["Musculação", "Yoga", "Pilates", "Aulas coletivas", "Bebedouros"],
    hours: [
      { day: "Segunda - Sexta", time: "06:00 - 21:00" },
      { day: "Sábado", time: "07:00 - 18:00" },
      { day: "Domingo", time: "08:00 - 12:00" },
    ],
  },
  {
    slug: "crossfit-angola",
    name: "CrossFit Angola",
    rating: 4.7,
    reviews: 430,
    location: "Benfica, Luanda",
    distance: "7,2 km",
    price: 39900,
    latitude: -8.9825,
    longitude: 13.1877,
    image: "/images/gyms/noogym-network/crossfit-angola.png",
    tags: ["CrossFit", "Funcional", "Premium"],
    features: ["CrossFit", "Funcional", "Personal Trainer", "Estacionamento"],
    hours: [
      { day: "Segunda - Sexta", time: "05:00 - 22:00" },
      { day: "Sábado", time: "06:00 - 18:00" },
      { day: "Domingo", time: "Fechado" },
    ],
  },
  {
    slug: "move-fitness",
    name: "Move Fitness",
    rating: 4.6,
    reviews: 215,
    location: "Kilamba, Luanda",
    distance: "6,3 km",
    price: 22900,
    latitude: -8.9997,
    longitude: 13.2804,
    image: "/images/gyms/noogym-network/move-fitness.png",
    tags: ["Musculação", "Funcional", "Premium", "Cardio"],
    features: ["Musculação", "Funcional", "Cardio", "Personal Trainer", "Wi-Fi", "Ar condicionado"],
    hours: [
      { day: "Segunda - Sexta", time: "05:30 - 22:00" },
      { day: "Sábado", time: "06:30 - 19:00" },
      { day: "Domingo", time: "07:00 - 13:00" },
    ],
  },
];

export const gymClasses = ["Spinning", "Funcional", "Yoga", "Zumba", "Boxe", "HIIT"];
