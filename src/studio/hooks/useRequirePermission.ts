import { useContext } from "react";
import { StudioPermissionContext } from "../contexts/StudioPermissionContext";

export function useRequirePermission(permissionKey: string) {
  const context = useContext(StudioPermissionContext);

  if (!context) {
    throw new Error("useRequirePermission must be used inside StudioPermissionProvider.");
  }

  return context.requirePermission(permissionKey);
}
