# Talisson Souza Showcase

Portfolio built with Vite, React, TypeScript, Supabase and Vercel.

## Supabase Architecture

The repository intentionally separates the two Supabase projects used by the app:

- Main project: `supabase/projects/main`
  - Main frontend data.
  - Contact form Edge Function.
  - Newsletter/contact/storage migrations.
- Comments project: `supabase/projects/comments`
  - Discord login support for comments.
  - Comments schema and Realtime policies.
  - Discord Edge Functions.
- Legacy mixed SQL: `supabase/legacy-mixed`
  - Historical mixed migrations retained for audit only.
  - Do not apply this directory directly to Development, Preview, Staging or Production.

Root-level Supabase paths are intentionally not used. Do not recreate `supabase/config.toml`, `supabase/functions` or `supabase/migrations`.

## Environments

Every environment must provide explicit Supabase variables. Preview and Staging must never fall back to Production automatically.

Required public frontend variables:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_PROJECT_ID=
VITE_COMMENTS_SUPABASE_URL=
VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY=
VITE_COMMENTS_SUPABASE_PROJECT_ID=
```

If any required variable is missing or if a project id does not match its URL ref, the relevant Supabase client fails during initialization.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npm run audit:imports
npm run audit:references
npm run audit:env
```

Use `docs/supabase-architecture.md` for the detailed project map and operational rules.
