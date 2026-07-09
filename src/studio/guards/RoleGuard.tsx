import type { ReactNode } from "react";
import type { StudioRoleKey } from "../types/core";
import { useStudioPermissions } from "../hooks/useStudioPermissions";

interface RoleGuardProps {
  role: StudioRoleKey;
  children: ReactNode;
  fallback?: ReactNode;
}

export function RoleGuard({ role, children, fallback = null }: RoleGuardProps) {
  const permissions = useStudioPermissions();
  const decision = "requireRole" in permissions
    ? permissions.requireRole(role)
    : { allowed: permissions.roles.includes(role) || permissions.roles.includes("owner") };

  if (!decision.allowed) return fallback;

  return <>{children}</>;
}
