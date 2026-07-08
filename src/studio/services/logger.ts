export type StudioLogLevel = "debug" | "info" | "warn" | "error";

export interface StudioLogEntry {
  level: StudioLogLevel;
  message: string;
  scope: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

export interface StudioLogger {
  write(entry: StudioLogEntry): void;
  child(scope: string): StudioLogger;
}

export function createMemoryStudioLogger(scope = "studio") {
  const entries: StudioLogEntry[] = [];

  const logger: StudioLogger & { entries: () => StudioLogEntry[] } = {
    write(entry) {
      entries.push(entry);
    },
    child(nextScope) {
      return createMemoryStudioLogger(`${scope}:${nextScope}`);
    },
    entries() {
      return [...entries];
    },
  };

  return logger;
}

export function buildStudioLogEntry(
  level: StudioLogLevel,
  scope: string,
  message: string,
  metadata?: Record<string, unknown>,
): StudioLogEntry {
  return {
    level,
    scope,
    message,
    metadata,
    createdAt: new Date().toISOString(),
  };
}
