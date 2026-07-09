export const STUDIO_CORE_FEATURE_FLAGS = [
  "studio.dashboard",
  "studio.analytics",
  "studio.media",
  "studio.plugins",
  "studio.newsletter",
  "studio.monitoring",
  "studio.experimental",
] as const;

export type StudioFeatureFlagKey = typeof STUDIO_CORE_FEATURE_FLAGS[number];

export interface StudioFeatureFlag {
  key: StudioFeatureFlagKey;
  enabled: boolean;
  description: string;
  environment?: string;
}

export interface StudioFeatureFlagRegistry {
  isEnabled(key: StudioFeatureFlagKey): boolean;
  setFlag(flag: StudioFeatureFlag): void;
  list(): readonly StudioFeatureFlag[];
}

export function createStudioFeatureFlagRegistry(
  initialFlags: readonly StudioFeatureFlag[] = [],
): StudioFeatureFlagRegistry {
  const flags = new Map<StudioFeatureFlagKey, StudioFeatureFlag>();

  for (const key of STUDIO_CORE_FEATURE_FLAGS) {
    flags.set(key, {
      key,
      enabled: key !== "studio.experimental" && key !== "studio.plugins",
      description: `${key} feature flag.`,
    });
  }

  for (const flag of initialFlags) flags.set(flag.key, flag);

  return {
    isEnabled(key) {
      return flags.get(key)?.enabled ?? false;
    },
    setFlag(flag) {
      flags.set(flag.key, flag);
    },
    list() {
      return [...flags.values()];
    },
  };
}
