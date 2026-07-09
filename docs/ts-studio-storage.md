# TS Studio Storage

Data: 2026-07-09
Status: contrato criado na Milestone 2

Storage passa a ser tratado por adapter. O provider atual planejado e Supabase Storage, mas o contrato tambem prepara S3, R2, Bunny e MinIO.

## Engine

Arquivo: `src/studio/core/storage/storage-engine.ts`

Capacidades:

- criar upload intent;
- validar objeto;
- remover objeto;
- identificar provider.

## Providers previstos

- `supabase`
- `s3`
- `r2`
- `bunny`
- `minio`

## Politica

Uploads futuros devem validar:

- bucket;
- path;
- MIME type;
- tamanho;
- checksum quando disponivel;
- expiracao do intent;
- permissao RBAC;
- auditoria.

## Estado atual

Nenhum upload publico foi alterado. A Milestone 2 apenas cria a fronteira de codigo para a futura biblioteca de midia.
