# Sprint 1 Report - Repository Architecture Reorganization

Data de fechamento: 2026-07-08
Branch: `architecture/repository-reorganization`

## Objetivo

Reorganizar a arquitetura do repositorio preservando 100% do comportamento funcional atual, com foco em:

- separacao entre Supabase Principal e Supabase Comentarios;
- separacao de migrations, Edge Functions, configs, docs e scripts;
- eliminacao de fallback automatico para producao;
- arquitetura clara para Development, Preview, Staging e Production;
- documentacao e auditorias automatizadas para impedir regressao arquitetural.

## Alteracoes Realizadas

- Criada estrutura multi-projeto em `supabase/projects/main` e `supabase/projects/comments`.
- Movidas Edge Functions para o projeto dono correto.
- Movidas migrations por dominio funcional.
- Migrations historicas mistas foram preservadas em `supabase/legacy-mixed`.
- Criado validador de ambiente em `src/integrations/supabase/env.ts`.
- Removido fallback hardcoded do cliente de comentarios.
- Criado script `scripts/audit-architecture.mjs`.
- Atualizados `README.md`, documentacao Supabase e relatorios de hardening/staging.
- Adicionado `supabase/.temp/` ao `.gitignore`.

## Arquivos Alterados

- `.env.example`
- `.gitignore`
- `README.md`
- `package.json`
- `scripts/audit-architecture.mjs`
- `src/integrations/supabase/env.ts`
- `src/integrations/supabase/client.ts`
- `src/integrations/supabase-comments/client.ts`
- `docs/supabase-architecture.md`
- `docs/security-hardening.md`
- `docs/security-hardening-files-report.md`
- `docs/staging-preparation-report.md`
- `docs/discord-comments/LGPD_EMAIL_AUDIT_REPORT.md`
- `supabase/README.md`
- `supabase/projects/main/**`
- `supabase/projects/comments/**`
- `supabase/legacy-mixed/**`

## Estrutura Antiga

```text
supabase/
  config.toml
  functions/
    send-contact-email/
    discord-post-login/
    discord-refresh-profile/
    discord-userinfo/
  migrations/
```

Problema: a raiz misturava objetos de projetos diferentes, permitindo confusao operacional entre Supabase Principal, Comentarios, Preview, Staging e Production.

## Estrutura Nova

```text
supabase/
  projects/
    main/
      config.toml
      functions/send-contact-email/
      migrations/
    comments/
      config.toml
      functions/discord-post-login/
      functions/discord-refresh-profile/
      functions/discord-userinfo/
      migrations/
  legacy-mixed/
    migrations/
```

## Problemas Encontrados

- Cliente de comentarios tinha fallback para um projeto Supabase conhecido.
- O repositorio tinha um layout Supabase unico, incompatibilizando uma operacao segura multi-projeto.
- Migrations de dominios diferentes estavam juntas.
- Documentacao antiga apontava para caminhos raiz do Supabase.
- Nao havia auditoria automatizada para impedir regressao de arquitetura.

## Problemas Resolvidos

- Fallback de producao removido.
- Variaveis obrigatorias agora falham explicitamente quando ausentes ou inconsistentes.
- Supabase Principal e Comentarios foram separados no filesystem.
- Edge Functions foram separadas por projeto.
- Migrations foram separadas por projeto.
- Referencias antigas foram atualizadas ou isoladas como legado.
- Auditorias `audit:architecture`, `audit:imports`, `audit:references` e `audit:env` foram adicionadas.

## Riscos Conhecidos

- Ambientes Preview/Staging precisam configurar todas as variaveis obrigatorias; isso e intencional.
- A separacao muda o modo operacional de uso do Supabase CLI.
- `supabase/legacy-mixed` nao deve ser aplicado diretamente.

## Impactos

- Funcionalidade: comportamento de aplicacao preservado.
- UX: sem alteracao intencional.
- SEO: sem impacto esperado.
- Performance: sem impacto runtime esperado.
- Operacao: maior clareza e menor risco de apontar Staging para Producao.

## Validacoes Executadas

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run audit:architecture`
- `npm run audit:imports`
- `npm run audit:references`
- `npm run audit:env`
- `npx -y deno check` nas Edge Functions
- `git diff --check`

## Proximos Passos

1. Manter variaveis explicitas por ambiente.
2. Usar somente `supabase/projects/main` e `supabase/projects/comments` como fonte ativa.
3. Nunca recriar `supabase/config.toml`, `supabase/functions` ou `supabase/migrations` na raiz.
4. Validar Staging real antes de qualquer merge para a branch default.
