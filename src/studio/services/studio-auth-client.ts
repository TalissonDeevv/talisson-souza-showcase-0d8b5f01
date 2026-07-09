import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export interface StudioSupabaseAuthEnvironment {
  url: string;
  publishableKey: string;
  projectId: string;
}

function readEnvValue(key: string) {
  return import.meta.env[key] as string | undefined;
}

function storageKey(projectId: string) {
  return `ts-studio:${projectId}:auth`;
}

export function readStudioSupabaseAuthEnvironment(): StudioSupabaseAuthEnvironment {
  const url = readEnvValue("VITE_SUPABASE_URL");
  const publishableKey = readEnvValue("VITE_SUPABASE_PUBLISHABLE_KEY");
  const projectId = readEnvValue("VITE_SUPABASE_PROJECT_ID");

  if (!url || !publishableKey || !projectId) {
    throw new Error("TS Studio admin auth requires explicit Supabase Principal environment variables.");
  }

  const parsedUrl = new URL(url);
  const urlProjectRef = parsedUrl.hostname.split(".")[0];

  if (urlProjectRef !== projectId) {
    throw new Error("TS Studio admin auth Supabase project id does not match VITE_SUPABASE_URL.");
  }

  return { url, publishableKey, projectId };
}

export function createStudioSupabaseAuthClient(
  environment: StudioSupabaseAuthEnvironment = readStudioSupabaseAuthEnvironment(),
): SupabaseClient {
  return createClient(environment.url, environment.publishableKey, {
    auth: {
      storage: typeof window !== "undefined" ? window.sessionStorage : undefined,
      storageKey: storageKey(environment.projectId),
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: false,
      flowType: "pkce",
    },
  });
}
