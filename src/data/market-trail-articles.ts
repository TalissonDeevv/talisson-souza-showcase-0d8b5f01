// Re-exports the MarketTrailArticle type and combines all block files
import type { MarketTrailArticle } from './market-trail/types';
export type { MarketTrailArticle };

import { block1Articles } from './market-trail/block-1';

// Blocks 2-7 will be added as they are created
export const marketTrailArticles: MarketTrailArticle[] = [
  ...block1Articles,
];
