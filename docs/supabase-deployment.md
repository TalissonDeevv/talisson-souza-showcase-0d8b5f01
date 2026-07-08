# Supabase Deployment

Branch: `architecture/repository-reorganization`
Sprint: 2
Data: 2026-07-08

Este documento prepara os ambientes Development, Preview, Staging e Production para os dois projetos Supabase usados pela aplicacao. Ele nao autoriza deploy, merge, publicacao de Edge Functions nem aplicacao de migrations em producao.

## Projetos

| Projeto | Ref atual | Caminho fonte | Responsabilidade |
| --- | --- | --- | --- |
| Principal | `xbjkbziaxwsjzsmxilap` | `supabase/projects/main` | dados principais, contato, newsletter, storage `blog-images` |
| Comentarios | `rfzjtmleojkojopftkfo` | `supabase/projects/comments` | login Discord, comentarios, reacoes, Realtime, funcoes Discord |
| Legado misto | n/a | `supabase/legacy-mixed` | historico para auditoria; nao aplicar diretamente |

## Ambientes

Cada ambiente deve apontar para projetos explicitos. Preview e Staging nao podem usar Production por fallback.

| Ambiente | Principal | Comentarios | Regra |
| --- | --- | --- | --- |
| Development | projeto dev ou sandbox aprovado | projeto comments dev ou sandbox aprovado | pode usar dados descartaveis |
| Preview | projeto preview/staging | projeto comments preview/staging | nunca usar producao |
| Staging | projeto staging dedicado | projeto comments staging dedicado | espelho operacional de producao |
| Production | projeto principal de producao | projeto comments de producao | somente apos staging aprovado |

## Variaveis Frontend

Configurar na Vercel por ambiente:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_PROJECT_ID=
VITE_COMMENTS_SUPABASE_URL=
VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY=
VITE_COMMENTS_SUPABASE_PROJECT_ID=
```

O frontend valida que cada `PROJECT_ID` corresponde ao project ref da URL.

## Revisao De Variaveis Por Ambiente

| Ambiente | Obrigatorias | Opcionais | Ausentes conhecidas | Inconsistencias conhecidas |
| --- | --- | --- | --- | --- |
| Development | todas as `VITE_*` acima, apontando para projetos dev/sandbox explicitos | nenhuma detectada | depende do `.env` local do desenvolvedor | nao usar refs de Production por conveniencia |
| Preview | todas as `VITE_*` acima, configuradas no ambiente Preview da Vercel | nenhuma detectada | precisa ser conferido no painel Vercel | Preview nao pode apontar automaticamente para Production |
| Staging | todas as `VITE_*` acima, apontando para Supabase Staging Principal e Comentarios | nenhuma detectada | projetos Staging ainda precisam ser criados/confirmados | callbacks Discord devem usar o ref de Staging |
| Production | todas as `VITE_*` acima, apontando para projetos Production | nenhuma detectada | depende de conferência no painel Vercel | nao misturar projeto Principal com Comentarios |

Variaveis privadas obrigatorias devem ficar no Supabase do projeto dono da Function, nunca como `VITE_*`.

## Secrets Supabase

### Projeto Principal

Secrets nas Edge Functions do Supabase:

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
CONTACT_CAPTCHA_SECRET=
CONTACT_RATE_LIMIT_SALT=
ALLOWED_ORIGINS=
```

`ALLOWED_ORIGINS` deve incluir os dominios do ambiente atual, por exemplo Vercel Preview, staging custom domain e localhost apenas em Development.

### Projeto Comentarios

```bash
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DISCORD_RATE_LIMIT_SALT=
DISCORD_BOT_TOKEN=
DISCORD_GUILD_ID=
DISCORD_READER_ROLE_ID=
ALLOWED_ORIGINS=
```

Fallbacks de secrets entre projetos nao devem ser usados operacionalmente. Cada projeto deve ter seus proprios salts, service role e tokens.

## Edge Functions

| Projeto | Function | JWT | Secrets principais | Observacao |
| --- | --- | --- | --- | --- |
| Principal | `send-contact-email` | true | Resend, service role, CAPTCHA, rate limit | invocada pelo frontend com anon JWT via supabase-js |
| Comentarios | `discord-post-login` | true | service role, bot token, guild/role ids, salt | exige usuario autenticado e provider token Discord |
| Comentarios | `discord-refresh-profile` | true | service role, bot token, salt | exige usuario autenticado |
| Comentarios | `discord-userinfo` | false | nenhum | endpoint OAuth userinfo; valida Bearer token do Discord |

Os valores `verify_jwt` estao declarados em:

- `supabase/projects/main/config.toml`
- `supabase/projects/comments/config.toml`

## Migrations

Aplicar sempre em Staging antes de Production.

### Principal

Ordem esperada:

1. Schema inicial: profiles, blogs, blog_comments e `blog-images`.
2. Restricao de leitura de profiles.
3. Newsletter.
4. Hardening de contato/newsletter/storage.
5. Grants explicitos e policy hardening para Data API.

O item 5 existe porque o Supabase esta mudando o comportamento de grants implicitos no schema `public`; novos projetos precisam de grants explicitos para Data API. Referencia: [Supabase changelog - default privileges/Data API grants](https://supabase.com/changelog).

### Comentarios

Ordem esperada:

1. Schema base de comentarios Discord.
2. Reacoes e campos de exibicao.
3. Badge verificado.
4. Hardening de rate limit, Realtime e RPC grants.
5. Otimizacao de avaliacao das policies RLS.

## Supabase CLI

A fonte do repositorio usa layout multi-projeto. Para usar Supabase CLI, primeiro materialize um workdir temporario:

```bash
npm run supabase:workdir:main
npm run supabase:workdir:comments
```

Depois use:

```bash
supabase --workdir .supabase-workdir/main <command>
supabase --workdir .supabase-workdir/comments <command>
```

O diretorio `.supabase-workdir/` e gerado, ignorado pelo Git e nao deve receber edicoes manuais permanentes.

## Storage

Bucket esperado no projeto Principal:

| Bucket | Publico | Limite | MIME Types | Policy |
| --- | --- | --- | --- | --- |
| `blog-images` | leitura publica | 5 MB | jpeg, png, webp, gif | upload/update autenticado por pasta do usuario |

O projeto Comentarios nao deve conter buckets da aplicacao principal.

## Realtime

Projeto Comentarios:

- Canal frontend: `comments:<articleSlug>`
- Policy: `realtime.topic() LIKE 'comments:%'`
- Tabelas publicadas: `public.comments`, `public.comment_reactions`

Validar em Staging que alteracoes de comentario e reacao atualizam a UI sem refresh manual.

## Auth e OAuth Discord

Projeto Comentarios:

- Provider: `custom:discord-minimal`
- Scopes: `identify guilds.join`
- Callback: `https://<comments-project-ref>.supabase.co/auth/v1/callback`
- UserInfo URL: `https://<comments-project-ref>.supabase.co/functions/v1/discord-userinfo`
- `discord-userinfo` deve retornar somente claims minimas e nunca e-mail.

Validar no Discord Developer Portal:

- Redirect URI do ambiente.
- Bot no servidor correto.
- Bot com permissao de gerenciar cargo.
- Cargo do bot acima do cargo `DISCORD_READER_ROLE_ID`.

## Advisors Remotos

Leitura remota disponivel apenas para `rfzjtmleojkojopftkfo`.

Observacoes atuais antes de aplicar as migrations locais:

- Security Advisor ainda aponta grants executaveis em funcoes `SECURITY DEFINER`.
- Security Advisor aponta leaked password protection desabilitado.
- Performance Advisor aponta policies com `auth.uid()`/`has_role()` reavaliadas por linha.
- Edge Functions remotas encontradas: `discord-post-login` e `discord-userinfo`.
- `discord-refresh-profile` ainda nao aparece publicado no projeto remoto lido.
- `discord-post-login` remoto esta em versao anterior ao codigo local preparado nesta branch.

As migrations desta Sprint preparam correcoes locais para os pontos de grants/policies. Leaked password protection depende do Dashboard Supabase Auth.

O projeto Principal `xbjkbziaxwsjzsmxilap` nao esta acessivel pela integracao atual; validar Advisors manualmente ou conceder permissao antes de staging.

## Validacao Automatizada

```bash
npm run audit:architecture
npm run audit:supabase
npm run audit:supabase:migrations
npm run audit:supabase:functions
npm run audit:supabase:rls
npm run audit:supabase:policies
npm run audit:supabase:storage
npm run audit:supabase:realtime
npm run audit:supabase:secrets
```

## Ordem Recomendada Para Staging

1. Criar projetos Supabase Staging principal e comentarios.
2. Configurar secrets por projeto.
3. Configurar OAuth Discord no projeto comentarios.
4. Materializar workdirs CLI.
5. Validar replay das migrations em banco limpo.
6. Aplicar migrations em Staging.
7. Publicar Edge Functions em Staging.
8. Configurar Vercel Preview/Staging com os refs de Staging.
9. Rodar checklist manual.
10. Rodar Advisors Security/Performance.
11. Corrigir bloqueadores.
12. Liberar PR para revisao.
