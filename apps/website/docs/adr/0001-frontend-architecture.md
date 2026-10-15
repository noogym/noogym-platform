# ADR 0001: Arquitetura frontend do site Noogym

## Status

Aceito

## Contexto

O Noogym precisa de uma presença web oficial com visual premium, responsivo e pronta para evoluir para integrações futuras. Nesta fase, o produto não possui backend real e deve funcionar com dados mockados locais.

## Decisão

Usar Next.js com App Router, React, TypeScript e Tailwind CSS como base do frontend.

Componentes são organizados por domínio em `src/components`, dados mockados em `src/data` e rotas em `src/app`. Interações como carrinho, filtros, busca, modais e newsletter permanecem client-side até existir uma API.

## Consequências

- O site pode ser renderizado estaticamente na maior parte das páginas.
- A estrutura facilita troca de dados mockados por chamadas a backend.
- Componentes reutilizáveis reduzem duplicação visual entre páginas.
- Recursos interativos ficam isolados em componentes client-side, mantendo páginas server-side sempre que possível.

## Alternativas consideradas

- SPA em Vite: simples, mas menos adequada para SEO e rotas públicas.
- Backend integrado desde o início: descartado para manter o escopo desta fase focado no frontend oficial.
