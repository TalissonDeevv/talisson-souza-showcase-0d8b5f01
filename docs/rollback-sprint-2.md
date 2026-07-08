# Rollback Sprint 2

Escopo: preparacao de infraestrutura Supabase.

## Quando Usar

Use este rollback se as migrations novas, scripts de auditoria, config de `verify_jwt` ou documentacao de infraestrutura bloquearem a revisao tecnica.

## Caminho Recomendado

Sprint 2 ainda nao aplica migrations remotas nem publica Edge Functions. Portanto, o rollback local e simples:

1. Remover migrations criadas na Sprint 2.
2. Remover scripts de auditoria Supabase adicionados na Sprint 2.
3. Remover scripts `audit:supabase:*`, `audit:edge-functions`, `audit` e `supabase:workdir:*` do `package.json`.
4. Remover `.supabase-workdir/` do `.gitignore`, se nao for mais usado.
5. Reverter documentacao `docs/supabase-deployment.md`, `docs/staging-checklist.md` e `docs/disaster-recovery.md`.
6. Rodar validacoes.

## Arquivos A Reverter

- `scripts/audit-supabase.mjs`
- `scripts/prepare-supabase-workdir.mjs`
- `docs/supabase-deployment.md`
- `docs/staging-checklist.md`
- `docs/disaster-recovery.md`
- `supabase/projects/main/migrations/20260708151015_explicit_data_api_grants.sql`
- `supabase/projects/comments/migrations/20260708151221_optimize_rls_policy_evaluation.sql`
- alteracoes de `verify_jwt` nos `config.toml`
- atualizacoes de README/documentacao referentes a Sprint 2

## Se Migrations Ja Tiverem Sido Aplicadas Em Staging

1. Nao aplicar rollback em Production.
2. Restaurar Staging a partir de backup ou recriar banco Staging limpo.
3. Reaplicar migrations ate o ultimo ponto aprovado.
4. Rodar checklist de Staging novamente.

## Se Migrations Ja Tiverem Sido Aplicadas Em Production

1. Pausar rollout.
2. Confirmar backup/PITR.
3. Avaliar migration corretiva em vez de tentar desfazer manualmente.
4. Seguir `docs/disaster-recovery.md`.

## Validacao Pos-Rollback

```bash
npm run lint
npm run typecheck
npm run build
npm run audit:architecture
```

Se o auditor Supabase tiver sido removido, nao rodar `npm run audit:supabase`.
