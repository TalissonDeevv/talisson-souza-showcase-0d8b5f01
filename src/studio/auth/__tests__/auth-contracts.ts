import { hasStudioPermission } from "../../permissions/rbac";
import { createStudioSessionService } from "../../services/session-service";
import type { StudioAuthAuditAction } from "../../types/auth";

export const studioAuthContractScenarios = [
  "login",
  "logout",
  "expiration",
  "refresh",
  "guards",
  "rbac",
  "permissions",
  "providers",
] as const;

export const requiredAuthAuditActions = [
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

export function runStudioAuthContractChecks() {
  const sessionService = createStudioSessionService({
    policy: {
      idleTimeoutMs: 1,
      absoluteTimeoutMs: 1,
      refreshLeewayMs: 1,
    },
  });

  return {
    editorCanReadContent: hasStudioPermission(["editor"], "content.read"),
    moderatorCannotPublishArticle: !hasStudioPermission(["moderator"], "articles.publish"),
    ownerCanManageSystem: hasStudioPermission(["owner"], "system.manage"),
    nullSessionExpires: sessionService.isExpired(null),
    scenarios: studioAuthContractScenarios,
    auditActions: requiredAuthAuditActions,
  };
}
