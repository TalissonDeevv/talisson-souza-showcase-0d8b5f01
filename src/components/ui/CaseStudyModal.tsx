import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle, Target, Lightbulb, TrendingUp } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

interface CaseStudy {
  context: string;
  problem: string;
  solution: string;
  results: string[];
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
    caseStudy?: CaseStudy;
  } | null;
}

const CaseStudyModal = ({ isOpen, onClose, project }: CaseStudyModalProps) => {
  const { language } = useTheme();

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden rounded-2xl border border-border/20 bg-card/95 backdrop-blur-xl"
            style={{
              boxShadow: '0 25px 50px -12px hsl(var(--foreground) / 0.15)'
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/20 hover:bg-foreground/10 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Content */}
            <div className="h-full overflow-y-auto">
              {/* Hero Image */}
              <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md border border-border/30 bg-background/50 backdrop-blur-sm text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 lg:p-10">
                <p className="text-base text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                {project.caseStudy ? (
                  <div className="space-y-8">
                    {/* Context */}
                    <div className="p-6 rounded-xl border border-border/20 bg-foreground/[0.02]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl border border-border/30 bg-card flex items-center justify-center">
                          <Target className="w-5 h-5 text-foreground/60" />
                        </div>
                        <h3 className="font-serif text-lg text-foreground">
                          {getText(language, 'Contexto', 'Context')}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.caseStudy.context}
                      </p>
                    </div>

                    {/* Problem */}
                    <div className="p-6 rounded-xl border border-border/20 bg-foreground/[0.02]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl border border-amber-500/30 bg-amber-500/10 flex items-center justify-center">
                          <Lightbulb className="w-5 h-5 text-amber-500/70" />
                        </div>
                        <h3 className="font-serif text-lg text-foreground">
                          {getText(language, 'Problema', 'Problem')}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.caseStudy.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="p-6 rounded-xl border border-border/20 bg-foreground/[0.02]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl border border-green-500/30 bg-green-500/10 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-green-500/70" />
                        </div>
                        <h3 className="font-serif text-lg text-foreground">
                          {getText(language, 'Solução', 'Solution')}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.caseStudy.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="p-6 rounded-xl border border-border/20 bg-foreground/[0.02]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl border border-border/30 bg-card flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-foreground/60" />
                        </div>
                        <h3 className="font-serif text-lg text-foreground">
                          {getText(language, 'Resultados', 'Results')}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {project.caseStudy.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500/70 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      {getText(language, 'Estudo de caso detalhado em breve.', 'Detailed case study coming soon.')}
                    </p>
                  </div>
                )}

                {/* CTA */}
                {project.link && (
                  <div className="mt-10 pt-8 border-t border-border/20">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-6 py-3 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                      style={{
                        boxShadow: '0 0 20px hsl(var(--foreground) / 0.15)'
                      }}
                    >
                      {getText(language, 'Ver projeto ao vivo', 'View live project')}
                      <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
