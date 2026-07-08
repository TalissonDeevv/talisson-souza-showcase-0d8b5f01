# Disaster Recovery

Escopo: Supabase Principal e Supabase Comentarios.

Este documento define backup, rollback, restauracao e recuperacao apos falha de migration. Nao substitui testes reais de restore em Staging.

## Objetivos

| Item | Alvo |
| --- | --- |
| RPO | ate 24h para dados de baixo volume; menor se Supabase plano permitir PITR |
| RTO | 2h para restauracao operacional basica |
| Prioridade 1 | Auth, comentarios, contato, storage |
| Prioridade 2 | newsletter, estatisticas, historico operacional |

## Antes De Qualquer Migration

1. Confirmar ambiente alvo: Development, Preview, Staging ou Production.
2. Exportar lista de migrations aplicadas.
3. Gerar backup ou confirmar PITR disponivel.
4. Exportar secrets atuais para cofre seguro, nunca para Git.
5. Registrar versao das Edge Functions implantadas.
6. Rodar `npm run audit:supabase`.
7. Rodar Advisors Security/Performance.
8. Ter janela de manutencao se a migration alterar tabela grande, policy critica, Auth ou Storage.

## Backup

### Staging

- Preferir banco descartavel ou branch Supabase.
- Antes de testes destrutivos, recriar a partir das migrations.
- Se usar dados representativos, gerar dump antes de alterar.

### Production

- Usar backup gerenciado do Supabase.
- Se o plano suportar Point-In-Time Recovery, confirmar janela disponivel.
- Para alteracoes de alto risco, gerar dump manual antes.
- Validar que Storage importante possui copia ou politica de retencao.

## Rollback De Codigo

Frontend:

1. Reverter deploy Vercel para o deployment anterior.
2. Confirmar que env vars ainda apontam para projetos corretos.
3. Validar login, comentarios e contato.

Edge Functions:

1. Identificar versao anterior no Dashboard Supabase ou historico de deploy.
2. Reimplantar a versao anterior da Function, se necessario.
3. Confirmar `verify_jwt` esperado.
4. Validar logs sem erro.

## Rollback De Migration

Postgres migrations nao devem ser revertidas no escuro. Preferir uma migration corretiva.

Fluxo recomendado:

1. Parar o rollout.
2. Coletar erro exato da migration.
3. Verificar se a transaction fez rollback automatico.
4. Se a migration falhou antes do `COMMIT`, corrigir SQL e reaplicar em Staging.
5. Se a migration aplicou parcialmente fora de transaction, restaurar backup ou escrever migration corretiva.
6. Nunca marcar migration como aplicada manualmente sem validar schema real.

## Falha Durante Migration

### Caso A: Falha Antes Do Commit

Resultado esperado: Postgres desfaz a transaction.

Passos:

1. Confirmar que a migration nao aparece como aplicada.
2. Rodar query de inspecao dos objetos esperados.
3. Corrigir migration local.
4. Reexecutar em Staging.

### Caso B: Falha Depois De Alteracao Parcial

Passos:

1. Nao tentar reaplicar cegamente.
2. Gerar diff entre schema esperado e schema real.
3. Se dados foram afetados, restaurar backup em novo projeto e comparar.
4. Criar migration corretiva minima.
5. Validar em Staging limpo.

### Caso C: Policy/RLS Quebra A Aplicacao

Passos:

1. Confirmar erro no Network/PostgREST.
2. Identificar role: `anon`, `authenticated` ou `service_role`.
3. Verificar grants e policies efetivas.
4. Aplicar migration corretiva em Staging.
5. Nao desabilitar RLS como atalho.

## Restauracao Completa

1. Criar projeto Supabase novo ou restaurar backup gerenciado.
2. Aplicar migrations na ordem do repositorio.
3. Restaurar dados, quando necessario.
4. Restaurar Storage.
5. Configurar secrets.
6. Configurar Auth providers.
7. Publicar Edge Functions.
8. Rodar checklist de Staging.
9. Atualizar Vercel env vars para o projeto restaurado.
10. Validar dominio e callbacks.

## Restauracao Do Projeto Comentarios

Prioridade:

1. `auth.users` e identidades OAuth.
2. `discord_profiles`.
3. `comments`.
4. `comment_reactions`.
5. `user_roles`.
6. Realtime policies.
7. Edge Functions Discord.

Riscos:

- Callback Discord aponta para project ref especifico.
- Tokens antigos podem nao sobreviver se usuarios/Auth forem recriados.
- Bot Discord deve continuar no mesmo servidor e com cargo correto.

## Restauracao Do Projeto Principal

Prioridade:

1. `profiles`.
2. `blogs`.
3. `blog_comments`.
4. `newsletter_subscribers`.
5. `blog-images`.
6. `send-contact-email`.

Riscos:

- URLs publicas de Storage podem mudar se o project ref mudar.
- Resend e `ALLOWED_ORIGINS` precisam acompanhar o dominio.

## Secrets E Rotacao

Rotacionar imediatamente se houver suspeita de exposicao:

- `SUPABASE_SERVICE_ROLE_KEY`
- `DISCORD_BOT_TOKEN`
- `RESEND_API_KEY`
- salts de rate limit/CAPTCHA
- Discord Client Secret, se configurado no Dashboard

Depois da rotacao:

1. Atualizar Supabase secrets.
2. Atualizar Vercel apenas para variaveis publicas `VITE_*`.
3. Reimplantar Functions se necessario.
4. Testar contato, login e comentarios.

## Validacao Pos-Restore

```bash
npm run audit:supabase
npm run audit:architecture
npm run build
```

Checklist manual minimo:

- Site abre.
- Login Discord funciona.
- Logout funciona.
- Comentario cria/edita/exclui.
- Reacao funciona.
- Realtime funciona.
- Formulario envia.
- Rate limit responde 429.
- Storage aceita somente arquivos validos.
- Security Advisor sem bloqueador critico.
