import type { ContentItem, CrawlJob, DashboardMetrics, EventCandidate, Source } from "./types";

export const demoMetrics: DashboardMetrics = {
  sources: 3,
  discoveredToday: 3,
  contents: 2,
  events: 1,
  duplicates: 1,
  reviewRequired: 2,
  approved: 1,
  rejected: 0,
  failedJobs: 0,
};

export const demoSources: Source[] = [
  { id: "seed-federacao-fitness-angola", name: "Federação Fitness Angola", url: "fixture://federacao-fitness-angola", sourceType: "federation", trustScore: 92, status: "active", enabled: true, updateFrequency: "daily" },
  { id: "seed-luanda-gym-news", name: "Luanda Gym News", url: "fixture://luanda-gym-news", sourceType: "media", trustScore: 72, status: "active", enabled: true, updateFrequency: "daily" },
  { id: "seed-running-angola", name: "Running Angola", url: "fixture://running-angola", sourceType: "eventOrganizer", trustScore: 78, status: "active", enabled: true, updateFrequency: "daily" },
];

export const demoContents: ContentItem[] = [
  { id: "content-1", title: "Campeonato Nacional de Bodybuilding anunciado em Luanda", contentType: "event", category: "bodybuilding", confidence: 92, relevanceScore: 94, editorialStatus: "REVIEW_REQUIRED", duplicateStatus: "unique", city: "Luanda", province: "Luanda", summary: "Competição anunciada por fonte federativa.", rawContent: { source: demoSources[0] } },
  { id: "content-2", title: "Novo ginásio abre fase experimental em Luanda", contentType: "news", category: "ginásios", confidence: 74, relevanceScore: 81, editorialStatus: "CLASSIFIED", duplicateStatus: "unique", city: "Luanda", province: "Luanda", summary: "Abertura experimental com aulas especiais.", rawContent: { source: demoSources[1] } },
];

export const demoEvents: EventCandidate[] = [
  { id: "event-1", name: "Fitness Run Benguela edição 2026", category: "corrida", city: "Benguela", province: "Benguela", organizer: "Running Angola", origin: "external", confidence: 88, editorialStatus: "REVIEW_REQUIRED", verificationStatus: "pending_review", duplicateStatus: "unique", startDate: "2026-09-12T00:00:00.000Z" },
];

export const demoJobs: CrawlJob[] = [
  { id: "job-1", name: "crawlSource", sourceId: "seed-running-angola", status: "completed", attempts: 1, createdAt: new Date().toISOString() },
];
