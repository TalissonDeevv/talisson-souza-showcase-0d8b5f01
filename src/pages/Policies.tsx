import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PolicyLayout from '@/components/PolicyLayout';
import { IdentityPanel, MotionRail, PageHero } from '@/components/ui/PageIdentity';
import { useTheme } from '@/contexts/ThemeContext';
import { getText } from '@/utils/translations';
import { policySections, policiesPageMeta } from '@/data/policies-content';

const Policies = () => {
  const { language } = useTheme();
  const lang = language as 'pt' | 'en';
  const basePath = lang === 'en' ? '/en-us/policies' : '/politicas';

  return (
    <Layout withPadding={false}>
      <SEO
        title={policiesPageMeta.title[lang]}
        description={policiesPageMeta.description[lang]}
        canonical={lang === 'en' ? '/en-us/policies' : '/politicas'}
        keywords={lang === 'pt'
          ? ['políticas', 'termos de uso', 'política de privacidade', 'diretrizes', 'desenvolvimento de software', 'serviços digitais', 'LGPD']
          : ['policies', 'terms of use', 'privacy policy', 'guidelines', 'software development', 'digital services', 'LGPD']
        }
      />

      <PageHero
        compact
        eyebrow={getText(language, 'Documentação', 'Documentation')}
        title={getText(language, 'Políticas e acordos', 'Policies and agreements')}
        subtitle={policiesPageMeta.description[lang]}
        meta={
          <MotionRail
            items={[
              { value: policySections.length, label: getText(language, 'seções', 'sections') },
              { value: 'LGPD', label: getText(language, 'privacidade', 'privacy') },
              { value: '2026', label: getText(language, 'revisão', 'review') },
            ]}
            className="max-w-2xl"
          />
        }
      >
        <IdentityPanel hover={false} className="hidden p-6 lg:block">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35">
              <ShieldCheck className="h-5 w-5 text-foreground/70" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
              {getText(language, 'clareza operacional', 'operational clarity')}
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {getText(
              language,
              'Uma central para entender limites, direitos, responsabilidades e como cada relação profissional é conduzida.',
              'A hub to understand limits, rights, responsibilities and how each professional relationship is conducted.'
            )}
          </p>
        </IdentityPanel>
      </PageHero>

      <section className="relative pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <PolicyLayout>
            <div className="grid gap-4 md:grid-cols-2">
              {policySections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link to={`${basePath}/${section.id}`} className="group block h-full">
                    <IdentityPanel className="h-full p-6">
                      <div className="mb-8 flex items-start justify-between gap-5">
                        <span className="font-serif text-4xl leading-none text-foreground/15">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/30 bg-background/35 transition-colors duration-300 group-hover:border-foreground/20">
                          <FileText className="h-4 w-4 text-foreground/60" />
                        </div>
                      </div>
                      <h2 className="font-serif text-xl leading-tight text-foreground">
                        {section.title[lang]}
                      </h2>
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {section.paragraphs[0][lang]}
                      </p>
                      <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/85">
                        <span className="relative">
                          {getText(language, 'Ler política', 'Read policy')}
                          <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </IdentityPanel>
                  </Link>
                </motion.div>
              ))}
            </div>
          </PolicyLayout>
        </div>
      </section>
    </Layout>
  );
};

export default Policies;
