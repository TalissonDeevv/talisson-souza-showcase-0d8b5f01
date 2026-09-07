// Maps Portuguese routes to English routes and vice versa
// Used for language switching to navigate to the equivalent page

export const ptToEnRoutes: Record<string, string> = {
  '/': '/en-us',
  '/bio': '/en-us/bio',
  '/sobre': '/en-us/about',
  '/seja-afiliado': '/en-us/affiliate-program',
  '/projetos': '/en-us/projects',
  '/servicos': '/en-us/services',
  '/carreira': '/en-us/career',
  '/contato': '/en-us/contact',
  '/livro': '/en-us/book',
  '/como-trabalho': '/en-us/how-i-work',
  '/decisoes-tecnicas': '/en-us/tech-decisions',
  '/acessibilidade': '/en-us/accessibility',
  '/principios': '/en-us/principles',
  '/checklists': '/en-us/checklists',
  '/changelogs': '/en-us/changelogs',
  '/changelogs/servico-bots': '/en-us/changelogs/servicos',
  '/changelogs/servicos': '/en-us/changelogs/servicos',
  '/changelogs/infraestrutura': '/en-us/changelogs/infraestrutura',
  '/changelogs/site': '/en-us/changelogs/site',
  '/changelogs/politicas': '/en-us/changelogs/politicas',
  '/checklists/seguranca-conta-discord': '/en-us/checklists/discord-account-security',
  '/checklists/bot-em-producao': '/en-us/checklists/bot-in-production',
  '/checklists/abrir-servidor-publico': '/en-us/checklists/opening-public-server',
  '/checklists/infraestrutura-minima': '/en-us/checklists/minimum-infrastructure',
  '/artigos': '/en-us/articles',
  '/sugestoes-artigos': '/en-us/article-suggestions',
  '/trilhas/seguranca-digital': '/en-us/trails/digital-security',
  '/trilhas/arquitetura-infraestrutura': '/en-us/trails/architecture-infrastructure',
  '/trilhas/gestao-de-comunidades': '/en-us/trails/community-management',
  '/trilhas/estrategia-mentalidade': '/en-us/trails/strategy-mindset',
  '/artigos/por-que-devs-nao-conseguem-vagas': '/en-us/articles/why-devs-cant-get-jobs',
  '/artigos/ia-vai-substituir-desenvolvedores': '/en-us/articles/will-ai-replace-developers',
  '/artigos/bots-discord': '/en-us/articles/discord-bots',
  '/artigos/visao-e-persistencia': '/en-us/articles/vision-and-persistence',
  '/artigos/inpi': '/en-us/articles/inpi',
  '/artigos/bot-profissional-discord': '/en-us/articles/professional-discord-bot',
  '/artigos/aluguel-bots-discord': '/en-us/articles/discord-bot-rental',
  '/artigos/monetizar-bots': '/en-us/articles/monetizing-bots',
  '/artigos/nicho-bot-discord': '/en-us/articles/discord-bot-niche',
  '/artigos/desenvolvimento-full-stack': '/en-us/articles/full-stack-development',
  '/artigos/custo-desenvolvimento-sistema': '/en-us/articles/system-development-cost',
  '/artigos/clt-para-freelancer': '/en-us/articles/clt-to-freelancer',
  '/artigos/vulnerabilidade-dependencias': '/en-us/articles/dependency-vulnerabilities',
  '/artigos/politica-empreendedorismo': '/en-us/articles/politics-entrepreneurship',
  '/artigos/fundamentos-tecnologia': '/en-us/articles/tech-fundamentals',
  '/artigos/divulgacao-discord': '/en-us/articles/discord-promotion',
  '/artigos/moderacao-discord': '/en-us/articles/discord-moderation',
  '/artigos/junior-para-estrategico': '/en-us/articles/junior-to-strategic',
  '/artigos/o-que-empresas-procuram': '/en-us/articles/what-companies-seek',
  '/artigos/construir-portfolio': '/en-us/articles/building-portfolio',
  '/artigos/seguranca-contas-discord': '/en-us/articles/discord-account-security',
  '/artigos/infraestrutura-hospedagem': '/en-us/articles/infrastructure-hosting',
  '/trilhas/mercado-programacao': '/en-us/trails/market-programming',
  // Market Trail Articles (42)
  '/artigos/o-que-significa-saber-programar': '/en-us/articles/what-programming-really-means',
  '/artigos/programar-nao-e-decorar-sintaxe': '/en-us/articles/programming-is-not-memorizing-syntax',
  '/artigos/logica-mais-importante-que-linguagem': '/en-us/articles/logic-more-important-than-language',
  '/artigos/como-internet-funciona': '/en-us/articles/how-the-internet-really-works',
  '/artigos/frontend-backend-infraestrutura': '/en-us/articles/frontend-backend-infrastructure',
  '/artigos/aprender-codigo-vs-entender-sistemas': '/en-us/articles/learning-code-vs-understanding-systems',
  '/artigos/como-estudar-programacao': '/en-us/articles/how-to-study-programming',
  '/artigos/curso-faculdade-ou-autodidata': '/en-us/articles/course-college-or-self-taught',
  '/artigos/plano-de-estudo-realista': '/en-us/articles/realistic-study-plan',
  '/artigos/copiar-tutorial-nao-transforma': '/en-us/articles/copying-tutorials-wont-transform-you',
  '/artigos/aprender-ler-documentacao': '/en-us/articles/learning-to-read-documentation',
  '/artigos/aprender-a-pesquisar': '/en-us/articles/learning-to-search',
  '/artigos/basico-que-iniciante-ignora': '/en-us/articles/basics-beginners-ignore',
  '/artigos/git-versionamento': '/en-us/articles/git-and-versioning',
  '/artigos/banco-de-dados-pratico': '/en-us/articles/databases-explained-practically',
  '/artigos/o-que-e-http': '/en-us/articles/what-is-http',
  '/artigos/o-que-sao-apis': '/en-us/articles/what-are-apis',
  '/artigos/arquitetura-software-iniciantes': '/en-us/articles/software-architecture-for-beginners',
  '/artigos/estudante-vs-desenvolvedor': '/en-us/articles/student-vs-developer',
  '/artigos/pensar-como-programador-profissional': '/en-us/articles/think-like-a-professional-programmer',
  '/artigos/responsabilidade-tecnica': '/en-us/articles/technical-responsibility',
  '/artigos/debugar-mais-importante-que-framework': '/en-us/articles/debugging-more-important-than-framework',
  '/artigos/organizacao-codigo-maturidade': '/en-us/articles/code-organization-is-maturity',
  '/artigos/seguranca-basica-iniciante': '/en-us/articles/basic-security-for-beginners',
  '/artigos/portfolio-que-impressiona': '/en-us/articles/portfolio-that-actually-impresses',
  '/artigos/projetos-para-iniciantes': '/en-us/articles/projects-that-make-sense-for-beginners',
  '/artigos/o-que-nao-colocar-no-github': '/en-us/articles/what-not-to-put-on-github',
  '/artigos/readme-profissional': '/en-us/articles/professional-readme',
  '/artigos/preparacao-entrevistas-tecnicas': '/en-us/articles/preparing-for-technical-interviews',
  '/artigos/o-que-empresas-avaliam-iniciantes': '/en-us/articles/what-companies-evaluate-in-beginners',
  '/artigos/perigo-stack-da-moda': '/en-us/articles/danger-of-trend-stack',
  '/artigos/especializar-cedo-limita': '/en-us/articles/early-specialization-limits',
  '/artigos/ilusao-curso-garante-emprego': '/en-us/articles/course-guarantees-job-illusion',
  '/artigos/trocar-linguagem-atrasa': '/en-us/articles/switching-languages-slows-progress',
  '/artigos/comparacao-excessiva-devs': '/en-us/articles/excessive-comparison-with-developers',
  '/artigos/atalhos-profissao-tecnica': '/en-us/articles/shortcuts-in-technical-profession',
  '/artigos/quando-comecar-especializar': '/en-us/articles/when-to-start-specializing',
  '/artigos/backend-frontend-como-decidir': '/en-us/articles/backend-frontend-how-to-decide',
  '/artigos/junior-para-pleno': '/en-us/articles/junior-to-mid-level',
  '/artigos/entender-negocios-nao-so-codigo': '/en-us/articles/understanding-business-not-just-code',
  '/artigos/construir-reputacao-mercado': '/en-us/articles/building-market-reputation',
  '/artigos/trabalho-remoto-preparacao': '/en-us/articles/remote-work-preparation',
  '/artigos/eca-digital-anpd-monitoramento': '/en-us/articles/eca-digital-anpd-monitoring',
  '/politica-de-privacidade': '/en-us/privacy-policy',
  '/faq': '/en-us/faq',
  '/feedbacks': '/en-us/feedbacks',
  '/politicas': '/en-us/policies',
  '/politicas/canais-oficiais-comunicacao-institucional': '/en-us/policies/canais-oficiais-comunicacao-institucional',
  '/politicas/disclaimer-livro': '/en-us/policies/disclaimer-livro',
  '/politicas/livro-direitos-autorais': '/en-us/policies/livro-direitos-autorais',
  '/politicas/livro-licenca-de-uso': '/en-us/policies/livro-licenca-de-uso',
  '/politicas/livro-termos-de-compra': '/en-us/policies/livro-termos-de-compra',
  '/politicas/livro-politica-de-reembolso': '/en-us/policies/livro-politica-de-reembolso',
  '/politicas/livro-limitacao-de-responsabilidade': '/en-us/policies/livro-limitacao-de-responsabilidade',
  '/politicas/livro-uso-de-marca': '/en-us/policies/livro-uso-de-marca',
  '/politicas/livro-canais-oficiais': '/en-us/policies/livro-canais-oficiais',
  '/politicas/livro-jurisdicao': '/en-us/policies/livro-jurisdicao',
};

// Reverse mapping: English to Portuguese
export const enToPtRoutes: Record<string, string> = Object.fromEntries(
  Object.entries(ptToEnRoutes).map(([pt, en]) => [en, pt])
);

/**
 * Given a current path and target language, returns the equivalent path in that language.
 */
export function getEquivalentRoute(currentPath: string, targetLang: 'pt' | 'en'): string {
  // Remove trailing slash
  const path = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');
  
  if (targetLang === 'en') {
    const mapped = ptToEnRoutes[path];
    if (mapped) return mapped;

    // Handle dynamic segments
    if (path.startsWith('/projetos/')) return path.replace('/projetos/', '/en-us/projects/');
    if (path.startsWith('/servicos/')) return path.replace('/servicos/', '/en-us/services/');
    if (path.startsWith('/checklists/')) return path.replace('/checklists/', '/en-us/checklists/');
    if (path.startsWith('/changelogs/')) return path.replace('/changelogs/', '/en-us/changelogs/');
    
    return '/en-us';
  } else {
    const mapped = enToPtRoutes[path];
    if (mapped) return mapped;

    if (path.startsWith('/en-us/projects/')) return path.replace('/en-us/projects/', '/projetos/');
    if (path.startsWith('/en-us/services/')) return path.replace('/en-us/services/', '/servicos/');
    if (path.startsWith('/en-us/checklists/')) return path.replace('/en-us/checklists/', '/checklists/');
    if (path.startsWith('/en-us/changelogs/')) return path.replace('/en-us/changelogs/', '/changelogs/');

    return '/';
  }
}
