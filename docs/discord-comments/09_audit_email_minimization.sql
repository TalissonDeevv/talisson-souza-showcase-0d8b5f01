-- Read-only LGPD audit. Returns counts only; never returns an e-mail address.

SELECT jsonb_build_object(
  'auth_users_total',
    (SELECT count(*) FROM auth.users),
  'auth_users_with_email',
    (SELECT count(*) FROM auth.users WHERE email IS NOT NULL AND email <> ''),
  'auth_user_metadata_with_email',
    (SELECT count(*) FROM auth.users WHERE raw_user_meta_data ? 'email'),
  'auth_identities_with_email',
    (SELECT count(*) FROM auth.identities WHERE identity_data ? 'email'),
  'public_profile_email_column_exists',
    EXISTS (
      SELECT 1
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = 'discord_profiles'
        AND column_name = 'email'
    ),
  'profile_trigger_mentions_email',
    EXISTS (
      SELECT 1
      FROM pg_proc p
      JOIN pg_namespace n ON n.oid = p.pronamespace
      WHERE n.nspname = 'public'
        AND p.proname = 'handle_discord_user'
        AND pg_get_functiondef(p.oid) ILIKE '%email%'
    ),
  'comments_total',
    (SELECT count(*) FROM public.comments),
  'profiles_total',
    (SELECT count(*) FROM public.discord_profiles),
  'pending_identity_migrations',
    (SELECT count(*) FROM public.discord_identity_migrations),
  'migration_table_client_grants',
    (
      SELECT count(*)
      FROM information_schema.role_table_grants
      WHERE table_schema = 'public'
        AND table_name = 'discord_identity_migrations'
        AND grantee IN ('anon', 'authenticated')
    )
) AS lgpd_email_audit;
