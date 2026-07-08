import { getStudioApiEndpoint } from "./contracts";
import type { StudioApiRequest, StudioApiResponse } from "./contracts";

export interface StudioApiTransport {
  request<TData>(request: StudioApiRequest): Promise<StudioApiResponse<TData>>;
}

export class StudioApiContractError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StudioApiContractError";
  }
}

export function createStudioApiClient(transport: StudioApiTransport) {
  return {
    async request<TData>(request: StudioApiRequest): Promise<StudioApiResponse<TData>> {
      const endpoint = getStudioApiEndpoint(request.endpointKey);
      if (!endpoint) {
        throw new StudioApiContractError(`Unknown TS Studio API endpoint: ${request.endpointKey}`);
      }

      return transport.request<TData>(request);
    },
  };
}
