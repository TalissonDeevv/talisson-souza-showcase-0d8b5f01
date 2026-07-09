# TS Studio Feature Flags

Data: 2026-07-09
Status: registry criado na Milestone 2

Feature flags controlam exposicao gradual de capacidades administrativas. Elas nao substituem RBAC e nao devem ser usadas como autorizacao.

## Flags iniciais

- `studio.dashboard`
- `studio.analytics`
- `studio.media`
- `studio.plugins`
- `studio.newsletter`
- `studio.monitoring`
- `studio.experimental`

## Regras

1. RBAC decide quem pode acessar.
2. Feature flag decide se a capacidade esta ativa no ambiente.
3. Nenhuma flag pode fazer Preview ou Staging cair em Production.
4. Mudancas futuras de flag devem gerar auditoria.

## Estado inicial

`studio.plugins` e `studio.experimental` iniciam desativadas no registry em memoria. As demais podem ser usadas por modulos foundation.

## Evolucao

Na fase de API real, flags devem ser persistidas em `studio.feature_flags` e avaliadas server-side.
