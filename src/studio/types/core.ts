export type StudioEnvironment = "development" | "preview" | "staging" | "production";

export type StudioModuleStatus = "planned" | "foundation" | "active" | "deprecated";

export type StudioModuleArea =
  | "core"
  | "content"
  | "community"
  | "growth"
  | "operations"
  | "platform"
  | "security"
  | "experience";

export type StudioRoleKey =
  | "owner"
  | "admin"
  | "editor"
  | "moderator"
  | "analyst"
  | "viewer";

export type StudioPermissionAction =
  | "read"
  | "write"
  | "publish"
  | "moderate"
  | "manage"
  | "audit";

export interface StudioPermission {
  key: string;
  moduleKey: string;
  action: StudioPermissionAction;
  description: string;
}

export interface StudioRoleDefinition {
  key: StudioRoleKey;
  name: string;
  rank: number;
  description: string;
  permissions: readonly string[];
}

export interface StudioModuleDependency {
  moduleKey: string;
  reason: string;
}

export interface StudioModuleDefinition {
  key: string;
  name: string;
  area: StudioModuleArea;
  status: StudioModuleStatus;
  summary: string;
  route: string;
  ownerRole: StudioRoleKey;
  permissions: readonly StudioPermissionAction[];
  dependencies: readonly StudioModuleDependency[];
  dataEntities: readonly string[];
  integrations: readonly string[];
  risks: readonly string[];
}

export interface StudioRouteDefinition {
  path: string;
  label: string;
  moduleKey: string;
  requiredPermission: string;
  navigationGroup: StudioModuleArea;
}

export interface StudioUserSession {
  sessionId?: string;
  userId: string;
  email?: string;
  displayName?: string;
  roles: readonly StudioRoleKey[];
  permissions?: readonly string[];
  environment: StudioEnvironment;
  issuedAt: string;
  expiresAt?: string;
  lastSeenAt?: string;
}

export interface StudioAuditEvent {
  action: string;
  moduleKey: string;
  entityType?: string;
  entityId?: string;
  actorId?: string;
  requestId?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

export interface StudioApiEndpoint {
  key: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  moduleKey: string;
  requiredPermission: string;
  description: string;
  auditAction?: string;
}

export interface StudioConfig {
  environment: StudioEnvironment;
  basePath: string;
  defaultLocale: "pt-BR" | "en-US";
  supportedLocales: readonly ["pt-BR", "en-US"];
  enablePlugins: boolean;
  requireExplicitEnvironment: boolean;
}
