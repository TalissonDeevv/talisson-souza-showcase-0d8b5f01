import type { StudioEnvironment } from "../../types/core";

export interface StudioCoreConfig {
  environment: StudioEnvironment;
  publicBaseUrl: string;
  apiBasePath: string;
  allowedOrigins: readonly string[];
  requestTimeoutMs: number;
  sessionTimeoutMs: number;
  rateLimit: {
    maxRequests: number;
    windowMs: number;
  };
  storage: {
    provider: "supabase" | "s3" | "r2" | "bunny" | "minio";
    defaultBucket: string;
    maxUploadBytes: number;
    allowedMimeTypes: readonly string[];
  };
  featureFlags: Record<string, boolean>;
  policies: {
    requireExplicitEnvironment: boolean;
    forbidProductionFallback: boolean;
  };
}

export interface StudioConfigService {
  getConfig(): StudioCoreConfig;
  getFeatureFlag(key: string): boolean;
  assertReady(): void;
}

export function createStudioConfigService(config: StudioCoreConfig): StudioConfigService {
  return {
    getConfig() {
      return config;
    },
    getFeatureFlag(key) {
      return config.featureFlags[key] ?? false;
    },
    assertReady() {
      if (config.policies.requireExplicitEnvironment && !config.environment) {
        throw new Error("Studio environment must be explicit.");
      }
      if (config.policies.forbidProductionFallback && config.environment !== "production") {
        const pointsToProduction = config.publicBaseUrl.includes("talissonsouza.com.br");
        if (pointsToProduction) {
          throw new Error("Preview or staging cannot fallback to production resources.");
        }
      }
    },
  };
}
