-- =====================================================================
-- Atlas comments: verified owner badge
--
-- Marks the official Talisson Discord account as verified without exposing
-- the Discord ID to anonymous readers. The frontend reads only is_verified.
-- =====================================================================

BEGIN;

DO $$
BEGIN
  IF to_regclass('public.discord_profiles') IS NULL THEN
    RAISE EXCEPTION
      'public.discord_profiles does not exist; run the Atlas comments base schema first';
  END IF;
END
$$;

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

NOTIFY pgrst, 'reload schema';

COMMIT;
