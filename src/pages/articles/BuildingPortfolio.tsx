import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ShareButtons from "@/components/ui/ShareButtons";
import ArticleSEOFooter from "@/components/ui/ArticleSEOFooter";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { tagToSlug } from "@/data/articles";

const BuildingPortfolio = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Portfólio', 'Carreira', 'Posicionamento', 'Estratégia', 'Profissionalismo']
    : ['Portfolio', 'Career', 'Positioning', 'Strategy', 'Professionalism'];

  const tagBasePath = language === 'en' ? '/en-us/articles/tag' : '/artigos/tag';

  const sections = language === 'pt' ? [
    {
      title: 'O problema dos portfólios que não comunicam valor',
      content: `A maioria dos portfólios de desenvolvedores comete o mesmo erro fundamental: apresenta uma lista de projetos sem contexto, sem narrativa e sem demonstração clara do valor entregue. Repositórios no GitHub com nomes genéricos, projetos de tutorial replicados sem personalização, e páginas com capturas de tela estáticas que não explicam nada sobre o processo de tomada de decisão. Esse tipo de portfólio não comunica competência profissional. Comunica que o desenvolvedor sabe seguir instruções, o que é uma competência básica, não um diferencial.

O portfólio eficaz não é uma galeria de screenshots. É uma ferramenta de comunicação estratégica que demonstra como você pensa, como resolve problemas, como toma decisões técnicas e quais resultados concretos você gera. Cada projeto apresentado deveria responder a três perguntas fundamentais: qual era o problema? Qual foi a solução escolhida e por quê? Qual foi o impacto mensurável? Sem essas respostas, o portfólio é apenas uma lista de exercícios técnicos que não diferencia seu autor de milhares de outros desenvolvedores que fizeram os mesmos tutoriais.`
    },
    {
      title: 'Projetos reais versus projetos de demonstração',
      content: `Existe uma diferença qualitativa enorme entre um projeto construído para resolver um problema real e um projeto construído apenas para demonstrar uma habilidade técnica. O projeto real carrega consigo restrições, trade-offs, decisões difíceis e resultados mensuráveis. Ele demonstra maturidade profissional porque exigiu do desenvolvedor algo mais do que saber codificar: exigiu entender contexto, lidar com limitações, negociar prioridades e entregar valor dentro de condições imperfeitas.

Isso não significa que projetos pessoais ou experimentais não têm lugar em um portfólio. Significa que eles precisam ser apresentados com a mesma seriedade e profundidade que um projeto profissional. Um projeto pessoal que foi construído para explorar uma arquitetura específica, que documentou as decisões tomadas e os aprendizados obtidos, que apresenta análise crítica do que funcionou e do que poderia ser melhorado, tem muito mais valor do que um projeto profissional apresentado como uma linha no currículo sem qualquer contexto. A qualidade da apresentação reflete a qualidade do pensamento por trás do trabalho.`
    },
    {
      title: 'A narrativa como diferencial competitivo',
      content: `Todo projeto tem uma história. O contexto em que surgiu, o problema que motivou sua criação, os obstáculos encontrados durante o desenvolvimento, as decisões técnicas que definiram sua arquitetura, os resultados alcançados. Essa história é o que torna um projeto memorável e diferenciado. O desenvolvedor que sabe contar essa história de forma estruturada e envolvente se destaca naturalmente, porque demonstra não apenas competência técnica, mas capacidade de comunicação e pensamento estratégico.

A narrativa eficaz de um projeto não é um relato cronológico do que foi feito. É uma estrutura argumentativa que conecta problema, solução e resultado de forma lógica e convincente. Ela começa pelo impacto, não pela tecnologia. Ela explica por que determinadas escolhas foram feitas, não apenas quais foram. Ela reconhece limitações e trade-offs, demonstrando maturidade analítica. Essa abordagem narrativa transforma projetos técnicos em demonstrações de competência profissional completa, elevando o portfólio de uma lista de habilidades para uma prova de capacidade.`
    },
    {
      title: 'Profundidade versus quantidade',
      content: `Um dos erros mais comuns na construção de portfólios é a busca por quantidade. Desenvolvedores preenchem seus perfis com dezenas de repositórios, muitos deles incompletos, sem documentação e sem qualquer explicação do contexto. Essa abordagem é contraproducente. Um recrutador ou cliente que visita um portfólio com vinte projetos superficiais não consegue identificar em qual deles o desenvolvedor realmente investiu esforço significativo. A abundância de projetos fracos dilui o impacto dos projetos fortes.

A estratégia mais eficaz é selecionar três a cinco projetos que realmente representem seu melhor trabalho e investir profundamente na sua apresentação. Cada projeto selecionado deveria ter documentação detalhada, explicação das decisões técnicas, análise dos resultados e reflexão sobre os aprendizados. Essa curadoria demonstra discernimento e capacidade de priorização, duas qualidades altamente valorizadas por quem avalia profissionais. Um portfólio enxuto e profundo comunica muito mais competência do que um portfólio extenso e superficial.`
    },
    {
      title: 'Documentação como demonstração de maturidade',
      content: `A forma como um desenvolvedor documenta seus projetos revela tanto sobre sua maturidade profissional quanto o código em si. Um README bem estruturado, com descrição clara do projeto, instruções de instalação, explicação da arquitetura e decisões de design, demonstra que o profissional pensa além do código. Demonstra que ele se preocupa com quem vai ler, usar ou dar continuidade ao trabalho. Essa preocupação com o próximo é uma qualidade que empresas valorizam profundamente.

A documentação eficaz não precisa ser extensa. Precisa ser clara, organizada e útil. Um diagrama de arquitetura simples pode comunicar mais do que páginas de texto descritivo. Uma seção de "decisões técnicas" que explica por que determinado banco de dados foi escolhido, ou por que determinada biblioteca foi descartada, demonstra profundidade de análise que impressiona avaliadores técnicos. A documentação não é uma tarefa burocrática posterior ao desenvolvimento. É parte integral do processo profissional e uma das formas mais eficazes de demonstrar competência.`
    },
    {
      title: 'O portfólio como extensão da identidade profissional',
      content: `O portfólio ideal não é apenas uma coleção de projetos. É uma extensão coerente da identidade profissional do desenvolvedor. Ele comunica não apenas o que o profissional sabe fazer, mas como ele pensa, quais são seus valores, qual é seu nível de comprometimento com qualidade. A consistência visual, a qualidade da escrita, a organização da informação, tudo isso compõe uma impressão que vai muito além das competências técnicas listadas.

Construir um portfólio com essa intenção exige auto-reflexão honesta. Quais são os projetos que melhor representam quem você é como profissional? Quais demonstram as competências que você quer que o mercado associe ao seu nome? Quais contam histórias que você tem orgulho de compartilhar? Essa curadoria consciente transforma o portfólio de uma obrigação burocrática em uma ferramenta poderosa de posicionamento profissional. O desenvolvedor que trata seu portfólio com a mesma seriedade com que trata seu código está investindo na construção de uma reputação que abrirá portas ao longo de toda a sua carreira.`
    },
  ] : [
    {
      title: 'The problem with portfolios that don\'t communicate value',
      content: `Most developer portfolios make the same fundamental mistake: they present a list of projects without context, without narrative, and without clear demonstration of the value delivered. GitHub repositories with generic names, replicated tutorial projects without personalization, and pages with static screenshots that explain nothing about the decision-making process. This type of portfolio doesn't communicate professional competence. It communicates that the developer knows how to follow instructions, which is a basic competency, not a differentiator.

An effective portfolio is not a screenshot gallery. It's a strategic communication tool that demonstrates how you think, how you solve problems, how you make technical decisions, and what concrete results you generate. Each presented project should answer three fundamental questions: what was the problem? What was the chosen solution and why? What was the measurable impact? Without these answers, the portfolio is just a list of technical exercises that doesn't differentiate its author from thousands of other developers who completed the same tutorials.`
    },
    {
      title: 'Real projects versus demonstration projects',
      content: `There's an enormous qualitative difference between a project built to solve a real problem and a project built solely to demonstrate a technical skill. The real project carries constraints, trade-offs, difficult decisions, and measurable results. It demonstrates professional maturity because it required the developer to do something beyond knowing how to code: understanding context, dealing with limitations, negotiating priorities, and delivering value under imperfect conditions.

This doesn't mean personal or experimental projects have no place in a portfolio. It means they need to be presented with the same seriousness and depth as a professional project. A personal project built to explore a specific architecture, that documented the decisions made and lessons learned, that presents critical analysis of what worked and what could be improved, has much more value than a professional project presented as a line on a resume without any context. The quality of presentation reflects the quality of thinking behind the work.`
    },
    {
      title: 'Narrative as a competitive differentiator',
      content: `Every project has a story. The context in which it emerged, the problem that motivated its creation, the obstacles encountered during development, the technical decisions that defined its architecture, the results achieved. This story is what makes a project memorable and differentiated. The developer who can tell this story in a structured and engaging way naturally stands out, because they demonstrate not only technical competence but communication ability and strategic thinking.

An effective project narrative is not a chronological account of what was done. It's an argumentative structure that logically and convincingly connects problem, solution, and result. It starts with impact, not technology. It explains why certain choices were made, not just what they were. It acknowledges limitations and trade-offs, demonstrating analytical maturity. This narrative approach transforms technical projects into demonstrations of complete professional competence, elevating the portfolio from a list of skills to proof of capability.`
    },
    {
      title: 'Depth versus quantity',
      content: `One of the most common mistakes in portfolio building is the pursuit of quantity. Developers fill their profiles with dozens of repositories, many of them incomplete, without documentation, and without any context explanation. This approach is counterproductive. A recruiter or client visiting a portfolio with twenty superficial projects can't identify which ones the developer actually invested significant effort in. The abundance of weak projects dilutes the impact of strong ones.

The most effective strategy is to select three to five projects that truly represent your best work and invest deeply in their presentation. Each selected project should have detailed documentation, explanation of technical decisions, results analysis, and reflection on learnings. This curation demonstrates discernment and prioritization ability, two qualities highly valued by those evaluating professionals. A lean and deep portfolio communicates much more competence than an extensive and superficial one.`
    },
    {
      title: 'Documentation as a demonstration of maturity',
      content: `How a developer documents their projects reveals as much about their professional maturity as the code itself. A well-structured README with clear project description, installation instructions, architecture explanation, and design decisions demonstrates that the professional thinks beyond code. It shows they care about who will read, use, or continue the work. This concern for others is a quality companies deeply value.

Effective documentation doesn't need to be extensive. It needs to be clear, organized, and useful. A simple architecture diagram can communicate more than pages of descriptive text. A "technical decisions" section explaining why a particular database was chosen, or why a certain library was discarded, demonstrates depth of analysis that impresses technical evaluators. Documentation is not a bureaucratic task after development. It's an integral part of the professional process and one of the most effective ways to demonstrate competence.`
    },
    {
      title: 'The portfolio as an extension of professional identity',
      content: `The ideal portfolio is not just a collection of projects. It's a coherent extension of the developer's professional identity. It communicates not only what the professional can do, but how they think, what their values are, what their level of commitment to quality is. Visual consistency, writing quality, information organization, all of this composes an impression that goes far beyond the technical competencies listed.

Building a portfolio with this intention requires honest self-reflection. Which projects best represent who you are as a professional? Which demonstrate the competencies you want the market to associate with your name? Which tell stories you're proud to share? This conscious curation transforms the portfolio from a bureaucratic obligation into a powerful professional positioning tool. The developer who treats their portfolio with the same seriousness they treat their code is investing in building a reputation that will open doors throughout their entire career.`
    },
  ];

  const articleTitle = getText(language,
    'Como Construir Portfólio com Projetos Relevantes',
    'How to Build a Portfolio with Relevant Projects'
  );

  return (
    <Layout>
      <SEO
        title={getText(language,
          'Como Construir Portfólio com Projetos Relevantes | Talisson Souza',
          'How to Build a Portfolio with Relevant Projects | Talisson Souza'
        )}
        description={getText(language,
          'Guia estratégico sobre como construir um portfólio que demonstre valor real, não apenas quantidade de repositórios.',
          'Strategic guide on building a portfolio that demonstrates real value, not just repository count.'
        )}
        canonical={language === 'en' ? '/en-us/articles/building-portfolio' : '/artigos/construir-portfolio'}
        type="article"
        publishedTime="2025-02-15"
        keywords={language === 'pt'
          ? ['portfolio desenvolvedor', 'construir portfolio', 'projetos relevantes', 'posicionamento profissional', 'carreira ti']
          : ['developer portfolio', 'build portfolio', 'relevant projects', 'professional positioning', 'it career']
        }
      />

      <section className="pt-20 pb-8 lg:pt-24 lg:pb-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link to={language === 'en' ? '/en-us/articles' : '/artigos'} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors duration-300">
              <ArrowLeft className="w-4 h-4" />
              {getText(language, 'Voltar aos artigos', 'Back to articles')}
            </Link>
            <div className="max-w-4xl">
              <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-4 font-medium">
                {getText(language, 'Artigo', 'Article')}
              </motion.span>
              <AnimatedTitle variant="hero" as="h1" className="mb-4">{articleTitle}</AnimatedTitle>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{getText(language, '15 de Fevereiro, 2025', 'February 15, 2025')}</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{getText(language, '14 min de leitura', '14 min read')}</span></div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <Link key={tag} to={`${tagBasePath}/${tagToSlug(tag)}`} className="text-xs px-3 py-1.5 rounded-lg border border-border/30 bg-card/50 text-muted-foreground hover:text-foreground hover:border-border/50 transition-all duration-200">
                    {tag}
                  </Link>
                ))}
              </div>
              <ShareButtons title={articleTitle} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-10 lg:py-12 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="mb-16 p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm">
                <p className="text-base text-foreground/90 leading-[1.9]">
                  {getText(language,
                    'Um portfólio bem construído é mais do que uma coleção de projetos. É uma ferramenta estratégica de posicionamento profissional que demonstra como você pensa, resolve problemas e entrega valor. Este artigo analisa o que diferencia portfólios que geram oportunidades daqueles que passam despercebidos.',
                    'A well-built portfolio is more than a collection of projects. It\'s a strategic professional positioning tool that demonstrates how you think, solve problems, and deliver value. This article analyzes what differentiates portfolios that generate opportunities from those that go unnoticed.'
                  )}
                </p>
              </div>
            </ScrollReveal>
            <div className="space-y-12">
              {sections.map((section, index) => (
                <ScrollReveal key={index} delay={0.05}>
                  <article className="relative">
                    <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6 leading-tight">{section.title}</h2>
                    <div className="text-base text-muted-foreground leading-[1.9] whitespace-pre-line">{section.content}</div>
                    {index < sections.length - 1 && (<div className="mt-12 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />)}
                  </article>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-border/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-muted-foreground">{getText(language, 'Gostou do artigo? Compartilhe!', 'Enjoyed the article? Share it!')}</p>
                <ShareButtons title={articleTitle} />
              </div>
            </div>
            <ArticleSEOFooter />
            <ScrollReveal>
              <div className="mt-20 pt-10 border-t border-border/30">
                <div className="flex flex-col items-center text-center">
                  <p className="text-lg font-serif text-foreground mb-1">Talisson Souza</p>
                  <p className="text-sm text-muted-foreground">CEO {getText(language, 'e Fundador da', 'and Founder of')} Cheetah Solutions Network</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BuildingPortfolio;
