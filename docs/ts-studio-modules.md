# TS Studio Modules

Este documento descreve a organizacao modular criada na Sprint 4.

## Registro de Modulos

Fonte: `src/studio/modules/registry.ts`

Cada modulo declara:

- `key`
- `name`
- `area`
- `status`
- `summary`
- `route`
- `ownerRole`
- `permissions`
- `dependencies`
- `dataEntities`
- `integrations`
- `risks`

## Modulos Registrados

| Modulo | Area | Status | Owner |
| --- | --- | --- | --- |
| Dashboard | core | foundation | admin |
| Content | content | foundation | editor |
| Articles | content | planned | editor |
| Categories and Tags | content | planned | editor |
| Authors | content | planned | editor |
| SEO and Metadata | growth | foundation | editor |
| Media Library | content | foundation | editor |
| Users and Profiles | security | foundation | owner |
| Discord and Comments | community | foundation | moderator |
| Forms and Contact | operations | foundation | admin |
| Newsletter | growth | planned | admin |
| Analytics | growth | foundation | analyst |
| Monitoring | operations | foundation | admin |
| Security and Audit | security | foundation | owner |
| Integrations | platform | foundation | admin |
| System Settings | core | foundation | owner |

## Areas

Core: dashboard e configuracoes estruturais.

Content: conteudo, artigos, taxonomia, autores e midia.

Community: Discord, comentarios, moderacao e Realtime.

Growth: SEO, newsletter e analytics.

Operations: formularios, monitoramento, jobs e alertas.

Platform: provedores externos e infraestrutura.

Security: RBAC, auditoria, policies, headers e segredos.

Experience: reservado para layout, tema, widgets e editores visuais.

## Status

`foundation`: contrato arquitetural criado.

`planned`: modulo documentado, mas ainda sem interface completa.

`active`: modulo pronto para uso operacional.

`deprecated`: modulo mantido apenas por compatibilidade.

## Regras de Evolucao

1. Nenhum modulo novo entra sem permissao minima.
2. Nenhum modulo novo acessa Supabase diretamente do browser.
3. Modulos que alteram estado precisam declarar evento de auditoria.
4. Modulos com integracoes externas precisam declarar provider e ambiente.
5. Modulos editoriais precisam declarar impacto em SEO e sitemap.

## Dependencias Importantes

Conteudo depende de Midia e SEO.

Artigos dependem de Conteudo, SEO, Taxonomia e Autores.

Discord depende de Usuarios, Seguranca e Monitoramento.

Forms depende de Seguranca e Integracoes.

Analytics depende de Conteudo, Discord e Forms.

Integracoes depende de Seguranca.

Sistema depende de Seguranca e Conteudo.
