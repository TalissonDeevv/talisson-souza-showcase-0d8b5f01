import type { StudioRoleKey, StudioUserSession } from "../types/core";

export interface StudioSessionStore {
  getSession(): StudioUserSession | null;
  setSession(session: StudioUserSession | null): void;
  hasRole(role: StudioRoleKey): boolean;
}

export function createMemoryStudioSessionStore(initialSession: StudioUserSession | null = null): StudioSessionStore {
  let currentSession = initialSession;

  return {
    getSession() {
      return currentSession;
    },
    setSession(session) {
      currentSession = session;
    },
    hasRole(role) {
      return currentSession?.roles.includes(role) ?? false;
    },
  };
}
