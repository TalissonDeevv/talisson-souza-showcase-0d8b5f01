import type { StudioSessionPolicy } from "../types/auth";

export const STUDIO_DEFAULT_SESSION_POLICY: StudioSessionPolicy = {
  idleTimeoutMs: 30 * 60 * 1000,
  absoluteTimeoutMs: 8 * 60 * 60 * 1000,
  refreshLeewayMs: 5 * 60 * 1000,
  recoveryLeewayMs: 30 * 1000,
  rateLimitWindowMs: 15 * 60 * 1000,
  maxLoginAttempts: 5,
};

export function mergeStudioSessionPolicy(
  overrides: Partial<StudioSessionPolicy> = {},
): StudioSessionPolicy {
  return {
    ...STUDIO_DEFAULT_SESSION_POLICY,
    ...overrides,
  };
}
