FROM node:22-alpine AS base

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV PNPM_HOME=/pnpm
ENV PNPM_CONFIG_FETCH_RETRIES=5
ENV PNPM_CONFIG_FETCH_TIMEOUT=600000
ENV PATH=$PNPM_HOME:$PATH
RUN apk add --no-cache libc6-compat \
  && corepack enable \
  && corepack prepare pnpm@11.0.9 --activate

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps ./apps
COPY packages ./packages
RUN pnpm install --frozen-lockfile --filter noogym-platform --filter @noogym/intelligence-web...

FROM base AS builder
ENV NEXT_OUTPUT_STANDALONE=true
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps ./apps
COPY --from=deps /app/packages ./packages
RUN pnpm --filter @noogym/intelligence-web build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/apps/intelligence-web/public ./apps/intelligence-web/public
COPY --from=builder --chown=nextjs:nodejs /app/apps/intelligence-web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/intelligence-web/.next/static ./apps/intelligence-web/.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "apps/intelligence-web/server.js"]
