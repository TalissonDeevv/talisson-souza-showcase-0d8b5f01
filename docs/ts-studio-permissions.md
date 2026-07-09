# TS Studio Permissions

## Convencao

Permissoes seguem o formato:

```text
<module>.<action>
```

Exemplos:

- `dashboard.read`
- `content.write`
- `content.publish`
- `discord.moderate`
- `security.audit`
- `system.manage`

## Acoes

`read`: visualizar.

`write`: criar e editar rascunhos ou configuracoes nao criticas.

`publish`: tornar conteudo publico ou retirar do publico.

`moderate`: aplicar acoes em conteudo gerado por usuarios.

`manage`: alterar configuracao operacional.

`audit`: acessar trilhas sensiveis de auditoria.

## Matriz Inicial

| Papel | Permissao Principal |
| --- | --- |
| owner | tudo |
| admin | operacao ampla sem controle total de seguranca |
| editor | conteudo, artigos, SEO e midia |
| moderator | Discord e comentarios |
| analyst | leitura de analytics, monitoramento e relatorios |
| viewer | leitura basica |

## Regras de Seguranca

- `publish` nao e incluido automaticamente em `write`.
- `manage` nao deve ser usado para leitura simples.
- `audit` deve ser separado de `security.read`.
- alteracoes de RBAC exigem `users.manage` e auditoria.
- qualquer permissao nova deve entrar no banco e no registry TypeScript.
- `npm run audit:ts-studio` valida que registry, RBAC e SQL continuam em paridade.

## Validacoes Futuras

Testes devem cobrir:

- usuario sem sessao;
- usuario sem permissao;
- editor tentando moderar comentario;
- moderator tentando publicar artigo;
- analyst tentando alterar configuracao;
- owner acessando tudo.
