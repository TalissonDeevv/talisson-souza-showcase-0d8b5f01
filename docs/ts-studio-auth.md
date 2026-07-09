# TS Studio Admin Authentication

Data: 2026-07-09
Status: Milestone 1 implementada localmente

## Objetivo

A autenticacao administrativa do TS Studio usa Supabase Auth no Supabase Principal. Ela nao reutiliza o fluxo Discord usado nos comentarios e nao depende do Supabase Comentarios.

O login administrativo e uma fundacao isolada para futuras rotas `/studio/*`. O app publico continua sem importar `src/studio` e nenhuma rota publica foi alterada.

## Fronteiras

- Supabase Principal: autenticacao administrativa e schema `studio`.
- Supabase Comentarios: Discord OAuth, comentarios, reacoes e perfis Discord.
- TS Studio: services, providers, hooks, guards e contratos internos.

O Studio nao deve importar `supabase-comments`, nao deve chamar Edge Functions Discord e nao deve misturar roles de comentarios com roles administrativas.

## Fluxo de login

1. `StudioAuthProvider` cria um CSRF token em memoria.
2. A tela futura de login chama `useStudioAuth().login`.
3. `AuthService` valida origem, CSRF, request id e rate limit local.
4. `AuthService` chama `supabase.auth.signInWithPassword` no Supabase Principal.
5. A sessao e renovada imediatamente com `refreshSession` para reduzir risco de session fixation.
6. O evento `login` e registrado pelo `AuditService`.
7. O `SessionService` publica evento em `BroadcastChannel` para sincronizar abas.

## Eventos auditados

- `login`
- `logout`
- `login_failed`
- `permission_denied`
- `session_expired`
- `role_changed`
- `password_changed`
- `admin_created`
- `admin_removed`

Enquanto a API server-side definitiva nao existir, o `AuditService` mantem uma fila em `sessionStorage`. Quando um sink persistente for injetado, a fila e descarregada para `studio.audit_events`.

## Seguranca

- CSRF token em memoria por provider.
- Request id com replay protection.
- Validacao de origem.
- Rate limit local preparado para login.
- Refresh automatico.
- Logout com `scope: "global"` para invalidacao forte.
- `sessionStorage` como persistencia do token, evitando persistencia longa em `localStorage`.
- `BroadcastChannel` para logout, refresh e expiracao entre abas.
- Metadata de auditoria redigida antes de persistir.

## Limitacoes intencionais

O browser ainda nao acessa o schema `studio` diretamente. A resolucao real de roles em producao deve passar por API server-side com service role. Ate essa API existir, os services aceitam repositories injetaveis e falham fechados por padrao.

## Arquivos principais

- `src/studio/services/auth-service.ts`
- `src/studio/services/studio-auth-client.ts`
- `src/studio/providers/StudioAuthProvider.tsx`
- `src/studio/hooks/useStudioAuth.ts`
- `src/studio/guards/AuthGuard.tsx`
- `supabase/projects/main/migrations/20260709150000_ts_studio_auth_foundation.sql`
