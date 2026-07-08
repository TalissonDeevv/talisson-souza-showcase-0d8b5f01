-- Explicit Data API grants for new Supabase projects.
-- Supabase is moving away from implicit public schema grants, so replaying
-- this project in Development/Preview/Staging must declare API access directly.

BEGIN;

REVOKE ALL PRIVILEGES ON TABLE public.profiles FROM anon, authenticated;
GRANT SELECT ON TABLE public.profiles TO authenticated;
GRANT INSERT (id, github_username, avatar_url, full_name)
  ON TABLE public.profiles TO authenticated;
GRANT UPDATE (github_username, avatar_url, full_name)
  ON TABLE public.profiles TO authenticated;
GRANT ALL PRIVILEGES ON TABLE public.profiles TO service_role;

REVOKE ALL PRIVILEGES ON TABLE public.blogs FROM anon, authenticated;
GRANT SELECT ON TABLE public.blogs TO anon, authenticated;
GRANT INSERT (author_id, title, slug, content, excerpt, cover_image, published)
  ON TABLE public.blogs TO authenticated;
GRANT UPDATE (title, slug, content, excerpt, cover_image, published)
  ON TABLE public.blogs TO authenticated;
GRANT DELETE ON TABLE public.blogs TO authenticated;
GRANT ALL PRIVILEGES ON TABLE public.blogs TO service_role;

REVOKE ALL PRIVILEGES ON TABLE public.blog_comments FROM anon, authenticated;
GRANT SELECT ON TABLE public.blog_comments TO anon, authenticated;
GRANT INSERT (blog_id, user_id, content)
  ON TABLE public.blog_comments TO authenticated;
GRANT UPDATE (content)
  ON TABLE public.blog_comments TO authenticated;
GRANT DELETE ON TABLE public.blog_comments TO authenticated;
GRANT ALL PRIVILEGES ON TABLE public.blog_comments TO service_role;

REVOKE ALL PRIVILEGES ON TABLE public.newsletter_subscribers
  FROM anon, authenticated;
GRANT ALL PRIVILEGES ON TABLE public.newsletter_subscribers TO service_role;

DROP POLICY IF EXISTS "Profiles are viewable by authenticated users"
  ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile"
  ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile"
  ON public.profiles;

CREATE POLICY "Profiles are viewable by authenticated users"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = id);

DROP POLICY IF EXISTS "Published blogs are viewable by everyone"
  ON public.blogs;
DROP POLICY IF EXISTS "Authenticated users can create blogs"
  ON public.blogs;
DROP POLICY IF EXISTS "Authors can update own blogs"
  ON public.blogs;
DROP POLICY IF EXISTS "Authors can delete own blogs"
  ON public.blogs;

CREATE POLICY "Published blogs are viewable by everyone"
  ON public.blogs
  FOR SELECT
  TO anon, authenticated
  USING (published = true OR (select auth.uid()) = author_id);

CREATE POLICY "Authenticated users can create blogs"
  ON public.blogs
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = author_id);

CREATE POLICY "Authors can update own blogs"
  ON public.blogs
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = author_id)
  WITH CHECK ((select auth.uid()) = author_id);

CREATE POLICY "Authors can delete own blogs"
  ON public.blogs
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) = author_id);

DROP POLICY IF EXISTS "Comments are viewable by everyone"
  ON public.blog_comments;
DROP POLICY IF EXISTS "Authenticated users can create comments"
  ON public.blog_comments;
DROP POLICY IF EXISTS "Users can update own comments"
  ON public.blog_comments;
DROP POLICY IF EXISTS "Users can delete own comments"
  ON public.blog_comments;

CREATE POLICY "Comments are viewable by everyone"
  ON public.blog_comments
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON public.blog_comments
  FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can update own comments"
  ON public.blog_comments
  FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = user_id)
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users can delete own comments"
  ON public.blog_comments
  FOR DELETE
  TO authenticated
  USING ((select auth.uid()) = user_id);

DROP POLICY IF EXISTS "Users can update own blog images"
  ON storage.objects;

CREATE POLICY "Users can update own blog images"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'blog-images'
    AND (select auth.uid())::text = (storage.foldername(name))[1]
  )
  WITH CHECK (
    bucket_id = 'blog-images'
    AND (select auth.uid())::text = (storage.foldername(name))[1]
    AND lower(storage.extension(name)) IN ('jpg', 'jpeg', 'png', 'webp', 'gif')
  );

REVOKE ALL ON FUNCTION public.handle_new_user()
  FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_updated_at_column()
  FROM PUBLIC, anon, authenticated;

COMMIT;
