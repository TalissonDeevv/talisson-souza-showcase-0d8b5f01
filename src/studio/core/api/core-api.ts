import { createStudioCoreRouter } from "../router/router";
import type { StudioCoreRouter, StudioCoreRouterOptions } from "../router/router";

export interface StudioCoreApi {
  readonly router: StudioCoreRouter;
}

export function createStudioCoreApi(options: StudioCoreRouterOptions = {}): StudioCoreApi {
  return {
    router: createStudioCoreRouter(options),
  };
}
