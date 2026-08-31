# Noogym Fitness Intelligence Web

Painel Next.js para operar a Noogym Fitness Intelligence: acompanhar fontes, conteudos, eventos, revisoes editoriais e jobs de coleta.

## O que inclui

- Dashboard operacional com metricas e filas editoriais.
- Funil editorial por etapa.
- Filtros por texto, status e provincia.
- Detalhe/preview de conteudos e eventos.
- Acoes editoriais individuais e aprovacao em lote.
- Gestao de fontes e crawl manual.
- Lista de conteudos com classificacao, score, status e acoes editoriais.
- Eventos candidatos e status de verificacao.
- Proxy server-side em `/api/intelligence/*` para nao expor `INTELLIGENCE_API_KEY` no browser.
- Exportacao controlada de dados prontos para o website.
- Fallback para dados demo quando a API esta indisponivel.

## Comandos

```bash
pnpm --filter @noogym/intelligence-web dev
pnpm --filter @noogym/intelligence-web lint
pnpm --filter @noogym/intelligence-web build
```

## Ambiente

```env
INTELLIGENCE_API_URL=http://localhost:3340
INTELLIGENCE_API_KEY=dev-intelligence-key
```

Por padrao o painel roda em `http://localhost:3003`.

## Relacao com o website

Este painel nao publica diretamente no `apps/website`. Ele consome/prepara dados da API, e o website publico recebe submissao de eventos em `/eventos/divulgar`, encaminhando para a API quando `INTELLIGENCE_API_URL` esta configurado.
