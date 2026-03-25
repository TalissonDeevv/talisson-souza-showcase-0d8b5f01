
CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  name text,
  is_confirmed boolean NOT NULL DEFAULT false,
  confirmation_token uuid DEFAULT gen_random_uuid(),
  unsubscribe_token uuid DEFAULT gen_random_uuid(),
  subscribed_at timestamp with time zone NOT NULL DEFAULT now(),
  confirmed_at timestamp with time zone,
  unsubscribed_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert subscribers" ON public.newsletter_subscribers
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can manage subscribers" ON public.newsletter_subscribers
  FOR ALL TO service_role
  USING (true)
  WITH CHECK (true);

CREATE INDEX idx_newsletter_confirmation_token ON public.newsletter_subscribers(confirmation_token);
CREATE INDEX idx_newsletter_unsubscribe_token ON public.newsletter_subscribers(unsubscribe_token);
CREATE INDEX idx_newsletter_email ON public.newsletter_subscribers(email);
