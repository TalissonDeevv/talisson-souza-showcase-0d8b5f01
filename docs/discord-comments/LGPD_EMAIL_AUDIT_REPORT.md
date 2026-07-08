# Auditoria LGPD — e-mail no login Discord

Data da auditoria: 6 de julho de 2026  
Projeto Supabase: `rfzjtmleojkojopftkfo` (`Atlas o Leitor`)

## Resultado

Comentários, RLS, cargos, entrada no servidor, estatísticas e a futura camada de
administração não dependem de e-mail. A identidade funcional é composta por:

- Supabase UID (`auth.uid()`);
- Discord User ID;
- username;
- display name;
- avatar.

O fluxo foi migrado para o provider OAuth2 `custom:discord-minimal`, configurado
com somente `identify` e `guilds.join`.

## Limitação encontrada no provider nativo

Remover `email` apenas do hook não resolveria o problema. O provider Discord
nativo do Supabase acrescenta internamente os escopos `email` e `identify`.
Por isso, a opção “permitir usuários sem e-mail” isoladamente permite uma
resposta sem e-mail, mas não impede que o endereço seja solicitado ao Discord.

Referências:

- [Implementação do provider Discord no Supabase Auth](https://github.com/supabase/auth/blob/master/internal/api/provider/discord.go)
- [Providers OAuth2 customizados e `email_optional`](https://supabase.com/docs/guides/auth/custom-oauth-providers)
- [Escopos OAuth2 do Discord](https://docs.discord.com/developers/platform/oauth2-and-permissions)

## Estado auditado antes da alteração

No Supabase BYO:

- 1 usuário em `auth.users`, com e-mail;
- 1 identidade Discord, com e-mail em `identity_data`;
- 1 perfil em `public.discord_profiles`, com e-mail duplicado;
- 1 comentário;
- nenhuma policy RLS ou função de autorização dependia de e-mail;
- nenhum cargo administrativo estava associado a e-mail.

O formulário de contato e a estrutura histórica de newsletter também contêm
campos de e-mail. Eles são fluxos separados e voluntários, não participam do
login Discord e foram preservados:

- formulário: o visitante digita o endereço para receber uma resposta;
- newsletter histórica: tabela independente da autenticação de leitores.

## Alterações realizadas

### OAuth e frontend

- Provider alterado de `discord` para `custom:discord-minimal`.
- Escopos reduzidos para `identify guilds.join`.
- Atualização do `@supabase/supabase-js` para uma versão com tipagem de
  `custom:${string}`.
- O hook expõe somente `userId` e perfil visual; não entrega o objeto completo
  da sessão aos componentes.
- O token OAuth do Discord é removido do `localStorage` após a sincronização.
- Access token e refresh token do Supabase permanecem armazenados porque são
  necessários para manter a sessão da SPA. Eles continuam protegidos por HTTPS,
  CSP, expiração, rotação e RLS.

### Edge Functions

- Criada `discord-userinfo`, pública apenas no sentido de não exigir um JWT do
  Supabase. Ela exige um Bearer token válido do Discord, consulta `/users/@me`
  e retorna somente ID, username, display name e avatar.
- `discord-userinfo` não retorna e-mail, locale, telefone, conexões ou outros
  campos do Discord e usa `Cache-Control: no-store`.
- `discord-post-login` deixou de ler/gravar e-mail.
- A função continua validando o JWT do Supabase, valida a identidade canônica no
  Discord, adiciona o leitor ao servidor e aplica explicitamente o cargo.

### Banco de dados

- Removida a coluna `public.discord_profiles.email`.
- Trigger `handle_discord_user()` refeito sem referência a e-mail.
- Trigger de atualização de perfil observa somente `raw_user_meta_data`.
- Criada uma passagem interna, inacessível a `anon` e `authenticated`, para
  preservar comentários e cargos quando a identidade antiga for substituída.
- O usuário Auth legado é apagado pela Admin API depois da primeira entrada pelo
  provider mínimo; esse delete remove o e-mail histórico, identidades, sessões e
  refresh tokens antigos.
- O timestamp de um comentário não muda quando apenas seu UID proprietário é
  transferido.

### Transparência

- Política de Privacidade atualizada para listar exatamente os dados do login
  Discord e declarar que o e-mail não é solicitado.

## Segurança e compatibilidade

- Policies de comentários continuam baseadas em `auth.uid() = user_id`.
- `user_roles` continua separado do perfil, sem risco de escalada por metadados.
- O frontend não usa `user_metadata` para autorização.
- Bot token e service-role key permanecem exclusivamente no servidor.
- A tabela interna de migração possui RLS, zero grants para clientes e acesso
  somente por `service_role`.
- Nenhuma alteração foi feita no schema gerenciado `auth`; a remoção do usuário
  legado usa a Auth Admin API suportada.

## Validações executadas

- Redirect OAuth: HTTP 302 para `discord.com/oauth2/authorize`.
- Escopos observados no redirect: `identify`, `guilds.join`.
- Escopo `email`: ausente.
- Callback: `https://<comments-project-ref>.supabase.co/auth/v1/callback`.
- `discord-userinfo`: 401 sem token, 405 para método inválido, `no-store`.
- Migration 07 validada em transação antes de ser aplicada.
- Coluna pública de e-mail: ausente após a migration.
- Trigger de perfil: sem referência a e-mail.
- CRUD de comentário, resposta, edição, exclusão e RLS: aprovado
  transacionalmente.
- Transferência de comentário/cargo e limpeza do usuário legado: aprovada
  transacionalmente, com rollback.
- `npm audit --omit=dev`: zero vulnerabilidades nas dependências de produção.
- Quatro alertas permanecem apenas na cadeia local de desenvolvimento do Vite;
  a correção automática exige Vite 8 (mudança major) e não foi forçada sem uma
  migração dedicada.

## Etapa de publicação

O provider Discord nativo deve permanecer ligado apenas enquanto a versão antiga
do frontend ainda estiver em produção. Desligá-lo antes do deploy causaria
indisponibilidade no botão de login atual.

Após publicar a versão que usa `custom:discord-minimal`:

1. entrar uma vez com Discord;
2. confirmar que `guild_joined` e `role_granted` ficaram `true`;
3. confirmar que o usuário legado foi removido;
4. desabilitar o provider Discord nativo no Supabase;
5. executar novamente a consulta de auditoria e confirmar zero e-mails em
   `auth.users`, `auth.identities` e `public.discord_profiles`.
