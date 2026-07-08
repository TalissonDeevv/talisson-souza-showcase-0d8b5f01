import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const mode = process.argv[2] ?? "all";
const errors = [];
const warnings = [];
const info = [];

const projects = {
  main: {
    ref: "xbjkbziaxwsjzsmxilap",
    dir: "supabase/projects/main",
    forbiddenPatterns: [
      /discord_profiles/i,
      /comment_reactions/i,
      /custom:discord/i,
    ],
    expectedFunctions: {
      "send-contact-email": {
        verifyJwt: true,
        requiredSecrets: [
          "SUPABASE_URL",
          "SUPABASE_SERVICE_ROLE_KEY",
          "RESEND_API_KEY",
          "CONTACT_CAPTCHA_SECRET",
          "CONTACT_RATE_LIMIT_SALT",
          "ALLOWED_ORIGINS",
        ],
        requiresRateLimit: true,
        requiresCaptcha: true,
      },
    },
    serviceRoleOnlyTables: new Set([
      "contact_rate_limits",
      "newsletter_subscribers",
    ]),
    expectedStorageBuckets: {
      "blog-images": {
        requiresPublicRead: true,
        requiresMimeTypes: ["image/jpeg", "image/png", "image/webp", "image/gif"],
        requiresFileSizeLimit: true,
        requiresOwnerFolderOnUpload: true,
      },
    },
  },
  comments: {
    ref: "rfzjtmleojkojopftkfo",
    dir: "supabase/projects/comments",
    forbiddenPatterns: [
      /blog-images/i,
      /newsletter_subscribers/i,
      /\bpublic\.blogs\b/i,
      /\bpublic\.blog_comments\b/i,
    ],
    expectedFunctions: {
      "discord-post-login": {
        verifyJwt: true,
        requiredSecrets: [
          "SUPABASE_URL",
          "SUPABASE_ANON_KEY",
          "SUPABASE_SERVICE_ROLE_KEY",
          "DISCORD_RATE_LIMIT_SALT",
          "DISCORD_BOT_TOKEN",
          "DISCORD_GUILD_ID",
          "DISCORD_READER_ROLE_ID",
          "ALLOWED_ORIGINS",
        ],
        requiresBearerAuth: true,
        requiresRateLimit: true,
      },
      "discord-refresh-profile": {
        verifyJwt: true,
        requiredSecrets: [
          "SUPABASE_URL",
          "SUPABASE_ANON_KEY",
          "SUPABASE_SERVICE_ROLE_KEY",
          "DISCORD_RATE_LIMIT_SALT",
          "DISCORD_BOT_TOKEN",
          "ALLOWED_ORIGINS",
        ],
        requiresBearerAuth: true,
        requiresRateLimit: true,
      },
      "discord-userinfo": {
        verifyJwt: false,
        requiredSecrets: [],
        requiresBearerAuth: true,
      },
    },
    serviceRoleOnlyTables: new Set([
      "contact_rate_limits",
      "discord_identity_migrations",
    ]),
    expectedRealtime: {
      channelPattern: "comments:%",
      tables: ["comments", "comment_reactions"],
    },
  },
};

const requiredFrontendEnv = [
  "VITE_SUPABASE_URL",
  "VITE_SUPABASE_PUBLISHABLE_KEY",
  "VITE_SUPABASE_PROJECT_ID",
  "VITE_COMMENTS_SUPABASE_URL",
  "VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY",
  "VITE_COMMENTS_SUPABASE_PROJECT_ID",
];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function note(message) {
  info.push(message);
}

function abs(relativePath) {
  return path.join(root, relativePath);
}

function rel(absolutePath) {
  return path.relative(root, absolutePath).replaceAll(path.sep, "/");
}

function read(relativePath) {
  return readFileSync(abs(relativePath), "utf8");
}

function listFiles(relativeDir, extension = null) {
  const directory = abs(relativeDir);
  if (!existsSync(directory)) return [];

  const files = [];
  const stack = [directory];

  while (stack.length) {
    const current = stack.pop();
    for (const entry of readdirSync(current)) {
      const fullPath = path.join(current, entry);
      const stats = statSync(fullPath);
      if (stats.isDirectory()) {
        stack.push(fullPath);
      } else if (!extension || fullPath.endsWith(extension)) {
        files.push(fullPath);
      }
    }
  }

  return files.sort();
}

function migrationFiles(project) {
  return listFiles(`${project.dir}/migrations`, ".sql");
}

function combinedSql(project) {
  return migrationFiles(project)
    .map((file) => readFileSync(file, "utf8"))
    .join("\n\n");
}

function parseFunctionConfig(configText) {
  const result = new Map();
  let currentSlug = null;

  for (const line of configText.split(/\r?\n/)) {
    const sectionMatch = line.match(/^\s*\[functions\.([^\]]+)\]\s*$/);
    if (sectionMatch) {
      currentSlug = sectionMatch[1].trim();
      result.set(currentSlug, { verifyJwt: null });
      continue;
    }

    if (!currentSlug) continue;
    const verifyMatch = line.match(/^\s*verify_jwt\s*=\s*(true|false)\s*$/);
    if (verifyMatch) {
      result.set(currentSlug, { verifyJwt: verifyMatch[1] === "true" });
    }
  }

  return result;
}

function functionEnvNames(code) {
  return [
    ...code.matchAll(/Deno\.env\.get\("([A-Z0-9_]+)"\)/g),
    ...code.matchAll(/requiredEnv\("([A-Z0-9_]+)"\)/g),
  ]
    .map((match) => match[1])
    .sort();
}

function unique(values) {
  return [...new Set(values)].sort();
}

function createTableNames(sql) {
  return unique(
    [...sql.matchAll(/CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?public\.([a-zA-Z0-9_]+)/gi)]
      .map((match) => match[1]),
  );
}

function parseEffectivePolicies(project) {
  const policies = new Map();
  const files = migrationFiles(project);

  for (const file of files) {
    const text = readFileSync(file, "utf8");
    const policyStatements = text.match(
      /(DROP\s+POLICY[\s\S]*?;|CREATE\s+POLICY[\s\S]*?;)/gi,
    ) ?? [];

    for (const statement of policyStatements) {
      const dropMatch = statement.match(
        /DROP\s+POLICY\s+IF\s+EXISTS\s+"([^"]+)"\s+ON\s+([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)/i,
      );
      if (dropMatch) {
        policies.delete(`${dropMatch[2].toLowerCase()}:${dropMatch[1]}`);
        continue;
      }

      const createMatch = statement.match(
        /CREATE\s+POLICY\s+"([^"]+)"\s+ON\s+([a-zA-Z0-9_]+\.[a-zA-Z0-9_]+)/i,
      );
      if (createMatch) {
        policies.set(`${createMatch[2].toLowerCase()}:${createMatch[1]}`, {
          name: createMatch[1],
          table: createMatch[2].toLowerCase(),
          statement,
          file: rel(file),
        });
      }
    }
  }

  return [...policies.values()];
}

function auditArchitecture() {
  for (const [name, project] of Object.entries(projects)) {
    const configPath = `${project.dir}/config.toml`;
    if (!existsSync(abs(configPath))) fail(`${name}: missing config.toml`);

    const migrationsPath = `${project.dir}/migrations`;
    const functionsPath = `${project.dir}/functions`;
    if (!existsSync(abs(migrationsPath))) fail(`${name}: missing migrations directory`);
    if (!existsSync(abs(functionsPath))) fail(`${name}: missing functions directory`);

    const nestedSupabasePath = `${project.dir}/supabase`;
    if (existsSync(abs(nestedSupabasePath))) {
      fail(`${name}: nested Supabase CLI directory is not allowed: ${nestedSupabasePath}`);
    }

    if (existsSync(abs(configPath))) {
      const config = read(configPath);
      if (!new RegExp(`project_id\\s*=\\s*"${project.ref}"`).test(config)) {
        fail(`${name}: config.toml project_id does not match expected ref ${project.ref}`);
      }

      const functionConfig = parseFunctionConfig(config);
      for (const [slug, expected] of Object.entries(project.expectedFunctions)) {
        const actual = functionConfig.get(slug);
        if (!actual) {
          fail(`${name}: missing [functions.${slug}] config`);
        } else if (actual.verifyJwt !== expected.verifyJwt) {
          fail(
            `${name}: [functions.${slug}] verify_jwt expected ${expected.verifyJwt}, got ${actual.verifyJwt}`,
          );
        }
      }
    }
  }

  for (const forbiddenPath of [
    "supabase/config.toml",
    "supabase/functions",
    "supabase/migrations",
  ]) {
    if (existsSync(abs(forbiddenPath))) {
      fail(`legacy root Supabase path still exists: ${forbiddenPath}`);
    }
  }
}

function auditMigrations() {
  for (const [name, project] of Object.entries(projects)) {
    const files = migrationFiles(project);
    if (!files.length) fail(`${name}: no migrations found`);

    const timestamps = new Set();
    for (const file of files) {
      const filename = path.basename(file);
      if (!/^\d{14}_[A-Za-z0-9_.-]+\.sql$/.test(filename)) {
        fail(`${name}: invalid migration filename: ${filename}`);
      }

      const timestamp = filename.slice(0, 14);
      if (timestamps.has(timestamp)) {
        fail(`${name}: duplicate migration timestamp ${timestamp}`);
      }
      timestamps.add(timestamp);

      const sql = readFileSync(file, "utf8");
      if (/DROP\s+TABLE|TRUNCATE\s+TABLE|DELETE\s+FROM\s+auth\.|DELETE\s+FROM\s+storage\./i.test(sql)) {
        fail(`${name}: destructive migration statement requires explicit approval: ${rel(file)}`);
      }
    }

    const filenames = files.map((file) => path.basename(file));
    const position = (needle) => filenames.findIndex((filename) => filename.includes(needle));

    if (name === "main") {
      if (position("security_hardening") < position("newsletter") && position("newsletter") !== -1) {
        fail("main: security hardening must run after newsletter migration");
      }
      if (position("explicit_data_api_grants") < position("security_hardening")) {
        fail("main: explicit Data API grants must run after security hardening");
      }
    }

    if (name === "comments") {
      const base = position("atlas_comments_base_schema");
      const reactions = position("comment_reactions");
      const badge = position("verified_comment_badge");
      const hardening = position("security_hardening");
      const optimize = position("optimize_rls_policy_evaluation");
      if ([base, reactions, badge, hardening, optimize].some((index) => index === -1)) {
        fail("comments: expected base, reactions, badge, hardening and optimization migrations");
      } else if (!(base < reactions && reactions < badge && badge < hardening && hardening < optimize)) {
        fail("comments: migration dependency order is invalid");
      }
    }

    const sql = combinedSql(project);
    for (const forbidden of project.forbiddenPatterns) {
      if (forbidden.test(sql)) {
        fail(`${name}: migration appears to reference another project boundary: ${forbidden}`);
      }
    }
  }
}

function auditRls() {
  for (const [name, project] of Object.entries(projects)) {
    const sql = combinedSql(project);
    const tables = createTableNames(sql);

    for (const table of tables) {
      const rlsPattern = new RegExp(
        `ALTER\\s+TABLE\\s+public\\.${table}\\s+ENABLE\\s+ROW\\s+LEVEL\\s+SECURITY`,
        "i",
      );
      if (!rlsPattern.test(sql)) {
        fail(`${name}: public.${table} is created without enabling RLS`);
      }

      const hasPolicy = new RegExp(
        `CREATE\\s+POLICY[\\s\\S]*?ON\\s+public\\.${table}\\b`,
        "i",
      ).test(sql);
      const serviceRoleOnly = project.serviceRoleOnlyTables.has(table);
      if (!hasPolicy && !serviceRoleOnly) {
        fail(`${name}: public.${table} has RLS but no client policy`);
      }

      if (serviceRoleOnly) {
        const revokeClients = new RegExp(
          `REVOKE\\s+ALL\\s+PRIVILEGES\\s+ON\\s+TABLE\\s+public\\.${table}[\\s\\S]*?FROM[\\s\\S]*?anon[\\s\\S]*?authenticated`,
          "i",
        ).test(sql);
        const grantServiceRole = new RegExp(
          `GRANT\\s+ALL\\s+PRIVILEGES\\s+ON\\s+TABLE\\s+public\\.${table}\\s+TO\\s+service_role`,
          "i",
        ).test(sql);
        if (!revokeClients || !grantServiceRole) {
          fail(`${name}: public.${table} service-role-only contract is incomplete`);
        }
      }
    }
  }
}

function auditPolicies() {
  for (const [name, project] of Object.entries(projects)) {
    const policies = parseEffectivePolicies(project);

    for (const policy of policies) {
      if (/auth\.role\s*\(/i.test(policy.statement)) {
        fail(`${name}: ${policy.name} uses deprecated auth.role(): ${policy.file}`);
      }

      if (/FOR\s+UPDATE/i.test(policy.statement) && !/WITH\s+CHECK/i.test(policy.statement)) {
        fail(`${name}: UPDATE policy lacks WITH CHECK: ${policy.name} (${policy.file})`);
      }

      if (/TO\s+authenticated/i.test(policy.statement)
        && /USING\s*\(\s*true\s*\)/i.test(policy.statement)
        && !/FOR\s+SELECT/i.test(policy.statement)) {
        fail(`${name}: broad authenticated non-SELECT policy: ${policy.name} (${policy.file})`);
      }
    }
  }
}

function auditStorage() {
  for (const [name, project] of Object.entries(projects)) {
    const sql = combinedSql(project);

    if (!project.expectedStorageBuckets) {
      if (/storage\.buckets|storage\.objects/i.test(sql)) {
        fail(`${name}: unexpected storage configuration in non-storage project`);
      }
      continue;
    }

    for (const [bucket, requirements] of Object.entries(project.expectedStorageBuckets)) {
      if (!new RegExp(`['"]${bucket}['"]`).test(sql)) {
        fail(`${name}: expected storage bucket not found: ${bucket}`);
      }

      if (requirements.requiresFileSizeLimit && !/file_size_limit/i.test(sql)) {
        fail(`${name}: ${bucket} bucket lacks file_size_limit hardening`);
      }

      for (const mime of requirements.requiresMimeTypes) {
        if (!sql.includes(mime)) {
          fail(`${name}: ${bucket} bucket lacks MIME type ${mime}`);
        }
      }

      if (
        requirements.requiresOwnerFolderOnUpload
        && !/storage\.foldername\(name\)\)\[1\]/i.test(sql)
      ) {
        fail(`${name}: ${bucket} upload/update policy lacks owner-folder check`);
      }
    }
  }
}

function auditRealtime() {
  const commentsProject = projects.comments;
  const sql = combinedSql(commentsProject);
  const commentsSection = existsSync(abs("src/components/comments/CommentsSection.tsx"))
    ? read("src/components/comments/CommentsSection.tsx")
    : "";

  if (!commentsSection.includes("comments:${articleSlug}")) {
    fail("comments: frontend does not subscribe to the expected comments:<slug> Realtime channel");
  }

  if (!sql.includes("realtime.topic() LIKE 'comments:%'")) {
    fail("comments: Realtime policy does not restrict channels to comments:%");
  }

  for (const table of commentsProject.expectedRealtime.tables) {
    const publicationPattern = new RegExp(
      `ALTER\\s+PUBLICATION\\s+supabase_realtime\\s+ADD\\s+TABLE\\s+public\\.${table}`,
      "i",
    );
    if (!publicationPattern.test(sql)) {
      fail(`comments: public.${table} is not added to supabase_realtime publication`);
    }
  }
}

function auditFunctions() {
  for (const [name, project] of Object.entries(projects)) {
    const config = parseFunctionConfig(read(`${project.dir}/config.toml`));

    for (const [slug, expected] of Object.entries(project.expectedFunctions)) {
      const functionPath = `${project.dir}/functions/${slug}/index.ts`;
      if (!existsSync(abs(functionPath))) {
        fail(`${name}: missing Edge Function ${slug}`);
        continue;
      }

      const code = read(functionPath);
      if (!/Deno\.serve|serve\s*\(/.test(code)) {
        fail(`${name}/${slug}: no Edge Function serve handler found`);
      }

      const actualConfig = config.get(slug);
      if (!actualConfig || actualConfig.verifyJwt !== expected.verifyJwt) {
        fail(`${name}/${slug}: verify_jwt config mismatch`);
      }

      const imports = [...code.matchAll(/from\s+"(https:\/\/[^"]+)"/g)]
        .map((match) => match[1]);
      for (const importUrl of imports) {
        const pinned = /deno\.land\/std@\d+\.\d+\.\d+/.test(importUrl)
          || /esm\.sh\/[^@/]+@[\d.]+/.test(importUrl)
          || /esm\.sh\/@[^/]+\/[^@/]+@[\d.]+/.test(importUrl);
        if (!pinned) {
          fail(`${name}/${slug}: remote import is not version-pinned: ${importUrl}`);
        }
      }

      const envNames = unique(functionEnvNames(code));
      for (const secret of expected.requiredSecrets) {
        if (!envNames.includes(secret)) {
          fail(`${name}/${slug}: required secret is not read by function: ${secret}`);
        }
      }

      if (expected.requiresBearerAuth && !/Authorization/.test(code)) {
        fail(`${name}/${slug}: expected Authorization handling`);
      }

      if (expected.verifyJwt === false && !/Bearer/.test(code)) {
        fail(`${name}/${slug}: verify_jwt=false requires custom bearer validation`);
      }

      if (expected.requiresRateLimit && !/check_contact_rate_limit/.test(code)) {
        fail(`${name}/${slug}: expected persistent rate limiting`);
      }

      if (expected.requiresCaptcha && !/verifyCaptcha|buildCaptchaChallenge/.test(code)) {
        fail(`${name}/${slug}: expected signed CAPTCHA handling`);
      }

      const consoleLines = code.split(/\r?\n/).filter((line) => /console\.(log|warn|error)/.test(line));
      for (const line of consoleLines) {
        if (/(providerToken|botToken|serviceRoleKey|authorization|SUPABASE_SERVICE_ROLE_KEY|DISCORD_BOT_TOKEN)/.test(line)) {
          fail(`${name}/${slug}: log line may expose sensitive data: ${line.trim()}`);
        }
      }
    }
  }
}

function auditEnvAndSecrets() {
  const envExample = read(".env.example");

  for (const envName of requiredFrontendEnv) {
    if (!new RegExp(`^${envName}=`, "m").test(envExample)) {
      fail(`.env.example missing frontend env var: ${envName}`);
    }
  }

  const allFunctionSecrets = new Set();
  const allCodeSecrets = new Set();

  for (const project of Object.values(projects)) {
    for (const expected of Object.values(project.expectedFunctions)) {
      for (const secret of expected.requiredSecrets) allFunctionSecrets.add(secret);
    }

    for (const functionFile of listFiles(`${project.dir}/functions`, ".ts")) {
      for (const envName of functionEnvNames(readFileSync(functionFile, "utf8"))) {
        allCodeSecrets.add(envName);
      }
    }
  }

  const envExampleNames = new Set(
    envExample
      .split(/\r?\n/)
      .map((line) => line.match(/^([A-Z0-9_]+)=/)?.[1])
      .filter(Boolean),
  );

  for (const secret of allCodeSecrets) {
    if (!envExampleNames.has(secret)) {
      fail(`Edge Function reads undocumented secret: ${secret}`);
    }
  }

  for (const secret of allFunctionSecrets) {
    if (!new RegExp(`^${secret}=`, "m").test(envExample)) {
      fail(`.env.example missing Edge Function secret placeholder: ${secret}`);
    }
  }

  const searchable = [
    ...listFiles("src", ".ts"),
    ...listFiles("src", ".tsx"),
    abs("vercel.json"),
  ].filter(existsSync).map((file) => readFileSync(file, "utf8")).join("\n");

  if (/Deno\.env\.get\(".*(?:MERCADO|MERCADOPAGO|MP_)/i.test(searchable)) {
    warn("Mercado Pago executable secret references found; verify provider-specific secrets manually.");
  } else {
    note("Mercado Pago integration not found in executable code.");
  }

  if (/Deno\.env\.get\(".*SPOTIFY/i.test(searchable)) {
    warn("Spotify executable secret references found; verify provider-specific secrets manually.");
  } else {
    note("Spotify integration not found in executable code.");
  }

  if (/GOOGLE/i.test(searchable)) {
    note("Google references are content/form links only; no Google API secret found in executable code.");
  }
}

const checks = {
  architecture: auditArchitecture,
  migrations: auditMigrations,
  rls: auditRls,
  policies: auditPolicies,
  storage: auditStorage,
  realtime: auditRealtime,
  functions: auditFunctions,
  env: auditEnvAndSecrets,
  secrets: auditEnvAndSecrets,
  all: () => {
    auditArchitecture();
    auditMigrations();
    auditRls();
    auditPolicies();
    auditStorage();
    auditRealtime();
    auditFunctions();
    auditEnvAndSecrets();
  },
};

if (!checks[mode]) {
  console.error(`Unknown Supabase audit mode: ${mode}`);
  process.exit(2);
}

checks[mode]();

if (errors.length) {
  console.error(`Supabase audit failed (${mode}):`);
  for (const error of errors) console.error(`- ${error}`);
  if (warnings.length) {
    console.error("\nWarnings:");
    for (const warning of warnings) console.error(`- ${warning}`);
  }
  process.exit(1);
}

console.log(`Supabase audit passed (${mode}).`);
for (const warning of warnings) console.warn(`Warning: ${warning}`);
for (const item of info) console.log(`Info: ${item}`);
