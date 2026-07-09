import { canAccessStudioModule, hasStudioPermission } from "../../permissions/rbac";
import { getStudioModule } from "../../modules/registry";
import type { StudioUserSession } from "../../types/core";
import { createForbiddenError, createUnauthorizedError, createValidationError, normalizeStudioApiError } from "../errors/api-error";
import type { StudioRequestValidator } from "../validators/validator";
import type {
  StudioActor,
  StudioCoreMiddleware,
  StudioCoreRequest,
  StudioCoreResponse,
} from "../types/http";

const unsafeMethods = new Set(["POST", "PUT", "PATCH", "DELETE"]);

function lowerCaseHeaders(headers: Record<string, string | undefined>) {
  return Object.fromEntries(
    Object.entries(headers).map(([key, value]) => [key.toLowerCase(), value]),
  ) as Record<string, string | undefined>;
}

function getHeader(request: StudioCoreRequest, headerName: string) {
  const headers = lowerCaseHeaders(request.headers);
  return headers[headerName.toLowerCase()];
}

export function createErrorMiddleware(): StudioCoreMiddleware {
  return async (request, context, next) => {
    try {
      return await next();
    } catch (error) {
      const apiError = normalizeStudioApiError(error);
      return {
        success: false,
        error: apiError.toPayload(),
        requestId: context.requestId,
        timestamp: new Date().toISOString(),
        version: "2026-07-09.m2",
        status: apiError.status,
        headers: {},
      };
    }
  };
}

export function createRequestIdMiddleware(): StudioCoreMiddleware {
  return async (_request, context, next) => {
    context.responseHeaders["x-request-id"] = context.requestId;
    return next();
  };
}

export function createSecurityHeadersMiddleware(): StudioCoreMiddleware {
  return async (_request, context, next) => {
    context.responseHeaders["x-content-type-options"] = "nosniff";
    context.responseHeaders["x-frame-options"] = "DENY";
    context.responseHeaders["referrer-policy"] = "strict-origin-when-cross-origin";
    context.responseHeaders["permissions-policy"] = "camera=(), microphone=(), geolocation=()";
    context.responseHeaders["cache-control"] = "no-store";
    return next();
  };
}

export function createOriginMiddleware(allowedOrigins: readonly string[]): StudioCoreMiddleware {
  const allowed = new Set(allowedOrigins);

  return async (request, _context, next) => {
    const origin = request.origin ?? getHeader(request, "origin");
    if (origin && allowed.size > 0 && !allowed.has(origin)) {
      throw createForbiddenError("Request origin is not allowed for Studio API.");
    }

    return next();
  };
}

export function createCsrfMiddleware(): StudioCoreMiddleware {
  return async (request, context, next) => {
    if (!context.route?.csrfRequired || !unsafeMethods.has(request.method)) return next();

    const csrfToken = getHeader(request, "x-studio-csrf");
    const sessionToken = context.session?.sessionId;
    if (!csrfToken || (sessionToken && csrfToken !== sessionToken)) {
      throw createForbiddenError("Invalid Studio CSRF token.");
    }

    return next();
  };
}

export interface StudioSessionMiddlewareOptions {
  resolveSession?: (request: StudioCoreRequest) => Promise<StudioUserSession | null>;
}

export function createSessionMiddleware(options: StudioSessionMiddlewareOptions = {}): StudioCoreMiddleware {
  return async (request, context, next) => {
    if (!context.route?.authRequired) return next();

    const session = await options.resolveSession?.(request);
    if (!session) throw createUnauthorizedError("Studio session is missing or expired.");

    if (session.expiresAt && new Date(session.expiresAt).getTime() <= Date.now()) {
      throw createUnauthorizedError("Studio session expired.");
    }

    context.session = session;
    return next();
  };
}

export interface StudioAuthMiddlewareOptions {
  resolveActor?: (request: StudioCoreRequest, session?: StudioUserSession) => Promise<StudioActor | null>;
}

export function createAuthMiddleware(options: StudioAuthMiddlewareOptions = {}): StudioCoreMiddleware {
  return async (request, context, next) => {
    if (!context.route?.authRequired) return next();

    const actor = await options.resolveActor?.(request, context.session) ?? (
      context.session
        ? {
            id: context.session.userId,
            email: context.session.email,
            roles: context.session.roles,
            permissions: context.session.permissions ?? [],
          }
        : null
    );

    if (!actor) throw createUnauthorizedError();

    context.actor = actor;
    return next();
  };
}

export function createRbacMiddleware(): StudioCoreMiddleware {
  return async (_request, context, next) => {
    const requiredPermission = context.route?.requiredPermission;
    if (!context.route?.authRequired || !requiredPermission) return next();
    if (!context.actor) throw createUnauthorizedError();

    const allowedByRole = hasStudioPermission(context.actor.roles, requiredPermission);
    const allowedByExplicitPermission = context.actor.permissions.includes(requiredPermission);
    if (!allowedByRole && !allowedByExplicitPermission) {
      throw createForbiddenError(`Missing Studio permission: ${requiredPermission}.`);
    }

    return next();
  };
}

export function createPermissionMiddleware(): StudioCoreMiddleware {
  return async (_request, context, next) => {
    const permission = context.route?.requiredPermission;
    if (!permission || !context.actor) return next();

    context.state.permissionChecked = permission;
    return next();
  };
}

export function createModuleMiddleware(): StudioCoreMiddleware {
  return async (_request, context, next) => {
    const moduleKey = context.route?.moduleKey;
    if (!moduleKey || !context.actor) return next();

    const moduleDefinition = getStudioModule(moduleKey);
    if (!moduleDefinition) throw createForbiddenError(`Unknown Studio module: ${moduleKey}.`);
    if (!canAccessStudioModule(context.actor.roles, moduleKey) && context.route?.requiredPermission) {
      throw createForbiddenError(`Actor cannot access Studio module: ${moduleKey}.`);
    }

    context.state.moduleChecked = moduleKey;
    return next();
  };
}

export interface StudioRateLimitOptions {
  maxRequests: number;
  windowMs: number;
}

export function createRateLimitMiddleware(options: StudioRateLimitOptions): StudioCoreMiddleware {
  const buckets = new Map<string, { count: number; resetAt: number }>();

  return async (request, _context, next) => {
    const key = `${request.ipAddress ?? "unknown"}:${request.path}`;
    const now = Date.now();
    const bucket = buckets.get(key);

    if (!bucket || bucket.resetAt <= now) {
      buckets.set(key, { count: 1, resetAt: now + options.windowMs });
      return next();
    }

    if (bucket.count >= options.maxRequests) {
      throw createForbiddenError("Studio API rate limit exceeded.");
    }

    bucket.count += 1;
    return next();
  };
}

export function createIdempotencyMiddleware(): StudioCoreMiddleware {
  const seenKeys = new Set<string>();

  return async (request, context, next) => {
    if (!context.route?.idempotencyRequired) return next();

    const idempotencyKey = getHeader(request, "idempotency-key");
    if (!idempotencyKey) throw createForbiddenError("Idempotency key is required for this Studio operation.");

    const replayKey = `${request.method}:${request.path}:${idempotencyKey}`;
    if (seenKeys.has(replayKey)) {
      throw createForbiddenError("Replay protection rejected a duplicated Studio request.");
    }

    seenKeys.add(replayKey);
    return next();
  };
}

export function createValidationMiddleware(
  validators: Record<string, StudioRequestValidator> = {},
): StudioCoreMiddleware {
  return async (request, context, next) => {
    const routeKey = context.route?.key;
    const validator = routeKey ? validators[routeKey] : undefined;
    if (!validator) return next();

    const result = validator(request.body);
    if (!result.valid) {
      throw createValidationError({ errors: result.errors });
    }

    return next();
  };
}

export interface StudioAuditMiddlewareOptions {
  record?: (event: {
    action: string;
    requestId: string;
    actorId?: string;
    moduleKey?: string;
    status: number;
    durationMs: number;
  }) => void | Promise<void>;
}

export function createAuditMiddleware(options: StudioAuditMiddlewareOptions = {}): StudioCoreMiddleware {
  return async (_request, context, next) => {
    const startedAt = Date.now();
    const response = await next();
    const action = context.route?.auditAction ?? `${context.route?.key ?? "unknown"}.request`;

    await options.record?.({
      action,
      requestId: context.requestId,
      actorId: context.actor?.id,
      moduleKey: context.route?.moduleKey,
      status: response.status,
      durationMs: Date.now() - startedAt,
    });

    return response;
  };
}

export function createStudioDefaultMiddlewareStack(options: {
  allowedOrigins?: readonly string[];
  resolveSession?: StudioSessionMiddlewareOptions["resolveSession"];
  resolveActor?: StudioAuthMiddlewareOptions["resolveActor"];
  validators?: Record<string, StudioRequestValidator>;
  auditRecord?: StudioAuditMiddlewareOptions["record"];
  rateLimit?: StudioRateLimitOptions;
} = {}): readonly StudioCoreMiddleware[] {
  return [
    createErrorMiddleware(),
    createRequestIdMiddleware(),
    createSecurityHeadersMiddleware(),
    createOriginMiddleware(options.allowedOrigins ?? []),
    createSessionMiddleware({ resolveSession: options.resolveSession }),
    createAuthMiddleware({ resolveActor: options.resolveActor }),
    createModuleMiddleware(),
    createRbacMiddleware(),
    createPermissionMiddleware(),
    createRateLimitMiddleware(options.rateLimit ?? { maxRequests: 120, windowMs: 60_000 }),
    createCsrfMiddleware(),
    createIdempotencyMiddleware(),
    createValidationMiddleware(options.validators),
    createAuditMiddleware({ record: options.auditRecord }),
  ];
}
