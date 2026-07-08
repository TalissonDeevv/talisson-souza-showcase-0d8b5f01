const SUPABASE_URL_PATTERN = /^https:\/\/([a-z0-9]{20})\.supabase\.co$/;

type ViteEnv = Record<string, string | boolean | undefined>;

function readRequiredViteString(name: string): string {
  const value = (import.meta.env as ViteEnv)[name];

  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value.trim();
}

function projectRefFromUrl(name: string, url: string): string {
  const match = SUPABASE_URL_PATTERN.exec(url);

  if (!match?.[1]) {
    throw new Error(
      `${name} must be a Supabase project URL in the form https://<project-ref>.supabase.co`,
    );
  }

  return match[1];
}

function readSupabaseEnvironment(prefix: "" | "COMMENTS_") {
  const urlName = prefix ? `VITE_${prefix}SUPABASE_URL` : "VITE_SUPABASE_URL";
  const keyName = prefix
    ? `VITE_${prefix}SUPABASE_PUBLISHABLE_KEY`
    : "VITE_SUPABASE_PUBLISHABLE_KEY";
  const projectIdName = prefix
    ? `VITE_${prefix}SUPABASE_PROJECT_ID`
    : "VITE_SUPABASE_PROJECT_ID";

  const url = readRequiredViteString(urlName);
  const publishableKey = readRequiredViteString(keyName);
  const projectId = readRequiredViteString(projectIdName);
  const urlProjectRef = projectRefFromUrl(urlName, url);

  if (urlProjectRef !== projectId) {
    throw new Error(
      `${projectIdName} must match the project ref in ${urlName}`,
    );
  }

  return { url, publishableKey, projectId };
}

export function readMainSupabaseEnvironment() {
  return readSupabaseEnvironment("");
}

export function readCommentsSupabaseEnvironment() {
  return readSupabaseEnvironment("COMMENTS_");
}
