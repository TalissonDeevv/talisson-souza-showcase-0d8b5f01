-- Transactional integration checks for comments CRUD, replies and RLS.
-- Requires at least one existing auth.users row.
-- Every test row is rolled back at the end.

BEGIN;

DO $$
DECLARE
  test_user uuid;
BEGIN
  SELECT id INTO test_user
  FROM auth.users
  ORDER BY created_at
  LIMIT 1;

  IF test_user IS NULL THEN
    RAISE EXCEPTION
      'Create one Discord test user before running CRUD validation';
  END IF;

  PERFORM set_config('atlas.test_user', test_user::text, true);
  PERFORM set_config('atlas.attacker_user', gen_random_uuid()::text, true);
  PERFORM set_config(
    'atlas.test_slug',
    '__atlas_schema_validation_' || txid_current()::text,
    true
  );
END
$$;

-- Authenticated owner: create a top-level comment.
SET LOCAL ROLE authenticated;
SELECT set_config(
  'request.jwt.claim.sub',
  current_setting('atlas.test_user'),
  true
);

DO $$
DECLARE
  created_id uuid;
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
    'Atlas schema validation parent'
  )
  RETURNING id INTO created_id;

  IF created_id IS NULL THEN
    RAISE EXCEPTION 'top_level_create_failed';
  END IF;

  PERFORM set_config('atlas.parent_id', created_id::text, true);
END
$$;

-- Move only the test timestamp back so the reply does not hit the 15s limit.
RESET ROLE;
UPDATE public.comments
SET created_at = now() - interval '1 minute'
WHERE id = current_setting('atlas.parent_id')::uuid;

-- Authenticated owner: create a reply.
SET LOCAL ROLE authenticated;
SELECT set_config(
  'request.jwt.claim.sub',
  current_setting('atlas.test_user'),
  true
);

DO $$
DECLARE
  created_id uuid;
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
    current_setting('atlas.parent_id')::uuid,
    'Atlas schema validation reply'
  )
  RETURNING id INTO created_id;

  IF created_id IS NULL THEN
    RAISE EXCEPTION 'reply_create_failed';
  END IF;

  PERFORM set_config('atlas.reply_id', created_id::text, true);
END
$$;

-- The owner can edit their reply and updated_at is maintained by trigger.
DO $$
DECLARE
  affected integer;
BEGIN
  UPDATE public.comments
  SET content = 'Atlas schema validation reply edited'
  WHERE id = current_setting('atlas.reply_id')::uuid;

  GET DIAGNOSTICS affected = ROW_COUNT;
  IF affected <> 1 THEN
    RAISE EXCEPTION 'owner_edit_failed';
  END IF;
END
$$;

-- Immutable ownership/routing columns are protected by column grants.
DO $$
BEGIN
  BEGIN
    UPDATE public.comments
    SET article_slug = 'forbidden-change'
    WHERE id = current_setting('atlas.parent_id')::uuid;
    RAISE EXCEPTION 'article_slug_update_was_not_blocked';
  EXCEPTION
    WHEN insufficient_privilege THEN NULL;
  END;
END
$$;

-- Replies cannot point across articles.
DO $$
BEGIN
  BEGIN
    INSERT INTO public.comments (
      article_slug,
      user_id,
      parent_id,
      content
    )
    VALUES (
      'different-article',
      auth.uid(),
      current_setting('atlas.parent_id')::uuid,
      'Must fail'
    );
    RAISE EXCEPTION 'cross_article_reply_was_not_blocked';
  EXCEPTION
    WHEN SQLSTATE 'P0001' THEN
      IF SQLERRM <> 'reply_article_mismatch' THEN
        RAISE;
      END IF;
  END;
END
$$;

-- Replies to replies are rejected.
DO $$
BEGIN
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
      current_setting('atlas.reply_id')::uuid,
      'Must fail'
    );
    RAISE EXCEPTION 'nested_reply_was_not_blocked';
  EXCEPTION
    WHEN SQLSTATE 'P0001' THEN
      IF SQLERRM <> 'reply_depth_exceeded' THEN
        RAISE;
      END IF;
  END;
END
$$;

-- A different authenticated identity can read but cannot mutate the rows.
SELECT set_config(
  'request.jwt.claim.sub',
  current_setting('atlas.attacker_user'),
  true
);

DO $$
DECLARE
  affected integer;
BEGIN
  UPDATE public.comments
  SET content = 'Unauthorized edit'
  WHERE id = current_setting('atlas.parent_id')::uuid;

  GET DIAGNOSTICS affected = ROW_COUNT;
  IF affected <> 0 THEN
    RAISE EXCEPTION 'unauthorized_update_was_not_blocked';
  END IF;

  DELETE FROM public.comments
  WHERE id = current_setting('atlas.parent_id')::uuid;

  GET DIAGNOSTICS affected = ROW_COUNT;
  IF affected <> 0 THEN
    RAISE EXCEPTION 'unauthorized_delete_was_not_blocked';
  END IF;
END
$$;

-- Anonymous users can read visible comments but cannot insert.
SET LOCAL ROLE anon;

DO $$
DECLARE
  visible_count integer;
BEGIN
  SELECT COUNT(*) INTO visible_count
  FROM public.comments
  WHERE article_slug = current_setting('atlas.test_slug');

  IF visible_count <> 2 THEN
    RAISE EXCEPTION 'anonymous_read_failed: expected 2, got %', visible_count;
  END IF;

  BEGIN
    INSERT INTO public.comments (
      article_slug,
      user_id,
      content
    )
    VALUES (
      current_setting('atlas.test_slug'),
      current_setting('atlas.test_user')::uuid,
      'Must fail'
    );
    RAISE EXCEPTION 'anonymous_insert_was_not_blocked';
  EXCEPTION
    WHEN insufficient_privilege THEN NULL;
  END;
END
$$;

-- The owner can delete the reply and the root comment.
SET LOCAL ROLE authenticated;
SELECT set_config(
  'request.jwt.claim.sub',
  current_setting('atlas.test_user'),
  true
);

DO $$
DECLARE
  affected integer;
BEGIN
  DELETE FROM public.comments
  WHERE id = current_setting('atlas.reply_id')::uuid;

  GET DIAGNOSTICS affected = ROW_COUNT;
  IF affected <> 1 THEN
    RAISE EXCEPTION 'reply_delete_failed';
  END IF;

  DELETE FROM public.comments
  WHERE id = current_setting('atlas.parent_id')::uuid;

  GET DIAGNOSTICS affected = ROW_COUNT;
  IF affected <> 1 THEN
    RAISE EXCEPTION 'top_level_delete_failed';
  END IF;
END
$$;

RESET ROLE;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1
    FROM public.comments
    WHERE article_slug = current_setting('atlas.test_slug')
  ) THEN
    RAISE EXCEPTION 'test_cleanup_failed';
  END IF;
END
$$;

ROLLBACK;
