export const STUDIO_CORE_EVENT_NAMES = [
  "user.created",
  "user.updated",
  "user.deleted",
  "role.created",
  "role.updated",
  "permission.updated",
  "article.created",
  "article.updated",
  "article.deleted",
  "media.uploaded",
  "media.deleted",
  "settings.changed",
  "plugin.installed",
  "plugin.removed",
  "newsletter.sent",
  "login.success",
  "login.failed",
  "logout",
  "audit.created",
] as const;

export type StudioCoreEventName = typeof STUDIO_CORE_EVENT_NAMES[number];

export interface StudioCoreEvent<TPayload = Record<string, unknown>> {
  id: string;
  name: StudioCoreEventName;
  payload: TPayload;
  requestId?: string;
  actorId?: string;
  moduleKey?: string;
  createdAt: string;
}

export type StudioCoreEventHandler<TPayload = unknown> = (
  event: StudioCoreEvent<TPayload>,
) => void | Promise<void>;

export interface StudioEventBus {
  publish<TPayload = Record<string, unknown>>(event: Omit<StudioCoreEvent<TPayload>, "id" | "createdAt">): Promise<StudioCoreEvent<TPayload>>;
  subscribe<TPayload = Record<string, unknown>>(eventName: StudioCoreEventName, handler: StudioCoreEventHandler<TPayload>): () => void;
  history(): readonly StudioCoreEvent[];
}

function createEventId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `event-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function createMemoryStudioEventBus(): StudioEventBus {
  const handlers = new Map<StudioCoreEventName, Set<StudioCoreEventHandler<unknown>>>();
  const events: StudioCoreEvent[] = [];

  return {
    async publish<TPayload>(eventInput: Omit<StudioCoreEvent<TPayload>, "id" | "createdAt">) {
      const event: StudioCoreEvent<TPayload> = {
        ...eventInput,
        id: createEventId(),
        createdAt: new Date().toISOString(),
      };

      events.push(event as StudioCoreEvent);

      for (const handler of handlers.get(event.name) ?? []) {
        await handler(event as StudioCoreEvent<unknown>);
      }

      return event;
    },
    subscribe(eventName, handler) {
      const currentHandlers = handlers.get(eventName) ?? new Set<StudioCoreEventHandler<unknown>>();
      currentHandlers.add(handler as StudioCoreEventHandler<unknown>);
      handlers.set(eventName, currentHandlers);

      return () => {
        currentHandlers.delete(handler as StudioCoreEventHandler<unknown>);
      };
    },
    history() {
      return [...events];
    },
  };
}
