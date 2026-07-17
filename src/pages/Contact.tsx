import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, MessageCircle, Send, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/ui/ContactForm";
import SocialIcons from "@/components/ui/SocialIcons";
import { IdentityPanel, PageBackdrop } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const Contact = () => {
  const { language } = useTheme();

  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (81) 9 9396-4261",
      href: "https://wa.me/5581993964261",
    },
    {
      icon: Mail,
      label: "Email",
      value: "talinhodev@gmail.com",
      href: "mailto:talinhodev@gmail.com",
    },
    {
      icon: Users,
      label: "Discord",
      value: getText(language, "Comunidade", "Community"),
      href: "https://discord.com/invite/WXwguHWjxg",
    },
  ];

  const contextItems = [
    getText(language, "O que voce quer construir.", "What you want to build."),
    getText(language, "Onde a operacao trava hoje.", "Where the operation gets stuck today."),
    getText(language, "Qual resultado precisa ficar claro.", "Which result needs to be clear."),
  ];

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Talisson Souza | Cheetah Solutions Network",
    image: "https://www.talissonsouza.com.br/og/contato.png",
    email: "talinhodev@gmail.com",
    telephone: "+5581993964261",
    url: "https://www.talissonsouza.com.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Recife",
      addressRegion: "PE",
      addressCountry: "BR",
    },
  };

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Contato | Talisson Souza", "Contact | Talisson Souza")}
        description={getText(
          language,
          "Fale com Talisson Souza para projetos, sistemas, automacoes e consultoria tecnica.",
          "Talk to Talisson Souza about projects, systems, automations and technical consulting."
        )}
        canonical={language === "en" ? "/en-us/contact" : "/contato"}
        keywords={
          language === "pt"
            ? ["contato", "projeto", "sistemas", "automacoes", "consultoria tecnica"]
            : ["contact", "project", "systems", "automations", "technical consulting"]
        }
        jsonLd={localBusinessJsonLd}
      />

      <section className="relative overflow-x-hidden overflow-y-visible pt-28 pb-16 lg:pt-32 lg:pb-24">
        <PageBackdrop />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <ScrollReveal>
                <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-muted-foreground/65">
                  {getText(language, "Contato", "Contact")}
                </span>
                <h1 className="mt-7 max-w-full text-balance break-words font-serif text-[clamp(2.5rem,12vw,4rem)] font-semibold leading-[0.98] tracking-normal text-foreground [overflow-wrap:anywhere] sm:text-6xl sm:tracking-[-0.02em] lg:text-7xl">
                  {getText(language, "Vamos conversar com contexto.", "Let's talk with context.")}
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    "Me envie o essencial. Eu entendo o problema, organizo o proximo passo e respondo com uma direcao clara.",
                    "Send me the essentials. I understand the problem, organize the next step and reply with a clear direction."
                  )}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {channels.map((channel) => (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-3xl border border-border/25 bg-background/25 p-4 transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <channel.icon className="h-5 w-5 text-foreground/70" />
                        <ArrowUpRight className="h-4 w-4 text-foreground/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground/70" />
                      </div>
                      <p className="mt-5 text-xs uppercase tracking-[0.18em] text-muted-foreground/55">
                        {channel.label}
                      </p>
                      <p className="mt-1 truncate text-sm font-medium text-foreground">{channel.value}</p>
                    </a>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.18}>
                <div className="mt-10 border-t border-border/25 pt-7">
                  <p className="mb-4 text-center text-[11px] uppercase tracking-[0.24em] text-muted-foreground/55">
                    {getText(language, "redes", "social")}
                  </p>
                  <SocialIcons centered showLabels={false} className="w-full" />
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.12} direction="right">
              <IdentityPanel hover={false} className="p-5 sm:p-7 lg:p-8">
                <div className="mb-8 flex flex-col gap-6 border-b border-border/20 pb-7 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/55">
                      {getText(language, "Mensagem", "Message")}
                    </span>
                    <h2 className="mt-3 font-serif text-3xl text-foreground">
                      {getText(language, "Comece pelo problema.", "Start with the problem.")}
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border/30 bg-foreground text-background">
                    <Send className="h-5 w-5" />
                  </div>
                </div>

                <div className="mb-8 grid gap-3 sm:grid-cols-3">
                  {contextItems.map((item, index) => (
                    <div key={item} className="rounded-2xl border border-border/20 bg-background/25 p-4">
                      <span className="font-serif text-2xl text-foreground/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item}</p>
                    </div>
                  ))}
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
