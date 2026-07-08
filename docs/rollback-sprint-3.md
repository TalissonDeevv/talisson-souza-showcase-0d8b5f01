# Rollback Sprint 3

## Quando Usar

Use este rollback se a documentacao de blueprint do TS Studio precisar ser removida da branch.

## Arquivos a Remover

- `docs/ts-studio-blueprint.md`
- `docs/ts-studio-architecture.md`
- `docs/ts-studio-api.md`
- `docs/ts-studio-rbac.md`
- `docs/ts-studio-modules.md`
- `docs/ts-studio-database.md`
- `docs/ts-studio-roadmap.md`
- `docs/ts-studio-folder-structure.md`
- `docs/ts-studio-events.md`
- `docs/ts-studio-permissions.md`
- `docs/ts-studio-security.md`
- `docs/ts-studio-config.md`
- `docs/sprint-3-report.md`

## Passos

1. Criar branch de rollback.
2. Remover os arquivos listados.
3. Atualizar `CHANGELOG.md` removendo a secao Sprint 3.
4. Executar `npm run audit:ts-studio` se a Sprint 4 ainda existir.
5. Executar `git diff --check`.
6. Commitar rollback.

## Risco

Baixo. A Sprint 3 e documental e nao altera runtime.
