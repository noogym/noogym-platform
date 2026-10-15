-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('website', 'rss', 'api', 'federation', 'gym', 'eventOrganizer', 'media', 'blog', 'publicDirectory', 'socialOfficial', 'userSubmission', 'other');

-- CreateEnum
CREATE TYPE "SourceStatus" AS ENUM ('active', 'paused', 'error', 'archived');

-- CreateEnum
CREATE TYPE "RawContentStatus" AS ENUM ('discovered', 'ingested', 'normalized', 'failed', 'duplicate');

-- CreateEnum
CREATE TYPE "IntelligenceContentType" AS ENUM ('article', 'news', 'event', 'announcement', 'profile', 'promotion', 'unknown');

-- CreateEnum
CREATE TYPE "EditorialStatus" AS ENUM ('DISCOVERED', 'INGESTED', 'NORMALIZED', 'CLASSIFIED', 'REVIEW_REQUIRED', 'APPROVED', 'DRAFT_GENERATED', 'READY_TO_PUBLISH', 'PUBLISHED', 'REJECTED', 'DUPLICATE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "DuplicateStatus" AS ENUM ('unique', 'possible_duplicate', 'duplicate', 'merged');

-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('Gym', 'PersonalTrainer', 'Athlete', 'Nutritionist', 'Event', 'Brand', 'Store', 'Federation', 'Club', 'Organization', 'Location');

-- CreateEnum
CREATE TYPE "EventOrigin" AS ENUM ('noogym', 'partner', 'community', 'external');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('unverified', 'pending_review', 'verified', 'rejected');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('pending', 'running', 'completed', 'failed');

-- CreateEnum
CREATE TYPE "PublicationTarget" AS ENUM ('blog', 'events', 'instagram', 'facebook');

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "sourceType" "SourceType" NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'Angola',
    "province" TEXT,
    "city" TEXT,
    "trustScore" INTEGER NOT NULL DEFAULT 50,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "scrapingAllowed" BOOLEAN NOT NULL DEFAULT true,
    "requiresReview" BOOLEAN NOT NULL DEFAULT true,
    "updateFrequency" TEXT NOT NULL DEFAULT 'daily',
    "robotsPolicy" TEXT,
    "notes" TEXT,
    "lastCheckedAt" TIMESTAMP(3),
    "lastSuccessfulCheckAt" TIMESTAMP(3),
    "status" "SourceStatus" NOT NULL DEFAULT 'active',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RawContent" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "externalId" TEXT,
    "canonicalUrl" TEXT,
    "title" TEXT NOT NULL,
    "rawText" TEXT NOT NULL,
    "rawHtml" TEXT,
    "author" TEXT,
    "publishedAt" TIMESTAMP(3),
    "discoveredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contentHash" TEXT NOT NULL,
    "metadata" JSONB,
    "status" "RawContentStatus" NOT NULL DEFAULT 'ingested',
    CONSTRAINT "RawContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL,
    "rawContentId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "cleanText" TEXT NOT NULL,
    "summary" TEXT,
    "contentType" "IntelligenceContentType" NOT NULL DEFAULT 'unknown',
    "category" TEXT,
    "country" TEXT NOT NULL DEFAULT 'Angola',
    "province" TEXT,
    "city" TEXT,
    "confidence" INTEGER NOT NULL DEFAULT 0,
    "fitnessScore" INTEGER NOT NULL DEFAULT 0,
    "angolaScore" INTEGER NOT NULL DEFAULT 0,
    "relevanceScore" INTEGER NOT NULL DEFAULT 0,
    "trustScore" INTEGER NOT NULL DEFAULT 0,
    "duplicateStatus" "DuplicateStatus" NOT NULL DEFAULT 'unique',
    "duplicateOfId" TEXT,
    "editorialStatus" "EditorialStatus" NOT NULL DEFAULT 'NORMALIZED',
    "draft" JSONB,
    "socialDraft" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Content_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "entityType" "EntityType" NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'Angola',
    "province" TEXT,
    "city" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContentEntity" (
    "contentId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "confidence" INTEGER NOT NULL DEFAULT 70,
    "role" TEXT,
    CONSTRAINT "ContentEntity_pkey" PRIMARY KEY ("contentId","entityId")
);

-- CreateTable
CREATE TABLE "EventCandidate" (
    "id" TEXT NOT NULL,
    "contentId" TEXT,
    "sourceId" TEXT,
    "name" TEXT NOT NULL,
    "category" TEXT,
    "description" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "startTime" TEXT,
    "location" TEXT,
    "venue" TEXT,
    "city" TEXT,
    "province" TEXT,
    "country" TEXT NOT NULL DEFAULT 'Angola',
    "organizer" TEXT,
    "origin" "EventOrigin" NOT NULL DEFAULT 'external',
    "price" TEXT,
    "currency" TEXT NOT NULL DEFAULT 'Kz',
    "registrationUrl" TEXT,
    "contact" TEXT,
    "sourceUrl" TEXT,
    "imageUrl" TEXT,
    "confidence" INTEGER NOT NULL DEFAULT 0,
    "verificationStatus" "VerificationStatus" NOT NULL DEFAULT 'pending_review',
    "duplicateStatus" "DuplicateStatus" NOT NULL DEFAULT 'unique',
    "editorialStatus" "EditorialStatus" NOT NULL DEFAULT 'REVIEW_REQUIRED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "EventCandidate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EditorialReview" (
    "id" TEXT NOT NULL,
    "contentId" TEXT,
    "eventCandidateId" TEXT,
    "reviewerId" TEXT,
    "reviewerName" TEXT,
    "status" "EditorialStatus" NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "EditorialReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publication" (
    "id" TEXT NOT NULL,
    "contentId" TEXT,
    "eventCandidateId" TEXT,
    "target" "PublicationTarget" NOT NULL,
    "payload" JSONB NOT NULL,
    "status" "EditorialStatus" NOT NULL DEFAULT 'READY_TO_PUBLISH',
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Publication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CrawlJob" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sourceId" TEXT,
    "status" "JobStatus" NOT NULL DEFAULT 'pending',
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "maxAttempts" INTEGER NOT NULL DEFAULT 3,
    "backoffMs" INTEGER NOT NULL DEFAULT 30000,
    "logs" JSONB,
    "error" TEXT,
    "startedAt" TIMESTAMP(3),
    "finishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "CrawlJob_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "actorId" TEXT,
    "actorName" TEXT,
    "action" TEXT NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- Indexes
CREATE INDEX "Source_sourceType_enabled_idx" ON "Source"("sourceType", "enabled");
CREATE INDEX "Source_country_province_city_idx" ON "Source"("country", "province", "city");
CREATE INDEX "Source_status_idx" ON "Source"("status");
CREATE INDEX "RawContent_sourceId_fetchedAt_idx" ON "RawContent"("sourceId", "fetchedAt");
CREATE INDEX "RawContent_canonicalUrl_idx" ON "RawContent"("canonicalUrl");
CREATE INDEX "RawContent_status_idx" ON "RawContent"("status");
CREATE UNIQUE INDEX "RawContent_sourceId_externalId_key" ON "RawContent"("sourceId", "externalId");
CREATE UNIQUE INDEX "RawContent_contentHash_key" ON "RawContent"("contentHash");
CREATE UNIQUE INDEX "Content_rawContentId_key" ON "Content"("rawContentId");
CREATE INDEX "Content_contentType_editorialStatus_idx" ON "Content"("contentType", "editorialStatus");
CREATE INDEX "Content_category_idx" ON "Content"("category");
CREATE INDEX "Content_country_province_city_idx" ON "Content"("country", "province", "city");
CREATE INDEX "Content_relevanceScore_idx" ON "Content"("relevanceScore");
CREATE INDEX "Content_duplicateStatus_idx" ON "Content"("duplicateStatus");
CREATE INDEX "Entity_entityType_idx" ON "Entity"("entityType");
CREATE INDEX "Entity_country_province_city_idx" ON "Entity"("country", "province", "city");
CREATE UNIQUE INDEX "Entity_name_entityType_country_key" ON "Entity"("name", "entityType", "country");
CREATE INDEX "ContentEntity_entityId_idx" ON "ContentEntity"("entityId");
CREATE UNIQUE INDEX "EventCandidate_contentId_key" ON "EventCandidate"("contentId");
CREATE INDEX "EventCandidate_sourceId_idx" ON "EventCandidate"("sourceId");
CREATE INDEX "EventCandidate_city_province_idx" ON "EventCandidate"("city", "province");
CREATE INDEX "EventCandidate_editorialStatus_idx" ON "EventCandidate"("editorialStatus");
CREATE INDEX "EventCandidate_duplicateStatus_idx" ON "EventCandidate"("duplicateStatus");
CREATE INDEX "EditorialReview_contentId_idx" ON "EditorialReview"("contentId");
CREATE INDEX "EditorialReview_eventCandidateId_idx" ON "EditorialReview"("eventCandidateId");
CREATE INDEX "EditorialReview_status_createdAt_idx" ON "EditorialReview"("status", "createdAt");
CREATE INDEX "Publication_target_status_idx" ON "Publication"("target", "status");
CREATE INDEX "Publication_contentId_idx" ON "Publication"("contentId");
CREATE INDEX "Publication_eventCandidateId_idx" ON "Publication"("eventCandidateId");
CREATE INDEX "CrawlJob_name_status_idx" ON "CrawlJob"("name", "status");
CREATE INDEX "CrawlJob_sourceId_idx" ON "CrawlJob"("sourceId");
CREATE INDEX "AuditLog_entityType_entityId_idx" ON "AuditLog"("entityType", "entityId");
CREATE INDEX "AuditLog_action_createdAt_idx" ON "AuditLog"("action", "createdAt");

-- Foreign keys
ALTER TABLE "RawContent" ADD CONSTRAINT "RawContent_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Content" ADD CONSTRAINT "Content_rawContentId_fkey" FOREIGN KEY ("rawContentId") REFERENCES "RawContent"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ContentEntity" ADD CONSTRAINT "ContentEntity_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ContentEntity" ADD CONSTRAINT "ContentEntity_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "EventCandidate" ADD CONSTRAINT "EventCandidate_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "EventCandidate" ADD CONSTRAINT "EventCandidate_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "EditorialReview" ADD CONSTRAINT "EditorialReview_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "EditorialReview" ADD CONSTRAINT "EditorialReview_eventCandidateId_fkey" FOREIGN KEY ("eventCandidateId") REFERENCES "EventCandidate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_contentId_fkey" FOREIGN KEY ("contentId") REFERENCES "Content"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_eventCandidateId_fkey" FOREIGN KEY ("eventCandidateId") REFERENCES "EventCandidate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
