import { useCallback, useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabaseComments as supabase } from "@/integrations/supabase-comments/client";

export interface DiscordProfile {
  id: string;
  username: string;
  global_name: string | null;
  avatar_url: string | null;
}

const DISCORD_SCOPES = "identify email guilds.join";
const POST_LOGIN_KEY_PREFIX = "atlas_discord_post_login";

export function useDiscordAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<DiscordProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = useCallback(async (userId: string) => {
    const { data, error: profileError } = await supabase
      .from("discord_profiles")
      .select("id, username, global_name, avatar_url")
      .eq("id", userId)
      .maybeSingle();

    if (profileError) {
      setProfile(null);
      return;
    }

    setProfile(data);
  }, []);

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

    const rawDiscordId =
      user.user_metadata?.provider_id ?? user.user_metadata?.sub;
    if (typeof rawDiscordId !== "string" && typeof rawDiscordId !== "number") {
      return;
    }

    const storageKey = `${POST_LOGIN_KEY_PREFIX}_${user.id}`;
    if (sessionStorage.getItem(storageKey)) return;
    sessionStorage.setItem(storageKey, "pending");

    void (async () => {
      const { data, error: functionError } = await supabase.functions.invoke(
        "discord-post-login",
        {
          body: {
            provider_token: providerToken,
            discord_id: String(rawDiscordId),
          },
        },
      );

      if (functionError || data?.ok !== true) {
        sessionStorage.removeItem(storageKey);
        setError(
          "Seu login foi concluído, mas não foi possível sincronizar o servidor do Discord.",
        );
        return;
      }

      sessionStorage.setItem(storageKey, "done");
      setError(null);
      await fetchProfile(user.id);
    })();
  }, [fetchProfile, session]);

  const signIn = useCallback(async () => {
    setError(null);

    const redirectTo = `${window.location.origin}${window.location.pathname}`;
    const { error: signInError } = await supabase.auth.signInWithOAuth({
      provider: "discord",
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
    session,
    user: session?.user,
    profile,
    loading,
    error,
    signIn,
    signOut,
  };
}
