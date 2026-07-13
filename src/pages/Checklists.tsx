import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { ArrowRight, CheckSquare, Layers, ShieldCheck } from "lucide-react";
import { checklists, getTotalItems } from "@/data/checklists";

export type { ChecklistData } from "@/data/checklists";
export { checklists } from "@/data/checklists";

const Checklists = () => {
  const { language } = useTheme();
  const totalItems = checklists.reduce((sum, checklist) => sum + getTotalItems(checklist), 0);

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Checklists | Talisson Souza", "Checklists | Talisson Souza")}
        description={getText(
          language,
          "Checklists práticos e estratégicos para segurança digital, infraestrutura e gestão de projetos.",
          "Practical and strategic checklists for digital security, infrastructure, and project management."
        )}
        canonical={getText(language, "/checklists", "/en-us/checklists")}
      />

      <PageHero
        compact
        eyebrow={getText(language, 'Referência prática', 'Practical reference')}
        title="Checklists"
        subtitle={getText(
          language,
          'Ferramentas objetivas para revisar decisões críticas antes de publicar, abrir comunidade, colocar bot em produção ou estruturar infraestrutura.',
          'Objective tools to review critical decisions before publishing, opening a community, putting a bot into production or structuring infrastructure.'
        )}
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: checklists.length, label: getText(language, 'checklists', 'checklists') },
              { value: totalItems, label: getText(language, 'itens', 'items') },
              { value: '03', label: getText(language, 'níveis', 'levels') },
            ]}
          />
        }
      >
        <IdentityPanel hover={false} className="hidden p-6 lg:block">
          <div className="mb-10 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35">
              <ShieldCheck className="h-5 w-5 text-foreground/70" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
              {getText(language, 'controle antes do risco', 'control before risk')}
            </span>
          </div>
          <div className="space-y-3">
            {['critical', 'important', 'complementary'].map((level, index) => (
              <div key={level} className="flex items-center gap-3">
                <span className="h-px flex-1 bg-foreground/10" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/55">
                  0{index + 1}
                </span>
                <span className="h-px flex-1 bg-foreground/10" />
              </div>
            ))}
          </div>
        </IdentityPanel>
      </PageHero>

      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            {checklists.map((checklist, index) => {
              const itemCount = getTotalItems(checklist);
              const categoryCount = checklist.categories.length;
              return (
                <ScrollReveal key={checklist.id} delay={index * 0.08}>
                  <Link to={checklist.path[language]} className="group block h-full">
                    <IdentityPanel className="h-full p-6 lg:p-8">
                      <div className="mb-10 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/35 transition-colors duration-300 group-hover:border-foreground/20">
                          {index % 2 === 0 ? <CheckSquare className="h-5 w-5 text-foreground/70" /> : <Layers className="h-5 w-5 text-foreground/70" />}
                        </div>
                        <span className="font-serif text-5xl leading-none text-foreground/[0.10]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl leading-tight text-foreground">
                        {checklist.title[language]}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {checklist.description[language]}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-2">
                        <span className="rounded-full border border-border/25 bg-background/35 px-3 py-1 text-[11px] text-muted-foreground">
                          {itemCount} {getText(language, 'itens', 'items')}
                        </span>
                        <span className="rounded-full border border-border/25 bg-background/35 px-3 py-1 text-[11px] text-muted-foreground">
                          {categoryCount} {getText(language, 'categorias', 'categories')}
                        </span>
                      </div>
                      <div className="mt-9 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                        <span className="relative">
                          {getText(language, 'Abrir checklist', 'Open checklist')}
                          <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </IdentityPanel>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checklists;
