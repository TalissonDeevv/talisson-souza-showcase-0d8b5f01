// Second Supabase client — dedicated to the Discord-auth comments system.
// This project is BYO (created by the user) because Lovable Cloud does not
// expose Discord as a native auth provider. Keep this file separate from
// src/integrations/supabase/client.ts so the main app (blogs, admin, newsletter)
// keeps running on Lovable Cloud untouched.
//
// URL + publishable key are safe to ship in client code (they are the anon key
// equivalent; all access is gated by RLS on the BYO project).

import { createClient } from "@supabase/supabase-js";
import type { CommentsDatabase } from "./types";

const COMMENTS_URL =
  import.meta.env.VITE_COMMENTS_SUPABASE_URL ??
  "https://rfzjtmleojkojopftkfo.supabase.co";
const COMMENTS_PUBLISHABLE_KEY =
  import.meta.env.VITE_COMMENTS_SUPABASE_PUBLISHABLE_KEY ??
  "sb_publishable_SlpEAHJFZLDQzKwwf01cPg_OrHnKXj7";
export const COMMENTS_AUTH_STORAGE_KEY = "sb-comments-auth-token";

// Storage key MUST differ from the Cloud client's default so sessions do not collide.
export const supabaseComments = createClient<CommentsDatabase>(
  COMMENTS_URL,
  COMMENTS_PUBLISHABLE_KEY,
  {
    auth: {
      storage: typeof window !== "undefined" ? window.sessionStorage : undefined,
      storageKey: COMMENTS_AUTH_STORAGE_KEY,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  },
);
