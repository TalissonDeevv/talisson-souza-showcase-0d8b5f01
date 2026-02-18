import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { Check, ArrowLeft } from "lucide-react";
import { checklists } from "./Checklists";

const ChecklistDetail = () => {
  const { language } = useTheme();
  const { checklistId } = useParams<{ checklistId: string }>();

  const checklist = checklists.find((c) => {
    const ptSlug = c.path.pt.split('/').pop();
    const enSlug = c.path.en.split('/').pop();
    return checklistId === ptSlug || checklistId === enSlug || checklistId === c.id;
  });

  const [checked, setChecked] = useState<boolean[]>(() =>
    Array.from({ length: checklist?.items[language]?.length ?? 0 }, () => false)
  );

  if (!checklist) {
    return <Navigate to={language === 'en' ? '/en-us/checklists' : '/checklists'} replace />;
  }

  const items = checklist.items[language];
  const completedCount = checked.filter(Boolean).length;

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <Layout>
      <SEO
        title={`${checklist.title[language]} | Talisson Souza`}
        description={checklist.description[language]}
        canonical={checklist.path[language]}
      />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <ScrollReveal>
            <Link
              to={language === 'en' ? '/en-us/checklists' : '/checklists'}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 block"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {getText(language, 'Voltar aos checklists', 'Back to checklists')}
            </Link>

            <motion.span
              className="block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Checklist
            </motion.span>
            <AnimatedTitle variant="hero" as="h1" className="mb-4">
              {checklist.title[language]}
            </AnimatedTitle>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {checklist.description[language]}
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              {completedCount}/{items.length} {getText(language, 'concluídos', 'completed')}
            </p>
          </ScrollReveal>

          <div className="space-y-3">
            {items.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left"
                >
                  <GlassCard className={`p-5 flex items-start gap-4 transition-all duration-300 hover:border-foreground/20 ${checked[index] ? 'opacity-60' : ''}`}>
                    <div className={`mt-0.5 flex-shrink-0 h-5 w-5 rounded border flex items-center justify-center transition-colors ${checked[index] ? 'bg-foreground border-foreground' : 'border-border'}`}>
                      {checked[index] && <Check className="h-3 w-3 text-background" />}
                    </div>
                    <span className={`text-sm leading-relaxed transition-all ${checked[index] ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                      {item}
                    </span>
                  </GlassCard>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChecklistDetail;
