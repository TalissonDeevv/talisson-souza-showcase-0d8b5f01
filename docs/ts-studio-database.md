# TS Studio Database

Esta Sprint cria uma migration local, nao aplicada remotamente:

`supabase/projects/main/migrations/20260708205740_ts_studio_foundation.sql`

Milestone 1 adiciona uma migration local de autenticacao administrativa, tambem nao aplicada remotamente:

`supabase/projects/main/migrations/20260709150000_ts_studio_auth_foundation.sql`

## Decisao Arquitetural

O TS Studio usa o Supabase Principal para o schema administrativo `studio`. O projeto Supabase Comentarios continua separado e deve ser acessado apenas por APIs especificas quando o modulo de moderacao for implementado.

## Schema

`studio`

O schema e privado:

- `PUBLIC`: sem acesso;
- `anon`: sem acesso;
- `authenticated`: sem acesso;
- `service_role`: acesso operacional.

## Tabelas

| Tabela | Objetivo |
| --- | --- |
| `studio.modules` | catalogo de modulos do CMS |
| `studio.module_dependencies` | dependencias entre modulos |
| `studio.roles` | papeis do RBAC |
| `studio.permissions` | permissoes atomicas |
| `studio.role_permissions` | matriz papel/permissao |
| `studio.user_roles` | atribuicoes de acesso interno |
| `studio.content_items` | conteudo generico do CMS |
| `studio.content_versions` | snapshots/versionamento |
| `studio.media_assets` | metadados de arquivos |
| `studio.settings` | configuracoes globais |
| `studio.integration_connections` | inventario de provedores |
| `studio.jobs` | filas e tarefas futuras |
| `studio.audit_events` | trilha de auditoria |
| `studio.notifications` | notificacoes internas futuras |
| `studio.feature_flags` | rollout e flags |

## Tabelas de Autenticacao Administrativa

| Tabela | Objetivo |
| --- | --- |
| `studio.admin_sessions` | inventario server-side de sessoes administrativas |
| `studio.admin_login_attempts` | trilha de tentativas de login e bloqueios |
| `studio.admin_session_nonces` | protecao contra replay, CSRF e nonces de comandos |
| `studio.admin_auth_rate_limits` | estado persistente futuro de rate limit |

## RLS

Todas as tabelas recebem:

- `ENABLE ROW LEVEL SECURITY`
- `FORCE ROW LEVEL SECURITY`

Nao foram criadas policies para usuarios finais. Isso e intencional. O acesso deve passar por APIs administrativas futuras usando service role, validacao de sessao e RBAC.

As tabelas de autenticacao administrativa possuem policies apenas para `service_role`. Isso preserva o contrato de que o browser nao acessa o schema `studio` diretamente.

## Seeds

A migration semeia:

- papeis base;
- 16 modulos oficiais;
- dependencias entre modulos;
- permissoes oficiais declaradas no registry;
- matriz de permissoes alinhada com `src/studio/permissions/rbac.ts`;
- integracoes conhecidas.

O auditor `npm run audit:ts-studio` compara o registry TypeScript, o RBAC TypeScript e esta migration para impedir novo desalinhamento.

## Relacao com Data API Supabase

O changelog atual do Supabase reforca a mudanca para grants explicitos em novas tabelas do schema `public`. O TS Studio evita esse risco criando um schema privado e revogando acesso de `anon` e `authenticated`. Caso algum dado do Studio precise ser exposto no futuro, isso deve ser feito por API revisada e nao por exposicao direta de tabela.

Referencia: https://supabase.com/changelog

## Rollback Local

Como a migration nao foi aplicada remotamente, rollback local significa remover o arquivo da branch. Se ja tiver sido aplicada em staging no futuro, usar o runbook em `docs/rollback-sprint-4.md`.

## Riscos

- aplicar a migration em producao sem revisar APIs;
- criar policy ampla no schema `studio`;
- mover dados de comentarios para o projeto errado;
- usar browser client para acessar schema administrativo;
- nao versionar alteracoes futuras do banco.
