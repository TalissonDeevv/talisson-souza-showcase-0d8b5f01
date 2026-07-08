# TS Studio Folder Structure

## Estrutura Criada

```text
src/studio/
  api/
  assets/
  components/
  config/
  contexts/
  hooks/
  layouts/
  middleware/
  modules/
  pages/
  permissions/
  providers/
  routes/
  services/
  stores/
  styles/
  types/
  utils/
```

## Responsabilidades

`api`: contratos de endpoints, cliente abstrato e tipos de request/response.

`assets`: arquivos internos futuros do CMS.

`components`: componentes atomicos do painel.

`config`: ambientes, flags e configuracao base.

`contexts`: contexto React do Studio.

`hooks`: hooks de permissao, modulos e estado.

`layouts`: shells e estruturas de pagina.

`middleware`: guards de permissao e decisao de acesso.

`modules`: registry e configuracao modular.

`pages`: paginas base do painel.

`permissions`: RBAC, papeis e permissoes.

`providers`: providers React.

`routes`: rotas internas do Studio.

`services`: auditoria, logs e servicos de dominio.

`stores`: stores desacopladas.

`styles`: tokens internos de layout.

`types`: tipos centrais.

`utils`: utilitarios isolados.

## Regras

- `src/studio` nao deve importar codigo legado da aplicacao publica.
- o site publico nao deve importar `src/studio` ate a Sprint de ativacao.
- cada modulo novo deve entrar no registry.
- cada rota nova deve declarar permissao.
- cada API nova deve declarar permissao e auditAction quando alterar estado.
- componentes internos do Studio nao devem depender de copy, layout ou estado do site publico.

## Auditoria

`npm run audit:ts-studio` valida:

- diretorios obrigatorios;
- documentacao obrigatoria;
- registry de modulos;
- papeis RBAC;
- ausencia de import legado;
- ausencia de Supabase URL hardcoded;
- migration local do schema `studio`.
