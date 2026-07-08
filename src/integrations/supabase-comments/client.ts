// Second Supabase client, dedicated to the Discord-auth comments system.
// This project is BYO (created by the user) because Lovable Cloud does not
// expose Discord as a native auth provider. Keep this file separate from
// src/integrations/supabase/client.ts so the main app (blogs, admin, newsletter)
// keeps running on Lovable Cloud untouched.
//
// URL + publishable key are safe to ship in client code. They are the anon-key
// equivalent, and all access is gated by RLS on the comments project.

import { createClient } from "@supabase/supabase-js";
import { readCommentsSupabaseEnvironment } from "@/integrations/supabase/env";
import type { CommentsDatabase } from "./types";

export const COMMENTS_AUTH_STORAGE_KEY = "sb-comments-auth-token";

const commentsSupabaseEnvironment = readCommentsSupabaseEnvironment();

// Storage key MUST differ from the Cloud client's default so sessions do not collide.
export const supabaseComments = createClient<CommentsDatabase>(
  commentsSupabaseEnvironment.url,
  commentsSupabaseEnvironment.publishableKey,
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
