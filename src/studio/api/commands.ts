import type { StudioApiOperation } from "../types/auth";

export const STUDIO_API_COMMANDS = [
  {
    key: "auth.login",
    kind: "command",
    moduleKey: "security",
    requiredPermission: "security.read",
    auditAction: "login",
  },
  {
    key: "auth.logout",
    kind: "command",
    moduleKey: "security",
    requiredPermission: "security.read",
    auditAction: "logout",
  },
  {
    key: "auth.session.refresh",
    kind: "command",
    moduleKey: "security",
    requiredPermission: "security.read",
  },
  {
    key: "auth.session.invalidate",
    kind: "command",
    moduleKey: "security",
    requiredPermission: "security.manage",
    auditAction: "session_expired",
  },
] as const satisfies readonly StudioApiOperation[];
