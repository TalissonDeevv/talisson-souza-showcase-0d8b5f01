import { createClient } from "https://esm.sh/@supabase/supabase-js@2.58.0";

const DEFAULT_ALLOWED_ORIGINS = [
  "https://talissonsouza.com.br",
  "https://www.talissonsouza.com.br",
  "http://localhost:8080",
  "http://localhost:8081",
  "http://127.0.0.1:8080",
  "http://127.0.0.1:8081",
];

const allowedOrigins = new Set(
  (Deno.env.get("ALLOWED_ORIGINS") ?? DEFAULT_ALLOWED_ORIGINS.join(","))
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
);

interface DiscordUser {
  id: string;
  username: string;
  global_name: string | null;
  avatar: string | null;
}

interface RequestBody {
  provider_token?: unknown;
}

function isOriginAllowed(req: Request): boolean {
  const origin = req.headers.get("Origin");
  return origin === null || allowedOrigins.has(origin);
}

function corsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("Origin");
  const headers: Record<string, string> = {
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };

  if (origin && allowedOrigins.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}

function json(
  req: Request,
  body: Record<string, unknown>,
  status = 200,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(req),
      "content-type": "application/json; charset=utf-8",
    },
  });
}

function discordAvatarUrl(user: DiscordUser): string | null {
  if (!user.avatar) return null;
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`;
}

Deno.serve(async (req) => {
  if (!isOriginAllowed(req)) {
    return json(req, { error: "origin_not_allowed" }, 403);
  }

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders(req) });
  }

  if (req.method !== "POST") {
    return json(req, { error: "method_not_allowed" }, 405);
  }

  try {
    const authorization = req.headers.get("Authorization");
    if (!authorization?.startsWith("Bearer ")) {
      return json(req, { error: "unauthorized" }, 401);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      console.error("supabase_environment_missing");
      return json(req, { error: "service_not_configured" }, 503);
    }

    const userClient = createClient(supabaseUrl, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { headers: { Authorization: authorization } },
    });
    const adminClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const accessToken = authorization.slice(7);
    const { data: claimsData, error: claimsError } =
      await userClient.auth.getClaims(accessToken);
    const userId = claimsData?.claims?.sub;

    if (claimsError || typeof userId !== "string") {
      return json(req, { error: "unauthorized" }, 401);
    }

    let body: RequestBody;
    try {
      body = await req.json() as RequestBody;
    } catch {
      return json(req, { error: "bad_request" }, 400);
    }

    const providerToken =
      typeof body.provider_token === "string" ? body.provider_token.trim() : "";
    if (!providerToken || providerToken.length > 4096) {
      return json(req, { error: "missing_provider_token" }, 400);
    }

    // Resolve the canonical Discord identity from the OAuth token instead of
    // trusting an ID supplied by the browser.
    const discordUserResponse = await fetch(
      "https://discord.com/api/v10/users/@me",
      { headers: { Authorization: `Bearer ${providerToken}` } },
    );

    if (!discordUserResponse.ok) {
      console.error("discord_identity_failed", discordUserResponse.status);
      return json(req, { error: "discord_identity_failed" }, 401);
    }

    const discordUser = await discordUserResponse.json() as DiscordUser;
    if (!/^[0-9]+$/.test(discordUser.id)) {
      return json(req, { error: "invalid_discord_identity" }, 502);
    }

    const now = new Date().toISOString();
    const { error: profileError } = await adminClient
      .from("discord_profiles")
      .upsert(
        {
          id: userId,
          discord_id: discordUser.id,
          username: discordUser.username || "Leitor",
          global_name: discordUser.global_name || discordUser.username || "Leitor",
          avatar_url: discordAvatarUrl(discordUser),
          last_login_at: now,
          updated_at: now,
        },
        { onConflict: "id" },
      );

    if (profileError) {
      console.error("discord_profile_sync_failed", profileError.code);
      return json(req, { error: "profile_sync_failed" }, 500);
    }

    // A first login through the minimal custom provider can replace a legacy
    // native Discord Auth user. Application-owned rows were transferred by the
    // database trigger; delete the legacy Auth record through the supported
    // Admin API so its historical e-mail and refresh tokens are removed.
    const { data: migration, error: migrationLookupError } = await adminClient
      .from("discord_identity_migrations")
      .select("legacy_user_id")
      .eq("new_user_id", userId)
      .maybeSingle();

    if (migrationLookupError) {
      console.error(
        "discord_identity_migration_lookup_failed",
        migrationLookupError.code,
      );
      return json(req, { error: "identity_cleanup_failed" }, 500);
    }

    if (migration?.legacy_user_id) {
      const { error: deleteLegacyError } =
        await adminClient.auth.admin.deleteUser(migration.legacy_user_id);

      if (deleteLegacyError) {
        console.error(
          "discord_legacy_identity_cleanup_failed",
          deleteLegacyError.code,
        );
        return json(req, { error: "identity_cleanup_failed" }, 500);
      }
    }

    const botToken = Deno.env.get("DISCORD_BOT_TOKEN");
    const guildId = Deno.env.get("DISCORD_GUILD_ID");
    const readerRoleId = Deno.env.get("DISCORD_READER_ROLE_ID");

    if (!botToken || !guildId || !readerRoleId) {
      console.error("discord_bot_environment_missing");
      return json(req, { error: "bot_not_configured" }, 503);
    }

    const addMemberResponse = await fetch(
      `https://discord.com/api/v10/guilds/${guildId}/members/${discordUser.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bot ${botToken}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ access_token: providerToken }),
      },
    );

    const joined =
      addMemberResponse.status === 201 || addMemberResponse.status === 204;
    if (!joined) {
      console.error("discord_join_failed", addMemberResponse.status);
      await adminClient
        .from("discord_profiles")
        .update({
          guild_joined: false,
          role_granted: false,
          updated_at: now,
        })
        .eq("id", userId);
      return json(req, { error: "discord_join_failed" }, 502);
    }

    // Apply the role explicitly for both new and existing guild members.
    const roleResponse = await fetch(
      `https://discord.com/api/v10/guilds/${guildId}/members/${discordUser.id}/roles/${readerRoleId}`,
      {
        method: "PUT",
        headers: { Authorization: `Bot ${botToken}` },
      },
    );
    const roleGranted = roleResponse.status === 204;

    const { error: statusError } = await adminClient
      .from("discord_profiles")
      .update({
        guild_joined: true,
        role_granted: roleGranted,
        last_login_at: now,
        updated_at: now,
      })
      .eq("id", userId);

    if (statusError) {
      console.error("discord_status_sync_failed", statusError.code);
    }

    if (!roleGranted) {
      console.error("discord_role_failed", roleResponse.status);
      return json(
        req,
        {
          error: "discord_role_failed",
          joined: true,
          roleGranted: false,
        },
        502,
      );
    }

    return json(req, { ok: true, joined: true, roleGranted: true });
  } catch (error) {
    console.error(
      "discord_post_login_error",
      error instanceof Error ? error.message : "unknown_error",
    );
    return json(req, { error: "internal_error" }, 500);
  }
});
