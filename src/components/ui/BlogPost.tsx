
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

interface BlogPostProps {
  id: string;
  title: string;
  date: string;
  content: React.ReactNode;
  image?: string;
  tags: string[];
}

const BlogPost = ({ title, date, content, tags }: BlogPostProps) => {
  const { language } = useTheme();
  const t = useTranslation(language);

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.blog.backToBlog}
          </Link>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6">
            <SectionTitle>{title}</SectionTitle>
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 mt-4">
              <span>{date}</span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="text-foreground/70">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="prose lg:prose-xl max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-foreground prose-a:text-foreground prose-a:underline hover:prose-a:no-underline">
            {content}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default BlogPost;
