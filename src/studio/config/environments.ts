import type { StudioConfig, StudioEnvironment } from "../types/core";

export const STUDIO_ENVIRONMENTS = [
  "development",
  "preview",
  "staging",
  "production",
] as const satisfies readonly StudioEnvironment[];

export const STUDIO_DEFAULT_CONFIG: StudioConfig = {
  environment: "development",
  basePath: "/studio",
  defaultLocale: "pt-BR",
  supportedLocales: ["pt-BR", "en-US"],
  enablePlugins: true,
  requireExplicitEnvironment: true,
};

export function isStudioEnvironment(value: string): value is StudioEnvironment {
  return STUDIO_ENVIRONMENTS.includes(value as StudioEnvironment);
}

export function resolveStudioEnvironment(value: string | undefined): StudioEnvironment {
  if (!value) {
    throw new Error("TS Studio environment must be explicit. No production fallback is allowed.");
  }

  if (!isStudioEnvironment(value)) {
    throw new Error(`Invalid TS Studio environment: ${value}`);
  }

  return value;
}

export function createStudioConfig(overrides: Partial<StudioConfig> = {}): StudioConfig {
  return {
    ...STUDIO_DEFAULT_CONFIG,
    ...overrides,
  };
}
