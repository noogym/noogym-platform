# ADR 0001: Environment files by application

## Status

Accepted

## Date

2026-05-18

## Context

This repository is a monorepo with separate applications for the frontend and
backend:

- `apps/marketing`: Next.js landing page.
- `apps/leads-api`: NestJS API for lead capture and lead management.
- Root repository: shared workspace commands and Docker Compose.

Because each runtime reads environment variables from a different location, the
repository keeps environment examples in three places:

- `.env.example`
- `apps/leads-api/.env.example`
- `apps/marketing/.env.example`

This can be confusing because some variables are only needed by one app, while
others are useful when running services from the repository root or with Docker.

## Decision

Use app-specific environment files as the source of truth for local development:

- Backend variables go in `apps/leads-api/.env`.
- Frontend variables go in `apps/marketing/.env.local`.
- Root variables go in `.env` only when needed by root-level tooling, especially
  Docker Compose.

## Local Development Setup

Create the local environment files from the examples:

```bash
cp .env.example .env
cp apps/leads-api/.env.example apps/leads-api/.env
cp apps/marketing/.env.example apps/marketing/.env.local
```

### API environment

Use `apps/leads-api/.env` for API and database configuration. Local development uses
PostgreSQL:

```env
DATABASE_URL="postgresql://noogym:noogym@localhost:5433/noogym_leads?schema=public"
PORT=3333
WEB_ORIGIN=http://localhost:3000
ADMIN_API_KEY=change-me
WHATSAPP_PHONE_NUMBER=

SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
MAIL_FROM="Noogym <no-reply@noogym.com>"
MAIL_TO=
```

`DATABASE_URL` is required. If it is missing, the API fails during startup.
Prisma commands use `DATABASE_URL`.

Email variables are optional. If `SMTP_HOST` is empty, the API still starts and
lead creation still works, but email notifications and customer confirmations are
skipped.

### Web environment

Use `apps/marketing/.env.local` for Next.js public runtime configuration:

```env
NEXT_PUBLIC_API_URL=http://localhost:3333
```

This tells the landing page where to send demo request submissions.

### Root environment

Use `.env` in the repository root for root-level commands and Docker Compose
values:

```env
ADMIN_API_KEY=change-me
WHATSAPP_PHONE_NUMBER=
NEXT_PUBLIC_API_URL=http://localhost:3333

SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
MAIL_FROM="Noogym <no-reply@noogym.com>"
MAIL_TO=
```

The root `.env` is not a replacement for `apps/leads-api/.env` or
`apps/marketing/.env.local` during local development. It is mainly used by
`docker-compose.yml` and shared workspace commands.

## Consequences

- Local development stays explicit: each app owns the variables it needs.
- The API can run without SMTP credentials while lead capture is being developed
  or tested.
- Docker Compose can still receive root-level values without duplicating every
  app-specific detail.
- Prisma migrations use `apps/leads-api/prisma/schema.prisma`.
- Developers should avoid putting secrets in committed `.env.example` files.
