import type { ReactNode } from "react";
import { useStudioPermissions } from "../hooks/useStudioPermissions";

interface PermissionGuardProps {
  permission: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export function PermissionGuard({ permission, children, fallback = null }: PermissionGuardProps) {
  const permissions = useStudioPermissions();

  if (!permissions.can(permission)) return fallback;

  return <>{children}</>;
}
