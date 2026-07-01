-- =====================================================================
-- Discord Comments System — Schema for NEW Supabase project (BYO)
-- Run this AFTER creating your new Supabase project and enabling
-- Discord as an Auth Provider in Authentication → Providers.
--
-- Scopes to configure in Supabase Discord provider: identify email guilds.join
-- =====================================================================

-- 1. ENUMS ------------------------------------------------------------
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- 2. USER ROLES (never on profiles — avoids privilege escalation) -----
CREATE TABLE public.user_roles (
  id      uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role    public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL    ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "user_roles self read" ON public.user_roles
  FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "user_roles admin read" ON public.user_roles
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "user_roles admin write" ON public.user_roles
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 3. DISCORD PROFILES ------------------------------------------------
-- One row per authenticated Discord user. Mirrors the identity data
-- Supabase stores in auth.users so the client can read it without
-- extra JWT parsing and so future tables (badges, levels, etc.)
-- can FK into a stable public row.
CREATE TABLE public.discord_profiles (
  id           uuid        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  discord_id   text        NOT NULL UNIQUE,
  username     text        NOT NULL,
  global_name  text,
  avatar_url   text,
  email        text,
  guild_joined boolean     NOT NULL DEFAULT false,
  role_granted boolean     NOT NULL DEFAULT false,
  created_at   timestamptz NOT NULL DEFAULT now(),
  last_login_at timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT           ON public.discord_profiles TO anon, authenticated;
GRANT UPDATE (last_login_at, updated_at) ON public.discord_profiles TO authenticated;
GRANT ALL              ON public.discord_profiles TO service_role;
ALTER TABLE public.discord_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles public read" ON public.discord_profiles
  FOR SELECT USING (true);
CREATE POLICY "profiles self update" ON public.discord_profiles
  FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE INDEX discord_profiles_discord_id_idx ON public.discord_profiles (discord_id);

-- 4. TRIGGER: create/refresh discord_profiles on signup + login -----
-- Reads Discord identity fields from raw_user_meta_data (Supabase
-- populates them from the provider identity token).
CREATE OR REPLACE FUNCTION public.handle_discord_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  meta jsonb := COALESCE(NEW.raw_user_meta_data, '{}'::jsonb);
  did  text  := COALESCE(meta->>'provider_id', meta->>'sub');
BEGIN
  IF did IS NULL THEN RETURN NEW; END IF;

  INSERT INTO public.discord_profiles
    (id, discord_id, username, global_name, avatar_url, email, last_login_at, updated_at)
  VALUES (
    NEW.id,
    did,
    COALESCE(meta->>'user_name', meta->>'preferred_username', meta->>'name', 'user'),
    NULLIF(meta->>'global_name', ''),
    NULLIF(meta->>'avatar_url', ''),
    NEW.email,
    now(), now()
  )
  ON CONFLICT (id) DO UPDATE
    SET username    = EXCLUDED.username,
        global_name = EXCLUDED.global_name,
        avatar_url  = EXCLUDED.avatar_url,
        email       = EXCLUDED.email,
        last_login_at = now(),
        updated_at    = now();
  RETURN NEW;
END $$;

CREATE TRIGGER on_auth_user_created_discord
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_discord_user();

CREATE TRIGGER on_auth_user_updated_discord
  AFTER UPDATE OF raw_user_meta_data, email ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_discord_user();

-- 5. COMMENTS ---------------------------------------------------------
CREATE TABLE public.comments (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  article_slug  text        NOT NULL,
  user_id       uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content       text        NOT NULL,
  is_deleted    boolean     NOT NULL DEFAULT false,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT comments_content_length CHECK (char_length(content) BETWEEN 1 AND 2000),
  CONSTRAINT comments_slug_length    CHECK (char_length(article_slug) BETWEEN 1 AND 200)
);
GRANT SELECT                          ON public.comments TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE          ON public.comments TO authenticated;
GRANT ALL                             ON public.comments TO service_role;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

CREATE INDEX comments_slug_created_idx ON public.comments (article_slug, created_at DESC)
  WHERE is_deleted = false;
CREATE INDEX comments_user_idx         ON public.comments (user_id);

CREATE POLICY "comments public read" ON public.comments
  FOR SELECT USING (is_deleted = false);
CREATE POLICY "comments self insert" ON public.comments
  FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "comments self update" ON public.comments
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "comments self delete" ON public.comments
  FOR DELETE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "comments admin manage" ON public.comments
  FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 6. RATE LIMIT — 1 comment / 15s, 20 comments / hour -----------------
CREATE OR REPLACE FUNCTION public.enforce_comment_rate_limit()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  recent_count int;
  last_ts      timestamptz;
BEGIN
  SELECT MAX(created_at), COUNT(*) FILTER (WHERE created_at > now() - interval '1 hour')
    INTO last_ts, recent_count
  FROM public.comments WHERE user_id = NEW.user_id;

  IF last_ts IS NOT NULL AND last_ts > now() - interval '15 seconds' THEN
    RAISE EXCEPTION 'rate_limit_short' USING ERRCODE = 'P0001';
  END IF;
  IF recent_count >= 20 THEN
    RAISE EXCEPTION 'rate_limit_hour' USING ERRCODE = 'P0001';
  END IF;

  -- Basic content hygiene: strip zero-width chars, collapse whitespace
  NEW.content := regexp_replace(NEW.content, '[\u200B-\u200D\uFEFF]', '', 'g');
  NEW.content := btrim(regexp_replace(NEW.content, '\s+', ' ', 'g'));
  IF char_length(NEW.content) = 0 THEN
    RAISE EXCEPTION 'empty_comment' USING ERRCODE = 'P0001';
  END IF;
  RETURN NEW;
END $$;

CREATE TRIGGER comments_rate_limit
  BEFORE INSERT ON public.comments
  FOR EACH ROW EXECUTE FUNCTION public.enforce_comment_rate_limit();

-- 7. updated_at helper -----------------------------------------------
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at := now(); RETURN NEW; END $$;

CREATE TRIGGER comments_set_updated_at
  BEFORE UPDATE ON public.comments
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER discord_profiles_set_updated_at
  BEFORE UPDATE ON public.discord_profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 8. STATS (for future Discord Bot consumption) ----------------------
CREATE OR REPLACE FUNCTION public.stats_readers_total()
RETURNS bigint LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT COUNT(*)::bigint FROM public.discord_profiles
$$;

CREATE OR REPLACE FUNCTION public.stats_comments_total()
RETURNS bigint LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT COUNT(*)::bigint FROM public.comments WHERE is_deleted = false
$$;

CREATE OR REPLACE FUNCTION public.stats_comments_by_article()
RETURNS TABLE(article_slug text, total bigint)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT article_slug, COUNT(*)::bigint
  FROM public.comments WHERE is_deleted = false
  GROUP BY article_slug ORDER BY 2 DESC
$$;

CREATE OR REPLACE FUNCTION public.stats_most_commented_article()
RETURNS TABLE(article_slug text, total bigint)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT article_slug, COUNT(*)::bigint
  FROM public.comments WHERE is_deleted = false
  GROUP BY article_slug ORDER BY 2 DESC LIMIT 1
$$;

GRANT EXECUTE ON FUNCTION public.stats_readers_total()          TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.stats_comments_total()         TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.stats_comments_by_article()    TO anon, authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.stats_most_commented_article() TO anon, authenticated, service_role;
