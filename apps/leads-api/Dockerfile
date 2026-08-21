FROM node:22-alpine AS base

WORKDIR /app
ENV PNPM_HOME=/pnpm
ENV PNPM_CONFIG_FETCH_RETRIES=5
ENV PNPM_CONFIG_FETCH_TIMEOUT=600000
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

FROM base AS deps
RUN apk add --no-cache libc6-compat openssl
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps ./apps
COPY packages ./packages
RUN pnpm install --frozen-lockfile --filter noogym-platform --filter @noogym/leads-api...

FROM base AS builder
RUN apk add --no-cache libc6-compat openssl
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps ./apps
COPY --from=deps /app/packages ./packages

RUN pnpm --filter @noogym/leads-api build

FROM base AS runner
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3333

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/leads-api/node_modules ./apps/leads-api/node_modules
COPY --from=builder /app/apps/leads-api/dist ./apps/leads-api/dist
COPY --from=builder /app/apps/leads-api/prisma ./apps/leads-api/prisma
COPY --from=builder /app/apps/leads-api/package.json ./apps/leads-api/package.json
COPY --from=builder /app/packages ./packages

EXPOSE 3333

CMD ["sh", "-c", "./apps/leads-api/node_modules/.bin/prisma migrate deploy --schema apps/leads-api/prisma/schema.prisma && node apps/leads-api/dist/main.js"]
