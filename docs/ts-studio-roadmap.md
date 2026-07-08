# TS Studio Roadmap

## Sprint 3

Objetivo: transformar a engenharia reversa do site em blueprint de CMS profissional.

Entregas:

- blueprint completo;
- catalogo de modulos;
- mapa de capacidades;
- riscos e dependencias;
- fronteiras entre Supabase Principal e Supabase Comentarios;
- diretrizes de seguranca e ambiente.

## Sprint 4

Objetivo: implementar fundacao tecnica sem ativar funcionalidades.

Entregas:

- `src/studio`;
- registry de modulos;
- RBAC em TypeScript;
- contratos de API;
- contexto e provider;
- layouts e paginas base;
- servicos de auditoria e logs;
- migration local do schema `studio`;
- auditor `audit:ts-studio`;
- documentacao tecnica.

## Sprint 5

Objetivo sugerido: autenticacao administrativa e APIs reais.

Prioridade:

1. Definir runtime das APIs Studio.
2. Implementar autenticacao admin.
3. Resolver papeis de `studio.user_roles`.
4. Criar middleware de autorizacao.
5. Persistir audit events.
6. Criar endpoints de leitura do dashboard.
7. Criar testes de permissao.

## Sprint 6

Objetivo sugerido: conteudo e SEO operacional.

Prioridade:

1. CRUD de conteudo em staging.
2. Editor de artigos.
3. Preview de SEO e OG.
4. Versionamento.
5. Sitemap gerado.
6. Validacao de canonical.
7. Workflow draft, review e publish.

## Sprint 7

Objetivo sugerido: comentarios e moderacao.

Prioridade:

1. Fila de comentarios.
2. Moderacao.
3. Historico por artigo.
4. Eventos OAuth.
5. Health de Edge Functions Discord.
6. Relatorio de abuso e rate limit.

## Sprint 8

Objetivo sugerido: midia, upload e biblioteca.

Prioridade:

1. Upload controlado.
2. Metadados e alt text.
3. Uso do asset.
4. Validacao de MIME.
5. Integracao com editor.

## Marco de Producao

Antes de ativar o TS Studio em producao:

- staging validado;
- migration aplicada em staging;
- RBAC testado;
- APIs com auditoria;
- logs e alertas;
- backup e rollback testados;
- CSP e headers revisados;
- nenhuma rota admin publica sem auth.
