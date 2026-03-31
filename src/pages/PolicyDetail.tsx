import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PolicyLayout from '@/components/PolicyLayout';
import { useTheme } from '@/contexts/ThemeContext';
import { getText } from '@/utils/translations';
import { policySections } from '@/data/policies-content';

const PolicyDetail = () => {
  const { language } = useTheme();
  const { sectionId } = useParams<{ sectionId: string }>();
  const lang = language as 'pt' | 'en';
  const basePath = lang === 'en' ? '/en-us/policies' : '/politicas';

  const sectionIndex = policySections.findIndex(s => s.id === sectionId);
  const section = policySections[sectionIndex];

  if (!section) {
    return <Navigate to={basePath} replace />;
  }

  const prev = sectionIndex > 0 ? policySections[sectionIndex - 1] : null;
  const next = sectionIndex < policySections.length - 1 ? policySections[sectionIndex + 1] : null;

  return (
    <Layout>
      <SEO
        title={`${section.title[lang]} | ${getText(language, 'Políticas', 'Policies')}`}
        description={section.paragraphs[0][lang].slice(0, 155)}
        canonical={`${lang === 'en' ? '/en-us/policies' : '/politicas'}/${section.id}`}
        keywords={lang === 'pt'
          ? ['políticas', 'termos de uso', 'desenvolvimento de software', section.title.pt.toLowerCase()]
          : ['policies', 'terms of use', 'software development', section.title.en.toLowerCase()]
        }
      />

      <div className="pt-20 lg:pt-24 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-xs text-muted-foreground mb-8 font-mono tracking-wider uppercase"
          >
            <Link to={basePath} className="hover:text-foreground transition-colors">
              {getText(language, 'Políticas', 'Policies')}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{section.title[lang]}</span>
          </motion.div>

          <PolicyLayout activeSectionId={section.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-10">
                {section.title[lang]}
              </h1>

              <div className="space-y-6">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-[1.9] text-base lg:text-[17px]">
                    {p[lang]}
                  </p>
                ))}
              </div>

              {/* Prev / Next navigation */}
              <div className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
                {prev ? (
                  <Link
                    to={`${basePath}/${prev.id}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left">
                      <div className="text-[10px] font-mono uppercase tracking-widest mb-0.5">
                        {getText(language, 'Anterior', 'Previous')}
                      </div>
                      <div className="font-medium text-foreground">{prev.title[lang]}</div>
                    </div>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link
                    to={`${basePath}/${next.id}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group text-right"
                  >
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest mb-0.5">
                        {getText(language, 'Próximo', 'Next')}
                      </div>
                      <div className="font-medium text-foreground">{next.title[lang]}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : <div />}
              </div>
            </motion.div>
          </PolicyLayout>
        </div>
      </div>
    </Layout>
  );
};

export default PolicyDetail;
