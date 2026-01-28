import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Lightbulb, Code, Database, Zap, Shield, Settings } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

interface TechnicalDecision {
  icon: React.ReactNode;
  title: string;
  description: string;
  reasoning: string;
}

interface ProjectBehindTheScenesProps {
  decisions: TechnicalDecision[];
  className?: string;
}

const ProjectBehindTheScenes = ({ decisions, className = "" }: ProjectBehindTheScenesProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useTheme();

  return (
    <div className={`border-t border-border/30 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 px-1 text-left group"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg border border-border/30 bg-card/50 flex items-center justify-center">
            <Settings className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
          <div>
            <span className="text-sm font-medium text-foreground group-hover:text-foreground/80 transition-colors">
              {getText(language, 'Bastidores do Projeto', 'Behind the Scenes')}
            </span>
            <p className="text-xs text-muted-foreground">
              {getText(language, 'Decisões técnicas e trade-offs', 'Technical decisions and trade-offs')}
            </p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 space-y-4">
              {decisions.map((decision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 rounded-xl border border-border/20 bg-card/30"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg border border-border/30 bg-background/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {decision.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground mb-1">
                        {decision.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {decision.description}
                      </p>
                      <div className="p-3 rounded-lg bg-background/50 border border-border/20">
                        <p className="text-xs text-muted-foreground/80 leading-relaxed">
                          <span className="text-foreground/70 font-medium">
                            {getText(language, 'Por que:', 'Why:')}
                          </span>{" "}
                          {decision.reasoning}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectBehindTheScenes;

// Helper function to get icons
export const getDecisionIcon = (type: string) => {
  const iconClass = "w-4 h-4 text-muted-foreground";
  switch (type) {
    case "architecture":
      return <Code className={iconClass} />;
    case "database":
      return <Database className={iconClass} />;
    case "performance":
      return <Zap className={iconClass} />;
    case "security":
      return <Shield className={iconClass} />;
    case "idea":
      return <Lightbulb className={iconClass} />;
    default:
      return <Settings className={iconClass} />;
  }
};
