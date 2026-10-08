FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PNPM_CONFIG_FETCH_RETRIES=5
ENV PNPM_CONFIG_FETCH_TIMEOUT=600000
ENV PATH="$PNPM_HOME:$PATH"
ENV TURBO_TELEMETRY_DISABLED=1
ENV CYPRESS_INSTALL_BINARY=0

RUN apk add --no-cache openssl \
  && corepack enable \
  && corepack prepare pnpm@11.0.9 --activate

WORKDIR /app

FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN pnpm install --frozen-lockfile --filter noogym-platform --filter @noogym/api...

FROM deps AS builder

RUN pnpm --filter @noogym/api prisma:generate
RUN pnpm turbo build --filter=@noogym/api

FROM node:22-alpine AS runner

ENV NODE_ENV=production
ENV PORT=3333

WORKDIR /app

RUN apk add --no-cache dumb-init openssl \
  && addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nestjs

COPY --from=builder --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nestjs:nodejs /app/apps/api/node_modules ./apps/api/node_modules
COPY --from=builder --chown=nestjs:nodejs /app/apps/api/dist ./apps/api/dist
COPY --from=builder --chown=nestjs:nodejs /app/apps/api/prisma ./apps/api/prisma
COPY --from=builder --chown=nestjs:nodejs /app/apps/api/package.json ./apps/api/package.json
COPY --chown=nestjs:nodejs apps/api/docker-entrypoint.sh /usr/local/bin/noogym-api-entrypoint.sh

RUN chmod +x /usr/local/bin/noogym-api-entrypoint.sh

USER nestjs

WORKDIR /app/apps/api

EXPOSE 3333

ENTRYPOINT ["dumb-init", "/usr/local/bin/noogym-api-entrypoint.sh"]
CMD ["node", "dist/src/main.js"]
