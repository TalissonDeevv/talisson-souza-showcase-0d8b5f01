import type { PropsWithChildren } from "react";
import { StudioContext } from "../contexts/StudioContext";
import { STUDIO_MODULES } from "../modules/registry";
import { createStudioConfig } from "../config/environments";
import type { StudioConfig, StudioUserSession } from "../types/core";

interface StudioProviderProps extends PropsWithChildren {
  config?: Partial<StudioConfig>;
  session?: StudioUserSession | null;
}

export function StudioProvider({
  children,
  config,
  session = null,
}: StudioProviderProps) {
  return (
    <StudioContext.Provider
      value={{
        config: createStudioConfig(config),
        session,
        modules: STUDIO_MODULES,
      }}
    >
      {children}
    </StudioContext.Provider>
  );
}
