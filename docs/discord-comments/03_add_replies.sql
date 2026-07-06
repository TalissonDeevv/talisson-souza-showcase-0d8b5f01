-- =====================================================================
-- Incremental migration — adiciona threading (respostas) aos comentários
-- Rode no SQL Editor do seu projeto Supabase BYO (o mesmo que roda o
-- schema 01_schema.sql). Idempotente: pode rodar mais de uma vez.
-- =====================================================================

-- 1. Coluna parent_id (self-FK) --------------------------------------
ALTER TABLE public.comments
  ADD COLUMN IF NOT EXISTS parent_id uuid
  REFERENCES public.comments(id) ON DELETE CASCADE;

CREATE INDEX IF NOT EXISTS comments_parent_idx
  ON public.comments (parent_id)
  WHERE parent_id IS NOT NULL;

-- 2. Impede aninhamento de mais de um nível (respostas de respostas)
--    Mantém a UI simples e evita árvores profundas / abuso.
CREATE OR REPLACE FUNCTION public.enforce_comment_depth()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE parent_parent uuid;
BEGIN
  IF NEW.parent_id IS NULL THEN RETURN NEW; END IF;
  SELECT parent_id INTO parent_parent FROM public.comments WHERE id = NEW.parent_id;
  IF parent_parent IS NOT NULL THEN
    RAISE EXCEPTION 'reply_depth_exceeded' USING ERRCODE = 'P0001';
  END IF;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS comments_enforce_depth ON public.comments;
CREATE TRIGGER comments_enforce_depth
  BEFORE INSERT ON public.comments
  FOR EACH ROW EXECUTE FUNCTION public.enforce_comment_depth();

-- 3. Refresh do trigger de identidade Discord — usa mais fallbacks
--    para capturar o display name (global_name) real do usuário.
CREATE OR REPLACE FUNCTION public.handle_discord_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE
  meta jsonb := COALESCE(NEW.raw_user_meta_data, '{}'::jsonb);
  did  text  := COALESCE(meta->>'provider_id', meta->>'sub');
  uname text := COALESCE(meta->>'user_name', meta->>'preferred_username', meta->>'nickname', 'user');
  gname text := NULLIF(COALESCE(
                  meta->>'global_name',
                  meta->>'full_name',
                  meta->>'name',
                  meta->>'display_name',
                  meta->'custom_claims'->>'global_name'
                ), '');
BEGIN
  IF did IS NULL THEN RETURN NEW; END IF;
  INSERT INTO public.discord_profiles
    (id, discord_id, username, global_name, avatar_url, email, last_login_at, updated_at)
  VALUES (
    NEW.id, did, uname, gname,
    NULLIF(meta->>'avatar_url', ''),
    NEW.email, now(), now()
  )
  ON CONFLICT (id) DO UPDATE
    SET username    = EXCLUDED.username,
        global_name = COALESCE(EXCLUDED.global_name, public.discord_profiles.global_name),
        avatar_url  = EXCLUDED.avatar_url,
        email       = EXCLUDED.email,
        last_login_at = now(),
        updated_at    = now();
  RETURN NEW;
END $$;

-- 4. Backfill: repopula global_name para quem já existe -----------
UPDATE public.discord_profiles p
SET    global_name = NULLIF(COALESCE(
         u.raw_user_meta_data->>'global_name',
         u.raw_user_meta_data->>'full_name',
         u.raw_user_meta_data->>'name',
         u.raw_user_meta_data->>'display_name',
         u.raw_user_meta_data->'custom_claims'->>'global_name'
       ), ''),
       updated_at = now()
FROM   auth.users u
WHERE  u.id = p.id
  AND  (p.global_name IS NULL OR p.global_name = '');
