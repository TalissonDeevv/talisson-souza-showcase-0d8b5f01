# Rollback Sprint 4

## Quando Usar

Use este rollback se a fundacao tecnica do TS Studio precisar ser removida antes de ser ativada.

## Arquivos e Diretorios a Remover

- `src/studio/`
- `scripts/audit-ts-studio.mjs`
- `supabase/projects/main/migrations/20260708205740_ts_studio_foundation.sql`
- `docs/sprint-4-report.md`
- `docs/rollback-sprint-4.md`

## Arquivos a Editar

- `package.json`
- `CHANGELOG.md`

## Passos Sem Migration Aplicada

1. Remover `src/studio/`.
2. Remover `scripts/audit-ts-studio.mjs`.
3. Remover a migration local `20260708205740_ts_studio_foundation.sql`.
4. Remover `audit:ts-studio` do `package.json`.
5. Remover `audit:ts-studio` da cadeia `npm run audit`.
6. Atualizar `CHANGELOG.md`.
7. Executar `npm run lint`.
8. Executar `npm run typecheck`.
9. Executar `npm run build`.
10. Executar `git diff --check`.

## Passos Se Migration Ja Tiver Sido Aplicada Em Staging

Nao aplicar em producao sem novo plano.

Em staging, depois de backup:

```sql
DROP SCHEMA IF EXISTS studio CASCADE;
```

Depois:

1. Confirmar que nenhuma API depende do schema.
2. Confirmar que nenhum job usa tabelas `studio`.
3. Rodar validacoes Supabase.
4. Registrar incidente/rollback em documento de release.

## Risco

Medio se a migration ja tiver sido aplicada e dados reais existirem no schema `studio`. Baixo enquanto a Sprint permanece apenas em branch local sem migration remota aplicada.
