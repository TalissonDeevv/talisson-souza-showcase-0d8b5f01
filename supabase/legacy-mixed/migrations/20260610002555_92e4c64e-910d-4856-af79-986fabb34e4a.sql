
DROP POLICY IF EXISTS "Authenticated users can create blogs" ON public.blogs;
DROP POLICY IF EXISTS "Authors can update own blogs" ON public.blogs;
DROP POLICY IF EXISTS "Authors can delete own blogs" ON public.blogs;

CREATE POLICY "Only admins can create blogs"
  ON public.blogs FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update blogs"
  ON public.blogs FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can delete blogs"
  ON public.blogs FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));
