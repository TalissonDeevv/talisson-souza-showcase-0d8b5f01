import { useState, useRef, useEffect, useCallback } from "react";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { searchArticles, tagToSlug } from "@/data/articles";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const ArticleSearch = () => {
  const { language } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.length >= 2 ? searchArticles(query, language) : [];

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 150);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, handleClose]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, handleClose]);

  const tagBasePath = language === 'en' ? '/en-us/articles/tag' : '/artigos/tag';

  return (
    <div ref={containerRef} className="relative">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOpen}
            className="p-2 rounded-lg border border-border/30 hover:border-border/60 text-muted-foreground hover:text-foreground transition-all duration-200"
            aria-label={getText(language, 'Buscar artigos', 'Search articles')}
          >
            <Search className="w-4 h-4" />
          </motion.button>
        ) : (
          <motion.div
            key="input"
            initial={{ width: 40, opacity: 0 }}
            animate={{ width: 280, opacity: 1 }}
            exit={{ width: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm"
          >
            <Search className="w-4 h-4 text-muted-foreground shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={getText(language, 'Buscar artigos...', 'Search articles...')}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 outline-none"
            />
            <button onClick={handleClose} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results dropdown */}
      <AnimatePresence>
        {isOpen && query.length >= 2 && (
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
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-1.5">
                      {article.excerpt[language]}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {article.tags[language].map((tag) => (
                        <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full border border-border/20 bg-background/50 text-muted-foreground/60">
                          {tag}
                        </span>
                      ))}
                    </div>
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
