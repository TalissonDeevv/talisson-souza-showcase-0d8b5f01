import type { Session } from "@supabase/supabase-js";
import type { StudioEnvironment, StudioRoleKey, StudioUserSession } from "../types/core";
import type { StudioSessionEvent, StudioSessionPolicy } from "../types/auth";
import { STUDIO_DEFAULT_SESSION_POLICY } from "../auth/policy";
import { createStudioNonce } from "../utils/security";
import { createStudioSessionChannel, type StudioSessionChannel } from "../session/session-channel";

export interface StudioSessionService {
  createSession(input: {
    supabaseSession: Session;
    roles: readonly StudioRoleKey[];
    permissions: readonly string[];
    environment: StudioEnvironment;
  }): StudioUserSession;
  isExpired(session: StudioUserSession | null): boolean;
  needsRefresh(session: StudioUserSession | null): boolean;
  markSeen(session: StudioUserSession): StudioUserSession;
  publish(event: Omit<StudioSessionEvent, "createdAt">): void;
  subscribe(listener: (event: StudioSessionEvent) => void): () => void;
  close(): void;
}

function fromUnixSeconds(value: number | undefined) {
  return value ? new Date(value * 1000).toISOString() : undefined;
}

export function createStudioSessionService(options: {
  policy?: Partial<StudioSessionPolicy>;
  channel?: StudioSessionChannel;
} = {}): StudioSessionService {
  const policy = { ...STUDIO_DEFAULT_SESSION_POLICY, ...options.policy };
  const channel = options.channel ?? createStudioSessionChannel();

  return {
    createSession({ supabaseSession, roles, permissions, environment }) {
      const now = Date.now();
      const expiresAt = fromUnixSeconds(supabaseSession.expires_at)
        ?? new Date(now + policy.absoluteTimeoutMs).toISOString();

      return {
        sessionId: createStudioNonce("studio_session"),
        userId: supabaseSession.user.id,
        email: supabaseSession.user.email,
        displayName: supabaseSession.user.user_metadata?.full_name
          ?? supabaseSession.user.user_metadata?.name,
        roles,
        permissions,
        environment,
        issuedAt: new Date(now).toISOString(),
        expiresAt,
        lastSeenAt: new Date(now).toISOString(),
      };
    },
    isExpired(session) {
      if (!session) return true;

      const now = Date.now();
      const expiresAt = session.expiresAt ? new Date(session.expiresAt).getTime() : 0;
      const issuedAt = new Date(session.issuedAt).getTime();
      const lastSeenAt = session.lastSeenAt ? new Date(session.lastSeenAt).getTime() : issuedAt;

      return expiresAt <= now
        || issuedAt + policy.absoluteTimeoutMs <= now
        || lastSeenAt + policy.idleTimeoutMs <= now;
    },
    needsRefresh(session) {
      if (!session?.expiresAt) return false;
      return new Date(session.expiresAt).getTime() - Date.now() <= policy.refreshLeewayMs;
    },
    markSeen(session) {
      return {
        ...session,
        lastSeenAt: new Date().toISOString(),
      };
    },
    publish(event) {
      channel.publish({
        ...event,
        createdAt: new Date().toISOString(),
      });
    },
    subscribe(listener) {
      return channel.subscribe(listener);
    },
    close() {
      channel.close();
    },
  };
}
