
-- Create article_comments table
CREATE TABLE public.article_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  article_slug TEXT NOT NULL,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index for fast lookups by article
CREATE INDEX idx_article_comments_slug ON public.article_comments(article_slug);
CREATE INDEX idx_article_comments_created ON public.article_comments(created_at DESC);

-- Enable RLS
ALTER TABLE public.article_comments ENABLE ROW LEVEL SECURITY;

-- Everyone can read comments
CREATE POLICY "Comments are viewable by everyone"
ON public.article_comments FOR SELECT
USING (true);

-- Authenticated users can create comments
CREATE POLICY "Authenticated users can create comments"
ON public.article_comments FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Users can update their own comments
CREATE POLICY "Users can update own comments"
ON public.article_comments FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Users can delete their own comments
CREATE POLICY "Users can delete own comments"
ON public.article_comments FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Trigger for updated_at
CREATE TRIGGER update_article_comments_updated_at
BEFORE UPDATE ON public.article_comments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for comments
ALTER PUBLICATION supabase_realtime ADD TABLE public.article_comments;
