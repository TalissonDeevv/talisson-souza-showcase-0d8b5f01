import { useLocation } from 'react-router-dom';

export type Locale = 'pt' | 'en';

/**
 * Detects language from URL path.
 * /en-us/* -> 'en'
 * everything else -> 'pt'
 */
export function useLocale(): Locale {
  const location = useLocation();
  return location.pathname.startsWith('/en-us') ? 'en' : 'pt';
}
