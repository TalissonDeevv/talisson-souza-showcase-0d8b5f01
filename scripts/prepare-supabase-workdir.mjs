import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const project = process.argv[2];

const validProjects = new Set(["main", "comments"]);

if (!validProjects.has(project)) {
  console.error("Usage: node scripts/prepare-supabase-workdir.mjs <main|comments>");
  process.exit(2);
}

const source = path.join(root, "supabase", "projects", project);
const targetRoot = path.join(root, ".supabase-workdir", project);
const targetSupabase = path.join(targetRoot, "supabase");

if (!existsSync(source)) {
  console.error(`Missing source project directory: ${source}`);
  process.exit(1);
}

const resolvedGeneratedRoot = path.resolve(root, ".supabase-workdir");
const resolvedTargetRoot = path.resolve(targetRoot);

if (!resolvedTargetRoot.startsWith(resolvedGeneratedRoot)) {
  console.error(`Refusing to write outside generated workdir: ${resolvedTargetRoot}`);
  process.exit(1);
}

rmSync(targetRoot, { recursive: true, force: true });
mkdirSync(targetSupabase, { recursive: true });

for (const entry of ["config.toml", "functions", "migrations"]) {
  const from = path.join(source, entry);
  const to = path.join(targetSupabase, entry);
  if (existsSync(from)) {
    cpSync(from, to, { recursive: true });
  }
}

console.log(`Prepared Supabase CLI workdir: ${path.relative(root, targetRoot)}`);
console.log(`Use: supabase --workdir ${path.relative(root, targetRoot)} <command>`);
