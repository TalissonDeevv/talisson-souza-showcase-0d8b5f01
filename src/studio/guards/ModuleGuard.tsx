import type { ReactNode } from "react";
import { useStudioPermissions } from "../hooks/useStudioPermissions";

interface ModuleGuardProps {
  moduleKey: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export function ModuleGuard({ moduleKey, children, fallback = null }: ModuleGuardProps) {
  const permissions = useStudioPermissions();
  const canAccess = "canAccessModule" in permissions
    ? permissions.canAccessModule(moduleKey).allowed
    : permissions.can(`${moduleKey}.read`);

  if (!canAccess) return fallback;

  return <>{children}</>;
}
