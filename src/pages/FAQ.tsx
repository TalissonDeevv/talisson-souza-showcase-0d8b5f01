import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { ArrowRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQCategory {
  title: string;
  questions: { q: string; a: string }[];
}

const FAQ = () => {
  const { language } = useTheme();

  const categories: FAQCategory[] = language === 'pt' ? [
    {
      title: "Sobre mim e minha trajetória",
      questions: [
        {
          q: "Quem é Talisson Souza?",
          a: "Sou engenheiro de software e fundador da Cheetah Solutions Network. Trabalho com tecnologia há mais de 8 anos, desenvolvendo sistemas, automações e arquiteturas para empresas e projetos próprios. Também sou autor do livro 'Superando Limites' e diretor estratégico do Werneck Group."
        },
        {
          q: "Qual a sua formação?",
          a: "Minha formação é autodidata, construída ao longo de anos de prática, projetos reais e estudo constante. Acredito que o mercado de tecnologia valoriza resultado e competência acima de diplomas, e minha trajetória reflete isso."
        },
        {
          q: "Há quanto tempo você trabalha com tecnologia?",
          a: "Desde 2016. Comecei criando bots para Discord, evoluí para sistemas web completos, automações e consultoria. Cada ano acrescentou uma camada nova de experiência e maturidade técnica."
        },
        {
          q: "O que é a Cheetah Solutions Network?",
          a: "É a empresa que fundei para oferecer soluções digitais completas. Atuamos com desenvolvimento de sistemas sob medida, automações, consultoria técnica e arquitetura de software para empresas de diferentes portes."
        },
        {
          q: "Você trabalha sozinho ou com equipe?",
          a: "Depende do escopo. Para projetos menores, trabalho de forma independente. Para projetos maiores ou com prazos mais apertados, conto com uma rede de profissionais de confiança que atua comigo sob a estrutura da Cheetah Solutions."
        },
      ]
    },
    {
      title: "Serviços e projetos",
      questions: [
        {
          q: "Que tipo de projeto você desenvolve?",
          a: "Sites institucionais, landing pages, e-commerces, sistemas web completos, APIs, bots, automações e aplicações sob demanda. Sempre focando em qualidade, performance e escalabilidade."
        },
        {
          q: "Quais tecnologias você utiliza?",
          a: "Trabalho principalmente com React, TypeScript, Node.js, Python, PostgreSQL e serviços cloud como AWS e Vercel. A escolha da stack é feita caso a caso, priorizando o que melhor resolve o problema do cliente."
        },
        {
          q: "Você faz manutenção após a entrega?",
          a: "Sim. Ofereço 30 dias de suporte gratuito para ajustes após a entrega do projeto. Depois disso, disponibilizo planos de manutenção mensal para atualizações, correções e melhorias contínuas."
        },
        {
          q: "Aceita projetos de fora do Brasil?",
          a: "Sim. Atendo clientes de qualquer lugar do mundo. A comunicação pode ser em português ou inglês, e os pagamentos podem ser feitos via transferência internacional ou PayPal."
        },
        {
          q: "Quanto custa um projeto?",
          a: "Cada projeto é único. O investimento depende da complexidade, funcionalidades e prazo. Após uma conversa inicial para entender o escopo, envio uma proposta detalhada com cronograma e valores. Trabalho com projetos a partir de R$ 3.000."
        },
        {
          q: "Quanto tempo leva para desenvolver um projeto?",
          a: "Depende do escopo. Um site institucional pode levar de 2 a 4 semanas. Sistemas mais complexos, como plataformas ou aplicativos, podem levar de 2 a 6 meses. Sempre defino prazos realistas após entender bem a demanda."
        },
        {
          q: "Como funciona o processo de trabalho?",
          a: "Começo com uma reunião de briefing para entender suas necessidades. Depois, apresento uma proposta com escopo e cronograma. Após aprovação, inicio o desenvolvimento com entregas parciais para validação. No final, faço a entrega com treinamento e suporte."
        },
        {
          q: "Quando não vale a pena me contratar?",
          a: "Quando o projeto não tem escopo definido, quando a prioridade é preço e não qualidade, ou quando o prazo é irreal para o que se espera entregar. Prefiro ser transparente desde o início para evitar frustrações dos dois lados."
        },
      ]
    },
    {
      title: "Consultoria e mentoria",
      questions: [
        {
          q: "Você oferece consultoria técnica?",
          a: "Sim. Ofereço diagnósticos técnicos, análises de arquitetura, revisões de código e orientação estratégica para equipes e projetos. A consultoria pode ser pontual ou recorrente."
        },
        {
          q: "Faz mentoria para desenvolvedores?",
          a: "Não ofereço mentoria formal no momento, mas compartilho conhecimento de forma ativa através dos artigos, trilhas de conteúdo e da comunidade no Discord."
        },
        {
          q: "Posso contratar uma análise do meu projeto existente?",
          a: "Sim. Faço análises de projetos existentes identificando problemas de arquitetura, segurança, performance e escalabilidade. Entrego um relatório completo com recomendações práticas."
        },
      ]
    },
    {
      title: "Conteúdo e comunidade",
      questions: [
        {
          q: "O que são as trilhas de conteúdo?",
          a: "São caminhos organizados de aprendizado que criei para facilitar o estudo de temas específicos. Cada trilha reúne artigos relacionados em uma sequência lógica, cobrindo desde segurança digital até estratégia de carreira."
        },
        {
          q: "Você tem uma comunidade?",
          a: "Sim. Mantenho um servidor no Discord onde compartilho conhecimento, discuto tecnologia e conecto profissionais. É um espaço para troca genuína, sem promessas vazias."
        },
        {
          q: "Os artigos são gratuitos?",
          a: "Sim. Todo o conteúdo do site, incluindo artigos e trilhas, é gratuito e aberto. Acredito que conhecimento de qualidade deve ser acessível."
        },
        {
          q: "Sobre o que é o livro 'Superando Limites'?",
          a: "É um livro sobre resiliência, empreendedorismo e mentalidade. Em 121 capítulos, compartilho lições sobre como transformar rejeição e limitações em combustível para o sucesso. Está disponível na Amazon."
        },
      ]
    },
    {
      title: "Contato e disponibilidade",
      questions: [
        {
          q: "Qual a melhor forma de entrar em contato?",
          a: "Pelo formulário de contato do site ou pelo WhatsApp. Respondo todas as mensagens em até 24 horas úteis."
        },
        {
          q: "Qual seu horário de disponibilidade?",
          a: "De segunda a sexta, das 09h às 18h. Aos sábados, das 10h às 14h. Domingos e feriados não atendo."
        },
        {
          q: "Você atende ligações?",
          a: "Não. Prefiro comunicação por escrito (email ou WhatsApp) para manter registro e clareza das conversas. Reuniões por vídeo podem ser agendadas quando necessário."
        },
        {
          q: "Como funciona o primeiro contato?",
          a: "Você envia uma mensagem descrevendo sua necessidade. Eu analiso, faço perguntas complementares se necessário, e em seguida envio uma proposta com escopo, prazo e investimento."
        },
      ]
    },
    {
      title: "Tecnologia e decisões técnicas",
      questions: [
        {
          q: "Por que você escolhe uma tecnologia e não outra?",
          a: "Cada projeto tem necessidades diferentes. Analiso requisitos de performance, escalabilidade, manutenção e custo antes de definir a stack. Não sigo modas, sigo o que resolve o problema do cliente da melhor forma."
        },
        {
          q: "Você trabalha com WordPress ou plataformas prontas?",
          a: "Não. Meu foco é desenvolvimento sob medida com código próprio. Isso garante controle total sobre performance, segurança e escalabilidade, algo que plataformas prontas não conseguem oferecer com a mesma qualidade."
        },
        {
          q: "Seus projetos são responsivos?",
          a: "Sim. Todos os projetos que desenvolvo são responsivos por padrão, funcionando em desktop, tablet e celular. A experiência do usuário em diferentes dispositivos é uma prioridade."
        },
        {
          q: "Como você lida com segurança nos projetos?",
          a: "Segurança é tratada desde o início do desenvolvimento. Aplico boas práticas como validação de entrada, autenticação robusta, criptografia de dados sensíveis e o princípio do menor privilégio em acessos e permissões."
        },
      ]
    },
  ] : [
    {
      title: "About me and my journey",
      questions: [
        {
          q: "Who is Talisson Souza?",
          a: "I'm a software engineer and founder of Cheetah Solutions Network. I've been working with technology for over 8 years, building systems, automations and architectures for companies and personal projects. I'm also the author of the book 'Superando Limites' and strategic director of Werneck Group."
        },
        {
          q: "What is your educational background?",
          a: "I'm self-taught, building my expertise through years of practice, real projects and constant study. I believe the tech market values results and competence above degrees, and my track record reflects that."
        },
        {
          q: "How long have you been working with technology?",
          a: "Since 2016. I started creating Discord bots, evolved into complete web systems, automations and consulting. Each year added a new layer of experience and technical maturity."
        },
        {
          q: "What is Cheetah Solutions Network?",
          a: "It's the company I founded to provide complete digital solutions. We work with custom system development, automations, technical consulting and software architecture for companies of different sizes."
        },
        {
          q: "Do you work alone or with a team?",
          a: "It depends on the scope. For smaller projects, I work independently. For larger projects or tighter deadlines, I rely on a trusted network of professionals who work with me under the Cheetah Solutions structure."
        },
      ]
    },
    {
      title: "Services and projects",
      questions: [
        {
          q: "What kind of projects do you develop?",
          a: "Institutional websites, landing pages, e-commerces, complete web systems, APIs, bots, automations and custom applications. Always focusing on quality, performance and scalability."
        },
        {
          q: "What technologies do you use?",
          a: "I mainly work with React, TypeScript, Node.js, Python, PostgreSQL and cloud services like AWS and Vercel. The stack choice is made case by case, prioritizing what best solves the client's problem."
        },
        {
          q: "Do you provide maintenance after delivery?",
          a: "Yes. I offer 30 days of free support for adjustments after project delivery. After that, I provide monthly maintenance plans for updates, fixes and continuous improvements."
        },
        {
          q: "Do you accept projects from outside Brazil?",
          a: "Yes. I serve clients from anywhere in the world. Communication can be in Portuguese or English, and payments can be made via international transfer or PayPal."
        },
        {
          q: "How much does a project cost?",
          a: "Each project is unique. The investment depends on complexity, features and timeline. After an initial conversation to understand the scope, I send a detailed proposal with schedule and pricing. I work on projects starting from $600."
        },
        {
          q: "How long does it take to develop a project?",
          a: "It depends on the scope. An institutional website can take 2 to 4 weeks. More complex systems like platforms or apps can take 2 to 6 months. I always set realistic deadlines after fully understanding the demand."
        },
        {
          q: "How does your work process function?",
          a: "I start with a briefing meeting to understand your needs. Then, I present a proposal with scope and timeline. After approval, I begin development with partial deliveries for validation. At the end, I deliver with training and support."
        },
        {
          q: "When is it not worth hiring you?",
          a: "When the project has no defined scope, when the priority is price over quality, or when the deadline is unrealistic for what is expected. I prefer to be transparent from the start to avoid frustration on both sides."
        },
      ]
    },
    {
      title: "Consulting and mentorship",
      questions: [
        {
          q: "Do you offer technical consulting?",
          a: "Yes. I offer technical diagnostics, architecture analysis, code reviews and strategic guidance for teams and projects. Consulting can be one-time or recurring."
        },
        {
          q: "Do you mentor developers?",
          a: "I don't offer formal mentorship at the moment, but I actively share knowledge through articles, content trails and the Discord community."
        },
        {
          q: "Can I hire an analysis of my existing project?",
          a: "Yes. I analyze existing projects identifying architecture, security, performance and scalability issues. I deliver a complete report with practical recommendations."
        },
      ]
    },
    {
      title: "Content and community",
      questions: [
        {
          q: "What are the content trails?",
          a: "They are organized learning paths I created to facilitate the study of specific topics. Each trail groups related articles in a logical sequence, covering everything from digital security to career strategy."
        },
        {
          q: "Do you have a community?",
          a: "Yes. I maintain a Discord server where I share knowledge, discuss technology and connect professionals. It's a space for genuine exchange, without empty promises."
        },
        {
          q: "Are the articles free?",
          a: "Yes. All content on the site, including articles and trails, is free and open. I believe quality knowledge should be accessible."
        },
        {
          q: "What is the book 'Superando Limites' about?",
          a: "It's a book about resilience, entrepreneurship and mindset. In 121 chapters, I share lessons on how to turn rejection and limitations into fuel for success. It's available on Amazon."
        },
      ]
    },
    {
      title: "Contact and availability",
      questions: [
        {
          q: "What is the best way to get in touch?",
          a: "Through the contact form on the site or via WhatsApp. I respond to all messages within 24 business hours."
        },
        {
          q: "What are your business hours?",
          a: "Monday to Friday, 9am to 6pm. Saturdays, 10am to 2pm. Sundays and holidays are off."
        },
        {
          q: "Do you take phone calls?",
          a: "No. I prefer written communication (email or WhatsApp) to maintain record and clarity of conversations. Video meetings can be scheduled when needed."
        },
        {
          q: "How does the first contact work?",
          a: "You send a message describing your need. I analyze it, ask complementary questions if necessary, and then send a proposal with scope, timeline and investment."
        },
      ]
    },
    {
      title: "Technology and technical decisions",
      questions: [
        {
          q: "Why do you choose one technology over another?",
          a: "Each project has different needs. I analyze performance, scalability, maintenance and cost requirements before defining the stack. I don't follow trends, I follow what best solves the client's problem."
        },
        {
          q: "Do you work with WordPress or ready-made platforms?",
          a: "No. My focus is custom development with proprietary code. This ensures full control over performance, security and scalability, something ready-made platforms cannot offer with the same quality."
        },
        {
          q: "Are your projects responsive?",
          a: "Yes. All projects I develop are responsive by default, working on desktop, tablet and mobile. User experience across different devices is a priority."
        },
        {
          q: "How do you handle security in projects?",
          a: "Security is addressed from the start of development. I apply best practices such as input validation, robust authentication, sensitive data encryption and the principle of least privilege for access and permissions."
        },
      ]
    },
  ];

  const contactPath = language === 'en' ? '/en-us/contact' : '/contato';

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: categories.flatMap((c) =>
      c.questions.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      }))
    ),
  };

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language,
          'Perguntas Frequentes | Talisson Souza',
          'Frequently Asked Questions | Talisson Souza'
        )}
        description={getText(language,
          'Respostas para as dúvidas mais comuns sobre serviços, processo de trabalho, tecnologias, consultoria, comunidade e formas de contato com Talisson Souza.',
          'Answers to the most common questions about services, work process, technologies, consulting, community and contact with Talisson Souza.'
        )}
        canonical={language === 'en' ? '/en-us/faq' : '/faq'}
        keywords={language === 'pt'
          ? ['FAQ', 'perguntas frequentes', 'Talisson Souza', 'desenvolvedor', 'serviços', 'contato']
          : ['FAQ', 'frequently asked questions', 'Talisson Souza', 'developer', 'services', 'contact']
        }
        jsonLd={faqJsonLd}
      />

      {/* Hero */}
      <section className="min-h-[45vh] flex items-center relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
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
                FAQ
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-6">
                {getText(language, 'Perguntas Frequentes', 'Frequently Asked Questions')}
              </AnimatedTitle>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {getText(language,
                  'Tudo o que você precisa saber sobre meus serviços, processo de trabalho, tecnologias e formas de contato. Se a sua dúvida não estiver aqui, é só me chamar.',
                  'Everything you need to know about my services, work process, technologies and ways to get in touch. If your question is not here, just reach out.'
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Categories */}
      <ParallaxSection
        className="py-16 lg:py-20"
        speed={0.08}
        backgroundElement={
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          </>
        }
      >
        <div className="container mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((category, catIndex) => (
              <ScrollReveal key={catIndex} delay={catIndex * 0.05}>
                <div
                  className="relative p-6 lg:p-8 rounded-3xl border border-border/20 bg-card/30 backdrop-blur-sm h-full"
                  style={{
                    boxShadow: '0 8px 40px hsl(var(--foreground) / 0.03)'
                  }}
                >
                  <div className="absolute top-0 left-0 w-12 h-12 border-l border-t border-foreground/[0.06] rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-foreground/[0.06] rounded-br-3xl" />

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                      <HelpCircle className="w-4 h-4 text-foreground/70" />
                    </div>
                    <h2 className="font-serif text-lg lg:text-xl text-foreground">
                      {category.title}
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem
                        key={qIndex}
                        value={`cat-${catIndex}-q-${qIndex}`}
                        className="border-b border-border/30 last:border-b-0"
                      >
                        <AccordionTrigger className="text-left py-4 text-foreground hover:no-underline hover:opacity-70 transition-opacity duration-200 text-sm font-medium gap-4">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-sm text-muted-foreground leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA */}
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
                  <HelpCircle className="w-7 h-7 text-foreground/70" />
                </div>

                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-4 leading-tight">
                  {getText(language, 'Não encontrou sua dúvida?', "Didn't find your question?")}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
                  {getText(language,
                    'Entre em contato diretamente. Respondo todas as mensagens em até 24 horas úteis.',
                    'Get in touch directly. I respond to all messages within 24 business hours.'
                  )}
                </p>

                <Link to={contactPath}>
                  <motion.span
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-primary-foreground bg-foreground rounded-full transition-all duration-300"
                    style={{
                      boxShadow: '0 0 30px hsl(var(--foreground) / 0.2)'
                    }}
                  >
                    {getText(language, 'Entrar em contato', 'Get in touch')}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </Layout>
  );
};

export default FAQ;
