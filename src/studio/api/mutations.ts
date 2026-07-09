import type { StudioApiOperation } from "../types/auth";

export const STUDIO_API_MUTATIONS = [
  {
    key: "auth.admin.create",
    kind: "mutation",
    moduleKey: "users",
    requiredPermission: "users.manage",
    auditAction: "admin_created",
  },
  {
    key: "auth.admin.remove",
    kind: "mutation",
    moduleKey: "users",
    requiredPermission: "users.manage",
    auditAction: "admin_removed",
  },
  {
    key: "auth.role.change",
    kind: "mutation",
    moduleKey: "users",
    requiredPermission: "users.manage",
    auditAction: "role_changed",
  },
  {
    key: "auth.password.change",
    kind: "mutation",
    moduleKey: "security",
    requiredPermission: "security.manage",
    auditAction: "password_changed",
  },
] as const satisfies readonly StudioApiOperation[];
