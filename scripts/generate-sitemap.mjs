import fs from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://www.talissonsouza.com.br';

const rootDir = process.cwd();
const writeDist = process.argv.includes('--dist');

const staticPaths = [
  '/',
  '/bio',
  '/sobre',
  '/seja-afiliado',
  '/projetos',
  '/servicos',
  '/carreira',
  '/contato',
  '/como-trabalho',
  '/decisoes-tecnicas',
  '/acessibilidade',
  '/livro',
  '/principios',
  '/checklists',
  '/changelogs',
  '/artigos',
  '/sugestoes-artigos',
  '/politicas',
  '/faq',
  '/feedbacks',
  '/en-us',
  '/en-us/bio',
  '/en-us/about',
  '/en-us/affiliate-program',
  '/en-us/projects',
  '/en-us/services',
  '/servicos/comunidade-discord',
  '/en-us/services/community-discord',
  '/en-us/career',
  '/en-us/contact',
  '/en-us/how-i-work',
  '/en-us/tech-decisions',
  '/en-us/accessibility',
  '/en-us/book',
  '/en-us/principles',
  '/en-us/checklists',
  '/en-us/changelogs',
  '/en-us/articles',
  '/en-us/article-suggestions',
  '/en-us/policies',
  '/en-us/faq',
  '/en-us/feedbacks',
];

const serviceIds = [
  'web-development',
  'mobile-development',
  'bot-development',
  'uiux-design',
  'cloud-solutions',
  'consulting',
];

function readSource(filePath) {
  return fs.readFileSync(path.join(rootDir, filePath), 'utf8');
}

function extractLocalizedPaths(filePath) {
  const source = readSource(filePath);
  const pathRegex = /path:\s*\{\s*pt:\s*['"]([^'"]+)['"],\s*en:\s*['"]([^'"]+)['"],?\s*\}/g;
  return [...source.matchAll(pathRegex)].flatMap((match) => [match[1], match[2]]);
}

function extractPolicyPaths() {
  const source = readSource('src/data/policies-content.ts');
  const ids = [...source.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);
  return ids.flatMap((id) => {
    if (id === 'inspiracao-visual') {
      return ['/politicas/inspiracao-visual', '/en-us/policies/inspiracao-visual'];
    }

    return [`/politicas/${id}`, `/en-us/policies/${id}`];
  });
}

function normalizePathname(pathname) {
  if (!pathname || pathname === '/') return '/';
  return `/${pathname.replace(/^\/+|\/+$/g, '')}`;
}

function toAbsoluteUrl(pathname) {
  const normalized = normalizePathname(pathname);
  return `${BASE_URL}${normalized === '/' ? '' : normalized}`;
}

function escapeXml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const urls = new Set([
  ...staticPaths.map(toAbsoluteUrl),
  ...serviceIds.flatMap((id) => [toAbsoluteUrl(`/servicos/${id}`), toAbsoluteUrl(`/en-us/services/${id}`)]),
  ...extractLocalizedPaths('src/data/articles.ts').map(toAbsoluteUrl),
  ...extractLocalizedPaths('src/data/checklists.ts').map(toAbsoluteUrl),
  ...extractLocalizedPaths('src/data/changelogs.ts').map(toAbsoluteUrl),
  ...extractPolicyPaths().map(toAbsoluteUrl),
]);

const sortedUrls = [...urls].sort((a, b) => {
  if (a === `${BASE_URL}`) return -1;
  if (b === `${BASE_URL}`) return 1;
  return a.localeCompare(b);
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sortedUrls.map((url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`).join('\n')}
</urlset>
`;

const publicPath = path.join(rootDir, 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, xml, 'utf8');

if (writeDist) {
  const distPath = path.join(rootDir, 'dist', 'sitemap.xml');
  if (fs.existsSync(path.dirname(distPath))) {
    fs.writeFileSync(distPath, xml, 'utf8');
  }
}

console.log(`Generated sitemap with ${sortedUrls.length} URLs.`);
