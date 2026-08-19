import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronRight, FileText } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import PolicyLayout from '@/components/PolicyLayout';
import { IdentityPanel, PageHero } from '@/components/ui/PageIdentity';
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
    <Layout withPadding={false}>
      <SEO
        title={`${section.title[lang]} | ${getText(language, 'Políticas', 'Policies')}`}
        description={section.paragraphs[0][lang].slice(0, 155)}
        canonical={`${lang === 'en' ? '/en-us/policies' : '/politicas'}/${section.id}`}
        keywords={lang === 'pt'
          ? ['políticas', 'termos de uso', 'desenvolvimento de software', section.title.pt.toLowerCase()]
          : ['policies', 'terms of use', 'software development', section.title.en.toLowerCase()]
        }
      />

      <PageHero
        compact
        eyebrow={getText(language, 'Políticas', 'Policies')}
        title={section.title[lang]}
        subtitle={section.paragraphs[0][lang]}
        actions={
          <Link
            to={basePath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {getText(language, 'Voltar à central', 'Back to hub')}
          </Link>
        }
      >
        <IdentityPanel hover={false} className="hidden p-6 lg:block">
          <div className="mb-8 flex items-center justify-between">
            <FileText className="h-5 w-5 text-foreground/65" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
              {String(sectionIndex + 1).padStart(2, '0')} / {String(policySections.length).padStart(2, '0')}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-border/40">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((sectionIndex + 1) / policySections.length) * 100}%` }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full bg-foreground/70"
            />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {getText(
              language,
              'Leitura organizada para decisões, contratação e uso responsável dos materiais publicados.',
              'Structured reading for decisions, engagement and responsible use of published materials.'
            )}
          </p>
        </IdentityPanel>
      </PageHero>

      <section className="relative pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
            <Link to={basePath} className="transition-colors hover:text-foreground">
              {getText(language, 'Políticas', 'Policies')}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{section.title[lang]}</span>
          </div>

          <PolicyLayout activeSectionId={section.id}>
            <IdentityPanel hover={false} className="mx-auto max-w-3xl p-6 sm:p-8 lg:p-10">
              <article className="space-y-6">
                {section.paragraphs.map((p, j) => (
                  <motion.p
                    key={j}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: Math.min(j * 0.035, 0.2), ease: [0.16, 1, 0.3, 1] }}
                    className="text-base leading-[1.9] text-muted-foreground lg:text-[17px]"
                  >
                    {p[lang]}
                  </motion.p>
                ))}
              </article>

              <div className="mt-12 flex flex-col gap-3 border-t border-border/30 pt-6 sm:flex-row sm:items-stretch sm:justify-between">
                {prev ? (
                  <Link
                    to={`${basePath}/${prev.id}`}
                    className="group flex flex-1 items-center gap-3 rounded-xl border border-border/25 bg-background/30 p-4 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    <div className="text-left">
                      <div className="mb-0.5 text-[10px] uppercase tracking-widest text-muted-foreground/55">
                        {getText(language, 'Anterior', 'Previous')}
                      </div>
                      <div className="font-medium text-foreground">{prev.title[lang]}</div>
                    </div>
                  </Link>
                ) : <div className="hidden flex-1 sm:block" />}

                {next ? (
                  <Link
                    to={`${basePath}/${next.id}`}
                    className="group flex flex-1 items-center justify-end gap-3 rounded-xl border border-border/25 bg-background/30 p-4 text-right text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
                  >
                    <div>
                      <div className="mb-0.5 text-[10px] uppercase tracking-widest text-muted-foreground/55">
                        {getText(language, 'Próximo', 'Next')}
                      </div>
                      <div className="font-medium text-foreground">{next.title[lang]}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : <div className="hidden flex-1 sm:block" />}
              </div>
            </IdentityPanel>
          </PolicyLayout>
        </div>
      </section>
    </Layout>
  );
};

export default PolicyDetail;
