# TS Studio Events

Eventos sao parte central da arquitetura. Toda acao administrativa relevante deve ser rastreavel.

## Tipos de Evento

Conteudo:

- `content.create`
- `content.update`
- `content.review.request`
- `content.publish`
- `content.archive`
- `content.restore`

SEO:

- `seo.metadata.update`
- `seo.og.update`
- `seo.schema.update`
- `seo.sitemap.generate`

Midia:

- `media.upload`
- `media.update`
- `media.archive`
- `media.alt_text.update`

RBAC:

- `rbac.role.assign`
- `rbac.role.remove`
- `rbac.permission.update`
- `rbac.access.review`

Discord:

- `discord.comment.moderate`
- `discord.comment.restore`
- `discord.profile.refresh`
- `discord.oauth.failure`

Forms:

- `forms.contact.accepted`
- `forms.contact.blocked`
- `forms.captcha.failed`
- `forms.rate_limit.hit`

Integracoes:

- `integration.configure`
- `integration.health_check`
- `integration.disable`
- `integration.secret.rotate`

Sistema:

- `system.setting.update`
- `system.feature_flag.update`
- `system.menu.update`

## Estrutura

Eventos devem conter:

- `actor_id`;
- `action`;
- `module_key`;
- `entity_table`;
- `entity_id`;
- `request_id`;
- `ip_hash`;
- `user_agent`;
- `before_state`;
- `after_state`;
- `metadata`;
- `created_at`.

## Privacidade

Nunca registrar:

- tokens;
- provider tokens;
- service role;
- Authorization header completo;
- senhas;
- dados pessoais desnecessarios;
- conteudo integral de mensagens quando nao for necessario para auditoria.

## Redacao

`src/studio/services/audit-log.ts` ja possui redacao basica por chave sensivel. APIs futuras devem ampliar esse comportamento por tipo de entidade.

## Retencao

Proposta inicial:

- eventos criticos de seguranca: 365 dias;
- eventos editoriais: 180 dias;
- eventos de leitura: 90 dias;
- logs tecnicos detalhados: 30 dias.

Retencao final precisa ser alinhada com LGPD e politica de privacidade antes da ativacao.
