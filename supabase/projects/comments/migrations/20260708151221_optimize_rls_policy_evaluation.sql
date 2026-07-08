-- Optimize RLS policy evaluation for comments project.
-- This preserves the existing access model while avoiding row-by-row auth.uid()
-- and has_role() re-evaluation reported by Supabase Advisors.

BEGIN;

DROP POLICY IF EXISTS "user_roles self read" ON public.user_roles;
DROP POLICY IF EXISTS "user_roles admin read" ON public.user_roles;
DROP POLICY IF EXISTS "user_roles admin write" ON public.user_roles;

CREATE POLICY "user_roles self read"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = user_id);

CREATE POLICY "user_roles admin read"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (public.has_role((select auth.uid()), 'admin'));

CREATE POLICY "user_roles admin write"
  ON public.user_roles
  FOR ALL
  TO authenticated
  USING (public.has_role((select auth.uid()), 'admin'))
  WITH CHECK (public.has_role((select auth.uid()), 'admin'));

DROP POLICY IF EXISTS "profiles self update" ON public.discord_profiles;

CREATE POLICY "profiles self update"
  ON public.discord_profiles
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

DROP POLICY IF EXISTS "comments self insert" ON public.comments;
DROP POLICY IF EXISTS "comments self update" ON public.comments;
DROP POLICY IF EXISTS "comments self delete" ON public.comments;
DROP POLICY IF EXISTS "comments admin update" ON public.comments;
DROP POLICY IF EXISTS "comments admin delete" ON public.comments;

CREATE POLICY "comments self insert"
  ON public.comments
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "comments self update"
  ON public.comments
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "comments self delete"
  ON public.comments
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) = user_id);

CREATE POLICY "comments admin update"
  ON public.comments
  FOR UPDATE
  TO authenticated
  USING (public.has_role((select auth.uid()), 'admin'))
  WITH CHECK (public.has_role((select auth.uid()), 'admin'));

CREATE POLICY "comments admin delete"
  ON public.comments
  FOR DELETE
  TO authenticated
  USING (public.has_role((select auth.uid()), 'admin'));

DROP POLICY IF EXISTS "comment_reactions self insert" ON public.comment_reactions;
DROP POLICY IF EXISTS "comment_reactions self update" ON public.comment_reactions;
DROP POLICY IF EXISTS "comment_reactions self delete" ON public.comment_reactions;
DROP POLICY IF EXISTS "comment_reactions admin delete" ON public.comment_reactions;

CREATE POLICY "comment_reactions self insert"
  ON public.comment_reactions
  FOR INSERT
  TO authenticated
  WITH CHECK (
    (select auth.uid()) = user_id
    AND EXISTS (
      SELECT 1
      FROM public.comments AS comment
      WHERE comment.id = comment_id
        AND comment.is_deleted = false
    )
  );

CREATE POLICY "comment_reactions self update"
  ON public.comment_reactions
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK (
    (select auth.uid()) = user_id
    AND EXISTS (
      SELECT 1
      FROM public.comments AS comment
      WHERE comment.id = comment_id
        AND comment.is_deleted = false
    )
  );

CREATE POLICY "comment_reactions self delete"
  ON public.comment_reactions
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) = user_id);

CREATE POLICY "comment_reactions admin delete"
  ON public.comment_reactions
  FOR DELETE
  TO authenticated
  USING (public.has_role((select auth.uid()), 'admin'));

COMMIT;
