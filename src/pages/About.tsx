import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, BookOpen, Briefcase, Code2, Download, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import AnimatedSignature from "@/components/ui/AnimatedSignature";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SocialIcons from "@/components/ui/SocialIcons";
import { MotionRail, PageHero } from "@/components/ui/PageIdentity";
import { FaqPro } from "@/components/ui/faq-pro";
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

  const addedNarrativeSections = language === "pt"
    ? [
        {
          eyebrow: "Motivação",
          title: "O que me move",
          text: [
            "O que me move não é a ideia abstrata de tecnologia. É perceber um problema que atrapalha uma pessoa, uma empresa ou uma comunidade e conseguir transformar aquilo em algo mais claro, mais estável e mais útil.",
            "Gosto quando uma solução deixa de chamar atenção porque funciona bem o suficiente para virar parte natural da rotina. Esse tipo de resultado quase nunca nasce de pressa. Ele aparece quando existe escuta, estudo, critério e respeito pelo impacto que uma decisão técnica pode causar.",
            "Também me move compartilhar conhecimento. Não como vitrine, mas como retorno. Muito do que aprendi veio de documentação, comunidades, conversas e pessoas que explicaram algo com paciência. Quando escrevo, gravo, respondo ou organizo uma ideia, tento devolver um pouco disso.",
          ],
        },
        {
          eyebrow: "Além do software",
          title: "A tecnologia não é o único centro da minha história",
          text: [
            "A escrita se tornou uma forma de organizar pensamento. Antes de publicar qualquer coisa, normalmente existe uma fase de pesquisa, rascunho, revisão e tentativa de transformar uma ideia complexa em algo que outra pessoa consiga usar de verdade.",
            "O livro Superando Limites nasceu desse mesmo lugar. Ele não existe para transformar minha trajetória em espetáculo. Existe porque algumas experiências precisavam ser registradas com mais calma, sem depender do ritmo rápido das redes sociais.",
            "Comunidades, estudo constante, produção de conteúdo e novos projetos fazem parte da mesma linha. São maneiras diferentes de construir repertório, testar ideias, conversar com pessoas e amadurecer decisões antes de colocá-las no mundo.",
          ],
        },
        {
          eyebrow: "2021",
          title: "Uma experiência que fortaleceu minha decisão de empreender",
          text: [
            "Em 2021, candidatei-me a três oportunidades profissionais. Em algumas conversas, tive a percepção de que o tom mudava quando minha condição como pessoa com deficiência se tornava conhecida. Em certos casos, o retorno simplesmente não veio.",
            "Não transformo essa percepção em acusação contra pessoas ou empresas específicas. O que posso dizer, com honestidade, é que aquele período me fez olhar para o meu caminho com mais seriedade. Se eu dependesse apenas da autorização de alguém para provar minha capacidade, talvez demorasse muito mais para construir o que eu queria construir.",
            "A resposta foi estudar mais, organizar melhor meu portfólio, assumir projetos com responsabilidade e desenvolver minha empresa com consistência. O empreendedorismo, para mim, não apareceu como frase bonita. Apareceu como uma forma concreta de continuar avançando.",
          ],
        },
        {
          eyebrow: "Impacto",
          title: "O que eu quero deixar em construção",
          text: [
            "Quero que meu trabalho ajude empresas a funcionarem melhor, mas também quero que ajude pessoas a pensarem melhor sobre tecnologia. Um sistema útil resolve uma parte do problema. Conhecimento compartilhado pode mudar a forma como alguém enxerga o próprio caminho.",
            "Quando alguém que também enfrenta barreiras olha para minha trajetória, eu não quero que veja uma história perfeita. Quero que veja uma pessoa construindo com responsabilidade, errando, corrigindo, insistindo e tentando abrir espaço para que outras pessoas também se levem a sério.",
            "Legado, para mim, não é aparecer mais. É construir algo que continue ajudando quando a atenção passa.",
          ],
        },
        {
          eyebrow: "Fora do código",
          title: "Onde as ideias amadurecem",
          text: [
            "Boa parte do meu trabalho acontece antes do editor de código abrir. Estudo, pesquiso, comparo caminhos, escrevo anotações, organizo prioridades e tento entender se a solução que parece boa hoje ainda fará sentido depois.",
            "Também mantenho projetos pessoais porque eles me dão liberdade para experimentar sem transformar cada tentativa em uma entrega pública. Algumas ideias amadurecem rápido. Outras precisam de silêncio, revisão e tempo.",
          ],
        },
      ]
    : [
        {
          eyebrow: "Motivation",
          title: "What moves me",
          text: [
            "What moves me is not technology as an abstract idea. It is seeing a problem that affects a person, a company or a community and turning it into something clearer, more stable and more useful.",
            "I like when a solution stops calling attention because it works well enough to become part of the routine. That kind of result rarely comes from haste. It comes from listening, studying, judgment and respect for the impact of technical decisions.",
          ],
        },
        {
          eyebrow: "Beyond software",
          title: "Technology is not the only center of my story",
          text: [
            "Writing became a way to organize thought. Before publishing anything, there is usually research, drafting, revision and an attempt to turn a complex idea into something someone else can actually use.",
            "My book Superando Limites came from that same place. It exists because some experiences needed to be registered with more calm than social media allows.",
          ],
        },
        {
          eyebrow: "2021",
          title: "An experience that strengthened my decision to build",
          text: [
            "In 2021, I applied to three professional opportunities. In some conversations, I had the perception that the tone changed when my condition as a disabled person became known. In certain cases, the follow-up simply never came.",
            "I do not turn that perception into an accusation against specific people or companies. What I can say honestly is that the period made me take my path more seriously. I studied more, organized my portfolio, took projects responsibly and kept building my company with consistency.",
          ],
        },
        {
          eyebrow: "Impact",
          title: "What I want to keep building",
          text: [
            "I want my work to help companies operate better, but I also want it to help people think better about technology. A useful system solves part of the problem. Shared knowledge can change how someone sees their own path.",
            "Legacy, to me, is not about appearing more. It is about building something that keeps helping when attention moves on.",
          ],
        },
        {
          eyebrow: "Outside code",
          title: "Where ideas mature",
          text: [
            "Much of my work happens before the code editor opens. I study, research, compare paths, write notes, organize priorities and try to understand whether the solution that looks good today will still make sense later.",
          ],
        },
      ];

  const curiosities = language === "pt"
    ? [
        { value: "Recife", label: "Nasci e cresci em Pernambuco, uma origem que continua presente na forma como enxergo trabalho e responsabilidade." },
        { value: "2018", label: "Comecei com bots e automações simples, aprendendo na prática o peso de cada decisão mal pensada." },
        { value: "2020", label: "A Cheetah Solutions Network nasceu como uma resposta concreta à vontade de construir com mais autonomia." },
        { value: "Livro", label: "Superando Limites registra parte da minha história fora do formato rápido das redes sociais." },
      ]
    : [
        { value: "Recife", label: "I was born and raised in Pernambuco, an origin that still shapes how I see work and responsibility." },
        { value: "2018", label: "I started with simple bots and automations, learning in practice the weight of poorly made decisions." },
        { value: "2020", label: "Cheetah Solutions Network was born as a concrete answer to the will to build with more autonomy." },
        { value: "Book", label: "Superando Limites records part of my story outside the fast rhythm of social media." },
      ];

  const trajectoryFaq = language === "pt"
    ? [
        {
          question: "Por que a página Sobre fala tanto de construção?",
          answer: "Porque essa palavra atravessa minha história de formas diferentes. Construir conhecimento, empresa, confiança, conteúdo, sistemas e oportunidades. A tecnologia aparece como parte desse processo, não como ponto isolado.",
        },
        {
          question: "O que a Cheetah representa na sua trajetória?",
          answer: "Ela representa autonomia e responsabilidade. Não nasceu apenas como empresa, mas como uma forma de provar trabalho por meio de entrega, organização e visão de longo prazo.",
        },
        {
          question: "O livro tem relação com sua carreira?",
          answer: "Tem relação com a pessoa por trás da carreira. O livro registra experiências que ajudaram a formar minha visão sobre persistência, rejeição, responsabilidade e construção de futuro.",
        },
        {
          question: "Como sua experiência como PCD aparece no seu trabalho?",
          answer: "Ela aparece na forma como levo responsabilidade a sério. Aprendi que capacidade nem sempre é reconhecida de imediato, então passei a valorizar evidência, consistência e entrega bem feita.",
        },
        {
          question: "O que você espera construir nos próximos anos?",
          answer: "Quero continuar desenvolvendo soluções úteis, fortalecendo a Cheetah, escrevendo conteúdos melhores, criando projetos próprios e ajudando outras pessoas a enxergarem caminhos possíveis com mais clareza.",
        },
      ]
    : [
        {
          question: "Why does this page talk so much about building?",
          answer: "Because that word runs through my story in different ways. Building knowledge, company, trust, content, systems and opportunities. Technology is part of that process, not an isolated point.",
        },
        {
          question: "What does Cheetah represent in your journey?",
          answer: "It represents autonomy and responsibility. It was not created only as a company, but as a way to prove work through delivery, organization and long-term vision.",
        },
        {
          question: "Is the book connected to your career?",
          answer: "It is connected to the person behind the career. The book records experiences that helped shape how I see persistence, rejection, responsibility and future building.",
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

      <section id="historia-expandida" className="relative scroll-mt-28 overflow-hidden pb-14 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl border-y border-border/20 py-10 lg:py-14">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <ScrollReveal>
                <div className="lg:sticky lg:top-28">
                  <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                    {getText(language, "Camadas", "Layers")}
                  </span>
                  <h2 className="font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                    {getText(language, "A pessoa por trás da entrega.", "The person behind the work.")}
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {getText(
                      language,
                      "Algumas partes da trajetória não cabem em cargos, tecnologias ou datas. Elas aparecem nas decisões que continuam moldando minha forma de construir.",
                      "Some parts of a journey do not fit into roles, technologies or dates. They appear in decisions that keep shaping how I build."
                    )}
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-10">
                {addedNarrativeSections.map((section, index) => (
                  <ScrollReveal key={section.title} delay={index * 0.04}>
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.58, ease }}
                      className="border-b border-border/15 pb-10 last:border-b-0 last:pb-0"
                    >
                      <span className="mb-4 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground/55">
                        {section.eyebrow}
                      </span>
                      <h3 className="font-serif text-2xl leading-tight text-foreground lg:text-4xl">
                        {section.title}
                      </h3>
                      <div className="mt-5 space-y-5">
                        {section.text.map((paragraph) => (
                          <p key={paragraph} className="max-w-3xl text-[16px] leading-[1.88] text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}

                <ScrollReveal>
                  <div className="border-y border-border/20 py-10">
                    <span className="mb-4 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground/55">
                      {getText(language, "Curiosidades", "Notes")}
                    </span>
                    <div className="grid gap-px overflow-hidden border border-border/20 bg-border/20 sm:grid-cols-2">
                      {curiosities.map((item, index) => (
                        <motion.div
                          key={item.value}
                          initial={{ opacity: 0, y: 14 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.5, delay: index * 0.04, ease }}
                          className="bg-background/92 p-5 lg:p-6"
                        >
                          <span className="font-serif text-3xl text-foreground">{item.value}</span>
                          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="border-b border-border/20 pb-10">
                    <span className="mb-4 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground/55">
                      FAQ
                    </span>
                    <FaqPro
                      className="mx-0 max-w-3xl"
                      defaultOpenFirst
                      emptyText={getText(language, "Nenhuma pergunta encontrada.", "No FAQs match your search.")}
                      items={trajectoryFaq.map((item, index) => ({
                        id: `about-${index}`,
                        question: item.question,
                        answer: item.answer,
                      }))}
                      searchPlaceholder={getText(language, "Buscar perguntas...", "Search FAQs...")}
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div>
                    <span className="mb-4 block text-[11px] uppercase tracking-[0.28em] text-muted-foreground/55">
                      {getText(language, "Continuidade", "Continuity")}
                    </span>
                    <p className="max-w-4xl font-serif text-2xl leading-[1.45] text-foreground lg:text-3xl">
                      {getText(
                        language,
                        "Essa história continua sendo construída com responsabilidade, propósito e visão de longo prazo. Sem pressa de parecer pronta antes da hora.",
                        "This story is still being built with responsibility, purpose and long-term vision. Without rushing to look finished before its time."
                      )}
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reflexao" className="relative scroll-mt-28 overflow-hidden pb-14 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-6xl border-y border-border/20 py-10 lg:py-14">
              <div className="mx-auto max-w-4xl text-center">
                <span className="mb-4 block text-[11px] uppercase tracking-[0.32em] text-muted-foreground/65">
                  {getText(language, "Reflex\u00e3o", "Reflection")}
                </span>
                <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight text-foreground lg:text-5xl">
                  {getText(
                    language,
                    "Construir tamb\u00e9m \u00e9 escolher o que permanece.",
                    "Building also means choosing what remains."
                  )}
                </h2>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.64, ease }}
                  className="mx-auto mt-8 space-y-5"
                >
                  <p className="mx-auto max-w-3xl text-[16px] leading-[1.88] text-muted-foreground">
                    {getText(
                      language,
                      "Olhar para minha trajet\u00f3ria me ensinou que nem toda constru\u00e7\u00e3o precisa ser barulhenta. Algumas decis\u00f5es importantes acontecem no sil\u00eancio, quando escolho estudar mais um pouco, revisar uma ideia, recome\u00e7ar um projeto ou aceitar que uma solu\u00e7\u00e3o ainda n\u00e3o est\u00e1 madura.",
                      "Looking at my path taught me that not every construction needs to be loud. Some important decisions happen quietly, while choosing to study a little more, review an idea, restart a project or accept that a solution is not mature yet."
                    )}
                  </p>
                  <p className="mx-auto max-w-3xl text-[16px] leading-[1.88] text-muted-foreground">
                    {getText(
                      language,
                      "N\u00e3o quero que minha hist\u00f3ria seja lida como uma linha reta. Ela tem pausas, recusas, reconstru\u00e7\u00f5es e escolhas que s\u00f3 fizeram sentido depois. Talvez por isso eu valorize tanto o que permanece. Trabalho bem feito, palavra honrada, conhecimento compartilhado e responsabilidade com quem confia em mim.",
                      "I do not want my story to be read as a straight line. It has pauses, rejections, rebuilds and choices that only made sense later. Maybe that is why I value what remains. Careful work, kept word, shared knowledge and responsibility toward those who trust me."
                    )}
                  </p>
                  <div className="mx-auto mt-8 w-full max-w-[360px] opacity-85">
                    <AnimatedSignature />
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
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
