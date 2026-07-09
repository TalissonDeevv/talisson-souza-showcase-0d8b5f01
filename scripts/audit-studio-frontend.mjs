import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

function abs(relativePath) {
  return path.join(root, relativePath);
}

function fail(message) {
  errors.push(message);
}

function read(relativePath) {
  return readFileSync(abs(relativePath), "utf8");
}

function walk(relativeDir, extensions = [".ts", ".tsx"]) {
  const start = abs(relativeDir);
  if (!existsSync(start)) return [];
  const files = [];
  const stack = [start];

  while (stack.length) {
    const current = stack.pop();
    for (const entry of readdirSync(current)) {
      const fullPath = path.join(current, entry);
      const stats = statSync(fullPath);
      if (stats.isDirectory()) {
        stack.push(fullPath);
      } else if (extensions.includes(path.extname(fullPath))) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

const requiredFiles = [
  "src/studio/routes/StudioRouter.tsx",
  "src/studio/layouts/StudioShell.tsx",
  "src/studio/design-system/primitives.tsx",
  "src/studio/mock/data.ts",
  "src/studio/mock/services.ts",
  "src/studio/mock/store.tsx",
  "src/studio/pages/frontend/StudioFrontendPages.tsx",
  "src/studio/motion/presets.ts",
  "src/studio/motion/README.md",
  "docs/ts-studio-frontend-report.md",
];

for (const file of requiredFiles) {
  if (!existsSync(abs(file))) fail(`Missing Studio frontend artifact: ${file}`);
}

const app = read("src/App.tsx");
if (!app.includes("StudioRouter")) fail("App.tsx does not mount StudioRouter.");
if (/studio\/(core|services|auth|providers)|StudioCore|studio-auth-client/i.test(app)) {
  fail("App.tsx imports forbidden Studio backend/auth internals.");
}

const frontendSource = [
  ...walk("src/studio/design-system"),
  ...walk("src/studio/mock"),
  ...walk("src/studio/motion"),
  ...walk("src/studio/pages/frontend"),
  abs("src/studio/layouts/StudioShell.tsx"),
  abs("src/studio/routes/StudioRouter.tsx"),
  abs("src/studio/utils/classnames.ts"),
].map((file) => [file, readFileSync(file, "utf8")]);

for (const [file, content] of frontendSource) {
  const relative = path.relative(root, file).replaceAll(path.sep, "/");

  if (/@supabase\/supabase-js|createClient\(|\.from\(|\.rpc\(|fetch\(["']\/api\/studio/.test(content)) {
    fail(`Studio frontend connects backend/API directly: ${relative}`);
  }

  if (/\bTODO\b|\bFIXME\b/.test(content)) {
    fail(`Studio frontend contains TODO/FIXME: ${relative}`);
  }

  if (/\bas any\b|: any\b/.test(content)) {
    fail(`Studio frontend contains explicit any: ${relative}`);
  }
}

const pageSource = read("src/studio/pages/frontend/StudioFrontendPages.tsx");
for (const page of [
  "StudioLoginPage",
  "StudioDashboardPage",
  "StudioArticlesPage",
  "StudioArticleEditorPage",
  "StudioMediaPage",
  "StudioSeoPage",
  "StudioNewsletterPage",
  "StudioCommentsPage",
  "StudioAnalyticsPage",
  "StudioUsersPage",
  "StudioSettingsPage",
]) {
  if (!pageSource.includes(page)) fail(`Missing Studio frontend page: ${page}`);
}

const designSystem = read("src/studio/design-system/primitives.tsx");
for (const component of [
  "StudioButton",
  "StudioInput",
  "StudioPanel",
  "StudioCard",
  "StudioDataTable",
  "StudioDataGrid",
  "StudioTabs",
  "StudioBadge",
  "StudioDropdownMock",
  "StudioSheetMock",
  "StudioTooltip",
  "StudioToastPreview",
  "StudioFilterPill",
  "StudioSearchBar",
  "StudioPagination",
  "StudioLoading",
  "StudioSkeleton",
  "StudioAvatar",
  "StudioMiniChart",
]) {
  if (!designSystem.includes(component)) fail(`Missing Studio design system component: ${component}`);
}

if (errors.length) {
  console.error("TS Studio frontend audit failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("TS Studio frontend audit passed.");
