# TS Studio Implementation Milestones

Data: 2026-07-09
Status: plano operacional para implementacao incremental
Fonte oficial: `docs/ts-studio-official-architecture.md`, `docs/ts-studio-implementation-plan.md`, `docs/ts-studio-roadmap.md`, `docs/system-architecture.md`

Este documento organiza a implementacao do TS Studio em milestones independentes. Cada milestone deve ser desenvolvida em branch propria, validada com lint, typecheck, build e auditorias, documentada, commitada e revisada antes da proxima etapa.

Nenhuma milestone autoriza deploy, merge, publicacao de Edge Functions, aplicacao remota de migrations ou alteracao em producao.

## Milestone 0 - Foundation Parity

Status: concluida nesta branch.

Objetivo: alinhar registry TypeScript, RBAC TypeScript e migration SQL antes de qualquer API real do Studio.

Modulos envolvidos: todos os 16 modulos oficiais, com foco em `modules`, `permissions`, `roles` e `module_dependencies`.

Arquivos alterados:

- `src/studio/modules/registry.ts`
- `src/studio/permissions/rbac.ts`
- `supabase/projects/main/migrations/20260708205740_ts_studio_foundation.sql`
- `scripts/audit-ts-studio.mjs`
- documentacao em `docs/`
- `CHANGELOG.md`

APIs envolvidas: nenhuma API executavel.

Tabelas: `studio.modules`, `studio.module_dependencies`, `studio.permissions`, `studio.role_permissions`, `studio.roles`.

Migrations: ajuste local da migration de fundacao, sem aplicacao remota.

Componentes React: nenhum componente novo.

Hooks: nenhum hook novo.

Stores: nenhum store novo.

Providers: nenhum provider novo.

Servicos: auditor local `audit:ts-studio`.

Edge Functions: nenhuma alteracao.

Permissoes: todas as permissoes oficiais do registry, com grants por role alinhados ao RBAC TypeScript.

Testes e auditorias:

- `npm run audit:ts-studio`
- `npm run audit`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `git diff --check`

Criterios de aceite:

- registry e SQL possuem os mesmos modulos;
- registry e SQL possuem as mesmas permissoes;
- SQL e TypeScript possuem os mesmos grants por role;
- nenhum endpoint administrativo e exposto;
- nenhuma migration e aplicada remotamente.

## Milestone 1 - Security and Audit

Objetivo: criar a base server-side para sessao administrativa, RBAC real, auditoria e rastreabilidade.

Modulos envolvidos: Security and Audit, Users and RBAC como consumidor parcial.

Arquivos previstos:

- `src/studio/api/*`
- `src/studio/security/*`
- `src/studio/services/audit/*`
- `src/studio/middleware/*`
- `src/studio/types/*`
- migration complementar para auditoria, se necessaria
- documentacao de security e rollback

APIs envolvidas:

- `GET /api/studio/security/audit-events`
- `GET /api/studio/security/posture`
- `POST /api/studio/security/access-review`

Tabelas: `studio.audit_events`, `studio.roles`, `studio.permissions`, `studio.role_permissions`, `studio.user_roles`.

Migrations: somente se houver ajuste estrutural. Seeds devem permanecer em paridade.

Componentes React: `AuditEventTable`, `SecurityPosturePanel`, `AccessReviewPanel`, estados de denied, loading e error.

Hooks: `useAuditEvents`, `useSecurityPosture`, `useAccessReview`.

Stores: store de sessao administrativa somente se aprovado pelo desenho server-side.

Providers: provider de Studio pode passar a consumir estado real, sem expor segredo.

Servicos: auth resolver, RBAC guard, audit writer, sensitive metadata redactor.

Edge Functions: nenhuma nova Function obrigatoria.

Permissoes: `security.read`, `security.manage`, `security.audit`, `users.audit`.

Testes: sem sessao, sem permissao, owner, admin, analyst, redacao de metadata sensivel e auditoria de negacoes.

Criterios de aceite:

- API real exige sessao administrativa;
- permission denied retorna erro padronizado;
- escritas sensiveis geram audit event;
- nenhum secret aparece no browser ou em logs.

## Milestone 2 - Users and RBAC

Objetivo: administrar acesso interno com roles, expiracao e revisao de acesso.

Modulos envolvidos: Users and RBAC, Security and Audit.

Arquivos previstos: services de usuarios, APIs de roles, hooks de usuarios, componentes de matriz de permissoes e documentacao de acesso.

APIs envolvidas:

- `GET /api/studio/users`
- `GET /api/studio/users/:id`
- `POST /api/studio/users/:id/roles`
- `DELETE /api/studio/users/:id/roles/:roleKey`
- `GET /api/studio/rbac/matrix`

Tabelas: `auth.users`, `studio.user_roles`, `studio.roles`, `studio.permissions`, `studio.role_permissions`, `studio.audit_events`.

Migrations: possivel indice ou constraint para impedir duplicidade de role ativa.

Componentes React: `UserAccessTable`, `RoleMatrix`, `RoleAssignmentDialog`, `AccessExpirationField`.

Hooks: `useStudioUsers`, `useRoleMatrix`, `useRoleAssignments`.

Stores: nenhum store global alem da sessao.

Providers: Studio provider com usuario administrativo resolvido.

Servicos: user access service, role assignment service.

Edge Functions: nenhuma.

Permissoes: `users.read`, `users.manage`, `users.audit`, `security.read`.

Testes: assign, remove, expire, ultimo owner protegido, usuario sem permissao.

Criterios de aceite:

- roles so mudam com auditoria;
- ultimo owner nao pode ser removido;
- role expirada nao concede acesso;
- UI nunca substitui autorizacao server-side.

## Milestone 3 - Integrations and System

Objetivo: inventariar provedores, ambientes, callbacks, health checks sem side effect e feature flags.

Modulos envolvidos: Integrations, System Settings, Security.

Arquivos previstos: services de integracoes, APIs de providers, painel de settings, validadores de ambiente.

APIs envolvidas:

- `GET /api/studio/integrations`
- `GET /api/studio/integrations/:key`
- `POST /api/studio/integrations/:key/health-check`
- `GET /api/studio/system/settings`
- `PATCH /api/studio/system/settings/:key`
- `GET /api/studio/system/feature-flags`

Tabelas: `studio.integration_connections`, `studio.settings`, `studio.feature_flags`, `studio.audit_events`.

Migrations: possiveis constraints para ambiente e provider.

Componentes React: `IntegrationProviderCard`, `SecretChecklist`, `CallbackUrlList`, `HealthCheckStatus`, `FeatureFlagTable`.

Hooks: `useIntegrations`, `useIntegrationHealth`, `useSystemSettings`, `useFeatureFlags`.

Stores: nenhum store duravel no browser.

Providers: provider de configuracao somente com dados nao sensiveis.

Servicos: integration inventory service, environment policy service, feature flag service.

Edge Functions: nenhuma publicacao obrigatoria.

Permissoes: `integrations.read`, `integrations.manage`, `system.read`, `system.manage`, `security.read`.

Testes: secret ausente, callback errado, health degraded, flag por ambiente, denied.

Criterios de aceite:

- secrets nunca retornam em texto claro;
- Preview e Staging nao usam Production como fallback;
- health checks nao alteram dados;
- mudancas de settings geram auditoria.

## Milestone 4 - Media Library

Objetivo: registrar assets, upload intent, metadados, alt text, MIME type e archive seguro.

Modulos envolvidos: Media, System, Security.

Arquivos previstos: APIs de media, services de storage, componentes de biblioteca e documentacao de bucket.

APIs envolvidas:

- `GET /api/studio/media`
- `POST /api/studio/media/upload-intent`
- `POST /api/studio/media`
- `GET /api/studio/media/:id`
- `PATCH /api/studio/media/:id`
- `POST /api/studio/media/:id/archive`

Tabelas: `studio.media_assets`, `storage.objects`, `studio.audit_events`.

Migrations: possiveis colunas de ownership, alt text e uso.

Componentes React: `MediaLibraryGrid`, `MediaUploadDialog`, `MediaAssetDetail`, `AltTextChecklist`, `AssetUsagePanel`.

Hooks: `useMediaAssets`, `useMediaUpload`, `useMediaAsset`, `useAssetUsage`.

Stores: estado local de upload, sem persistir segredo.

Providers: nenhum novo.

Servicos: upload intent service, MIME validator, asset registry service.

Edge Functions: nenhuma, salvo decisao futura para scanner.

Permissoes: `media.read`, `media.write`, `media.manage`, `security.read`.

Testes: MIME permitido, MIME bloqueado, tamanho excedido, alt text, archive e denied.

Criterios de aceite:

- upload e validado por tamanho e MIME;
- asset e registrado antes de uso editorial;
- archive nao quebra conteudo publicado sem alerta;
- nenhuma operacao fisica destrutiva no primeiro release.

## Milestone 5 - Content Core

Objetivo: criar CRUD de conteudo generico, versionamento e workflow editorial.

Modulos envolvidos: Content, Media, Security, Users.

Arquivos previstos: APIs de content, editor shell, services de versionamento e workflow.

APIs envolvidas:

- `GET /api/studio/content`
- `POST /api/studio/content`
- `GET /api/studio/content/:id`
- `PATCH /api/studio/content/:id`
- `POST /api/studio/content/:id/review`
- `POST /api/studio/content/:id/publish`
- `POST /api/studio/content/:id/archive`
- `GET /api/studio/content/:id/versions`
- `POST /api/studio/content/:id/restore-version`

Tabelas: `studio.content_items`, `studio.content_versions`, `studio.media_assets`, `studio.audit_events`.

Migrations: constraints para status, slug, locale e versionamento, se necessario.

Componentes React: `ContentList`, `ContentEditorShell`, `ContentStatusBadge`, `ContentVersionTimeline`, `PublishDialog`.

Hooks: `useContentItems`, `useContentItem`, `useContentVersions`, `usePublishContent`.

Stores: estado local do editor, sem regra de autorizacao.

Providers: editor provider se necessario para formulario.

Servicos: content service, version service, workflow service.

Edge Functions: nenhuma.

Permissoes: `content.read`, `content.write`, `content.publish`, `media.read`.

Testes: draft, review, publish, archive, restore, slug conflict, denied.

Criterios de aceite:

- toda escrita cria versao;
- publish exige permissao especifica;
- restore cria nova versao, sem apagar historico;
- rascunhos nao vazam para publico.

## Milestone 6 - SEO, Taxonomy and Authors

Objetivo: governar metadata, canonical, tags, categorias e autoria antes do editor de artigos.

Modulos envolvidos: SEO, Taxonomy, Authors, Content, Media, System.

Arquivos previstos: APIs de SEO, taxonomy e authors, validadores de canonical, componentes de preview e uso.

APIs envolvidas:

- `GET /api/studio/seo/routes`
- `PATCH /api/studio/seo/routes/:contentId`
- `POST /api/studio/seo/validate`
- `POST /api/studio/seo/sitemap/preview`
- `GET /api/studio/taxonomy`
- `POST /api/studio/taxonomy`
- `PATCH /api/studio/taxonomy/:id`
- `GET /api/studio/authors`
- `POST /api/studio/authors`
- `PATCH /api/studio/authors/:id`

Tabelas: `studio.content_items`, `studio.settings`, possiveis `studio.taxonomies`, possivel `studio.authors`, `studio.audit_events`.

Migrations: somente apos decidir se taxonomy e authors saem de JSON para tabelas dedicadas.

Componentes React: `SeoPreview`, `OpenGraphPreview`, `CanonicalChecker`, `TaxonomyTree`, `TagUsageReport`, `AuthorProfileEditor`.

Hooks: `useSeoRoutes`, `useSeoValidation`, `useTaxonomies`, `useTagUsage`, `useAuthors`.

Stores: nenhum global.

Providers: nenhum novo.

Servicos: SEO validator, taxonomy service, author service.

Edge Functions: nenhuma.

Permissoes: `seo.read`, `seo.write`, `seo.manage`, `taxonomy.read`, `taxonomy.write`, `authors.read`, `authors.write`.

Testes: canonical valido, OG image existente, tag merge, autor vinculado, denied.

Criterios de aceite:

- SEO e validado por ambiente;
- taxonomy nao cria slug duplicado;
- author schema possui fonte unica;
- sitemap preview nao escreve em producao.

## Milestone 7 - Articles

Objetivo: implementar editor e workflow de artigos usando Content, SEO, Taxonomy, Authors e Media.

Modulos envolvidos: Articles, Content, SEO, Taxonomy, Authors, Media.

Arquivos previstos: APIs de articles, editor de artigos, services de validacao editorial e fontes.

APIs envolvidas:

- `GET /api/studio/articles`
- `POST /api/studio/articles`
- `GET /api/studio/articles/:id`
- `PATCH /api/studio/articles/:id`
- `POST /api/studio/articles/:id/validate`
- `POST /api/studio/articles/:id/publish`
- `GET /api/studio/articles/:id/related`

Tabelas: `studio.content_items`, `studio.content_versions`, taxonomy/authors se dedicados, `studio.audit_events`.

Migrations: somente se Articles exigir campos especificos fora do modelo generico.

Componentes React: `ArticleList`, `ArticleEditor`, `ArticleSeoPanel`, `ArticleSourceManager`, `RelatedArticlesPicker`.

Hooks: `useArticles`, `useArticleEditor`, `useArticleValidation`, `useRelatedArticles`, `useArticlePublish`.

Stores: estado local do editor.

Providers: editor provider se necessario.

Servicos: article service, editorial validation service.

Edge Functions: nenhuma.

Permissoes: `articles.read`, `articles.write`, `articles.publish`, `content.*`, `seo.*`, `taxonomy.read`, `authors.read`, `media.read`.

Testes: criar artigo, validar artigo, publish, slug conflict, rollback de versao, denied.

Criterios de aceite:

- artigo nao duplica modelo de Content;
- SEO, fontes, autor, tags e cover sao validados antes de publish;
- preview representa o estado publicado;
- dados estaticos existentes continuam funcionando.

## Milestone 8 - Forms and Newsletter

Objetivo: administrar formulario, rate limit, CAPTCHA, Resend, assinantes e consentimento.

Modulos envolvidos: Forms, Newsletter, Integrations, Security.

Arquivos previstos: APIs de forms e newsletter, paines de health, subscriber table e consent timeline.

APIs envolvidas:

- `GET /api/studio/forms/summary`
- `GET /api/studio/forms/rate-limits`
- `PATCH /api/studio/forms/settings`
- `POST /api/studio/forms/test-email`
- `GET /api/studio/newsletter/subscribers`
- `PATCH /api/studio/newsletter/subscribers/:id`
- `POST /api/studio/newsletter/subscribers/:id/unsubscribe`

Tabelas: `public.contact_rate_limits`, `public.newsletter_subscribers`, futuras tabelas de consentimento, `studio.audit_events`.

Migrations: possiveis tabelas de consentimento e retencao.

Componentes React: `FormHealthPanel`, `RateLimitTable`, `CaptchaSettingsPanel`, `SubscriberTable`, `ConsentTimeline`.

Hooks: `useFormSummary`, `useRateLimits`, `useFormSettings`, `useSubscribers`, `useSubscriberConsent`.

Stores: nenhum.

Providers: nenhum novo.

Servicos: forms service, resend health service, newsletter service.

Edge Functions: revisao de `send-contact-email`, sem publicacao nesta milestone sem aprovacao.

Permissoes: `forms.read`, `forms.manage`, `newsletter.read`, `newsletter.write`, `newsletter.manage`.

Testes: CAPTCHA ausente, Resend ausente, rate limit, unsubscribe, denied.

Criterios de aceite:

- secrets de email nao aparecem em UI;
- PII e minimizada em logs;
- unsubscribe e auditavel;
- exportacao, se existir, exige permissao elevada.

## Milestone 9 - Discord and Comments

Objetivo: moderar comentarios e perfis Discord no projeto Comentarios, com auditoria no projeto Principal.

Modulos envolvidos: Discord and Comments, Users, Security, Integrations, Monitoring.

Arquivos previstos: APIs cross-project, fila de moderacao, services de comments e profiles.

APIs envolvidas:

- `GET /api/studio/discord/comments`
- `GET /api/studio/discord/comments/:id`
- `POST /api/studio/discord/comments/:id/moderate`
- `GET /api/studio/discord/profiles`
- `GET /api/studio/discord/oauth-events`
- `POST /api/studio/discord/profile-sync/:userId`
- `GET /api/studio/discord/realtime-status`

Tabelas: `public.comments`, `public.comment_reactions`, `public.discord_profiles`, `public.user_roles` no Supabase Comentarios, `studio.audit_events` no Principal.

Migrations: somente se moderacao exigir campos novos no projeto Comentarios.

Componentes React: `CommentModerationQueue`, `CommentDetailPanel`, `DiscordProfileCard`, `ModerationActionDialog`, `RealtimeChannelStatus`.

Hooks: `useModerationQueue`, `useCommentDetail`, `useDiscordProfiles`, `useModerationAction`, `useRealtimeStatus`.

Stores: nenhum.

Providers: nenhum novo.

Servicos: comments service, profile sync service, cross-project audit service.

Edge Functions: comparar `discord-post-login`, `discord-refresh-profile`, `discord-userinfo`; publicar somente com aprovacao futura.

Permissoes: `discord.read`, `discord.moderate`, `discord.manage`, `users.read`, `security.read`.

Testes: hide, restore, denied, projeto correto, token nao exposto, Realtime status.

Criterios de aceite:

- moderacao altera apenas Supabase Comentarios;
- auditoria administrativa fica no Supabase Principal;
- tokens OAuth e bot nunca retornam;
- Realtime pode ser desligado por ambiente.

## Milestone 10 - Monitoring and Analytics

Objetivo: consolidar health checks, incidentes, logs redigidos e metricas agregadas.

Modulos envolvidos: Monitoring, Analytics, Integrations, Security, Content, Discord, Forms.

Arquivos previstos: APIs de monitoring e analytics, services de metricas, componentes de charts e health.

APIs envolvidas:

- `GET /api/studio/monitoring/summary`
- `GET /api/studio/monitoring/health-checks`
- `POST /api/studio/monitoring/health-checks/run`
- `GET /api/studio/analytics/summary`
- `GET /api/studio/analytics/content`
- `GET /api/studio/analytics/community`
- `POST /api/studio/analytics/export`

Tabelas: `studio.jobs`, futuras `studio.health_checks`, futura `studio.incidents`, futura `studio.analytics_snapshots`, `studio.audit_events`.

Migrations: health checks, incidents e snapshots se aprovados.

Componentes React: `MonitoringOverview`, `ProviderHealthGrid`, `IncidentTimeline`, `AnalyticsOverview`, `ContentPerformanceChart`.

Hooks: `useMonitoringSummary`, `useHealthChecks`, `useIncidents`, `useAnalyticsSummary`, `useAnalyticsExport`.

Stores: nenhum global.

Providers: nenhum novo.

Servicos: health check service, incident service, analytics aggregation service.

Edge Functions: nenhuma nova obrigatoria.

Permissoes: `monitoring.read`, `monitoring.manage`, `analytics.read`, `integrations.read`, `security.read`.

Testes: ok, degraded, unavailable, logs redigidos, export auditada, denied.

Criterios de aceite:

- health checks sao somente leitura;
- metricas sao segregadas por ambiente;
- exportacao gera auditoria;
- dados agregados nao expoem PII indevida.

## Milestone 11 - Operational Dashboard

Objetivo: exibir resumo operacional sem criar regras de negocio novas.

Modulos envolvidos: Dashboard, Monitoring, Analytics, Security, Integrations, Content, Discord, Forms.

Arquivos previstos: APIs de dashboard, cards de summary, feed de auditoria, alertas e acknowledgement.

APIs envolvidas:

- `GET /api/studio/dashboard/summary`
- `GET /api/studio/dashboard/activity`
- `GET /api/studio/dashboard/alerts`
- `POST /api/studio/dashboard/alerts/:id/acknowledge`

Tabelas: dados agregados dos modulos de origem, `studio.audit_events`, `studio.jobs`, `studio.integration_connections`.

Migrations: somente se alertas exigirem tabela propria.

Componentes React: `DashboardSummaryGrid`, `OperationalHealthCard`, `RecentAuditFeed`, `PendingReviewCard`, `IntegrationStatusStrip`.

Hooks: `useDashboardSummary`, `useRecentAuditEvents`, `useDashboardAlerts`, `usePendingReviews`.

Stores: nenhum.

Providers: nenhum novo.

Servicos: dashboard summary service.

Edge Functions: nenhuma.

Permissoes: `dashboard.read` e permissoes indiretas dos modulos de origem.

Testes: viewer, analyst, admin, owner, alert acknowledge, denied.

Criterios de aceite:

- dashboard nao consulta provider externo pelo browser;
- card so exibe detalhes que a role pode ver;
- estado parcial e degraded sao explicitos;
- reconhecimento de alerta gera auditoria.

## Regra de parada entre milestones

Ao concluir cada milestone:

1. atualizar documentacao;
2. atualizar `CHANGELOG.md`;
3. executar lint, typecheck, build e auditorias;
4. revisar diff e rollback;
5. fazer commit local;
6. so fazer push se nao acionar deploy proibido ou se houver autorizacao explicita para Preview;
7. aguardar autorizacao antes da proxima milestone.
