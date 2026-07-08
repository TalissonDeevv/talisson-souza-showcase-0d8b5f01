# TS Studio Config

## Configuracao Base

Fonte: `src/studio/config/environments.ts`

```ts
{
  environment: "development",
  basePath: "/studio",
  defaultLocale: "pt-BR",
  supportedLocales: ["pt-BR", "en-US"],
  enablePlugins: true,
  requireExplicitEnvironment: true
}
```

## Ambientes

- `development`
- `preview`
- `staging`
- `production`

## Regra Critica

`resolveStudioEnvironment` falha se o ambiente nao for informado. Isso existe para impedir fallback automatico para producao.

## Variaveis Futuras

As variaveis finais ainda serao definidas na Sprint de ativacao. A proposta inicial:

- `VITE_STUDIO_ENABLED`
- `VITE_STUDIO_ENVIRONMENT`
- `STUDIO_SESSION_SECRET`
- `STUDIO_AUDIT_RETENTION_DAYS`
- `STUDIO_ALLOWED_ORIGINS`

Nenhuma variavel `VITE_*` pode carregar segredo.

## Feature Flags

Feature flags vivem em `studio.feature_flags` e devem controlar rollout de:

- painel;
- editor;
- publicacao;
- moderacao;
- uploads;
- analytics;
- integracoes.

## Plugins

Plugins futuros devem declarar:

- nome;
- chave;
- owner;
- permissoes;
- configuracoes;
- eventos;
- migrations;
- rollback;
- dependencias;
- status por ambiente.
