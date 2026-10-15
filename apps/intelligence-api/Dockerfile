FROM node:22-alpine AS base

WORKDIR /app
ENV PNPM_HOME=/pnpm
ENV PNPM_CONFIG_FETCH_RETRIES=5
ENV PNPM_CONFIG_FETCH_TIMEOUT=600000
ENV PATH=$PNPM_HOME:$PATH
RUN apk add --no-cache libc6-compat openssl \
  && corepack enable \
  && corepack prepare pnpm@11.0.9 --activate

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps ./apps
COPY packages ./packages
RUN pnpm install --frozen-lockfile --filter noogym-platform --filter @noogym/intelligence-api...

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps ./apps
COPY --from=deps /app/packages ./packages
RUN pnpm --filter @noogym/intelligence-api build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3340
RUN apk add --no-cache libc6-compat openssl
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/intelligence-api/node_modules ./apps/intelligence-api/node_modules
COPY --from=builder /app/apps/intelligence-api/dist ./apps/intelligence-api/dist
COPY --from=builder /app/apps/intelligence-api/prisma ./apps/intelligence-api/prisma
COPY --from=builder /app/apps/intelligence-api/package.json ./apps/intelligence-api/package.json
WORKDIR /app
EXPOSE 3340
CMD ["sh", "-c", "./apps/intelligence-api/node_modules/.bin/prisma migrate deploy --schema apps/intelligence-api/prisma/schema.prisma && node apps/intelligence-api/dist/src/main.js"]
