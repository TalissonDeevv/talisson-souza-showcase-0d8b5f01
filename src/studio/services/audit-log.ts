import type { StudioAuditEvent } from "../types/core";

const REDACTED = "[redacted]";
const SENSITIVE_KEY_PATTERN = /(token|secret|password|authorization|service_role|provider_token)/i;

export function redactAuditMetadata(metadata: Record<string, unknown> = {}) {
  return Object.fromEntries(
    Object.entries(metadata).map(([key, value]) => [
      key,
      SENSITIVE_KEY_PATTERN.test(key) ? REDACTED : value,
    ]),
  );
}

export function createStudioAuditEvent(
  event: Omit<StudioAuditEvent, "createdAt">,
): StudioAuditEvent {
  return {
    ...event,
    metadata: redactAuditMetadata(event.metadata),
    createdAt: new Date().toISOString(),
  };
}

export interface StudioAuditSink {
  append(event: StudioAuditEvent): Promise<void>;
}

export function createMemoryAuditSink() {
  const events: StudioAuditEvent[] = [];

  return {
    async append(event: StudioAuditEvent) {
      events.push(event);
    },
    list() {
      return [...events];
    },
  };
}
