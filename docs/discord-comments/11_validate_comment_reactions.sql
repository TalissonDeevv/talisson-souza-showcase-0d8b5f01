-- Transactional validation for Atlas comment reactions.
-- Requires at least one existing row in public.discord_profiles.
-- Every test row is rolled back at the end.

BEGIN;

DO $$
DECLARE
  test_user uuid;
BEGIN
  SELECT id INTO test_user
  FROM public.discord_profiles
  ORDER BY created_at
  LIMIT 1;

  IF test_user IS NULL THEN
    RAISE EXCEPTION
      'Create one Discord test user before running reaction validation';
  END IF;

  PERFORM set_config('atlas.test_user', test_user::text, true);
  PERFORM set_config('atlas.attacker_user', gen_random_uuid()::text, true);
  PERFORM set_config(
    'atlas.test_slug',
    '__atlas_reaction_validation_' || txid_current()::text,
    true
  );
END
$$;

SET LOCAL ROLE authenticated;
SELECT set_config(
  'request.jwt.claim.sub',
  current_setting('atlas.test_user'),
  true
);

DO $$
DECLARE
  created_id uuid;
  likes integer;
  dislikes integer;
BEGIN
  INSERT INTO public.comments (
    article_slug,
    user_id,
    parent_id,
    content
  )
  VALUES (
    current_setting('atlas.test_slug'),
    auth.uid(),
    NULL,
    'Atlas reaction validation comment'
  )
  RETURNING id INTO created_id;

  PERFORM set_config('atlas.comment_id', created_id::text, true);

  INSERT INTO public.comment_reactions (comment_id, user_id, reaction)
  VALUES (created_id, auth.uid(), 'like');

  SELECT
    COUNT(*) FILTER (WHERE reaction = 'like'),
    COUNT(*) FILTER (WHERE reaction = 'dislike')
  INTO likes, dislikes
  FROM public.comment_reactions
  WHERE comment_id = created_id;

  IF likes <> 1 OR dislikes <> 0 THEN
    RAISE EXCEPTION 'like_insert_failed';
  END IF;

  UPDATE public.comment_reactions
  SET reaction = 'dislike'
  WHERE comment_id = created_id
    AND user_id = auth.uid();

  SELECT
    COUNT(*) FILTER (WHERE reaction = 'like'),
    COUNT(*) FILTER (WHERE reaction = 'dislike')
  INTO likes, dislikes
  FROM public.comment_reactions
  WHERE comment_id = created_id;

  IF likes <> 0 OR dislikes <> 1 THEN
    RAISE EXCEPTION 'reaction_update_failed';
  END IF;
END
$$;

-- A different authenticated identity can read but cannot mutate the reaction.
SELECT set_config(
  'request.jwt.claim.sub',
  current_setting('atlas.attacker_user'),
  true
);

DO $$
DECLARE
  affected integer;
BEGIN
  UPDATE public.comment_reactions
  SET reaction = 'like'
  WHERE comment_id = current_setting('atlas.comment_id')::uuid;

  GET DIAGNOSTICS affected = ROW_COUNT;
  IF affected <> 0 THEN
    RAISE EXCEPTION 'unauthorized_reaction_update_was_not_blocked';
  END IF;

  DELETE FROM public.comment_reactions
  WHERE comment_id = current_setting('atlas.comment_id')::uuid;

  GET DIAGNOSTICS affected = ROW_COUNT;
  IF affected <> 0 THEN
    RAISE EXCEPTION 'unauthorized_reaction_delete_was_not_blocked';
  END IF;
END
$$;

-- Anonymous visitors can read reaction counters but cannot create reactions.
SET LOCAL ROLE anon;

DO $$
DECLARE
  visible_count integer;
BEGIN
  SELECT COUNT(reaction) INTO visible_count
  FROM public.comment_reactions
  WHERE comment_id = current_setting('atlas.comment_id')::uuid;

  IF visible_count <> 1 THEN
    RAISE EXCEPTION 'anonymous_reaction_read_failed';
  END IF;

  BEGIN
    INSERT INTO public.comment_reactions (comment_id, user_id, reaction)
    VALUES (
      current_setting('atlas.comment_id')::uuid,
      current_setting('atlas.test_user')::uuid,
      'like'
    );
    RAISE EXCEPTION 'anonymous_reaction_insert_was_not_blocked';
  EXCEPTION
    WHEN insufficient_privilege THEN NULL;
  END;
END
$$;

SET LOCAL ROLE authenticated;
SELECT set_config(
  'request.jwt.claim.sub',
  current_setting('atlas.test_user'),
  true
);

DELETE FROM public.comment_reactions
WHERE comment_id = current_setting('atlas.comment_id')::uuid
  AND user_id = auth.uid();

DELETE FROM public.comments
WHERE id = current_setting('atlas.comment_id')::uuid;

RESET ROLE;

ROLLBACK;
