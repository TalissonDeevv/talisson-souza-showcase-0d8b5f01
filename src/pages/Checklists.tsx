import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { ArrowRight } from "lucide-react";
import { checklists, getTotalItems } from "@/data/checklists";

// Re-export for backward compatibility
export type { ChecklistData } from "@/data/checklists";
export { checklists } from "@/data/checklists";

const Checklists = () => {
  const { language } = useTheme();

  return (
    <Layout>
      <SEO
        title={getText(language, "Checklists | Talisson Souza", "Checklists | Talisson Souza")}
        description={getText(
          language,
          "Checklists práticos e estratégicos para segurança digital, infraestrutura e gestão de projetos.",
          "Practical and strategic checklists for digital security, infrastructure, and project management."
        )}
        canonical={getText(language, "/checklists", "/en-us/checklists")}
      />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <motion.span
              className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {getText(language, 'Referência Prática', 'Practical Reference')}
            </motion.span>
            <AnimatedTitle variant="hero" as="h1" className="mb-8">
              Checklists
            </AnimatedTitle>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
              {getText(
                language,
                'Guias práticos e objetivos para garantir que nenhum passo crítico seja esquecido. Cada checklist foi desenvolvido com base em experiência real de operação.',
                'Practical and objective guides to ensure no critical step is missed. Each checklist was developed based on real operational experience.'
              )}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {checklists.map((checklist, index) => {
              const totalItems = getTotalItems(checklist);
              const categoryCount = checklist.categories.length;
              return (
                <ScrollReveal key={checklist.id} delay={index * 0.1}>
                  <Link to={checklist.path[language]} className="block h-full">
                    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="h-full">
                      <GlassCard className="p-6 lg:p-8 group hover:border-foreground/20 transition-all duration-500 h-full flex flex-col">
                        <h2 className="font-serif text-xl lg:text-2xl text-foreground group-hover:text-gradient transition-all duration-500 mb-3">
                          {checklist.title[language]}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                          {checklist.description[language]}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          <span>
                            {totalItems} {getText(language, 'itens', 'items')} · {categoryCount} {getText(language, 'categorias', 'categories')}
                          </span>
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </GlassCard>
                    </motion.div>
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
