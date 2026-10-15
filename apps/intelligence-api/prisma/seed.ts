import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  await prisma.source.upsert({
    where: { id: "seed-federacao-fitness-angola" },
    create: {
      id: "seed-federacao-fitness-angola",
      name: "Federação Fitness Angola",
      url: "fixture://federacao-fitness-angola",
      sourceType: "federation",
      country: "Angola",
      province: "Luanda",
      city: "Luanda",
      trustScore: 92,
      robotsPolicy: "fixture-local",
      notes: "Fonte ficticia local para desenvolvimento.",
    },
    update: {},
  });

  await prisma.source.upsert({
    where: { id: "seed-luanda-gym-news" },
    create: {
      id: "seed-luanda-gym-news",
      name: "Luanda Gym News",
      url: "fixture://luanda-gym-news",
      sourceType: "media",
      country: "Angola",
      province: "Luanda",
      city: "Luanda",
      trustScore: 72,
      robotsPolicy: "fixture-local",
      notes: "Fonte ficticia local para testar ingestao.",
    },
    update: {},
  });

  await prisma.source.upsert({
    where: { id: "seed-running-angola" },
    create: {
      id: "seed-running-angola",
      name: "Running Angola",
      url: "fixture://running-angola",
      sourceType: "eventOrganizer",
      country: "Angola",
      province: "Benguela",
      city: "Benguela",
      trustScore: 78,
      robotsPolicy: "fixture-local",
      notes: "Fonte ficticia local para eventos.",
    },
    update: {},
  });
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
