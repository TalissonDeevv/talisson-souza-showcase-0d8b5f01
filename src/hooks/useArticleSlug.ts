import { useLocation } from "react-router-dom";

/**
 * Extracts the article slug from the current URL path.
 * Works for both /artigos/:slug and /en-us/articles/:slug
 */
export function useArticleSlug(): string | null {
  const { pathname } = useLocation();
  
  // Match /artigos/:slug or /en-us/articles/:slug
  const match = pathname.match(/\/(?:artigos|en-us\/articles)\/([^/]+)$/);
  return match ? match[1] : null;
}
