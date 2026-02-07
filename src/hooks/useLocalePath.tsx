import { useLocale } from './useLocale';

/**
 * Returns a function that prefixes paths with /en-us when in English mode.
 * Usage: const lp = useLocalePath(); <Link to={lp('/sobre')} />
 * In PT mode: returns '/sobre'
 * In EN mode: returns '/en-us/sobre' (the caller should pass the EN path directly)
 */
export function useLocalePath() {
  const locale = useLocale();

  return (ptPath: string, enPath?: string): string => {
    if (locale === 'en') {
      if (enPath) return enPath.startsWith('/en-us') ? enPath : `/en-us${enPath}`;
      // If no enPath provided, just prefix with /en-us
      return `/en-us${ptPath}`;
    }
    return ptPath;
  };
}

/**
 * Simple path resolver: given pt and en paths, returns the right one for current locale.
 */
export function useLocaleRoute() {
  const locale = useLocale();

  return (ptPath: string, enPath: string): string => {
    return locale === 'en' ? enPath : ptPath;
  };
}
