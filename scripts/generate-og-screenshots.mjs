import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const Module = require('node:module');

const root = process.cwd();
const baseUrl = process.argv[2] ?? 'http://127.0.0.1:4177';
const outputDir = path.join(root, 'public', 'og');

function loadTsModule(relativePath) {
  const filename = path.join(root, relativePath);
  const source = fs.readFileSync(filename, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: {
      esModuleInterop: true,
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: filename,
  });

  const mod = new Module(filename);
  mod.filename = filename;
  mod.paths = Module._nodeModulePaths(path.dirname(filename));
  mod._compile(compiled.outputText, filename);
  return mod.exports;
}

function routeImageKey(route) {
  const normalized = (route || '/').split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';

  if (/^\/(?:en-us\/articles|artigos)\/tag\//.test(normalized)) {
    return normalized.startsWith('/en-us') ? 'en-us-articles' : 'artigos';
  }

  if (normalized === '/') return 'home';

  return normalized
    .replace(/^\/+|\/+$/g, '')
    .replace(/\//g, '--')
    .replace(/[^a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

function chromePath() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'google-chrome',
    'chromium',
    'chromium-browser',
  ].filter(Boolean);

  return candidates.find((candidate) => candidate && (candidate.includes('\\') ? fs.existsSync(candidate) : true));
}

function capture(chrome, route, file) {
  const url = `${baseUrl}${route === '/' ? '/' : route}`;
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--disable-extensions',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=4500',
    `--screenshot=${file}`,
    url,
  ];

  return new Promise((resolve, reject) => {
    const child = spawn(chrome, args, { stdio: 'ignore' });
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0 && fs.existsSync(file)) {
        resolve();
        return;
      }
      reject(new Error(`Failed to capture ${route} with code ${code}`));
    });
  });
}

function uniqueRoutes(routes) {
  const seen = new Set();
  return routes.filter((route) => {
    const normalized = (route || '/').replace(/\/+$/, '') || '/';
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

const { articles, trails } = loadTsModule('src/data/articles.ts');
const { checklists } = loadTsModule('src/data/checklists.ts');
const { policySections } = loadTsModule('src/data/policies-content.ts');

const serviceIds = ['web-development', 'mobile-development', 'bot-development', 'uiux-design', 'cloud-solutions', 'consulting'];

const staticRoutes = [
  '/',
  '/sobre',
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
  '/artigos',
  '/politica-de-privacidade',
  '/faq',
  '/feedbacks',
  '/politicas',
  '/en-us',
  '/en-us/about',
  '/en-us/projects',
  '/en-us/services',
  '/en-us/career',
  '/en-us/contact',
  '/en-us/how-i-work',
  '/en-us/tech-decisions',
  '/en-us/accessibility',
  '/en-us/book',
  '/en-us/principles',
  '/en-us/checklists',
  '/en-us/articles',
  '/en-us/privacy-policy',
  '/en-us/faq',
  '/en-us/feedbacks',
  '/en-us/policies',
];

const routes = uniqueRoutes([
  ...staticRoutes,
  ...serviceIds.flatMap((id) => [`/servicos/${id}`, `/en-us/services/${id}`]),
  ...articles.flatMap((article) => [article.path.pt, article.path.en]),
  '/artigos/o-que-o-monitoramento-da-discord-pelo-stf-significa-para-quem-cria-comunidades',
  ...trails.flatMap((trail) => [trail.path.pt, trail.path.en]),
  ...checklists.flatMap((checklist) => [checklist.path.pt, checklist.path.en]),
  ...policySections.flatMap((section) => [`/politicas/${section.id}`, `/en-us/policies/${section.id}`]),
]);

fs.mkdirSync(outputDir, { recursive: true });

const chrome = chromePath();
if (!chrome) {
  throw new Error('Chrome or Edge was not found for OG screenshot capture.');
}

const manifest = [];
let index = 0;

for (const route of routes) {
  index += 1;
  const key = routeImageKey(route);
  const file = path.join(outputDir, `${key}.png`);
  await capture(chrome, route, file);
  manifest.push({ route, image: `/og/${key}.png` });
  console.log(`[${index}/${routes.length}] ${route} -> /og/${key}.png`);
}

fs.writeFileSync(path.join(outputDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
