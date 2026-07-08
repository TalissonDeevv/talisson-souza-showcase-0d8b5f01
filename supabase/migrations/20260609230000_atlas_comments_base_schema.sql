-- =====================================================================
-- Atlas comments base schema
--
-- Keeps the documented Discord comments schema inside Supabase migrations so
-- a fresh project can be rebuilt from source control before later hardening
-- migrations reference user_roles, has_role, comments and discord_profiles.
-- =====================================================================

BEGIN;

CREATE EXTENSION IF NOT EXISTS pgcrypto;

DO $$
BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END
$$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public.user_roles FROM anon, authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.user_roles TO authenticated;
GRANT ALL PRIVILEGES ON TABLE public.user_roles TO service_role;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION public.has_role(uuid, public.app_role)
  FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role)
  TO authenticated, service_role;

DROP POLICY IF EXISTS "user_roles self read" ON public.user_roles;
DROP POLICY IF EXISTS "user_roles admin read" ON public.user_roles;
DROP POLICY IF EXISTS "user_roles admin write" ON public.user_roles;

CREATE POLICY "user_roles self read"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "user_roles admin read"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "user_roles admin write"
  ON public.user_roles
  FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TABLE IF NOT EXISTS public.discord_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  discord_id text NOT NULL UNIQUE,
  username text NOT NULL,
  global_name text,
  avatar_url text,
  is_verified boolean NOT NULL DEFAULT false,
  guild_joined boolean NOT NULL DEFAULT false,
  role_granted boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  last_login_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.discord_profiles
  ADD COLUMN IF NOT EXISTS is_verified boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS guild_joined boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS role_granted boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS last_login_at timestamptz NOT NULL DEFAULT now(),
  DROP COLUMN IF EXISTS email;

CREATE INDEX IF NOT EXISTS discord_profiles_discord_id_idx
  ON public.discord_profiles (discord_id);

ALTER TABLE public.discord_profiles ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public.discord_profiles FROM anon, authenticated;
GRANT SELECT (id, username, global_name, avatar_url, is_verified, created_at, updated_at)
  ON TABLE public.discord_profiles TO anon;
GRANT SELECT ON TABLE public.discord_profiles TO authenticated;
GRANT ALL PRIVILEGES ON TABLE public.discord_profiles TO service_role;

DROP POLICY IF EXISTS "profiles public read" ON public.discord_profiles;
DROP POLICY IF EXISTS "profiles self update" ON public.discord_profiles;

CREATE POLICY "profiles public read"
  ON public.discord_profiles
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS public.comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_slug text NOT NULL,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  parent_id uuid,
  content text NOT NULL,
  is_deleted boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT comments_content_length CHECK (char_length(content) BETWEEN 1 AND 2000),
  CONSTRAINT comments_slug_length CHECK (char_length(article_slug) BETWEEN 1 AND 200),
  CONSTRAINT comments_parent_not_self CHECK (parent_id IS NULL OR parent_id <> id)
);

ALTER TABLE public.comments
  ADD COLUMN IF NOT EXISTS parent_id uuid,
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

ALTER TABLE public.comments
  DROP CONSTRAINT IF EXISTS comments_parent_id_fkey;

ALTER TABLE public.comments
  ADD CONSTRAINT comments_parent_id_fkey
    FOREIGN KEY (parent_id)
    REFERENCES public.comments(id)
    ON DELETE CASCADE
    NOT VALID;

ALTER TABLE public.comments
  VALIDATE CONSTRAINT comments_parent_id_fkey;

CREATE INDEX IF NOT EXISTS comments_slug_created_idx
  ON public.comments (article_slug, created_at DESC)
  WHERE is_deleted = false;

CREATE INDEX IF NOT EXISTS comments_user_idx
  ON public.comments (user_id);

CREATE INDEX IF NOT EXISTS comments_parent_idx
  ON public.comments (parent_id, created_at)
  WHERE parent_id IS NOT NULL;

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
  PERFORM pg_advisory_xact_lock(hashtextextended(NEW.user_id::text, 0));

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

CREATE OR REPLACE FUNCTION public.set_comment_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.content IS DISTINCT FROM OLD.content
     OR NEW.article_slug IS DISTINCT FROM OLD.article_slug
     OR NEW.parent_id IS DISTINCT FROM OLD.parent_id
     OR NEW.is_deleted IS DISTINCT FROM OLD.is_deleted THEN
    NEW.updated_at := now();
  ELSE
    NEW.updated_at := OLD.updated_at;
  END IF;

  RETURN NEW;
END
$$;

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
  EXECUTE FUNCTION public.set_comment_updated_at();

DROP TRIGGER IF EXISTS discord_profiles_set_updated_at ON public.discord_profiles;
CREATE TRIGGER discord_profiles_set_updated_at
  BEFORE UPDATE
  ON public.discord_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

REVOKE ALL ON FUNCTION public.sanitize_comment() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.enforce_comment_depth() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.enforce_comment_rate_limit() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.set_comment_updated_at() FROM PUBLIC, anon, authenticated;

ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public.comments FROM anon, authenticated;
GRANT SELECT ON TABLE public.comments TO anon, authenticated;
GRANT INSERT (article_slug, user_id, parent_id, content)
  ON TABLE public.comments TO authenticated;
GRANT UPDATE (content)
  ON TABLE public.comments TO authenticated;
GRANT DELETE ON TABLE public.comments TO authenticated;
GRANT ALL PRIVILEGES ON TABLE public.comments TO service_role;

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

CREATE TABLE IF NOT EXISTS public.discord_identity_migrations (
  new_user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  legacy_user_id uuid NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT discord_identity_migrations_distinct_users
    CHECK (new_user_id <> legacy_user_id)
);

ALTER TABLE public.discord_identity_migrations ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public.discord_identity_migrations
  FROM PUBLIC, anon, authenticated;
GRANT ALL PRIVILEGES ON TABLE public.discord_identity_migrations TO service_role;

CREATE OR REPLACE FUNCTION public.handle_discord_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  meta jsonb := COALESCE(NEW.raw_user_meta_data, '{}'::jsonb);
  did text := COALESCE(meta->>'provider_id', meta->>'sub');
  legacy_user_id uuid;
  legacy_guild_joined boolean := false;
  legacy_role_granted boolean := false;
  legacy_created_at timestamptz := now();
BEGIN
  IF did IS NULL OR did !~ '^[0-9]+$' THEN
    RETURN NEW;
  END IF;

  SELECT id, guild_joined, role_granted, created_at
    INTO legacy_user_id, legacy_guild_joined, legacy_role_granted,
         legacy_created_at
  FROM public.discord_profiles
  WHERE discord_id = did
    AND id <> NEW.id
  FOR UPDATE;

  IF legacy_user_id IS NOT NULL THEN
    UPDATE public.comments
       SET user_id = NEW.id
     WHERE user_id = legacy_user_id;

    INSERT INTO public.user_roles (user_id, role)
    SELECT NEW.id, role
      FROM public.user_roles
     WHERE user_id = legacy_user_id
    ON CONFLICT (user_id, role) DO NOTHING;

    DELETE FROM public.user_roles
     WHERE user_id = legacy_user_id;

    INSERT INTO public.discord_identity_migrations
      (new_user_id, legacy_user_id)
    VALUES
      (NEW.id, legacy_user_id)
    ON CONFLICT (new_user_id) DO UPDATE
      SET legacy_user_id = EXCLUDED.legacy_user_id,
          created_at = now();

    DELETE FROM public.discord_profiles
     WHERE id = legacy_user_id;
  END IF;

  INSERT INTO public.discord_profiles (
    id,
    discord_id,
    username,
    global_name,
    avatar_url,
    guild_joined,
    role_granted,
    created_at,
    last_login_at,
    updated_at
  )
  VALUES (
    NEW.id,
    did,
    COALESCE(
      NULLIF(meta->>'preferred_username', ''),
      NULLIF(meta->>'user_name', ''),
      NULLIF(meta->>'full_name', ''),
      NULLIF(meta->>'name', ''),
      'Leitor'
    ),
    COALESCE(
      NULLIF(meta->>'global_name', ''),
      NULLIF(meta->'custom_claims'->>'global_name', ''),
      NULLIF(meta->>'full_name', ''),
      NULLIF(meta->>'name', '')
    ),
    COALESCE(
      NULLIF(meta->>'avatar_url', ''),
      NULLIF(meta->>'picture', '')
    ),
    legacy_guild_joined,
    legacy_role_granted,
    legacy_created_at,
    now(),
    now()
  )
  ON CONFLICT (id) DO UPDATE
    SET discord_id = EXCLUDED.discord_id,
        username = EXCLUDED.username,
        global_name = COALESCE(
          EXCLUDED.global_name,
          public.discord_profiles.global_name
        ),
        avatar_url = COALESCE(
          EXCLUDED.avatar_url,
          public.discord_profiles.avatar_url
        ),
        last_login_at = now(),
        updated_at = now();

  RETURN NEW;
END
$$;

REVOKE ALL ON FUNCTION public.handle_discord_user() FROM PUBLIC;

DROP TRIGGER IF EXISTS on_auth_user_created_discord ON auth.users;
DROP TRIGGER IF EXISTS on_auth_user_updated_discord ON auth.users;

CREATE TRIGGER on_auth_user_created_discord
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_discord_user();

CREATE TRIGGER on_auth_user_updated_discord
  AFTER UPDATE OF raw_user_meta_data ON auth.users
  FOR EACH ROW
  WHEN (OLD.raw_user_meta_data IS DISTINCT FROM NEW.raw_user_meta_data)
  EXECUTE FUNCTION public.handle_discord_user();

CREATE OR REPLACE FUNCTION public.stats_readers_total()
RETURNS bigint
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*)::bigint FROM public.discord_profiles
$$;

CREATE OR REPLACE FUNCTION public.stats_comments_total()
RETURNS bigint
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COUNT(*)::bigint FROM public.comments WHERE is_deleted = false
$$;

CREATE OR REPLACE FUNCTION public.stats_comments_by_article()
RETURNS TABLE(article_slug text, total bigint)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT article_slug, COUNT(*)::bigint
  FROM public.comments
  WHERE is_deleted = false
  GROUP BY article_slug
  ORDER BY 2 DESC
$$;

CREATE OR REPLACE FUNCTION public.stats_most_commented_article()
RETURNS TABLE(article_slug text, total bigint)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT article_slug, COUNT(*)::bigint
  FROM public.comments
  WHERE is_deleted = false
  GROUP BY article_slug
  ORDER BY 2 DESC
  LIMIT 1
$$;

REVOKE ALL ON FUNCTION public.stats_readers_total() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.stats_comments_total() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.stats_comments_by_article() FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.stats_most_commented_article() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.stats_readers_total()
  TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.stats_comments_total()
  TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.stats_comments_by_article()
  TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.stats_most_commented_article()
  TO authenticated, service_role;

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
