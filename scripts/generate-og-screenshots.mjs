import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const ts = require('typescript');
const Module = require('node:module');

const root = process.cwd();
const cliArgs = process.argv.slice(2);
const manifestOnly = cliArgs.includes('--manifest-only');
const captureArgs = cliArgs.filter((arg) => arg !== '--manifest-only');
const baseUrl = captureArgs[0] ?? 'http://127.0.0.1:4177';
const requestedRoutes = captureArgs.slice(1);
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

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForJson(url, attempts = 80) {
  for (let i = 0; i < attempts; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch {
      // Chrome is still booting.
    }
    await wait(100);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

function createCdpClient(wsUrl) {
  let id = 0;
  const pending = new Map();
  const socket = new WebSocket(wsUrl);

  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;

    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);

    if (message.error) {
      reject(new Error(message.error.message || 'Chrome DevTools command failed'));
      return;
    }

    resolve(message.result);
  });

  const opened = new Promise((resolve, reject) => {
    socket.addEventListener('open', resolve, { once: true });
    socket.addEventListener('error', reject, { once: true });
  });

  return {
    async send(method, params = {}) {
      await opened;
      id += 1;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
      });
    },
    close() {
      socket.close();
    },
  };
}

async function terminateChrome(child, userDataDir) {
  if (!child.killed) {
    child.kill('SIGKILL');
  }

  await Promise.race([
    new Promise((resolve) => child.once('exit', resolve)),
    wait(1500),
  ]);

  for (let attempt = 0; attempt < 8; attempt += 1) {
    try {
      fs.rmSync(userDataDir, { recursive: true, force: true });
      return;
    } catch {
      await wait(250);
    }
  }
}

async function waitForPageTarget(port) {
  for (let i = 0; i < 80; i += 1) {
    const targets = await waitForJson(`http://127.0.0.1:${port}/json/list`, 1).catch(() => []);
    const page = targets.find((target) => target.type === 'page' && target.webSocketDebuggerUrl);
    if (page) return page.webSocketDebuggerUrl;
    await wait(100);
  }

  throw new Error('Timed out waiting for page target');
}

async function capture(chrome, route, file) {
  const url = `${baseUrl}${route === '/' ? '/' : route}`;
  const port = 9222 + Math.floor(Math.random() * 1000);
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'talisson-og-'));
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--disable-extensions',
    '--hide-scrollbars',
    '--no-first-run',
    '--disable-dev-shm-usage',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    url,
  ];

  const child = spawn(chrome, args, { stdio: 'ignore' });
  let client;

  try {
    const wsUrl = await waitForPageTarget(port);
    client = createCdpClient(wsUrl);
    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await wait(2800);
    await client.send('Runtime.evaluate', {
      awaitPromise: true,
      expression: `
        (async () => {
          await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          const route = ${JSON.stringify(route)};
          const target =
            document.querySelector('[data-og-focus]') ||
            document.querySelector('h1') ||
            document.querySelector('main [class*="font-serif"]') ||
            document.querySelector('main section');
          if (target && route !== '/' && route !== '/en-us') {
            const rect = target.getBoundingClientRect();
            const y = Math.max(0, window.scrollY + rect.top - 135);
            window.scrollTo({ top: y, left: 0, behavior: 'instant' });
            await new Promise((resolve) => setTimeout(resolve, 450));
          }
          document.body.style.caretColor = 'transparent';
          return true;
        })()
      `,
    });
    const screenshot = await client.send('Page.captureScreenshot', {
      format: 'png',
      fromSurface: true,
      captureBeyondViewport: false,
    });
    fs.writeFileSync(file, Buffer.from(screenshot.data, 'base64'));
  } finally {
    client?.close();
    await terminateChrome(child, userDataDir);
  }

  if (!fs.existsSync(file)) {
    throw new Error(`Failed to capture ${route}`);
  }
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

const routes = requestedRoutes.length > 0 ? uniqueRoutes(requestedRoutes) : uniqueRoutes([
  ...staticRoutes,
  ...serviceIds.flatMap((id) => [`/servicos/${id}`, `/en-us/services/${id}`]),
  ...articles.flatMap((article) => [article.path.pt, article.path.en]),
  '/artigos/o-que-o-monitoramento-da-discord-pelo-stf-significa-para-quem-cria-comunidades',
  ...trails.flatMap((trail) => [trail.path.pt, trail.path.en]),
  ...checklists.flatMap((checklist) => [checklist.path.pt, checklist.path.en]),
  ...policySections.flatMap((section) => [`/politicas/${section.id}`, `/en-us/policies/${section.id}`]),
]);

fs.mkdirSync(outputDir, { recursive: true });

const manifestFile = path.join(outputDir, 'manifest.json');

function manifestEntry(route) {
  const key = routeImageKey(route);
  return { route, image: `/og/${key}.png` };
}

function readExistingManifest() {
  if (!fs.existsSync(manifestFile)) return [];

  try {
    const content = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
    return Array.isArray(content) ? content : [];
  } catch {
    return [];
  }
}

function writeManifest(entries) {
  fs.writeFileSync(manifestFile, JSON.stringify(entries, null, 2));
}

if (manifestOnly) {
  writeManifest(routes.map(manifestEntry));
  console.log(`Manifest updated with ${routes.length} routes.`);
  process.exit(0);
}

const chrome = chromePath();
if (!chrome) {
  throw new Error('Chrome or Edge was not found for OG screenshot capture.');
}

const capturedManifest = [];
let index = 0;

for (const route of routes) {
  index += 1;
  const key = routeImageKey(route);
  const file = path.join(outputDir, `${key}.png`);
  await capture(chrome, route, file);
  capturedManifest.push({ route, image: `/og/${key}.png` });
  console.log(`[${index}/${routes.length}] ${route} -> /og/${key}.png`);
}

if (requestedRoutes.length > 0) {
  const existingManifest = readExistingManifest();
  const mergedManifest = new Map(existingManifest.map((entry) => [entry.route, entry]));

  for (const entry of capturedManifest) {
    mergedManifest.set(entry.route, entry);
  }

  writeManifest([...mergedManifest.values()]);
} else {
  writeManifest(capturedManifest);
}
