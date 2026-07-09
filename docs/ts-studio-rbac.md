# TS Studio RBAC

O TS Studio usa RBAC explicito desde a fundacao.

Fonte:

- `src/studio/permissions/rbac.ts`
- `src/studio/types/core.ts`
- `supabase/projects/main/migrations/20260708205740_ts_studio_foundation.sql`

## Papeis

| Papel | Rank | Uso |
| --- | ---: | --- |
| owner | 100 | controle total, seguranca, infraestrutura e permissoes |
| admin | 80 | administracao operacional |
| editor | 60 | conteudo, SEO e midia |
| moderator | 50 | comentarios e comunidade |
| analyst | 30 | analytics, monitoramento e leitura |
| viewer | 10 | leitura basica |

## Permissoes

O padrao e `<modulo>.<acao>`.

Exemplos:

- `content.read`
- `content.write`
- `content.publish`
- `discord.moderate`
- `media.manage`
- `security.audit`
- `system.manage`

## Regras

1. `owner` possui wildcard `*`.
2. Outros papeis recebem permissoes declaradas.
3. Permissao de escrita nao implica publicacao.
4. Permissao de leitura nao implica exportacao.
5. Permissao de gerenciamento nao deve ser concedida por padrao.
6. Toda mudanca em papel ou permissao precisa gerar auditoria.
7. Acesso temporario deve usar `expires_at`.

## Banco

Tabelas:

- `studio.roles`
- `studio.permissions`
- `studio.role_permissions`
- `studio.user_roles`

O schema e privado. Nenhum acesso direto por `anon` ou `authenticated` foi concedido.

## Milestone 1

A autenticacao administrativa usa `PermissionService` para validar acesso contra o registry oficial. Components e hooks nao acessam Supabase diretamente.

Guards criados:

- `AuthGuard`
- `RoleGuard`
- `PermissionGuard`
- `ModuleGuard`

Hooks criados:

- `useStudioAuth`
- `useStudioSession`
- `useStudioPermissions`
- `useRequirePermission`
- `useRequireRole`
- `useStudioUser`

Eventos de negacao de permissao sao enviados ao `AuditService` como `permission_denied`.

## Guard

Fonte: `src/studio/middleware/guard.ts`

`canAccessStudioRoute` retorna:

- `allowed`
- `missing_session`
- `missing_permission`

## Riscos

- papeis muito amplos;
- usuario interno sem expiracao;
- falta de revisao periodica;
- APIs futuras pulando o guard;
- permissao de publish misturada com write.

## Checklist de Implementacao Futura

- autenticar usuario admin;
- resolver papeis a partir de `studio.user_roles`;
- validar permissao por endpoint;
- registrar auditoria em negacoes sensiveis;
- criar tela de matriz de permissoes;
- criar revisao mensal de acesso.
