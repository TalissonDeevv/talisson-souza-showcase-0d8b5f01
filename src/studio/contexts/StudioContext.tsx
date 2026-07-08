import { createContext, useContext } from "react";
import { STUDIO_MODULES } from "../modules/registry";
import { STUDIO_DEFAULT_CONFIG } from "../config/environments";
import type { StudioConfig, StudioModuleDefinition, StudioUserSession } from "../types/core";

export interface StudioContextValue {
  config: StudioConfig;
  session: StudioUserSession | null;
  modules: readonly StudioModuleDefinition[];
}

export const StudioContext = createContext<StudioContextValue>({
  config: STUDIO_DEFAULT_CONFIG,
  session: null,
  modules: STUDIO_MODULES,
});

export function useStudioContext() {
  return useContext(StudioContext);
}
