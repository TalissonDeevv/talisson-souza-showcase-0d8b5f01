export type StudioIntegrationKey =
  | "supabase-main"
  | "comments-project"
  | "vercel"
  | "discord"
  | "resend"
  | "github"
  | "cloudflare"
  | "hostinger"
  | "mercado-pago"
  | "google"
  | "spotify";

export interface StudioIntegrationStatus {
  key: StudioIntegrationKey;
  configured: boolean;
  environment: string;
  lastCheckedAt?: string;
  warnings: readonly string[];
}

export interface StudioIntegrationRegistry {
  setStatus(status: StudioIntegrationStatus): void;
  getStatus(key: StudioIntegrationKey): StudioIntegrationStatus | null;
  list(): readonly StudioIntegrationStatus[];
}

export function createStudioIntegrationRegistry(): StudioIntegrationRegistry {
  const statuses = new Map<StudioIntegrationKey, StudioIntegrationStatus>();

  return {
    setStatus(status) {
      statuses.set(status.key, status);
    },
    getStatus(key) {
      return statuses.get(key) ?? null;
    },
    list() {
      return [...statuses.values()];
    },
  };
}
