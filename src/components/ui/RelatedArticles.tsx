import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { articles, ArticleData } from "@/data/articles";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

interface RelatedArticlesProps {
  currentArticleId: string;
}

// IDs of the 42 market trail articles (excluded from recommendations)
const TRAIL_ARTICLE_IDS = [
  'mt-what-programming-means', 'mt-not-memorizing-syntax', 'mt-logic-over-language',
  'mt-how-internet-works', 'mt-frontend-backend-infra', 'mt-code-vs-systems',
  'mt-how-to-study', 'mt-course-college-selftaught', 'mt-realistic-study-plan',
  'mt-copying-tutorials', 'mt-reading-documentation', 'mt-learning-to-search',
  'mt-basics-beginners-ignore', 'mt-git-versioning', 'mt-databases-practical',
  'mt-what-is-http', 'mt-what-are-apis', 'mt-software-architecture-beginners',
  'mt-student-vs-developer', 'mt-think-like-professional', 'mt-technical-responsibility',
  'mt-debugging-over-framework', 'mt-code-organization-maturity', 'mt-basic-security',
  'mt-portfolio-that-impresses', 'mt-beginner-projects', 'mt-what-not-github',
  'mt-professional-readme', 'mt-technical-interviews', 'mt-what-companies-evaluate',
  'mt-trend-stack-danger', 'mt-early-specialization', 'mt-course-job-illusion',
  'mt-switching-languages', 'mt-excessive-comparison', 'mt-wanting-shortcuts',
  'mt-when-to-specialize', 'mt-choosing-backend-frontend', 'mt-junior-to-mid',
  'mt-understanding-business', 'mt-building-reputation', 'mt-remote-work-preparation',
];

function getRelatedArticles(currentId: string, language: 'pt' | 'en'): ArticleData[] {
  const nonTrailArticles = articles.filter(
    (a) => !TRAIL_ARTICLE_IDS.includes(a.id) && a.id !== currentId
  );

  const current = articles.find((a) => a.id === currentId);
  if (!current) return nonTrailArticles.slice(0, 4);

  const currentTags = new Set(current.tags[language].map((t) => t.toLowerCase()));

  // Score by matching tags
  const scored = nonTrailArticles.map((article) => {
    const matchCount = article.tags[language].filter((t) =>
      currentTags.has(t.toLowerCase())
    ).length;
    return { article, score: matchCount };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 4).map((s) => s.article);
}

const RelatedArticles = ({ currentArticleId }: RelatedArticlesProps) => {
  const { language } = useTheme();
  const related = getRelatedArticles(currentArticleId, language);

  if (related.length === 0) return null;

  return (
    <ScrollReveal delay={0.2}>
      <div className="mt-16 pt-10 border-t border-border/30">
        <h3 className="font-serif text-xl text-foreground mb-8">
          {getText(language, 'Aprofunde seu conhecimento', 'Deepen your knowledge')}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {related.map((article) => (
            <Link
              key={article.id}
              to={article.path[language]}
              className="group rounded-xl border border-border/20 bg-card/30 backdrop-blur-sm p-5 transition-all duration-300 hover:border-border/40 hover:bg-card/50"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-foreground mb-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {article.title[language]}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {article.excerpt[language]}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-xs text-muted-foreground/70">{article.readTime} {getText(language, 'de leitura', 'read')}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default RelatedArticles;
