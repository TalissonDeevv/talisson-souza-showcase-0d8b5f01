import { useCallback, useContext, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { StudioAuthContext } from "../contexts/StudioAuthContext";
import { StudioPermissionContext } from "../contexts/StudioPermissionContext";
import { StudioSessionContext } from "../contexts/StudioSessionContext";
import { createStudioSessionService, type StudioSessionService } from "../services/session-service";
import type { StudioEnvironment, StudioUserSession } from "../types/core";

interface StudioSessionProviderProps extends PropsWithChildren {
  sessionService?: StudioSessionService;
  environment: StudioEnvironment;
}

export function StudioSessionProvider({
  children,
  sessionService: providedSessionService,
  environment,
}: StudioSessionProviderProps) {
  const auth = useContext(StudioAuthContext);
  const permissions = useContext(StudioPermissionContext);
  const sessionService = useMemo(
    () => providedSessionService ?? createStudioSessionService(),
    [providedSessionService],
  );
  const [session, setSession] = useState<StudioUserSession | null>(null);

  useEffect(() => {
    if (!auth?.supabaseSession || !permissions?.access) {
      setSession(null);
      return;
    }

    setSession(sessionService.createSession({
      supabaseSession: auth.supabaseSession,
      roles: permissions.access.roles,
      permissions: permissions.access.permissions,
      environment,
    }));
  }, [auth?.supabaseSession, environment, permissions?.access, sessionService]);

  useEffect(() => sessionService.subscribe((event) => {
    if (event.type === "logout" || event.type === "expired" || event.type === "invalidated") {
      setSession(null);
    }
  }), [sessionService]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSession((currentSession) => {
        if (!currentSession) return currentSession;

        if (sessionService.isExpired(currentSession)) {
          void auth?.logout("expired");
          return null;
        }

        if (sessionService.needsRefresh(currentSession)) {
          void auth?.refresh();
        }

        return currentSession;
      });
    }, 30_000);

    return () => window.clearInterval(interval);
  }, [auth, sessionService]);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setSession((currentSession) => currentSession ? sessionService.markSeen(currentSession) : currentSession);
        void auth?.refresh();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [auth, sessionService]);

  const markSeen = useCallback(() => {
    setSession((currentSession) => currentSession ? sessionService.markSeen(currentSession) : currentSession);
  }, [sessionService]);

  const expire = useCallback(async (reason: "expired" | "invalidated" = "expired") => {
    await auth?.logout(reason);
    setSession(null);
  }, [auth]);

  const value = useMemo(() => ({
    status: auth?.status ?? "unauthenticated",
    session,
    isExpired: sessionService.isExpired(session),
    markSeen,
    expire,
  }), [auth?.status, expire, markSeen, session, sessionService]);

  return (
    <StudioSessionContext.Provider value={value}>
      {children}
    </StudioSessionContext.Provider>
  );
}
