import { useContext } from "react";
import { StudioPermissionContext } from "../contexts/StudioPermissionContext";
import type { StudioRoleKey } from "../types/core";

export function useRequireRole(roleKey: StudioRoleKey) {
  const context = useContext(StudioPermissionContext);

  if (!context) {
    throw new Error("useRequireRole must be used inside StudioPermissionProvider.");
  }

  return context.requireRole(roleKey);
}
