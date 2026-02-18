// Maps Portuguese routes to English routes and vice versa
// Used for language switching to navigate to the equivalent page

export const ptToEnRoutes: Record<string, string> = {
  '/': '/en-us',
  '/sobre': '/en-us/about',
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
  '/checklists/seguranca-conta-discord': '/en-us/checklists/discord-account-security',
  '/checklists/bot-em-producao': '/en-us/checklists/bot-in-production',
  '/checklists/abrir-servidor-publico': '/en-us/checklists/opening-public-server',
  '/checklists/infraestrutura-minima': '/en-us/checklists/minimum-infrastructure',
  '/artigos': '/en-us/articles',
  '/trilhas/seguranca-digital': '/en-us/trails/digital-security',
  '/trilhas/arquitetura-infraestrutura': '/en-us/trails/architecture-infrastructure',
  '/trilhas/gestao-de-comunidades': '/en-us/trails/community-management',
  '/trilhas/estrategia-mentalidade': '/en-us/trails/strategy-mindset',
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
    
    return '/en-us';
  } else {
    const mapped = enToPtRoutes[path];
    if (mapped) return mapped;

    if (path.startsWith('/en-us/projects/')) return path.replace('/en-us/projects/', '/projetos/');
    if (path.startsWith('/en-us/services/')) return path.replace('/en-us/services/', '/servicos/');
    if (path.startsWith('/en-us/checklists/')) return path.replace('/en-us/checklists/', '/checklists/');

    return '/';
  }
}
