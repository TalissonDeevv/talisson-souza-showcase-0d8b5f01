import type { StudioFeatureFlagKey, StudioFeatureFlagRegistry } from "../feature-flags/feature-flags";
import type { StudioConfigService } from "../config/config-service";
import type { StudioCoreRepositories, StudioMediaRecord, StudioUserRecord } from "../repositories";
import type { StudioEventBus } from "../events/event-bus";
import type { StudioCache } from "../cache/cache";
import type { StudioJobQueue } from "../jobs/jobs";
import type { StudioPluginRegistry } from "../plugins/plugin-system";
import type { StudioStorageEngine, StudioUploadIntent } from "../storage/storage-engine";
import type { StudioAuditEvent, StudioRoleKey, StudioUserSession } from "../../types/core";

export interface AuthService {
  getUser(userId: string): Promise<StudioUserRecord | null>;
  requireAdministrativeSession(session: StudioUserSession | null): Promise<StudioUserSession>;
}

export interface SessionService {
  isExpired(session: StudioUserSession): boolean;
  touch(session: StudioUserSession): StudioUserSession;
}

export interface PermissionService {
  hasPermission(userId: string, permissionKey: string): Promise<boolean>;
  listPermissions(): Promise<readonly string[]>;
}

export interface RoleService {
  listRoles(): Promise<readonly string[]>;
  assignRole(userId: string, role: StudioRoleKey): Promise<void>;
}

export interface UserService {
  listUsers(): Promise<readonly StudioUserRecord[]>;
  createUser(user: StudioUserRecord): Promise<void>;
}

export interface ModuleService {
  listModules(): Promise<readonly string[]>;
}

export interface SettingsService {
  get(key: string): Promise<unknown>;
  set(key: string, value: unknown): Promise<void>;
}

export interface StorageService {
  createUploadIntent(input: Omit<StudioUploadIntent, "provider" | "expiresAt">): Promise<StudioUploadIntent>;
  registerMedia(record: StudioMediaRecord): Promise<void>;
}

export interface MediaService {
  listMedia(): Promise<readonly StudioMediaRecord[]>;
}

export interface AuditService {
  record(event: Omit<StudioAuditEvent, "createdAt">): Promise<void>;
  list(): Promise<readonly StudioAuditEvent[]>;
}

export interface LogService {
  info(message: string, metadata?: Record<string, unknown>): Promise<void>;
  error(message: string, metadata?: Record<string, unknown>): Promise<void>;
}

export interface AnalyticsService {
  listMetrics(): Promise<readonly { key: string; value: number; measuredAt: string }[]>;
}

export interface MonitoringService {
  health(): Promise<{ status: "ok"; checkedAt: string }>;
}

export interface NotificationService {
  notify(channel: string, payload: Record<string, unknown>): Promise<void>;
}

export interface EventService {
  publishAuditCreated(event: StudioAuditEvent): Promise<void>;
}

export interface JobService {
  enqueue(name: string, payload?: Record<string, unknown>): Promise<string>;
}

export interface PluginService {
  listPlugins(): readonly { key: string; name: string; version: string; description: string }[];
}

export interface FeatureFlagService {
  isEnabled(key: string): boolean;
}

export interface CacheService {
  get<TValue = unknown>(key: string): Promise<TValue | null>;
  set<TValue = unknown>(key: string, value: TValue, ttlMs?: number): Promise<void>;
}

export interface DiscordService {
  getStatus(): Promise<{ configured: boolean }>;
}

export interface SEOService {
  validateMetadata(metadata: Record<string, unknown>): Promise<boolean>;
}

export interface NewsletterService {
  markSent(campaignId: string): Promise<void>;
}

export interface FormService {
  listSubmissions(): Promise<readonly Record<string, unknown>[]>;
}

export interface StudioCoreServices {
  auth: AuthService;
  session: SessionService;
  permissions: PermissionService;
  roles: RoleService;
  users: UserService;
  modules: ModuleService;
  settings: SettingsService;
  storage: StorageService;
  media: MediaService;
  audit: AuditService;
  logs: LogService;
  analytics: AnalyticsService;
  monitoring: MonitoringService;
  notifications: NotificationService;
  events: EventService;
  jobs: JobService;
  plugins: PluginService;
  featureFlags: FeatureFlagService;
  config: StudioConfigService;
  cache: CacheService;
  discord: DiscordService;
  seo: SEOService;
  newsletter: NewsletterService;
  forms: FormService;
}

export interface StudioCoreServicesOptions {
  repositories: StudioCoreRepositories;
  eventBus: StudioEventBus;
  cache: StudioCache;
  jobQueue: StudioJobQueue;
  plugins: StudioPluginRegistry;
  featureFlags: StudioFeatureFlagRegistry;
  config: StudioConfigService;
  storage: StudioStorageEngine;
}

export function createStudioCoreServices(options: StudioCoreServicesOptions): StudioCoreServices {
  const { repositories, eventBus, cache, jobQueue, plugins, featureFlags, config, storage } = options;

  return {
    auth: {
      async getUser(userId) {
        return repositories.users.findById(userId);
      },
      async requireAdministrativeSession(session) {
        if (!session) throw new Error("Administrative session is required.");
        if (session.expiresAt && new Date(session.expiresAt).getTime() <= Date.now()) {
          throw new Error("Administrative session expired.");
        }
        return session;
      },
    },
    session: {
      isExpired(session) {
        return Boolean(session.expiresAt && new Date(session.expiresAt).getTime() <= Date.now());
      },
      touch(session) {
        return {
          ...session,
          lastSeenAt: new Date().toISOString(),
        };
      },
    },
    permissions: {
      async hasPermission(userId, permissionKey) {
        const user = await repositories.users.findById(userId);
        if (!user) return false;
        const roles = await repositories.roles.list();
        return user.roles.some((roleKey) => {
          const role = roles.find((candidate) => candidate.key === roleKey);
          return Boolean(role?.permissions.includes("*") || role?.permissions.includes(permissionKey));
        });
      },
      async listPermissions() {
        return (await repositories.permissions.list()).map((permission) => permission.key);
      },
    },
    roles: {
      async listRoles() {
        return (await repositories.roles.list()).map((role) => role.key);
      },
      async assignRole(userId, role) {
        const user = await repositories.users.findById(userId);
        if (!user) return;
        await repositories.users.save({
          ...user,
          roles: [...new Set([...user.roles, role])],
          updatedAt: new Date().toISOString(),
        });
        await eventBus.publish({
          name: "role.updated",
          payload: { userId, role },
        });
      },
    },
    users: {
      async listUsers() {
        return repositories.users.list();
      },
      async createUser(user) {
        await repositories.users.save(user);
        await eventBus.publish({
          name: "user.created",
          payload: { userId: user.id },
        });
      },
    },
    modules: {
      async listModules() {
        return (await repositories.modules.list()).map((moduleDefinition) => moduleDefinition.key);
      },
    },
    settings: {
      async get(key) {
        return (await repositories.settings.get(key))?.value ?? null;
      },
      async set(key, value) {
        await repositories.settings.set({ key, value, updatedAt: new Date().toISOString() });
        await eventBus.publish({
          name: "settings.changed",
          payload: { key },
        });
      },
    },
    storage: {
      async createUploadIntent(input) {
        return storage.createUploadIntent(input);
      },
      async registerMedia(record) {
        const valid = await storage.validateObject(record);
        if (!valid) throw new Error("Invalid media object.");
        await repositories.media.save(record);
        await eventBus.publish({
          name: "media.uploaded",
          payload: { mediaId: record.id, path: record.path },
        });
      },
    },
    media: {
      async listMedia() {
        return repositories.media.list();
      },
    },
    audit: {
      async record(event) {
        const auditEvent: StudioAuditEvent = {
          ...event,
          createdAt: new Date().toISOString(),
        };
        await repositories.audit.append(auditEvent);
        await eventBus.publish({
          name: "audit.created",
          payload: auditEvent,
          requestId: event.requestId,
          actorId: event.actorId,
          moduleKey: event.moduleKey,
        });
      },
      async list() {
        return repositories.audit.list();
      },
    },
    logs: {
      async info(message, metadata = {}) {
        await cache.set(`log:info:${Date.now()}`, { message, metadata }, 24 * 60 * 60_000);
      },
      async error(message, metadata = {}) {
        await cache.set(`log:error:${Date.now()}`, { message, metadata }, 24 * 60 * 60_000);
      },
    },
    analytics: {
      async listMetrics() {
        return repositories.analytics.list();
      },
    },
    monitoring: {
      async health() {
        return { status: "ok", checkedAt: new Date().toISOString() };
      },
    },
    notifications: {
      async notify(channel, payload) {
        await cache.set(`notification:${channel}:${Date.now()}`, payload, 60 * 60_000);
      },
    },
    events: {
      async publishAuditCreated(event) {
        await eventBus.publish({
          name: "audit.created",
          payload: event,
          requestId: event.requestId,
          actorId: event.actorId,
          moduleKey: event.moduleKey,
        });
      },
    },
    jobs: {
      async enqueue(name, payload = {}) {
        const job = await jobQueue.enqueue({
          name,
          payload,
          maxAttempts: 3,
          runAt: new Date().toISOString(),
        });
        return job.id;
      },
    },
    plugins: {
      listPlugins() {
        return plugins.listPlugins();
      },
    },
    featureFlags: {
      isEnabled(key) {
        return featureFlags.isEnabled(key as StudioFeatureFlagKey);
      },
    },
    config,
    cache: {
      get(key) {
        return cache.get(key);
      },
      set(key, value, ttlMs) {
        return cache.set(key, value, ttlMs);
      },
    },
    discord: {
      async getStatus() {
        return { configured: false };
      },
    },
    seo: {
      async validateMetadata(metadata) {
        return typeof metadata.title === "string" && typeof metadata.description === "string";
      },
    },
    newsletter: {
      async markSent(campaignId) {
        await eventBus.publish({
          name: "newsletter.sent",
          payload: { campaignId },
        });
      },
    },
    forms: {
      async listSubmissions() {
        return [];
      },
    },
  };
}
