-- =====================================================================
-- Atlas comments production hotfix
--
-- Run this in Supabase SQL Editor when production already has the base
-- comments schema, but the latest UI features are missing.
--
-- Fixes, without deleting data:
--   - public.comment_reactions table for like/dislike;
--   - public.discord_profiles.is_verified for Talisson's verified badge;
--   - PostgREST schema cache reload.
-- =====================================================================

BEGIN;

DO $$
BEGIN
  IF to_regclass('public.comments') IS NULL THEN
    RAISE EXCEPTION
      'public.comments does not exist; run docs/discord-comments/01_schema.sql first';
  END IF;

  IF to_regclass('public.discord_profiles') IS NULL THEN
    RAISE EXCEPTION
      'public.discord_profiles does not exist; run docs/discord-comments/01_schema.sql first';
  END IF;

  IF to_regprocedure('public.set_updated_at()') IS NULL THEN
    RAISE EXCEPTION
      'public.set_updated_at() does not exist; run docs/discord-comments/04_sync_comments_schema.sql first';
  END IF;
END
$$;

-- ---------------------------------------------------------------------
-- 1. Verified badge support
-- ---------------------------------------------------------------------

ALTER TABLE public.discord_profiles
  ADD COLUMN IF NOT EXISTS is_verified boolean NOT NULL DEFAULT false;

CREATE OR REPLACE FUNCTION public.set_discord_profile_verification()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = pg_catalog, public
AS $$
BEGIN
  NEW.is_verified := NEW.discord_id = '933780111742877777';
  RETURN NEW;
END
$$;

UPDATE public.discord_profiles
SET
  username = CASE
    WHEN discord_id = '933780111742877777' THEN 'talissondev'
    ELSE username
  END,
  global_name = CASE
    WHEN discord_id = '933780111742877777' THEN COALESCE(NULLIF(global_name, ''), 'Talisson S.')
    ELSE global_name
  END,
  is_verified = (discord_id = '933780111742877777')
WHERE
  is_verified IS DISTINCT FROM (discord_id = '933780111742877777')
  OR (
    discord_id = '933780111742877777'
    AND (
      username IS DISTINCT FROM 'talissondev'
      OR global_name IS NULL
      OR global_name = ''
    )
  );

DROP TRIGGER IF EXISTS discord_profiles_set_verification ON public.discord_profiles;

CREATE TRIGGER discord_profiles_set_verification
  BEFORE INSERT OR UPDATE OF discord_id, is_verified
  ON public.discord_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.set_discord_profile_verification();

REVOKE ALL ON FUNCTION public.set_discord_profile_verification()
  FROM PUBLIC, anon, authenticated;

GRANT SELECT (is_verified)
  ON TABLE public.discord_profiles TO anon, authenticated;

-- ---------------------------------------------------------------------
-- 2. Like/dislike support
-- ---------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS public.comment_reactions (
  comment_id uuid NOT NULL,
  user_id    uuid NOT NULL,
  reaction   text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

LOCK TABLE public.comment_reactions IN SHARE ROW EXCLUSIVE MODE;

ALTER TABLE public.comment_reactions
  ADD COLUMN IF NOT EXISTS comment_id uuid,
  ADD COLUMN IF NOT EXISTS user_id uuid,
  ADD COLUMN IF NOT EXISTS reaction text,
  ADD COLUMN IF NOT EXISTS created_at timestamptz,
  ADD COLUMN IF NOT EXISTS updated_at timestamptz;

ALTER TABLE public.comment_reactions
  ALTER COLUMN comment_id SET NOT NULL,
  ALTER COLUMN user_id SET NOT NULL,
  ALTER COLUMN reaction SET NOT NULL,
  ALTER COLUMN created_at SET DEFAULT now(),
  ALTER COLUMN created_at SET NOT NULL,
  ALTER COLUMN updated_at SET DEFAULT now(),
  ALTER COLUMN updated_at SET NOT NULL;

ALTER TABLE public.comment_reactions
  DROP CONSTRAINT IF EXISTS comment_reactions_comment_id_fkey,
  DROP CONSTRAINT IF EXISTS comment_reactions_user_id_fkey,
  DROP CONSTRAINT IF EXISTS comment_reactions_reaction_check;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conrelid = 'public.comment_reactions'::regclass
      AND conname = 'comment_reactions_pkey'
  ) THEN
    ALTER TABLE public.comment_reactions
      ADD CONSTRAINT comment_reactions_pkey PRIMARY KEY (comment_id, user_id);
  END IF;
END
$$;

ALTER TABLE public.comment_reactions
  ADD CONSTRAINT comment_reactions_comment_id_fkey
    FOREIGN KEY (comment_id)
    REFERENCES public.comments(id)
    ON DELETE CASCADE
    NOT VALID,
  ADD CONSTRAINT comment_reactions_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES public.discord_profiles(id)
    ON DELETE CASCADE
    NOT VALID,
  ADD CONSTRAINT comment_reactions_reaction_check
    CHECK (reaction IN ('like', 'dislike'))
    NOT VALID;

ALTER TABLE public.comment_reactions
  VALIDATE CONSTRAINT comment_reactions_comment_id_fkey,
  VALIDATE CONSTRAINT comment_reactions_user_id_fkey,
  VALIDATE CONSTRAINT comment_reactions_reaction_check;

CREATE INDEX IF NOT EXISTS comment_reactions_comment_idx
  ON public.comment_reactions (comment_id);

CREATE INDEX IF NOT EXISTS comment_reactions_user_idx
  ON public.comment_reactions (user_id);

CREATE INDEX IF NOT EXISTS comment_reactions_comment_reaction_idx
  ON public.comment_reactions (comment_id, reaction);

DROP TRIGGER IF EXISTS comment_reactions_set_updated_at ON public.comment_reactions;
DROP TRIGGER IF EXISTS comment_reactions_90_set_updated_at ON public.comment_reactions;

CREATE TRIGGER comment_reactions_90_set_updated_at
  BEFORE UPDATE
  ON public.comment_reactions
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

ALTER TABLE public.comment_reactions ENABLE ROW LEVEL SECURITY;

REVOKE ALL PRIVILEGES ON TABLE public.comment_reactions FROM anon, authenticated;
GRANT SELECT (comment_id, reaction)
  ON TABLE public.comment_reactions TO anon;
GRANT SELECT (comment_id, user_id, reaction)
  ON TABLE public.comment_reactions TO authenticated;
GRANT INSERT (comment_id, user_id, reaction)
  ON TABLE public.comment_reactions TO authenticated;
-- PostgREST upsert requires table-level UPDATE even when the payload only
-- changes reaction. RLS below still restricts updates to the row owner.
GRANT UPDATE
  ON TABLE public.comment_reactions TO authenticated;
GRANT DELETE
  ON TABLE public.comment_reactions TO authenticated;
GRANT ALL PRIVILEGES
  ON TABLE public.comment_reactions TO service_role;

DROP POLICY IF EXISTS "comment_reactions public read" ON public.comment_reactions;
DROP POLICY IF EXISTS "comment_reactions self insert" ON public.comment_reactions;
DROP POLICY IF EXISTS "comment_reactions self update" ON public.comment_reactions;
DROP POLICY IF EXISTS "comment_reactions self delete" ON public.comment_reactions;
DROP POLICY IF EXISTS "comment_reactions admin delete" ON public.comment_reactions;

CREATE POLICY "comment_reactions public read"
  ON public.comment_reactions
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "comment_reactions self insert"
  ON public.comment_reactions
  FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id
    AND EXISTS (
      SELECT 1
      FROM public.comments AS comment
      WHERE comment.id = comment_id
        AND comment.is_deleted = false
    )
  );

CREATE POLICY "comment_reactions self update"
  ON public.comment_reactions
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (
    auth.uid() = user_id
    AND EXISTS (
      SELECT 1
      FROM public.comments AS comment
      WHERE comment.id = comment_id
        AND comment.is_deleted = false
    )
  );

CREATE POLICY "comment_reactions self delete"
  ON public.comment_reactions
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "comment_reactions admin delete"
  ON public.comment_reactions
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM pg_publication
    WHERE pubname = 'supabase_realtime'
  ) AND NOT EXISTS (
    SELECT 1
    FROM pg_publication_tables
    WHERE pubname = 'supabase_realtime'
      AND schemaname = 'public'
      AND tablename = 'comment_reactions'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.comment_reactions;
  END IF;
END
$$;

NOTIFY pgrst, 'reload schema';

COMMIT;
