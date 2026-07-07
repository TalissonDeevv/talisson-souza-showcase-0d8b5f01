import { useCallback, useEffect, useState } from "react";
import type { Provider, Session } from "@supabase/supabase-js";
import {
  COMMENTS_AUTH_STORAGE_KEY,
  supabaseComments as supabase,
} from "@/integrations/supabase-comments/client";

export interface DiscordProfile {
  id: string;
  username: string;
  global_name: string | null;
  avatar_url: string | null;
  is_verified: boolean;
}

const DISCORD_PROVIDER = "custom:discord-minimal" satisfies Provider;
const DISCORD_SCOPES = "identify guilds.join";
const POST_LOGIN_KEY_PREFIX = "atlas_discord_post_login";
const PROFILE_REFRESH_KEY_PREFIX = "atlas_discord_profile_refresh";
const PROFILE_REFRESH_TTL_MS = 5 * 60 * 1000;

const OAUTH_ERROR_PARAMS = [
  "error",
  "error_code",
  "error_description",
  "sb",
];

function readOAuthErrorFromUrl(): string | null {
  if (typeof window === "undefined") return null;

  const searchParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(
    window.location.hash.startsWith("#")
      ? window.location.hash.slice(1)
      : window.location.hash,
  );

  const error = searchParams.get("error") ?? hashParams.get("error");
  const errorCode =
    searchParams.get("error_code") ?? hashParams.get("error_code");
  const errorDescription =
    searchParams.get("error_description") ??
    hashParams.get("error_description");

  if (!error && !errorCode && !errorDescription) return null;

  const decodedDescription = errorDescription?.replace(/\+/g, " ") ?? "";

  if (
    errorCode === "unexpected_failure" &&
    decodedDescription.includes("Unable to exchange external code")
  ) {
    return "Não foi possível concluir o login pelo Discord. Revise o provider custom:discord-minimal no Supabase: Client ID, Client Secret, callback e scopes identify guilds.join.";
  }

  return "Não foi possível concluir o login pelo Discord. Tente novamente; se persistir, revise as configurações OAuth no Supabase e no Discord Developer Portal.";
}

function removeOAuthErrorFromUrl(): void {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  for (const param of OAUTH_ERROR_PARAMS) {
    url.searchParams.delete(param);
  }

  const hashParams = new URLSearchParams(
    url.hash.startsWith("#") ? url.hash.slice(1) : url.hash,
  );
  for (const param of OAUTH_ERROR_PARAMS) {
    hashParams.delete(param);
  }

  const nextHash = hashParams.toString();
  url.hash = nextHash ? `#${nextHash}` : "";
  window.history.replaceState({}, document.title, url.toString());
}

function clearStoredDiscordProviderCredentials(): void {
  if (typeof window === "undefined") return;

  const raw = window.localStorage.getItem(COMMENTS_AUTH_STORAGE_KEY);
  if (!raw) return;

  try {
    const stored = JSON.parse(raw) as Record<string, unknown>;
    const candidates = [
      stored,
      stored.currentSession,
      stored.session,
    ].filter(
      (value): value is Record<string, unknown> =>
        typeof value === "object" && value !== null,
    );

    let changed = false;
    for (const candidate of candidates) {
      for (const key of ["provider_token", "provider_refresh_token"]) {
        if (key in candidate) {
          delete candidate[key];
          changed = true;
        }
      }
    }

    if (changed) {
      window.localStorage.setItem(
        COMMENTS_AUTH_STORAGE_KEY,
        JSON.stringify(stored),
      );
    }
  } catch {
    // Auth remains valid even if a future storage format cannot be minimized.
  }
}

export function useDiscordAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<DiscordProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const oauthError = readOAuthErrorFromUrl();
    if (!oauthError) return;

    setError(oauthError);
    removeOAuthErrorFromUrl();
  }, []);

  const fetchProfile = useCallback(async (userId: string) => {
    const { data, error: profileError } = await supabase
      .from("discord_profiles")
      .select("id, username, global_name, avatar_url, is_verified")
      .eq("id", userId)
      .maybeSingle();

    if (profileError) {
      const { data: fallbackData, error: fallbackError } = await supabase
        .from("discord_profiles")
        .select("id, username, global_name, avatar_url")
        .eq("id", userId)
        .maybeSingle();

      setProfile(
        fallbackError || !fallbackData
          ? null
          : { ...fallbackData, is_verified: false },
      );
      return;
    }

    setProfile(data ? { ...data, is_verified: data.is_verified ?? false } : null);
  }, []);

  const refreshProfile = useCallback(async (
    options: { force?: boolean } = {},
  ): Promise<boolean> => {
    const userId = session?.user.id;
    if (!userId) return false;

    const storageKey = `${PROFILE_REFRESH_KEY_PREFIX}_${userId}`;
    if (!options.force && typeof window !== "undefined") {
      const lastRefresh = Number(window.localStorage.getItem(storageKey) ?? 0);
      if (Number.isFinite(lastRefresh) && Date.now() - lastRefresh < PROFILE_REFRESH_TTL_MS) {
        return false;
      }
    }

    const { data, error: functionError } = await supabase.functions.invoke(
      "discord-refresh-profile",
      { body: {} },
    );

    if (functionError || data?.ok !== true) {
      return false;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem(storageKey, String(Date.now()));
    }

    await fetchProfile(userId);
    return true;
  }, [fetchProfile, session?.user.id]);

  useEffect(() => {
    let active = true;

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        if (!active) return;

        setSession(nextSession);
        if (nextSession?.user) {
          queueMicrotask(() => {
            if (active) void fetchProfile(nextSession.user.id);
          });
        } else {
          setProfile(null);
        }
      },
    );

    void supabase.auth.getSession().then(({ data, error: sessionError }) => {
      if (!active) return;

      if (sessionError) setError(sessionError.message);
      setSession(data.session);

      if (data.session?.user) {
        void fetchProfile(data.session.user.id);
      }

      setLoading(false);
    });

    return () => {
      active = false;
      subscription.subscription.unsubscribe();
    };
  }, [fetchProfile]);

  useEffect(() => {
    const providerToken = session?.provider_token;
    const user = session?.user;
    if (!providerToken || !user) return;

    const storageKey = `${POST_LOGIN_KEY_PREFIX}_${user.id}`;
    if (sessionStorage.getItem(storageKey)) return;
    sessionStorage.setItem(storageKey, "pending");

    void (async () => {
      const { data, error: functionError } = await supabase.functions.invoke(
        "discord-post-login",
        {
          body: { provider_token: providerToken },
        },
      );

      if (functionError || data?.ok !== true) {
        sessionStorage.removeItem(storageKey);
        setError(
          "Seu login foi concluído, mas não foi possível sincronizar o servidor do Discord.",
        );
        return;
      }

      // Rebuild the Supabase session from its own tokens. The returned session
      // intentionally has no Discord provider token and refreshes the user
      // object after a possible legacy-identity cleanup.
      const { data: minimizedAuth } = await supabase.auth.setSession({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      });
      if (minimizedAuth.session) setSession(minimizedAuth.session);

      // Defensive fallback for storage adapters/formats that preserve fields
      // not returned by setSession.
      clearStoredDiscordProviderCredentials();
      sessionStorage.setItem(storageKey, "done");
      setError(null);
      await fetchProfile(user.id);
    })();
  }, [fetchProfile, session]);

  useEffect(() => {
    if (!session?.user.id || session.provider_token) return;
    void refreshProfile();
  }, [refreshProfile, session?.provider_token, session?.user.id]);

  const signIn = useCallback(async () => {
    setError(null);

    const redirectTo = `${window.location.origin}${window.location.pathname}`;
    const { error: signInError } = await supabase.auth.signInWithOAuth({
      provider: DISCORD_PROVIDER,
      options: {
        scopes: DISCORD_SCOPES,
        redirectTo,
      },
    });

    if (signInError) setError(signInError.message);
  }, []);

  const signOut = useCallback(async () => {
    if (session?.user.id) {
      sessionStorage.removeItem(
        `${POST_LOGIN_KEY_PREFIX}_${session.user.id}`,
      );
    }

    await supabase.auth.signOut();
  }, [session?.user.id]);

  return {
    userId: session?.user.id ?? null,
    profile,
    loading,
    error,
    signIn,
    signOut,
    refreshProfile,
  };
}
