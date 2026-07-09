import type { StudioCoreEndpointDefinition, StudioHttpMethod } from "../types/http";

function route(
  key: string,
  method: StudioHttpMethod,
  path: string,
  moduleKey: string,
  description: string,
  options: Partial<Pick<
    StudioCoreEndpointDefinition,
    "requiredPermission" | "auditAction" | "authRequired" | "csrfRequired" | "idempotencyRequired" | "featureFlag"
  >> = {},
): StudioCoreEndpointDefinition {
  const isUnsafeMethod = !["GET", "OPTIONS"].includes(method);

  return {
    key,
    method,
    path,
    moduleKey,
    description,
    status: "planned",
    authRequired: options.authRequired ?? true,
    csrfRequired: options.csrfRequired ?? isUnsafeMethod,
    idempotencyRequired: options.idempotencyRequired ?? ["POST", "PUT", "PATCH", "DELETE"].includes(method),
    requiredPermission: options.requiredPermission,
    auditAction: options.auditAction,
    featureFlag: options.featureFlag,
  };
}

export const STUDIO_CORE_API_ROUTES = [
  route("auth.login", "POST", "/api/studio/auth/login", "users", "Administrative login.", {
    authRequired: false,
    csrfRequired: true,
    idempotencyRequired: false,
    auditAction: "login.success",
  }),
  route("auth.logout", "POST", "/api/studio/auth/logout", "users", "Administrative logout.", {
    requiredPermission: "dashboard.read",
    auditAction: "logout",
  }),
  route("auth.session", "GET", "/api/studio/auth/session", "users", "Reads the current administrative session.", {
    requiredPermission: "dashboard.read",
  }),
  route("users.list", "GET", "/api/studio/users", "users", "Lists Studio users.", {
    requiredPermission: "users.read",
  }),
  route("users.create", "POST", "/api/studio/users", "users", "Creates a Studio user.", {
    requiredPermission: "users.manage",
    auditAction: "admin_created",
  }),
  route("modules.list", "GET", "/api/studio/modules", "system", "Lists registered Studio modules.", {
    requiredPermission: "system.read",
  }),
  route("dashboard.summary", "GET", "/api/studio/dashboard", "dashboard", "Reads dashboard summary.", {
    requiredPermission: "dashboard.read",
    featureFlag: "studio.dashboard",
  }),
  route("articles.list", "GET", "/api/studio/articles", "articles", "Lists article content.", {
    requiredPermission: "articles.read",
  }),
  route("articles.create", "POST", "/api/studio/articles", "articles", "Creates an article draft.", {
    requiredPermission: "articles.write",
    auditAction: "article.created",
  }),
  route("authors.list", "GET", "/api/studio/authors", "authors", "Lists authors.", {
    requiredPermission: "authors.read",
  }),
  route("categories.list", "GET", "/api/studio/categories", "taxonomy", "Lists categories.", {
    requiredPermission: "taxonomy.read",
  }),
  route("taxonomy.list", "GET", "/api/studio/taxonomy", "taxonomy", "Lists taxonomy entities.", {
    requiredPermission: "taxonomy.read",
  }),
  route("media.list", "GET", "/api/studio/media", "media", "Lists media assets.", {
    requiredPermission: "media.read",
    featureFlag: "studio.media",
  }),
  route("media.upload", "POST", "/api/studio/media", "media", "Registers a media upload.", {
    requiredPermission: "media.write",
    auditAction: "media.uploaded",
    featureFlag: "studio.media",
  }),
  route("files.list", "GET", "/api/studio/files", "media", "Lists file assets.", {
    requiredPermission: "media.read",
    featureFlag: "studio.media",
  }),
  route("settings.read", "GET", "/api/studio/settings", "system", "Reads Studio settings.", {
    requiredPermission: "system.read",
  }),
  route("settings.update", "PATCH", "/api/studio/settings", "system", "Updates Studio settings.", {
    requiredPermission: "system.manage",
    auditAction: "settings.changed",
  }),
  route("seo.read", "GET", "/api/studio/seo", "seo", "Reads SEO governance data.", {
    requiredPermission: "seo.read",
  }),
  route("forms.list", "GET", "/api/studio/forms", "forms", "Lists form submissions.", {
    requiredPermission: "forms.read",
  }),
  route("newsletter.list", "GET", "/api/studio/newsletter", "newsletter", "Lists newsletter records.", {
    requiredPermission: "newsletter.read",
    featureFlag: "studio.newsletter",
  }),
  route("comments.list", "GET", "/api/studio/comments", "discord", "Lists comments for moderation.", {
    requiredPermission: "discord.read",
  }),
  route("discord.status", "GET", "/api/studio/discord", "discord", "Reads Discord integration status.", {
    requiredPermission: "discord.read",
  }),
  route("analytics.summary", "GET", "/api/studio/analytics", "analytics", "Reads analytics summary.", {
    requiredPermission: "analytics.read",
    featureFlag: "studio.analytics",
  }),
  route("monitoring.status", "GET", "/api/studio/monitoring", "monitoring", "Reads monitoring status.", {
    requiredPermission: "monitoring.read",
    featureFlag: "studio.monitoring",
  }),
  route("plugins.list", "GET", "/api/studio/plugins", "system", "Lists registered Studio plugins.", {
    requiredPermission: "system.read",
    featureFlag: "studio.plugins",
  }),
  route("plugins.install", "POST", "/api/studio/plugins", "system", "Registers a Studio plugin manifest.", {
    requiredPermission: "system.manage",
    auditAction: "plugin.installed",
    featureFlag: "studio.plugins",
  }),
  route("system.status", "GET", "/api/studio/system", "system", "Reads platform status.", {
    requiredPermission: "system.read",
  }),
  route("logs.list", "GET", "/api/studio/logs", "monitoring", "Lists structured operational logs.", {
    requiredPermission: "monitoring.read",
  }),
  route("audit.list", "GET", "/api/studio/audit", "security", "Lists audit events.", {
    requiredPermission: "security.read",
  }),
] as const satisfies readonly StudioCoreEndpointDefinition[];

export function listStudioCoreApiRoutes() {
  return STUDIO_CORE_API_ROUTES;
}

export function findStudioCoreApiRoute(method: StudioHttpMethod, path: string) {
  return STUDIO_CORE_API_ROUTES.find((routeDefinition) => (
    routeDefinition.method === method && routeDefinition.path === path
  )) ?? null;
}
