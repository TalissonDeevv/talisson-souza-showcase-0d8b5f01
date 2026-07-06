-- Read-only inventory for the Atlas comments schema.
-- Safe to run in Supabase SQL Editor or with:
-- npx supabase db query --linked --file docs/discord-comments/04_audit_comments_schema.sql

SELECT
  c.ordinal_position,
  c.column_name,
  c.data_type,
  c.udt_name,
  c.is_nullable,
  c.column_default
FROM information_schema.columns AS c
WHERE c.table_schema = 'public'
  AND c.table_name = 'comments'
ORDER BY c.ordinal_position;

SELECT
  con.conname AS constraint_name,
  con.contype AS constraint_type,
  pg_get_constraintdef(con.oid, true) AS definition,
  con.convalidated AS validated
FROM pg_constraint AS con
WHERE con.conrelid = 'public.comments'::regclass
ORDER BY con.contype, con.conname;

SELECT
  indexname,
  indexdef
FROM pg_indexes
WHERE schemaname = 'public'
  AND tablename = 'comments'
ORDER BY indexname;

SELECT
  trigger_name,
  event_manipulation,
  action_timing,
  action_statement
FROM information_schema.triggers
WHERE event_object_schema = 'public'
  AND event_object_table = 'comments'
ORDER BY trigger_name, event_manipulation;

SELECT
  p.proname AS function_name,
  pg_get_function_identity_arguments(p.oid) AS arguments,
  p.prosecdef AS security_definer,
  p.provolatile AS volatility,
  pg_get_functiondef(p.oid) AS definition
FROM pg_proc AS p
JOIN pg_namespace AS n ON n.oid = p.pronamespace
WHERE n.nspname = 'public'
  AND p.proname IN (
    'enforce_comment_depth',
    'enforce_comment_rate_limit',
    'sanitize_comment',
    'set_updated_at'
  )
ORDER BY p.proname;

SELECT
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE schemaname = 'public'
  AND tablename = 'comments'
ORDER BY policyname;

SELECT
  relrowsecurity AS rls_enabled,
  relforcerowsecurity AS rls_forced
FROM pg_class
WHERE oid = 'public.comments'::regclass;

SELECT
  grantee,
  privilege_type,
  is_grantable
FROM information_schema.role_table_grants
WHERE table_schema = 'public'
  AND table_name = 'comments'
ORDER BY grantee, privilege_type;

SELECT
  grantee,
  column_name,
  privilege_type
FROM information_schema.role_column_grants
WHERE table_schema = 'public'
  AND table_name = 'comments'
ORDER BY grantee, column_name, privilege_type;

SELECT
  pubname,
  schemaname,
  tablename
FROM pg_publication_tables
WHERE schemaname = 'public'
  AND tablename = 'comments'
ORDER BY pubname;

SELECT
  COUNT(*) AS total_comments,
  COUNT(*) FILTER (WHERE is_deleted = false) AS visible_comments,
  COUNT(*) FILTER (WHERE is_deleted = true) AS soft_deleted_comments
FROM public.comments;

-- Consolidated JSON result (also makes CLI execution return the full audit).
SELECT jsonb_build_object(
  'columns', (
    SELECT jsonb_agg(to_jsonb(cols) ORDER BY cols.ordinal_position)
    FROM (
      SELECT
        c.ordinal_position,
        c.column_name,
        c.data_type,
        c.udt_name,
        c.is_nullable,
        c.column_default
      FROM information_schema.columns AS c
      WHERE c.table_schema = 'public'
        AND c.table_name = 'comments'
    ) AS cols
  ),
  'constraints', (
    SELECT jsonb_agg(to_jsonb(constraints_list) ORDER BY constraints_list.constraint_name)
    FROM (
      SELECT
        con.conname AS constraint_name,
        con.contype AS constraint_type,
        pg_get_constraintdef(con.oid, true) AS definition,
        con.convalidated AS validated
      FROM pg_constraint AS con
      WHERE con.conrelid = 'public.comments'::regclass
    ) AS constraints_list
  ),
  'indexes', (
    SELECT jsonb_agg(to_jsonb(index_list) ORDER BY index_list.indexname)
    FROM (
      SELECT indexname, indexdef
      FROM pg_indexes
      WHERE schemaname = 'public'
        AND tablename = 'comments'
    ) AS index_list
  ),
  'triggers', (
    SELECT jsonb_agg(to_jsonb(trigger_list) ORDER BY trigger_list.trigger_name)
    FROM (
      SELECT
        trigger_name,
        event_manipulation,
        action_timing,
        action_statement
      FROM information_schema.triggers
      WHERE event_object_schema = 'public'
        AND event_object_table = 'comments'
    ) AS trigger_list
  ),
  'functions', (
    SELECT jsonb_agg(to_jsonb(function_list) ORDER BY function_list.function_name)
    FROM (
      SELECT
        p.proname AS function_name,
        pg_get_function_identity_arguments(p.oid) AS arguments,
        p.prosecdef AS security_definer,
        pg_get_functiondef(p.oid) AS definition
      FROM pg_proc AS p
      JOIN pg_namespace AS n ON n.oid = p.pronamespace
      WHERE n.nspname = 'public'
        AND p.proname IN (
          'enforce_comment_depth',
          'enforce_comment_rate_limit',
          'sanitize_comment',
          'set_updated_at'
        )
    ) AS function_list
  ),
  'policies', (
    SELECT jsonb_agg(to_jsonb(policy_list) ORDER BY policy_list.policyname)
    FROM (
      SELECT
        policyname,
        permissive,
        roles,
        cmd,
        qual,
        with_check
      FROM pg_policies
      WHERE schemaname = 'public'
        AND tablename = 'comments'
    ) AS policy_list
  ),
  'rls', (
    SELECT to_jsonb(rls_state)
    FROM (
      SELECT
        relrowsecurity AS enabled,
        relforcerowsecurity AS forced
      FROM pg_class
      WHERE oid = 'public.comments'::regclass
    ) AS rls_state
  ),
  'table_grants', (
    SELECT jsonb_agg(to_jsonb(grants_list) ORDER BY grants_list.grantee, grants_list.privilege_type)
    FROM (
      SELECT grantee, privilege_type, is_grantable
      FROM information_schema.role_table_grants
      WHERE table_schema = 'public'
        AND table_name = 'comments'
    ) AS grants_list
  ),
  'column_grants', (
    SELECT jsonb_agg(to_jsonb(column_grants_list)
      ORDER BY column_grants_list.grantee, column_grants_list.column_name,
        column_grants_list.privilege_type)
    FROM (
      SELECT grantee, column_name, privilege_type
      FROM information_schema.role_column_grants
      WHERE table_schema = 'public'
        AND table_name = 'comments'
    ) AS column_grants_list
  ),
  'publications', (
    SELECT jsonb_agg(to_jsonb(publication_list) ORDER BY publication_list.pubname)
    FROM (
      SELECT pubname, schemaname, tablename
      FROM pg_publication_tables
      WHERE schemaname = 'public'
        AND tablename = 'comments'
    ) AS publication_list
  ),
  'counts', (
    SELECT to_jsonb(counts)
    FROM (
      SELECT
        COUNT(*) AS total,
        COUNT(*) FILTER (WHERE is_deleted = false) AS visible,
        COUNT(*) FILTER (WHERE is_deleted = true) AS soft_deleted
      FROM public.comments
    ) AS counts
  )
) AS schema_audit;
