import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

const requiredDirectories = [
  "src/studio/api",
  "src/studio/components",
  "src/studio/layouts",
  "src/studio/pages",
  "src/studio/hooks",
  "src/studio/services",
  "src/studio/providers",
  "src/studio/stores",
  "src/studio/types",
  "src/studio/utils",
  "src/studio/config",
  "src/studio/permissions",
  "src/studio/middleware",
  "src/studio/modules",
  "src/studio/routes",
  "src/studio/contexts",
  "src/studio/styles",
  "src/studio/assets",
];

const requiredDocs = [
  "docs/ts-studio-blueprint.md",
  "docs/ts-studio-architecture.md",
  "docs/ts-studio-api.md",
  "docs/ts-studio-rbac.md",
  "docs/ts-studio-modules.md",
  "docs/ts-studio-database.md",
  "docs/ts-studio-roadmap.md",
  "docs/ts-studio-folder-structure.md",
  "docs/ts-studio-events.md",
  "docs/ts-studio-permissions.md",
  "docs/ts-studio-security.md",
  "docs/ts-studio-config.md",
  "docs/sprint-3-report.md",
  "docs/sprint-4-report.md",
  "docs/rollback-sprint-3.md",
  "docs/rollback-sprint-4.md",
];

function fail(message) {
  errors.push(message);
}

function abs(relativePath) {
  return path.join(root, relativePath);
}

function walk(relativeDir, extensions = [".ts", ".tsx", ".md"]) {
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

for (const directory of requiredDirectories) {
  if (!existsSync(abs(directory))) fail(`Missing TS Studio directory: ${directory}`);
}

for (const doc of requiredDocs) {
  if (!existsSync(abs(doc))) fail(`Missing TS Studio documentation: ${doc}`);
}

const studioFiles = walk("src/studio", [".ts", ".tsx"]);
if (!studioFiles.length) fail("TS Studio has no source files.");

for (const file of studioFiles) {
  const content = readFileSync(file, "utf8");
  const relative = path.relative(root, file).replaceAll(path.sep, "/");

  if (/from\s+["']@\/(components|pages|hooks|contexts|integrations|data|utils|lib)\//.test(content)) {
    fail(`TS Studio source imports legacy app code: ${relative}`);
  }

  if (/https:\/\/[a-z0-9]{20}\.supabase\.co/.test(content)) {
    fail(`TS Studio source contains hardcoded Supabase project URL: ${relative}`);
  }

  if (/sb_publishable_[A-Za-z0-9_-]+/.test(content)) {
    fail(`TS Studio source contains hardcoded publishable key: ${relative}`);
  }
}

const registry = readFileSync(abs("src/studio/modules/registry.ts"), "utf8");
for (const moduleKey of [
  "dashboard",
  "content",
  "articles",
  "seo",
  "media",
  "users",
  "discord",
  "forms",
  "newsletter",
  "analytics",
  "monitoring",
  "security",
  "integrations",
  "system",
]) {
  if (!registry.includes(`key: "${moduleKey}"`)) {
    fail(`TS Studio registry missing module: ${moduleKey}`);
  }
}

const rbac = readFileSync(abs("src/studio/permissions/rbac.ts"), "utf8");
for (const roleKey of ["owner", "admin", "editor", "moderator", "analyst", "viewer"]) {
  if (!rbac.includes(`${roleKey}:`)) fail(`TS Studio RBAC missing role: ${roleKey}`);
}

const migration = abs("supabase/projects/main/migrations/20260708205740_ts_studio_foundation.sql");
if (!existsSync(migration)) {
  fail("Missing TS Studio foundation migration.");
} else {
  const sql = readFileSync(migration, "utf8");
  if (!/CREATE SCHEMA IF NOT EXISTS studio/i.test(sql)) {
    fail("TS Studio migration does not create private studio schema.");
  }
  if (!/REVOKE ALL ON SCHEMA studio FROM PUBLIC, anon, authenticated/i.test(sql)) {
    fail("TS Studio migration does not revoke schema access from public client roles.");
  }
  if (!/ALTER TABLE studio\.audit_events ENABLE ROW LEVEL SECURITY/i.test(sql)) {
    fail("TS Studio migration does not enable RLS on audit events.");
  }
}

if (errors.length) {
  console.error("TS Studio audit failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("TS Studio audit passed.");
