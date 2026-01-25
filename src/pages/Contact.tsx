import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import ContactForm from "@/components/ui/ContactForm";
import SocialIcons from "@/components/ui/SocialIcons";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";
import { Mail, Phone, MapPin, ArrowUpRight, Send, MessageSquare, Clock, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      link: "https://wa.me/5581993964261",
      note: getText(language, 'Apenas mensagens, não atendo ligações', 'Messages only, no calls')
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: "Recife, Pernambuco, Brasil",
      link: null
    }
  ];

  const availabilityItems = [
    { label: getText(language, 'Segunda - Sexta', 'Monday - Friday'), value: '09:00 - 18:00' },
    { label: getText(language, 'Sábado', 'Saturday'), value: '10:00 - 14:00' },
    { label: getText(language, 'Domingo', 'Sunday'), value: getText(language, 'Fechado', 'Closed') }
  ];

  const faqItems = language === 'pt' ? [
    {
      question: "Quanto tempo leva para desenvolver um projeto?",
      answer: "O prazo varia conforme a complexidade. Um site institucional pode levar de 2 a 4 semanas. Sistemas mais complexos, como plataformas ou aplicativos, podem levar de 2 a 6 meses. Sempre defino prazos realistas após entender bem o escopo."
    },
    {
      question: "Qual o valor de um projeto?",
      answer: "Cada projeto é único. O investimento depende da complexidade, funcionalidades e prazo. Após nossa conversa inicial, envio uma proposta detalhada com escopo, cronograma e valores. Trabalho com projetos a partir de R$ 3.000."
    },
    {
      question: "Como funciona o processo de trabalho?",
      answer: "Começo com uma reunião de briefing para entender suas necessidades. Depois, apresento uma proposta com escopo e cronograma. Após aprovação, inicio o desenvolvimento com entregas parciais para validação. Ao final, faço a entrega com treinamento e suporte."
    },
    {
      question: "Você oferece suporte após a entrega?",
      answer: "Sim! Ofereço 30 dias de suporte gratuito para ajustes após a entrega. Também disponibilizo planos de manutenção mensal para atualizações, correções e melhorias contínuas."
    },
    {
      question: "Trabalha com projetos fora do Brasil?",
      answer: "Sim, atendo clientes de qualquer lugar do mundo. A comunicação pode ser em português ou inglês, e os pagamentos podem ser feitos via transferência internacional ou PayPal."
    },
    {
      question: "Quais tecnologias você utiliza?",
      answer: "Trabalho principalmente com React, TypeScript, Node.js, Python, PostgreSQL e serviços cloud como AWS e Vercel. Escolho a stack mais adequada para cada projeto, priorizando performance e escalabilidade."
    }
  ] : [
    {
      question: "How long does it take to develop a project?",
      answer: "The timeline varies by complexity. An institutional website can take 2-4 weeks. More complex systems like platforms or apps can take 2-6 months. I always set realistic deadlines after fully understanding the scope."
    },
    {
      question: "What is the cost of a project?",
      answer: "Each project is unique. The investment depends on complexity, features, and timeline. After our initial conversation, I send a detailed proposal with scope, schedule, and pricing. I work on projects starting from $600."
    },
    {
      question: "How does your work process function?",
      answer: "I start with a briefing meeting to understand your needs. Then, I present a proposal with scope and timeline. After approval, I begin development with partial deliveries for validation. Finally, I deliver with training and support."
    },
    {
      question: "Do you offer support after delivery?",
      answer: "Yes! I offer 30 days of free support for adjustments after delivery. I also provide monthly maintenance plans for updates, fixes, and continuous improvements."
    },
    {
      question: "Do you work with clients outside Brazil?",
      answer: "Yes, I serve clients from anywhere in the world. Communication can be in Portuguese or English, and payments can be made via international transfer or PayPal."
    },
    {
      question: "What technologies do you use?",
      answer: "I mainly work with React, TypeScript, Node.js, Python, PostgreSQL, and cloud services like AWS and Vercel. I choose the most suitable stack for each project, prioritizing performance and scalability."
    }
  ];

  return (
    <Layout withPadding={false}>
      <SEO 
        title="Contato | Fale com Talisson Souza"
        description="Entre em contato para discutir seu projeto. Desenvolvimento web, sistemas sob medida, consultoria tecnológica. Resposta rápida via WhatsApp ou email."
        canonical="/contato"
        keywords={['contato', 'orçamento', 'projeto', 'WhatsApp', 'email']}
      />
      
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden pt-24 pb-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
          <div 
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div 
          className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)'
          }}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-20">
          <ScrollReveal>
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, 'Contato', 'Contact')}
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-6">
                {getText(language, 'Vamos Conversar', "Let's Talk")}
              </AnimatedTitle>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {t.contact.subtitle}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.1}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
                >
                  {getText(language, 'Informações', 'Information')}
                </motion.span>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-[1.05]">
                  {t.contact.info}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
                  {getText(language, 
                    'Escolha o canal mais conveniente para você.',
                    'Choose the most convenient channel for you.'
                  )}
                </p>
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
                          <div 
                            className="relative p-5 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm transition-all duration-300 group-hover:border-foreground/10"
                            style={{
                              boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                            }}
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-300">
                                <item.icon className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors duration-300" />
                              </div>
                              <div className="flex-1">
                                <p className="text-xs text-muted-foreground/70 mb-0.5">{item.label}</p>
                                <p className="text-foreground font-medium text-sm">{item.value}</p>
                                {item.note && (
                                  <p className="text-[10px] text-muted-foreground/50 mt-1 italic">{item.note}</p>
                                )}
                              </div>
                              <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground/70 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                          </div>
                        </a>
                      ) : (
                        <div 
                          className="relative p-5 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                          style={{
                            boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                          }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                              <item.icon className="w-5 h-5 text-foreground/70" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-muted-foreground/70 mb-0.5">{item.label}</p>
                              <p className="text-foreground font-medium text-sm">{item.value}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
              
              {/* Availability */}
              <ScrollReveal delay={0.3}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="relative p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                        <Clock className="w-4 h-4 text-foreground/70" />
                      </div>
                      <h3 className="font-serif text-base text-foreground">
                        {getText(language, 'Disponibilidade', 'Availability')}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {availabilityItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{item.label}</span>
                          <span className="text-foreground font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>

              {/* Social Icons */}
              <ScrollReveal delay={0.4}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="relative p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <h3 className="font-serif text-base text-foreground mb-4">
                      {t.contact.social}
                    </h3>
                    <SocialIcons className="flex flex-wrap gap-3" />
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.2} direction="right">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                >
                  <div 
                    className="relative p-8 lg:p-10 rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{
                      boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                    }}
                  >
                    <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-foreground/[0.06] rounded-tl-3xl" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-foreground/[0.06] rounded-br-3xl" />
                    
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                        <Send className="w-5 h-5 text-foreground/70" />
                      </div>
                      <div>
                        <h2 className="font-serif text-xl text-foreground">
                          {getText(language, 'Enviar mensagem', 'Send message')}
                        </h2>
                        <p className="text-xs text-muted-foreground/70">
                          {getText(language, 'Resposta em até 24h', 'Response within 24h')}
                        </p>
                      </div>
                    </div>
                    <ContactForm />
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* FAQ Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-foreground/[0.015] to-transparent blur-3xl hidden md:block" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* FAQ Header */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
                >
                  FAQ
                </motion.span>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6 leading-[1.05]">
                  {getText(language, 'Perguntas Frequentes', 'Frequently Asked Questions')}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                  {getText(language, 
                    'Respostas rápidas para dúvidas comuns sobre meus serviços e processo de trabalho.',
                    'Quick answers to common questions about my services and work process.'
                  )}
                </p>
                
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8"
                >
                  <div 
                    className="relative p-5 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm inline-flex items-center gap-3"
                    style={{
                      boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)'
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 text-foreground/70" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {getText(language, 'Não encontrou sua dúvida?', "Didn't find your question?")}
                      <br />
                      <a href="#form" className="text-foreground hover:opacity-70 transition-opacity">
                        {getText(language, 'Entre em contato', 'Get in touch')}
                      </a>
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
            
            {/* FAQ Accordion */}
            <div className="lg:col-span-8">
              <ScrollReveal delay={0.2} direction="right">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                >
                  <div 
                    className="relative p-8 lg:p-10 rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{
                      boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                    }}
                  >
                    <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-foreground/[0.06] rounded-tl-3xl" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-foreground/[0.06] rounded-br-3xl" />
                    
                    <Accordion type="single" collapsible className="w-full">
                      {faqItems.map((item, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${index}`}
                          className="border-b border-border/30 last:border-b-0"
                        >
                          <AccordionTrigger className="text-left py-5 text-foreground hover:no-underline hover:opacity-70 transition-opacity duration-200 text-sm font-medium gap-4">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="pb-5 text-sm text-muted-foreground leading-relaxed">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <ParallaxSection 
        className="py-20 lg:py-24"
        speed={0.12}
        backgroundElement={
          <>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl" />
          </>
        }
      >
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
                
                <div className="w-14 h-14 rounded-2xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-7 h-7 text-foreground/70" />
                </div>
                
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
                  {getText(language, 'Prefere uma conversa rápida?', 'Prefer a quick chat?')}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {getText(language, 
                    'Entre em contato pelo WhatsApp para uma resposta mais ágil.',
                    'Contact me via WhatsApp for a faster response.'
                  )}
                </p>
                
                <motion.a 
                  href="https://wa.me/5581993964261" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                  style={{
                    boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                  }}
                >
                  {getText(language, 'Chamar no WhatsApp', 'Message on WhatsApp')}
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default Contact;
