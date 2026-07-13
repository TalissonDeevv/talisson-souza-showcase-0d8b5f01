import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQCategory = {
  title: string;
  note: string;
  questions: { q: string; a: string }[];
};

const FAQ = () => {
  const { language } = useTheme();
  const contactPath = language === "en" ? "/en-us/contact" : "/contato";

  const categories: FAQCategory[] = language === "pt"
    ? [
        {
          title: "Perfil e trajetória",
          note: "Quem é Talisson antes do escopo.",
          questions: [
            {
              q: "Quem é Talisson Souza?",
              a: "Sou Engenheiro e Arquiteto de Software, fundador da Cheetah Solutions Network. Trabalho com sistemas, automações, integrações e soluções digitais para empresas que precisam crescer com estrutura e tecnologia construída para durar.",
            },
            {
              q: "Qual é sua formação?",
              a: "Minha base é autodidata, construída com prática real, documentação, projetos, erros e reconstruções. Também mantenho formação complementar em gestão, negócios e projetos, documentada na página de carreira.",
            },
            {
              q: "Por que você fala tanto sobre arquitetura?",
              a: "Porque código resolve o presente, mas arquitetura decide se o sistema continua saudável no futuro. Eu prefiro construir algo que possa ser mantido, entendido e evoluído depois da entrega.",
            },
          ],
        },
        {
          title: "Projetos e serviços",
          note: "Como uma demanda vira entrega.",
          questions: [
            {
              q: "Que tipo de projeto você desenvolve?",
              a: "Desenvolvo sistemas web, aplicações, bots, automações, integrações, infraestrutura, páginas estratégicas e soluções sob medida. O formato depende do problema, não de uma lista fixa de pacotes.",
            },
            {
              q: "Como você define escopo?",
              a: "Primeiro entendo contexto, operação, risco, usuários e objetivo. Depois organizo o que precisa existir, o que pode esperar e quais decisões técnicas sustentam a entrega.",
            },
            {
              q: "Você trabalha com estimativa pronta?",
              a: "Não trabalho com chute bonito. Cada previsão nasce depois de diagnóstico, levantamento de requisitos e definição de responsabilidade. Isso evita promessa frágil e protege os dois lados.",
            },
            {
              q: "Quando não vale a pena te contratar?",
              a: "Quando a prioridade é pressa sem qualidade, quando não existe disposição para alinhar escopo ou quando o projeto precisa parecer sofisticado mesmo sem resolver um problema real.",
            },
          ],
        },
        {
          title: "Processo e comunicação",
          note: "O ritmo de trabalho sem ruído.",
          questions: [
            {
              q: "Como começa o primeiro contato?",
    a: "Você envia o contexto do que está construindo, onde está travado e qual resultado precisa alcançar. A partir disso eu faço perguntas melhores e proponho o próximo passo.",
            },
            {
              q: "Você atende ligações?",
              a: "Não trabalho com ligação avulsa. Prefiro comunicação escrita para manter clareza e histórico. Reuniões por vídeo podem acontecer quando fizerem sentido para decisão ou alinhamento.",
            },
            {
              q: "Você trabalha sozinho ou com equipe?",
              a: "Depende do escopo. Projetos menores podem ser conduzidos diretamente por mim. Projetos maiores podem envolver profissionais de confiança sob direção técnica e padrão de qualidade da Cheetah.",
            },
            {
              q: "Existe suporte depois da entrega?",
              a: "Sim, quando isso faz parte do acordo. Projetos sérios precisam de transição, documentação e acompanhamento proporcional ao impacto da solução entregue.",
            },
          ],
        },
        {
          title: "Conteúdo, comunidade e livro",
          note: "O que existe além do cliente.",
          questions: [
            {
              q: "Os artigos são gratuitos?",
              a: "Sim. O conteúdo publicado no site é gratuito e organizado por trilhas para facilitar estudo, consulta e evolução técnica.",
            },
            {
              q: "Você mantém comunidade?",
              a: "Sim. O Discord funciona como espaço de troca, aprendizado e convivência para pessoas interessadas em tecnologia, carreira e construção digital.",
            },
            {
              q: "Sobre o que é o livro Superando Limites?",
              a: "É um livro sobre rejeição, perseverança, empreendedorismo e construção de caminho próprio. Ele reúne parte da minha trajetória e das experiências que moldaram minha forma de pensar.",
            },
          ],
        },
      ]
    : [
        {
          title: "Profile and journey",
          note: "Who Talisson is before the scope.",
          questions: [
            { q: "Who is Talisson Souza?", a: "I am a Software Engineer and Software Architect, founder of Cheetah Solutions Network, working on systems, automations, integrations and digital solutions built to last." },
            { q: "What is your background?", a: "My base is self-taught, built through practice, documentation, real projects, mistakes and rebuilds. I also keep complementary education in business and project management." },
            { q: "Why do you talk so much about architecture?", a: "Because code solves the present, but architecture decides whether the system remains healthy in the future." },
          ],
        },
        {
          title: "Projects and services",
          note: "How a demand becomes delivery.",
          questions: [
            { q: "What kind of projects do you build?", a: "Web systems, applications, bots, automations, integrations, infrastructure, strategic pages and custom solutions. The format depends on the problem." },
            { q: "How do you define scope?", a: "First I understand context, operation, risk, users and goal. Then I organize what needs to exist, what can wait and which technical decisions support the delivery." },
            { q: "Do you work with ready-made estimates?", a: "No. Every forecast comes after diagnosis, requirements and responsibility definition." },
            { q: "When is it not worth hiring you?", a: "When speed matters more than quality, when there is no willingness to align scope, or when the project needs to look sophisticated without solving a real problem." },
          ],
        },
        {
          title: "Process and communication",
          note: "Work rhythm without noise.",
          questions: [
            { q: "How does first contact start?", a: "You send context with what you are building, where you are stuck and what outcome you need. From there I ask better questions and propose a next step." },
            { q: "Do you take phone calls?", a: "I do not work with loose phone calls. I prefer written communication for clarity and history. Video meetings can happen when needed for decisions." },
            { q: "Do you work alone or with a team?", a: "It depends on scope. Smaller projects can be led directly by me. Larger projects may involve trusted professionals under Cheetah's technical direction." },
            { q: "Is there support after delivery?", a: "Yes, when it is part of the agreement. Serious projects need transition, documentation and follow-up proportional to impact." },
          ],
        },
        {
          title: "Content, community and book",
          note: "What exists beyond client work.",
          questions: [
            { q: "Are the articles free?", a: "Yes. The site content is free and organized into trails for easier study and consultation." },
            { q: "Do you maintain a community?", a: "Yes. Discord is a space for exchange, learning and connection around technology, career and digital building." },
            { q: "What is Superando Limites about?", a: "It is a book about rejection, perseverance, entrepreneurship and building your own path." },
          ],
        },
      ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((category) =>
      category.questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Perguntas Frequentes | Talisson Souza", "Frequently Asked Questions | Talisson Souza")}
        description={getText(
          language,
          "Respostas objetivas sobre Talisson Souza, serviços, processo, comunicação, conteúdo, comunidade e livro.",
          "Objective answers about Talisson Souza, services, process, communication, content, community and book."
        )}
        canonical={language === "en" ? "/en-us/faq" : "/faq"}
        keywords={language === "pt" ? ["FAQ", "perguntas frequentes", "Talisson Souza", "serviços", "processo"] : ["FAQ", "frequently asked questions", "Talisson Souza", "services", "process"]}
        jsonLd={faqJsonLd}
      />

      <PageHero
        compact
        eyebrow="FAQ"
        title={getText(language, "Perguntas frequentes", "Frequently asked questions")}
        subtitle={getText(
          language,
          "Uma página para resolver dúvidas sem transformar informação simples em labirinto.",
          "A page to answer questions without turning simple information into a maze."
        )}
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: categories.length, label: getText(language, "contextos", "contexts") },
              { value: categories.reduce((sum, item) => sum + item.questions.length, 0), label: getText(language, "respostas", "answers") },
              { value: "24h", label: getText(language, "retorno", "reply") },
            ]}
          />
        }
      />


      <section className="relative overflow-hidden py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <ScrollReveal>
              <aside className="sticky top-28">
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Mapa de respostas", "Answer map")}
                </span>
                <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {getText(language, "Encontre pelo contexto.", "Find it by context.")}
                </h2>
                <div className="mt-8 divide-y divide-border/20 border-y border-border/20">
                  {categories.map((category, index) => (
                    <a key={category.title} href={`#faq-${index}`} className="group grid grid-cols-[48px_1fr] gap-4 py-4">
                      <span className="font-serif text-2xl leading-none text-foreground/18 transition-colors group-hover:text-foreground/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-foreground">{category.title}</span>
                        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground/55">{category.note}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </aside>
            </ScrollReveal>

            <div className="space-y-12">
              {categories.map((category, catIndex) => (
                <ScrollReveal key={category.title} delay={catIndex * 0.05}>
                  <section id={`faq-${catIndex}`} className="scroll-mt-28">
                    <div className="mb-5 flex items-end justify-between gap-5 border-b border-border/20 pb-5">
                      <div>
                        <span className="mb-3 block font-serif text-5xl leading-none text-foreground/12">
                          {String(catIndex + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-serif text-2xl leading-tight text-foreground lg:text-3xl">{category.title}</h2>
                      </div>
                      <HelpCircle className="hidden h-5 w-5 text-foreground/35 sm:block" />
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, qIndex) => (
                        <AccordionItem key={item.q} value={`cat-${catIndex}-q-${qIndex}`} className="border-b border-border/20 last:border-b-0">
                          <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground transition-opacity duration-200 hover:no-underline hover:opacity-75">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="pb-5">
                            <p className="max-w-3xl text-sm leading-[1.9] text-muted-foreground">{item.a}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </section>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-8 border-y border-border/20 py-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Próximo passo", "Next step")}
                </span>
                <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {getText(language, "Não encontrou sua dúvida?", "Didn't find your question?")}
                </h2>
              </div>
              <div>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {getText(
                    language,
                    "Entre em contato com contexto. Uma boa resposta começa quando eu entendo o que você está tentando construir, resolver ou decidir.",
                    "Get in touch with context. A good answer starts when I understand what you are trying to build, solve or decide."
                  )}
                </p>
                <Link to={contactPath}>
                  <motion.span
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group mt-7 inline-flex items-center gap-3 rounded-full border border-border/35 bg-background/30 px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
                  >
                    {getText(language, "Entrar em contato", "Get in touch")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
