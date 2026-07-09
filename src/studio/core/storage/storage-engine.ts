export type StudioStorageProvider = "supabase" | "s3" | "r2" | "bunny" | "minio";

export interface StudioStorageObject {
  bucket: string;
  path: string;
  contentType: string;
  size: number;
  checksum?: string;
  publicUrl?: string;
}

export interface StudioUploadIntent {
  provider: StudioStorageProvider;
  bucket: string;
  path: string;
  maxBytes: number;
  allowedMimeTypes: readonly string[];
  expiresAt: string;
}

export interface StudioStorageEngine {
  provider: StudioStorageProvider;
  createUploadIntent(input: Omit<StudioUploadIntent, "provider" | "expiresAt">): Promise<StudioUploadIntent>;
  validateObject(object: StudioStorageObject): Promise<boolean>;
  removeObject(bucket: string, path: string): Promise<void>;
}

export function createStudioStorageEngine(provider: StudioStorageProvider): StudioStorageEngine {
  return {
    provider,
    async createUploadIntent(input) {
      return {
        ...input,
        provider,
        expiresAt: new Date(Date.now() + 15 * 60_000).toISOString(),
      };
    },
    async validateObject(object) {
      return object.size > 0 && object.contentType.includes("/");
    },
    async removeObject() {
      return undefined;
    },
  };
}

export function createSupabaseStudioStorageEngine() {
  return createStudioStorageEngine("supabase");
}
