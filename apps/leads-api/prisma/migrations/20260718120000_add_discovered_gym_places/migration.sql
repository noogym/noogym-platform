-- CreateTable
CREATE TABLE "DiscoveredGymPlace" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL DEFAULT 'google',
    "placeId" TEXT NOT NULL,
    "matchedGymId" TEXT,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "city" TEXT,
    "country" TEXT NOT NULL DEFAULT 'Angola',
    "latitude" DECIMAL(10,7),
    "longitude" DECIMAL(10,7),
    "rating" DOUBLE PRECISION,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "openNow" BOOLEAN,
    "types" JSONB,
    "status" TEXT NOT NULL DEFAULT 'DISCOVERED',
    "lastFetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "hiddenAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiscoveredGymPlace_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscoveredGymPlace_provider_placeId_key" ON "DiscoveredGymPlace"("provider", "placeId");

-- CreateIndex
CREATE INDEX "DiscoveredGymPlace_provider_expiresAt_idx" ON "DiscoveredGymPlace"("provider", "expiresAt");

-- CreateIndex
CREATE INDEX "DiscoveredGymPlace_status_idx" ON "DiscoveredGymPlace"("status");

-- CreateIndex
CREATE INDEX "DiscoveredGymPlace_matchedGymId_idx" ON "DiscoveredGymPlace"("matchedGymId");

-- AddForeignKey
ALTER TABLE "DiscoveredGymPlace" ADD CONSTRAINT "DiscoveredGymPlace_matchedGymId_fkey" FOREIGN KEY ("matchedGymId") REFERENCES "Gym"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "PlaceDiscoverySearch" (
    "id" TEXT NOT NULL,
    "provider" TEXT NOT NULL DEFAULT 'google',
    "cacheKey" TEXT NOT NULL,
    "latitude" DECIMAL(10,7) NOT NULL,
    "longitude" DECIMAL(10,7) NOT NULL,
    "radiusMeters" INTEGER NOT NULL,
    "limit" INTEGER NOT NULL,
    "resultCount" INTEGER NOT NULL DEFAULT 0,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PlaceDiscoverySearch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PlaceDiscoverySearch_provider_cacheKey_key" ON "PlaceDiscoverySearch"("provider", "cacheKey");

-- CreateIndex
CREATE INDEX "PlaceDiscoverySearch_provider_expiresAt_idx" ON "PlaceDiscoverySearch"("provider", "expiresAt");
