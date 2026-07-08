# Staging Preparation Report

Branch: `hardening/security-audit-p1-p4`
Date: 2026-07-08

## Executive Status

The project is code-ready for staging validation, but the staging environment is not fully available yet.

No production deployment was performed.
No merge into the main branch was performed.
No Cloudflare or Hostinger configuration was changed.

## Automated Changes Applied Safely

### `supabase/functions/send-contact-email/index.ts`

Changed the contact Edge Function to read `ALLOWED_ORIGINS` from Supabase secrets, with the current production domains as fallback.

Reason: staging/previews need their own allowed origin. A hardcoded production-only CORS allowlist would block contact form validation in staging.

### `supabase/migrations/20260708100000_security_hardening.sql`

Made hardening blocks conditional for split Supabase environments:

- `newsletter_subscribers` is only hardened if the table exists.
- Stats RPC grants are only changed if each RPC exists.
- Legacy `SECURITY DEFINER` functions `handle_discord_user()` and `rls_auto_enable()` are revoked from public/authenticated roles if present.

Reason: the repository currently uses a split Supabase architecture. The main app points to one project, while comments/Discord use a BYO Supabase project. A hardening migration that assumes every table/RPC exists in the same database could fail during staging.

### `src/integrations/supabase-comments/client.ts`

Added optional Vite overrides:

- `VITE_COMMENTS_SUPABASE_URL`
- `VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY`

The existing BYO comments Supabase URL/key remain as fallback.

Reason: Vercel Preview/staging must be able to point comments and Discord auth to a staging Supabase project instead of the current BYO production project.

### `.env.example`

Documented the new comments Supabase variables.

## Validation Commands Run

Passed:

- `npm run lint`
  - Result: 0 errors, 15 existing warnings.
- `npx tsc --noEmit -p tsconfig.app.json`
  - Result: passed.
- `npx -y deno check supabase/functions/send-contact-email/index.ts supabase/functions/discord-post-login/index.ts supabase/functions/discord-refresh-profile/index.ts supabase/functions/discord-userinfo/index.ts`
  - Result: passed.
- `npm audit --omit=dev`
  - Result: 0 vulnerabilities.
- `npm run build`
  - Result: passed.

Warnings observed:

- Vite warns about a large main chunk.
- Browserslist/caniuse-lite data is old.
- ESLint warnings are existing Fast Refresh/hooks warnings.

## Environment Discovery

### Supabase Projects

Local `supabase/config.toml` points to:

- `xbjkbziaxwsjzsmxilap`

The available Supabase integration has no permission to operate on that project.

The accessible active project is:

- `rfzjtmleojkojopftkfo`
- Name: `Atlas o Leitor`
- Current role in repo: BYO comments / Discord auth project.

The code also confirms the split:

- Main app client uses `VITE_SUPABASE_URL`.
- Comments client previously hardcoded `https://rfzjtmleojkojopftkfo.supabase.co`.

### Vercel Project

Likely target project:

- Name: `talissonsouzacompany`
- Project ID: `prj_09h4c8zF6SCP2SN5XI9CN8eAGsXb`
- Team ID: `team_nxZVXgCdHejmljE0kXEl3qDt`
- Framework: Vite
- Node: `24.x`
- Domains include:
  - `www.talissonsouza.com.br`
  - `talissonsouza.com.br`

No local `.vercel/project.json` exists, so the checkout is not linked locally.

## Staging Blockers

### Migration Replay

Could not validate a full clean replay locally:

- Docker is not installed/available in the current shell.
- `supabase status` failed because Docker is unavailable.
- `psql` is not installed.

Attempted to create a Supabase Branch for staging:

- Cost returned: USD `0.01344` per hour.
- Creation failed because Supabase Branching requires Pro plan or above.

Conclusion: migrations must be validated in one of these ways before staging sign-off:

1. Start Docker locally and run `supabase db reset --local`.
2. Enable Supabase Branching on a Pro plan and create a branch.
3. Create a dedicated staging Supabase project and apply migrations there.

Do not apply the migrations directly to the active BYO production project as a staging substitute.

### Supabase Project Ambiguity

The repo references two Supabase projects:

- `xbjkbziaxwsjzsmxilap`: main app / Lovable-generated config, not accessible via current integration.
- `rfzjtmleojkojopftkfo`: BYO comments/Discord project, accessible.

Before staging, decide whether staging will use:

- one unified Supabase staging project, or
- two staging Supabase projects mirroring the current split.

## Supabase BYO Project Review

Project reviewed: `rfzjtmleojkojopftkfo`.

### Current Tables

Public tables found:

- `comment_reactions`
- `comments`
- `discord_identity_migrations`
- `discord_profiles`
- `user_roles`

No `newsletter_subscribers` table was found in the BYO comments project.

### RLS

RLS is enabled on all public tables found.

### Storage

No `blog-images` bucket exists in the BYO comments project.

This may be correct if uploads belong to the main Supabase project, but staging must confirm where `blog-images` is supposed to live.

### RPCs

Existing public functions include:

- `has_role`
- `handle_discord_user`
- `stats_readers_total`
- `stats_comments_total`
- `stats_comments_by_article`
- `stats_most_commented_article`
- comment trigger helpers

Missing hardening RPC:

- `check_contact_rate_limit`

This will be created by `20260708100000_security_hardening.sql`.

### Supabase Advisors

Security Advisor currently reports:

- `discord_identity_migrations` has RLS enabled with no policies.
  - This is acceptable if it is service-role-only, but should be acknowledged.
- `handle_discord_user()` is publicly executable as a `SECURITY DEFINER` function.
- `rls_auto_enable()` is publicly executable as a `SECURITY DEFINER` function.
- Stats RPCs are executable by anon/authenticated users.
- Leaked password protection is disabled.

The updated hardening migration addresses the function grant exposure for the affected functions when applied.

Leaked password protection requires manual Auth Dashboard configuration.

### Realtime

The frontend subscribes to channels named `comments:${articleSlug}`.

The hardening migration creates the Realtime policy:

- `Authenticated can read comments channels`
- `realtime.topic() LIKE 'comments:%'`

This was not applied to the active BYO project during preparation.

### Edge Functions

Currently deployed on BYO project:

- `discord-post-login`
  - `verify_jwt: true`
  - Remote version is older than local hardening version.
- `discord-userinfo`
  - `verify_jwt: false`
  - This is expected for OAuth userinfo.

Missing from BYO project:

- `send-contact-email`
- `discord-refresh-profile`

Do not deploy these to the active BYO project until a staging project/branch is selected.

## Secrets Required

### Supabase Edge Function Secrets

Configure in the Supabase project that owns the Edge Functions:

- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `CONTACT_CAPTCHA_SECRET`
- `CONTACT_RATE_LIMIT_SALT`
- `DISCORD_RATE_LIMIT_SALT`
- `DISCORD_BOT_TOKEN`
- `DISCORD_GUILD_ID`
- `DISCORD_READER_ROLE_ID`
- `ALLOWED_ORIGINS`

For staging, `ALLOWED_ORIGINS` must include the Vercel Preview URL and any staging custom domain.

### Vercel Environment Variables

Configure in Vercel Preview/staging:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_COMMENTS_SUPABASE_URL`
- `VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY`

Do not expose service role keys or private provider tokens as Vite variables.

## OAuth Discord

Must be configured manually in Supabase Dashboard and Discord Developer Portal:

Supabase Auth provider:

- Provider: custom OAuth2
- Identifier: `custom:discord-minimal`
- Authorization URL: `https://discord.com/oauth2/authorize`
- Token URL: `https://discord.com/api/oauth2/token`
- UserInfo URL: `https://<COMMENTS_STAGING_REF>.supabase.co/functions/v1/discord-userinfo`
- Scopes: `identify guilds.join`
- Email optional: enabled
- PKCE: disabled for this confidential web flow, matching existing project docs.

Discord Developer Portal:

- Add redirect URI:
  - `https://<COMMENTS_STAGING_REF>.supabase.co/auth/v1/callback`
- Confirm bot has permission to manage roles.
- Confirm bot role is above the reader role.
- Confirm Server Members Intent if required.

## Resend

Code path exists only in `send-contact-email`.

Staging requirements:

- `RESEND_API_KEY` configured in Supabase secrets.
- Sender domain validated in Resend if not using `onboarding@resend.dev`.
- Test GET CAPTCHA and POST contact flow after Edge Function deploy.

## Mercado Pago

No executable Mercado Pago integration was found in the repository.

No staging configuration is required unless Mercado Pago is injected externally through Vercel, a CMS, or a third-party script outside the repo.

If added externally, update CSP in `vercel.json` before validation.

## External Integrations Found

- Supabase REST/Auth/Realtime/Functions.
- Discord API from Edge Functions.
- Resend from `send-contact-email`.
- Open-Meteo from frontend weather widget.
- WhatsApp channel links.
- LinkedIn newsletter/share links.

The current CSP allows:

- `connect-src` to Supabase and Open-Meteo.
- `img-src https:`.
- top-level navigation links are not blocked by CSP.

## Safe Automation Not Performed

The following were intentionally not performed because no isolated staging target is available:

- Applying migrations remotely.
- Deploying Edge Functions remotely.
- Modifying Supabase Auth provider configuration.
- Modifying Supabase secrets.
- Modifying Vercel environment variables.
- Creating production deployment.
- Merging to main.

## Deployment Readiness Checklist

Before staging deploy:

1. Choose staging Supabase architecture:
   - unified staging project, or
   - split main/comment staging projects.
2. Create/enable staging Supabase target.
3. Apply all migrations to staging.
4. Run advisors on staging after migrations.
5. Confirm `check_contact_rate_limit` exists.
6. Confirm `contact_rate_limits` has RLS and service-role-only access.
7. Confirm stats RPCs are not executable by `anon`.
8. Confirm `handle_discord_user()` and `rls_auto_enable()` are not executable by `anon`/`authenticated`.
9. Confirm Realtime policy allows `comments:%`.
10. Confirm Storage bucket `blog-images` exists in the correct project, if uploads are expected there.
11. Deploy Edge Functions to staging:
    - `discord-userinfo` with JWT disabled.
    - `discord-post-login` with JWT enabled.
    - `discord-refresh-profile` with JWT enabled.
    - `send-contact-email` with JWT setting chosen intentionally for browser invocation.
12. Configure Supabase secrets.
13. Configure Discord OAuth provider.
14. Configure Discord Developer Portal redirect URI.
15. Configure Vercel Preview env vars.
16. Deploy Vercel Preview from `hardening/security-audit-p1-p4`.
17. Test login/logout.
18. Test comments CRUD.
19. Test Realtime updates.
20. Test Discord role assignment.
21. Test profile refresh.
22. Test contact CAPTCHA and Resend delivery.
23. Test rate limits.
24. Test headers and CSP on preview.
25. Test sitemap, robots and Open Graph.
26. Review logs in Supabase and Vercel.

## Final Pending Items

Required before staging can function:

- Provide or create an isolated staging Supabase project/branch.
- Decide how to handle the current split between `xbjkbziaxwsjzsmxilap` and `rfzjtmleojkojopftkfo`.
- Apply migrations to staging only.
- Deploy Edge Functions to staging only.
- Configure Supabase secrets.
- Configure Discord OAuth and redirect URL for staging.
- Configure Vercel Preview environment variables.
- Link local Vercel project if CLI validation is desired.
- Run full manual staging checklist after Preview deploy.

