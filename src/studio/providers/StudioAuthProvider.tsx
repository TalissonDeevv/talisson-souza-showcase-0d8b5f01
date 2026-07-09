import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import type { Session } from "@supabase/supabase-js";
import { StudioAuthContext } from "../contexts/StudioAuthContext";
import { createStudioAuthService, type StudioAuthService } from "../services/auth-service";
import type { StudioAuthResult, StudioAuthStatus, StudioLoginCredentials } from "../types/auth";

interface StudioAuthProviderProps extends PropsWithChildren {
  authService?: StudioAuthService;
  autoRecover?: boolean;
}

export function StudioAuthProvider({
  children,
  authService: providedAuthService,
  autoRecover = true,
}: StudioAuthProviderProps) {
  const authService = useMemo(
    () => providedAuthService ?? createStudioAuthService(),
    [providedAuthService],
  );
  const [status, setStatus] = useState<StudioAuthStatus>("idle");
  const [supabaseSession, setSupabaseSession] = useState<Session | null>(null);
  const [csrfToken, setCsrfToken] = useState(authService.getCsrfToken());
  const [error, setError] = useState<string | null>(null);

  const recover = useCallback(async () => {
    setStatus("loading");
    const recoveredSession = await authService.recoverSession();
    setSupabaseSession(recoveredSession);
    setStatus(recoveredSession ? "authenticated" : "unauthenticated");
    return recoveredSession;
  }, [authService]);

  useEffect(() => {
    if (autoRecover) {
      void recover();
    }

    const unsubscribe = authService.onAuthStateChange((event, session) => {
      setSupabaseSession(session);
      setError(null);

      if (event === "SIGNED_OUT") {
        setStatus("unauthenticated");
        setCsrfToken(authService.rotateCsrfToken());
        return;
      }

      setStatus(session ? "authenticated" : "unauthenticated");
    });

    return unsubscribe;
  }, [authService, autoRecover, recover]);

  const login = useCallback(async (
    credentials: Omit<StudioLoginCredentials, "requestId" | "origin" | "csrfToken"> & Partial<StudioLoginCredentials>,
  ): Promise<StudioAuthResult> => {
    setStatus("loading");
    setError(null);

    const result = await authService.login({
      ...credentials,
      csrfToken: credentials.csrfToken ?? csrfToken,
    });

    if (result.ok === true) {
      setSupabaseSession(result.session);
      setStatus("authenticated");
      setCsrfToken(authService.getCsrfToken());
    } else {
      setSupabaseSession(null);
      setStatus("unauthenticated");
      setError(result.message);
    }

    return result;
  }, [authService, csrfToken]);

  const logout = useCallback(async (reason: "user" | "expired" | "invalidated" = "user") => {
    await authService.logout({ reason });
    setSupabaseSession(null);
    setStatus(reason === "expired" ? "expired" : "unauthenticated");
    setCsrfToken(authService.getCsrfToken());
  }, [authService]);

  const refresh = useCallback(async () => {
    const refreshed = await authService.refreshSession();
    setSupabaseSession(refreshed);
    setStatus(refreshed ? "authenticated" : "unauthenticated");
    return refreshed;
  }, [authService]);

  const value = useMemo(() => ({
    status,
    supabaseSession,
    csrfToken,
    error,
    login,
    logout,
    refresh,
    recover,
  }), [csrfToken, error, login, logout, recover, refresh, status, supabaseSession]);

  return (
    <StudioAuthContext.Provider value={value}>
      {children}
    </StudioAuthContext.Provider>
  );
}
