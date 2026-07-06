-- =====================================================================
-- Atlas comments schema synchronization
-- Target: Supabase BYO project "Atlas o Leitor"
--
-- This migration is additive/idempotent and preserves existing rows.
-- It synchronizes replies, constraints, indexes, triggers, RLS, grants,
-- Realtime and the PostgREST schema cache with the current frontend.
-- =====================================================================

BEGIN;

DO $$
BEGIN
  IF to_regclass('public.comments') IS NULL THEN
    RAISE EXCEPTION
      'public.comments does not exist; run 01_schema.sql first';
  END IF;

  IF to_regclass('public.discord_profiles') IS NULL THEN
    RAISE EXCEPTION
      'public.discord_profiles does not exist; run 01_schema.sql first';
  END IF;

  IF to_regclass('public.user_roles') IS NULL THEN
    RAISE EXCEPTION
      'public.user_roles does not exist; run 01_schema.sql first';
  END IF;

  IF to_regprocedure('public.has_role(uuid,public.app_role)') IS NULL THEN
    RAISE EXCEPTION
      'public.has_role(uuid, public.app_role) does not exist';
  END IF;
END
$$;

-- Keep writes out while constraints and triggers are synchronized.
LOCK TABLE public.comments IN SHARE ROW EXCLUSIVE MODE;

-- 1. COLUMNS -----------------------------------------------------------
ALTER TABLE public.comments
  ADD COLUMN IF NOT EXISTS parent_id uuid;

ALTER TABLE public.comments
  ALTER COLUMN id SET DEFAULT gen_random_uuid(),
  ALTER COLUMN article_slug SET NOT NULL,
  ALTER COLUMN user_id SET NOT NULL,
  ALTER COLUMN content SET NOT NULL,
  ALTER COLUMN is_deleted SET DEFAULT false,
  ALTER COLUMN is_deleted SET NOT NULL,
  ALTER COLUMN created_at SET DEFAULT now(),
  ALTER COLUMN created_at SET NOT NULL,
  ALTER COLUMN updated_at SET DEFAULT now(),
  ALTER COLUMN updated_at SET NOT NULL;

DO $$
DECLARE
  mismatch text;
BEGIN
  SELECT string_agg(
    format('%I expected %s but found %s', expected.column_name,
      expected.udt_name, COALESCE(actual.udt_name, '<missing>')),
    '; '
  )
  INTO mismatch
  FROM (
    VALUES
      ('id', 'uuid'),
      ('article_slug', 'text'),
      ('user_id', 'uuid'),
      ('parent_id', 'uuid'),
      ('content', 'text'),
      ('is_deleted', 'bool'),
      ('created_at', 'timestamptz'),
      ('updated_at', 'timestamptz')
  ) AS expected(column_name, udt_name)
  LEFT JOIN information_schema.columns AS actual
    ON actual.table_schema = 'public'
   AND actual.table_name = 'comments'
   AND actual.column_name = expected.column_name
   AND actual.udt_name = expected.udt_name
  WHERE actual.column_name IS NULL;

  IF mismatch IS NOT NULL THEN
    RAISE EXCEPTION 'comments schema type mismatch: %', mismatch;
  END IF;
END
$$;

-- Refuse to silently rewrite inconsistent existing reply data.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM public.comments AS child
    LEFT JOIN public.comments AS parent ON parent.id = child.parent_id
    WHERE child.parent_id IS NOT NULL
      AND parent.id IS NULL
  ) THEN
    RAISE EXCEPTION 'orphan_comment_reply_detected';
  END IF;

  IF EXISTS (
    SELECT 1
    FROM public.comments AS child
    JOIN public.comments AS parent ON parent.id = child.parent_id
    WHERE child.parent_id IS NOT NULL
      AND parent.parent_id IS NOT NULL
  ) THEN
    RAISE EXCEPTION 'nested_comment_reply_detected';
  END IF;

  IF EXISTS (
    SELECT 1
    FROM public.comments AS child
    JOIN public.comments AS parent ON parent.id = child.parent_id
    WHERE child.parent_id IS NOT NULL
      AND child.article_slug <> parent.article_slug
  ) THEN
    RAISE EXCEPTION 'cross_article_reply_detected';
  END IF;
END
$$;

-- 2. FOREIGN KEYS + CHECK CONSTRAINTS ---------------------------------
ALTER TABLE public.comments
  DROP CONSTRAINT IF EXISTS comments_user_id_fkey,
  DROP CONSTRAINT IF EXISTS comments_parent_id_fkey,
  DROP CONSTRAINT IF EXISTS comments_content_length,
  DROP CONSTRAINT IF EXISTS comments_slug_length,
  DROP CONSTRAINT IF EXISTS comments_parent_not_self;

ALTER TABLE public.comments
  ADD CONSTRAINT comments_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES auth.users(id)
    ON DELETE CASCADE
    NOT VALID,
  ADD CONSTRAINT comments_parent_id_fkey
    FOREIGN KEY (parent_id)
    REFERENCES public.comments(id)
    ON DELETE CASCADE
    NOT VALID,
  ADD CONSTRAINT comments_content_length
    CHECK (char_length(content) BETWEEN 1 AND 2000)
    NOT VALID,
  ADD CONSTRAINT comments_slug_length
    CHECK (char_length(article_slug) BETWEEN 1 AND 200)
    NOT VALID,
  ADD CONSTRAINT comments_parent_not_self
    CHECK (parent_id IS NULL OR parent_id <> id)
    NOT VALID;

ALTER TABLE public.comments
  VALIDATE CONSTRAINT comments_user_id_fkey,
  VALIDATE CONSTRAINT comments_parent_id_fkey,
  VALIDATE CONSTRAINT comments_content_length,
  VALIDATE CONSTRAINT comments_slug_length,
  VALIDATE CONSTRAINT comments_parent_not_self;

-- 3. INDEXES -----------------------------------------------------------
DROP INDEX IF EXISTS public.comments_slug_created_idx;
DROP INDEX IF EXISTS public.comments_user_idx;
DROP INDEX IF EXISTS public.comments_parent_idx;

CREATE INDEX comments_slug_created_idx
  ON public.comments (article_slug, created_at DESC)
  WHERE is_deleted = false;

CREATE INDEX comments_user_idx
  ON public.comments (user_id);

CREATE INDEX comments_parent_idx
  ON public.comments (parent_id, created_at)
  WHERE parent_id IS NOT NULL;

-- 4. CONTENT SANITIZATION ---------------------------------------------
CREATE OR REPLACE FUNCTION public.sanitize_comment()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = pg_catalog, public
AS $$
BEGIN
  NEW.content := btrim(
    translate(NEW.content, U&'\200B\200C\200D\FEFF', '')
  );

  IF char_length(NEW.content) = 0 THEN
    RAISE EXCEPTION 'empty_comment' USING ERRCODE = 'P0001';
  END IF;

  RETURN NEW;
END
$$;

-- 5. ONE-LEVEL REPLY INTEGRITY ----------------------------------------
CREATE OR REPLACE FUNCTION public.enforce_comment_depth()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
DECLARE
  parent_article text;
  parent_parent uuid;
  parent_deleted boolean;
BEGIN
  -- A root article cannot be moved away from its existing replies.
  IF TG_OP = 'UPDATE'
     AND NEW.article_slug IS DISTINCT FROM OLD.article_slug
     AND EXISTS (
       SELECT 1
       FROM public.comments AS child
       WHERE child.parent_id = OLD.id
         AND child.article_slug <> NEW.article_slug
     ) THEN
    RAISE EXCEPTION 'reply_article_mismatch' USING ERRCODE = 'P0001';
  END IF;

  IF NEW.parent_id IS NULL THEN
    RETURN NEW;
  END IF;

  IF NEW.parent_id = NEW.id THEN
    RAISE EXCEPTION 'reply_self_parent' USING ERRCODE = 'P0001';
  END IF;

  SELECT parent.article_slug, parent.parent_id, parent.is_deleted
  INTO parent_article, parent_parent, parent_deleted
  FROM public.comments AS parent
  WHERE parent.id = NEW.parent_id
  FOR KEY SHARE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'reply_parent_not_found' USING ERRCODE = 'P0001';
  END IF;

  IF parent_parent IS NOT NULL THEN
    RAISE EXCEPTION 'reply_depth_exceeded' USING ERRCODE = 'P0001';
  END IF;

  IF parent_article <> NEW.article_slug THEN
    RAISE EXCEPTION 'reply_article_mismatch' USING ERRCODE = 'P0001';
  END IF;

  IF parent_deleted THEN
    RAISE EXCEPTION 'reply_parent_deleted' USING ERRCODE = 'P0001';
  END IF;

  RETURN NEW;
END
$$;

-- 6. RATE LIMIT --------------------------------------------------------
CREATE OR REPLACE FUNCTION public.enforce_comment_rate_limit()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
DECLARE
  recent_count integer;
  last_comment timestamptz;
BEGIN
  -- Serializes inserts per user so concurrent requests cannot bypass limits.
  PERFORM pg_advisory_xact_lock(
    hashtextextended(NEW.user_id::text, 0)
  );

  SELECT
    MAX(created_at),
    COUNT(*) FILTER (WHERE created_at > now() - interval '1 hour')
  INTO last_comment, recent_count
  FROM public.comments
  WHERE user_id = NEW.user_id;

  IF last_comment IS NOT NULL
     AND last_comment > now() - interval '15 seconds' THEN
    RAISE EXCEPTION 'rate_limit_short' USING ERRCODE = 'P0001';
  END IF;

  IF recent_count >= 20 THEN
    RAISE EXCEPTION 'rate_limit_hour' USING ERRCODE = 'P0001';
  END IF;

  RETURN NEW;
END
$$;

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = pg_catalog, public
AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END
$$;

-- Trigger names encode execution order.
DROP TRIGGER IF EXISTS comments_sanitize ON public.comments;
DROP TRIGGER IF EXISTS comments_enforce_depth ON public.comments;
DROP TRIGGER IF EXISTS comments_rate_limit ON public.comments;
DROP TRIGGER IF EXISTS comments_set_updated_at ON public.comments;
DROP TRIGGER IF EXISTS comments_10_sanitize ON public.comments;
DROP TRIGGER IF EXISTS comments_20_enforce_depth ON public.comments;
DROP TRIGGER IF EXISTS comments_30_rate_limit ON public.comments;
DROP TRIGGER IF EXISTS comments_90_set_updated_at ON public.comments;

CREATE TRIGGER comments_10_sanitize
  BEFORE INSERT OR UPDATE OF content
  ON public.comments
  FOR EACH ROW
  EXECUTE FUNCTION public.sanitize_comment();

CREATE TRIGGER comments_20_enforce_depth
  BEFORE INSERT OR UPDATE OF parent_id, article_slug
  ON public.comments
  FOR EACH ROW
  EXECUTE FUNCTION public.enforce_comment_depth();

CREATE TRIGGER comments_30_rate_limit
  BEFORE INSERT
  ON public.comments
  FOR EACH ROW
  EXECUTE FUNCTION public.enforce_comment_rate_limit();

CREATE TRIGGER comments_90_set_updated_at
  BEFORE UPDATE
  ON public.comments
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

REVOKE ALL ON FUNCTION public.sanitize_comment() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.enforce_comment_depth() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.enforce_comment_rate_limit() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;

-- 7. MINIMUM PRIVILEGES ------------------------------------------------
-- RLS does not protect TRUNCATE, so broad default table grants must be
-- removed before granting only the operations used by the frontend.
REVOKE ALL PRIVILEGES ON TABLE public.comments FROM anon, authenticated;
GRANT SELECT ON TABLE public.comments TO anon, authenticated;
GRANT INSERT (article_slug, user_id, parent_id, content)
  ON TABLE public.comments TO authenticated;
GRANT UPDATE (content)
  ON TABLE public.comments TO authenticated;
GRANT DELETE
  ON TABLE public.comments TO authenticated;
GRANT ALL PRIVILEGES
  ON TABLE public.comments TO service_role;

-- Supporting tables created by 01_schema.sql had inherited broad default
-- grants as well. Keep their frontend contract while removing TRUNCATE and
-- unrelated writes.
REVOKE ALL PRIVILEGES ON TABLE public.user_roles FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE
  ON TABLE public.user_roles TO authenticated;
GRANT ALL PRIVILEGES
  ON TABLE public.user_roles TO service_role;

REVOKE ALL PRIVILEGES ON TABLE public.discord_profiles FROM anon, authenticated;
GRANT SELECT (id, username, global_name, avatar_url, created_at, updated_at)
  ON TABLE public.discord_profiles TO anon;
-- The currently deployed auth hook still requests the complete owner profile.
-- Keep authenticated reads compatible while removing all write/TRUNCATE grants.
GRANT SELECT
  ON TABLE public.discord_profiles TO authenticated;
GRANT ALL PRIVILEGES
  ON TABLE public.discord_profiles TO service_role;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role)
  FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role)
  TO authenticated, service_role;

-- 8. RLS POLICIES ------------------------------------------------------
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "comments public read" ON public.comments;
DROP POLICY IF EXISTS "comments self insert" ON public.comments;
DROP POLICY IF EXISTS "comments self update" ON public.comments;
DROP POLICY IF EXISTS "comments self delete" ON public.comments;
DROP POLICY IF EXISTS "comments admin manage" ON public.comments;
DROP POLICY IF EXISTS "comments admin update" ON public.comments;
DROP POLICY IF EXISTS "comments admin delete" ON public.comments;

CREATE POLICY "comments public read"
  ON public.comments
  FOR SELECT
  TO anon, authenticated
  USING (is_deleted = false);

CREATE POLICY "comments self insert"
  ON public.comments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "comments self update"
  ON public.comments
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "comments self delete"
  ON public.comments
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "comments admin update"
  ON public.comments
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "comments admin delete"
  ON public.comments
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- 9. REALTIME + POSTGREST CACHE ---------------------------------------
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
      AND tablename = 'comments'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.comments;
  END IF;
END
$$;

NOTIFY pgrst, 'reload schema';

COMMIT;
