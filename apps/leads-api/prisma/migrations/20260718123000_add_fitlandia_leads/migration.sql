-- CreateTable
CREATE TABLE "FitlandiaLead" (
    "id" TEXT NOT NULL,
    "profile" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "email" TEXT,
    "city" TEXT,
    "business" TEXT,
    "objective" TEXT,
    "extra" JSONB,
    "source" TEXT NOT NULL DEFAULT 'fitlandia-modal',
    "campaign" TEXT NOT NULL DEFAULT 'fitlandia-2026',
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FitlandiaLead_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "FitlandiaLead_createdAt_idx" ON "FitlandiaLead"("createdAt");

-- CreateIndex
CREATE INDEX "FitlandiaLead_profile_idx" ON "FitlandiaLead"("profile");

-- CreateIndex
CREATE INDEX "FitlandiaLead_whatsapp_idx" ON "FitlandiaLead"("whatsapp");

-- CreateIndex
CREATE INDEX "FitlandiaLead_campaign_idx" ON "FitlandiaLead"("campaign");
