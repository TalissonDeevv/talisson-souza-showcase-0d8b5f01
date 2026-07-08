import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const mode = process.argv[2] ?? "all";
const failures = [];

const requiredPublicEnv = [
  "VITE_SUPABASE_URL",
  "VITE_SUPABASE_PUBLISHABLE_KEY",
  "VITE_SUPABASE_PROJECT_ID",
  "VITE_COMMENTS_SUPABASE_URL",
  "VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY",
  "VITE_COMMENTS_SUPABASE_PROJECT_ID",
];

const requiredPaths = [
  "supabase/projects/main/config.toml",
  "supabase/projects/main/functions/send-contact-email/index.ts",
  "supabase/projects/main/migrations",
  "supabase/projects/comments/config.toml",
  "supabase/projects/comments/functions/discord-post-login/index.ts",
  "supabase/projects/comments/functions/discord-refresh-profile/index.ts",
  "supabase/projects/comments/functions/discord-userinfo/index.ts",
  "supabase/projects/comments/migrations",
  "supabase/legacy-mixed/migrations",
];

const legacyRootConfigPath = ["supabase", "config.toml"].join("/");
const legacyRootFunctionsPath = ["supabase", "functions"].join("/");
const legacyRootMigrationsPath = ["supabase", "migrations"].join("/");
const legacyRootFunctionsReference = new RegExp(
  `${legacyRootFunctionsPath.replace("/", "\\/")}\\/`,
);
const legacyRootMigrationsReference = new RegExp(
  `${legacyRootMigrationsPath.replace("/", "\\/")}\\/`,
);
const publishableKeyFallbackPattern = new RegExp(
  `${["sb", "publishable"].join("_")}_[A-Za-z0-9_-]+`,
);

const ignoredDirs = new Set([
  ".git",
  "dist",
  "node_modules",
  ".temp",
]);

function fail(message) {
  failures.push(message);
}

function rel(filePath) {
  return path.relative(root, filePath).replaceAll(path.sep, "/");
}

function readText(relativePath) {
  return readFileSync(path.join(root, relativePath), "utf8");
}

function walk(directory, extensions = null) {
  const absolute = path.join(root, directory);
  if (!existsSync(absolute)) return [];

  const files = [];
  const stack = [absolute];

  while (stack.length) {
    const current = stack.pop();
    for (const entry of readdirSync(current)) {
      const fullPath = path.join(current, entry);
      const stats = statSync(fullPath);

      if (stats.isDirectory()) {
        if (!ignoredDirs.has(entry)) stack.push(fullPath);
        continue;
      }

      if (!extensions || extensions.includes(path.extname(entry))) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

function checkStructure() {
  for (const requiredPath of requiredPaths) {
    if (!existsSync(path.join(root, requiredPath))) {
      fail(`Missing required architecture path: ${requiredPath}`);
    }
  }

  for (const forbiddenPath of [
    legacyRootConfigPath,
    legacyRootFunctionsPath,
    legacyRootMigrationsPath,
  ]) {
    if (existsSync(path.join(root, forbiddenPath))) {
      fail(`Forbidden legacy Supabase root path still exists: ${forbiddenPath}`);
    }
  }
}

function checkEnvContract() {
  const envExample = readText(".env.example");

  for (const envName of requiredPublicEnv) {
    if (!new RegExp(`^${envName}=`, "m").test(envExample)) {
      fail(`Missing .env.example entry: ${envName}`);
    }
  }

  const sourceFiles = [
    ...walk("src", [".ts", ".tsx"]),
    ...walk("supabase/projects", [".ts"]),
  ];

  for (const file of sourceFiles) {
    const content = readFileSync(file, "utf8");
    if (/https:\/\/[a-z0-9]{20}\.supabase\.co/.test(content)) {
      fail(`Production Supabase URL fallback found in active source: ${rel(file)}`);
    }
    if (publishableKeyFallbackPattern.test(content)) {
      fail(`Publishable key fallback found in active source: ${rel(file)}`);
    }
  }
}

function checkImports() {
  const sourceFiles = walk("src", [".ts", ".tsx"]);

  for (const file of sourceFiles) {
    const content = readFileSync(file, "utf8");
    if (/from\s+["']@\/integrations\/supabase-comments\/client["']/.test(content)) {
      continue;
    }
    if (/supabase-comments\/client/.test(content)) {
      fail(`Unexpected comments Supabase client import form: ${rel(file)}`);
    }
  }
}

function checkReferences() {
  const files = [
    ...walk("src", [".ts", ".tsx"]),
    ...walk("scripts", [".mjs", ".js", ".ts"]),
    ...walk("supabase/projects", [".ts", ".sql", ".toml", ".md"]),
    ...walk("docs", [".md"]),
    path.join(root, ".env.example"),
    path.join(root, "README.md"),
  ].filter(existsSync);

  for (const file of files) {
    const content = readFileSync(file, "utf8");
    if (
      legacyRootFunctionsReference.test(content)
      || legacyRootMigrationsReference.test(content)
    ) {
      fail(`Legacy root Supabase path reference found: ${rel(file)}`);
    }
  }
}

const checks = {
  env: () => {
    checkStructure();
    checkEnvContract();
  },
  imports: checkImports,
  references: checkReferences,
  all: () => {
    checkStructure();
    checkEnvContract();
    checkImports();
    checkReferences();
  },
};

if (!checks[mode]) {
  console.error(`Unknown audit mode: ${mode}`);
  process.exit(2);
}

checks[mode]();

if (failures.length) {
  console.error(`Architecture audit failed (${mode}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Architecture audit passed (${mode}).`);
