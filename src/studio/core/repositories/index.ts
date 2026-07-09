import { STUDIO_MODULES } from "../../modules/registry";
import { STUDIO_PERMISSIONS, STUDIO_ROLES } from "../../permissions/rbac";
import type {
  StudioAuditEvent,
  StudioModuleDefinition,
  StudioPermission,
  StudioRoleDefinition,
  StudioRoleKey,
} from "../../types/core";

export interface StudioUserRecord {
  id: string;
  email: string;
  displayName?: string;
  roles: readonly StudioRoleKey[];
  createdAt: string;
  updatedAt: string;
}

export interface StudioSettingsRecord {
  key: string;
  value: unknown;
  updatedAt: string;
}

export interface StudioArticleRecord {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "review" | "published" | "archived";
  updatedAt: string;
}

export interface StudioMediaRecord {
  id: string;
  bucket: string;
  path: string;
  contentType: string;
  size: number;
  updatedAt: string;
}

export interface StudioCommentRecord {
  id: string;
  articleSlug: string;
  authorId: string;
  content: string;
  status: "visible" | "hidden" | "removed";
  updatedAt: string;
}

export interface StudioAnalyticsRecord {
  key: string;
  value: number;
  measuredAt: string;
}

export interface StudioUserRepository {
  findById(userId: string): Promise<StudioUserRecord | null>;
  list(): Promise<readonly StudioUserRecord[]>;
  save(user: StudioUserRecord): Promise<void>;
}

export interface StudioSettingsRepository {
  get(key: string): Promise<StudioSettingsRecord | null>;
  set(record: StudioSettingsRecord): Promise<void>;
  list(): Promise<readonly StudioSettingsRecord[]>;
}

export interface StudioArticleRepository {
  list(): Promise<readonly StudioArticleRecord[]>;
  findById(id: string): Promise<StudioArticleRecord | null>;
}

export interface StudioMediaRepository {
  list(): Promise<readonly StudioMediaRecord[]>;
  save(record: StudioMediaRecord): Promise<void>;
}

export interface StudioCommentRepository {
  list(): Promise<readonly StudioCommentRecord[]>;
}

export interface StudioAuditRepository {
  append(event: StudioAuditEvent): Promise<void>;
  list(): Promise<readonly StudioAuditEvent[]>;
}

export interface StudioAnalyticsRepository {
  list(): Promise<readonly StudioAnalyticsRecord[]>;
}

export interface StudioRoleRepository {
  list(): Promise<readonly StudioRoleDefinition[]>;
  get(roleKey: StudioRoleKey): Promise<StudioRoleDefinition | null>;
}

export interface StudioPermissionRepository {
  list(): Promise<readonly StudioPermission[]>;
  has(permissionKey: string): Promise<boolean>;
}

export interface StudioModuleRepository {
  list(): Promise<readonly StudioModuleDefinition[]>;
  get(moduleKey: string): Promise<StudioModuleDefinition | null>;
}

export interface StudioCoreRepositories {
  users: StudioUserRepository;
  settings: StudioSettingsRepository;
  articles: StudioArticleRepository;
  media: StudioMediaRepository;
  comments: StudioCommentRepository;
  audit: StudioAuditRepository;
  analytics: StudioAnalyticsRepository;
  roles: StudioRoleRepository;
  permissions: StudioPermissionRepository;
  modules: StudioModuleRepository;
}

export function createMemoryStudioRepositories(): StudioCoreRepositories {
  const users = new Map<string, StudioUserRecord>();
  const settings = new Map<string, StudioSettingsRecord>();
  const articles = new Map<string, StudioArticleRecord>();
  const media = new Map<string, StudioMediaRecord>();
  const comments = new Map<string, StudioCommentRecord>();
  const auditEvents: StudioAuditEvent[] = [];
  const analytics = new Map<string, StudioAnalyticsRecord>();

  return {
    users: {
      async findById(userId) {
        return users.get(userId) ?? null;
      },
      async list() {
        return [...users.values()];
      },
      async save(user) {
        users.set(user.id, user);
      },
    },
    settings: {
      async get(key) {
        return settings.get(key) ?? null;
      },
      async set(record) {
        settings.set(record.key, record);
      },
      async list() {
        return [...settings.values()];
      },
    },
    articles: {
      async list() {
        return [...articles.values()];
      },
      async findById(id) {
        return articles.get(id) ?? null;
      },
    },
    media: {
      async list() {
        return [...media.values()];
      },
      async save(record) {
        media.set(record.id, record);
      },
    },
    comments: {
      async list() {
        return [...comments.values()];
      },
    },
    audit: {
      async append(event) {
        auditEvents.push(event);
      },
      async list() {
        return [...auditEvents];
      },
    },
    analytics: {
      async list() {
        return [...analytics.values()];
      },
    },
    roles: {
      async list() {
        return Object.values(STUDIO_ROLES);
      },
      async get(roleKey) {
        return STUDIO_ROLES[roleKey] ?? null;
      },
    },
    permissions: {
      async list() {
        return STUDIO_PERMISSIONS;
      },
      async has(permissionKey) {
        return STUDIO_PERMISSIONS.some((permission) => permission.key === permissionKey);
      },
    },
    modules: {
      async list() {
        return STUDIO_MODULES;
      },
      async get(moduleKey) {
        return STUDIO_MODULES.find((moduleDefinition) => moduleDefinition.key === moduleKey) ?? null;
      },
    },
  };
}
