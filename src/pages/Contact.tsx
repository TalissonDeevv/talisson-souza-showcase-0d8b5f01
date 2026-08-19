import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Send, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";
import SocialIcons from "@/components/ui/SocialIcons";
import { IdentityPanel, MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation, getText } from "@/utils/translations";

const Contact = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "talinhodev@gmail.com",
      link: "mailto:talinhodev@gmail.com",
      note: getText(language, "Bom para escopo, documentos e contexto.", "Best for scope, documents and context."),
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (81) 9 9396-4261",
      link: "https://wa.me/5581993964261",
      note: getText(language, "Apenas mensagens, não atendo ligações.", "Messages only, no calls."),
    },
    {
      icon: Users,
      label: getText(language, "Servidor Discord", "Discord Server"),
      value: getText(language, "Comunidade de tecnologia", "Tech community"),
      link: "https://discord.com/invite/WXwguHWjxg",
      note: getText(language, "Para acompanhar conteúdo e comunidade.", "For content and community."),
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: "Recife, Pernambuco, Brasil",
      link: null,
      note: getText(language, "Atendimento remoto para projetos digitais.", "Remote work for digital projects."),
    },
  ];

  const availabilityItems = [
    { label: getText(language, "Segunda - Sexta", "Monday - Friday"), value: "09:00 - 18:00" },
    { label: getText(language, "Sábado", "Saturday"), value: "10:00 - 14:00" },
    { label: getText(language, "Domingo", "Sunday"), value: getText(language, "Fechado", "Closed") },
  ];

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Talisson Souza | Cheetah Solutions Network",
    image: "https://www.talissonsouza.com.br/og-image.png",
    email: "talinhodev@gmail.com",
    telephone: "+5581993964261",
    url: "https://www.talissonsouza.com.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "14:00" },
    ],
  };

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Contato | Fale com Talisson Souza", "Contact | Talk to Talisson Souza")}
        description={getText(
          language,
          "Entre em contato para discutir seu projeto. Desenvolvimento web, sistemas sob medida, consultoria tecnológica e soluções digitais com resposta via WhatsApp ou email.",
          "Get in touch to discuss your project. Web development, custom systems, technology consulting and digital solutions with response via WhatsApp or email."
        )}
        canonical={language === "en" ? "/en-us/contact" : "/contato"}
        keywords={language === "pt" ? ["contato", "projeto", "diagnóstico técnico", "WhatsApp", "email"] : ["contact", "project", "technical diagnosis", "WhatsApp", "email"]}
        jsonLd={localBusinessJsonLd}
      />

      <PageHero
        compact
        eyebrow={getText(language, "Contato", "Contact")}
        title={getText(language, "Vamos Conversar", "Let's Talk")}
        subtitle={getText(
          language,
          "Conte o que você está construindo, onde está travado e qual resultado precisa alcançar. A conversa começa com contexto, não com chute.",
          "Tell me what you're building, where you're stuck and what result you need to reach. The conversation starts with context, not guesswork."
        )}
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: "24h", label: getText(language, "resposta média", "average response") },
              { value: "04", label: getText(language, "canais", "channels") },
              { value: "PE", label: getText(language, "base", "base") },
            ]}
          />
        }
      >
        <IdentityPanel hover={false} className="p-6">
          <div className="mb-8 flex items-center justify-between">
            <Send className="h-6 w-6 text-foreground/70" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
              {getText(language, "roteiro inicial", "first pass")}
            </span>
          </div>
          <div className="space-y-4">
            {[
              getText(language, "O que precisa existir", "What needs to exist"),
              getText(language, "Quem vai usar", "Who will use it"),
              getText(language, "O que não pode falhar", "What cannot fail"),
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.16 + index * 0.08 }}
                className="flex items-center gap-3 rounded-xl border border-border/20 bg-background/35 px-4 py-3"
              >
                <span className="font-serif text-xl leading-none text-foreground/25">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm text-foreground/80">{item}</span>
              </motion.div>
            ))}
          </div>
        </IdentityPanel>
      </PageHero>

      <section className="pb-20 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <ScrollReveal>
                <div>
                  <span className="mb-4 inline-block text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/70">
                    {getText(language, "canais", "channels")}
                  </span>
                  <h2 className="font-serif text-3xl leading-tight text-foreground">
                    {getText(language, "Escolha o canal certo para o contexto.", "Choose the right channel for the context.")}
                  </h2>
                </div>
              </ScrollReveal>

              <div className="grid gap-3">
                {contactInfo.map((item, index) => {
                  const card = (
                    <IdentityPanel className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/30 bg-background/40">
                          <item.icon className="h-5 w-5 text-foreground/70" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground/55">{item.label}</p>
                          <p className="mt-1 truncate text-sm font-medium text-foreground">{item.value}</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground/65">{item.note}</p>
                        </div>
                        {item.link && <ArrowUpRight className="mt-1 h-4 w-4 text-foreground/30 transition-colors group-hover:text-foreground" />}
                      </div>
                    </IdentityPanel>
                  );

                  return (
                    <ScrollReveal key={item.label} delay={index * 0.07}>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="group block">
                          {card}
                        </a>
                      ) : (
                        card
                      )}
                    </ScrollReveal>
                  );
                })}
              </div>

              <ScrollReveal delay={0.2}>
                <IdentityPanel hover={false} className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Clock className="h-5 w-5 text-foreground/60" />
                    <h3 className="font-serif text-xl text-foreground">{getText(language, "Disponibilidade", "Availability")}</h3>
                  </div>
                  <div className="space-y-3">
                    {availabilityItems.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium text-foreground">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 border-t border-border/20 pt-5">
                    <p className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground/55">{t.contact.social}</p>
                    <SocialIcons className="flex flex-wrap gap-3" />
                  </div>
                </IdentityPanel>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.12} direction="right">
              <IdentityPanel hover={false} className="p-6 lg:p-8">
                <div className="mb-8 flex items-center justify-between gap-6">
                  <div>
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
                      {getText(language, "mensagem estruturada", "structured message")}
                    </span>
                    <h2 className="font-serif text-2xl text-foreground">{getText(language, "Enviar mensagem", "Send message")}</h2>
                  </div>
                  <ArrowRight className="h-5 w-5 text-foreground/35" />
                </div>
                <ContactForm />
              </IdentityPanel>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
