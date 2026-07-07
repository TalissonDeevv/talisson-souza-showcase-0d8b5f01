-- Transactional validation of the native Discord -> minimal OAuth migration.
-- Uses the existing profile as the legacy identity and rolls everything back.

BEGIN;

DO $$
DECLARE
  legacy_id       uuid;
  minimal_id      uuid := gen_random_uuid();
  discord_user_id text;
  auth_instance   uuid;
  old_updated_at  timestamptz;
  moved_updated_at timestamptz;
BEGIN
  SELECT id, discord_id
    INTO legacy_id, discord_user_id
  FROM public.discord_profiles
  ORDER BY created_at
  LIMIT 1;

  IF legacy_id IS NULL THEN
    RAISE EXCEPTION 'Create one legacy Discord profile before validation';
  END IF;

  SELECT instance_id
    INTO auth_instance
  FROM auth.users
  WHERE id = legacy_id;

  SELECT max(updated_at)
    INTO old_updated_at
  FROM public.comments
  WHERE user_id = legacy_id;

  INSERT INTO public.user_roles (user_id, role)
  VALUES (legacy_id, 'user')
  ON CONFLICT (user_id, role) DO NOTHING;

  PERFORM set_config('atlas.legacy_user_id', legacy_id::text, true);
  PERFORM set_config('atlas.minimal_user_id', minimal_id::text, true);

  INSERT INTO auth.users (
    id,
    instance_id,
    aud,
    role,
    raw_app_meta_data,
    raw_user_meta_data,
    created_at,
    updated_at
  )
  VALUES (
    minimal_id,
    auth_instance,
    'authenticated',
    'authenticated',
    jsonb_build_object(
      'provider', 'custom:discord-minimal',
      'providers', jsonb_build_array('custom:discord-minimal')
    ),
    jsonb_build_object(
      'sub', discord_user_id,
      'provider_id', discord_user_id,
      'preferred_username', 'atlas-migration-test',
      'name', 'Atlas Migration Test'
    ),
    now(),
    now()
  );

  IF NOT EXISTS (
    SELECT 1
    FROM public.discord_identity_migrations
    WHERE new_user_id = minimal_id
      AND legacy_user_id = legacy_id
  ) THEN
    RAISE EXCEPTION 'migration_handoff_missing';
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.discord_profiles WHERE id = legacy_id
  ) OR NOT EXISTS (
    SELECT 1
    FROM public.discord_profiles
    WHERE id = minimal_id
      AND discord_id = discord_user_id
  ) THEN
    RAISE EXCEPTION 'profile_transfer_failed';
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.comments WHERE user_id = legacy_id
  ) THEN
    RAISE EXCEPTION 'comment_owner_not_transferred';
  END IF;

  IF EXISTS (
    SELECT 1 FROM public.user_roles WHERE user_id = legacy_id
  ) OR NOT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = minimal_id
      AND role = 'user'
  ) THEN
    RAISE EXCEPTION 'role_transfer_failed';
  END IF;

  SELECT max(updated_at)
    INTO moved_updated_at
  FROM public.comments
  WHERE user_id = minimal_id;

  IF old_updated_at IS DISTINCT FROM moved_updated_at THEN
    RAISE EXCEPTION 'comment_timestamp_changed_during_identity_transfer';
  END IF;

  -- Mirrors the supported Auth Admin delete performed by discord-post-login.
  DELETE FROM auth.users WHERE id = legacy_id;

  IF EXISTS (
    SELECT 1
    FROM public.discord_identity_migrations
    WHERE new_user_id = minimal_id
  ) THEN
    RAISE EXCEPTION 'migration_handoff_not_cleaned';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM public.discord_profiles WHERE id = minimal_id
  ) THEN
    RAISE EXCEPTION 'new_profile_lost_after_legacy_cleanup';
  END IF;
END
$$;

ROLLBACK;
