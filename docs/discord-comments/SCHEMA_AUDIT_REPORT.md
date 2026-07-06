# Auditoria do schema de comentários

Data: 2026-07-06
Projeto Supabase: `Atlas o Leitor`

## Contrato exigido pelo frontend

`CommentsSection.tsx` usa:

- leitura: `id`, `article_slug`, `user_id`, `parent_id`, `content`,
  `created_at`, `updated_at`;
- criação de comentário raiz com `parent_id = null`;
- criação de resposta com `parent_id = <comment.id>`;
- edição somente de `content`;
- exclusão pelo `id`;
- Realtime filtrado por `article_slug`;
- perfil público: `id`, `username`, `global_name`, `avatar_url`.

## Estado encontrado no banco antes da migration

- `comments` tinha 7 colunas e não tinha `parent_id`;
- não existia FK autorreferente;
- não existia índice de replies;
- não existia trigger de profundidade;
- replies entre artigos diferentes não eram validadas;
- sanitização ocorria apenas no insert, junto do rate limit;
- o rate limit podia sofrer corrida entre requisições simultâneas;
- `comments` não estava na publicação `supabase_realtime`;
- PostgREST retornava `PGRST204` para `parent_id`;
- `anon` e `authenticated` tinham grants amplos, incluindo `TRUNCATE`;
- a tabela tinha zero comentários, portanto nenhuma linha precisou ser
  transformada ou removida.

## Estado depois da migration

### Colunas

| Coluna | Tipo | Nulo |
| --- | --- | --- |
| `id` | `uuid` | não |
| `article_slug` | `text` | não |
| `user_id` | `uuid` | não |
| `content` | `text` | não |
| `is_deleted` | `boolean` | não |
| `created_at` | `timestamptz` | não |
| `updated_at` | `timestamptz` | não |
| `parent_id` | `uuid` | sim |

### Constraints

- `comments_pkey`;
- `comments_user_id_fkey` → `auth.users(id) ON DELETE CASCADE`;
- `comments_parent_id_fkey` → `comments(id) ON DELETE CASCADE`;
- `comments_parent_not_self`;
- `comments_content_length` (`1..2000`);
- `comments_slug_length` (`1..200`).

Todas foram validadas pelo PostgreSQL.

### Índices

- `comments_pkey`;
- `comments_slug_created_idx`;
- `comments_user_idx`;
- `comments_parent_idx`.

### Triggers

1. `comments_10_sanitize`;
2. `comments_20_enforce_depth`;
3. `comments_30_rate_limit`;
4. `comments_90_set_updated_at`.

### Regras de replies

- somente um nível de resposta;
- não pode responder ao próprio registro;
- parent precisa existir;
- parent e reply precisam pertencer ao mesmo artigo;
- parent removido ou marcado como excluído não aceita nova resposta;
- excluir o comentário raiz exclui suas respostas em cascata.

### Grants e RLS

- `anon`: somente `SELECT`;
- `authenticated`: `SELECT`, `DELETE`, insert apenas das colunas usadas pela
  UI e update somente de `content`;
- `service_role`: acesso administrativo;
- autor pode criar, editar e excluir os próprios comentários;
- outro usuário pode ler, mas não pode editar ou excluir;
- admin pode moderar conteúdo e excluir;
- execução de `has_role` foi removida de `anon`/`PUBLIC`;
- `discord_profiles` expõe ao usuário anônimo apenas os campos públicos;
- o usuário autenticado mantém leitura compatível com o hook atualmente
  publicado, mas não possui mais grants de escrita ou `TRUNCATE`.

### Realtime e cache

- `comments` foi adicionada a `supabase_realtime`;
- o cache do PostgREST foi recarregado;
- consulta REST contendo `parent_id` retornou HTTP 200.

## Validações executadas

`docs/discord-comments/06_validate_comments_crud.sql` foi executado dentro de
uma transação com rollback e confirmou:

- criar comentário raiz;
- criar resposta;
- editar resposta;
- excluir resposta;
- excluir comentário raiz;
- bloquear edição e exclusão por outra identidade;
- bloquear insert anônimo;
- bloquear alteração de `article_slug`;
- bloquear reply aninhada;
- bloquear reply entre artigos.

Depois do rollback, `comments` continuou com zero linhas.

## Arquivos

- `04_sync_comments_schema.sql`: migration idempotente aplicada;
- `05_audit_comments_schema.sql`: inventário somente leitura;
- `06_validate_comments_crud.sql`: testes transacionais;
- `src/integrations/supabase-comments/types.ts`: contrato TypeScript do BYO.
