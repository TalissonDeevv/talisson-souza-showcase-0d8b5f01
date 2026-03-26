import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ShareButtons from "@/components/ui/ShareButtons";
import ArticleAuthorHeader from "@/components/ui/ArticleAuthorHeader";
import ArticleSEOFooter from "@/components/ui/ArticleSEOFooter";
import RelatedArticles from "@/components/ui/RelatedArticles";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const WhatIsFullStack = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Desenvolvimento', 'Full Stack', 'Tecnologia', 'Carreira', 'Estratégia']
    : ['Development', 'Full Stack', 'Technology', 'Career', 'Strategy'];

  const sections = language === 'pt' ? [
    {
      title: 'Além do título no LinkedIn',
      content: `O termo "Full Stack" se popularizou tanto nos últimos anos que perdeu parte do seu significado original. Hoje, é comum ver profissionais com poucos meses de estudo se apresentando como desenvolvedores full stack, empresas anunciando vagas para "full stack júnior", e cursos prometendo formar um full stack em semanas. Essa banalização do termo cria uma confusão que prejudica tanto quem contrata quanto quem está no mercado de trabalho. Ser full stack não é saber um pouco de front-end e um pouco de back-end. É ter a capacidade de entender, projetar e implementar soluções completas, do banco de dados à interface, passando por arquitetura, segurança, performance e deploy. É uma combinação de amplitude técnica com profundidade suficiente para tomar decisões arquiteturais informadas em cada camada do sistema.

Na prática, um desenvolvedor full stack é alguém que consegue pegar um problema de negócio e transformá-lo em uma solução tecnológica funcional sem depender de outra pessoa para completar etapas fundamentais. Isso não significa que ele faça tudo sozinho em projetos complexos, mas significa que ele tem a visão necessária para entender como todas as peças se encaixam e a capacidade técnica para atuar em qualquer uma delas quando necessário. Essa versatilidade é o que torna o perfil tão valioso e, ao mesmo tempo, tão difícil de desenvolver genuinamente.`
    },
    {
      title: 'O que compõe a pilha completa',
      content: `Quando falamos em desenvolvimento full stack, estamos nos referindo a um conjunto amplo de competências que abrange todas as camadas de uma aplicação. No front-end, isso inclui a capacidade de construir interfaces responsivas, acessíveis e performáticas, entendendo não apenas os frameworks e bibliotecas mais utilizados, mas também os fundamentos de HTML, CSS e JavaScript que sustentam tudo. No back-end, envolve o domínio de linguagens de servidor, gerenciamento de bancos de dados relacionais e não-relacionais, construção de APIs, autenticação, autorização e integração com serviços externos. Entre essas duas camadas, existe um território igualmente importante que inclui infraestrutura, deploy, monitoramento, segurança e otimização de performance.

A profundidade necessária em cada uma dessas áreas varia conforme o tipo de projeto e o contexto da equipe. Em uma startup pequena, o full stack pode ser responsável por toda a pilha, do design do banco de dados à estilização dos componentes visuais. Em uma empresa maior, seu papel pode ser mais estratégico, conectando times especializados e garantindo que as decisões tomadas em cada camada sejam coerentes com a arquitetura geral. O que não muda é a necessidade de ter conhecimento real e prático em cada uma dessas áreas, não apenas teórico ou superficial.`
    },
    {
      title: 'A falácia do "saber de tudo"',
      content: `Uma das críticas mais comuns ao conceito de full stack é a ideia de que ninguém pode ser bom em tudo. Essa crítica tem fundamento, mas também revela uma compreensão incorreta do que o full stack realmente significa. Não se trata de ser o melhor especialista em cada tecnologia, mas de ter competência suficiente em cada camada para tomar decisões técnicas fundamentadas e implementar soluções que funcionam. Um full stack sênior sabe quando aprofundar e quando delegar, entende seus limites e busca complementar suas habilidades com as de outros profissionais quando a complexidade exige.

A maturidade técnica de um full stack se manifesta justamente na capacidade de reconhecer onde sua expertise é suficiente e onde precisa de apoio. Em questões de segurança avançada, por exemplo, um full stack competente sabe implementar as práticas fundamentais, mas reconhece quando é necessário envolver um especialista em segurança. O mesmo vale para design de interface, administração de banco de dados em escala, e otimização de infraestrutura. A versatilidade do full stack não elimina a necessidade de especialistas, mas permite que ele funcione como um elo entre diferentes áreas, garantindo coesão técnica e visão sistêmica em projetos de qualquer complexidade.`
    },
    {
      title: 'O valor estratégico para empresas',
      content: `Para empresas, especialmente startups e pequenas e médias empresas, ter um desenvolvedor full stack na equipe pode ser a diferença entre conseguir ou não executar uma ideia. Enquanto equipes maiores podem se dar ao luxo de ter especialistas dedicados para cada camada da aplicação, empresas menores precisam de profissionais que consigam cobrir múltiplas frentes com competência. O full stack oferece exatamente isso: a capacidade de mover-se entre front-end e back-end conforme a demanda, de resolver problemas que cruzam fronteiras entre camadas, e de manter a visão técnica unificada quando a equipe é pequena.

Além disso, o full stack traz uma perspectiva única para discussões de arquitetura e planejamento de produto. Por entender como cada decisão técnica impacta as demais camadas, ele pode antecipar problemas, sugerir soluções mais elegantes e evitar retrabalho que surge quando front-end e back-end são planejados de forma isolada. Em projetos onde a velocidade de execução importa, ter alguém que pode implementar uma funcionalidade de ponta a ponta sem depender de handoffs entre equipes diferentes é uma vantagem competitiva real que se traduz em tempo economizado, menos bugs de integração e maior consistência no produto final.`
    },
    {
      title: 'O caminho para se tornar full stack de verdade',
      content: `Não existe atalho para se tornar um desenvolvedor full stack genuíno. O caminho envolve anos de prática, projetos reais, erros, refatorações e aprendizado contínuo. Começa geralmente com uma especialização em uma das pontas, front-end ou back-end, e vai se expandindo gradualmente à medida que o profissional assume responsabilidades que exigem conhecimento em outras camadas. A teoria é importante, mas é a prática que consolida o conhecimento. Construir projetos completos, do início ao deploy, enfrentar problemas de produção, lidar com escala e entender o ciclo completo de vida de uma aplicação são experiências que nenhum curso substitui.

O desenvolvimento full stack é, acima de tudo, uma mentalidade. É a disposição de não se limitar a uma zona de conforto, de buscar entender como cada parte do sistema funciona e se conecta, e de assumir responsabilidade pela solução como um todo, não apenas pela parte que você mais gosta. Essa mentalidade, combinada com prática consistente e projetos desafiadores, é o que transforma um desenvolvedor em um full stack de verdade. Não é um título que se conquista com um certificado, é uma competência que se constrói ao longo de uma carreira inteira, e que continua evoluindo conforme as tecnologias e os desafios mudam.`
    },
  ] : [
    {
      title: 'Beyond the LinkedIn title',
      content: `The term "Full Stack" has become so popular in recent years that it's lost part of its original meaning. Today, it's common to see professionals with just a few months of study presenting themselves as full stack developers, companies posting jobs for "junior full stack," and courses promising to produce a full stack developer in weeks. This trivialization creates confusion that hurts both those hiring and those in the job market. Being full stack isn't knowing a bit of front-end and a bit of back-end. It's having the ability to understand, design, and implement complete solutions, from database to interface, including architecture, security, performance, and deployment. It's a combination of technical breadth with sufficient depth to make informed architectural decisions at every system layer.

In practice, a full stack developer is someone who can take a business problem and turn it into a functional technological solution without depending on someone else to complete fundamental steps. This doesn't mean they do everything alone on complex projects, but it means they have the vision needed to understand how all pieces fit together and the technical capability to work on any of them when necessary. This versatility is what makes the profile so valuable and, at the same time, so difficult to genuinely develop.`
    },
    {
      title: 'What comprises the complete stack',
      content: `When we talk about full stack development, we're referring to a broad set of competencies spanning all layers of an application. On the front-end, this includes the ability to build responsive, accessible, and performant interfaces, understanding not just the most commonly used frameworks and libraries, but also the fundamentals of HTML, CSS, and JavaScript that underpin everything. On the back-end, it involves mastery of server languages, management of relational and non-relational databases, API construction, authentication, authorization, and integration with external services. Between these two layers, there's an equally important territory that includes infrastructure, deployment, monitoring, security, and performance optimization.

The depth needed in each of these areas varies according to project type and team context. In a small startup, the full stack may be responsible for the entire stack, from database design to visual component styling. In a larger company, their role may be more strategic, connecting specialized teams and ensuring that decisions made at each layer are coherent with the overall architecture. What doesn't change is the need for real, practical knowledge in each of these areas, not just theoretical or superficial.`
    },
    {
      title: 'The fallacy of "knowing everything"',
      content: `One of the most common criticisms of the full stack concept is the idea that nobody can be good at everything. This criticism has merit but also reveals an incorrect understanding of what full stack really means. It's not about being the best specialist in every technology, but about having sufficient competence at each layer to make well-founded technical decisions and implement solutions that work. A senior full stack knows when to go deep and when to delegate, understands their limits, and seeks to complement their skills with those of other professionals when complexity demands it.

A full stack's technical maturity manifests precisely in the ability to recognize where their expertise is sufficient and where they need support. In advanced security matters, for example, a competent full stack knows how to implement fundamental practices but recognizes when a security specialist needs to be involved. The same applies to interface design, database administration at scale, and infrastructure optimization. The full stack's versatility doesn't eliminate the need for specialists but allows them to function as a link between different areas, ensuring technical cohesion and systemic vision in projects of any complexity.`
    },
    {
      title: 'Strategic value for companies',
      content: `For companies, especially startups and small to medium businesses, having a full stack developer on the team can be the difference between being able to execute an idea or not. While larger teams can afford dedicated specialists for each application layer, smaller companies need professionals who can cover multiple fronts competently. The full stack offers exactly this: the ability to move between front-end and back-end as demand requires, to solve problems that cross boundaries between layers, and to maintain unified technical vision when the team is small.

Additionally, the full stack brings a unique perspective to architecture and product planning discussions. By understanding how each technical decision impacts other layers, they can anticipate problems, suggest more elegant solutions, and avoid rework that arises when front-end and back-end are planned in isolation. In projects where execution speed matters, having someone who can implement a feature end-to-end without depending on handoffs between different teams is a real competitive advantage that translates to saved time, fewer integration bugs, and greater consistency in the final product.`
    },
    {
      title: 'The path to becoming truly full stack',
      content: `There's no shortcut to becoming a genuine full stack developer. The path involves years of practice, real projects, mistakes, refactoring, and continuous learning. It usually starts with specialization at one end, front-end or back-end, and gradually expands as the professional takes on responsibilities requiring knowledge in other layers. Theory is important, but practice consolidates knowledge. Building complete projects from start to deployment, facing production problems, dealing with scale, and understanding the complete lifecycle of an application are experiences no course can replace.

Full stack development is, above all, a mindset. It's the willingness to not limit yourself to a comfort zone, to seek understanding of how each part of the system works and connects, and to take responsibility for the solution as a whole, not just the part you like most. This mindset, combined with consistent practice and challenging projects, is what transforms a developer into a true full stack. It's not a title earned with a certificate; it's a competence built over an entire career, one that continues evolving as technologies and challenges change.`
    },
  ];

  const articleTitle = getText(language,
    'O Que é Desenvolvimento Full Stack?',
    'What is Full Stack Development?'
  );

  return (
    <Layout>
      <SEO
        title={getText(language,
          'O Que é Desenvolvimento Full Stack? | Talisson Souza',
          'What is Full Stack Development? | Talisson Souza'
        )}
        description={getText(language,
          'Entenda o que realmente significa ser um desenvolvedor full stack, as competências envolvidas e o valor estratégico desse perfil para empresas e projetos.',
          'Understand what it really means to be a full stack developer, the competencies involved, and the strategic value of this profile for companies and projects.'
        )}
        canonical={language === 'en' ? '/en-us/articles/full-stack-development' : '/artigos/desenvolvimento-full-stack'}
        type="article"
        publishedTime="2025-02-12"
        keywords={language === 'pt'
          ? ['desenvolvimento full stack', 'full stack developer', 'o que é full stack', 'programador full stack']
          : ['full stack development', 'full stack developer', 'what is full stack', 'full stack programmer']
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
              <AnimatedTitle variant="hero" as="h1" className="mb-4">{articleTitle}</AnimatedTitle>              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (<span key={tag} className="text-xs px-3 py-1.5 rounded-lg border border-border/30 bg-card/50 text-muted-foreground">{tag}</span>))}
              </div>
              <ArticleAuthorHeader date="2025-02-12" readingTime={12} />

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
                    'Ser full stack vai muito além de saber front-end e back-end. Este artigo explora o que realmente define um desenvolvedor full stack, desmistifica o título e discute o valor real desse perfil no mercado de tecnologia.',
                    'Being full stack goes far beyond knowing front-end and back-end. This article explores what truly defines a full stack developer, demystifies the title, and discusses the real value of this profile in the tech market.'
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
            <RelatedArticles currentArticleId="full-stack-development" />
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

export default WhatIsFullStack;