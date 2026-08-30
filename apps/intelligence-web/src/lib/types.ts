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
  city?: string | null;
  province?: string | null;
  summary?: string | null;
  rawContent?: {
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
  startDate?: string | null;
};

export type CrawlJob = {
  id: string;
  name: string;
  sourceId?: string | null;
  status: string;
  attempts: number;
  error?: string | null;
  createdAt: string;
};
