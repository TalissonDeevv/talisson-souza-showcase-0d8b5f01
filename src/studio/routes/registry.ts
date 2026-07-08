import { STUDIO_MODULES } from "../modules/registry";
import type { StudioRouteDefinition } from "../types/core";

export const STUDIO_BASE_PATH = "/studio";

export const STUDIO_ROUTES: readonly StudioRouteDefinition[] = STUDIO_MODULES.map((moduleDefinition) => ({
  path: moduleDefinition.route,
  label: moduleDefinition.name,
  moduleKey: moduleDefinition.key,
  requiredPermission: `${moduleDefinition.key}.read`,
  navigationGroup: moduleDefinition.area,
}));

export function getStudioRoute(path: string): StudioRouteDefinition | null {
  return STUDIO_ROUTES.find((route) => route.path === path) ?? null;
}

export function getStudioRoutesForModule(moduleKey: string): readonly StudioRouteDefinition[] {
  return STUDIO_ROUTES.filter((route) => route.moduleKey === moduleKey);
}
