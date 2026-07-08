# Legacy Mixed Supabase SQL

This directory preserves historical migrations that mix objects from more than one Supabase responsibility boundary.

Do not apply this directory directly to Development, Preview, Staging or Production.

Use it only for audit, comparison and migration-history context. Any useful statement from these files must be copied into the correct project-specific migration after review:

- Main app/database/storage/contact: `supabase/projects/main/migrations`
- Comments/Discord/Auth/Realtimes/RPCs: `supabase/projects/comments/migrations`
