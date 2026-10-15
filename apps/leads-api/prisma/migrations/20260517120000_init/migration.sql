CREATE TYPE "LeadStatus" AS ENUM (
  'NEW',
  'CONTACTED',
  'DEMO_SCHEDULED',
  'PROPOSAL_SENT',
  'WON',
  'LOST'
);

CREATE TYPE "CurrentStudentsRange" AS ENUM (
  'UP_TO_100',
  'FROM_101_TO_300',
  'FROM_301_TO_500',
  'FROM_501_TO_1000',
  'MORE_THAN_1000'
);

CREATE TYPE "UnitsRange" AS ENUM (
  'ONE',
  'TWO_TO_THREE',
  'FOUR_TO_TEN',
  'MORE_THAN_TEN'
);

CREATE TYPE "MainChallenge" AS ENUM (
  'LATE_PAYMENTS',
  'ACCESS_CONTROL',
  'LACK_OF_REPORTS',
  'STUDENT_MANAGEMENT',
  'STUDENT_RETENTION',
  'OTHER'
);

CREATE TABLE "DemoRequestLead" (
  "id" TEXT NOT NULL,
  "fullName" TEXT NOT NULL,
  "gymName" TEXT NOT NULL,
  "whatsapp" TEXT NOT NULL,
  "email" TEXT,
  "city" TEXT NOT NULL,
  "currentStudentsRange" "CurrentStudentsRange" NOT NULL,
  "unitsRange" "UnitsRange",
  "mainChallenge" "MainChallenge" NOT NULL,
  "message" TEXT,
  "status" "LeadStatus" NOT NULL DEFAULT 'NEW',
  "source" TEXT,
  "campaign" TEXT,
  "utmSource" TEXT,
  "utmMedium" TEXT,
  "utmCampaign" TEXT,
  "utmContent" TEXT,
  "utmTerm" TEXT,
  "ipAddress" TEXT,
  "userAgent" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "DemoRequestLead_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "DemoRequestLead_createdAt_idx" ON "DemoRequestLead"("createdAt");
CREATE INDEX "DemoRequestLead_status_idx" ON "DemoRequestLead"("status");
CREATE INDEX "DemoRequestLead_city_idx" ON "DemoRequestLead"("city");
CREATE INDEX "DemoRequestLead_mainChallenge_idx" ON "DemoRequestLead"("mainChallenge");
CREATE INDEX "DemoRequestLead_whatsapp_gymName_idx" ON "DemoRequestLead"("whatsapp", "gymName");
