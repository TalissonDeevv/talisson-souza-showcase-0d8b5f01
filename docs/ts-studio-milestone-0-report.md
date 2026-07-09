# TS Studio Milestone 0 Report

Data: 2026-07-09
Branch: `feature/ts-studio-milestone-0-foundation-parity`
Status: implementada localmente, aguardando validacoes finais e decisao segura de push

## Objetivo

Alinhar a fundacao do TS Studio antes de qualquer funcionalidade real. A milestone remove divergencias entre registry TypeScript, RBAC TypeScript e migration SQL, preservando o isolamento do Studio e sem alterar comportamento publico do site.

## Alteracoes realizadas

### Registry de modulos

Arquivo: `src/studio/modules/registry.ts`

O registry passou a declarar dependencias completas por modulo. A ordem logica agora segue a arquitetura oficial:

- Dashboard consome Monitoring, Analytics, Integrations e Security;
- Content depende de Media, Security e Users;
- Articles depende de Content, SEO, Taxonomy, Authors e Media;
- Taxonomy depende de Content e SEO;
- Authors depende de Users, Media e SEO;
- SEO depende de Content, Media e System;
- Media depende de Security e System;
- Discord depende de Users, Security, Integrations e Monitoring;
- Newsletter depende de Forms, Integrations e Security;
- Analytics depende de Content, Discord, Forms e Monitoring;
- Monitoring depende de Integrations e Security;
- System depende de Security e Integrations.

Observacao tecnica: o relacionamento futuro entre System e Content nao foi modelado como dependencia direta para evitar ciclo desnecessario nesta fundacao.

### RBAC TypeScript

Arquivo: `src/studio/permissions/rbac.ts`

As roles foram ajustadas para refletir a matriz oficial:

- `admin` recebeu leitura de usuarios, gerenciamento de monitoring e gerenciamento de integrations;
- `analyst` recebeu `system.read`;
- as permissoes continuam declaradas de forma explicita, sem heranca implicita para roles nao owner.

### Migration de fundacao

Arquivo: `supabase/projects/main/migrations/20260708205740_ts_studio_foundation.sql`

A migration local foi alinhada com a arquitetura:

- `studio.modules` agora semeia os 16 modulos oficiais;
- `studio.module_dependencies` recebe seed completo;
- `studio.permissions` recebeu permissoes ausentes;
- `studio.role_permissions` limpa grants de roles de sistema antes de recriar a matriz;
- grants por role foram realinhados com o RBAC TypeScript.

Esta migration nao foi aplicada remotamente.

### Auditor TS Studio

Arquivo: `scripts/audit-ts-studio.mjs`

O auditor agora valida:

- existencia dos documentos oficiais;
- modulos esperados;
- roles esperadas;
- RBAC apontando apenas para permissoes declaradas no registry;
- SQL contendo todos os modulos do registry;
- SQL nao semeando modulos desconhecidos;
- SQL contendo todas as permissoes do registry;
- SQL nao semeando permissoes desconhecidas;
- grants de `admin`, `editor`, `moderator`, `analyst` e `viewer` em paridade com TypeScript.

## Estrutura antiga

- Registry declarava 16 modulos.
- Migration semeava 13 modulos.
- `articles`, `taxonomy` e `authors` existiam no codigo, mas nao no seed SQL.
- Permissoes oficiais existiam no TypeScript, mas parte delas nao existia no SQL.
- `studio.module_dependencies` existia como tabela, mas nao tinha seed alinhado.
- O auditor verificava existencia basica, mas nao paridade completa.

## Estrutura nova

- Registry, RBAC e SQL possuem a mesma lista operacional de modulos e permissoes.
- Dependencias de modulos passam a existir no registry e no seed SQL.
- Grants por role sao auditados automaticamente.
- A documentacao marca a paridade de fundacao como concluida e separa pendencias futuras reais.

## Arquivos modificados

- `CHANGELOG.md`
- `docs/ts-studio-database.md`
- `docs/ts-studio-implementation-plan.md`
- `docs/ts-studio-milestone-0-report.md`
- `docs/ts-studio-milestones.md`
- `docs/ts-studio-modules.md`
- `docs/ts-studio-official-architecture.md`
- `docs/ts-studio-permissions.md`
- `docs/ts-studio-roadmap.md`
- `scripts/audit-ts-studio.mjs`
- `src/studio/modules/registry.ts`
- `src/studio/permissions/rbac.ts`
- `supabase/projects/main/migrations/20260708205740_ts_studio_foundation.sql`

Tambem permanecem na branch os documentos oficiais de arquitetura e plano criados antes desta milestone, que agora sao a fonte da verdade do TS Studio.

## APIs envolvidas

Nenhuma API executavel foi criada ou alterada. Os contratos existentes em `src/studio/api/contracts.ts` permanecem apenas contratuais.

## Tabelas envolvidas

- `studio.modules`
- `studio.module_dependencies`
- `studio.permissions`
- `studio.role_permissions`
- `studio.roles`

Nenhuma tabela foi criada remotamente nesta etapa.

## Edge Functions

Nenhuma Edge Function foi alterada, publicada ou reconfigurada.

## Permissoes RBAC

A milestone confirmou as permissoes oficiais declaradas no registry:

- `dashboard.read`
- `content.read`, `content.write`, `content.publish`
- `articles.read`, `articles.write`, `articles.publish`
- `taxonomy.read`, `taxonomy.write`
- `authors.read`, `authors.write`
- `seo.read`, `seo.write`, `seo.manage`
- `media.read`, `media.write`, `media.manage`
- `users.read`, `users.manage`, `users.audit`
- `discord.read`, `discord.moderate`, `discord.manage`
- `forms.read`, `forms.manage`
- `newsletter.read`, `newsletter.write`, `newsletter.manage`
- `analytics.read`
- `monitoring.read`, `monitoring.manage`
- `security.read`, `security.manage`, `security.audit`
- `integrations.read`, `integrations.manage`
- `system.read`, `system.manage`

## Riscos e mitigacoes

Risco: migration local foi alterada, mas ainda nao aplicada.

Mitigacao: nao houve publicacao remota. Antes de aplicar em Staging, executar replay em banco limpo e backup do alvo.

Risco: `DELETE FROM studio.module_dependencies` limpa dependencias antes de reseed.

Mitigacao: a tabela ainda e de fundacao e nao possui dados operacionais. Se houver dados reais no futuro, o padrao deve mudar para migration incremental.

Risco: `DELETE FROM studio.role_permissions` para roles de sistema remove grants antes do reseed.

Mitigacao: a acao se limita a roles com `is_system = true` e recria a matriz oficial. Antes de producao, validar se nao ha grants customizados em roles de sistema.

Risco: dependencias de modulo podem orientar implementacao futura de forma rigida demais.

Mitigacao: dependencies sao contrato arquitetural, nao carregamento automatico de codigo.

## Impactos

Comportamento publico: sem impacto esperado.

Performance: sem impacto runtime, pois o Studio continua isolado e nenhuma rota publica foi conectada.

SEO: sem impacto, nenhuma metadata publica foi alterada.

UX: sem impacto, nenhuma interface publica ou administrativa ativa foi alterada.

Seguranca: melhora de governanca, pois o auditor passa a bloquear divergencia de permissao e seed.

## Rollback

Rollback local:

1. reverter este commit;
2. confirmar que `npm run audit:ts-studio` volta ao estado anterior somente se a branch tambem reverter os documentos oficiais;
3. nao aplicar nenhuma migration remota.

Rollback caso a migration tenha sido aplicada em Staging futuramente:

1. criar backup do banco de Staging antes de qualquer reversao;
2. revisar grants atuais em `studio.role_permissions`;
3. restaurar snapshot se a aplicacao tiver dependido dos seeds novos;
4. se ainda nao houver dados operacionais, reaplicar a migration anterior em ambiente limpo;
5. registrar a decisao no runbook de Staging.

## Criterios de aceite

- `npm run audit:ts-studio` aprovado;
- lint aprovado;
- typecheck aprovado;
- build aprovado;
- `npm run audit` aprovado;
- `git diff --check` aprovado;
- documentacao e changelog atualizados;
- commit local criado;
- push realizado somente se nao disparar deploy proibido ou se houver autorizacao explicita para Preview.

## Proxima milestone

A proxima milestone tecnica e Security and Audit. Ela nao deve iniciar antes de autorizacao explicita do usuario.
