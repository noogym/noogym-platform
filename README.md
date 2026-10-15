# Noogym Platform

Monorepo principal do Noogym, organizado como plataforma unica com apps independentes e packages compartilhados.

## Estrutura

```text
apps/
  website/      Site oficial noogym.com
  marketing/    Landing do Noogym Software para ginasios
  erp/          ERP web para gestao.noogym.com
  api/          Backend NestJS principal da plataforma
  leads-api/    API legada de captacao e gestao inicial de leads
  intelligence-api/ API de descoberta e operacao editorial
  intelligence-web/ Painel operacional da Intelligence API
  desktop/      Cliente Electron/local-first
  print-agent/  Agente local de impressao
  cypress/      Testes e2e

packages/
  admin/        Superficie administrativa compartilhada por ERP web e desktop
  ui/           Componentes visuais compartilhados
  core/         Regras puras de dominio
  types/        Tipos de dominio
  data-access/  Interfaces/adapters de acesso a dados
  config/       Presets compartilhados de Tailwind e TypeScript
  shared/       Contratos usados pela landing/API de leads
  website-config/ Configuracoes especificas herdadas do website
```

## Principios

- Website, ERP, desktop e APIs vivem no mesmo monorepo, mas continuam apps separadas.
- O backend principal fica em `apps/api` e deve evoluir como monolito modular NestJS.
- Frontends nao devem acessar banco diretamente; devem passar pela API.
- `organizationId` continua como fronteira principal de multi-tenancy no dominio operacional.
- Logica reutilizavel fica em `packages/core`, `packages/types`, `packages/ui`, `packages/admin` e demais packages claros por responsabilidade.
- O desktop pode manter armazenamento local/offline, sincronizando com a API quando esse fluxo estiver pronto.

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

Rodar partes especificas:

```bash
pnpm dev:website
pnpm dev:marketing
pnpm dev:erp
pnpm dev:api
pnpm dev:desktop
```

ERP + API local:

```bash
pnpm localhost
```

Setup local do ERP/API:

```bash
pnpm setup:local
```

## Banco de dados

O caminho recomendado para a plataforma e um PostgreSQL principal por tras do backend modular em `apps/api`. A API de leads foi preservada como `apps/leads-api` para evitar uma fusao apressada de schemas; ela pode ser integrada ao backend principal quando os dominios de marketing/leads forem consolidados.

## Stack local em Docker

O Compose local inicia as apps web e APIs, os bancos PostgreSQL e Redis. O Desktop e o Print Agent ficam fora desta stack para que o agente de impressao possa acessar o spooler e as impressoras do computador local.

```bash
pnpm docker:compose:up
```

URLs locais: ERP `http://localhost:3000`, website `http://localhost:3001`, marketing `http://localhost:3002`, painel Intelligence `http://localhost:3003`, API principal `http://localhost:3333`, Leads API `http://localhost:3334` e Intelligence API `http://localhost:3340`.

No computador ligado à impressora, inicie o Print Agent fora do Docker com `pnpm dev:print-agent`. Ele ficará disponível em `http://127.0.0.1:47891`.

Para encerrar a stack:

```bash
pnpm docker:compose:down
```

### Compose por aplicação

As aplicações também podem ser iniciadas separadamente. O Website, Marketing e Leads API já têm Compose próprio; os demais serviços web e APIs agora também têm. O Desktop, o Print Agent e o Cypress ficam de fora (o Cypress é a suite de testes, não um serviço de deploy).

| Aplicação | Comando a partir da raiz | Dependência externa |
|---|---|---|
| API principal | `cd apps/api && docker compose up -d --build` | Inclui PostgreSQL e Redis próprios; copie `.env.example` para `.env` antes do primeiro arranque. |
| ERP | `cd apps/erp && docker compose up -d --build` | Configure `NOOGYM_API_URL` e `NEXT_PUBLIC_NOOGYM_API_URL` para a API desejada. |
| Website | `cd apps/website && docker compose up -d --build` | Configure `API_INTERNAL_URL`; Intelligence é opcional via `INTELLIGENCE_API_URL` e `INTELLIGENCE_API_KEY`. |
| Marketing | `cd apps/marketing && docker compose up -d --build` | Configure `API_INTERNAL_URL` para a Leads API. |
| Leads API | `cd apps/leads-api && docker compose up -d --build` | Inclui PostgreSQL próprio. |
| Intelligence API | `cd apps/intelligence-api && docker compose up -d --build` | Inclui PostgreSQL próprio; copie `.env.example` para `.env`. |
| Painel Intelligence | `cd apps/intelligence-web && docker compose up -d --build` | Configure `INTELLIGENCE_API_URL` e `INTELLIGENCE_API_KEY`. |

Os Compose independentes têm bancos, volumes e redes próprios. Não inicie simultaneamente o Compose geral e o Compose independente da mesma app usando as portas padrão.

