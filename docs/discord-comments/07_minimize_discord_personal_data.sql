-- =============================================================================
-- Discord OAuth data minimization (LGPD)
--
-- Purpose:
--   * remove the duplicated e-mail field from public.discord_profiles;
--   * make comments/profile identity depend only on Supabase UID + Discord ID;
--   * preserve comments and roles when an existing native Discord identity
--     signs in through custom:discord-minimal for the first time;
--   * keep the migration reversible at the identity level until the Edge
--     Function deletes the legacy auth user through the supported Admin API.
--
-- This migration does NOT modify Supabase-managed auth tables directly.
-- =============================================================================

BEGIN;

DO $$
BEGIN
  IF to_regclass('public.discord_profiles') IS NULL
     OR to_regclass('public.comments') IS NULL
     OR to_regclass('public.user_roles') IS NULL THEN
    RAISE EXCEPTION
      'Discord comments schema is incomplete; run 01_schema.sql and 04_sync_comments_schema.sql first';
  END IF;
END
$$;

-- Internal hand-off record. It is never exposed to anon/authenticated clients.
CREATE TABLE IF NOT EXISTS public.discord_identity_migrations (
  new_user_id    uuid PRIMARY KEY
    REFERENCES auth.users(id) ON DELETE CASCADE,
  legacy_user_id uuid NOT NULL UNIQUE
    REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at     timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT discord_identity_migrations_distinct_users
    CHECK (new_user_id <> legacy_user_id)
);

ALTER TABLE public.discord_identity_migrations ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public.discord_identity_migrations
  FROM PUBLIC, anon, authenticated;
GRANT ALL PRIVILEGES ON TABLE public.discord_identity_migrations
  TO service_role;

COMMENT ON TABLE public.discord_identity_migrations IS
  'Internal hand-off used to delete a legacy e-mail-bearing Discord Auth user after a minimal OAuth login.';

-- A UID-only ownership transfer is not a content edit. Preserve updated_at
-- during the one-time identity migration while retaining normal edit timestamps.
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

DROP TRIGGER IF EXISTS comments_set_updated_at ON public.comments;
CREATE TRIGGER comments_set_updated_at
  BEFORE UPDATE ON public.comments
  FOR EACH ROW EXECUTE FUNCTION public.set_comment_updated_at();

-- Remove the previous trigger first because its UPDATE OF list referenced email.
DROP TRIGGER IF EXISTS on_auth_user_updated_discord ON auth.users;

CREATE OR REPLACE FUNCTION public.handle_discord_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  meta               jsonb := COALESCE(NEW.raw_user_meta_data, '{}'::jsonb);
  did                text := COALESCE(meta->>'provider_id', meta->>'sub');
  legacy_user_id     uuid;
  legacy_guild_joined boolean := false;
  legacy_role_granted boolean := false;
  legacy_created_at   timestamptz := now();
BEGIN
  IF did IS NULL OR did !~ '^[0-9]+$' THEN
    RETURN NEW;
  END IF;

  -- A custom provider has a different provider key, so Supabase correctly
  -- creates a new Auth user. Transfer only application-owned records, then let
  -- discord-post-login delete the legacy Auth user through the Admin API.
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

-- E-mail was a duplicated display field and has no application dependency.
ALTER TABLE public.discord_profiles
  DROP COLUMN IF EXISTS email;

-- The INSERT trigger already exists in a correctly initialized project.
DROP TRIGGER IF EXISTS on_auth_user_created_discord ON auth.users;
CREATE TRIGGER on_auth_user_created_discord
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_discord_user();

CREATE TRIGGER on_auth_user_updated_discord
  AFTER UPDATE OF raw_user_meta_data ON auth.users
  FOR EACH ROW
  WHEN (OLD.raw_user_meta_data IS DISTINCT FROM NEW.raw_user_meta_data)
  EXECUTE FUNCTION public.handle_discord_user();

NOTIFY pgrst, 'reload schema';

COMMIT;
