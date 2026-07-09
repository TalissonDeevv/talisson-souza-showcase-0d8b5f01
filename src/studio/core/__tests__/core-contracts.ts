import { createStudioCoreApi } from "../api/core-api";
import { createMemoryStudioCache } from "../cache/cache";
import { createStudioConfigService } from "../config/config-service";
import { createStudioApiResponse } from "../contracts/response";
import { createMemoryStudioEventBus } from "../events/event-bus";
import { createStudioFeatureFlagRegistry } from "../feature-flags/feature-flags";
import { createMemoryStudioJobQueue } from "../jobs/jobs";
import { createStudioDefaultMiddlewareStack } from "../middleware";
import { createStudioPluginRegistry } from "../plugins/plugin-system";
import { createMemoryStudioRepositories } from "../repositories";
import { listStudioCoreApiRoutes } from "../router/routes";
import { createStudioCoreServices } from "../services";
import { createSupabaseStudioStorageEngine } from "../storage/storage-engine";
import type { StudioUserSession } from "../../types/core";

export async function runStudioCoreContractTest() {
  const repositories = createMemoryStudioRepositories();
  const eventBus = createMemoryStudioEventBus();
  const cache = createMemoryStudioCache();
  const config = createStudioConfigService({
    environment: "development",
    publicBaseUrl: "http://localhost:5173",
    apiBasePath: "/api/studio",
    allowedOrigins: ["http://localhost:5173"],
    requestTimeoutMs: 30_000,
    sessionTimeoutMs: 60 * 60_000,
    rateLimit: { maxRequests: 120, windowMs: 60_000 },
    storage: {
      provider: "supabase",
      defaultBucket: "blog-images",
      maxUploadBytes: 5 * 1024 * 1024,
      allowedMimeTypes: ["image/png", "image/jpeg", "image/webp"],
    },
    featureFlags: {
      "studio.dashboard": true,
      "studio.analytics": true,
      "studio.media": true,
    },
    policies: {
      requireExplicitEnvironment: true,
      forbidProductionFallback: true,
    },
  });
  const services = createStudioCoreServices({
    repositories,
    eventBus,
    cache,
    config,
    jobQueue: createMemoryStudioJobQueue(),
    plugins: createStudioPluginRegistry(),
    featureFlags: createStudioFeatureFlagRegistry(),
    storage: createSupabaseStudioStorageEngine(),
  });
  const session: StudioUserSession = {
    sessionId: "test-session",
    userId: "admin-user",
    email: "admin@example.com",
    roles: ["admin"],
    environment: "development",
    issuedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 60_000).toISOString(),
  };

  const api = createStudioCoreApi({
    middlewares: createStudioDefaultMiddlewareStack({
      allowedOrigins: ["http://localhost:5173"],
      resolveSession: async () => session,
      auditRecord: async (event) => {
        await services.audit.record({
          action: event.action,
          moduleKey: event.moduleKey ?? "system",
          actorId: event.actorId,
          requestId: event.requestId,
        });
      },
    }),
    handlers: {
      "dashboard.summary": async (_request, context) => ({
        ...createStudioApiResponse(context.requestId, { ok: true }),
        status: 200,
        headers: {},
      }),
    },
  });

  const response = await api.router.handle({
    method: "GET",
    path: "/api/studio/dashboard",
    origin: "http://localhost:5173",
    headers: {},
  });

  return {
    response,
    routeCount: listStudioCoreApiRoutes().length,
    auditEvents: await services.audit.list(),
  };
}
