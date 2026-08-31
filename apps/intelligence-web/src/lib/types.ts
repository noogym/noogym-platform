export type DashboardMetrics = {
  sources: number;
  discoveredToday: number;
  contents: number;
  events: number;
  duplicates: number;
  reviewRequired: number;
  approved: number;
  rejected: number;
  failedJobs: number;
  pipeline?: Record<string, number>;
  recentJobs?: CrawlJob[];
};

export type Source = {
  id: string;
  name: string;
  url: string;
  sourceType: string;
  trustScore: number;
  status: string;
  enabled: boolean;
  updateFrequency: string;
  lastSuccessfulCheckAt?: string | null;
  crawlDelayMs?: number;
  contentSelector?: string | null;
  titleSelector?: string | null;
};

export type ContentItem = {
  id: string;
  title: string;
  contentType: string;
  category?: string | null;
  confidence: number;
  relevanceScore: number;
  trustScore?: number;
  editorialStatus: string;
  duplicateStatus: string;
  duplicateReason?: string | null;
  scoreExplanation?: {
    matchedCategoryTerms?: string[];
    matchedLocation?: string;
    sourceTrustScore?: number;
    formula?: string;
  } | null;
  city?: string | null;
  province?: string | null;
  summary?: string | null;
  cleanText?: string;
  draft?: unknown;
  socialDraft?: unknown;
  rawContent?: {
    canonicalUrl?: string | null;
    rawText?: string;
    source?: Source;
  };
};

export type EventCandidate = {
  id: string;
  name: string;
  category?: string | null;
  city?: string | null;
  province?: string | null;
  organizer?: string | null;
  origin: string;
  confidence: number;
  editorialStatus: string;
  verificationStatus: string;
  duplicateStatus: string;
  duplicateReason?: string | null;
  startDate?: string | null;
  description?: string | null;
  sourceUrl?: string | null;
};

export type CrawlJob = {
  id: string;
  name: string;
  sourceId?: string | null;
  jobType?: string;
  status: string;
  attempts: number;
  discoveredCount?: number;
  processedCount?: number;
  error?: string | null;
  createdAt: string;
  finishedAt?: string | null;
};
