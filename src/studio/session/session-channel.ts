import type { StudioSessionEvent } from "../types/auth";

export interface StudioSessionChannel {
  publish(event: StudioSessionEvent): void;
  subscribe(listener: (event: StudioSessionEvent) => void): () => void;
  close(): void;
}

export function createStudioSessionChannel(channelName = "ts-studio:session"): StudioSessionChannel {
  if (typeof window === "undefined" || typeof BroadcastChannel === "undefined") {
    return {
      publish() {},
      subscribe() {
        return () => {};
      },
      close() {},
    };
  }

  const channel = new BroadcastChannel(channelName);
  const listeners = new Set<(event: StudioSessionEvent) => void>();

  channel.onmessage = (message) => {
    const event = message.data as StudioSessionEvent;
    for (const listener of listeners) listener(event);
  };

  return {
    publish(event) {
      channel.postMessage(event);
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    close() {
      listeners.clear();
      channel.close();
    },
  };
}
