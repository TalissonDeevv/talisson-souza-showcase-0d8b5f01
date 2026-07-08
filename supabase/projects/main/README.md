# Main Supabase Project

Purpose: primary application data and contact-related backend behavior.

Current project ref in `config.toml`:

```text
xbjkbziaxwsjzsmxilap
```

## Contents

- `functions/send-contact-email`: contact form CAPTCHA, rate limit and Resend delivery.
- `migrations`: main app migrations for articles/newsletter/contact/storage hardening.
- `migrations/20260708151015_explicit_data_api_grants.sql`: explicit Data API grants and final policy hardening for new Supabase projects.

## Required Frontend Variables

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_PROJECT_ID=
```

`VITE_SUPABASE_PROJECT_ID` must match the project ref in `VITE_SUPABASE_URL`.

## Required Edge Function Secrets

```bash
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
CONTACT_CAPTCHA_SECRET=
CONTACT_RATE_LIMIT_SALT=
ALLOWED_ORIGINS=
```

## Validation

```bash
npm run audit:supabase:migrations
npm run audit:supabase:functions
npm run audit:supabase:rls
npm run audit:supabase:policies
npm run audit:supabase:storage
```
