import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ShareButtons from "@/components/ui/ShareButtons";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";

interface BlogPostProps {
  id: string;
  title: string;
  date: string;
  content: React.ReactNode;
  image?: string;
  tags: string[];
  description?: string;
}

const BlogPost = ({ id, title, date, content, tags, description }: BlogPostProps) => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const metaDescription = description || `${title}. Artigo sobre ${tags.join(', ')} por Talisson Souza.`;

  return (
    <Layout>
      <SEO 
        title={`${title} | Blog`}
        description={metaDescription}
        canonical={`/blog/${id}`}
        type="article"
        keywords={tags}
      />
      
      {/* Hero Section - Compact */}
      <section className="pt-20 pb-8 lg:pt-24 lg:pb-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.blog.backToBlog}
            </Link>
            
            <div className="max-w-4xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-4 font-medium"
              >
                {getText(language, 'Artigo', 'Article')}
              </motion.span>
              
              <AnimatedTitle variant="hero" as="h1" className="mb-4">
                {title}
              </AnimatedTitle>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{getText(language, '5 min de leitura', '5 min read')}</span>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-3 py-1.5 rounded-lg border border-border/30 bg-card/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Share Buttons */}
              <ShareButtons title={title} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 lg:py-12 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="prose prose-lg lg:prose-xl max-w-none prose-invert prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-code:text-foreground prose-code:bg-card/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-a:text-foreground prose-a:underline hover:prose-a:no-underline prose-li:text-muted-foreground prose-blockquote:border-foreground/20 prose-blockquote:text-muted-foreground">
                {content}
              </div>
              
              {/* Share at end of article */}
              <div className="mt-12 pt-8 border-t border-border/20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-sm text-muted-foreground">
                    {getText(language, 'Gostou do artigo? Compartilhe!', 'Enjoyed the article? Share it!')}
                  </p>
                  <ShareButtons title={title} />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div 
                className="relative p-10 lg:p-12 rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm text-center"
                style={{
                  boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                }}
              >
                <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-foreground/[0.06] rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-foreground/[0.06] rounded-br-3xl" />
                
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
                  {getText(language, 'Gostou do conteúdo?', 'Enjoyed the content?')}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {getText(language, 
                    'Explore mais artigos sobre desenvolvimento e tecnologia.',
                    'Explore more articles about development and technology.'
                  )}
                </p>
                
                <Link 
                  to="/blog"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300 hover:opacity-90"
                  style={{
                    boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                  }}
                >
                  {getText(language, 'Ver todos os artigos', 'View all articles')}
                  <ArrowLeft className="w-4 h-4 rotate-180 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
