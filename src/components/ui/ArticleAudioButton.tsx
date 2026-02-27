import { useState, useEffect, useCallback } from "react";
import { Headphones, Loader2 } from "lucide-react";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

interface ArticleAudioButtonProps {
  slug: string;
  title: string;
}

const ArticleAudioButton = ({ slug, title }: ArticleAudioButtonProps) => {
  const [exists, setExists] = useState<boolean | null>(null);
  const { play, isLoading, currentSlug, isPlaying } = useAudioPlayer();
  const { language } = useTheme();

  const isThisPlaying = currentSlug === slug && isPlaying;
  const isThisLoading = currentSlug === slug && isLoading;

  useEffect(() => {
    let cancelled = false;
    // Check cache first
    const cacheKey = `audio-exists-${slug}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached !== null) {
      setExists(cached === "true");
      return;
    }
    fetch(`/audio/${slug}.mp3`, { method: "HEAD" })
      .then(res => {
        const found = res.ok;
        if (!cancelled) {
          setExists(found);
          sessionStorage.setItem(cacheKey, String(found));
        }
      })
      .catch(() => { if (!cancelled) setExists(false); });
    return () => { cancelled = true; };
  }, [slug]);

  const handleClick = useCallback(() => {
    play(slug, title);
  }, [play, slug, title]);

  // Don't render while checking or if file doesn't exist
  if (exists === null || exists === false) return null;

  return (
    <button
      onClick={handleClick}
      disabled={isThisLoading}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-border/50 bg-card/80 text-muted-foreground hover:text-foreground hover:bg-card hover:border-primary/30 transition-all duration-200 disabled:opacity-50"
    >
      {isThisLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Headphones className="w-4 h-4" />
      )}
      {isThisPlaying
        ? getText(language, "Reproduzindo...", "Playing...")
        : getText(language, "Ouvir versão em áudio", "Listen to audio version")
      }
    </button>
  );
};

export default ArticleAudioButton;
