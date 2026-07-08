import { hasStudioPermission } from "../permissions/rbac";
import type { StudioRouteDefinition, StudioUserSession } from "../types/core";

export interface StudioAccessDecision {
  allowed: boolean;
  reason: "allowed" | "missing_session" | "missing_permission";
}

export function canAccessStudioRoute(
  session: StudioUserSession | null,
  route: StudioRouteDefinition,
): StudioAccessDecision {
  if (!session) {
    return { allowed: false, reason: "missing_session" };
  }

  if (!hasStudioPermission(session.roles, route.requiredPermission)) {
    return { allowed: false, reason: "missing_permission" };
  }

  return { allowed: true, reason: "allowed" };
}
