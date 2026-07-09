import type { Session, User } from "@supabase/supabase-js";
import type { StudioEnvironment, StudioRoleKey, StudioUserSession } from "./core";

export type StudioAuthStatus =
  | "idle"
  | "loading"
  | "authenticated"
  | "unauthenticated"
  | "expired"
  | "error";

export type StudioAuthAuditAction =
  | "login"
  | "logout"
  | "login_failed"
  | "permission_denied"
  | "session_expired"
  | "role_changed"
  | "password_changed"
  | "admin_created"
  | "admin_removed";

export interface StudioAdminUser {
  id: string;
  email?: string;
  displayName?: string;
  roles: readonly StudioRoleKey[];
  permissions: readonly string[];
}

export interface StudioSessionPolicy {
  idleTimeoutMs: number;
  absoluteTimeoutMs: number;
  refreshLeewayMs: number;
  recoveryLeewayMs: number;
  rateLimitWindowMs: number;
  maxLoginAttempts: number;
}

export interface StudioAuthRequestMetadata {
  requestId: string;
  origin: string;
  csrfToken: string;
  userAgent?: string;
}

export interface StudioLoginCredentials extends StudioAuthRequestMetadata {
  email: string;
  password: string;
}

export interface StudioLogoutRequest {
  requestId: string;
  reason?: "user" | "expired" | "invalidated";
}

export interface StudioAuthSuccess {
  ok: true;
  user: User;
  session: Session;
}

export interface StudioAuthFailure {
  ok: false;
  code:
    | "invalid_credentials"
    | "csrf_invalid"
    | "origin_invalid"
    | "rate_limited"
    | "replay_detected"
    | "provider_error";
  message: string;
  retryAfterMs?: number;
}

export type StudioAuthResult = StudioAuthSuccess | StudioAuthFailure;

export interface StudioSessionSnapshot {
  status: StudioAuthStatus;
  session: StudioUserSession | null;
  supabaseSession: Session | null;
  user: StudioAdminUser | null;
  recoveredAt?: string;
  expiresAt?: string;
  lastError?: string;
}

export interface StudioResolvedAccess {
  userId: string;
  roles: readonly StudioRoleKey[];
  permissions: readonly string[];
  resolvedAt: string;
}

export interface StudioPermissionDecision {
  allowed: boolean;
  reason:
    | "allowed"
    | "missing_session"
    | "missing_role"
    | "missing_permission"
    | "unknown_permission"
    | "unknown_module"
    | "session_expired";
  missingPermission?: string;
  missingRole?: StudioRoleKey;
}

export interface StudioSessionEvent {
  type: "login" | "logout" | "refresh" | "expired" | "invalidated";
  requestId: string;
  userId?: string;
  createdAt: string;
}

export interface StudioRouteGuardResult {
  allowed: boolean;
  redirectTo?: string;
  decision: StudioPermissionDecision;
}

export interface StudioApiOperation<TPayload = Record<string, unknown>> {
  key: string;
  kind: "query" | "command" | "mutation";
  moduleKey: string;
  requiredPermission: string;
  auditAction?: StudioAuthAuditAction | string;
  payload?: TPayload;
}
