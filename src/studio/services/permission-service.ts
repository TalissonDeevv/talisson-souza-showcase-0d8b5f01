import type { StudioRoleKey } from "../types/core";
import type { StudioPermissionDecision, StudioResolvedAccess } from "../types/auth";
import { getStudioModule } from "../modules/registry";
import {
  getStudioRolePermissionKeys,
  hasStudioPermission,
  isStudioPermissionKey,
  isStudioRoleKey,
} from "../permissions/rbac";
import type { StudioAuditService } from "./audit-service";

export interface StudioPermissionRepository {
  listUserRoles(userId: string): Promise<readonly StudioRoleKey[]>;
}

export interface StudioPermissionService {
  resolveUserAccess(userId: string): Promise<StudioResolvedAccess>;
  can(userAccess: StudioResolvedAccess | null, permissionKey: string): StudioPermissionDecision;
  requirePermission(userAccess: StudioResolvedAccess | null, permissionKey: string): StudioPermissionDecision;
  requireRole(userAccess: StudioResolvedAccess | null, roleKey: StudioRoleKey): StudioPermissionDecision;
  canAccessModule(userAccess: StudioResolvedAccess | null, moduleKey: string): StudioPermissionDecision;
}

export function createStaticStudioPermissionRepository(
  rolesByUserId: Record<string, readonly StudioRoleKey[]> = {},
): StudioPermissionRepository {
  return {
    async listUserRoles(userId) {
      return rolesByUserId[userId] ?? [];
    },
  };
}

function permissionsForRoles(roles: readonly StudioRoleKey[]) {
  if (roles.includes("owner")) {
    return ["*"];
  }

  return [...new Set(roles.flatMap((roleKey) => getStudioRolePermissionKeys(roleKey)))]
    .filter((permissionKey) => permissionKey === "*" || isStudioPermissionKey(permissionKey))
    .sort();
}

export function createStudioPermissionService(options: {
  repository?: StudioPermissionRepository;
  auditService?: StudioAuditService;
} = {}): StudioPermissionService {
  const repository = options.repository ?? createStaticStudioPermissionRepository();

  function can(userAccess: StudioResolvedAccess | null, permissionKey: string): StudioPermissionDecision {
    if (!userAccess) {
      return { allowed: false, reason: "missing_session", missingPermission: permissionKey };
    }

    if (!isStudioPermissionKey(permissionKey)) {
      return { allowed: false, reason: "unknown_permission", missingPermission: permissionKey };
    }

    const allowed = userAccess.permissions.includes("*")
      || userAccess.permissions.includes(permissionKey)
      || hasStudioPermission(userAccess.roles, permissionKey);

    return allowed
      ? { allowed: true, reason: "allowed" }
      : { allowed: false, reason: "missing_permission", missingPermission: permissionKey };
  }

  function requirePermission(
    userAccess: StudioResolvedAccess | null,
    permissionKey: string,
  ): StudioPermissionDecision {
    const decision = can(userAccess, permissionKey);

    if (!decision.allowed) {
      void options.auditService?.record({
        action: "permission_denied",
        moduleKey: permissionKey.split(".")[0] ?? "security",
        actorId: userAccess?.userId,
        metadata: {
          permissionKey,
          reason: decision.reason,
        },
      });
    }

    return decision;
  }

  function requireRole(
    userAccess: StudioResolvedAccess | null,
    roleKey: StudioRoleKey,
  ): StudioPermissionDecision {
    if (!userAccess) return { allowed: false, reason: "missing_session", missingRole: roleKey };

    const allowed = userAccess.roles.includes(roleKey)
      || userAccess.roles.some((candidateRole) => candidateRole === "owner");

    return allowed
      ? { allowed: true, reason: "allowed" }
      : { allowed: false, reason: "missing_role", missingRole: roleKey };
  }

  return {
    async resolveUserAccess(userId) {
      const rawRoles = await repository.listUserRoles(userId);
      const roles = rawRoles.filter((role): role is StudioRoleKey => isStudioRoleKey(role));

      return {
        userId,
        roles,
        permissions: permissionsForRoles(roles),
        resolvedAt: new Date().toISOString(),
      };
    },
    can,
    requirePermission,
    requireRole,
    canAccessModule(userAccess, moduleKey) {
      const moduleDefinition = getStudioModule(moduleKey);
      if (!moduleDefinition) return { allowed: false, reason: "unknown_module" };

      return requirePermission(userAccess, `${moduleKey}.read`);
    },
  };
}
