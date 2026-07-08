-- =====================================================================
-- Security hardening from the July 2026 audit
-- =====================================================================

BEGIN;

CREATE TABLE IF NOT EXISTS public.contact_rate_limits (
  key_hash text PRIMARY KEY,
  window_start timestamptz NOT NULL DEFAULT now(),
  request_count integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT contact_rate_limits_key_hash_format
    CHECK (key_hash ~ '^[a-f0-9]{64}$'),
  CONSTRAINT contact_rate_limits_request_count_nonnegative
    CHECK (request_count >= 0)
);

ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;
REVOKE ALL PRIVILEGES ON TABLE public.contact_rate_limits
  FROM PUBLIC, anon, authenticated;
GRANT ALL PRIVILEGES ON TABLE public.contact_rate_limits TO service_role;

CREATE OR REPLACE FUNCTION public.check_contact_rate_limit(
  p_key_hash text,
  p_max_requests integer,
  p_window_seconds integer
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, public
AS $$
DECLARE
  current_window timestamptz;
  current_count integer;
BEGIN
  IF p_key_hash IS NULL
     OR p_key_hash !~ '^[a-f0-9]{64}$'
     OR p_max_requests < 1
     OR p_window_seconds < 1 THEN
    RAISE EXCEPTION 'invalid_rate_limit_arguments' USING ERRCODE = '22023';
  END IF;

  PERFORM pg_advisory_xact_lock(hashtextextended(p_key_hash, 0));

  SELECT window_start, request_count
    INTO current_window, current_count
  FROM public.contact_rate_limits
  WHERE key_hash = p_key_hash
  FOR UPDATE;

  IF NOT FOUND THEN
    INSERT INTO public.contact_rate_limits
      (key_hash, window_start, request_count, updated_at)
    VALUES
      (p_key_hash, now(), 1, now());
    RETURN true;
  END IF;

  IF current_window <= now() - make_interval(secs => p_window_seconds) THEN
    UPDATE public.contact_rate_limits
       SET window_start = now(),
           request_count = 1,
           updated_at = now()
     WHERE key_hash = p_key_hash;
    RETURN true;
  END IF;

  IF current_count >= p_max_requests THEN
    RETURN false;
  END IF;

  UPDATE public.contact_rate_limits
     SET request_count = request_count + 1,
         updated_at = now()
   WHERE key_hash = p_key_hash;

  RETURN true;
END
$$;

REVOKE ALL ON FUNCTION public.check_contact_rate_limit(text, integer, integer)
  FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.check_contact_rate_limit(text, integer, integer)
  TO service_role;

DO $$
BEGIN
  IF to_regclass('public.newsletter_subscribers') IS NOT NULL THEN
    DROP POLICY IF EXISTS "Anyone can insert subscribers"
      ON public.newsletter_subscribers;
    REVOKE INSERT ON TABLE public.newsletter_subscribers FROM anon, authenticated;
    GRANT ALL PRIVILEGES ON TABLE public.newsletter_subscribers TO service_role;
  END IF;
END $$;

UPDATE storage.buckets
SET
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif'
  ]
WHERE id = 'blog-images';

DROP POLICY IF EXISTS "Authenticated users can upload blog images"
  ON storage.objects;

CREATE POLICY "Authenticated users can upload blog images"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'blog-images'
    AND auth.uid()::text = (storage.foldername(name))[1]
    AND lower(storage.extension(name)) IN ('jpg', 'jpeg', 'png', 'webp', 'gif')
  );

ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated can read article_comments channel"
  ON realtime.messages;
DROP POLICY IF EXISTS "Authenticated can read comments channels"
  ON realtime.messages;

CREATE POLICY "Authenticated can read comments channels"
  ON realtime.messages
  FOR SELECT
  TO authenticated
  USING (realtime.topic() LIKE 'comments:%');

DO $$
BEGIN
  IF to_regprocedure('public.stats_readers_total()') IS NOT NULL THEN
    REVOKE EXECUTE ON FUNCTION public.stats_readers_total()
      FROM anon;
    GRANT EXECUTE ON FUNCTION public.stats_readers_total()
      TO authenticated, service_role;
  END IF;

  IF to_regprocedure('public.stats_comments_total()') IS NOT NULL THEN
    REVOKE EXECUTE ON FUNCTION public.stats_comments_total()
      FROM anon;
    GRANT EXECUTE ON FUNCTION public.stats_comments_total()
      TO authenticated, service_role;
  END IF;

  IF to_regprocedure('public.stats_comments_by_article()') IS NOT NULL THEN
    REVOKE EXECUTE ON FUNCTION public.stats_comments_by_article()
      FROM anon;
    GRANT EXECUTE ON FUNCTION public.stats_comments_by_article()
      TO authenticated, service_role;
  END IF;

  IF to_regprocedure('public.stats_most_commented_article()') IS NOT NULL THEN
    REVOKE EXECUTE ON FUNCTION public.stats_most_commented_article()
      FROM anon;
    GRANT EXECUTE ON FUNCTION public.stats_most_commented_article()
      TO authenticated, service_role;
  END IF;
END $$;

-- Legacy SECURITY DEFINER helpers may already have explicit grants in the
-- existing BYO comments project. Revoke only when the functions are present so
-- this hardening migration remains safe for clean databases and split Supabase
-- environments.
DO $$
BEGIN
  IF to_regprocedure('public.handle_discord_user()') IS NOT NULL THEN
    REVOKE ALL ON FUNCTION public.handle_discord_user()
      FROM PUBLIC, anon, authenticated;
    GRANT EXECUTE ON FUNCTION public.handle_discord_user()
      TO service_role;
  END IF;

  IF to_regprocedure('public.rls_auto_enable()') IS NOT NULL THEN
    REVOKE ALL ON FUNCTION public.rls_auto_enable()
      FROM PUBLIC, anon, authenticated;
  END IF;
END $$;

NOTIFY pgrst, 'reload schema';

COMMIT;
