# Noogym Monorepo

Monorepo Turborepo com:

- `apps/marketing`: landing page Next.js do Noogym Software para ginasios.
- `apps/website`: site oficial Next.js, marketplace e area do usuario.
- `apps/leads-api`: API NestJS para captacao e gestao inicial de leads.
- `packages/shared`: enums e tipos compartilhados entre web e API.
- `packages/config`: configuracoes compartilhadas.

## Requisitos

- Node.js 22+
- pnpm 11+
- Docker para PostgreSQL local/producao

## Ambiente

Copie os exemplos de ambiente:

```bash
cp .env.example .env
cp apps/leads-api/.env.example apps/leads-api/.env
cp apps/marketing/.env.example apps/marketing/.env.local
```

## Desenvolvimento local com PostgreSQL

Subir PostgreSQL local:

```bash
docker compose -f apps/leads-api/docker-compose.yml up -d postgres
```

Instalar dependencias:

```bash
pnpm install
```

Gerar Prisma Client e aplicar migrations PostgreSQL:

```bash
pnpm db:generate:local
pnpm db:migrate:local
```

Rodar todas as apps:

```bash
pnpm dev
```

Rodar apenas uma app:

```bash
pnpm dev:web
pnpm dev:oficial
pnpm dev:api
```

Build ou lint por app:

```bash
pnpm build:web
pnpm build:oficial
pnpm build:api

pnpm lint:web
pnpm lint:oficial
pnpm lint:api
```

API:

- `POST /leads/demo-request`
- `GET /leads`
- `GET /leads/:id`
- `PATCH /leads/:id/status`
- Swagger: `/docs`

Endpoints administrativos usam o header:

```http
x-api-key: <ADMIN_API_KEY>
```

## Banco de dados

O schema unico fica em `apps/leads-api/prisma/schema.prisma` e usa PostgreSQL.
Use `DATABASE_URL` com uma URL Postgres e os comandos:

```bash
pnpm db:generate
pnpm db:migrate
```

## Deploy completo

Para subir o ecossistema completo pela raiz do monorepo:

```bash
docker compose up -d --build
```

Servicos expostos por padrao:

- `web`: `http://localhost:3000`
- `website`: `http://localhost:3001`
- `api`: `http://localhost:3333`

O stack completo usa PostgreSQL interno por padrao. Para usar outro banco em
producao, configure `API_DATABASE_URL`.

## Deploy independente por app

O repositorio continua como monorepo, mas cada aplicacao pode ser buildada e
publicada separadamente.

### `apps/marketing`

Frontend da landing/software para ginasios.

```bash
pnpm docker:build:web
docker compose -f apps/marketing/docker-compose.yml up -d --build
```

Variaveis principais:

- `NEXT_PUBLIC_API_URL`: URL publica usada pelo browser. Em geral `/api`.
- `API_INTERNAL_URL`: URL interna para o proxy Next chamar a API ou o gateway.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: chave publica do Cloudflare Turnstile.

### `apps/website`

Site oficial, marketplace, carrinho e dashboard.

```bash
pnpm docker:build:oficial
docker compose -f apps/website/docker-compose.yml up -d --build
```

Variaveis principais:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: chave publica do Cloudflare Turnstile.

### `apps/leads-api`

API principal NestJS.

```bash
pnpm docker:build:api
docker compose -f apps/leads-api/docker-compose.yml up -d --build
```

Variaveis principais:

- `API_DATABASE_URL`: conexao PostgreSQL.
- `API_WEB_ORIGIN`: origem autorizada para CORS.
- `API_ADMIN_API_KEY`: chave para endpoints administrativos.
- `API_TURNSTILE_SECRET_KEY`: chave privada do Cloudflare Turnstile.
- `API_SMTP_*`, `API_MAIL_FROM`, `API_MAIL_TO`: envio de emails.

Em producao, os frontends podem apontar para a API diretamente ou para uma
camada intermediaria futura, como `ws02-apimanager`, usando `API_INTERNAL_URL`
e/ou `NEXT_PUBLIC_API_URL` conforme o fluxo de rede escolhido.
