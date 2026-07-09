# TS Studio Session Management

Data: 2026-07-09
Status: Milestone 1 implementada localmente

## Objetivo

Gerenciar sessoes administrativas do TS Studio com recuperacao, refresh automatico, expiracao, invalidacao e sincronizacao entre abas.

## Componentes

- `StudioSessionProvider`
- `SessionService`
- `BroadcastChannel` em `src/studio/session/session-channel.ts`
- `useStudioSession`
- `useStudioUser`

## Politica padrao

- Idle timeout: 30 minutos.
- Absolute timeout: 8 horas.
- Refresh leeway: 5 minutos antes do vencimento.
- Recovery leeway: 30 segundos.
- Janela de rate limit: 15 minutos.
- Tentativas maximas de login: 5.

Esses valores ficam em `src/studio/auth/policy.ts` e podem ser sobrescritos por injecao de provider/service.

## Ciclo de vida

1. Recover: o provider tenta recuperar a sessao Supabase existente.
2. Resolve permissions: o permission service resolve roles e permissoes do usuario.
3. Create session: o session service cria `StudioUserSession`.
4. Mark seen: foco/visibilidade atualiza `lastSeenAt`.
5. Refresh: sessao perto do vencimento chama `refreshSession`.
6. Expire: sessao expirada chama logout com motivo `expired`.
7. Broadcast: logout e expiracao sao enviados para outras abas.

## Persistencia

O Supabase Auth do Studio usa `sessionStorage` com chave especifica por projeto:

`ts-studio:<projectId>:auth`

Isso evita reutilizar a chave do fluxo publico e evita persistencia longa em `localStorage`.

## Tabelas preparadas

- `studio.admin_sessions`
- `studio.admin_login_attempts`
- `studio.admin_session_nonces`
- `studio.admin_auth_rate_limits`

Essas tabelas sao privadas, possuem RLS forcado e policies apenas para `service_role`.

## Proximo passo

Na Milestone 2, a API server-side deve persistir sessoes reais em `studio.admin_sessions` e gravar tentativas em `studio.admin_login_attempts`.
