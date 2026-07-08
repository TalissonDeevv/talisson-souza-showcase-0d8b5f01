
-- 1) user_roles: add explicit deny for INSERT/UPDATE/DELETE by authenticated users
CREATE POLICY "Only admins can insert roles"
  ON public.user_roles FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update roles"
  ON public.user_roles FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete roles"
  ON public.user_roles FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));

-- 2) blog-images: enforce per-user folder ownership on INSERT
DROP POLICY IF EXISTS "Authenticated users can upload blog images" ON storage.objects;
CREATE POLICY "Authenticated users can upload blog images"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'blog-images'
    AND (auth.uid())::text = (storage.foldername(name))[1]
  );

-- 3) Revoke EXECUTE on has_role from anon/public (authenticated still needs it for RLS)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated;

-- 4) Realtime: scope channel subscriptions for article_comments
ALTER TABLE realtime.messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Authenticated can read article_comments channel" ON realtime.messages;
CREATE POLICY "Authenticated can read article_comments channel"
  ON realtime.messages FOR SELECT TO authenticated
  USING (
    (realtime.topic() LIKE 'article_comments%')
    OR (extension = 'postgres_changes')
  );
