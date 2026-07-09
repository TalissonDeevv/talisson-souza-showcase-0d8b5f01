import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];

function abs(relativePath) {
  return path.join(root, relativePath);
}

function read(relativePath) {
  return readFileSync(abs(relativePath), "utf8");
}

function fail(message) {
  errors.push(message);
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
  "src/studio/types/auth.ts",
  "src/studio/auth/events.ts",
  "src/studio/auth/policy.ts",
  "src/studio/contexts/StudioAuthContext.ts",
  "src/studio/contexts/StudioPermissionContext.ts",
  "src/studio/contexts/StudioSessionContext.ts",
  "src/studio/providers/StudioAuthProvider.tsx",
  "src/studio/providers/StudioPermissionProvider.tsx",
  "src/studio/providers/StudioSessionProvider.tsx",
  "src/studio/hooks/useStudioAuth.ts",
  "src/studio/hooks/useStudioSession.ts",
  "src/studio/hooks/useStudioPermissions.ts",
  "src/studio/hooks/useRequirePermission.ts",
  "src/studio/hooks/useRequireRole.ts",
  "src/studio/hooks/useStudioUser.ts",
  "src/studio/guards/AuthGuard.tsx",
  "src/studio/guards/RoleGuard.tsx",
  "src/studio/guards/PermissionGuard.tsx",
  "src/studio/guards/ModuleGuard.tsx",
  "src/studio/services/auth-service.ts",
  "src/studio/services/permission-service.ts",
  "src/studio/services/session-service.ts",
  "src/studio/services/audit-service.ts",
  "src/studio/services/studio-auth-client.ts",
  "src/studio/session/session-channel.ts",
  "src/studio/api/queries.ts",
  "src/studio/api/commands.ts",
  "src/studio/api/mutations.ts",
  "src/studio/auth/__tests__/auth-contracts.ts",
  "docs/ts-studio-auth.md",
  "docs/ts-studio-session.md",
  "docs/ts-studio-auth-report.md",
  "supabase/projects/main/migrations/20260709150000_ts_studio_auth_foundation.sql",
];

for (const file of requiredFiles) {
  if (!existsSync(abs(file))) fail(`Missing Studio auth artifact: ${file}`);
}

const app = read("src/App.tsx");
if (/studio/i.test(app)) {
  fail("Public App.tsx imports or references Studio routes.");
}

const packageJson = read("package.json");
if (!/"audit:auth"\s*:\s*"node scripts\/audit-studio-auth\.mjs"/.test(packageJson)) {
  fail("package.json missing audit:auth script.");
}
if (!/"audit"[\s\S]*audit:auth/.test(packageJson)) {
  fail("package.json audit script does not include audit:auth.");
}

const studioSource = walk("src/studio")
  .map((file) => readFileSync(file, "utf8"))
  .join("\n");

for (const forbidden of [
  /supabase-comments/i,
  /custom:discord/i,
  /discord-post-login/i,
  /discord-refresh-profile/i,
]) {
  if (forbidden.test(studioSource)) {
    fail(`Studio auth appears to reference comments/Discord auth boundary: ${forbidden}`);
  }
}

for (const forbidden of [
  /https:\/\/[a-z0-9]{20}\.supabase\.co/i,
  /sb_publishable_[A-Za-z0-9_-]+/,
  /SUPABASE_SERVICE_ROLE_KEY/,
]) {
  if (forbidden.test(studioSource)) {
    fail(`Studio auth source contains forbidden secret or hardcoded Supabase reference: ${forbidden}`);
  }
}

const authService = read("src/studio/services/auth-service.ts");
for (const expected of [
  "signInWithPassword",
  "signOut",
  "refreshSession",
  "getSession",
  "onAuthStateChange",
  "validateStudioOrigin",
  "createStudioReplayStore",
  "createLoginRateLimiter",
  "csrf",
]) {
  if (!authService.includes(expected)) {
    fail(`AuthService missing expected capability: ${expected}`);
  }
}

const sessionService = read("src/studio/services/session-service.ts");
for (const expected of ["idleTimeoutMs", "absoluteTimeoutMs", "refreshLeewayMs", "isExpired", "needsRefresh"]) {
  if (!sessionService.includes(expected)) {
    fail(`SessionService missing expected capability: ${expected}`);
  }
}

const permissionService = read("src/studio/services/permission-service.ts");
for (const expected of ["getStudioRolePermissionKeys", "isStudioPermissionKey", "getStudioModule", "permission_denied"]) {
  if (!permissionService.includes(expected)) {
    fail(`PermissionService missing registry/RBAC capability: ${expected}`);
  }
}

const authEvents = read("src/studio/auth/events.ts");
for (const action of [
  "login",
  "logout",
  "login_failed",
  "permission_denied",
  "session_expired",
  "role_changed",
  "password_changed",
  "admin_created",
  "admin_removed",
]) {
  if (!authEvents.includes(`"${action}"`)) {
    fail(`Missing auth audit action: ${action}`);
  }
}

const migration = read("supabase/projects/main/migrations/20260709150000_ts_studio_auth_foundation.sql");
for (const table of [
  "studio.admin_sessions",
  "studio.admin_login_attempts",
  "studio.admin_session_nonces",
  "studio.admin_auth_rate_limits",
]) {
  if (!migration.includes(`CREATE TABLE IF NOT EXISTS ${table}`)) {
    fail(`Auth migration missing table: ${table}`);
  }
  if (!new RegExp(`ALTER TABLE ${table.replace(".", "\\.")} ENABLE ROW LEVEL SECURITY`, "i").test(migration)) {
    fail(`Auth migration missing RLS enable for: ${table}`);
  }
  if (!new RegExp(`ALTER TABLE ${table.replace(".", "\\.")} FORCE ROW LEVEL SECURITY`, "i").test(migration)) {
    fail(`Auth migration missing RLS force for: ${table}`);
  }
  if (!new RegExp(`ON ${table.replace(".", "\\.")}[\\s\\S]*?TO service_role`, "i").test(migration)) {
    fail(`Auth migration missing service_role policy for: ${table}`);
  }
}

for (const expected of ["CREATE INDEX", "REVOKE ALL PRIVILEGES", "GRANT ALL PRIVILEGES", "service_role_manage_audit_events"]) {
  if (!migration.includes(expected)) {
    fail(`Auth migration missing expected hardening statement: ${expected}`);
  }
}

const testContracts = read("src/studio/auth/__tests__/auth-contracts.ts");
for (const scenario of ["login", "logout", "expiration", "refresh", "guards", "rbac", "permissions", "providers"]) {
  if (!testContracts.includes(scenario)) {
    fail(`Auth contract tests missing scenario: ${scenario}`);
  }
}

if (errors.length) {
  console.error("TS Studio auth audit failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("TS Studio auth audit passed.");
