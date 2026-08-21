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

