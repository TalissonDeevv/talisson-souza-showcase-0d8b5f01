# Discord Comments System — Setup & Migration Guide

> Atualização 2026-07-06: depois de `01_schema.sql`, execute
> `docs/discord-comments/04_sync_comments_schema.sql`. O arquivo sincroniza
> replies (`parent_id`), constraints, índices, triggers, grants, RLS, Realtime
> e o cache do PostgREST. `03_add_replies.sql` foi substituído pelo arquivo 04.
> A auditoria completa está em
> `docs/discord-comments/SCHEMA_AUDIT_REPORT.md`.
> Em seguida, execute `docs/discord-comments/07_minimize_discord_personal_data.sql`
> para remover o e-mail duplicado dos perfis e preparar a transição para o
> OAuth Discord mínimo.

Sistema de comentários com autenticação Discord OAuth2, `guilds.join` automático
e atribuição do cargo **📖 Leitor dos Artigos**. Este documento cobre a migração
do Lovable Cloud para um Supabase próprio (BYO) e a instalação completa.

---

## 1. Arquivos entregues

| Arquivo | Função |
| --- | --- |
| `docs/discord-comments/01_schema.sql` | Schema completo (tabelas, RLS, triggers, funções de estatística) para o novo Supabase |
| `docs/discord-comments/02_export_from_cloud.sql` | Queries de backup para rodar no Cloud atual antes de desconectar |
| `docs/discord-comments/07_minimize_discord_personal_data.sql` | Remove o e-mail do perfil público e prepara a migração automática da identidade |
| `docs/discord-comments/08_validate_discord_identity_migration.sql` | Validação transacional da preservação de comentários e cargos |
| `docs/discord-comments/09_audit_email_minimization.sql` | Auditoria por contagem, sem retornar endereços de e-mail |
| `supabase/functions/discord-userinfo/index.ts` | UserInfo mínimo para o provider OAuth2 customizado |
| `supabase/functions/discord-post-login/index.ts` | Edge function que faz `PUT /guilds/{id}/members/{id}` e aplica o cargo |
| `src/hooks/useDiscordAuth.ts` | Hook central de autenticação Discord |
| `src/components/comments/DiscordLoginPrompt.tsx` | CTA de login com Discord |
| `src/components/comments/CommentsSection.tsx` | UI completa (listar, criar, editar, excluir, realtime) |

## 2. Backup dos dados atuais (fazer ANTES de desconectar Cloud)

1. Abra o painel do Lovable Cloud (SQL runner do Supabase gerenciado).
2. Rode cada query de `docs/discord-comments/02_export_from_cloud.sql` e
   salve os resultados como CSV/JSON.
3. Baixe manualmente os arquivos do bucket `blog-images`.
4. Anote o `user_id` da sua conta admin (para re-conceder role no novo projeto).

## 3. Criar o novo projeto Supabase (BYO)

1. Acesse [supabase.com](https://supabase.com) e crie um novo projeto.
2. Anote a **Project URL** e a **anon key** (Settings → API).
3. **SQL Editor** → cole `docs/discord-comments/01_schema.sql` → Run.
4. **Storage** → crie o bucket `blog-images` (Public) → reenvie as capas.
5. Reimporte os CSVs de `admin_articles`, `blogs`, `newsletter_subscribers`,
   etc. usando **Table Editor → Insert → From CSV**.

## 4. Configurar Discord no Developer Portal

1. Acesse [discord.com/developers/applications](https://discord.com/developers/applications).
2. Crie uma **New Application** (ex.: "Talisson Site").
3. Aba **OAuth2 → General**:
   - Anote o **Client ID** e clique **Reset Secret** para gerar o **Client Secret**.
   - Em **Redirects**, adicione:
     - `https://<SEU-PROJECT-REF>.supabase.co/auth/v1/callback`
4. Aba **Bot** → **Add Bot** → **Reset Token** → anote o **Bot Token**.
   - Marque **Server Members Intent** (Privileged Gateway Intents).
5. Aba **OAuth2 → URL Generator**:
   - Scopes: `bot`
   - Bot Permissions: `Manage Roles`
   - Copie a URL e use para adicionar o bot no seu servidor.
6. No Discord (com **Modo Desenvolvedor** ligado):
   - Clique com o botão direito no servidor → **Copiar ID do Servidor** → `GUILD_ID`.
   - Crie o cargo `📖 Leitor dos Artigos`, botão direito → **Copiar ID** → `ROLE_ID`.
   - **Importante:** arraste o cargo do bot para **acima** do cargo Leitor,
     senão o bot não consegue atribuí-lo.

## 5. Configurar o provider Discord mínimo no Supabase

O provider Discord nativo do Supabase solicita `email` internamente. Para
minimização de dados, use **Authentication → Providers → New Provider →
Manual configuration (OAuth2)**:

- Identifier: `custom:discord-minimal`
- Name: `Discord (mínimo)`
- Client ID e Client Secret: os mesmos da aplicação Discord
- Authorization URL: `https://discord.com/oauth2/authorize`
- Token URL: `https://discord.com/api/oauth2/token`
- UserInfo URL:
  `https://rfzjtmleojkojopftkfo.supabase.co/functions/v1/discord-userinfo`
- Scopes: `identify`, `guilds.join`
- Allow users without e-mail: **On**
- PKCE: **Off** para este cliente web confidencial

Faça o deploy da função `discord-userinfo` com verificação de JWT desabilitada.
Ela recebe somente o token OAuth do Discord, valida-o em `/users/@me` e devolve
ID, username, display name e avatar.

Ainda em Authentication → **URL Configuration**:

- **Site URL**: `https://talisson-souza-showcase.lovable.app`
  (ou seu domínio final)
- **Redirect URLs**: adicione todos os origins que você usa
  (`https://id-preview--*.lovable.app`, custom domain, `http://localhost:8080`).

## 6. Conectar o novo Supabase ao Lovable

1. No Lovable, painel do projeto → **Cloud → Disconnect** (isso libera o slot).
2. Menu de integrações → **Connect Supabase** → autentique e escolha o novo projeto.
3. O Lovable regenera automaticamente `src/integrations/supabase/client.ts`,
   `types.ts` e o `.env` com as novas chaves.

## 7. Cadastrar secrets do bot

Dashboard Supabase → **Edge Functions → Manage secrets**, adicione:

- `DISCORD_BOT_TOKEN` — Bot Token do passo 4
- `DISCORD_GUILD_ID` — ID do servidor
- `DISCORD_READER_ROLE_ID` — ID do cargo Leitor dos Artigos

A edge function `discord-post-login` deploya automaticamente (o Lovable
publica funções na pasta `supabase/functions/`).

## 8. Re-conceder sua role de admin

Faça um login inicial com Discord no site (você virará usuário comum). Depois,
no SQL Editor do novo Supabase, rode:

```sql
INSERT INTO public.user_roles (user_id, role)
VALUES ('<SEU-AUTH-UID>', 'admin');
```

Pegue seu `auth_uid` em **Authentication → Users**.

## 9. Onde os comentários aparecem

O componente é agnóstico: passe qualquer `articleSlug` string.

```tsx
import CommentsSection from "@/components/comments/CommentsSection";

// dentro de uma página de artigo
<CommentsSection articleSlug={article.slugPt /* ou slugEn, ou admin_articles.slug */} />
```

Um bom lugar padrão é logo após o `ArticleSEOFooter` em cada página de artigo
(`src/pages/articles/*.tsx` e `src/pages/articles/MarketTrailArticle.tsx`).

## 10. Endpoints (API)

O projeto usa Supabase REST + Realtime. Não há endpoints REST manuais —
todos os "endpoints" pedidos são operações CRUD via `supabase-js`:

| Ação | Chamada |
| --- | --- |
| Login | `supabase.auth.signInWithOAuth({ provider: 'custom:discord-minimal', options: { scopes: 'identify guilds.join' } })` |
| Callback | Automático (Supabase) → dispara trigger `handle_discord_user` |
| Post-login (bot) | `supabase.functions.invoke('discord-post-login', { body: {...} })` |
| Criar comentário | `supabase.from('comments').insert({...})` |
| Editar comentário | `supabase.from('comments').update({...}).eq('id', id)` |
| Excluir comentário | `supabase.from('comments').delete().eq('id', id)` |
| Listar por artigo | `supabase.from('comments').select().eq('article_slug', slug).order('created_at', { ascending: false })` |
| Estatísticas | `supabase.rpc('stats_readers_total')`, `stats_comments_total`, `stats_most_commented_article`, `stats_comments_by_article` |

## 11. Segurança implementada

- **RLS** em `comments`, `discord_profiles`, `user_roles`.
- Escrita/edição/exclusão restrita ao autor (`auth.uid() = user_id`).
- **Rate limit** via trigger: 1 comentário / 15s, 20 comentários / hora.
- **Sanitização**: whitespace colapsado, zero-width chars removidos, tamanho 1–2000.
- **XSS**: renderização com `escapeHtml` no client; nenhum HTML do usuário é executado.
- **Auth server-side** na edge function via `getClaims()`.
- **Bot Token** nunca vai ao browser — só na edge function.
- **CHECK constraints** de tamanho no schema.
- **Trigger de proteção** contra comentário vazio.

## 12. Estatísticas para o bot externo

Um bot Discord pode consumir as RPCs usando a **service_role key** (server-side):

```ts
const { data } = await supabase.rpc('stats_most_commented_article');
```

Retorna: readers totais, comentários totais, comentário mais popular, ranking
por artigo. Adicione novas RPCs conforme o bot evoluir (views, likes, badges,
levels — as tabelas ainda não existem e devem ser adicionadas em migrations
futuras seguindo o mesmo padrão).

## 13. Escopos OAuth utilizados

- `identify` — perfil básico (ID, username, display name e avatar).
- `guilds.join` — permite ao bot adicionar o usuário ao servidor.

O e-mail não é solicitado. Não use o provider Discord nativo do Supabase para
este fluxo: a implementação nativa acrescenta o escopo `email` internamente.
Crie um provider OAuth2 customizado com:

- Identifier: `custom:discord-minimal`
- Authorization URL: `https://discord.com/oauth2/authorize`
- Token URL: `https://discord.com/api/oauth2/token`
- UserInfo URL:
  `https://rfzjtmleojkojopftkfo.supabase.co/functions/v1/discord-userinfo`
- Scopes: `identify`, `guilds.join`
- E-mail opcional: habilitado
- PKCE do provider: desabilitado para o fluxo web confidencial do Discord

A Edge Function `discord-userinfo` adapta somente os campos visuais necessários
e nunca retorna e-mail. Depois que a versão do frontend com
`custom:discord-minimal` estiver em produção, desabilite o provider Discord
nativo no Dashboard.

## 14. Redirect URIs no Discord

Adicione todos:

- `https://<PROJECT-REF>.supabase.co/auth/v1/callback` (obrigatório)

O Supabase gerencia o restante do fluxo — não precisa configurar redirect
para `lovable.app` no Discord.
