# TS Studio Plugin System

Data: 2026-07-09
Status: arquitetura criada, execucao externa nao habilitada

O sistema de plugins da Milestone 2 e apenas um registry interno. Ele nao carrega codigo remoto, nao instala pacotes e nao executa extensoes de terceiros.

## Capacidades do registry

- `registerModule`
- `registerRoute`
- `registerMenu`
- `registerPermission`
- `registerWidget`
- `registerHook`
- `install`
- `listPlugins`

## Motivo

A arquitetura oficial preve modulos futuros e extensoes. Criar o contrato agora evita que cada modulo invente seu proprio mecanismo de menu, permissao e hook.

## Limites de seguranca

- Nenhum plugin roda automaticamente.
- Nenhum plugin altera rotas publicas.
- Nenhum plugin recebe secrets.
- Nenhum plugin acessa Supabase.
- Toda permissao de plugin deve entrar pelo RBAC oficial.

## Evolucao

Antes de habilitar plugins reais, sera necessario implementar:

- assinatura ou allowlist de manifest;
- sandbox;
- revisao de permissao;
- auditoria de instalacao e remocao;
- rollback;
- testes de compatibilidade.
