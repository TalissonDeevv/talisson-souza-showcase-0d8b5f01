import { canAccessStudioModule } from "../permissions/rbac";
import { useStudioContext } from "../contexts/StudioContext";

export function useStudioModules() {
  const { modules, session } = useStudioContext();
  const roles = session?.roles ?? [];

  return {
    modules,
    visibleModules: modules.filter((moduleDefinition) =>
      canAccessStudioModule(roles, moduleDefinition.key),
    ),
  };
}
