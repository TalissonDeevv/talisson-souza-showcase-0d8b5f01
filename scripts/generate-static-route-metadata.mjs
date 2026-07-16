import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const indexPath = path.join(distDir, 'index.html');
const manifestPath = path.join(rootDir, 'public', 'og', 'manifest.json');
const baseUrl = 'https://www.talissonsouza.com.br';
const siteName = 'Talisson Souza';

const html = fs.readFileSync(indexPath, 'utf8');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const pageMeta = new Map([
  ['/', ['Talisson Souza | Engenheiro de Software e Empresário', 'Engenheiro de Software e fundador da Cheetah Solutions Network. Mais de 8 anos criando sistemas, automações e arquiteturas digitais.']],
  ['/sobre', ['Sobre Talisson Souza', 'A história, os princípios e a forma como Talisson Souza constrói software, empresas e relações profissionais.']],
  ['/carreira', ['Carreira | Talisson Souza', 'Trajetória profissional de Talisson Souza em tecnologia, liderança, arquitetura de software e construção de produtos digitais.']],
  ['/contato', ['Contato | Talisson Souza', 'Canal para iniciar conversas profissionais com contexto, clareza e responsabilidade.']],
  ['/projetos', ['Portfólio em Curadoria | Talisson Souza', 'Projetos mantidos em curadoria, com respeito à confidencialidade e ao contexto de cada cliente.']],
  ['/servicos', ['Serviços | Talisson Souza', 'Soluções em desenvolvimento, arquitetura, automação, cloud, mobile, bots e UI/UX para operações digitais.']],
  ['/livro', ['Superando Limites | Talisson Souza', 'Livro autoral de Talisson Souza sobre rejeição, trajetória, disciplina e construção de futuro.']],
  ['/principios', ['Princípios | Talisson Souza', 'Princípios que orientam decisões, trabalho, comunicação e responsabilidade profissional.']],
  ['/checklists', ['Checklists | Talisson Souza', 'Guias práticos para segurança, produção, comunidades e infraestrutura digital.']],
  ['/faq', ['FAQ | Talisson Souza', 'Respostas diretas sobre serviços, processos, limites, prazos e forma de trabalho.']],
  ['/feedbacks', ['Feedbacks | Talisson Souza', 'Depoimentos reais de clientes, parceiros e profissionais que já acompanharam meu trabalho.']],
  ['/artigos', ['Artigos | Talisson Souza', 'Conteúdos técnicos e reflexões sobre tecnologia, carreira, segurança, comunidades e mercado.']],
  ['/politicas', ['Políticas | Talisson Souza', 'Central de políticas, termos e diretrizes que orientam minha atuação profissional.']],
  ['/como-trabalho', ['Como Eu Trabalho | Talisson Souza', 'Meu processo de trabalho, tomada de decisão, validação de escopo e condução técnica.']],
  ['/decisoes-tecnicas', ['Decisões Técnicas | Talisson Souza', 'Reflexões sobre stack, arquitetura, trade-offs e escolhas técnicas em projetos reais.']],
  ['/acessibilidade', ['Acessibilidade | Talisson Souza', 'Compromisso com acesso, clareza e experiência digital responsável.']],
  ['/politica-de-privacidade', ['Política de Privacidade | Talisson Souza', 'Como dados pessoais são tratados, protegidos e utilizados neste site.']],
  ['/en-us', ['Talisson Souza | Software Engineer and Entrepreneur', 'Software Engineer and founder of Cheetah Solutions Network. Over 8 years building systems, automations and digital architectures.']],
  ['/en-us/about', ['About Talisson Souza', 'The story, principles and working style behind Talisson Souza’s software, companies and professional relationships.']],
  ['/en-us/career', ['Career | Talisson Souza', 'Talisson Souza’s professional journey in technology, leadership, software architecture and digital products.']],
  ['/en-us/contact', ['Contact | Talisson Souza', 'A channel to start professional conversations with context, clarity and responsibility.']],
  ['/en-us/projects', ['Curated Portfolio | Talisson Souza', 'Projects kept under curation, respecting confidentiality and each client’s context.']],
  ['/en-us/services', ['Services | Talisson Souza', 'Solutions in development, architecture, automation, cloud, mobile, bots and UI/UX for digital operations.']],
  ['/en-us/book', ['Overcoming Limits | Talisson Souza', 'Talisson Souza’s authorial book about rejection, trajectory, discipline and building a future.']],
  ['/en-us/principles', ['Principles | Talisson Souza', 'Principles that guide decisions, work, communication and professional responsibility.']],
  ['/en-us/checklists', ['Checklists | Talisson Souza', 'Practical guides for security, production, communities and digital infrastructure.']],
  ['/en-us/faq', ['FAQ | Talisson Souza', 'Direct answers about services, processes, limits, timelines and work style.']],
  ['/en-us/feedbacks', ['Feedbacks | Talisson Souza', 'Real testimonials from clients, partners and professionals who have followed my work.']],
  ['/en-us/articles', ['Articles | Talisson Souza', 'Technical content and reflections on technology, career, security, communities and the market.']],
  ['/en-us/policies', ['Policies | Talisson Souza', 'Policy, terms and guideline hub for my professional work.']],
]);

const serviceTitles = new Map([
  ['web-development', ['Desenvolvimento Web | Talisson Souza', 'Sites, aplicações e sistemas web com estrutura, performance e base preparada para crescer.']],
  ['mobile-development', ['Desenvolvimento Mobile | Talisson Souza', 'Aplicações mobile com experiência clara, fluxos úteis e integração segura com a operação.']],
  ['bot-development', ['Desenvolvimento de Bots | Talisson Souza', 'Bots, automações e integrações para comunidades, suporte e operações digitais.']],
  ['uiux-design', ['UI/UX Design | Talisson Souza', 'Experiências digitais pensadas antes do código, com foco em clareza, jornada e decisão.']],
  ['cloud-solutions', ['Cloud Solutions | Talisson Souza', 'Infraestrutura, deploy, monitoramento e ambientes preparados para operação contínua.']],
  ['consulting', ['Consultoria Tech | Talisson Souza', 'Direção técnica para decisões, arquitetura, processos e evolução de produtos digitais.']],
]);

const policyTitleById = new Map();
const policiesSource = fs.readFileSync(path.join(rootDir, 'src', 'data', 'policies-content.ts'), 'utf8');
for (const match of policiesSource.matchAll(/id:\s*'([^']+)'[\s\S]*?title:\s*\{\s*pt:\s*'([^']+)'/g)) {
  policyTitleById.set(match[1], match[2]);
}

const policyDescriptionById = new Map([
  ['canais-oficiais-comunicacao-institucional', 'Regras para reconhecer canais oficiais, evitar golpes e confirmar comunicações ligadas ao trabalho de Talisson Souza.'],
]);

const checklistTitleBySlug = new Map();
const checklistsSource = fs.readFileSync(path.join(rootDir, 'src', 'data', 'checklists.ts'), 'utf8');
for (const match of checklistsSource.matchAll(/slug:\s*['"]([^'"]+)['"][\s\S]{0,800}?title:\s*\{\s*pt:\s*['"]([^'"]+)['"]/g)) {
  checklistTitleBySlug.set(match[1], match[2]);
}

const articleMetaByPath = new Map();
const cleanTsString = (value) => value.replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\n/g, ' ');
const addArticleMeta = ({ pathPt, pathEn, titlePt, titleEn, excerptPt, excerptEn }) => {
  if (pathPt && titlePt) {
    articleMetaByPath.set(pathPt, [`${cleanTsString(titlePt)} | ${siteName}`, cleanTsString(excerptPt || 'Artigo publicado por Talisson Souza.')]);
  }
  if (pathEn && titleEn) {
    articleMetaByPath.set(pathEn, [`${cleanTsString(titleEn)} | ${siteName}`, cleanTsString(excerptEn || 'Article published by Talisson Souza.')]);
  }
};

const quoted = String.raw`((?:\\.|[^'])*)`;
const articlesSource = fs.readFileSync(path.join(rootDir, 'src', 'data', 'articles.ts'), 'utf8');
const articlePattern = new RegExp(
  String.raw`title:\s*\{\s*pt:\s*'${quoted}',\s*en:\s*'${quoted}'[\s\S]*?excerpt:\s*\{\s*pt:\s*'${quoted}',\s*en:\s*'${quoted}'[\s\S]*?path:\s*\{\s*pt:\s*'([^']+)',\s*en:\s*'([^']+)'`,
  'g',
);
for (const match of articlesSource.matchAll(articlePattern)) {
  addArticleMeta({
    titlePt: match[1],
    titleEn: match[2],
    excerptPt: match[3],
    excerptEn: match[4],
    pathPt: match[5],
    pathEn: match[6],
  });
}

const marketTrailDir = path.join(rootDir, 'src', 'data', 'market-trail');
const marketTrailPattern = new RegExp(
  String.raw`slugPt:\s*'([^']+)'[\s\S]*?slugEn:\s*'([^']+)'[\s\S]*?title:\s*\{\s*pt:\s*'${quoted}',\s*en:\s*'${quoted}'[\s\S]*?excerpt:\s*\{\s*pt:\s*'${quoted}',\s*en:\s*'${quoted}'`,
  'g',
);
for (const file of fs.readdirSync(marketTrailDir).filter((name) => name.endsWith('.ts'))) {
  const source = fs.readFileSync(path.join(marketTrailDir, file), 'utf8');
  for (const match of source.matchAll(marketTrailPattern)) {
    addArticleMeta({
      pathPt: `/artigos/${match[1]}`,
      pathEn: `/en-us/articles/${match[2]}`,
      titlePt: match[3],
      titleEn: match[4],
      excerptPt: match[5],
      excerptEn: match[6],
    });
  }
}

const htmlEscape = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const titleCase = (value) => value
  .replace(/[-_]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .replace(/\b\p{L}/gu, (letter) => letter.toLocaleUpperCase('pt-BR'));

const fallbackMeta = (route) => {
  const cleanRoute = route.replace(/^\/en-us/, '').replace(/^\/+|\/+$/g, '');
  const parts = cleanRoute.split('/').filter(Boolean);
  const last = parts.at(-1) || 'home';
  const title = `${titleCase(last)} | ${siteName}`;
  return [title, 'Página oficial do site de Talisson Souza, com conteúdo, contexto e identidade visual própria.'];
};

const getMeta = (route) => {
  if (pageMeta.has(route)) return pageMeta.get(route);
  if (articleMetaByPath.has(route)) return articleMetaByPath.get(route);

  const serviceMatch = route.match(/^\/(?:en-us\/)?services?\/([^/]+)$/);
  if (serviceMatch && serviceTitles.has(serviceMatch[1])) return serviceTitles.get(serviceMatch[1]);

  const policyMatch = route.match(/^\/(?:en-us\/policies|politicas)\/([^/]+)$/);
  if (policyMatch && policyTitleById.has(policyMatch[1])) {
    const title = policyTitleById.get(policyMatch[1]);
    const description = policyDescriptionById.get(policyMatch[1]) || `Política institucional sobre ${title.toLocaleLowerCase('pt-BR')}.`;
    return [`${title} | ${siteName}`, description];
  }

  const checklistMatch = route.match(/^\/(?:en-us\/checklists|checklists)\/([^/]+)$/);
  if (checklistMatch && checklistTitleBySlug.has(checklistMatch[1])) {
    const title = checklistTitleBySlug.get(checklistMatch[1]);
    return [`${title} | ${siteName}`, `Checklist prático sobre ${title.toLocaleLowerCase('pt-BR')}.`];
  }

  return fallbackMeta(route);
};

const replaceMeta = (source, route, imagePath) => {
  const [title, description] = getMeta(route);
  const cleanRoute = route === '/' ? '' : route;
  const url = `${baseUrl}${cleanRoute}`;
  const image = `${baseUrl}${imagePath}`;
  const locale = route.startsWith('/en-us') ? 'en_US' : 'pt_BR';
  const alternateLocale = locale === 'pt_BR' ? 'en_US' : 'pt_BR';

  let output = source;
  output = output.replace(/<html lang="[^"]*"/, `<html lang="${locale === 'pt_BR' ? 'pt-BR' : 'en-US'}"`);
  output = output.replace(/<title>[\s\S]*?<\/title>/, `<title>${htmlEscape(title)}</title>`);
  output = output.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${htmlEscape(url)}" />`);

  const replacements = new Map([
    ['description', description],
    ['og:title', title],
    ['og:description', description],
    ['og:url', url],
    ['og:image', image],
    ['og:image:secure_url', image],
    ['og:image:alt', title],
    ['og:locale', locale],
    ['og:locale:alternate', alternateLocale],
    ['twitter:title', title],
    ['twitter:description', description],
    ['twitter:image', image],
    ['twitter:image:alt', title],
  ]);

  for (const [name, value] of replacements) {
    const escaped = htmlEscape(value);
    output = output.replace(
      new RegExp(`(<meta (?:name|property)="${name.replace(':', '\\:')}" content=")[^"]*(" \\/>)`),
      `$1${escaped}$2`,
    );
  }

  output = output.replace(/"url":\s*"https:\/\/www\.talissonsouza\.com\.br[^"]*"/, `"url": "${htmlEscape(url)}"`);
  output = output.replace(/"image":\s*"https:\/\/www\.talissonsouza\.com\.br\/og\/home\.png"/, `"image": "${htmlEscape(image)}"`);

  return output;
};

let generated = 0;
for (const entry of manifest) {
  if (!entry.route || !entry.image || entry.route === '/') continue;
  const routeDir = path.join(distDir, entry.route.replace(/^\/+/, ''));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), replaceMeta(html, entry.route, entry.image), 'utf8');
  generated += 1;
}

console.log(`Generated static metadata for ${generated} routes.`);
