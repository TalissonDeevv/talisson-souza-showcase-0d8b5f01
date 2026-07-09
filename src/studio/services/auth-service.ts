import type { AuthChangeEvent, Session, SupabaseClient } from "@supabase/supabase-js";
import type {
  StudioAuthFailure,
  StudioAuthResult,
  StudioLoginCredentials,
  StudioLogoutRequest,
  StudioSessionPolicy,
} from "../types/auth";
import { STUDIO_DEFAULT_SESSION_POLICY } from "../auth/policy";
import {
  createStudioCsrfStore,
  createStudioReplayStore,
  getCurrentStudioOrigin,
  normalizeStudioEmail,
  validateStudioOrigin,
} from "../utils/security";
import { createStudioRequestId } from "../utils/ids";
import type { StudioAuditService } from "./audit-service";
import { createStudioSupabaseAuthClient } from "./studio-auth-client";
import type { StudioSessionService } from "./session-service";
import { createStudioSessionService } from "./session-service";

export interface StudioAuthService {
  getCsrfToken(): string;
  rotateCsrfToken(): string;
  login(credentials: Omit<StudioLoginCredentials, "requestId" | "origin" | "csrfToken"> & Partial<StudioLoginCredentials>): Promise<StudioAuthResult>;
  logout(request?: Partial<StudioLogoutRequest>): Promise<void>;
  refreshSession(): Promise<Session | null>;
  recoverSession(): Promise<Session | null>;
  getCurrentSession(): Promise<Session | null>;
  onAuthStateChange(listener: (event: AuthChangeEvent, session: Session | null) => void): () => void;
}

interface LoginAttemptBucket {
  count: number;
  windowExpiresAt: number;
  blockedUntil?: number;
}

function createLoginRateLimiter(policy: StudioSessionPolicy) {
  const attempts = new Map<string, LoginAttemptBucket>();

  return {
    consume(key: string) {
      const now = Date.now();
      const current = attempts.get(key);

      if (current?.blockedUntil && current.blockedUntil > now) {
        return { allowed: false, retryAfterMs: current.blockedUntil - now };
      }

      if (!current || current.windowExpiresAt <= now) {
        attempts.set(key, {
          count: 1,
          windowExpiresAt: now + policy.rateLimitWindowMs,
        });
        return { allowed: true };
      }

      current.count += 1;

      if (current.count > policy.maxLoginAttempts) {
        current.blockedUntil = now + policy.rateLimitWindowMs;
        return { allowed: false, retryAfterMs: policy.rateLimitWindowMs };
      }

      return { allowed: true };
    },
    reset(key: string) {
      attempts.delete(key);
    },
  };
}

export function createStudioAuthService(options: {
  supabase?: SupabaseClient;
  auditService?: StudioAuditService;
  sessionService?: StudioSessionService;
  allowedOrigins?: readonly string[];
  policy?: Partial<StudioSessionPolicy>;
} = {}): StudioAuthService {
  const supabase = options.supabase ?? createStudioSupabaseAuthClient();
  const policy = { ...STUDIO_DEFAULT_SESSION_POLICY, ...options.policy };
  const csrfStore = createStudioCsrfStore();
  const replayStore = createStudioReplayStore();
  const rateLimiter = createLoginRateLimiter(policy);
  const sessionService = options.sessionService ?? createStudioSessionService({ policy });
  const allowedOrigins = options.allowedOrigins ?? [getCurrentStudioOrigin()];

  function metadata(input: Partial<StudioLoginCredentials | StudioLogoutRequest>) {
    return {
      origin: "origin" in input ? input.origin : getCurrentStudioOrigin(),
      reason: "reason" in input ? input.reason : undefined,
    };
  }

  async function recordLoginFailure(input: {
    email: string;
    requestId: string;
    code: StudioAuthFailure["code"];
    message: string;
    origin?: string;
  }) {
    await options.auditService?.record({
      action: "login_failed",
      moduleKey: "security",
      requestId: input.requestId,
      metadata: {
        email: normalizeStudioEmail(input.email),
        code: input.code,
        message: input.message,
        origin: input.origin,
      },
    });
  }

  async function getCurrentSession() {
    const { data } = await supabase.auth.getSession();
    return data.session;
  }

  return {
    getCsrfToken() {
      return csrfStore.getToken();
    },
    rotateCsrfToken() {
      return csrfStore.rotate();
    },
    async login(credentials) {
      const requestId = credentials.requestId ?? createStudioRequestId("studio_login");
      const origin = credentials.origin ?? getCurrentStudioOrigin();
      const csrfToken = credentials.csrfToken ?? csrfStore.getToken();
      const email = normalizeStudioEmail(credentials.email);

      if (!replayStore.remember(requestId)) {
        await recordLoginFailure({
          email,
          requestId,
          code: "replay_detected",
          message: "Repeated admin auth request id.",
          origin,
        });
        return {
          ok: false,
          code: "replay_detected",
          message: "Repeated admin auth request id.",
        };
      }

      if (!validateStudioOrigin(origin, allowedOrigins)) {
        await recordLoginFailure({
          email,
          requestId,
          code: "origin_invalid",
          message: "Admin auth origin is not allowed.",
          origin,
        });
        return {
          ok: false,
          code: "origin_invalid",
          message: "Admin auth origin is not allowed.",
        };
      }

      if (!csrfStore.verify(csrfToken)) {
        await recordLoginFailure({
          email,
          requestId,
          code: "csrf_invalid",
          message: "Admin auth CSRF token is invalid.",
          origin,
        });
        return {
          ok: false,
          code: "csrf_invalid",
          message: "Admin auth CSRF token is invalid.",
        };
      }

      const rateLimit = rateLimiter.consume(`${email}:${origin}`);
      if (!rateLimit.allowed) {
        await recordLoginFailure({
          email,
          requestId,
          code: "rate_limited",
          message: "Too many admin login attempts.",
          origin,
        });
        return {
          ok: false,
          code: "rate_limited",
          message: "Too many admin login attempts.",
          retryAfterMs: rateLimit.retryAfterMs,
        };
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: credentials.password,
      });

      if (error || !data.session || !data.user) {
        await recordLoginFailure({
          email,
          requestId,
          code: "invalid_credentials",
          message: error?.message ?? "Invalid admin credentials.",
          origin,
        });
        return {
          ok: false,
          code: "invalid_credentials",
          message: "Invalid admin credentials.",
        };
      }

      rateLimiter.reset(`${email}:${origin}`);
      csrfStore.rotate();

      const refreshed = await supabase.auth.refreshSession(data.session);
      const session = refreshed.data.session ?? data.session;

      await options.auditService?.record({
        action: "login",
        moduleKey: "security",
        actorId: data.user.id,
        requestId,
        metadata: metadata({ ...credentials, requestId, origin }),
      });

      sessionService.publish({
        type: "login",
        requestId,
        userId: data.user.id,
      });

      return {
        ok: true,
        user: session.user,
        session,
      };
    },
    async logout(request = {}) {
      const requestId = request.requestId ?? createStudioRequestId("studio_logout");
      const currentSession = await getCurrentSession();

      await supabase.auth.signOut({ scope: "global" });
      csrfStore.rotate();
      replayStore.clear();

      await options.auditService?.record({
        action: request.reason === "expired" ? "session_expired" : "logout",
        moduleKey: "security",
        actorId: currentSession?.user.id,
        requestId,
        metadata: metadata(request),
      });

      sessionService.publish({
        type: request.reason === "expired" ? "expired" : "logout",
        requestId,
        userId: currentSession?.user.id,
      });
    },
    async refreshSession() {
      const { data, error } = await supabase.auth.refreshSession();
      if (error) return null;

      if (data.session) {
        sessionService.publish({
          type: "refresh",
          requestId: createStudioRequestId("studio_refresh"),
          userId: data.session.user.id,
        });
      }

      return data.session;
    },
    async recoverSession() {
      const { data } = await supabase.auth.getSession();
      return data.session;
    },
    async getCurrentSession() {
      return getCurrentSession();
    },
    onAuthStateChange(listener) {
      const { data } = supabase.auth.onAuthStateChange(listener);
      return () => {
        data.subscription.unsubscribe();
      };
    },
  };
}
