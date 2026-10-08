FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PNPM_CONFIG_FETCH_RETRIES=5
ENV PNPM_CONFIG_FETCH_TIMEOUT=600000
ENV PATH="$PNPM_HOME:$PATH"
ENV NEXT_TELEMETRY_DISABLED=1
ENV TURBO_TELEMETRY_DISABLED=1
ENV CYPRESS_INSTALL_BINARY=0

RUN corepack enable && corepack prepare pnpm@11.0.9 --activate

WORKDIR /app

FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN pnpm install --frozen-lockfile --filter noogym-platform --filter @noogym/erp...

FROM deps AS builder

ENV NEXT_OUTPUT_STANDALONE=true
ARG NEXT_PUBLIC_NOOGYM_API_URL=https://apiv1.noogym.com
ARG NEXT_PUBLIC_NOOGYM_HTTP_ONLY_AUTH=true
ENV NEXT_PUBLIC_NOOGYM_API_URL=$NEXT_PUBLIC_NOOGYM_API_URL
ENV NEXT_PUBLIC_NOOGYM_HTTP_ONLY_AUTH=$NEXT_PUBLIC_NOOGYM_HTTP_ONLY_AUTH

RUN pnpm --filter @noogym/erp build

FROM node:22-alpine AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NOOGYM_API_URL=https://apiv1.noogym.com
ENV NEXT_PUBLIC_NOOGYM_API_URL=https://apiv1.noogym.com
ENV NEXT_PUBLIC_NOOGYM_HTTP_ONLY_AUTH=true
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps/erp/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/erp/.next/static ./apps/erp/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/erp/public ./apps/erp/public

USER nextjs

WORKDIR /app/apps/erp

EXPOSE 3000

CMD ["node", "server.js"]
