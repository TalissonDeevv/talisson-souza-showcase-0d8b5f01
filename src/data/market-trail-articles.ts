// Re-exports the MarketTrailArticle type and combines all block files
import type { MarketTrailArticle } from './market-trail/types';
export type { MarketTrailArticle };

import { block1Articles } from './market-trail/block-1';
import { block2Articles } from './market-trail/block-2';
import { block3Articles } from './market-trail/block-3';
import { block4Articles } from './market-trail/block-4';
import { block5Articles } from './market-trail/block-5';
import { block6Articles } from './market-trail/block-6';
import { block7Articles } from './market-trail/block-7';
import { careerGrowthExpansionArticles } from './market-trail/career-growth-expansion';
import { careerMasteryExpansionArticles } from './market-trail/career-mastery-expansion';
import { enhanceManualArticle } from './market-trail/manual-enhancements';
import { securityTrailArticles } from './market-trail/security-trail';
import { architectureTrailArticles } from './market-trail/architecture-trail';
import { communityTrailArticles } from './market-trail/community-trail';
import { strategyTrailArticles } from './market-trail/strategy-trail';
import { ecaDigitalArticle } from './market-trail/eca-digital-article';
import { devFinancialGrowthArticle } from './market-trail/dev-financial-growth';
import { aiReplacingDevsArticle } from './market-trail/ai-replacing-devs';
import { devJobPositioningArticle } from './market-trail/dev-job-positioning';
import { discordCommunityStrategyArticles } from './market-trail/discord-community-strategy';

const rawMarketTrailArticles: MarketTrailArticle[] = [
  ...block1Articles,
  ...block2Articles,
  ...block3Articles,
  ...block4Articles,
  ...block5Articles,
  ...block6Articles,
  ...block7Articles,
  ...careerGrowthExpansionArticles,
  ...careerMasteryExpansionArticles,
  ...securityTrailArticles,
  ...architectureTrailArticles,
  ...communityTrailArticles,
  ...discordCommunityStrategyArticles,
  ...strategyTrailArticles,
  ...ecaDigitalArticle,
  ...devFinancialGrowthArticle,
  ...aiReplacingDevsArticle,
  ...devJobPositioningArticle,
];

export const marketTrailArticles: MarketTrailArticle[] = rawMarketTrailArticles.map(enhanceManualArticle);
