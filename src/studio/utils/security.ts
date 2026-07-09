const BASE64URL_PATTERN = /^[A-Za-z0-9_-]+$/;

function getCrypto() {
  if (typeof globalThis.crypto !== "undefined") return globalThis.crypto;
  return null;
}

export function createStudioSecureToken(byteLength = 32) {
  const cryptoApi = getCrypto();
  const bytes = new Uint8Array(byteLength);

  if (cryptoApi?.getRandomValues) {
    cryptoApi.getRandomValues(bytes);
  } else {
    for (let index = 0; index < bytes.length; index += 1) {
      bytes[index] = Math.floor(Math.random() * 256);
    }
  }

  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
}

export function createStudioNonce(prefix = "studio") {
  const cryptoApi = getCrypto();
  if (cryptoApi?.randomUUID) {
    return `${prefix}_${cryptoApi.randomUUID()}`;
  }

  return `${prefix}_${Date.now().toString(36)}_${createStudioSecureToken(12)}`;
}

export function isSafeStudioToken(value: string) {
  return value.length >= 32 && BASE64URL_PATTERN.test(value);
}

export function normalizeStudioEmail(email: string) {
  return email.trim().toLowerCase();
}

export function sanitizeStudioText(value: string, maxLength = 512) {
  return [...value]
    .filter((char) => {
      const code = char.charCodeAt(0);
      return code > 31 && code !== 127;
    })
    .join("")
    .trim()
    .slice(0, maxLength);
}

export function sanitizeStudioMetadata(metadata: Record<string, unknown> = {}) {
  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(metadata)) {
    const cleanKey = sanitizeStudioText(key, 80);
    if (!cleanKey) continue;

    if (typeof value === "string") {
      sanitized[cleanKey] = sanitizeStudioText(value, 1024);
    } else if (typeof value === "number" || typeof value === "boolean" || value === null) {
      sanitized[cleanKey] = value;
    } else {
      sanitized[cleanKey] = "[object]";
    }
  }

  return sanitized;
}

export function getCurrentStudioOrigin() {
  if (typeof window === "undefined") return "server";
  return window.location.origin;
}

export function validateStudioOrigin(origin: string, allowedOrigins: readonly string[]) {
  if (!origin || origin === "server") return true;

  try {
    const parsed = new URL(origin);
    return allowedOrigins.some((allowedOrigin) => {
      const allowed = new URL(allowedOrigin);
      return parsed.protocol === allowed.protocol && parsed.host === allowed.host;
    });
  } catch {
    return false;
  }
}

export function createStudioCsrfStore() {
  let currentToken = createStudioSecureToken();

  return {
    getToken() {
      return currentToken;
    },
    rotate() {
      currentToken = createStudioSecureToken();
      return currentToken;
    },
    verify(token: string) {
      return token === currentToken && isSafeStudioToken(token);
    },
  };
}

export function createStudioReplayStore(ttlMs = 10 * 60 * 1000) {
  const seen = new Map<string, number>();

  function prune(now = Date.now()) {
    for (const [requestId, expiresAt] of seen.entries()) {
      if (expiresAt <= now) seen.delete(requestId);
    }
  }

  return {
    remember(requestId: string) {
      const now = Date.now();
      prune(now);

      if (seen.has(requestId)) {
        return false;
      }

      seen.set(requestId, now + ttlMs);
      return true;
    },
    clear() {
      seen.clear();
    },
  };
}
