import { useLocation } from "react-router-dom";
import ArticleAudioButton from "./ArticleAudioButton";

/**
 * Self-contained audio button that auto-detects slug from URL.
 * Drop this into any article page - no props required.
 * It extracts the slug from /artigos/:slug or /en-us/articles/:slug
 */
const ArticleAudioAutoButton = () => {
  const { pathname } = useLocation();

  // Extract slug from article URLs
  const match = pathname.match(/\/(?:artigos|en-us\/articles)\/([^/]+)$/);
  const slug = match?.[1];

  if (!slug) return null;

  // Use the page title from document (set by SEO component)
  const title = document.title?.split(" | ")[0] || slug;

  return (
    <div className="mt-3">
      <ArticleAudioButton slug={slug} title={title} />
    </div>
  );
};

export default ArticleAudioAutoButton;
