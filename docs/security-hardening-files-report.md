# Relatorio de Arquivos Modificados no Hardening

Data: 2026-07-08  
Branch: `hardening/security-audit-p1-p4`

Este relatorio cobre todos os arquivos alterados, removidos ou criados na branch de hardening. Quando a alteracao nao corrige uma vulnerabilidade direta, isso esta explicitado como suporte de seguranca, validacao, documentacao ou reducao de divida tecnica.

## .env

- O que foi alterado: arquivo removido do versionamento Git. O arquivo local continua existindo na maquina.
- Vulnerabilidade motivadora: exposicao de configuracao sensivel ou chaves publicas/operacionais em repositorio publico.
- Comportamento anterior: o arquivo era rastreado pelo Git.
- Comportamento agora: o arquivo aparece como removido do indice e deve ser mantido apenas localmente.
- Risco de regressao: baixo. O risco existe apenas se algum ambiente dependia de copiar variaveis diretamente do repo.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## .env.example

- O que foi alterado: arquivo novo com placeholders para variaveis publicas do frontend e secrets das Edge Functions.
- Vulnerabilidade motivadora: necessidade de documentar configuracao sem expor segredo real.
- Comportamento anterior: nao havia modelo seguro equivalente versionado.
- Comportamento agora: desenvolvedores sabem quais variaveis configurar sem publicar valores reais.
- Risco de regressao: baixo. Pode haver erro operacional se placeholders forem copiados para producao sem substituicao.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## .gitignore

- O que foi alterado: adicionadas regras para ignorar `.env` e `.env.*`, mantendo `.env.example` permitido.
- Vulnerabilidade motivadora: prevencao de commit acidental de secrets.
- Comportamento anterior: `.env` podia ser rastreado.
- Comportamento agora: novos arquivos de ambiente locais ficam fora do Git por padrao.
- Risco de regressao: baixo. Arquivos `.env.local` tambem passam a ser ignorados, o que e desejado.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## deno.lock

- O que foi alterado: arquivo novo gerado pelo `npx deno check` com hashes de imports remotos das Edge Functions.
- Vulnerabilidade motivadora: suporte a integridade/reprodutibilidade de dependencias remotas Deno.
- Comportamento anterior: checagens Deno baixavam imports sem lockfile versionado.
- Comportamento agora: imports remotos ficam registrados com hashes.
- Risco de regressao: baixo. Se Supabase usar outro modo de resolucao, o lockfile pode ser apenas informativo; se usado, melhora previsibilidade.
- Impacto em performance: nenhum em runtime. Pode acelerar/resolver validacoes locais futuras.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## docs/security-hardening.md

- O que foi alterado: documento novo de hardening com correcoes aplicadas, configuracoes externas e validacoes executadas.
- Vulnerabilidade motivadora: rastreabilidade de controles de seguranca e separacao entre codigo e configuracao externa.
- Comportamento anterior: nao havia log consolidado desta rodada de hardening.
- Comportamento agora: existe trilha de auditoria tecnica para PR/deploy.
- Risco de regressao: nenhum no app.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## docs/security-hardening-files-report.md

- O que foi alterado: este relatorio foi adicionado.
- Vulnerabilidade motivadora: governanca e revisao de mudancas de seguranca.
- Comportamento anterior: as motivacoes ficavam distribuidas no diff e na conversa.
- Comportamento agora: cada arquivo tem impacto e risco documentados.
- Risco de regressao: nenhum no app.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## middleware.ts

- O que foi alterado: metadados renderizados para crawlers agora sao escapados; a URL de redirecionamento no script usa `JSON.stringify`; valores de URL/imagem/locale sao tratados antes de entrar no HTML.
- Vulnerabilidade motivadora: potencial HTML/script injection em fallback de metadados baseado em slug/URL.
- Comportamento anterior: titulo, descricao e URL eram interpolados diretamente no HTML do middleware.
- Comportamento agora: saida HTML e script ficam codificados antes da resposta.
- Risco de regressao: baixo. Pode alterar a forma como caracteres especiais aparecem em previews se algum metadado depender de HTML literal.
- Impacto em performance: minimo, apenas substituicoes de string para crawlers.
- Impacto em SEO: positivo. Reduz risco de preview quebrado por caracteres especiais; nao muda metadados semanticos.
- Impacto em UX: nenhum para usuarios comuns; o middleware so responde a crawlers.

## package.json

- O que foi alterado: atualizados `vite`, `@vitejs/plugin-react-swc` e `lovable-tagger`.
- Vulnerabilidade motivadora: `npm audit` apontava vulnerabilidades em Vite/esbuild usadas no dev server/build tooling.
- Comportamento anterior: projeto usava Vite 5 e dependencias com advisories conhecidos.
- Comportamento agora: Vite 8.1.3 e dependencias relacionadas sem vulnerabilidades reportadas no audit.
- Risco de regressao: medio. Atualizacao major de Vite pode afetar plugins/build em casos especificos; build local passou.
- Impacto em performance: positivo no build local observado; runtime do app nao deve mudar de forma relevante.
- Impacto em SEO: nenhum direto.
- Impacto em UX: nenhum direto se o bundle produzido continuar equivalente.

## package-lock.json

- O que foi alterado: lockfile atualizado para refletir as novas versoes de dependencias.
- Vulnerabilidade motivadora: garantir instalacao reprodutivel das versoes corrigidas.
- Comportamento anterior: `npm ci` instalava dependencias vulneraveis de dev tooling.
- Comportamento agora: `npm ci` instala arvore com 0 vulnerabilidades reportadas.
- Risco de regressao: medio pelo mesmo motivo da atualizacao major de Vite.
- Impacto em performance: nenhum em runtime; pode melhorar tempo de build.
- Impacto em SEO: nenhum direto.
- Impacto em UX: nenhum direto.

## src/integrations/supabase/client.ts

- O que foi alterado: storage de Auth trocado de `localStorage` para `sessionStorage`, com guarda para ambiente sem `window`.
- Vulnerabilidade motivadora: persistencia longa de tokens Supabase em storage duravel do browser.
- Comportamento anterior: sessao persistia em `localStorage` mesmo apos fechar o navegador.
- Comportamento agora: sessao fica limitada ao ciclo da aba/sessao do browser.
- Risco de regressao: medio. Usuarios podem precisar autenticar novamente com mais frequencia.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: medio. Menor conveniencia de login persistente em troca de menor risco de token theft persistente.

## src/integrations/supabase-comments/client.ts

- O que foi alterado: storage de Auth dos comentarios trocado de `localStorage` para `sessionStorage`.
- Vulnerabilidade motivadora: mesmo risco de persistencia longa de tokens do fluxo Discord/comentarios.
- Comportamento anterior: sessao dos comentarios sobrevivia ao fechamento do browser.
- Comportamento agora: sessao dos comentarios fica restrita a `sessionStorage`.
- Risco de regressao: medio. Usuario pode precisar logar novamente para comentar.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: medio por reduzir persistencia de login.

## src/hooks/useDiscordAuth.ts

- O que foi alterado: limpeza de `provider_token` e `provider_refresh_token` cobre `sessionStorage` e `localStorage`; cache de refresh de perfil migrou para `sessionStorage`.
- Vulnerabilidade motivadora: exposicao persistente de provider tokens OAuth Discord.
- Comportamento anterior: limpeza focava no formato/local anterior e refresh TTL usava storage persistente.
- Comportamento agora: tokens de provider sao removidos de forma defensiva nos dois storages e o TTL fica limitado a sessao.
- Risco de regressao: baixo/medio. Se Supabase alterar formato interno, a limpeza pode nao cobrir um formato futuro, mas nao quebra login.
- Impacto em performance: nenhum relevante.
- Impacto em SEO: nenhum.
- Impacto em UX: baixo. Pode causar refresh de perfil mais frequente entre sessoes.

## src/components/ui/ContactForm.tsx

- O que foi alterado: CAPTCHA local removido; formulario agora busca desafio assinado da Edge Function; envio inclui honeypot, timestamp e resposta do CAPTCHA; submit fica bloqueado sem desafio carregado.
- Vulnerabilidade motivadora: CAPTCHA client-side era burlavel; faltavam controles server-side robustos contra abuso do formulario.
- Comportamento anterior: pergunta e resposta eram geradas no frontend, portanto qualquer usuario/bot podia ler a resposta no cliente.
- Comportamento agora: desafio e validacao ficam no backend por assinatura HMAC e TTL.
- Risco de regressao: medio. O formulario depende da Edge Function `send-contact-email` responder a `GET` e dos secrets corretos.
- Impacto em performance: baixo. Ha uma chamada extra para carregar CAPTCHA.
- Impacto em SEO: nenhum.
- Impacto em UX: medio. Usuario ve estado de carregamento e precisa resolver verificacao server-side; melhora confiabilidade contra spam.

## supabase/functions/send-contact-email/index.ts

- O que foi alterado: reescrita com GET para gerar CAPTCHA assinado, POST com validacao HMAC/TTL, honeypot, rate limit por IP/e-mail com hash, validacao de campos, logs minimizados e resposta sem dados internos do Resend.
- Vulnerabilidade motivadora: abuso/spam do formulario, falta de rate limit confirmado, CAPTCHA client-side burlavel, possivel vazamento de resposta/logs.
- Comportamento anterior: envio dependia de validacoes mais fracas e retornos/logs mais verbosos.
- Comportamento agora: backend e responsavel pela verificacao, limitacao e sanitizacao de saida.
- Risco de regressao: medio/alto sem configuracao externa. Requer `CONTACT_CAPTCHA_SECRET`, `CONTACT_RATE_LIMIT_SALT`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY` e migration da RPC.
- Impacto em performance: baixo/medio. HMAC e RPC de rate limit adicionam custo pequeno por envio.
- Impacto em SEO: nenhum.
- Impacto em UX: medio. Pode bloquear envios abusivos e retorna erro de CAPTCHA/rate limit quando necessario.

## supabase/functions/discord-post-login/index.ts

- O que foi alterado: atualizado Supabase JS; adicionado rate limit por usuario/IP; validacao de que o token Discord pertence ao usuario Supabase autenticado; headers `no-store`; tipagem Deno ajustada.
- Vulnerabilidade motivadora: abuso da API de post-login, possivel uso indevido de provider token e falta de vinculacao forte entre identidades.
- Comportamento anterior: a funcao validava token Discord via `/users/@me`, mas nao fazia rate limit nem checagem forte contra metadata/identities do usuario Supabase.
- Comportamento agora: so prossegue se a identidade Discord estiver vinculada ao usuario autenticado e dentro dos limites.
- Risco de regressao: medio. Pode bloquear usuarios se o provider OAuth custom nao preencher `provider_id`/`sub` como esperado.
- Impacto em performance: baixo. Adiciona uma consulta Admin Auth e RPC de rate limit.
- Impacto em SEO: nenhum.
- Impacto em UX: medio. Falhas de configuracao OAuth podem virar erro 403 em vez de sincronizacao permissiva.

## supabase/functions/discord-refresh-profile/index.ts

- O que foi alterado: atualizado Supabase JS; adicionado rate limit por usuario/IP; tipagem Deno ajustada.
- Vulnerabilidade motivadora: abuso da Edge Function e do token de bot Discord.
- Comportamento anterior: usuario autenticado podia acionar refresh sem limitacao server-side.
- Comportamento agora: refresh fica limitado por janela antes de chamar API Discord.
- Risco de regressao: baixo/medio. Requer secrets de salt e RPC de rate limit.
- Impacto em performance: baixo. RPC extra antes da chamada Discord.
- Impacto em SEO: nenhum.
- Impacto em UX: baixo. Refresh excessivo pode ser bloqueado temporariamente.

## supabase/migrations/20260609230000_atlas_comments_base_schema.sql

- O que foi alterado: migration nova criando schema base de comentarios Discord, roles, perfis, funcoes, triggers, RLS, estatisticas e tabela interna de migracao de identidade.
- Vulnerabilidade motivadora: parte do schema critico existia apenas em SQL documental; migrations posteriores referenciavam objetos que nao eram criados no fluxo versionado.
- Comportamento anterior: replay limpo de banco podia falhar ou depender de passos manuais.
- Comportamento agora: banco novo consegue criar a base esperada antes das migrations posteriores.
- Risco de regressao: medio. Como o timestamp e anterior a migrations ja existentes, producao ja migrada pode exigir cuidado/reparo de historico.
- Impacto em performance: positivo/baixo. Indices e triggers adicionam controle; triggers de comentarios tem custo pequeno por escrita.
- Impacto em SEO: nenhum.
- Impacto em UX: positivo indireto. Comentarios/reacoes dependem de schema mais previsivel.

## supabase/migrations/20260708100000_security_hardening.sql

- O que foi alterado: migration nova para rate limit, policy de newsletter, hardening de storage `blog-images`, Realtime restrito e revogacao de RPCs anonimas.
- Vulnerabilidade motivadora: insercao publica em newsletter, ausencia de rate limit persistente, upload/storage permissivo e realtime/RPCs mais amplos que o necessario.
- Comportamento anterior: alguns controles dependiam de configuracao manual ou estavam permissivos.
- Comportamento agora: regras ficam versionadas em SQL.
- Risco de regressao: medio. Realtime restrito a `comments:%` precisa ser validado no Supabase real; uploads fora dos MIME/extensoes permitidos serao bloqueados.
- Impacto em performance: baixo. Rate limit adiciona escrita/lock por chamada; indices/policies ajudam previsibilidade.
- Impacto em SEO: nenhum.
- Impacto em UX: medio. Uploads invalidos e excesso de chamadas passam a ser bloqueados.

## vercel.json

- O que foi alterado: CSP removeu `unsafe-eval` e `http:` em imagens; adicionados `Cross-Origin-Opener-Policy`, `Cross-Origin-Resource-Policy` e `X-Permitted-Cross-Domain-Policies`.
- Vulnerabilidade motivadora: hardening de browser security headers e reducao de superficie XSS/mixed content.
- Comportamento anterior: CSP permitia `unsafe-eval` e imagens `http:`.
- Comportamento agora: politica e mais restritiva, mantendo `unsafe-inline` por compatibilidade atual.
- Risco de regressao: medio. Recursos externos ou scripts que dependam de eval/http podem quebrar em producao.
- Impacto em performance: nenhum relevante.
- Impacto em SEO: potencialmente positivo por evitar mixed content; risco baixo se algum crawler dependesse de recurso bloqueado.
- Impacto em UX: baixo/medio. Conteudos externos inseguros podem deixar de carregar.

## src/pages/About.tsx

- O que foi alterado: `window.open` do curriculo recebeu `noopener,noreferrer`.
- Vulnerabilidade motivadora: reverse tabnabbing.
- Comportamento anterior: aba externa podia manter referencia para `window.opener`.
- Comportamento agora: nova aba nao controla a origem.
- Risco de regressao: baixo. Pode remover referencia de origem para o destino.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum perceptivel.

## src/pages/ServiceDetail.tsx

- O que foi alterado: `window.open` do WhatsApp recebeu `noopener,noreferrer`.
- Vulnerabilidade motivadora: reverse tabnabbing.
- Comportamento anterior: aba externa podia acessar `window.opener`.
- Comportamento agora: abertura externa isolada.
- Risco de regressao: baixo.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum perceptivel.

## src/components/comments/CommentsSection.tsx

- O que foi alterado: tipagem defensiva de `is_verified` ao montar autores dos comentarios.
- Vulnerabilidade motivadora: suporte a type safety apos hardening do schema; nao e vulnerabilidade direta.
- Comportamento anterior: TypeScript via `tsc` acusava `unknown` para `is_verified` em fallback.
- Comportamento agora: apenas boolean real e aceito; fallback vira `false`.
- Risco de regressao: baixo. Badge verificado continua funcionando quando o campo vem booleano.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: baixo. Reduz chance de badge inconsistente.

## src/components/ScrollToTop.tsx

- O que foi alterado: substituido cast `any` por tipo `LocationState`.
- Vulnerabilidade motivadora: reducao de divida tecnica/type safety; nao e vulnerabilidade direta.
- Comportamento anterior: lint falhava por `any`.
- Comportamento agora: comportamento igual, tipado.
- Risco de regressao: baixo.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## src/components/layout/Navbar.tsx

- O que foi alterado: `fetchpriority` com `@ts-ignore` trocado por `fetchPriority`.
- Vulnerabilidade motivadora: remocao de supressao de tipo; nao e vulnerabilidade direta.
- Comportamento anterior: atributo era aplicado com comentario ignorando TypeScript.
- Comportamento agora: atributo usa propriedade React correta.
- Risco de regressao: baixo.
- Impacto em performance: potencialmente positivo/igual por preservar prioridade da logo.
- Impacto em SEO: nenhum direto.
- Impacto em UX: nenhum perceptivel.

## src/components/ui/SetupSection.tsx

- O que foi alterado: tipo do icone trocado de `any` para `LucideIcon`.
- Vulnerabilidade motivadora: type safety; nao e vulnerabilidade direta.
- Comportamento anterior: lint falhava por `any`.
- Comportamento agora: icones seguem contrato da biblioteca.
- Risco de regressao: baixo.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## src/components/ui/command.tsx

- O que foi alterado: interface vazia substituida por type alias para `DialogProps`.
- Vulnerabilidade motivadora: qualidade de tipo/lint; nao e vulnerabilidade direta.
- Comportamento anterior: lint falhava por interface vazia equivalente ao supertipo.
- Comportamento agora: tipo equivalente sem erro.
- Risco de regressao: baixo.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## src/components/ui/textarea.tsx

- O que foi alterado: interface vazia substituida por type alias de atributos de textarea.
- Vulnerabilidade motivadora: qualidade de tipo/lint; nao e vulnerabilidade direta.
- Comportamento anterior: lint falhava por interface vazia.
- Comportamento agora: mesmo contrato de props sem erro.
- Risco de regressao: baixo.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## src/data/articles.ts

- O que foi alterado: importado `MarketTrailArticle` e removidos `any` da busca.
- Vulnerabilidade motivadora: type safety em busca de artigos; nao e vulnerabilidade direta.
- Comportamento anterior: busca aceitava dados sem tipo.
- Comportamento agora: busca espera artigos da trilha com estrutura conhecida.
- Risco de regressao: baixo. Chamadas atuais usam `marketTrailArticles`.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum direto.
- Impacto em UX: baixo/positivo por reduzir risco de erro em busca.

## src/pages/ChecklistDetail.tsx

- O que foi alterado: `catch {}` vazios substituidos por retorno/fallback explicito e warning em DEV.
- Vulnerabilidade motivadora: observabilidade e qualidade; nao e vulnerabilidade direta.
- Comportamento anterior: falhas de localStorage eram silenciosas.
- Comportamento agora: leitura falha retorna progresso zerado; escrita falha avisa em DEV.
- Risco de regressao: baixo.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum em producao; em DEV melhora diagnostico.

## src/pages/ProjectDetail.tsx

- O que foi alterado: adicionado `ProjectDetailData` e removido `Record<string, any>`.
- Vulnerabilidade motivadora: type safety; nao e vulnerabilidade direta.
- Comportamento anterior: dados de projeto eram dinamicos sem contrato.
- Comportamento agora: campos esperados estao tipados.
- Risco de regressao: baixo. O TypeScript passa a apontar erro se algum projeto estiver incompleto.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## src/utils/translations.ts

- O que foi alterado: adicionada excecao local de ESLint para `no-explicit-any`.
- Vulnerabilidade motivadora: reduzir ruido de lint mantendo estrutura dinamica atual; nao e vulnerabilidade direta.
- Comportamento anterior: lint falhava por varios `any` em uma estrutura grande de i18n.
- Comportamento agora: a excecao fica explicita no proprio arquivo.
- Risco de regressao: baixo. Nao altera runtime.
- Impacto em performance: nenhum.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum.

## tailwind.config.ts

- O que foi alterado: `require("tailwindcss-animate")` trocado por import ESM.
- Vulnerabilidade motivadora: qualidade/lint; nao e vulnerabilidade direta.
- Comportamento anterior: lint falhava por import CommonJS.
- Comportamento agora: plugin continua carregado via ESM.
- Risco de regressao: baixo/medio. Config de Tailwind depende de compatibilidade do plugin com import default; build passou.
- Impacto em performance: nenhum relevante.
- Impacto em SEO: nenhum.
- Impacto em UX: nenhum se estilos continuarem iguais; build validou.

## Resumo de Impactos

- Maior risco de regressao funcional: configuracao Supabase/Edge Functions, especialmente CAPTCHA/rate limit e provider Discord custom.
- Maior impacto UX: login menos persistente por `sessionStorage` e formulario dependente de CAPTCHA server-side.
- Maior impacto performance: pequeno custo adicional de RPC/HMAC nas Edge Functions; sem impacto relevante no frontend.
- Maior impacto SEO: middleware mais seguro e CSP mais restritiva; impacto esperado e positivo/neutro, mas deve ser validado em previews sociais e crawlers.
- Validacoes locais ja executadas: `npm ci`, `npm run lint`, `npx tsc --noEmit -p tsconfig.app.json`, `npm run build`, `npm audit`, `npm audit --omit=dev`, `npx -y deno check` nas Edge Functions e `git diff --check`.
