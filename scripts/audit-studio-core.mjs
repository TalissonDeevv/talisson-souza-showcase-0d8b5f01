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

const requiredDirectories = [
  "src/studio/core/api",
  "src/studio/core/router",
  "src/studio/core/middleware",
  "src/studio/core/contracts",
  "src/studio/core/events",
  "src/studio/core/services",
  "src/studio/core/repositories",
  "src/studio/core/validators",
  "src/studio/core/errors",
  "src/studio/core/cache",
  "src/studio/core/jobs",
  "src/studio/core/storage",
  "src/studio/core/feature-flags",
  "src/studio/core/integrations",
  "src/studio/core/plugins",
  "src/studio/core/utils",
  "src/studio/core/types",
  "src/studio/core/config",
];

const requiredFiles = [
  "src/studio/core/index.ts",
  "src/studio/core/api/core-api.ts",
  "src/studio/core/router/routes.ts",
  "src/studio/core/router/router.ts",
  "src/studio/core/middleware/index.ts",
  "src/studio/core/contracts/response.ts",
  "src/studio/core/errors/api-error.ts",
  "src/studio/core/events/event-bus.ts",
  "src/studio/core/services/index.ts",
  "src/studio/core/repositories/index.ts",
  "src/studio/core/cache/cache.ts",
  "src/studio/core/jobs/jobs.ts",
  "src/studio/core/storage/storage-engine.ts",
  "src/studio/core/feature-flags/feature-flags.ts",
  "src/studio/core/plugins/plugin-system.ts",
  "src/studio/core/config/config-service.ts",
  "src/studio/core/__tests__/core-contracts.ts",
];

const requiredDocs = [
  "docs/ts-studio-core-api.md",
  "docs/ts-studio-backend.md",
  "docs/ts-studio-events.md",
  "docs/ts-studio-cache.md",
  "docs/ts-studio-storage.md",
  "docs/ts-studio-plugin-system.md",
  "docs/ts-studio-feature-flags.md",
  "docs/ts-studio-milestone-2-report.md",
];

for (const directory of requiredDirectories) {
  if (!existsSync(abs(directory))) fail(`Missing Core directory: ${directory}`);
}

for (const file of requiredFiles) {
  if (!existsSync(abs(file))) fail(`Missing Core file: ${file}`);
}

for (const doc of requiredDocs) {
  if (!existsSync(abs(doc))) fail(`Missing Core documentation: ${doc}`);
}

const coreFiles = walk("src/studio/core");
for (const file of coreFiles) {
  const content = readFileSync(file, "utf8");
  const relative = path.relative(root, file).replaceAll(path.sep, "/");

  if (/@supabase\/supabase-js|createClient\(|\.from\(|\.rpc\(/.test(content)) {
    fail(`Core file accesses Supabase directly instead of repositories/adapters: ${relative}`);
  }

  if (/from\s+["']@\/(components|pages|hooks|contexts|integrations|data|utils|lib)\//.test(content)) {
    fail(`Core file imports legacy app code: ${relative}`);
  }
}

if (existsSync(abs("src/App.tsx")) && /StudioCore|studio\/core/i.test(read("src/App.tsx"))) {
  fail("Public App.tsx references Studio Core API directly.");
}

const routes = read("src/studio/core/router/routes.ts");
for (const endpoint of [
  "/api/studio/auth",
  "/api/studio/users",
  "/api/studio/modules",
  "/api/studio/dashboard",
  "/api/studio/articles",
  "/api/studio/authors",
  "/api/studio/categories",
  "/api/studio/taxonomy",
  "/api/studio/media",
  "/api/studio/files",
  "/api/studio/settings",
  "/api/studio/seo",
  "/api/studio/forms",
  "/api/studio/newsletter",
  "/api/studio/comments",
  "/api/studio/discord",
  "/api/studio/analytics",
  "/api/studio/monitoring",
  "/api/studio/plugins",
  "/api/studio/system",
  "/api/studio/logs",
  "/api/studio/audit",
]) {
  if (!routes.includes(endpoint)) fail(`Core API route missing endpoint family: ${endpoint}`);
}

const middleware = read("src/studio/core/middleware/index.ts");
for (const name of [
  "createAuthMiddleware",
  "createSessionMiddleware",
  "createRbacMiddleware",
  "createPermissionMiddleware",
  "createModuleMiddleware",
  "createCsrfMiddleware",
  "createOriginMiddleware",
  "createRateLimitMiddleware",
  "createIdempotencyMiddleware",
  "createRequestIdMiddleware",
  "createValidationMiddleware",
  "createAuditMiddleware",
  "createErrorMiddleware",
  "createSecurityHeadersMiddleware",
]) {
  if (!middleware.includes(name)) fail(`Core middleware missing: ${name}`);
}

const contracts = read("src/studio/core/contracts/response.ts");
for (const token of [
  "StudioCoreApiResponse",
  "StudioCoreApiErrorPayload",
  "StudioCorePaginatedResponse",
  "StudioCoreValidationError",
  "success",
  "requestId",
  "timestamp",
  "version",
]) {
  if (!contracts.includes(token)) fail(`Core contract missing token: ${token}`);
}

const services = read("src/studio/core/services/index.ts");
for (const name of [
  "AuthService",
  "SessionService",
  "PermissionService",
  "RoleService",
  "UserService",
  "ModuleService",
  "SettingsService",
  "StorageService",
  "MediaService",
  "AuditService",
  "LogService",
  "AnalyticsService",
  "MonitoringService",
  "NotificationService",
  "EventService",
  "JobService",
  "PluginService",
  "FeatureFlagService",
  "ConfigService",
  "CacheService",
  "DiscordService",
  "SEOService",
  "NewsletterService",
  "FormService",
]) {
  if (!services.includes(name)) fail(`Core service missing: ${name}`);
}

const repositories = read("src/studio/core/repositories/index.ts");
for (const name of [
  "StudioUserRepository",
  "StudioSettingsRepository",
  "StudioArticleRepository",
  "StudioMediaRepository",
  "StudioCommentRepository",
  "StudioAuditRepository",
  "StudioAnalyticsRepository",
  "StudioRoleRepository",
  "StudioPermissionRepository",
  "StudioModuleRepository",
]) {
  if (!repositories.includes(name)) fail(`Core repository missing: ${name}`);
}

const events = read("src/studio/core/events/event-bus.ts");
for (const eventName of [
  "user.created",
  "user.updated",
  "user.deleted",
  "role.created",
  "role.updated",
  "permission.updated",
  "article.created",
  "article.updated",
  "article.deleted",
  "media.uploaded",
  "media.deleted",
  "settings.changed",
  "plugin.installed",
  "plugin.removed",
  "newsletter.sent",
  "login.success",
  "login.failed",
  "logout",
  "audit.created",
]) {
  if (!events.includes(eventName)) fail(`Core event missing: ${eventName}`);
}

const featureFlags = read("src/studio/core/feature-flags/feature-flags.ts");
for (const flag of [
  "studio.dashboard",
  "studio.analytics",
  "studio.media",
  "studio.plugins",
  "studio.newsletter",
  "studio.monitoring",
  "studio.experimental",
]) {
  if (!featureFlags.includes(flag)) fail(`Core feature flag missing: ${flag}`);
}

const packageJson = read("package.json");
if (!packageJson.includes("\"audit:core\"")) fail("package.json missing audit:core script.");
if (!packageJson.includes("npm run audit:core")) fail("npm run audit does not include audit:core.");

if (errors.length) {
  console.error("TS Studio Core audit failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("TS Studio Core audit passed.");
