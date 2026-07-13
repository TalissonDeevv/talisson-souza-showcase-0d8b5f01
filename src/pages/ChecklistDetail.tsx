import { useState, useEffect, useCallback } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { Check, ArrowLeft, ChevronDown, AlertTriangle, Info, Sparkles, ClipboardCheck } from "lucide-react";
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
    } catch {
      return Array.from({ length: totalItems }, () => false);
    }
    return Array.from({ length: totalItems }, () => false);
  });

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  useEffect(() => {
    if (!checklist) return;
    const storageKey = STORAGE_KEY_PREFIX + checklist.id;
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn("Could not persist checklist progress", error);
      }
    }
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
  const backPath = language === "en" ? "/en-us/checklists" : "/checklists";

  let globalIndex = 0;

  return (
    <Layout withPadding={false}>
      <SEO
        title={`${checklist.title[language]} | Talisson Souza`}
        description={checklist.description[language]}
        canonical={checklist.path[language]}
      />

      <PageHero
        compact
        eyebrow="Checklist"
        title={checklist.title[language]}
        subtitle={checklist.description[language]}
        actions={
          <Link
            to={backPath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {getText(language, "Voltar aos checklists", "Back to checklists")}
          </Link>
        }
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: `${completedCount}/${totalItems}`, label: getText(language, "concluídos", "completed") },
              { value: `${weightedProgress}%`, label: getText(language, "progresso", "progress") },
              { value: checklist.categories.length, label: getText(language, "categorias", "categories") },
            ]}
          />
        }
      >
        <IdentityPanel hover={false} className="hidden p-6 lg:block">
          <div className="mb-8 flex items-center justify-between">
            <ClipboardCheck className="h-5 w-5 text-foreground/70" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
              {getText(language, "execução guiada", "guided execution")}
            </span>
          </div>
          <Progress value={weightedProgress} className="h-1.5 bg-border/70" />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {getText(
              language,
              "Seu progresso fica salvo neste navegador para você revisar com calma.",
              "Your progress is saved in this browser so you can review calmly."
            )}
          </p>
        </IdentityPanel>
      </PageHero>

      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <IdentityPanel hover={false} className="p-5">
                <div className="mb-4 text-[10px] uppercase tracking-[0.24em] text-muted-foreground/60">
                  {getText(language, "visão geral", "overview")}
                </div>
                <Progress value={weightedProgress} className="h-1.5 bg-border/70" />
                <div className="mt-5 space-y-3">
                  {checklist.categories.map((category, index) => (
                    <div key={index} className="rounded-xl border border-border/20 bg-background/25 p-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="line-clamp-1 text-xs font-medium text-foreground">{category.name[language]}</span>
                        <span className="text-[10px] text-muted-foreground/60">{category.items.length}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </IdentityPanel>
            </aside>

            <div className="space-y-8">
              {checklist.categories.map((category, catIndex) => {
                const categoryStartIndex = globalIndex;
                const categoryItems = category.items.map((item, localIndex) => {
                  const itemGlobalIndex = categoryStartIndex + localIndex;
                  return { item, globalIndex: itemGlobalIndex };
                });
                globalIndex += category.items.length;

                const categoryCompletedCount = categoryItems.filter(({ globalIndex: gi }) => checked[gi]).length;

                return (
                  <ScrollReveal key={catIndex} delay={catIndex * 0.05}>
                    <IdentityPanel hover={false} className="p-5 sm:p-6 lg:p-8">
                      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
                            {String(catIndex + 1).padStart(2, "0")}
                          </span>
                          <h2 className="mt-2 font-serif text-2xl text-foreground">
                            {category.name[language]}
                          </h2>
                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                            {category.description[language]}
                          </p>
                        </div>
                        <span className="rounded-full border border-border/25 bg-background/35 px-3 py-1 text-xs text-muted-foreground">
                          {categoryCompletedCount}/{category.items.length}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {categoryItems.map(({ item, globalIndex: gi }) => {
                          const isExpanded = expandedItem === gi;
                          const CritIcon = criticalityIcon[item.criticality];

                          return (
                            <div
                              key={gi}
                              className={`overflow-hidden rounded-xl border border-border/25 bg-background/30 transition-opacity duration-300 ${
                                checked[gi] ? "opacity-60" : ""
                              }`}
                            >
                              <div className="flex items-start gap-3 p-4">
                                <button
                                  onClick={() => toggle(gi)}
                                  className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border transition-colors ${
                                    checked[gi]
                                      ? "border-foreground bg-foreground"
                                      : "border-border hover:border-foreground/40"
                                  }`}
                                  aria-label={getText(language, "Marcar item", "Check item")}
                                >
                                  {checked[gi] && <Check className="h-3 w-3 text-background" />}
                                </button>
                                <button
                                  onClick={() => toggle(gi)}
                                  className={`flex-1 text-left text-sm leading-relaxed transition-all ${
                                    checked[gi] ? "line-through text-muted-foreground" : "text-foreground"
                                  }`}
                                >
                                  {item.text[language]}
                                </button>
                                <button
                                  onClick={() => setExpandedItem(isExpanded ? null : gi)}
                                  className="flex-shrink-0 p-1 text-muted-foreground transition-colors hover:text-foreground"
                                  aria-label={getText(language, "Detalhes", "Details")}
                                >
                                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                                </button>
                              </div>

                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.24 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="ml-10 space-y-3 border-t border-border/25 px-4 pb-4 pt-4">
                                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <CritIcon className="h-3.5 w-3.5" />
                                        <span>
                                          {item.criticality === 'critical' && getText(language, 'Crítico', 'Critical')}
                                          {item.criticality === 'important' && getText(language, 'Importante', 'Important')}
                                          {item.criticality === 'complementary' && getText(language, 'Complementar', 'Complementary')}
                                        </span>
                                      </div>
                                      <p className="text-sm leading-relaxed text-muted-foreground">
                                        {item.description[language]}
                                      </p>
                                      <p className="text-xs leading-relaxed text-muted-foreground/80">
                                        <span className="font-medium text-muted-foreground">
                                          {getText(language, "Risco:", "Risk:")}
                                        </span>{" "}
                                        {item.risk[language]}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </IdentityPanel>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChecklistDetail;
