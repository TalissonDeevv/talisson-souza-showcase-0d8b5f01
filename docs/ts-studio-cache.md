# TS Studio Cache

Data: 2026-07-09
Status: contrato criado na Milestone 2

O cache do TS Studio foi criado como interface para evitar que modulos futuros dependam diretamente de uma tecnologia especifica.

## Implementacao atual

`src/studio/core/cache/cache.ts` fornece `createMemoryStudioCache`.

Capacidades:

- `get`
- `set`
- `delete`
- `clear`
- TTL por chave
- limpeza por namespace

## Uso recomendado

O cache deve ser usado para:

- respostas administrativas de leitura frequente;
- status temporario de integracoes;
- logs estruturados efemeros;
- debounce de health checks;
- protecao de rate limit quando houver adapter persistente.

## O que nao deve ir para cache

- access tokens;
- refresh tokens;
- service role keys;
- provider secrets;
- dados pessoais completos;
- payloads brutos de formularios.

## Evolucao

O contrato permite substituir memoria por Redis, Upstash, Vercel KV ou outro provider sem mudar services.
