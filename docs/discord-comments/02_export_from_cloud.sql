-- =====================================================================
-- Backup / Export helper — run these SELECTs BEFORE disconnecting
-- Lovable Cloud. Save each result as CSV/JSON so you can reimport
-- into your new external Supabase project.
--
-- Use the SQL runner in the Lovable Cloud dashboard (or any admin UI
-- you can access). Do NOT run them on the new project.
-- =====================================================================

-- 1. Admin articles (published content)
SELECT * FROM public.admin_articles;

-- 2. Legacy blogs and blog comments
SELECT * FROM public.blogs;
SELECT * FROM public.blog_comments;

-- 3. Article comments (if any)
SELECT * FROM public.article_comments;

-- 4. Newsletter subscribers
SELECT id, email, name, is_confirmed, subscribed_at, confirmed_at,
       unsubscribed_at, created_at, updated_at
FROM public.newsletter_subscribers;

-- 5. Profiles (only the ones you actually need — admin accounts)
SELECT * FROM public.profiles;

-- 6. Roles — write down the user_id of every admin so you can
--    re-grant it in the new project after logging in with Discord/Google.
SELECT ur.user_id, u.email, ur.role
FROM public.user_roles ur
JOIN auth.users u ON u.id = ur.user_id;

-- 7. Storage: capas de blog. Baixe manualmente do bucket "blog-images"
--    (Storage → blog-images → Download). Faça upload no novo bucket.
