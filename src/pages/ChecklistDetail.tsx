import { useState, useEffect, useCallback } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { Check, ArrowLeft, ChevronDown, AlertTriangle, Info, Sparkles } from "lucide-react";
import { checklists, getAllItems, calculateWeightedProgress, type Criticality } from "@/data/checklists";
import { Progress } from "@/components/ui/progress";

const STORAGE_KEY_PREFIX = "checklist-progress-";

const criticalityIcon: Record<Criticality, typeof AlertTriangle> = {
  critical: AlertTriangle,
  important: Info,
  complementary: Sparkles,
};

const ChecklistDetail = () => {
  const { language } = useTheme();
  const { checklistId } = useParams<{ checklistId: string }>();

  const checklist = checklists.find((c) => {
    const ptSlug = c.path.pt.split("/").pop();
    const enSlug = c.path.en.split("/").pop();
    return checklistId === ptSlug || checklistId === enSlug || checklistId === c.id;
  });

  const totalItems = checklist ? getAllItems(checklist).length : 0;

  const [checked, setChecked] = useState<boolean[]>(() => {
    if (!checklist) return [];
    const storageKey = STORAGE_KEY_PREFIX + checklist.id;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === totalItems) return parsed;
      }
    } catch {}
    return Array.from({ length: totalItems }, () => false);
  });

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  // Persist to localStorage
  useEffect(() => {
    if (!checklist) return;
    const storageKey = STORAGE_KEY_PREFIX + checklist.id;
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {}
  }, [checked, checklist]);

  const toggle = useCallback((globalIndex: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[globalIndex] = !next[globalIndex];
      return next;
    });
  }, []);

  if (!checklist) {
    return <Navigate to={language === "en" ? "/en-us/checklists" : "/checklists"} replace />;
  }

  const completedCount = checked.filter(Boolean).length;
  const weightedProgress = calculateWeightedProgress(checklist, checked);

  let globalIndex = 0;

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
              to={language === "en" ? "/en-us/checklists" : "/checklists"}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 block"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {getText(language, "Voltar aos checklists", "Back to checklists")}
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
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {checklist.description[language]}
            </p>

            {/* Progress section */}
            <div className="mb-12">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                <span>
                  {completedCount}/{totalItems} {getText(language, "concluídos", "completed")}
                </span>
                <span className="font-mono text-foreground">{weightedProgress}%</span>
              </div>
              <Progress value={weightedProgress} className="h-1.5 bg-border" />
            </div>
          </ScrollReveal>

          {/* Categories */}
          <div className="space-y-12">
            {checklist.categories.map((category, catIndex) => {
              const categoryStartIndex = globalIndex;
              const categoryItems = category.items.map((item, localIndex) => {
                const itemGlobalIndex = categoryStartIndex + localIndex;
                return { item, globalIndex: itemGlobalIndex };
              });
              globalIndex += category.items.length;

              const categoryCompletedCount = categoryItems.filter(
                ({ globalIndex: gi }) => checked[gi]
              ).length;

              return (
                <div key={catIndex}>
                  <ScrollReveal delay={catIndex * 0.05}>
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <h2 className="font-serif text-lg text-foreground">
                          {category.name[language]}
                        </h2>
                        <span className="text-xs text-muted-foreground font-mono">
                          {categoryCompletedCount}/{category.items.length}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {category.description[language]}
                      </p>
                    </div>
                  </ScrollReveal>

                  <div className="space-y-2">
                    {categoryItems.map(({ item, globalIndex: gi }) => {
                      const isExpanded = expandedItem === gi;
                      const CritIcon = criticalityIcon[item.criticality];

                      return (
                        <ScrollReveal key={gi} delay={gi * 0.02}>
                          <GlassCard
                            className={`transition-all duration-300 hover:border-foreground/20 ${
                              checked[gi] ? "opacity-60" : ""
                            }`}
                          >
                            <button
                              onClick={() => toggle(gi)}
                              className="w-full text-left p-5 flex items-start gap-4"
                            >
                              <div
                                className={`mt-0.5 flex-shrink-0 h-5 w-5 rounded border flex items-center justify-center transition-colors ${
                                  checked[gi]
                                    ? "bg-foreground border-foreground"
                                    : "border-border"
                                }`}
                              >
                                {checked[gi] && (
                                  <Check className="h-3 w-3 text-background" />
                                )}
                              </div>
                              <span
                                className={`text-sm leading-relaxed transition-all flex-1 ${
                                  checked[gi]
                                    ? "line-through text-muted-foreground"
                                    : "text-foreground"
                                }`}
                              >
                                {item.text[language]}
                              </span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedItem(isExpanded ? null : gi);
                                }}
                                className="flex-shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
                                aria-label={getText(language, "Detalhes", "Details")}
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    isExpanded ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            </button>

                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-5 pb-5 pt-0 ml-9 space-y-3 border-t border-border/40 pt-4">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                      <CritIcon className="h-3.5 w-3.5" />
                                      <span className="capitalize">
                                        {item.criticality === 'critical' && getText(language, 'Crítico', 'Critical')}
                                        {item.criticality === 'important' && getText(language, 'Importante', 'Important')}
                                        {item.criticality === 'complementary' && getText(language, 'Complementar', 'Complementary')}
                                      </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                      {item.description[language]}
                                    </p>
                                    <div className="text-xs text-muted-foreground/80 leading-relaxed">
                                      <span className="font-medium text-muted-foreground">
                                        {getText(language, "Risco:", "Risk:")}
                                      </span>{" "}
                                      {item.risk[language]}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </GlassCard>
                        </ScrollReveal>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChecklistDetail;
