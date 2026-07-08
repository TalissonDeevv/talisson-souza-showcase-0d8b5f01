# Staging Checklist

Branch alvo: `architecture/repository-reorganization`
Ambiente: Staging

Use esta checklist antes de qualquer merge ou deploy em Production.

| Status | Prioridade | Area | Objetivo | Passos | Resultado esperado | Resultado obtido |
| --- | --- | --- | --- | --- | --- | --- |
| Pendente | P1 | Supabase Principal | Confirmar projeto correto | Conferir project ref, URL e publishable key usados por `VITE_SUPABASE_*` | Frontend aponta para Staging principal | |
| Pendente | P1 | Supabase Comentarios | Confirmar projeto correto | Conferir project ref, URL e publishable key usados por `VITE_COMMENTS_SUPABASE_*` | Comentarios apontam para Staging comentarios | |
| Pendente | P1 | Migrations Principal | Validar replay limpo | Aplicar migrations em banco Staging vazio ou branch Supabase | Todas aplicam em ordem sem erro | |
| Pendente | P1 | Migrations Comentarios | Validar replay limpo | Aplicar migrations em banco Staging vazio ou branch Supabase | Todas aplicam em ordem sem erro | |
| Pendente | P1 | Rollback | Validar plano de retorno | Confirmar backup antes das migrations e ponto de restauracao | Existe caminho claro de restore | |
| Pendente | P1 | Secrets Principal | Validar secrets | Conferir `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `CONTACT_CAPTCHA_SECRET`, `CONTACT_RATE_LIMIT_SALT`, `ALLOWED_ORIGINS` | Function de contato configurada | |
| Pendente | P1 | Secrets Comentarios | Validar secrets | Conferir `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `DISCORD_RATE_LIMIT_SALT`, `DISCORD_BOT_TOKEN`, `DISCORD_GUILD_ID`, `DISCORD_READER_ROLE_ID`, `ALLOWED_ORIGINS` | Functions Discord configuradas | |
| Pendente | P1 | Edge Function | Contact GET | Chamar `send-contact-email` com GET via frontend | Retorna CAPTCHA assinado | |
| Pendente | P1 | Edge Function | Contact POST | Enviar formulario valido | E-mail chega via Resend e resposta e generica | |
| Pendente | P1 | Rate Limit | Contato | Repetir envios ate limite | Retorna 429 sem vazar detalhes internos | |
| Pendente | P1 | OAuth Discord | Login | Entrar pelo Discord em Staging | Callback retorna ao site e sessao e criada | |
| Pendente | P1 | OAuth Discord | Escopos | Inspecionar redirect para Discord | Escopos sao `identify guilds.join`, sem `email` | |
| Pendente | P1 | Discord Bot | Guild join | Logar usuario novo | Usuario entra no servidor correto | |
| Pendente | P1 | Discord Bot | Cargo | Logar usuario novo | Cargo de leitor e aplicado | |
| Pendente | P1 | Sessao | Logout | Clicar sair nos comentarios | Sessao de comentarios some e UI volta ao estado de login | |
| Pendente | P1 | Refresh Token | Renovacao | Manter sessao aberta e aguardar refresh | Sessao continua valida sem provider token persistente | |
| Pendente | P1 | Comentarios | Criar comentario | Logado, publicar comentario raiz | Comentario aparece e persiste | |
| Pendente | P1 | Comentarios | Editar comentario | Editar comentario proprio | Apenas conteudo muda | |
| Pendente | P1 | Comentarios | Excluir comentario | Excluir comentario proprio | Comentario some ou fica marcado conforme regra atual | |
| Pendente | P1 | Comentarios | Responder | Criar resposta de primeiro nivel | Resposta aparece sob comentario raiz | |
| Pendente | P1 | Comentarios | Bloquear profundidade | Tentar responder resposta | Operacao bloqueada | |
| Pendente | P1 | Reacoes | Curtir/descurtir | Reagir a comentarios | Contadores atualizam e persistem | |
| Pendente | P1 | Realtime | Atualizacao entre abas | Abrir duas abas e comentar em uma | Outra aba atualiza automaticamente | |
| Pendente | P1 | RLS | Acesso anonimo | Testar SELECT publico esperado e INSERT sem login | Leitura permitida onde previsto; escrita bloqueada | |
| Pendente | P1 | RLS | Acesso autenticado | Testar CRUD proprio e tentativa em dado de outro usuario | CRUD proprio permitido; IDOR bloqueado | |
| Pendente | P1 | Storage | Bucket `blog-images` | Upload imagem valida em pasta do usuario | Upload permitido | |
| Pendente | P1 | Storage | MIME invalido | Upload arquivo nao permitido | Upload bloqueado | |
| Pendente | P1 | Storage | Tamanho invalido | Upload acima de 5 MB | Upload bloqueado | |
| Pendente | P2 | Advisors | Security | Rodar Security Advisor nos dois projetos | Zero alerta critico/alto sem justificativa | |
| Pendente | P2 | Advisors | Performance | Rodar Performance Advisor nos dois projetos | Warnings conhecidos documentados ou corrigidos | |
| Pendente | P2 | Logs | Edge Functions | Revisar logs apos testes | Sem tokens, e-mails de payload ou stack traces sensiveis | |
| Pendente | P2 | Vercel Preview | Build | Gerar preview com envs Staging | Build passa e site abre | |
| Pendente | P2 | Headers/CSP | Navegacao | Testar Console e Network | Sem bloqueios inesperados de Supabase/Discord/Resend | |
| Pendente | P2 | SEO | Sitemap/robots/OG | Conferir rotas SEO em Preview | Sem regressao de metadados | |
| Pendente | P2 | Acessibilidade | Fluxos criticos | Navegar por teclado em contato e comentarios | Fluxo utilizavel | |
| Pendente | P2 | Performance | Bundle/runtime | Rodar Lighthouse ou equivalente | Sem regressao grave de Core Web Vitals | |
| Pendente | P3 | Mercado Pago | Integracao inexistente | Confirmar se nao ha configuracao externa | Nenhum secret necessario | |
| Pendente | P3 | Google | Integracao externa | Confirmar Google Forms e ausencia de API key | Nenhum secret backend necessario | |
| Pendente | P3 | Spotify | Integracao inexistente | Confirmar ausencia de runtime Spotify | Nenhum secret necessario | |

## Comandos Locais Antes Do Deploy Preview

```bash
npm run lint
npm run typecheck
npm run build
npm run audit:architecture
npm run audit:supabase
npx -y deno check supabase/projects/main/functions/send-contact-email/index.ts supabase/projects/comments/functions/discord-post-login/index.ts supabase/projects/comments/functions/discord-refresh-profile/index.ts supabase/projects/comments/functions/discord-userinfo/index.ts
```

## Criterio De Aprovacao

Staging so pode ser aprovado quando:

- migrations foram aplicadas em ambiente isolado;
- Edge Functions foram publicadas em Staging;
- OAuth Discord funciona no dominio de Staging;
- formulario de contato envia e rate limit funciona;
- comentarios, reacoes e Realtime funcionam;
- Security Advisor nao aponta bloqueador sem plano aceito;
- rollback/restore foi definido antes de Production.
