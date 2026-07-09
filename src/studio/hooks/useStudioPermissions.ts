import { useContext } from "react";
import { hasStudioPermission, highestStudioRole } from "../permissions/rbac";
import { useStudioContext } from "../contexts/StudioContext";
import { StudioPermissionContext } from "../contexts/StudioPermissionContext";

export function useStudioPermissions() {
  const permissionContext = useContext(StudioPermissionContext);
  const { session } = useStudioContext();

  if (permissionContext) {
    return {
      roles: permissionContext.roles,
      highestRole: highestStudioRole(permissionContext.roles),
      permissions: permissionContext.permissions,
      can(permissionKey: string) {
        return permissionContext.can(permissionKey).allowed;
      },
      requirePermission(permissionKey: string) {
        return permissionContext.requirePermission(permissionKey);
      },
      requireRole: permissionContext.requireRole,
      canAccessModule: permissionContext.canAccessModule,
    };
  }

  const roles = session?.roles ?? [];

  return {
    roles,
    highestRole: highestStudioRole(roles),
    permissions: session?.permissions ?? [],
    can(permissionKey: string) {
      return hasStudioPermission(roles, permissionKey);
    },
  };
}
