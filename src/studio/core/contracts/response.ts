export const STUDIO_CORE_API_VERSION = "2026-07-09.m2";

export interface StudioCoreApiErrorPayload {
  code: string;
  message: string;
  status: number;
  details?: Record<string, unknown>;
}

export interface StudioCoreApiResponse<TData = unknown> {
  success: boolean;
  data?: TData;
  error?: StudioCoreApiErrorPayload;
  requestId: string;
  timestamp: string;
  version: string;
}

export interface StudioPagination {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface StudioCorePaginatedResponse<TItem = unknown> extends StudioCoreApiResponse<readonly TItem[]> {
  pagination: StudioPagination;
}

export interface StudioCoreValidationError {
  field: string;
  message: string;
  code: string;
}

export function createStudioApiResponse<TData>(
  requestId: string,
  data: TData,
): StudioCoreApiResponse<TData> {
  return {
    success: true,
    data,
    requestId,
    timestamp: new Date().toISOString(),
    version: STUDIO_CORE_API_VERSION,
  };
}

export function createStudioApiErrorResponse(
  requestId: string,
  error: StudioCoreApiErrorPayload,
): StudioCoreApiResponse<never> {
  return {
    success: false,
    error,
    requestId,
    timestamp: new Date().toISOString(),
    version: STUDIO_CORE_API_VERSION,
  };
}

export function createStudioPaginatedResponse<TItem>(
  requestId: string,
  data: readonly TItem[],
  pagination: StudioPagination,
): StudioCorePaginatedResponse<TItem> {
  return {
    ...createStudioApiResponse(requestId, data),
    pagination,
  };
}
