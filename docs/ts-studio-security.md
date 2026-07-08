# TS Studio Security

## Estado Atual

A Sprint 4 cria fundacao segura, mas nao ativa painel administrativo em producao.

Medidas implementadas:

- schema privado `studio`;
- RLS habilitado e forcado nas tabelas do Studio;
- grants revogados de `PUBLIC`, `anon` e `authenticated`;
- acesso reservado a `service_role`;
- RBAC tipado;
- guard de rota;
- redacao basica de metadados de auditoria;
- auditor `audit:ts-studio`;
- proibicao de hardcoded Supabase URL/key em `src/studio`.

## Principais Ameacas

1. Rota admin publicada sem autenticacao.
2. API admin sem guard RBAC.
3. Service role exposta ao browser.
4. Permissao ampla por erro de role.
5. Audit log incompleto.
6. Upload inseguro.
7. Integracao apontando para ambiente errado.
8. Falha de rollback de migration.
9. Dados pessoais excessivos em logs.
10. Preview usando producao.

## Controles Obrigatorios para Ativacao

- autenticacao admin;
- checagem server-side de sessao;
- RBAC server-side;
- CSRF/abuse controls se houver cookies;
- rate limit em APIs sensiveis;
- audit event em escrita;
- validacao Zod ou equivalente;
- logs sem segredo;
- headers e CSP revisados;
- staging validado antes de producao.

## Supabase

O schema `studio` nao deve entrar em exposed schemas. Caso alguma API precise consultar dados do Studio, ela deve executar no backend com service role e aplicar RBAC antes da query.

## Vercel

Rotas futuras `/api/studio/*` devem:

- exigir autenticacao;
- nao retornar stack trace;
- registrar request id;
- usar environment explicito;
- nao depender de fallback de producao.

## Discord

O modulo Discord deve manter provider tokens fora do storage sempre que possivel. A logica atual ja minimiza provider token apos login. O painel futuro deve mostrar eventos OAuth sem expor tokens.

## Uploads

Uploads devem validar:

- MIME real;
- extensao;
- tamanho;
- owner;
- bucket;
- alt text;
- destino;
- antivirus se aplicavel no futuro.

## Auditoria

Eventos criticos:

- role assignment;
- publish;
- delete/archive;
- integration change;
- secret rotation;
- moderation action;
- migration action;
- deploy approval.
