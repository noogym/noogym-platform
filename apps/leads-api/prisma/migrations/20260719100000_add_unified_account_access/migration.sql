-- CreateEnum
CREATE TYPE "NoogymAccessScope" AS ENUM ('SITE', 'MOBILE_APP', 'GYM_ERP', 'PERSONAL_PANEL', 'MARKET_SELLER', 'ADMIN_PANEL');

-- CreateEnum
CREATE TYPE "AccessStatus" AS ENUM ('ACTIVE', 'PENDING', 'SUSPENDED', 'REVOKED');

-- CreateEnum
CREATE TYPE "GymStaffRole" AS ENUM ('OWNER', 'MANAGER', 'RECEPTION', 'TRAINER', 'FINANCE');

-- CreateTable
CREATE TABLE "UserAccess" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "scope" "NoogymAccessScope" NOT NULL,
    "status" "AccessStatus" NOT NULL DEFAULT 'ACTIVE',
    "requestedAt" TIMESTAMP(3),
    "approvedAt" TIMESTAMP(3),
    "revokedAt" TIMESTAMP(3),
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAccess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GymStaffMembership" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gymId" TEXT NOT NULL,
    "role" "GymStaffRole" NOT NULL,
    "status" "AccessStatus" NOT NULL DEFAULT 'PENDING',
    "invitedBy" TEXT,
    "invitedAt" TIMESTAMP(3),
    "approvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GymStaffMembership_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAccess_userId_scope_key" ON "UserAccess"("userId", "scope");

-- CreateIndex
CREATE INDEX "UserAccess_scope_status_idx" ON "UserAccess"("scope", "status");

-- CreateIndex
CREATE INDEX "UserAccess_userId_status_idx" ON "UserAccess"("userId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "GymStaffMembership_userId_gymId_role_key" ON "GymStaffMembership"("userId", "gymId", "role");

-- CreateIndex
CREATE INDEX "GymStaffMembership_gymId_status_idx" ON "GymStaffMembership"("gymId", "status");

-- CreateIndex
CREATE INDEX "GymStaffMembership_userId_status_idx" ON "GymStaffMembership"("userId", "status");

-- AddForeignKey
ALTER TABLE "UserAccess" ADD CONSTRAINT "UserAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GymStaffMembership" ADD CONSTRAINT "GymStaffMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GymStaffMembership" ADD CONSTRAINT "GymStaffMembership_gymId_fkey" FOREIGN KEY ("gymId") REFERENCES "Gym"("id") ON DELETE CASCADE ON UPDATE CASCADE;
