import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PolicyLayout from '@/components/PolicyLayout';
import { useTheme } from '@/contexts/ThemeContext';
import { getText } from '@/utils/translations';
import { policySections, policiesPageMeta } from '@/data/policies-content';

const Policies = () => {
  const { language } = useTheme();
  const lang = language as 'pt' | 'en';
  const basePath = lang === 'en' ? '/en-us/policies' : '/politicas';

  return (
    <Layout>
      <SEO
        title={policiesPageMeta.title[lang]}
        description={policiesPageMeta.description[lang]}
        canonical={lang === 'en' ? '/en-us/policies' : '/politicas'}
        keywords={lang === 'pt'
          ? ['políticas', 'termos de uso', 'política de privacidade', 'diretrizes', 'desenvolvimento de software', 'serviços digitais', 'LGPD']
          : ['policies', 'terms of use', 'privacy policy', 'guidelines', 'software development', 'digital services', 'LGPD']
        }
      />

      <div className="pt-20 lg:pt-24 min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mb-10 lg:mb-14"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4 font-mono tracking-wider uppercase">
              <span>{getText(language, 'Documentação', 'Documentation')}</span>
              <ChevronRight className="w-3 h-3" />
              <span>{getText(language, 'Políticas', 'Policies')}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              {policiesPageMeta.title[lang]}
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl leading-relaxed">
              {policiesPageMeta.description[lang]}
            </p>
            <div className="mt-4 text-xs text-muted-foreground font-mono">
              {getText(language, 'Última atualização: 31 de março de 2026', 'Last updated: March 31, 2026')}
            </div>
          </motion.div>

          <PolicyLayout>
            <div className="space-y-6">
              {policySections.map((section, i) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <Link
                    to={`${basePath}/${section.id}`}
                    className="block p-5 lg:p-6 rounded-lg border border-border bg-card hover:bg-secondary/40 transition-all duration-200 group"
                  >
                    <h2 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                      {section.title[lang]}
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {section.paragraphs[0][lang]}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </PolicyLayout>
        </div>
      </div>
    </Layout>
  );
};

export default Policies;
