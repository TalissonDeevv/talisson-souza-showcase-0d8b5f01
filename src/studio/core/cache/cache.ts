export interface StudioCacheEntry<TValue> {
  value: TValue;
  expiresAt?: number;
}

export interface StudioCache {
  get<TValue = unknown>(key: string): Promise<TValue | null>;
  set<TValue = unknown>(key: string, value: TValue, ttlMs?: number): Promise<void>;
  delete(key: string): Promise<void>;
  clear(namespace?: string): Promise<void>;
}

export function createMemoryStudioCache(): StudioCache {
  const entries = new Map<string, StudioCacheEntry<unknown>>();

  return {
    async get<TValue>(key: string) {
      const entry = entries.get(key);
      if (!entry) return null;
      if (entry.expiresAt && entry.expiresAt <= Date.now()) {
        entries.delete(key);
        return null;
      }

      return entry.value as TValue;
    },
    async set<TValue>(key: string, value: TValue, ttlMs?: number) {
      entries.set(key, {
        value,
        expiresAt: ttlMs ? Date.now() + ttlMs : undefined,
      });
    },
    async delete(key: string) {
      entries.delete(key);
    },
    async clear(namespace?: string) {
      if (!namespace) {
        entries.clear();
        return;
      }

      for (const key of entries.keys()) {
        if (key.startsWith(`${namespace}:`)) entries.delete(key);
      }
    },
  };
}
