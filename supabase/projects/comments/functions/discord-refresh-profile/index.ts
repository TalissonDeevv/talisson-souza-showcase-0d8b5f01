import { createClient } from "https://esm.sh/@supabase/supabase-js@2.110.0";

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

const RATE_LIMIT_WINDOW_SECONDS = 10 * 60;
const RATE_LIMIT_MAX = 10;
const encoder = new TextEncoder();

interface DiscordUser {
  id: string;
  username: string;
  global_name: string | null;
  avatar: string | null;
}

interface SupabaseFunctionError {
  code?: string;
  message?: string;
}

interface RateLimitClient {
  rpc(
    fn: "check_contact_rate_limit",
    args: Record<string, unknown>,
  ): Promise<{ data: unknown; error: SupabaseFunctionError | null }>;
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
      "cache-control": "no-store",
    },
  });
}

function discordAvatarUrl(user: DiscordUser): string | null {
  if (!user.avatar) return null;

  const extension = user.avatar.startsWith("a_") ? "gif" : "png";
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=256`;
}

function getClientIp(req: Request): string {
  return (
    req.headers.get("cf-connecting-ip")?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  );
}

async function sha256Hex(value: string): Promise<string> {
  const hash = await crypto.subtle.digest("SHA-256", encoder.encode(value));
  return [...new Uint8Array(hash)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function checkRefreshRateLimit(
  adminClient: unknown,
  req: Request,
  userId: string,
): Promise<boolean> {
  const salt =
    Deno.env.get("DISCORD_RATE_LIMIT_SALT")?.trim() ||
    Deno.env.get("CONTACT_RATE_LIMIT_SALT")?.trim() ||
    Deno.env.get("CONTACT_CAPTCHA_SECRET")?.trim();

  if (!salt) {
    console.error("discord_refresh_rate_limit_environment_missing");
    throw new Error("service_not_configured");
  }

  const scopes = [
    `discord-refresh:user:${userId}`,
    `discord-refresh:ip:${getClientIp(req)}`,
  ];

  const rateLimitClient = adminClient as RateLimitClient;

  for (const scope of scopes) {
    const keyHash = await sha256Hex(`${salt}:${scope}`);
    const { data, error } = await rateLimitClient.rpc("check_contact_rate_limit", {
      p_key_hash: keyHash,
      p_max_requests: RATE_LIMIT_MAX,
      p_window_seconds: RATE_LIMIT_WINDOW_SECONDS,
    });

    if (error) {
      console.error("discord_refresh_rate_limit_failed", error.code);
      throw new Error("rate_limit_unavailable");
    }

    if (data !== true) return false;
  }

  return true;
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
    const botToken = Deno.env.get("DISCORD_BOT_TOKEN");

    if (!supabaseUrl || !anonKey || !serviceRoleKey || !botToken) {
      console.error("discord_refresh_environment_missing");
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

    if (!(await checkRefreshRateLimit(adminClient, req, userId))) {
      return json(req, { error: "rate_limited" }, 429);
    }

    const { data: profile, error: profileError } = await adminClient
      .from("discord_profiles")
      .select("discord_id")
      .eq("id", userId)
      .maybeSingle();

    if (profileError) {
      console.error("discord_refresh_profile_lookup_failed", profileError.code);
      return json(req, { error: "profile_lookup_failed" }, 500);
    }

    if (!profile?.discord_id || !/^[0-9]+$/.test(profile.discord_id)) {
      return json(req, { error: "discord_profile_not_found" }, 404);
    }

    const discordUserResponse = await fetch(
      `https://discord.com/api/v10/users/${profile.discord_id}`,
      { headers: { Authorization: `Bot ${botToken}` } },
    );

    if (!discordUserResponse.ok) {
      console.error("discord_refresh_fetch_failed", discordUserResponse.status);
      return json(req, { error: "discord_fetch_failed" }, 502);
    }

    const discordUser = await discordUserResponse.json() as DiscordUser;
    if (discordUser.id !== profile.discord_id || !discordUser.username) {
      return json(req, { error: "invalid_discord_identity" }, 502);
    }

    const now = new Date().toISOString();
    const { error: updateError } = await adminClient
      .from("discord_profiles")
      .update({
        username: discordUser.username,
        global_name: discordUser.global_name || discordUser.username,
        avatar_url: discordAvatarUrl(discordUser),
        updated_at: now,
      })
      .eq("id", userId);

    if (updateError) {
      console.error("discord_refresh_profile_update_failed", updateError.code);
      return json(req, { error: "profile_update_failed" }, 500);
    }

    return json(req, {
      ok: true,
      username: discordUser.username,
      global_name: discordUser.global_name || discordUser.username,
      avatar_url: discordAvatarUrl(discordUser),
    });
  } catch (error) {
    console.error(
      "discord_refresh_profile_error",
      error instanceof Error ? error.message : "unknown_error",
    );
    return json(req, { error: "internal_error" }, 500);
  }
});
