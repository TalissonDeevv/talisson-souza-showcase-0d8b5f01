import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ShareButtons from "@/components/ui/ShareButtons";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const TechFundamentals = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Fundamentos', 'Arquitetura', 'Lógica', 'Raciocínio', 'Tecnologia']
    : ['Fundamentals', 'Architecture', 'Logic', 'Reasoning', 'Technology'];

  const sections = language === 'pt' ? [
    {
      title: 'Antes da ferramenta, existe o raciocínio',
      content: `O mercado de tecnologia vive uma obsessão crescente por ferramentas, frameworks e linguagens de programação. Novos profissionais entram na área aprendendo a usar tecnologias específicas antes de entender os princípios que dão sustentação a todas elas. O resultado é uma geração de desenvolvedores que sabe operar ferramentas mas não compreende por que essas ferramentas existem, que problemas elas resolvem, e quais são as limitações fundamentais que nenhuma abstração consegue eliminar. Essa inversão de prioridades cria profissionais que são produtivos em cenários previsíveis mas que se tornam completamente perdidos quando enfrentam problemas que não se encaixam nos padrões que aprenderam a replicar.

A lógica por trás dos sistemas não mudou fundamentalmente nas últimas décadas. Dados precisam ser armazenados, recuperados, transformados e transmitidos. Processos precisam ser coordenados, autenticados, autorizados e monitorados. Interfaces precisam representar estado, responder a interações e comunicar feedback. Esses fundamentos são universais e independem da tecnologia utilizada. O desenvolvedor que entende esses princípios pode aprender qualquer ferramenta nova em uma fração do tempo que levaria alguém que só conhece a ferramenta anterior sem entender o que ela abstraía.`
    },
    {
      title: 'O que significa realmente entender como um sistema funciona',
      content: `Entender como um sistema funciona vai muito além de saber qual rota chama qual controller, ou qual componente renderiza qual tela. Significa compreender o fluxo completo de uma requisição desde o momento em que o usuário interage com a interface até o momento em que a resposta retorna ao navegador. Significa entender como os dados trafegam pela rede, como são serializados e desserializados, como o servidor processa a requisição, como o banco de dados armazena e recupera informações, como o cache opera, como a autenticação e autorização funcionam em cada camada, e como cada uma dessas etapas pode falhar.

Esse entendimento profundo não é um luxo acadêmico. É o que permite diagnosticar problemas complexos, tomar decisões arquiteturais fundamentadas, avaliar trade-offs com clareza e comunicar soluções técnicas com precisão. O desenvolvedor que opera apenas na superfície, que sabe clicar nos botões certos mas não entende o que acontece por baixo, está permanentemente limitado na sua capacidade de resolver problemas que saiam do script. E no desenvolvimento de software profissional, os problemas que realmente importam são justamente os que saem do script.`
    },
    {
      title: 'Base lógica: estruturas de dados e algoritmos no mundo real',
      content: `Estruturas de dados e algoritmos não são conceitos abstratos reservados para entrevistas de emprego em grandes empresas de tecnologia. São ferramentas de pensamento que afetam diretamente a qualidade do código que um desenvolvedor produz todos os dias. A escolha entre usar uma lista ou um mapa, entre implementar uma busca linear ou indexada, entre processar dados de forma síncrona ou assíncrona, são decisões que impactam a performance, a escalabilidade e a manutenibilidade de qualquer sistema. O desenvolvedor que não entende esses conceitos fundamentais toma essas decisões por instinto ou por cópia, sem compreender as implicações.

O pensamento algorítmico é, em essência, a capacidade de decompor problemas complexos em etapas menores, identificar padrões, e construir soluções que sejam eficientes e corretas. Essa capacidade não se desenvolve aprendendo a sintaxe de uma linguagem ou os métodos de um framework. Ela se desenvolve praticando a resolução de problemas de forma estruturada, entendendo por que certas abordagens são melhores que outras em determinados contextos, e construindo a intuição que permite reconhecer qual ferramenta conceitual é mais adequada para cada situação. Esse tipo de competência é transferível entre qualquer tecnologia e é o que distingue um desenvolvedor que resolve problemas de um desenvolvedor que apenas implementa soluções prescritas.`
    },
    {
      title: 'Arquitetura antes de framework',
      content: `Um dos erros mais recorrentes no desenvolvimento de software moderno é confundir framework com arquitetura. O framework é uma implementação opinada de uma arquitetura. A arquitetura é o conjunto de decisões fundamentais sobre como o sistema é organizado, como os componentes se comunicam, como os dados fluem, e como as responsabilidades são distribuídas. Quando um desenvolvedor aprende um framework sem entender a arquitetura subjacente, ele aprende a seguir convenções sem entender por que essas convenções existem. O resultado é um profissional que consegue construir aplicações dentro do caminho feliz do framework, mas que não sabe o que fazer quando as necessidades do projeto divergem das convenções.

Entender conceitos como separação de responsabilidades, inversão de dependência, encapsulamento, coesão e acoplamento permite ao desenvolvedor avaliar qualquer framework com olhos críticos, adaptar padrões às necessidades específicas do projeto, e tomar decisões que vão além de "é assim que o framework faz". O profissional que entende arquitetura de software é capaz de migrar entre frameworks, linguagens e paradigmas com relativa facilidade, porque ele entende os princípios que são constantes enquanto as implementações mudam. Essa capacidade de adaptação é, a longo prazo, infinitamente mais valiosa do que a proficiência em qualquer ferramenta específica.`
    },
    {
      title: 'Pensamento estruturado: como abordar problemas com método',
      content: `O pensamento estruturado é a capacidade de abordar problemas de forma metódica, decomponho-os em partes gerenciáveis, identificando dependências e restrições, e construindo soluções que consideram o contexto completo. No desenvolvimento de software, isso se traduz em práticas como definir claramente o problema antes de começar a codificar, mapear os requisitos e restrições, considerar os cenários de falha, planejar a testabilidade da solução, e documentar as decisões tomadas e os motivos por trás delas.

A maioria dos desenvolvedores aborda problemas de forma reativa: recebe uma tarefa, abre o editor, começa a escrever código, e resolve os problemas à medida que aparecem. Essa abordagem funciona para tarefas simples e isoladas, mas se torna catastrófica quando aplicada a problemas complexos que envolvem múltiplos sistemas, dados sensíveis, ou requisitos que interagem de formas não óbvias. O profissional que domina o pensamento estruturado investe tempo no início para entender o problema completamente, e esse investimento se paga em menos retrabalho, menos bugs, menos surpresas em produção, e soluções que são genuinamente robustas em vez de aparentemente funcionais.`
    },
    {
      title: 'Construindo raciocínio técnico sólido: um investimento permanente',
      content: `O investimento em fundamentos não é algo que se faz uma vez e se esquece. É um processo contínuo de aprofundamento que acompanha toda a carreira de um profissional de tecnologia. À medida que a experiência cresce, os mesmos conceitos fundamentais são revisitados com uma compreensão mais profunda, revelando nuances e conexões que não eram visíveis no início. O conceito de cache, por exemplo, é simples na superfície, mas se desdobra em complexidades extraordinárias quando aplicado a sistemas distribuídos, consistência de dados, invalidação e estratégias de warm-up. Cada nível de profundidade revela novos desafios e novas possibilidades.

O desenvolvedor que constrói seu raciocínio técnico sobre uma base sólida de fundamentos está construindo uma carreira resiliente a mudanças tecnológicas. Frameworks surgem e desaparecem, linguagens ganham e perdem popularidade, paradigmas evoluem e se substituem. Mas os princípios de computação, de arquitetura de sistemas, de design de software e de resolução estruturada de problemas permanecem relevantes década após década. O profissional que investe consistentemente nessa base não precisa reinventar sua carreira a cada nova onda tecnológica. Ele simplesmente adapta seus fundamentos sólidos ao novo contexto, com a confiança de quem entende os princípios que sustentam qualquer implementação.`
    },
  ] : [
    {
      title: 'Before the tool, there is reasoning',
      content: `The technology market lives a growing obsession with tools, frameworks, and programming languages. New professionals enter the field learning to use specific technologies before understanding the principles that support all of them. The result is a generation of developers who know how to operate tools but don't understand why those tools exist, what problems they solve, and what fundamental limitations no abstraction can eliminate. This inversion of priorities creates professionals who are productive in predictable scenarios but become completely lost when facing problems that don't fit the patterns they learned to replicate.

The logic behind systems hasn't fundamentally changed in recent decades. Data needs to be stored, retrieved, transformed, and transmitted. Processes need to be coordinated, authenticated, authorized, and monitored. Interfaces need to represent state, respond to interactions, and communicate feedback. These fundamentals are universal and independent of the technology used. The developer who understands these principles can learn any new tool in a fraction of the time it would take someone who only knows the previous tool without understanding what it abstracted.`
    },
    {
      title: 'What it really means to understand how a system works',
      content: `Understanding how a system works goes far beyond knowing which route calls which controller, or which component renders which screen. It means comprehending the complete flow of a request from the moment the user interacts with the interface to the moment the response returns to the browser. It means understanding how data travels through the network, how it's serialized and deserialized, how the server processes the request, how the database stores and retrieves information, how caching operates, how authentication and authorization work at each layer, and how each of these steps can fail.

This deep understanding isn't an academic luxury. It's what enables diagnosing complex problems, making well-founded architectural decisions, evaluating trade-offs clearly, and communicating technical solutions with precision. The developer who operates only on the surface, who knows how to click the right buttons but doesn't understand what happens underneath, is permanently limited in their ability to solve problems that go off-script. And in professional software development, the problems that truly matter are precisely the ones that go off-script.`
    },
    {
      title: 'Logical foundation: data structures and algorithms in the real world',
      content: `Data structures and algorithms aren't abstract concepts reserved for job interviews at large technology companies. They're thinking tools that directly affect the quality of code a developer produces every day. The choice between using a list or a map, between implementing a linear or indexed search, between processing data synchronously or asynchronously, are decisions that impact the performance, scalability, and maintainability of any system. The developer who doesn't understand these fundamental concepts makes these decisions by instinct or by copying, without understanding the implications.

Algorithmic thinking is, in essence, the ability to decompose complex problems into smaller steps, identify patterns, and build solutions that are efficient and correct. This ability isn't developed by learning a language's syntax or a framework's methods. It's developed by practicing structured problem-solving, understanding why certain approaches are better than others in specific contexts, and building the intuition that allows recognizing which conceptual tool is most appropriate for each situation. This type of competency is transferable across any technology and is what distinguishes a developer who solves problems from a developer who merely implements prescribed solutions.`
    },
    {
      title: 'Architecture before framework',
      content: `One of the most recurring errors in modern software development is confusing framework with architecture. The framework is an opinionated implementation of an architecture. Architecture is the set of fundamental decisions about how the system is organized, how components communicate, how data flows, and how responsibilities are distributed. When a developer learns a framework without understanding the underlying architecture, they learn to follow conventions without understanding why those conventions exist. The result is a professional who can build applications within the framework's happy path but doesn't know what to do when project needs diverge from conventions.

Understanding concepts like separation of concerns, dependency inversion, encapsulation, cohesion, and coupling allows the developer to evaluate any framework with critical eyes, adapt patterns to the project's specific needs, and make decisions that go beyond "that's how the framework does it." The professional who understands software architecture is capable of migrating between frameworks, languages, and paradigms with relative ease, because they understand the principles that remain constant while implementations change. This adaptability is, in the long run, infinitely more valuable than proficiency in any specific tool.`
    },
    {
      title: 'Structured thinking: how to approach problems with method',
      content: `Structured thinking is the ability to approach problems methodically, decomposing them into manageable parts, identifying dependencies and constraints, and building solutions that consider the complete context. In software development, this translates into practices like clearly defining the problem before starting to code, mapping requirements and constraints, considering failure scenarios, planning the solution's testability, and documenting decisions made and the reasons behind them.

Most developers approach problems reactively: they receive a task, open the editor, start writing code, and solve problems as they appear. This approach works for simple, isolated tasks but becomes catastrophic when applied to complex problems involving multiple systems, sensitive data, or requirements that interact in non-obvious ways. The professional who masters structured thinking invests time at the beginning to fully understand the problem, and this investment pays off in less rework, fewer bugs, fewer surprises in production, and solutions that are genuinely robust rather than apparently functional.`
    },
    {
      title: 'Building solid technical reasoning: a permanent investment',
      content: `Investing in fundamentals isn't something you do once and forget. It's a continuous process of deepening that accompanies a technology professional's entire career. As experience grows, the same fundamental concepts are revisited with deeper understanding, revealing nuances and connections that weren't visible at the beginning. The concept of caching, for example, is simple on the surface but unfolds into extraordinary complexities when applied to distributed systems, data consistency, invalidation, and warm-up strategies. Each level of depth reveals new challenges and new possibilities.

The developer who builds their technical reasoning on a solid foundation of fundamentals is building a career resilient to technological changes. Frameworks emerge and disappear, languages gain and lose popularity, paradigms evolve and replace each other. But the principles of computing, systems architecture, software design, and structured problem-solving remain relevant decade after decade. The professional who consistently invests in this foundation doesn't need to reinvent their career with each new technological wave. They simply adapt their solid fundamentals to the new context, with the confidence of someone who understands the principles sustaining any implementation.`
    },
  ];

  const articleTitle = getText(language,
    'Fundamentos de Tecnologia: A Lógica Por Trás dos Sistemas',
    'Technology Fundamentals: The Logic Behind Systems'
  );

  return (
    <Layout>
      <SEO
        title={getText(language,
          'Fundamentos de Tecnologia: A Lógica Por Trás dos Sistemas | Talisson Souza',
          'Technology Fundamentals: The Logic Behind Systems | Talisson Souza'
        )}
        description={getText(language,
          'Reflexão sobre a importância dos fundamentos de tecnologia, raciocínio lógico, arquitetura de sistemas e pensamento estruturado antes das ferramentas.',
          'Reflection on the importance of technology fundamentals, logical reasoning, systems architecture, and structured thinking before tools.'
        )}
        canonical={language === 'en' ? '/en-us/articles/tech-fundamentals' : '/artigos/fundamentos-tecnologia'}
        type="article"
        publishedTime="2025-02-14"
        keywords={language === 'pt'
          ? ['fundamentos tecnologia', 'lógica programação', 'arquitetura sistemas', 'pensamento estruturado', 'raciocínio técnico']
          : ['technology fundamentals', 'programming logic', 'systems architecture', 'structured thinking', 'technical reasoning']
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
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{getText(language, '14 de Fevereiro, 2025', 'February 14, 2025')}</span></div>
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{getText(language, '15 min de leitura', '15 min read')}</span></div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (<span key={tag} className="text-xs px-3 py-1.5 rounded-lg border border-border/30 bg-card/50 text-muted-foreground">{tag}</span>))}
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
                    'O domínio de ferramentas sem a compreensão dos fundamentos é uma fragilidade profissional que limita o crescimento e a adaptabilidade. Este artigo explora a importância de construir raciocínio técnico sólido, entender arquitetura antes de framework e abordar problemas com pensamento estruturado.',
                    'Mastering tools without understanding fundamentals is a professional fragility that limits growth and adaptability. This article explores the importance of building solid technical reasoning, understanding architecture before frameworks, and approaching problems with structured thinking.'
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

export default TechFundamentals;
