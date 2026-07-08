import { hasStudioPermission, highestStudioRole } from "../permissions/rbac";
import { useStudioContext } from "../contexts/StudioContext";

export function useStudioPermissions() {
  const { session } = useStudioContext();
  const roles = session?.roles ?? [];

  return {
    roles,
    highestRole: highestStudioRole(roles),
    can(permissionKey: string) {
      return hasStudioPermission(roles, permissionKey);
    },
  };
}
