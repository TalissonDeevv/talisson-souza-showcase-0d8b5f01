# Comments Supabase Project

Purpose: Discord authentication support, comment data, comment Realtime and Discord-related Edge Functions.

Current project ref in `config.toml`:

```text
rfzjtmleojkojopftkfo
```

## Contents

- `functions/discord-userinfo`: minimal OAuth userinfo bridge for Discord.
- `functions/discord-post-login`: post-login Discord guild/role synchronization.
- `functions/discord-refresh-profile`: profile refresh using Discord API.
- `migrations`: comments schema, RLS, Realtime and Discord hardening.
- `migrations/20260708151221_optimize_rls_policy_evaluation.sql`: final RLS policy performance pass after Supabase Advisor findings.

## Required Frontend Variables

```bash
VITE_COMMENTS_SUPABASE_URL=
VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY=
VITE_COMMENTS_SUPABASE_PROJECT_ID=
```

`VITE_COMMENTS_SUPABASE_PROJECT_ID` must match the project ref in `VITE_COMMENTS_SUPABASE_URL`.

## Required Edge Function Secrets

```bash
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DISCORD_RATE_LIMIT_SALT=
DISCORD_BOT_TOKEN=
DISCORD_GUILD_ID=
DISCORD_READER_ROLE_ID=
ALLOWED_ORIGINS=
```

## Validation

```bash
npm run audit:supabase:migrations
npm run audit:supabase:functions
npm run audit:supabase:rls
npm run audit:supabase:policies
npm run audit:supabase:realtime
```
