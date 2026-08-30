-- AlterEnum
ALTER TYPE "RawContentStatus" ADD VALUE IF NOT EXISTS 'blocked_by_robots';
ALTER TYPE "RawContentStatus" ADD VALUE IF NOT EXISTS 'timeout';
ALTER TYPE "RawContentStatus" ADD VALUE IF NOT EXISTS 'parse_failed';

-- AlterEnum
ALTER TYPE "EditorialStatus" ADD VALUE IF NOT EXISTS 'SCHEDULED';

-- AlterTable
ALTER TABLE "Source" ADD COLUMN IF NOT EXISTS "crawlDelayMs" INTEGER NOT NULL DEFAULT 1500;
ALTER TABLE "Source" ADD COLUMN IF NOT EXISTS "lastSeenHash" TEXT;
ALTER TABLE "Source" ADD COLUMN IF NOT EXISTS "contentSelector" TEXT;
ALTER TABLE "Source" ADD COLUMN IF NOT EXISTS "titleSelector" TEXT;

-- AlterTable
ALTER TABLE "Content" ADD COLUMN IF NOT EXISTS "duplicateReason" TEXT;
ALTER TABLE "Content" ADD COLUMN IF NOT EXISTS "scoreExplanation" JSONB;
ALTER TABLE "Content" ADD COLUMN IF NOT EXISTS "scheduledFor" TIMESTAMP(3);
ALTER TABLE "Content" ADD COLUMN IF NOT EXISTS "publishedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "EventCandidate" ADD COLUMN IF NOT EXISTS "duplicateOfId" TEXT;
ALTER TABLE "EventCandidate" ADD COLUMN IF NOT EXISTS "duplicateReason" TEXT;
ALTER TABLE "EventCandidate" ADD COLUMN IF NOT EXISTS "scheduledFor" TIMESTAMP(3);
ALTER TABLE "EventCandidate" ADD COLUMN IF NOT EXISTS "publishedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "CrawlJob" ADD COLUMN IF NOT EXISTS "jobType" TEXT NOT NULL DEFAULT 'crawl';
ALTER TABLE "CrawlJob" ADD COLUMN IF NOT EXISTS "discoveredCount" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "CrawlJob" ADD COLUMN IF NOT EXISTS "processedCount" INTEGER NOT NULL DEFAULT 0;

-- Indexes
CREATE INDEX IF NOT EXISTS "Source_lastSeenHash_idx" ON "Source"("lastSeenHash");
CREATE INDEX IF NOT EXISTS "Content_createdAt_idx" ON "Content"("createdAt");
CREATE INDEX IF NOT EXISTS "Content_scheduledFor_idx" ON "Content"("scheduledFor");
CREATE INDEX IF NOT EXISTS "Content_publishedAt_idx" ON "Content"("publishedAt");
CREATE INDEX IF NOT EXISTS "EventCandidate_createdAt_idx" ON "EventCandidate"("createdAt");
CREATE INDEX IF NOT EXISTS "EventCandidate_scheduledFor_idx" ON "EventCandidate"("scheduledFor");
CREATE INDEX IF NOT EXISTS "EventCandidate_publishedAt_idx" ON "EventCandidate"("publishedAt");
CREATE INDEX IF NOT EXISTS "CrawlJob_jobType_status_idx" ON "CrawlJob"("jobType", "status");
