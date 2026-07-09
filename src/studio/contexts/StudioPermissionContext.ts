import { createContext } from "react";
import type { StudioRoleKey } from "../types/core";
import type { StudioPermissionDecision, StudioResolvedAccess } from "../types/auth";

export interface StudioPermissionContextValue {
  loading: boolean;
  access: StudioResolvedAccess | null;
  roles: readonly StudioRoleKey[];
  permissions: readonly string[];
  can(permissionKey: string): StudioPermissionDecision;
  requirePermission(permissionKey: string): StudioPermissionDecision;
  requireRole(roleKey: StudioRoleKey): StudioPermissionDecision;
  canAccessModule(moduleKey: string): StudioPermissionDecision;
  reload(): Promise<void>;
}

export const StudioPermissionContext = createContext<StudioPermissionContextValue | null>(null);
