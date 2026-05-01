import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { ArrowLeft, Mail, Lock } from "lucide-react";
import organizingImage from "@/assets/organizing-projects.png";

const Projects = () => {
  const { language } = useTheme();

  const homePath = language === 'en' ? '/en-us' : '/';
  const contactPath = language === 'en' ? '/en-us/contact' : '/contato';

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, 'Projetos em Organização | Talisson Souza', 'Projects Being Organized | Talisson Souza')}
        description={getText(
          language,
          'A página de projetos está temporariamente indisponível enquanto solicito autorização dos clientes para divulgação dos trabalhos realizados.',
          'The projects page is temporarily unavailable while I request client authorization to publish the work delivered.'
        )}
        canonical={language === 'en' ? '/en-us/projects' : '/projetos'}
        noindex
      />

      <section className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium">
                <Lock className="w-3 h-3" />
                {getText(language, 'Acesso Restrito', 'Restricted Access')}
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.05]">
                {getText(language, 'Projetos em Organização', 'Projects Being Organized')}
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-6">
                {getText(
                  language,
                  'Esta página está temporariamente indisponível. Estou organizando o portfólio e solicitando autorização formal de cada cliente antes de divulgar os projetos realizados.',
                  'This page is temporarily unavailable. I am organizing the portfolio and requesting formal authorization from each client before publishing the projects delivered.'
                )}
              </p>

              <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-md mb-10">
                {getText(
                  language,
                  'A confidencialidade e o respeito ao acordo com cada cliente vêm em primeiro lugar. Em breve, novos cases estarão disponíveis aqui.',
                  'Confidentiality and respect for each client agreement come first. New case studies will soon be available here.'
                )}
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link
                  to={homePath}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                  style={{ boxShadow: '0 0 30px hsl(var(--foreground) / 0.15)' }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  {getText(language, 'Voltar para a Home', 'Back to Home')}
                </Link>

                <Link
                  to={contactPath}
                  className="group inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium text-foreground border border-border/30 bg-card/30 backdrop-blur-sm rounded-full transition-all duration-300 hover:border-foreground/20"
                >
                  <Mail className="w-4 h-4" />
                  {getText(language, 'Solicitar cases', 'Request cases')}
                </Link>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="order-1 lg:order-2 flex items-center justify-center"
            >
              <div className="relative w-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-radial from-foreground/[0.04] to-transparent blur-3xl scale-150 hidden md:block" />
                <img
                  src={organizingImage}
                  alt={getText(language, 'Projetos sendo organizados', 'Projects being organized')}
                  className="relative w-full max-w-lg mx-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
