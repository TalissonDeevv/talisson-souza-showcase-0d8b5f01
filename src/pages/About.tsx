import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, Briefcase, Code2, Download, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SocialIcons from "@/components/ui/SocialIcons";
import { MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const ease = [0.16, 1, 0.3, 1] as const;

const aboutParagraphsPt = [
  "Meu nome é Talisson Souza.",
  "Sou Engenheiro e Arquiteto de Software, fundador da Cheetah Solutions Network e trabalho desenvolvendo sistemas, automações e soluções digitais para empresas que precisam crescer com estrutura, eficiência e tecnologia construída para durar.",
  "Se alguém me perguntasse quando começou minha relação com a tecnologia, eu provavelmente não saberia responder com uma data exata. Ela simplesmente aconteceu.",
  "Muito antes de pensar em carreira, empresa ou clientes, eu já tinha curiosidade de entender como as coisas funcionavam. Sempre achei estranho usar um sistema sem imaginar como ele havia sido construído. Enquanto muitas pessoas viam apenas uma tela, eu tentava imaginar o que existia por trás dela.",
  "Foi essa curiosidade que me trouxe até a programação. Não comecei porque estava seguindo uma tendência. Não comecei porque disseram que era uma profissão promissora. Comecei porque descobrir como as coisas eram construídas era divertido.",
  "Em 2018 comecei a desenvolver bots e pequenas automações. Os primeiros projetos eram simples. Hoje, olhando para aquele código, consigo enxergar dezenas de erros. Na época eu acreditava que estava escrevendo um software excelente. E isso é curioso.",
  "Quanto mais aprendemos, mais percebemos o quanto ainda temos para aprender. Essa talvez seja uma das maiores lições que a tecnologia me ensinou. O conhecimento nunca está completo.",
  "Foi estudando, errando e reconstruindo projetos que desenvolvi minha base técnica. Grande parte desse aprendizado aconteceu de forma autodidata, lendo documentações, testando bibliotecas, desmontando projetos, quebrando aplicações e tentando entender por que determinada solução funcionava enquanto outra falhava.",
  "Com o tempo, percebi que programar era apenas uma pequena parte do desenvolvimento de software. Escrever código é relativamente fácil. Difícil é entender o problema antes de pensar na solução.",
  "Difícil é tomar decisões que continuem fazendo sentido daqui a cinco anos. Difícil é construir algo que outra pessoa consiga manter sem precisar reescrever tudo do zero.",
  "Foi nesse momento que comecei a enxergar software de uma forma diferente. Passei a me interessar muito mais por arquitetura, organização, escalabilidade e engenharia do que apenas por linguagens de programação.",
  "Sempre gostei da ideia de construir sistemas que permanecem úteis ao longo do tempo. Acredito que um software bem desenvolvido deve facilitar o crescimento de uma empresa, e não se tornar um obstáculo para ele.",
  "Quando chegou o momento de entrar no mercado de trabalho, encontrei algumas dificuldades. Nem sempre as oportunidades aparecem quando estamos preparados para elas. Em alguns momentos percebi que seria mais fácil esperar alguém confiar no meu trabalho.",
  "Mas também percebi que poderia fazer exatamente o contrário. Construir algo que demonstrasse meu trabalho sem depender da aprovação de ninguém. Foi assim que comecei a enxergar o empreendedorismo.",
  "Em 2020 nasceu a Cheetah Solutions Network. Ela não surgiu porque eu queria apenas abrir uma empresa. Surgiu porque eu acreditava que era possível desenvolver tecnologia de uma forma diferente.",
  "Sempre enxerguei software como investimento, nunca como produto descartável. Um sistema pode economizar milhares de horas de trabalho. Uma automação pode eliminar tarefas repetitivas durante anos. Uma boa arquitetura pode evitar problemas que só apareceriam muito tempo depois.",
  "Hoje participo de projetos envolvendo desenvolvimento de sistemas, arquitetura de software, automações, integrações, infraestrutura e soluções sob medida. Gosto de acompanhar todas as etapas do processo: desde entender o problema até acompanhar o resultado daquilo que foi construído.",
  "Acredito que tecnologia só faz sentido quando melhora a vida de quem está do outro lado. Se um sistema é complexo apenas para parecer sofisticado, provavelmente ele foi projetado da maneira errada.",
  "Ao longo da minha trajetória também aprendi que disciplina costuma ser mais importante do que motivação. Motivação muda. Disciplina continua existindo mesmo quando a motivação desaparece.",
  "Talvez por isso eu nunca tenha acreditado muito em fórmulas rápidas para alcançar resultados. Quase tudo que realmente vale a pena exige tempo, repetição e consistência. Software também funciona assim.",
  "Não existe arquitetura sólida construída às pressas. Não existe experiência adquirida em poucas semanas. Não existe excelência sem prática.",
  "Também gosto de compartilhar conhecimento. Sempre que possível ajudo desenvolvedores, participo de comunidades, escrevo conteúdos e converso com pessoas que estão iniciando na área. Acredito que ensinar também é uma forma de aprender.",
  "Sou recifense, nascido e criado em Pernambuco. Tenho orgulho das minhas origens e de tudo que elas representam. Aprendi desde cedo que as circunstâncias não precisam definir até onde alguém pode chegar.",
  "Como pessoa com deficiência (PCD), também enfrentei desafios que fizeram parte da minha história. Essas experiências mudaram minha forma de enxergar trabalho, responsabilidade e perseverança.",
  "Elas me ensinaram que capacidade não pode ser medida pela primeira impressão que alguém tem de você. Ela aparece quando existe dedicação suficiente para continuar construindo, mesmo quando o caminho parece mais difícil.",
  "Também sou autor do livro Superando Limites - Da Rejeição ao Sucesso, onde compartilho parte dessa trajetória e das experiências que moldaram minha forma de pensar.",
  "Hoje continuo estudando praticamente todos os dias. A tecnologia muda rapidamente. O que sabemos hoje pode não ser suficiente amanhã. E, sinceramente, acho que isso é uma das coisas mais interessantes dessa profissão.",
  "No fim das contas, acredito que minha trajetória nunca foi apenas sobre tecnologia. Sempre foi sobre construir conhecimento, soluções, oportunidades, empresas, confiança e algo que continue fazendo sentido muitos anos depois da última linha de código ser escrita.",
];

const aboutParagraphsEn = [
  "My name is Talisson Souza.",
  "I am a Software Engineer and Software Architect, founder of Cheetah Solutions Network, working on systems, automations and digital solutions for companies that need to grow with structure, efficiency and technology built to last.",
  "My relationship with technology did not start from a trend. It started from curiosity and the need to understand what existed behind the screen, how things worked, and why one solution held up while another failed.",
  "I started building bots and small automations in 2018. Those first projects were simple, imperfect and necessary. They taught me that knowledge is never complete and that every rebuild leaves a better engineer behind.",
  "Over time I understood that writing code is only a small part of software development. The hard part is understanding the problem, making decisions that still make sense years later, and building something other people can maintain.",
  "In 2020 I founded Cheetah Solutions Network because I believed technology could be developed with more responsibility. I have always seen software as an investment, not a disposable product.",
  "Today I work across systems development, software architecture, automations, integrations, infrastructure and custom digital solutions. I like staying close to the full process, from diagnosis to the real result.",
  "I was born and raised in Recife, Pernambuco. As a disabled person, I also faced experiences that shaped how I see work, responsibility and perseverance. They taught me that capability cannot be measured by first impressions.",
  "I am also the author of Superando Limites - Da Rejeição ao Sucesso, a book where I share part of this journey and the experiences that shaped my way of thinking.",
  "In the end, my journey has never been only about technology. It has always been about building knowledge, solutions, opportunities, companies, trust and things that still make sense long after the last line of code is written.",
];

const About = () => {
  const { language } = useTheme();
  const paragraphs = language === "pt" ? aboutParagraphsPt : aboutParagraphsEn;
  const yearsOfExperience = `${new Date().getFullYear() - 2018}+`;

  const chapters = language === "pt"
    ? [
        { label: "01", title: "Curiosidade", text: "Antes de carreira, veio a vontade de entender como sistemas eram construídos." },
        { label: "02", title: "Engenharia", text: "Código virou arquitetura, processo, manutenção e responsabilidade de longo prazo." },
        { label: "03", title: "Empresa", text: "A Cheetah nasceu para transformar tecnologia em estrutura de crescimento." },
        { label: "04", title: "Construção", text: "Hoje o foco é criar soluções que continuem úteis depois da entrega." },
      ]
    : [
        { label: "01", title: "Curiosity", text: "Before career, there was the need to understand how systems were built." },
        { label: "02", title: "Engineering", text: "Code became architecture, process, maintenance and long-term responsibility." },
        { label: "03", title: "Company", text: "Cheetah was created to turn technology into growth structure." },
        { label: "04", title: "Construction", text: "Today the focus is building solutions that remain useful after delivery." },
      ];

  const beliefs = language === "pt"
    ? [
        "Software bom não complica para parecer importante.",
        "Arquitetura precisa sobreviver ao entusiasmo inicial.",
        "Tecnologia só vale quando melhora a vida de quem usa.",
        "Disciplina constrói mais que motivação.",
      ]
    : [
        "Good software does not complicate itself to look important.",
        "Architecture needs to survive the initial excitement.",
        "Technology matters when it improves life for the person using it.",
        "Discipline builds more than motivation.",
      ];

  const policyHighlights = language === "pt"
    ? [
        {
          title: "Como eu trabalho",
          text: "Começo pelo contexto, organizo o problema e só então transformo decisão em execução técnica.",
          path: "/politicas/como-trabalho",
        },
        {
          title: "O que eu faço",
          text: "Desenvolvo sistemas, automações, integrações, arquitetura e soluções digitais sob medida.",
          path: "/politicas/o-que-faco",
        },
        {
          title: "O que eu não faço",
          text: "Não vendo promessa vazia, atalho milagroso, gambiarra sem critério ou entrega sem responsabilidade.",
          path: "/politicas/o-que-nao-faco",
        },
      ]
    : [
        {
          title: "How I work",
          text: "I start from context, organize the problem and only then turn decisions into technical execution.",
          path: "/en-us/policies/como-trabalho",
        },
        {
          title: "What I do",
          text: "I build systems, automations, integrations, architecture and custom digital solutions.",
          path: "/en-us/policies/o-que-faco",
        },
        {
          title: "What I do not do",
          text: "I do not sell empty promises, miraculous shortcuts, careless patches or work without responsibility.",
          path: "/en-us/policies/o-que-nao-faco",
        },
      ];

  return (
    <Layout withPadding={false}>
      <SEO
        title={getText(language, "Sobre Talisson Souza | Engenheiro e Arquiteto de Software", "About Talisson Souza | Software Engineer and Architect")}
        description={getText(
          language,
          "Conheça Talisson Souza, engenheiro e arquiteto de software, fundador da Cheetah Solutions Network e profissional focado em sistemas, automações e tecnologia construída para durar.",
          "Meet Talisson Souza, software engineer and architect, founder of Cheetah Solutions Network and professional focused on systems, automations and technology built to last."
        )}
        canonical={language === "en" ? "/en-us/about" : "/sobre"}
        keywords={language === "pt" ? ["Talisson Souza", "sobre", "engenheiro de software", "arquiteto de software", "Cheetah Solutions Network"] : ["Talisson Souza", "about", "software engineer", "software architect", "Cheetah Solutions Network"]}
      />

      <PageHero
        compact
        eyebrow={getText(language, "Sobre", "About")}
        title="Talisson Souza"
        subtitle={getText(
          language,
          "Engenheiro e Arquiteto de Software. Fundador da Cheetah Solutions Network. Recife, Pernambuco.",
          "Software Engineer and Architect. Founder of Cheetah Solutions Network. Recife, Pernambuco."
        )}
        meta={
          <MotionRail
            className="max-w-2xl"
            items={[
              { value: yearsOfExperience, label: getText(language, "construindo", "building") },
              { value: "CEO", label: "Cheetah Solutions Network" },
            ]}
          />
        }
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open("https://drive.google.com/file/d/1JBmXK4aCAPfeY4kuEc5QpO-ehlA2rfWO/view?usp=sharing", "_blank", "noopener,noreferrer")}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
            >
              <Download className="h-4 w-4" />
              {getText(language, "Baixar CV", "Download CV")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            <Link
              to={language === "en" ? "/en-us/career" : "/carreira"}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
            >
              {getText(language, "Ver carreira", "See career")}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <SocialIcons showLabels={false} className="sm:ml-2" />
          </div>
        }
      />

      <section id="perfil" className="relative scroll-mt-28 overflow-hidden py-12 lg:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <div className="mb-10 max-w-4xl border-y border-border/20 py-8">
                <span className="mb-5 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Perfil", "Profile")}
                </span>
                <h2 className="font-serif text-4xl leading-[1.02] text-foreground lg:text-6xl">
                  {getText(language, "Quem eu sou antes do codigo.", "Who I am before the code.")}
                </h2>
              </div>
            </ScrollReveal>

            <article className="relative">
              <div className="space-y-8">
                {paragraphs.map((paragraph, index) => {
                  const highlight = index === 0 || index === 1 || index === 15 || index === paragraphs.length - 1;
                  return (
                    <ScrollReveal key={index} delay={Math.min(index * 0.015, 0.16)}>
                      <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.58, ease }}
                        className={
                          highlight
                            ? "max-w-5xl border-l border-foreground/25 pl-5 font-serif text-2xl leading-[1.45] text-foreground lg:text-3xl"
                            : "max-w-4xl text-[17px] leading-[1.92] text-muted-foreground"
                        }
                      >
                        {paragraph}
                      </motion.p>
                    </ScrollReveal>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="principios" className="relative scroll-mt-28 overflow-hidden py-14 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="grid gap-10 border-y border-border/20 py-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <ScrollReveal>
              <div>
                <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Princípios", "Principles")}
                </span>
                <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {getText(language, "O que guia minha forma de construir.", "What guides how I build.")}
                </h2>
              </div>
            </ScrollReveal>

            <div className="divide-y divide-border/20 border-y border-border/20 lg:border-y-0">
              {beliefs.map((belief, index) => (
                <ScrollReveal key={belief} delay={index * 0.06}>
                  <motion.div
                    whileInView={{ "--line": "100%" } as Record<string, string>}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.75, delay: index * 0.06, ease }}
                    className="relative grid gap-4 py-6 sm:grid-cols-[90px_1fr]"
                    style={{ "--line": "0%" } as Record<string, string>}
                  >
                    <div className="absolute bottom-0 left-0 h-px w-[var(--line)] bg-foreground/20" />
                    <span className="font-serif text-4xl leading-none text-foreground/18">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-serif text-2xl leading-tight text-foreground">{belief}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="criterios" className="relative scroll-mt-28 overflow-hidden py-12 lg:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-8 max-w-3xl">
              <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                {getText(language, "Critérios", "Criteria")}
              </span>
              <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                {getText(language, "Clareza antes de qualquer acordo.", "Clarity before any agreement.")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {getText(
                  language,
                  "Parte do meu trabalho é deixar explícito o modo como conduzo projetos, o tipo de entrega que assumo e os limites que protegem a relação profissional.",
                  "Part of my work is making clear how I lead projects, what kind of delivery I take on and which limits protect the professional relationship."
                )}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 lg:grid-cols-3">
            {policyHighlights.map((item, index) => (
              <ScrollReveal key={item.path} delay={index * 0.05}>
                <Link
                  to={item.path}
                  className="group block h-full bg-background/92 p-6 transition-colors hover:bg-foreground/[0.035] lg:p-8"
                >
                  <span className="mb-8 block font-serif text-4xl text-foreground/14">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    {getText(language, "Ler política", "Read policy")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="caminhos" className="scroll-mt-28 py-14 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 lg:grid-cols-3">
              {[
                {
                  icon: Code2,
                  title: getText(language, "Soluções sob medida", "Custom solutions"),
                  text: getText(language, "Sistemas, automações, integrações e infraestrutura pensados para durar.", "Systems, automations, integrations and infrastructure designed to last."),
                  path: language === "en" ? "/en-us/services" : "/servicos",
                },
                {
                  icon: Briefcase,
                  title: getText(language, "Trajetória profissional", "Professional journey"),
                  text: getText(language, "Empresas, comunidades, parcerias e experiências que moldaram meu trabalho.", "Companies, communities, partnerships and experiences that shaped my work."),
                  path: language === "en" ? "/en-us/career" : "/carreira",
                },
                {
                  icon: BookOpen,
                  title: "Superando Limites",
                  text: getText(language, "O livro onde compartilho parte da minha história e visão de mundo.", "The book where I share part of my story and worldview."),
                  path: language === "en" ? "/en-us/book" : "/livro",
                },
              ].map((item, index) => (
                <Link key={item.title} to={item.path} className="group bg-background/92 p-6 transition-colors hover:bg-foreground/[0.035] lg:p-8">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/30 bg-background/40">
                      <item.icon className="h-5 w-5 text-foreground/70" />
                    </span>
                    <span className="font-serif text-4xl text-foreground/12">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    {getText(language, "Abrir", "Open")}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="contato" className="scroll-mt-28 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col gap-6 border-y border-border/20 py-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <span className="mb-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  <MapPin className="h-3.5 w-3.5" />
                  Recife, Pernambuco
                </span>
                <h2 className="font-serif text-3xl leading-tight text-foreground">
                  {getText(language, "Construir confiança também faz parte do trabalho.", "Building trust is also part of the work.")}
                </h2>
              </div>
              <Link
                to={language === "en" ? "/en-us/contact" : "/contato"}
                className="group inline-flex items-center gap-3 rounded-full border border-border/35 bg-background/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/10"
              >
                <Sparkles className="h-4 w-4" />
                {getText(language, "Conversar com Talisson", "Talk to Talisson")}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
