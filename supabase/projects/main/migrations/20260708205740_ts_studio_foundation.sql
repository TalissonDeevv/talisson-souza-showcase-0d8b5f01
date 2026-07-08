-- TS Studio foundation.
--
-- This migration creates a private CMS schema for future administrative
-- features. It is intentionally not exposed to anon/authenticated roles.
-- Public site behavior remains unchanged until dedicated APIs are added.

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA extensions;

CREATE SCHEMA IF NOT EXISTS studio;

REVOKE ALL ON SCHEMA studio FROM PUBLIC, anon, authenticated;
GRANT USAGE ON SCHEMA studio TO service_role;

CREATE TABLE IF NOT EXISTS studio.modules (
  key text PRIMARY KEY,
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  area text NOT NULL,
  status text NOT NULL DEFAULT 'planned'
    CHECK (status IN ('planned', 'foundation', 'active', 'deprecated')),
  owner_role text NOT NULL DEFAULT 'owner',
  order_index integer NOT NULL DEFAULT 0,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio.module_dependencies (
  module_key text NOT NULL REFERENCES studio.modules(key) ON DELETE CASCADE,
  depends_on_module_key text NOT NULL REFERENCES studio.modules(key) ON DELETE RESTRICT,
  reason text NOT NULL DEFAULT '',
  PRIMARY KEY (module_key, depends_on_module_key),
  CHECK (module_key <> depends_on_module_key)
);

CREATE TABLE IF NOT EXISTS studio.roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE,
  name text NOT NULL,
  description text NOT NULL DEFAULT '',
  rank integer NOT NULL DEFAULT 0,
  is_system boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio.permissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text NOT NULL UNIQUE,
  module_key text NOT NULL REFERENCES studio.modules(key) ON DELETE CASCADE,
  action text NOT NULL,
  description text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio.role_permissions (
  role_id uuid NOT NULL REFERENCES studio.roles(id) ON DELETE CASCADE,
  permission_id uuid NOT NULL REFERENCES studio.permissions(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE IF NOT EXISTS studio.user_roles (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id uuid NOT NULL REFERENCES studio.roles(id) ON DELETE CASCADE,
  assigned_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  assigned_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz,
  reason text NOT NULL DEFAULT '',
  PRIMARY KEY (user_id, role_id)
);

CREATE TABLE IF NOT EXISTS studio.content_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  module_key text NOT NULL REFERENCES studio.modules(key) ON DELETE RESTRICT,
  locale text NOT NULL DEFAULT 'pt-BR',
  slug text NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'review', 'scheduled', 'published', 'archived')),
  body jsonb NOT NULL DEFAULT '{}'::jsonb,
  seo jsonb NOT NULL DEFAULT '{}'::jsonb,
  og jsonb NOT NULL DEFAULT '{}'::jsonb,
  schema_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewer_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  scheduled_at timestamptz,
  published_at timestamptz,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (module_key, locale, slug)
);

CREATE TABLE IF NOT EXISTS studio.content_versions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id uuid NOT NULL REFERENCES studio.content_items(id) ON DELETE CASCADE,
  version_number integer NOT NULL,
  snapshot jsonb NOT NULL,
  change_note text NOT NULL DEFAULT '',
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (content_id, version_number)
);

CREATE TABLE IF NOT EXISTS studio.media_assets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bucket_id text NOT NULL,
  object_path text NOT NULL,
  public_url text,
  file_name text NOT NULL,
  mime_type text NOT NULL,
  size_bytes bigint NOT NULL DEFAULT 0 CHECK (size_bytes >= 0),
  checksum text,
  alt_text text NOT NULL DEFAULT '',
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  uploaded_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (bucket_id, object_path)
);

CREATE TABLE IF NOT EXISTS studio.settings (
  key text PRIMARY KEY,
  module_key text REFERENCES studio.modules(key) ON DELETE SET NULL,
  value jsonb NOT NULL DEFAULT '{}'::jsonb,
  visibility text NOT NULL DEFAULT 'private'
    CHECK (visibility IN ('private', 'internal', 'public')),
  updated_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio.integration_connections (
  key text PRIMARY KEY,
  provider text NOT NULL,
  display_name text NOT NULL,
  status text NOT NULL DEFAULT 'not_configured'
    CHECK (status IN ('not_configured', 'configured', 'degraded', 'disabled')),
  config jsonb NOT NULL DEFAULT '{}'::jsonb,
  last_checked_at timestamptz,
  updated_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio.jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  queue text NOT NULL,
  kind text NOT NULL,
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'running', 'succeeded', 'failed', 'cancelled')),
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  result jsonb NOT NULL DEFAULT '{}'::jsonb,
  attempts integer NOT NULL DEFAULT 0 CHECK (attempts >= 0),
  max_attempts integer NOT NULL DEFAULT 3 CHECK (max_attempts > 0),
  scheduled_at timestamptz NOT NULL DEFAULT now(),
  started_at timestamptz,
  finished_at timestamptz,
  last_error text,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio.audit_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  action text NOT NULL,
  module_key text REFERENCES studio.modules(key) ON DELETE SET NULL,
  entity_table text,
  entity_id text,
  request_id text,
  ip_hash text,
  user_agent text,
  before_state jsonb,
  after_state jsonb,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio.notifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  target_user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  channel text NOT NULL DEFAULT 'in_app'
    CHECK (channel IN ('in_app', 'email', 'webhook')),
  subject text NOT NULL,
  payload jsonb NOT NULL DEFAULT '{}'::jsonb,
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'sent', 'read', 'failed')),
  read_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio.feature_flags (
  key text PRIMARY KEY,
  description text NOT NULL DEFAULT '',
  enabled boolean NOT NULL DEFAULT false,
  rollout jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_studio_permissions_module ON studio.permissions(module_key);
CREATE INDEX IF NOT EXISTS idx_studio_content_module_status ON studio.content_items(module_key, status);
CREATE INDEX IF NOT EXISTS idx_studio_content_author ON studio.content_items(author_id);
CREATE INDEX IF NOT EXISTS idx_studio_content_versions_content ON studio.content_versions(content_id, version_number DESC);
CREATE INDEX IF NOT EXISTS idx_studio_media_bucket_path ON studio.media_assets(bucket_id, object_path);
CREATE INDEX IF NOT EXISTS idx_studio_jobs_queue_status ON studio.jobs(queue, status, scheduled_at);
CREATE INDEX IF NOT EXISTS idx_studio_audit_module_created ON studio.audit_events(module_key, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_studio_audit_actor_created ON studio.audit_events(actor_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_studio_notifications_user_status ON studio.notifications(target_user_id, status, created_at DESC);

ALTER TABLE studio.modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.module_dependencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.role_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.content_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.content_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.media_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.integration_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.audit_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.feature_flags ENABLE ROW LEVEL SECURITY;

ALTER TABLE studio.modules FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.module_dependencies FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.roles FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.permissions FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.role_permissions FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.user_roles FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.content_items FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.content_versions FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.media_assets FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.settings FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.integration_connections FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.jobs FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.audit_events FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.notifications FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.feature_flags FORCE ROW LEVEL SECURITY;

REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA studio FROM PUBLIC, anon, authenticated;
REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA studio FROM PUBLIC, anon, authenticated;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA studio TO service_role;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA studio TO service_role;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA studio
  REVOKE ALL ON TABLES FROM PUBLIC, anon, authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA studio
  REVOKE ALL ON SEQUENCES FROM PUBLIC, anon, authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA studio
  GRANT ALL ON TABLES TO service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA studio
  GRANT ALL ON SEQUENCES TO service_role;

INSERT INTO studio.roles (key, name, description, rank, is_system)
VALUES
  ('owner', 'Owner', 'Full TS Studio control, including security and infrastructure settings.', 100, true),
  ('admin', 'Administrator', 'Operational CMS administration without ownership transfer controls.', 80, true),
  ('editor', 'Editor', 'Content creation, review and publication workflow.', 60, true),
  ('moderator', 'Moderator', 'Comment, community and user-generated content moderation.', 50, true),
  ('analyst', 'Analyst', 'Read-only operational, SEO, analytics and monitoring access.', 30, true),
  ('viewer', 'Viewer', 'Read-only dashboard access for internal stakeholders.', 10, true)
ON CONFLICT (key) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  rank = EXCLUDED.rank,
  is_system = EXCLUDED.is_system,
  updated_at = now();

INSERT INTO studio.modules (key, name, description, area, status, owner_role, order_index)
VALUES
  ('dashboard', 'Dashboard', 'Operational overview for content, community, performance and security.', 'core', 'foundation', 'admin', 10),
  ('content', 'Content', 'Shared content model for articles, pages, blocks, checklists and trails.', 'content', 'foundation', 'editor', 20),
  ('seo', 'SEO', 'Metadata, canonical URLs, Open Graph, Twitter Cards and Schema.org governance.', 'growth', 'foundation', 'editor', 30),
  ('media', 'Media Library', 'Images, PDFs, videos and downloadable assets managed with review metadata.', 'content', 'foundation', 'editor', 40),
  ('users', 'Users and RBAC', 'Internal users, roles, permissions, sessions and administrative access.', 'security', 'foundation', 'owner', 50),
  ('discord', 'Discord and Comments', 'Discord OAuth, comments, reactions, moderation and Realtime channels.', 'community', 'foundation', 'moderator', 60),
  ('forms', 'Forms and Contact', 'Contact forms, CAPTCHA, lead routing, email delivery and abuse controls.', 'operations', 'foundation', 'admin', 70),
  ('newsletter', 'Newsletter', 'Subscriber lifecycle, consent, segmentation and campaign readiness.', 'growth', 'planned', 'admin', 80),
  ('analytics', 'Analytics', 'Content, traffic, conversion and community engagement measurement.', 'growth', 'foundation', 'analyst', 90),
  ('monitoring', 'Monitoring', 'Logs, uptime, runtime errors, alerts and post-deploy health checks.', 'operations', 'foundation', 'admin', 100),
  ('security', 'Security', 'Audit trails, hardening checks, secrets inventory and policy governance.', 'security', 'foundation', 'owner', 110),
  ('integrations', 'Integrations', 'Supabase, Vercel, Discord, Resend, GitHub, Cloudflare and future providers.', 'platform', 'foundation', 'admin', 120),
  ('system', 'System Settings', 'Global configuration, feature flags, menus, theme, layout and operational toggles.', 'core', 'foundation', 'owner', 130)
ON CONFLICT (key) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  area = EXCLUDED.area,
  status = EXCLUDED.status,
  owner_role = EXCLUDED.owner_role,
  order_index = EXCLUDED.order_index,
  updated_at = now();

INSERT INTO studio.permissions (key, module_key, action, description)
SELECT permission_key, module_key, action, description
FROM (
  VALUES
    ('dashboard.read', 'dashboard', 'read', 'View TS Studio dashboard summaries.'),
    ('content.read', 'content', 'read', 'Read content inventory and revisions.'),
    ('content.write', 'content', 'write', 'Create and edit content drafts.'),
    ('content.publish', 'content', 'publish', 'Publish or unpublish content.'),
    ('seo.manage', 'seo', 'manage', 'Manage SEO, Open Graph and Schema.org metadata.'),
    ('media.read', 'media', 'read', 'Read media library metadata.'),
    ('media.write', 'media', 'write', 'Upload, edit and archive media assets.'),
    ('users.read', 'users', 'read', 'Read internal users and role assignments.'),
    ('users.manage', 'users', 'manage', 'Manage roles, permissions and user access.'),
    ('discord.read', 'discord', 'read', 'Read comments and Discord community state.'),
    ('discord.moderate', 'discord', 'moderate', 'Moderate comments and Discord-linked content.'),
    ('forms.read', 'forms', 'read', 'Read contact submissions and operational form metrics.'),
    ('forms.manage', 'forms', 'manage', 'Manage form routing, CAPTCHA and abuse settings.'),
    ('newsletter.manage', 'newsletter', 'manage', 'Manage subscribers, consent and campaign settings.'),
    ('analytics.read', 'analytics', 'read', 'Read analytics reports and engagement metrics.'),
    ('monitoring.read', 'monitoring', 'read', 'Read runtime logs, alerts and health checks.'),
    ('security.read', 'security', 'read', 'Read security posture and audit trails.'),
    ('security.manage', 'security', 'manage', 'Manage security settings and incident workflows.'),
    ('integrations.read', 'integrations', 'read', 'Read integration status and configuration metadata.'),
    ('integrations.manage', 'integrations', 'manage', 'Manage integration configuration metadata.'),
    ('system.manage', 'system', 'manage', 'Manage global TS Studio configuration.')
) AS seed(permission_key, module_key, action, description)
ON CONFLICT (key) DO UPDATE SET
  module_key = EXCLUDED.module_key,
  action = EXCLUDED.action,
  description = EXCLUDED.description;

INSERT INTO studio.role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM studio.roles r
CROSS JOIN studio.permissions p
WHERE r.key = 'owner'
ON CONFLICT DO NOTHING;

INSERT INTO studio.role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM studio.roles r
JOIN studio.permissions p ON p.key IN (
  'dashboard.read',
  'content.read',
  'content.write',
  'content.publish',
  'seo.manage',
  'media.read',
  'media.write',
  'discord.read',
  'discord.moderate',
  'forms.read',
  'forms.manage',
  'newsletter.manage',
  'analytics.read',
  'monitoring.read',
  'security.read',
  'integrations.read',
  'system.manage'
)
WHERE r.key = 'admin'
ON CONFLICT DO NOTHING;

INSERT INTO studio.role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM studio.roles r
JOIN studio.permissions p ON p.key IN (
  'dashboard.read',
  'content.read',
  'content.write',
  'content.publish',
  'seo.manage',
  'media.read',
  'media.write',
  'analytics.read'
)
WHERE r.key = 'editor'
ON CONFLICT DO NOTHING;

INSERT INTO studio.role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM studio.roles r
JOIN studio.permissions p ON p.key IN (
  'dashboard.read',
  'discord.read',
  'discord.moderate',
  'content.read'
)
WHERE r.key = 'moderator'
ON CONFLICT DO NOTHING;

INSERT INTO studio.role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM studio.roles r
JOIN studio.permissions p ON p.key IN (
  'dashboard.read',
  'content.read',
  'media.read',
  'analytics.read',
  'monitoring.read',
  'security.read',
  'integrations.read'
)
WHERE r.key = 'analyst'
ON CONFLICT DO NOTHING;

INSERT INTO studio.role_permissions (role_id, permission_id)
SELECT r.id, p.id
FROM studio.roles r
JOIN studio.permissions p ON p.key IN (
  'dashboard.read',
  'content.read',
  'media.read',
  'analytics.read'
)
WHERE r.key = 'viewer'
ON CONFLICT DO NOTHING;

INSERT INTO studio.integration_connections (key, provider, display_name, status, config)
VALUES
  ('supabase-main', 'supabase', 'Supabase Principal', 'configured', '{"project":"main"}'::jsonb),
  ('supabase-comments', 'supabase', 'Supabase Comentarios', 'configured', '{"project":"comments"}'::jsonb),
  ('vercel', 'vercel', 'Vercel Hosting', 'configured', '{}'::jsonb),
  ('github', 'github', 'GitHub Repository', 'configured', '{}'::jsonb),
  ('discord', 'discord', 'Discord OAuth and Community', 'configured', '{}'::jsonb),
  ('resend', 'resend', 'Resend Email Delivery', 'not_configured', '{}'::jsonb),
  ('cloudflare', 'cloudflare', 'Cloudflare DNS and WAF', 'not_configured', '{}'::jsonb),
  ('mercado-pago', 'mercado-pago', 'Mercado Pago', 'not_configured', '{}'::jsonb),
  ('spotify', 'spotify', 'Spotify', 'not_configured', '{}'::jsonb),
  ('google', 'google', 'Google Search and Analytics', 'not_configured', '{}'::jsonb)
ON CONFLICT (key) DO UPDATE SET
  provider = EXCLUDED.provider,
  display_name = EXCLUDED.display_name,
  status = EXCLUDED.status,
  config = EXCLUDED.config,
  updated_at = now();

COMMENT ON SCHEMA studio IS 'Private TS Studio CMS schema. Not exposed directly to browser clients.';
COMMENT ON TABLE studio.audit_events IS 'Append-only administrative audit trail for future TS Studio APIs.';
COMMENT ON TABLE studio.content_items IS 'Generic CMS content registry for articles, pages, blocks, checklists and future content types.';
COMMENT ON TABLE studio.media_assets IS 'Metadata registry for Storage objects managed by TS Studio.';
