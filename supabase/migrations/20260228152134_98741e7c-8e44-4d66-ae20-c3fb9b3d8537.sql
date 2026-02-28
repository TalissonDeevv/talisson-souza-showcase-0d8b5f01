
-- 1. Role enum and user_roles table for admin access control
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles without recursion
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Only admins can view roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- 2. Admin articles table
CREATE TABLE public.admin_articles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    slug text NOT NULL UNIQUE,
    description text NOT NULL DEFAULT '',
    content_markdown text NOT NULL DEFAULT '',
    tags text[] NOT NULL DEFAULT '{}',
    reading_time integer NOT NULL DEFAULT 1,
    is_published boolean NOT NULL DEFAULT false,
    author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.admin_articles ENABLE ROW LEVEL SECURITY;

-- Index for slug lookups and published filtering
CREATE INDEX idx_admin_articles_slug ON public.admin_articles (slug);
CREATE INDEX idx_admin_articles_published ON public.admin_articles (is_published);

-- RLS: Only admins can CRUD articles
CREATE POLICY "Admins can select all articles"
ON public.admin_articles FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert articles"
ON public.admin_articles FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update articles"
ON public.admin_articles FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete articles"
ON public.admin_articles FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Public can read published articles only
CREATE POLICY "Anyone can read published articles"
ON public.admin_articles FOR SELECT
USING (is_published = true);

-- Auto-update updated_at
CREATE TRIGGER update_admin_articles_updated_at
BEFORE UPDATE ON public.admin_articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
