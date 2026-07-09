-- TS Studio administrative authentication foundation.
--
-- Local migration only. Do not apply remotely before staging review.
-- This keeps the Studio schema private and prepares server-side APIs for
-- admin sessions, replay protection, audit durability and rate limiting.

CREATE TABLE IF NOT EXISTS studio.admin_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  session_hash text NOT NULL UNIQUE,
  status text NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'expired', 'revoked', 'invalidated')),
  issued_at timestamptz NOT NULL DEFAULT now(),
  refreshed_at timestamptz,
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL,
  revoked_at timestamptz,
  revoked_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  ip_hash text,
  user_agent_hash text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (expires_at > issued_at)
);

CREATE TABLE IF NOT EXISTS studio.admin_login_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email_hash text NOT NULL,
  origin_hash text NOT NULL,
  result text NOT NULL
    CHECK (result IN ('success', 'failed', 'rate_limited', 'blocked')),
  failure_code text,
  request_id text,
  ip_hash text,
  user_agent_hash text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  blocked_until timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS studio.admin_session_nonces (
  nonce_hash text PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  request_id text NOT NULL,
  purpose text NOT NULL
    CHECK (purpose IN ('login', 'logout', 'refresh', 'mutation', 'csrf')),
  expires_at timestamptz NOT NULL,
  consumed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (expires_at > created_at)
);

CREATE TABLE IF NOT EXISTS studio.admin_auth_rate_limits (
  scope_hash text PRIMARY KEY,
  attempts integer NOT NULL DEFAULT 0 CHECK (attempts >= 0),
  window_starts_at timestamptz NOT NULL DEFAULT now(),
  blocked_until timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_studio_admin_sessions_user_status
  ON studio.admin_sessions(user_id, status, expires_at DESC);

CREATE INDEX IF NOT EXISTS idx_studio_admin_sessions_expiry
  ON studio.admin_sessions(status, expires_at);

CREATE INDEX IF NOT EXISTS idx_studio_admin_login_attempts_email_created
  ON studio.admin_login_attempts(email_hash, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_studio_admin_login_attempts_origin_created
  ON studio.admin_login_attempts(origin_hash, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_studio_admin_session_nonces_user_purpose
  ON studio.admin_session_nonces(user_id, purpose, expires_at);

CREATE INDEX IF NOT EXISTS idx_studio_admin_auth_rate_limits_blocked
  ON studio.admin_auth_rate_limits(blocked_until)
  WHERE blocked_until IS NOT NULL;

ALTER TABLE studio.admin_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.admin_login_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.admin_session_nonces ENABLE ROW LEVEL SECURITY;
ALTER TABLE studio.admin_auth_rate_limits ENABLE ROW LEVEL SECURITY;

ALTER TABLE studio.admin_sessions FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.admin_login_attempts FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.admin_session_nonces FORCE ROW LEVEL SECURITY;
ALTER TABLE studio.admin_auth_rate_limits FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "service_role_manage_admin_sessions" ON studio.admin_sessions;
DROP POLICY IF EXISTS "service_role_manage_admin_login_attempts" ON studio.admin_login_attempts;
DROP POLICY IF EXISTS "service_role_manage_admin_session_nonces" ON studio.admin_session_nonces;
DROP POLICY IF EXISTS "service_role_manage_admin_auth_rate_limits" ON studio.admin_auth_rate_limits;
DROP POLICY IF EXISTS "service_role_manage_audit_events" ON studio.audit_events;

CREATE POLICY "service_role_manage_admin_sessions"
  ON studio.admin_sessions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "service_role_manage_admin_login_attempts"
  ON studio.admin_login_attempts
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "service_role_manage_admin_session_nonces"
  ON studio.admin_session_nonces
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "service_role_manage_admin_auth_rate_limits"
  ON studio.admin_auth_rate_limits
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "service_role_manage_audit_events"
  ON studio.audit_events
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

REVOKE ALL PRIVILEGES ON TABLE studio.admin_sessions FROM PUBLIC, anon, authenticated;
REVOKE ALL PRIVILEGES ON TABLE studio.admin_login_attempts FROM PUBLIC, anon, authenticated;
REVOKE ALL PRIVILEGES ON TABLE studio.admin_session_nonces FROM PUBLIC, anon, authenticated;
REVOKE ALL PRIVILEGES ON TABLE studio.admin_auth_rate_limits FROM PUBLIC, anon, authenticated;

GRANT ALL PRIVILEGES ON TABLE studio.admin_sessions TO service_role;
GRANT ALL PRIVILEGES ON TABLE studio.admin_login_attempts TO service_role;
GRANT ALL PRIVILEGES ON TABLE studio.admin_session_nonces TO service_role;
GRANT ALL PRIVILEGES ON TABLE studio.admin_auth_rate_limits TO service_role;
