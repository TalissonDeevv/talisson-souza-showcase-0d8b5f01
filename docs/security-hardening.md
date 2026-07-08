# Security Hardening Log

Data: 2026-07-08  
Branch: `hardening/security-audit-p1-p4`

Este documento registra as correcoes aplicadas a partir da auditoria de seguranca e separa o que foi corrigido no codigo do que depende de configuracao externa.

## Correcoes Aplicadas

### P1

- Sessoes Supabase migradas de `localStorage` para `sessionStorage` nos clientes de aplicacao e comentarios.
- Tokens OAuth do Discord continuam sendo removidos depois do post-login, agora cobrindo tanto `sessionStorage` quanto `localStorage`.
- Formulario de contato passou a usar CAPTCHA assinado gerado pela Edge Function `send-contact-email`.
- `send-contact-email` passou a aplicar honeypot, validacao server-side, rate limit por IP/e-mail com hashes, resposta sem dados internos do Resend e logs sem payload sensivel.
- `.env` foi removido do versionamento e substituido por `.env.example` sem segredos reais.
- Schema base de comentarios Discord foi promovido de SQL documental para migracao Supabase versionada.
- Tabela/RPC de rate limit foram adicionadas para Edge Functions.
- Politica publica de insercao em `newsletter_subscribers` foi removida.

### P2

- `discord-post-login` passou a limitar chamadas e validar que o token Discord pertence ao usuario Supabase autenticado.
- `discord-refresh-profile` passou a limitar chamadas antes de acessar a API do Discord com token de bot.
- Dependencias de build foram atualizadas para remover vulnerabilidades conhecidas de Vite/esbuild:
  - `vite@8.1.3`
  - `@vitejs/plugin-react-swc@4.3.1`
  - `lovable-tagger@1.3.1`
- Middleware de SEO agora escapa metadados e serializa URL de redirecionamento com `JSON.stringify`.
- Aberturas externas restantes com `window.open` receberam `noopener,noreferrer`.
- CSP removeu `unsafe-eval` e `http:` em imagens; headers adicionais `COOP`, `CORP` e `X-Permitted-Cross-Domain-Policies` foram adicionados.
- Bucket `blog-images` recebeu hardening por migracao: limite de 5 MB, MIME types de imagem e extensoes permitidas na policy de upload.
- Realtime foi restringido para canais autenticados `comments:%`.
- RPCs de estatisticas de comentarios deixaram de ser executaveis por `anon`.

### Sprint 2 - Infraestrutura Supabase

- Projeto Principal recebeu migration de grants explicitos para Data API e endurecimento final de policies `UPDATE` com `WITH CHECK`.
- Projeto Comentarios recebeu migration de otimizacao de policies RLS usando `(select auth.uid())`, alinhada aos Advisors de performance do Supabase.
- `verify_jwt` das Edge Functions foi declarado explicitamente nos `config.toml` de cada projeto.
- Scripts `audit:supabase:*` foram adicionados para validar migrations, Functions, RLS, policies, Storage, Realtime, env vars e secrets.
- Helper `.supabase-workdir` foi adicionado para materializar workdirs temporarios compativeis com Supabase CLI sem misturar a arvore fonte.

## Organizacao Supabase Atual

Na Sprint 1 a arvore Supabase foi separada por projeto:

- Projeto principal: `supabase/projects/main`
- Projeto de comentarios/Discord: `supabase/projects/comments`
- Historico misto/legado: `supabase/legacy-mixed`

Nao use mais `supabase/config.toml`, `supabase/functions` ou `supabase/migrations` na raiz. Esses caminhos foram removidos para impedir mistura acidental entre ambientes e projetos.

## Configuracao Externa Necessaria

### Supabase

1. Aplicar as migrations de cada projeto no respectivo Supabase:
   - Principal: `supabase/projects/main/migrations`
   - Comentarios/Discord: `supabase/projects/comments/migrations`
   - A migracao `20260609230000_atlas_comments_base_schema.sql` foi inserida com timestamp anterior a migrations ja existentes para restaurar replay limpo em projetos novos. Se o projeto Supabase de producao ja marcou migrations posteriores como aplicadas, aplicar este SQL em staging/producao com cuidado e, se necessario, reparar o historico de migrations pelo Supabase CLI.
2. Deploy das Edge Functions alteradas:
   - Principal: `send-contact-email`
   - Comentarios/Discord: `discord-post-login`, `discord-refresh-profile`, `discord-userinfo`
3. Configurar secrets das Edge Functions:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `CONTACT_CAPTCHA_SECRET`
   - `CONTACT_RATE_LIMIT_SALT`
   - `DISCORD_RATE_LIMIT_SALT`
   - `DISCORD_BOT_TOKEN`
   - `DISCORD_GUILD_ID`
   - `DISCORD_READER_ROLE_ID`
   - `ALLOWED_ORIGINS`
4. Confirmar no dashboard de Storage que o bucket `blog-images` esta publico somente para leitura, com upload autenticado por pasta do usuario, limite de 5 MB e MIME types `image/jpeg`, `image/png`, `image/webp`, `image/gif`.
5. Confirmar que o provider OAuth em producao e `custom:discord-minimal`, com scopes `identify guilds.join`, e que o provider Discord nativo com escopo de e-mail esta desabilitado.

### Vercel

1. Configurar somente variaveis `VITE_*` necessarias ao frontend.
2. Nao configurar service role, bot token, Resend key ou salts no ambiente browser da Vercel.
3. Validar em producao que os headers de `vercel.json` estao sendo aplicados em todas as rotas.
4. Antes de remover `unsafe-inline` da CSP, implementar nonce/hash para scripts inline e validar JSON-LD/SEO.

### DNS, TLS e Dominio

1. Confirmar HTTPS valido para `talissonsouza.com.br` e `www.talissonsouza.com.br`.
2. Validar renovacao automatica do certificado.
3. Verificar registros CAA conforme o provedor de certificados usado.
4. Manter HSTS somente se todos os subdominios usados suportarem HTTPS.

## Pendencias de Hardening

- CSP com nonce/hash e remocao futura de `unsafe-inline`.
- Trusted Types em modo report-only antes de enforcement.
- CAPTCHA gerenciado ou WAF externo caso o formulario receba abuso em producao.
- Monitoramento/SIEM para Edge Functions e eventos Supabase Auth.
- Politica operacional de rotacao de chaves e tokens.
- MFA obrigatorio para contas administrativas em Supabase, Vercel, GitHub, Discord Developer Portal e Resend.

## Validacao Local

Comandos esperados apos cada lote:

```bash
npm ci
npm run lint
npm run build
npm audit
```

Status em 2026-07-08:

- `npm ci`: passou.
- `npx tsc --noEmit -p tsconfig.app.json`: passou.
- `npm run build`: passou com `vite v8.1.3`.
- `npm audit`: passou com 0 vulnerabilidades.
- `npm audit --omit=dev`: passou com 0 vulnerabilidades.
- `npm run lint`: passou com 0 erros e 15 warnings preexistentes/estruturais de Fast Refresh e hooks.
- `npx -y deno check` nas Edge Functions `send-contact-email`, `discord-post-login`, `discord-refresh-profile` e `discord-userinfo`: passou.
- Supabase CLI local encontrado: `2.109.0`.
- `supabase db lint --local --fail-on error`: nao executou a analise porque nao ha Postgres local do Supabase aceitando conexao neste ambiente. Validar migrations em staging ou iniciar o stack local antes do deploy.

Validacoes externas apos deploy:

- Enviar formulario de contato com CAPTCHA valido.
- Repetir envio ate atingir rate limit e confirmar HTTP 429.
- Testar login Discord, entrada no servidor e atribuicao de cargo.
- Testar comentario raiz, resposta, edicao, exclusao e reacao.
- Verificar headers no dominio final com `curl -I`.
