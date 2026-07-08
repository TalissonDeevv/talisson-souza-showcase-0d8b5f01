# Rollback Sprint 1

Escopo: reorganizacao arquitetural do repositorio.

## Quando Usar

Use este rollback se a separacao multi-projeto impedir build, deploy Preview, operacao Supabase CLI ou configuracao de ambiente.

## Principio

Rollback de Sprint 1 deve ser feito depois de reverter a Sprint 2, porque a Sprint 2 depende da estrutura criada na Sprint 1.

## Caminho Recomendado

Se a Sprint 1 ja estiver em um PR ou merge commit:

1. Reverter primeiro as alteracoes da Sprint 2.
2. Reverter o commit/merge commit que introduziu a Sprint 1.
3. Restaurar a estrutura raiz anterior do Supabase.
4. Restaurar o cliente de comentarios anterior somente se o ambiente aceitar novamente o risco de fallback.
5. Rodar `npm run lint`, `npm run typecheck` e `npm run build`.

## Arquivos A Reverter

- `src/integrations/supabase/env.ts`
- `src/integrations/supabase/client.ts`
- `src/integrations/supabase-comments/client.ts`
- `scripts/audit-architecture.mjs`
- `supabase/README.md`
- `supabase/projects/**`
- `supabase/legacy-mixed/**`
- docs criados para arquitetura Supabase
- scripts `audit:architecture`, `audit:imports`, `audit:references`, `audit:env`

## Estrutura A Restaurar

```text
supabase/
  config.toml
  functions/
  migrations/
```

## Riscos Do Rollback

- Reintroduz risco de mistura entre projetos Supabase.
- Pode reintroduzir fallback de comentarios para producao.
- Pode invalidar documentacao de Staging criada depois.

## Validacao Pos-Rollback

```bash
npm run lint
npm run typecheck
npm run build
```

Validar manualmente:

- contato;
- login Discord;
- comentarios;
- Realtime;
- deploy Preview.
