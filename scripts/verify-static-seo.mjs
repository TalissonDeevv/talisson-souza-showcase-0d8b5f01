import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const baseUrl = 'https://www.talissonsouza.com.br';

const routes = [
  {
    path: '/projeto/saudemais',
    title: 'Saúde+ | Projeto de saúde digital | Talisson Souza',
    image: '/og/projeto-saudemais.png',
    schemas: ['BreadcrumbList', 'SoftwareApplication'],
  },
  {
    path: '/en-us/project/saudemais',
    title: 'Saúde+ | Digital health project | Talisson Souza',
    image: '/og/en-us-project-saudemais.png',
    schemas: ['BreadcrumbList', 'SoftwareApplication'],
  },
  {
    path: '/servicos/comunidade-discord',
    title: 'Administração de Comunidade Discord | Talisson Souza',
    image: '/og/servicos-comunidade-discord.png',
    schemas: ['BreadcrumbList', 'Service'],
  },
  {
    path: '/en-us/services/community-discord',
    title: 'Discord Community Administration | Talisson Souza',
    image: '/og/en-us-services-community-discord.png',
    schemas: ['BreadcrumbList', 'Service'],
  },
  {
    path: '/servicos/bot-development/planos',
    title: 'Planos de Acompanhamento para Bots | Talisson Souza',
    image: '/og/servicos-bot-development.png',
    schemas: ['BreadcrumbList', 'Service', 'Offer'],
  },
  {
    path: '/en-us/services/bot-development/plans',
    title: 'Bot Follow-up Plans | Talisson Souza',
    image: '/og/en-us-services-bot-development.png',
    schemas: ['BreadcrumbList', 'Service', 'Offer'],
  },
];

const extract = (html, pattern) => html.match(pattern)?.[1] ?? '';
const failures = [];

for (const route of routes) {
  const htmlPath = path.join(distDir, route.path.replace(/^\/+/, ''), 'index.html');
  const imagePath = path.join(distDir, route.image.replace(/^\/+/, ''));

  if (!fs.existsSync(htmlPath)) {
    failures.push(`${route.path}: static HTML was not generated`);
    continue;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const title = extract(html, /<title>([^<]+)<\/title>/);
  const canonical = extract(html, /<link rel="canonical" href="([^"]+)" \/>/);
  const ogTitle = extract(html, /<meta property="og:title" content="([^"]+)" \/>/);
  const ogUrl = extract(html, /<meta property="og:url" content="([^"]+)" \/>/);
  const ogImage = extract(html, /<meta property="og:image" content="([^"]+)" \/>/);
  const twitterTitle = extract(html, /<meta name="twitter:title" content="([^"]+)" \/>/);
  const twitterImage = extract(html, /<meta name="twitter:image" content="([^"]+)" \/>/);
  const expectedUrl = `${baseUrl}${route.path}`;
  const expectedImage = `${baseUrl}${route.image}`;

  const checks = [
    [title === route.title, `title is "${title}"`],
    [canonical === expectedUrl, `canonical is "${canonical}"`],
    [ogTitle === route.title, `og:title is "${ogTitle}"`],
    [ogUrl === expectedUrl, `og:url is "${ogUrl}"`],
    [ogImage === expectedImage, `og:image is "${ogImage}"`],
    [twitterTitle === route.title, `twitter:title is "${twitterTitle}"`],
    [twitterImage === expectedImage, `twitter:image is "${twitterImage}"`],
    [fs.existsSync(imagePath), `image file is missing at ${route.image}`],
  ];

  for (const schema of route.schemas) {
    checks.push([html.includes(`"@type":"${schema}"`), `${schema} structured data is missing`]);
  }

  for (const [passed, message] of checks) {
    if (!passed) failures.push(`${route.path}: ${message}`);
  }
}

if (failures.length > 0) {
  console.error('Static SEO verification failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Verified static SEO for ${routes.length} critical routes.`);
