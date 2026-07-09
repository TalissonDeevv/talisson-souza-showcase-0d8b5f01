import { hasStudioPermission } from "../permissions/rbac";
import type { StudioRouteDefinition, StudioUserSession } from "../types/core";
import type { StudioPermissionDecision } from "../types/auth";

export interface StudioAccessDecision {
  allowed: boolean;
  reason: StudioPermissionDecision["reason"];
}

export function isStudioUserSessionExpired(session: StudioUserSession | null) {
  if (!session) return true;
  if (!session.expiresAt) return false;
  return new Date(session.expiresAt).getTime() <= Date.now();
}

export function canAccessStudioRoute(
  session: StudioUserSession | null,
  route: StudioRouteDefinition,
): StudioAccessDecision {
  if (!session) {
    return { allowed: false, reason: "missing_session" };
  }

  if (isStudioUserSessionExpired(session)) {
    return { allowed: false, reason: "session_expired" };
  }

  if (!hasStudioPermission(session.roles, route.requiredPermission)) {
    return { allowed: false, reason: "missing_permission" };
  }

  return { allowed: true, reason: "allowed" };
}
