# Noogym Oficial

Site oficial do Noogym como app do monorepo.

## Stack

- Next.js com App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- Dados mockados locais

## Páginas

- Home
- Explorar Ginásios
- Detalhes do Ginásio
- Planos
- Marketplace
- Eventos
- Para Ginásios
- Gestão
- Blog

## Como rodar

```bash
pnpm install
pnpm --filter @noogym/website dev
```

Acesse `http://localhost:3001`.

Pelo root do monorepo, também pode usar:

```bash
pnpm dev:oficial
```

Configure `NEXT_PUBLIC_TURNSTILE_SITE_KEY` no ambiente do app para ativar a verificação Cloudflare Turnstile nos formulários de autenticação.

## Docker

Para subir o site em modo produção com Docker Compose:

```bash
docker compose up --build
```

Acesse `http://localhost:3001`.

Para parar:

```bash
docker compose down
```

## Scripts

```bash
pnpm --filter @noogym/website dev
pnpm --filter @noogym/website build
pnpm --filter @noogym/website start
pnpm --filter @noogym/website lint
```

## Estrutura

```text
src/
  app/
  components/
  data/
  lib/
public/
  assets/
docs/
  adr/
```

## Assets

As imagens de referência e o logo estão em `public/assets`. O favicon do App Router está em `src/app/icon.png`, usando a marca Noogym.

## Estado atual

O projeto usa dados mockados e não depende de backend real nesta fase. Busca, filtros, modais, newsletter e carrinho são interações locais preparadas para futura integração.
