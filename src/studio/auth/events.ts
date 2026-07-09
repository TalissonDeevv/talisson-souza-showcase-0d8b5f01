import type { StudioAuthAuditAction } from "../types/auth";

export const STUDIO_AUTH_AUDIT_ACTIONS = [
  "login",
  "logout",
  "login_failed",
  "permission_denied",
  "session_expired",
  "role_changed",
  "password_changed",
  "admin_created",
  "admin_removed",
] as const satisfies readonly StudioAuthAuditAction[];

export function isStudioAuthAuditAction(value: string): value is StudioAuthAuditAction {
  return STUDIO_AUTH_AUDIT_ACTIONS.includes(value as StudioAuthAuditAction);
}
