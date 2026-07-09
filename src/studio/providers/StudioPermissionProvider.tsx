import { useCallback, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { StudioPermissionContext } from "../contexts/StudioPermissionContext";
import { StudioAuthContext } from "../contexts/StudioAuthContext";
import { createStudioPermissionService, type StudioPermissionService } from "../services/permission-service";
import type { StudioRoleKey } from "../types/core";
import type { StudioResolvedAccess } from "../types/auth";

interface StudioPermissionProviderProps extends PropsWithChildren {
  permissionService?: StudioPermissionService;
}

export function StudioPermissionProvider({
  children,
  permissionService: providedPermissionService,
}: StudioPermissionProviderProps) {
  const permissionService = useMemo(
    () => providedPermissionService ?? createStudioPermissionService(),
    [providedPermissionService],
  );
  const authValue = useContext(StudioAuthContext);
  const [loading, setLoading] = useState(false);
  const [access, setAccess] = useState<StudioResolvedAccess | null>(null);
  const userId = authValue?.supabaseSession?.user.id;

  const reload = useCallback(async () => {
    if (!userId) {
      setAccess(null);
      return;
    }

    setLoading(true);
    try {
      setAccess(await permissionService.resolveUserAccess(userId));
    } finally {
      setLoading(false);
    }
  }, [permissionService, userId]);

  useEffect(() => {
    void reload();
  }, [reload]);

  const value = useMemo(() => ({
    loading,
    access,
    roles: access?.roles ?? [],
    permissions: access?.permissions ?? [],
    can(permissionKey: string) {
      return permissionService.can(access, permissionKey);
    },
    requirePermission(permissionKey: string) {
      return permissionService.requirePermission(access, permissionKey);
    },
    requireRole(roleKey: StudioRoleKey) {
      return permissionService.requireRole(access, roleKey);
    },
    canAccessModule(moduleKey: string) {
      return permissionService.canAccessModule(access, moduleKey);
    },
    reload,
  }), [access, loading, permissionService, reload]);

  return (
    <StudioPermissionContext.Provider value={value}>
      {children}
    </StudioPermissionContext.Provider>
  );
}
