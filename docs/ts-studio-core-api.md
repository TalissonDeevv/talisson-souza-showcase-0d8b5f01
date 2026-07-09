# TS Studio Core API

Data: 2026-07-09
Status: Milestone 2 implementada localmente

Este documento descreve a fundacao da Core API do TS Studio. A implementacao atual ainda nao publica endpoints reais no hosting e nao altera rotas publicas do site. Ela cria os contratos, router, middlewares e fronteiras de servico que as proximas milestones vao usar.

## Objetivo

A Core API existe para impedir que cada modulo futuro crie seu proprio padrao de autenticacao, erro, permissao, auditoria e acesso a dados. Toda API administrativa deve passar pelo mesmo pipeline:

1. Request ID
2. Security headers
3. Origin validation
4. Session validation
5. Auth
6. Module guard
7. RBAC
8. Permission guard
9. Rate limit
10. CSRF
11. Idempotency
12. Validation
13. Audit
14. Handler
15. Error normalization

## Estrutura

```text
src/studio/core/
  api/
  router/
  middleware/
  contracts/
  events/
  services/
  repositories/
  validators/
  errors/
  cache/
  jobs/
  storage/
  feature-flags/
  integrations/
  plugins/
  utils/
  types/
  config/
```

## Endpoints registrados

Os endpoints abaixo estao registrados como contrato. Onde nao existe caso de uso real, o router retorna `501` controlado.

| Familia | Caminho |
| --- | --- |
| Auth | `/api/studio/auth/login`, `/api/studio/auth/logout`, `/api/studio/auth/session` |
| Users | `/api/studio/users` |
| Modules | `/api/studio/modules` |
| Dashboard | `/api/studio/dashboard` |
| Articles | `/api/studio/articles` |
| Authors | `/api/studio/authors` |
| Categories | `/api/studio/categories` |
| Taxonomy | `/api/studio/taxonomy` |
| Media | `/api/studio/media` |
| Files | `/api/studio/files` |
| Settings | `/api/studio/settings` |
| SEO | `/api/studio/seo` |
| Forms | `/api/studio/forms` |
| Newsletter | `/api/studio/newsletter` |
| Comments | `/api/studio/comments` |
| Discord | `/api/studio/discord` |
| Analytics | `/api/studio/analytics` |
| Monitoring | `/api/studio/monitoring` |
| Plugins | `/api/studio/plugins` |
| System | `/api/studio/system` |
| Logs | `/api/studio/logs` |
| Audit | `/api/studio/audit` |

## Contrato de resposta

Toda resposta da Core API segue:

```ts
{
  success: boolean;
  data?: unknown;
  error?: {
    code: string;
    message: string;
    status: number;
    details?: Record<string, unknown>;
  };
  requestId: string;
  timestamp: string;
  version: string;
}
```

Tambem existem contratos para respostas paginadas e erros de validacao.

## Router

O router em `src/studio/core/router/router.ts`:

- resolve rota por metodo e caminho;
- cria `requestId`;
- injeta `StudioCoreContext`;
- executa middlewares;
- chama handler registrado;
- retorna `404` para rota inexistente;
- retorna `501` para rota planejada sem implementacao;
- normaliza erros com `StudioApiError`.

## Politica de isolamento

A Core API nao importa `@supabase/supabase-js`, nao chama `.from()` e nao executa `.rpc()`. Acesso a dados deve acontecer por repositórios. A troca para Vercel Functions, Supabase Edge Functions ou outro runtime deve receber o mesmo router e injetar adaptadores.

## Status

- Implementado localmente.
- Nao montado no `src/App.tsx`.
- Nao exposto em producao.
- Nao ligado a Vercel Production.
- Pronto para Milestone 3 consumir.
