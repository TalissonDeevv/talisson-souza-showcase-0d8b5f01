import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import ContactForm from "@/components/ui/ContactForm";
import SocialIcons from "@/components/ui/SocialIcons";
import GlassCard from "@/components/ui/GlassCard";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import { Mail, Phone, MapPin, Calendar, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "talinhodev@gmail.com",
      link: "mailto:talinhodev@gmail.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+55 (81) 9 93964261",
      link: "https://wa.me/5581993964261"
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: "Recife, Pernambuco - Brasil",
      link: null
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <ParallaxSection 
        className="pt-24 pb-10 lg:pt-28 lg:pb-12"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                <span className="w-8 h-px bg-foreground/30" />
                {getText(language, 'Contato', 'Contact')}
              </motion.span>
              <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-[1.1]">
                {t.contact.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t.contact.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Recess Notice Banner */}
      <section className="pb-8 relative">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div 
                className="relative rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden"
                style={{
                  boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                }}
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-foreground/20" />
                
                <div className="p-6 pl-7 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-foreground/70" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-foreground text-sm font-medium leading-relaxed">
                      {getText(language,
                        "Em recesso até 15/01/2026 — respostas podem ter atraso.",
                        "On recess until Jan 15, 2026 — responses may be delayed."
                      )}
                    </p>
                    <p className="text-muted-foreground/70 text-xs mt-1">
                      {getText(language, "Agradeço pela compreensão.", "Thank you for your understanding.")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <ScrollReveal>
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-8">
                  {t.contact.info}
                </h2>
              </ScrollReveal>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <motion.div
                      whileHover={{ y: -4, x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          <GlassCard className="p-5" hover={false} glow={true}>
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-300">
                                <item.icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm text-muted-foreground/70">{item.label}</p>
                                <p className="text-foreground font-medium">{item.value}</p>
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                          </GlassCard>
                        </a>
                      ) : (
                        <GlassCard className="p-5" hover={false} glow={false}>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                              <item.icon className="w-5 h-5 text-foreground/70" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm text-muted-foreground/70">{item.label}</p>
                              <p className="text-foreground font-medium">{item.value}</p>
                            </div>
                          </div>
                        </GlassCard>
                      )}
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
              
              {/* Social Icons */}
              <ScrollReveal delay={0.3}>
                <div className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-6">
                  <h3 className="text-sm font-medium text-foreground mb-4">
                    {t.contact.social}
                  </h3>
                  <SocialIcons className="flex flex-wrap gap-3" />
                </div>
              </ScrollReveal>
            </div>
            
            {/* Contact Form */}
            <ScrollReveal delay={0.2} direction="right">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm p-8"
                  style={{
                    boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                  }}
                >
                  <ContactForm />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div 
                className="relative p-10 lg:p-12 rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm text-center"
                style={{
                  boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                }}
              >
                <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-foreground/[0.06] rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-foreground/[0.06] rounded-br-3xl" />
                
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
                  {getText(language, 'Prefere uma conversa rápida?', 'Prefer a quick chat?')}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {getText(language, 
                    'Entre em contato pelo WhatsApp para uma resposta mais ágil.',
                    'Contact me via WhatsApp for a faster response.'
                  )}
                </p>
                
                <a 
                  href="https://wa.me/5581993964261" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300 hover:opacity-90"
                  style={{
                    boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                  }}
                >
                  {getText(language, 'Chamar no WhatsApp', 'Message on WhatsApp')}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
