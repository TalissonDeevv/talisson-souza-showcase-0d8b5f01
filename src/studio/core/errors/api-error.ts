import type { StudioCoreApiErrorPayload } from "../contracts/response";

export class StudioApiError extends Error {
  readonly code: string;
  readonly status: number;
  readonly details?: Record<string, unknown>;

  constructor(
    code: string,
    message: string,
    status = 500,
    details?: Record<string, unknown>,
  ) {
    super(message);
    this.name = "StudioApiError";
    this.code = code;
    this.status = status;
    this.details = details;
  }

  toPayload(): StudioCoreApiErrorPayload {
    return {
      code: this.code,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}

export function createNotImplementedError(endpointKey: string) {
  return new StudioApiError(
    "STUDIO_ENDPOINT_NOT_IMPLEMENTED",
    `Studio endpoint ${endpointKey} is registered but not implemented yet.`,
    501,
    { endpointKey },
  );
}

export function createUnauthorizedError(message = "Administrative authentication is required.") {
  return new StudioApiError("STUDIO_UNAUTHORIZED", message, 401);
}

export function createForbiddenError(message = "The authenticated user cannot access this resource.") {
  return new StudioApiError("STUDIO_FORBIDDEN", message, 403);
}

export function createValidationError(details: Record<string, unknown>) {
  return new StudioApiError("STUDIO_VALIDATION_FAILED", "The request payload is invalid.", 422, details);
}

export function normalizeStudioApiError(error: unknown): StudioApiError {
  if (error instanceof StudioApiError) return error;
  if (error instanceof Error) {
    return new StudioApiError("STUDIO_INTERNAL_ERROR", error.message, 500);
  }
  return new StudioApiError("STUDIO_INTERNAL_ERROR", "Unexpected Studio API error.", 500);
}
