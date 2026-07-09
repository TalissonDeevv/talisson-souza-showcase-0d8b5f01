# Changelog

## TS Studio Milestone 2

- Criada a fundacao `src/studio/core` para a Core API administrativa.
- Registrados contratos de endpoints para auth, users, modules, dashboard, articles, authors, taxonomy, media, settings, SEO, forms, newsletter, comments, Discord, analytics, monitoring, plugins, system, logs e audit.
- Criado router com resposta padronizada, `requestId`, erro normalizado, `404` e `501` controlados.
- Criada cadeia de middlewares para auth, sessao, RBAC, permissao, modulo, CSRF, origem, rate limit, idempotencia, request id, validacao, auditoria, erro e security headers.
- Criados services e repositories internos sem acesso direto ao Supabase.
- Criados event bus, cache, jobs, storage engine, feature flags, plugin registry, integration registry e config service.
- Criado teste estrutural compilavel da Core API.
- Criado auditor `npm run audit:core` e integrado ao `npm run audit`.
- Documentada a arquitetura de Core API, backend, eventos, cache, storage, plugins, feature flags e relatorio tecnico.

## TS Studio Milestone 1

- Criada a fundacao de autenticacao administrativa do TS Studio com Supabase Auth no projeto Principal.
- Criados `StudioAuthProvider`, `StudioPermissionProvider` e `StudioSessionProvider`.
- Criados hooks administrativos para auth, sessao, usuario, roles e permissoes.
- Criados guards `AuthGuard`, `RoleGuard`, `PermissionGuard` e `ModuleGuard`.
- Criados services para auth, sessao, permissao e auditoria.
- Separados contratos internos de API em queries, commands e mutations.
- Criada migration local para `studio.admin_sessions`, `studio.admin_login_attempts`, `studio.admin_session_nonces` e `studio.admin_auth_rate_limits`.
- Criado auditor `npm run audit:auth`.
- Documentada a arquitetura de auth, sessao e RBAC da Milestone 1.

## TS Studio Milestone 0

- Alinhada a fundacao do TS Studio entre registry TypeScript, RBAC TypeScript e migration SQL.
- Adicionados `articles`, `taxonomy` e `authors` ao seed oficial de `studio.modules`.
- Adicionado seed de `studio.module_dependencies` em paridade com o registry.
- Adicionadas permissoes ausentes para Articles, Taxonomy, Authors, SEO, Media, Users, Discord, Newsletter, Monitoring, Security e System.
- Realinhados grants de `studio.role_permissions` para `admin`, `editor`, `moderator`, `analyst` e `viewer`.
- Expandido `npm run audit:ts-studio` para detectar divergencias entre registry, RBAC, SQL, modulos, permissoes e grants por role.
- Atualizada a documentacao oficial para marcar a paridade de fundacao como concluida.

## Sprint 4

- Criada a fundacao tecnica do TS Studio em `src/studio`.
- Adicionado registry modular para Dashboard, Conteudo, Artigos, SEO, Midia, Usuarios, Discord, Forms, Newsletter, Analytics, Monitoramento, Seguranca, Integracoes e Sistema.
- Criado RBAC tipado com papeis `owner`, `admin`, `editor`, `moderator`, `analyst` e `viewer`.
- Criados contratos de API, rotas internas, provider, contexto, hooks, layouts e paginas base.
- Criados servicos base de auditoria, redacao de metadados sensiveis, logs e store de sessao.
- Criada migration local `20260708205740_ts_studio_foundation.sql` para o schema privado `studio`.
- Criado auditor `npm run audit:ts-studio` e integrado ao `npm run audit`.
- Criados relatorio e rollback da Sprint 4.

## Sprint 3

- Criado o blueprint completo do TS Studio em `docs/ts-studio-blueprint.md`.
- Documentada a arquitetura completa do CMS em `docs/ts-studio-architecture.md`.
- Documentados modulos, APIs, RBAC, banco, eventos, permissoes, seguranca, configuracao, roadmap e estrutura de pastas.
- Mapeadas capacidades administrativas para conteudo, SEO, Open Graph, sitemap, robots, uploads, comentarios, Discord, formularios, newsletter, analytics, monitoramento, seguranca e integracoes.
- Confirmado que Supabase Principal e Supabase Comentarios permanecem separados.
- Criados relatorio e rollback da Sprint 3.

## Sprint 2

- Preparada a infraestrutura Supabase para Development, Preview, Staging e Production.
- Adicionados `verify_jwt` explicitos nos `config.toml` dos projetos Principal e Comentarios.
- Criada migration `20260708151015_explicit_data_api_grants.sql` no projeto Principal.
- Criada migration `20260708151221_optimize_rls_policy_evaluation.sql` no projeto Comentarios.
- Criado auditor Supabase automatico para migrations, Edge Functions, RLS, policies, Storage, Realtime e secrets.
- Criado helper de workdir temporario para uso seguro do Supabase CLI com layout multi-projeto.
- Criada documentacao de deployment Supabase, checklist de Staging e disaster recovery.
- Documentadas pendencias remotas: replay real, Advisors no projeto Principal, publicacao de Functions em Staging e configuracao de secrets.

## Sprint 1

- Reorganizada a arquitetura do repositorio para separar Supabase Principal e Supabase Comentarios.
- Movidas migrations para diretorios por projeto.
- Movidas Edge Functions para diretorios por projeto.
- Isoladas migrations historicas mistas em `supabase/legacy-mixed`.
- Removido fallback hardcoded de producao no cliente de comentarios.
- Adicionada validacao obrigatoria de variaveis Supabase no frontend.
- Criado auditor arquitetural para imports, referencias e env vars.
- Atualizada documentacao base da arquitetura Supabase.
