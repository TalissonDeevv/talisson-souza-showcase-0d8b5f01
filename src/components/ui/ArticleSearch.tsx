import { useState, useRef, useEffect, useCallback } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { searchArticles } from "@/data/articles";
import { marketTrailArticles } from "@/data/market-trail-articles";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

interface ArticleSearchProps {
  variant?: 'hero' | 'compact';
}

const ArticleSearch = ({ variant = 'compact' }: ArticleSearchProps) => {
  const { language } = useTheme();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.length >= 2 ? searchArticles(query, language, marketTrailArticles) : [];

  const handleClose = useCallback(() => {
    setIsFocused(false);
    setQuery("");
  }, []);

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    if (isFocused) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isFocused]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isFocused) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isFocused, handleClose]);

  // Keyboard shortcut: Cmd/Ctrl + K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  if (variant === 'hero') {
    return (
      <div ref={containerRef} className="relative w-full max-w-xl">
        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
          isFocused 
            ? 'border-foreground/20 bg-card/80 backdrop-blur-xl shadow-lg shadow-foreground/[0.02]' 
            : 'border-border/30 bg-card/40 backdrop-blur-sm'
        }`}>
          <Search className="w-4 h-4 text-muted-foreground/60 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder={getText(language, 
              'Buscar por título, tema ou palavra-chave...', 
              'Search by title, topic or keyword...'
            )}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/40 outline-none"
          />
          {query ? (
            <button onClick={handleClose} className="text-muted-foreground/60 hover:text-foreground transition-colors">
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] text-muted-foreground/40 border border-border/20 rounded bg-background/30 font-mono">
              ⌘K
            </kbd>
          )}
        </div>

        {/* Results */}
        <AnimatePresence>
          {isFocused && query.length >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 right-0 mt-2 max-h-[420px] overflow-y-auto rounded-xl border border-border/50 bg-card backdrop-blur-xl shadow-2xl z-50"
            >
              {results.length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    {getText(language, 'Nenhum resultado encontrado.', 'No results found.')}
                  </p>
                  <p className="text-xs text-muted-foreground/50 mt-1">
                    {getText(language, 'Tente outra palavra-chave.', 'Try another keyword.')}
                  </p>
                </div>
              ) : (
                <div className="py-1">
                  <div className="px-4 py-2">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/50 font-medium">
                      {results.length} {getText(language, 'resultados', 'results')}
                    </span>
                  </div>
                  {results.slice(0, 8).map((article) => (
                    <Link
                      key={article.id}
                      to={article.path[language]}
                      onClick={handleClose}
                      className="group flex items-center gap-3 px-4 py-3 hover:bg-foreground/[0.06] transition-colors duration-150 border-t border-border/20"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground leading-snug truncate">
                          {article.title[language]}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[11px] text-muted-foreground/50">{article.readTime} {getText(language, 'de leitura', 'read')}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-foreground/60 shrink-0 transition-all duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Compact variant (kept for backwards compat)
  return (
    <div ref={containerRef} className="relative">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/30 bg-card/40 backdrop-blur-sm">
        <Search className="w-4 h-4 text-muted-foreground/60 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={getText(language, 'Buscar...', 'Search...')}
          className="w-48 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/40 outline-none"
        />
        {query && (
          <button onClick={handleClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {isFocused && query.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-[320px] max-h-[400px] overflow-y-auto rounded-xl border border-border/40 bg-card/95 backdrop-blur-xl shadow-xl z-50"
          >
            {results.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                {getText(language, 'Nenhum artigo encontrado.', 'No articles found.')}
              </div>
            ) : (
              <div className="py-2">
                {results.map((article) => (
                  <Link
                    key={article.id}
                    to={article.path[language]}
                    onClick={handleClose}
                    className="block px-4 py-3 hover:bg-foreground/5 transition-colors duration-150"
                  >
                    <p className="text-sm font-medium text-foreground leading-snug mb-1">
                      {article.title[language]}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {article.excerpt[language]}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArticleSearch;
