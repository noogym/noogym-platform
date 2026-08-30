# Noogym Fitness Intelligence API

Backend NestJS para descoberta, normalizacao, classificacao, revisao editorial e preparacao de publicacao de conteudos fitness ligados a Angola.

## O que inclui

- Fontes configuraveis (`sources`) com crawling manual.
- Ingestao etica com `User-Agent`, timeout, leitura de `robots.txt` e suporte a fixtures locais `fixture://`.
- Normalizacao de HTML, resumo curto e extracao de texto sem copiar artigos completos.
- Classificacao deterministica por relevancia fitness/Angola e categorias editoriais.
- Extracao simples de entidades e locais.
- Dedupe por URL, `externalId`, hash e similaridade de titulo/local/data.
- Eventos candidatos, submissao publica e workflow de revisao.
- Publicacoes preparadas para Blog/Eventos, sem escrita automatica no website.
- Auditoria de acoes e endpoints de dashboard/health.

## Comandos

```bash
pnpm --filter @noogym/intelligence-api prisma:generate
pnpm --filter @noogym/intelligence-api prisma:migrate
pnpm --filter @noogym/intelligence-api prisma:seed
pnpm --filter @noogym/intelligence-api dev
pnpm --filter @noogym/intelligence-api test
pnpm --filter @noogym/intelligence-api build
```

## Ambiente

Copie `.env.example` para `.env` e ajuste:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/noogym_intelligence?schema=public"
PORT=3340
WEB_ORIGIN=http://localhost:3003
INTELLIGENCE_API_KEY=dev-intelligence-key
INTELLIGENCE_SUBMISSION_API_KEY=dev-submission-key
NOOGYM_INTELLIGENCE_USER_AGENT="NoogymFitnessIntelligence/0.1 (+https://noogym.com)"
CRAWLER_TIMEOUT_MS=8000
CRAWLER_DELAY_MS=1500
AI_PROVIDER=disabled
WEBSITE_PUBLISHING_URL=http://localhost:3001/api
WEBSITE_DATA_EXPORT_DIR=../website/src/data/generated
```

Neste workspace, a validacao local usou Postgres em `127.0.0.1:5433` porque a porta `5432` estava ocupada por outro container/relay.

## Fluxo manual

1. Criar ou semear fontes.
2. Rodar crawl: `POST /sources/:id/crawl`.
3. Normalizar raw content: `POST /content/raw/:id/normalize`.
4. Classificar: `POST /content/:id/classify`.
5. Deduplicar: `POST /content/:id/detect-duplicates`.
6. Detectar evento quando aplicavel: `POST /events/detect/:contentId`.
7. Gerar draft editorial: `POST /content/:id/generate-draft`.
8. Aprovar/rejeitar no workflow editorial.
9. Preparar payload de publicacao via `/publishing/*`.
10. Exportar publicacoes prontas para o website com `POST /publishing/website/export`.

Todos os endpoints, exceto `/health`, exigem o header `x-api-key`.

## Limites atuais

O produto esta em modo MVP operacional. A classificacao e a extracao sao deterministicas, o agendamento recorrente de jobs ainda e acionado manualmente, e a publicacao no website e preparada como payload revisavel em vez de atualizar automaticamente os dados estaticos do `apps/website`.
