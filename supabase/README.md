# Supabase Repository Layout

This repository uses an explicit multi-project Supabase layout.

```text
supabase/
  projects/
    main/
      config.toml
      functions/
      migrations/
    comments/
      config.toml
      functions/
      migrations/
  legacy-mixed/
    migrations/
```

## Rules

- Main project assets live only in `supabase/projects/main`.
- Comments and Discord assets live only in `supabase/projects/comments`.
- Mixed historical SQL lives only in `supabase/legacy-mixed` for audit context.
- Do not recreate root-level Supabase CLI paths.
- Do not apply `legacy-mixed` to any environment without manually splitting and reviewing it first.

## CLI Workdirs

The source layout is multi-project. Generate a temporary Supabase CLI-compatible workdir before running CLI commands:

```bash
npm run supabase:workdir:main
npm run supabase:workdir:comments
```

Then run CLI commands against `.supabase-workdir/main` or `.supabase-workdir/comments`.

## Environment Policy

Development, Preview, Staging and Production must each point to explicit Supabase project refs. No environment may automatically fall back to Production.

Frontend initialization validates:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_COMMENTS_SUPABASE_URL`
- `VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY`
- `VITE_COMMENTS_SUPABASE_PROJECT_ID`

Edge Function secrets remain in Supabase, not in Vercel browser variables.

## Audits

```bash
npm run audit:supabase
npm run audit:supabase:migrations
npm run audit:supabase:functions
npm run audit:supabase:rls
npm run audit:supabase:policies
npm run audit:supabase:storage
npm run audit:supabase:realtime
npm run audit:supabase:secrets
```
