import { createStudioAuditEvent, redactAuditMetadata, type StudioAuditSink } from "./audit-log";
import type { StudioAuditEvent } from "../types/core";
import type { StudioAuthAuditAction } from "../types/auth";
import { sanitizeStudioMetadata } from "../utils/security";

const AUDIT_QUEUE_KEY = "ts-studio:audit-queue";

export interface StudioAuditRecordInput {
  action: StudioAuthAuditAction | string;
  moduleKey: string;
  actorId?: string;
  entityType?: string;
  entityId?: string;
  requestId?: string;
  metadata?: Record<string, unknown>;
}

export interface StudioAuditService {
  record(input: StudioAuditRecordInput): Promise<void>;
  flush(): Promise<void>;
  pending(): readonly StudioAuditEvent[];
}

function readQueue(): StudioAuditEvent[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.sessionStorage.getItem(AUDIT_QUEUE_KEY);
    return raw ? JSON.parse(raw) as StudioAuditEvent[] : [];
  } catch {
    return [];
  }
}

function writeQueue(events: readonly StudioAuditEvent[]) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(AUDIT_QUEUE_KEY, JSON.stringify(events));
}

export function createStudioAuditService(sink?: StudioAuditSink): StudioAuditService {
  let memoryQueue = readQueue();

  async function enqueue(event: StudioAuditEvent) {
    memoryQueue = [...memoryQueue, event];
    writeQueue(memoryQueue);
  }

  return {
    async record(input) {
      const event = createStudioAuditEvent({
        action: input.action,
        moduleKey: input.moduleKey,
        actorId: input.actorId,
        entityType: input.entityType,
        entityId: input.entityId,
        requestId: input.requestId,
        metadata: redactAuditMetadata(sanitizeStudioMetadata(input.metadata)),
      });

      if (!sink) {
        await enqueue(event);
        return;
      }

      try {
        await sink.append(event);
      } catch {
        await enqueue(event);
      }
    },
    async flush() {
      if (!sink || !memoryQueue.length) return;

      const remaining: StudioAuditEvent[] = [];
      for (const event of memoryQueue) {
        try {
          await sink.append(event);
        } catch {
          remaining.push(event);
        }
      }

      memoryQueue = remaining;
      writeQueue(memoryQueue);
    },
    pending() {
      return [...memoryQueue];
    },
  };
}
