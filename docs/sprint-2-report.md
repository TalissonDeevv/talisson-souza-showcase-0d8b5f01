# Sprint 2 Report - Supabase Infrastructure Preparation

Data de fechamento: 2026-07-08
Branch: `architecture/repository-reorganization`

## Objetivo

Preparar a infraestrutura Supabase para Development, Preview, Staging e Production, sem deploy e sem alteracao remota destrutiva.

Escopo:

- revisar estrutura dos projetos Supabase Principal e Comentarios;
- validar migrations por leitura estatica e auditoria automatizada;
- validar Edge Functions, secrets, permissoes, logs e rate limiting;
- revisar RLS, policies, Storage, Realtime e Auth;
- documentar deploy, staging e disaster recovery;
- criar scripts automatizados de auditoria.

## Alteracoes Realizadas

- Declarado `verify_jwt` por Function nos `config.toml` dos dois projetos.
- Criada migration do projeto Principal para grants explicitos de Data API e hardening final de policies.
- Criada migration do projeto Comentarios para otimizar avaliacao de RLS conforme Supabase Advisors.
- Criado `scripts/audit-supabase.mjs`.
- Criado `scripts/prepare-supabase-workdir.mjs`.
- Adicionados scripts `audit:supabase:*`, `audit:edge-functions` e `audit`.
- Criados documentos:
  - `docs/supabase-deployment.md`
  - `docs/staging-checklist.md`
  - `docs/disaster-recovery.md`

## Arquivos Alterados

- `.gitignore`
- `package.json`
- `scripts/audit-supabase.mjs`
- `scripts/prepare-supabase-workdir.mjs`
- `docs/supabase-deployment.md`
- `docs/staging-checklist.md`
- `docs/disaster-recovery.md`
- `docs/security-hardening.md`
- `docs/supabase-architecture.md`
- `supabase/README.md`
- `supabase/projects/main/README.md`
- `supabase/projects/comments/README.md`
- `supabase/projects/main/config.toml`
- `supabase/projects/comments/config.toml`
- `supabase/projects/main/migrations/20260708151015_explicit_data_api_grants.sql`
- `supabase/projects/comments/migrations/20260708151221_optimize_rls_policy_evaluation.sql`

## Estrutura Antiga

Nao havia uma camada de auditoria Supabase dedicada. O CLI tambem nao tinha um caminho seguro para trabalhar com layout multi-projeto sem recriar uma pasta raiz `supabase/` misturada.

## Estrutura Nova

```text
scripts/
  audit-supabase.mjs
  prepare-supabase-workdir.mjs

docs/
  supabase-deployment.md
  staging-checklist.md
  disaster-recovery.md

supabase/projects/main/
  config.toml
  migrations/20260708151015_explicit_data_api_grants.sql

supabase/projects/comments/
  config.toml
  migrations/20260708151221_optimize_rls_policy_evaluation.sql
```

## Problemas Encontrados

- Supabase Principal nao estava acessivel pela integracao remota atual.
- Projeto Comentarios remoto ainda tinha Advisors pendentes antes das migrations locais.
- `discord-post-login` remoto estava mais antigo que o codigo local preparado.
- `discord-refresh-profile` nao apareceu publicado no projeto remoto de comentarios.
- Docker/Postgres local nao estava disponivel para replay real.

## Problemas Resolvidos

- Auditorias locais cobrem migrations, Functions, RLS, policies, Storage, Realtime e secrets.
- Workdir temporario `.supabase-workdir/` foi criado para uso seguro do Supabase CLI.
- Grants explicitos foram adicionados para compatibilidade com novos projetos Supabase.
- Policies RLS de comentarios foram otimizadas para reduzir reavaliacao por linha.
- Documentacao de staging e disaster recovery foi criada.

## Variaveis Obrigatorias

Frontend por ambiente:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_COMMENTS_SUPABASE_URL`
- `VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY`
- `VITE_COMMENTS_SUPABASE_PROJECT_ID`

Supabase Principal:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `CONTACT_CAPTCHA_SECRET`
- `CONTACT_RATE_LIMIT_SALT`
- `ALLOWED_ORIGINS`

Supabase Comentarios:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `DISCORD_RATE_LIMIT_SALT`
- `DISCORD_BOT_TOKEN`
- `DISCORD_GUILD_ID`
- `DISCORD_READER_ROLE_ID`
- `ALLOWED_ORIGINS`

## Variaveis Opcionais

Nao foram encontradas integracoes executaveis com Mercado Pago ou Spotify. Google aparece como Google Forms/conteudo, sem secret backend no codigo.

## Riscos Conhecidos

- Replay e rollback reais ainda dependem de Docker, Supabase Branch ou projetos Staging.
- Advisors do projeto Principal precisam ser rodados quando a permissao remota existir.
- Functions remotas de Staging precisam ser publicadas antes de validar fluxos reais.

## Impactos

- Funcionalidade: sem mudanca de regra de negocio.
- UX: sem mudanca intencional.
- SEO: sem impacto esperado.
- Performance: melhora esperada em RLS de comentarios em escala.
- Seguranca: menor risco de grants implicitos, policies incompletas e drift operacional.

## Validacoes Executadas

- `npm run audit:supabase`
- `npm run audit:supabase:migrations`
- `npm run audit:supabase:functions`
- `npm run audit:supabase:rls`
- `npm run audit:supabase:policies`
- `npm run audit:supabase:storage`
- `npm run audit:supabase:realtime`
- `npm run audit:supabase:secrets`
- `npm run supabase:workdir:main`
- `npm run supabase:workdir:comments`
- `npx -y deno check` nas Edge Functions

## Proximos Passos

1. Criar/confirmar Supabase Staging Principal e Comentarios.
2. Configurar secrets por projeto.
3. Validar replay em banco limpo.
4. Aplicar migrations apenas em Staging.
5. Publicar Edge Functions apenas em Staging.
6. Rodar checklist manual de Staging.
7. Rodar Advisors nos dois projetos.
