interface DiscordUser {
  id: string;
  username: string;
  global_name: string | null;
  avatar: string | null;
}

const jsonHeaders = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

function json(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

function avatarUrl(user: DiscordUser): string | null {
  if (!user.avatar) return null;

  const extension = user.avatar.startsWith("a_") ? "gif" : "png";
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=256`;
}

Deno.serve(async (req) => {
  if (req.method !== "GET") {
    return json({ error: "method_not_allowed" }, 405);
  }

  const authorization = req.headers.get("Authorization");
  if (!authorization?.startsWith("Bearer ")) {
    return json({ error: "unauthorized" }, 401);
  }

  const providerToken = authorization.slice(7).trim();
  if (!providerToken || providerToken.length > 4096) {
    return json({ error: "unauthorized" }, 401);
  }

  try {
    const response = await fetch("https://discord.com/api/v10/users/@me", {
      headers: { Authorization: `Bearer ${providerToken}` },
    });

    if (!response.ok) {
      return json({ error: "discord_identity_failed" }, 401);
    }

    const user = await response.json() as DiscordUser;
    if (!/^[0-9]+$/.test(user.id) || !user.username) {
      return json({ error: "invalid_discord_identity" }, 502);
    }

    const picture = avatarUrl(user);
    const displayName = user.global_name?.trim() || user.username;

    // Standard OAuth userinfo claims only. Deliberately excludes e-mail,
    // locale, phone, connections and every other unnecessary Discord field.
    return json({
      sub: user.id,
      provider_id: user.id,
      preferred_username: user.username,
      name: displayName,
      global_name: user.global_name,
      picture,
      avatar_url: picture,
    });
  } catch {
    return json({ error: "userinfo_unavailable" }, 502);
  }
});
