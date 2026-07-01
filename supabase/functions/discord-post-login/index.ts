// Deno Deploy (Supabase Edge Function)
// Adds the freshly-logged-in Discord user to the configured guild
// and assigns the "📖 Leitor dos Artigos" role.
//
// After migrating to the external Supabase project, deploy this
// function there. Required secrets:
//   DISCORD_BOT_TOKEN   — Bot token from Discord Developer Portal
//   DISCORD_GUILD_ID    — Guild (server) ID
//   DISCORD_READER_ROLE_ID — Role ID to grant on join
//
// Call from client after a successful Discord login:
//   POST /functions/v1/discord-post-login
//   Authorization: Bearer <user JWT>
//   Body: { provider_token: string, discord_id: string }

// deno-lint-ignore-file no-explicit-any
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "content-type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: CORS });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  try {
    const auth = req.headers.get("Authorization");
    if (!auth?.startsWith("Bearer ")) return json({ error: "unauthorized" }, 401);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: auth } } },
    );

    const token = auth.slice(7);
    const { data: claims, error: claimsErr } = await supabase.auth.getClaims(token);
    if (claimsErr || !claims?.claims?.sub) return json({ error: "unauthorized" }, 401);
    const userId = claims.claims.sub as string;

    let body: any;
    try { body = await req.json(); } catch { return json({ error: "bad_request" }, 400); }
    const providerToken = String(body?.provider_token ?? "");
    const discordId    = String(body?.discord_id ?? "").replace(/[^0-9]/g, "");
    if (!providerToken || !discordId) return json({ error: "missing_fields" }, 400);

    const BOT_TOKEN = Deno.env.get("DISCORD_BOT_TOKEN");
    const GUILD_ID  = Deno.env.get("DISCORD_GUILD_ID");
    const ROLE_ID   = Deno.env.get("DISCORD_READER_ROLE_ID");
    if (!BOT_TOKEN || !GUILD_ID) return json({ error: "bot_not_configured" }, 503);

    // Idempotent add — Discord returns 201 on create, 204 if already member.
    const addRes = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}/members/${discordId}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bot ${BOT_TOKEN}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          access_token: providerToken,
          roles: ROLE_ID ? [ROLE_ID] : [],
        }),
      },
    );

    let joined = false;
    let roleGranted = Boolean(ROLE_ID);
    if (addRes.status === 201) {
      joined = true;
    } else if (addRes.status === 204) {
      joined = true; // already in guild; ensure role is applied below
      if (ROLE_ID) {
        const roleRes = await fetch(
          `https://discord.com/api/v10/guilds/${GUILD_ID}/members/${discordId}/roles/${ROLE_ID}`,
          { method: "PUT", headers: { Authorization: `Bot ${BOT_TOKEN}` } },
        );
        roleGranted = roleRes.ok;
      }
    } else {
      // Don't leak the Discord error body to the client.
      console.error("discord_add_failed", addRes.status, await addRes.text());
      return json({ error: "discord_join_failed" }, 502);
    }

    // Best-effort flag update; not critical if it fails.
    await supabase
      .from("discord_profiles")
      .update({ guild_joined: joined, role_granted: roleGranted, last_login_at: new Date().toISOString() })
      .eq("id", userId);

    return json({ ok: true, joined, roleGranted });
  } catch (e) {
    console.error("post_login_error", e);
    return json({ error: "internal_error" }, 500);
  }
});
