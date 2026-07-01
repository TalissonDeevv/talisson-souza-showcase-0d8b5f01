import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User } from "@supabase/supabase-js";

export interface DiscordProfile {
  id: string;
  discord_id: string;
  username: string;
  global_name: string | null;
  avatar_url: string | null;
  email: string | null;
}

const DISCORD_SCOPES = "identify email guilds.join";

/**
 * Central auth hook for Discord-based commenting.
 * NOTE: requires Discord to be enabled as a Supabase Auth Provider
 * (works after migrating to a BYO Supabase project — Lovable Cloud
 * does not expose Discord as a native provider).
 */
export function useDiscordAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<DiscordProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 1. Session listener — synchronous state, async profile fetch.
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_ev, s) => {
      setSession(s);
      if (s?.user) queueMicrotask(() => fetchProfile(s.user.id));
      else setProfile(null);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session?.user) fetchProfile(data.session.user.id);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // 2. Fire-and-forget: after a fresh Discord login, ask the edge
  //    function to add the user to the guild and grant the role.
  useEffect(() => {
    if (!session?.provider_token || !session.user) return;
    const discordId =
      (session.user.user_metadata as any)?.provider_id ??
      (session.user.user_metadata as any)?.sub;
    if (!discordId) return;
    const key = `discord_post_login_${session.user.id}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    supabase.functions
      .invoke("discord-post-login", {
        body: { provider_token: session.provider_token, discord_id: String(discordId) },
      })
      .catch(() => { /* silent — bot infra may be pending */ });
  }, [session]);

  const fetchProfile = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from("discord_profiles" as any)
      .select("id, discord_id, username, global_name, avatar_url, email")
      .eq("id", userId)
      .maybeSingle();
    setProfile((data as DiscordProfile | null) ?? null);
  }, []);

  const signIn = useCallback(async () => {
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "discord" as any,
      options: {
        scopes: DISCORD_SCOPES,
        redirectTo: window.location.href,
      },
    });
    if (error) setError(error.message);
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  return { session, user: session?.user as User | undefined, profile, loading, error, signIn, signOut };
}
