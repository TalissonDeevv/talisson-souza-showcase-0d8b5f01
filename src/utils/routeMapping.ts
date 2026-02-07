// Maps Portuguese routes to English routes and vice versa
// Used for language switching to navigate to the equivalent page

export const ptToEnRoutes: Record<string, string> = {
  '/': '/en-us',
  '/sobre': '/en-us/about',
  '/projetos': '/en-us/projects',
  '/servicos': '/en-us/services',
  '/carreira': '/en-us/career',
  '/contato': '/en-us/contact',
  '/blog': '/en-us/blog',
  '/livro': '/en-us/book',
  '/como-trabalho': '/en-us/how-i-work',
  '/decisoes-tecnicas': '/en-us/tech-decisions',
  '/acessibilidade': '/en-us/accessibility',
  '/artigos': '/en-us/articles',
  '/artigos/bots-discord': '/en-us/articles/discord-bots',
  '/blog/bot-discord': '/en-us/blog/discord-bot',
  '/blog/desenvolvimento-fullstack': '/en-us/blog/fullstack-development',
  '/blog/solucoes-cloud': '/en-us/blog/cloud-solutions',
  '/blog/automacao-web': '/en-us/blog/web-automation',
  '/blog/gestao-projetos': '/en-us/blog/project-management',
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
    // Check if path has dynamic segments (e.g., /projetos/some-id)
    const mapped = ptToEnRoutes[path];
    if (mapped) return mapped;

    // Handle /projetos/:id -> /en-us/projects/:id
    if (path.startsWith('/projetos/')) return path.replace('/projetos/', '/en-us/projects/');
    if (path.startsWith('/servicos/')) return path.replace('/servicos/', '/en-us/services/');
    
    // Fallback
    return '/en-us';
  } else {
    const mapped = enToPtRoutes[path];
    if (mapped) return mapped;

    // Handle /en-us/projects/:id -> /projetos/:id
    if (path.startsWith('/en-us/projects/')) return path.replace('/en-us/projects/', '/projetos/');
    if (path.startsWith('/en-us/services/')) return path.replace('/en-us/services/', '/servicos/');

    // Fallback
    return '/';
  }
}
