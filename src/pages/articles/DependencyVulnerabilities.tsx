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

const DependencyVulnerabilities = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Segurança', 'Dependências', 'npm', 'Responsabilidade', 'Infraestrutura']
    : ['Security', 'Dependencies', 'npm', 'Responsibility', 'Infrastructure'];

  const sections = language === 'pt' ? [
    {
      title: 'O risco invisível de um simples npm install',
      content: `Existe um gesto que todo desenvolvedor repete dezenas de vezes por semana sem pensar duas vezes: instalar uma dependência. Um comando no terminal, alguns segundos de espera, e pronto. O pacote está no projeto, o código funciona, e o profissional segue para a próxima tarefa. O que raramente se discute é que esse gesto aparentemente inofensivo pode ser a porta de entrada para vulnerabilidades graves, vazamento de dados, execução de código malicioso e comprometimento total da aplicação. A superficialidade com que a maioria dos desenvolvedores trata a instalação de pacotes é proporcional à gravidade dos incidentes que essa prática negligente pode causar.

A história recente da indústria de software está repleta de casos que ilustram esse risco. Bibliotecas populares foram comprometidas por mantenedores insatisfeitos, pacotes com nomes similares a bibliotecas legítimas foram publicados com código malicioso, e dependências transitivas introduziram vulnerabilidades em milhões de projetos sem que ninguém percebesse por meses. O ecossistema de pacotes abertos, que é a base da produtividade moderna em desenvolvimento, é também uma superfície de ataque massiva que poucos profissionais tratam com a seriedade necessária.`
    },
    {
      title: 'A cadeia de confiança que ninguém audita',
      content: `Quando um desenvolvedor instala um pacote, ele não está instalando apenas aquele pacote. Está instalando toda a árvore de dependências transitivas que aquele pacote carrega consigo. Um único pacote pode trazer consigo dezenas, às vezes centenas de subdependências, cada uma mantida por um desenvolvedor ou equipe diferente, com práticas de segurança, motivações e níveis de comprometimento completamente distintos. O desenvolvedor que confia cegamente nessa cadeia está delegando a segurança do seu projeto a dezenas de desconhecidos sem qualquer verificação.

O problema se agrava quando consideramos que muitas dessas dependências transitivas são mantidas por desenvolvedores individuais, sem financiamento, sem revisão de código por terceiros, e frequentemente sem tempo ou incentivo para manter práticas rigorosas de segurança. Um único mantenedor que perde o acesso à sua conta, que decide sabotar o próprio projeto por frustração, ou que simplesmente abandona a manutenção, pode criar uma vulnerabilidade que se propaga silenciosamente por milhares de projetos ao redor do mundo. A confiança implícita que depositamos nessa cadeia é uma das maiores fragilidades estruturais do desenvolvimento moderno.`
    },
    {
      title: 'Responsabilidade do desenvolvedor na escolha de dependências',
      content: `A decisão de incluir uma dependência em um projeto deveria ser tratada com o mesmo rigor que a decisão de contratar um fornecedor para uma empresa. Antes de adicionar qualquer pacote, o desenvolvedor responsável deveria avaliar a reputação do mantenedor, a frequência de atualizações, o número de dependências transitivas, a existência de políticas de segurança, a cobertura de testes, e o histórico de vulnerabilidades reportadas. Na prática, a maioria dos desenvolvedores avalia apenas se o pacote resolve o problema imediato e se tem um número razoável de downloads semanais.

Essa negligência não é apenas uma falha técnica. É uma falha de responsabilidade profissional. O desenvolvedor que introduz uma dependência vulnerável em um projeto que manipula dados de usuários reais está expondo pessoas a riscos que elas nem sabem que existem. A responsabilidade pela segurança do software não termina no código que você escreve. Ela se estende a todo código que você decide incluir no projeto, independentemente de quem o escreveu. Tratar dependências como commodities descartáveis é uma postura que reflete imaturidade profissional e desconhecimento da gravidade das consequências.`
    },
    {
      title: 'A cultura de atualização como prática de segurança',
      content: `Manter dependências atualizadas não é uma tarefa burocrática. É uma prática de segurança fundamental que deveria fazer parte da rotina de qualquer projeto profissional. Vulnerabilidades são descobertas e corrigidas constantemente, e cada dia que um projeto permanece com uma versão desatualizada é um dia a mais de exposição a riscos conhecidos e documentados. A resistência à atualização, motivada pelo medo de quebrar funcionalidades existentes, é compreensível mas não justificável. Se a atualização de dependências é arriscada, isso é um sintoma de problemas arquiteturais mais profundos no projeto, não um argumento contra a atualização.

O monitoramento contínuo de vulnerabilidades deveria ser tão natural quanto o monitoramento de performance ou de erros em produção. Ferramentas de auditoria automatizada existem em praticamente todos os ecossistemas modernos e podem ser integradas ao processo de desenvolvimento com esforço mínimo. O desenvolvedor que ignora alertas de segurança em suas dependências está fazendo uma escolha deliberada de aceitar riscos que poderiam ser mitigados. Essa escolha, quando afeta dados e operações de terceiros, ultrapassa o limite da preferência pessoal e entra no território da negligência profissional.`
    },
    {
      title: 'Acompanhar a stack é obrigação, não diferencial',
      content: `O profissional que trabalha com uma determinada tecnologia tem a obrigação de acompanhar as notícias, atualizações e incidentes relacionados àquela stack. Quando uma vulnerabilidade crítica é descoberta em uma biblioteca amplamente utilizada, a informação se espalha rapidamente em canais especializados, fóruns técnicos e redes profissionais. O desenvolvedor que não está atento a esses canais só descobre o problema quando já foi explorado, quando o cliente reporta uma falha, ou quando uma auditoria externa expõe a vulnerabilidade meses depois de ela ter sido publicada.

Acompanhar a evolução da sua stack não deveria ser tratado como um diferencial competitivo. Deveria ser considerado um requisito básico de competência profissional. Assim como um médico precisa se manter atualizado sobre novos protocolos e descobertas na sua área, o desenvolvedor precisa estar ciente das mudanças, riscos e melhores práticas do ecossistema em que atua. A mentalidade de que "se funciona, não mexo" é incompatível com um ambiente onde novas vulnerabilidades são descobertas diariamente e onde a complexidade das aplicações cresce exponencialmente a cada ano.`
    },
    {
      title: 'Mentalidade preventiva: segurança como cultura, não como reação',
      content: `A abordagem mais madura para segurança em projetos de software é a preventiva. Isso significa incorporar práticas de segurança desde o início do projeto, não como uma camada adicionada após a conclusão do desenvolvimento. Avaliar dependências antes de instalá-las, configurar pipelines de auditoria automatizada, definir políticas claras sobre versionamento e atualização, e educar toda a equipe sobre riscos de supply chain são investimentos que custam pouco quando implementados cedo e que custam enormemente quando negligenciados.

A segurança no desenvolvimento de software não é um problema exclusivamente técnico. É um problema de cultura, de mentalidade e de maturidade profissional. O desenvolvedor que trata cada dependência como uma decisão de risco, que monitora ativamente o estado de segurança do seu projeto, e que se mantém informado sobre as ameaças relevantes à sua stack está construindo software com responsabilidade. Essa postura não elimina todos os riscos, porque isso é impossível, mas reduz dramaticamente a superfície de ataque e demonstra o tipo de comprometimento profissional que distingue um desenvolvedor sênior de um desenvolvedor que apenas acumulou anos de experiência sem evoluir sua mentalidade sobre responsabilidade e qualidade.`
    },
  ] : [
    {
      title: 'The invisible risk of a simple npm install',
      content: `There's a gesture every developer repeats dozens of times a week without thinking twice: installing a dependency. A command in the terminal, a few seconds of waiting, and done. The package is in the project, the code works, and the professional moves on to the next task. What is rarely discussed is that this seemingly harmless gesture can be the gateway to serious vulnerabilities, data leaks, malicious code execution, and complete application compromise. The superficiality with which most developers treat package installation is proportional to the severity of the incidents this negligent practice can cause.

The recent history of the software industry is full of cases illustrating this risk. Popular libraries were compromised by dissatisfied maintainers, packages with names similar to legitimate libraries were published with malicious code, and transitive dependencies introduced vulnerabilities into millions of projects without anyone noticing for months. The open package ecosystem, which is the foundation of modern development productivity, is also a massive attack surface that few professionals treat with the necessary seriousness.`
    },
    {
      title: 'The chain of trust nobody audits',
      content: `When a developer installs a package, they're not just installing that package. They're installing the entire tree of transitive dependencies that package carries with it. A single package can bring dozens, sometimes hundreds of sub-dependencies, each maintained by a different developer or team, with completely different security practices, motivations, and levels of commitment. The developer who blindly trusts this chain is delegating their project's security to dozens of strangers without any verification.

The problem worsens when we consider that many of these transitive dependencies are maintained by individual developers, without funding, without third-party code review, and frequently without the time or incentive to maintain rigorous security practices. A single maintainer who loses access to their account, decides to sabotage their own project out of frustration, or simply abandons maintenance, can create a vulnerability that silently propagates through thousands of projects worldwide. The implicit trust we place in this chain is one of the greatest structural weaknesses of modern development.`
    },
    {
      title: 'Developer responsibility in choosing dependencies',
      content: `The decision to include a dependency in a project should be treated with the same rigor as the decision to hire a supplier for a company. Before adding any package, the responsible developer should evaluate the maintainer's reputation, update frequency, number of transitive dependencies, existence of security policies, test coverage, and history of reported vulnerabilities. In practice, most developers only assess whether the package solves the immediate problem and has a reasonable number of weekly downloads.

This negligence is not just a technical failure. It's a failure of professional responsibility. The developer who introduces a vulnerable dependency into a project that handles real user data is exposing people to risks they don't even know exist. The responsibility for software security doesn't end with the code you write. It extends to all code you decide to include in the project, regardless of who wrote it. Treating dependencies as disposable commodities reflects professional immaturity and ignorance of the severity of the consequences.`
    },
    {
      title: 'Update culture as a security practice',
      content: `Keeping dependencies updated is not a bureaucratic task. It's a fundamental security practice that should be part of the routine of any professional project. Vulnerabilities are discovered and fixed constantly, and every day a project remains with an outdated version is another day of exposure to known and documented risks. Resistance to updating, motivated by fear of breaking existing functionality, is understandable but not justifiable. If updating dependencies is risky, that's a symptom of deeper architectural problems in the project, not an argument against updating.

Continuous vulnerability monitoring should be as natural as performance or production error monitoring. Automated audit tools exist in virtually every modern ecosystem and can be integrated into the development process with minimal effort. The developer who ignores security alerts in their dependencies is making a deliberate choice to accept risks that could be mitigated. This choice, when it affects third-party data and operations, goes beyond personal preference and enters the territory of professional negligence.`
    },
    {
      title: 'Following your stack is an obligation, not a differentiator',
      content: `The professional who works with a particular technology has an obligation to follow the news, updates, and incidents related to that stack. When a critical vulnerability is discovered in a widely used library, information spreads rapidly through specialized channels, technical forums, and professional networks. The developer who isn't paying attention to these channels only discovers the problem when it's already been exploited, when the client reports a failure, or when an external audit exposes the vulnerability months after it was published.

Following the evolution of your stack shouldn't be treated as a competitive differentiator. It should be considered a basic requirement of professional competence. Just as a doctor needs to stay updated on new protocols and discoveries in their field, the developer needs to be aware of changes, risks, and best practices in the ecosystem they work in. The mentality of "if it works, don't touch it" is incompatible with an environment where new vulnerabilities are discovered daily and where application complexity grows exponentially every year.`
    },
    {
      title: 'Preventive mindset: security as culture, not reaction',
      content: `The most mature approach to software project security is the preventive one. This means incorporating security practices from the beginning of the project, not as a layer added after development is complete. Evaluating dependencies before installing them, configuring automated audit pipelines, defining clear policies on versioning and updating, and educating the entire team about supply chain risks are investments that cost little when implemented early and cost enormously when neglected.

Security in software development is not an exclusively technical problem. It's a problem of culture, mindset, and professional maturity. The developer who treats each dependency as a risk decision, who actively monitors their project's security state, and who stays informed about threats relevant to their stack is building software with responsibility. This posture doesn't eliminate all risks, because that's impossible, but it dramatically reduces the attack surface and demonstrates the kind of professional commitment that distinguishes a senior developer from one who merely accumulated years of experience without evolving their mindset about responsibility and quality.`
    },
  ];

  const articleTitle = getText(language,
    'Vulnerabilidade ao Instalar Dependências: O Risco que Ninguém Leva a Sério',
    'Vulnerability When Installing Dependencies: The Risk Nobody Takes Seriously'
  );

  return (
    <Layout>
      <SEO
        title={getText(language,
          'Vulnerabilidade ao Instalar Dependências: O Risco que Ninguém Leva a Sério | Talisson Souza',
          'Vulnerability When Installing Dependencies: The Risk Nobody Takes Seriously | Talisson Souza'
        )}
        description={getText(language,
          'Análise sobre os riscos de segurança ao instalar dependências em projetos de software, responsabilidade do desenvolvedor e mentalidade preventiva.',
          'Analysis on security risks when installing dependencies in software projects, developer responsibility, and preventive mindset.'
        )}
        canonical={language === 'en' ? '/en-us/articles/dependency-vulnerabilities' : '/artigos/vulnerabilidade-dependencias'}
        type="article"
        publishedTime="2025-02-14"
        keywords={language === 'pt'
          ? ['vulnerabilidade npm', 'segurança dependências', 'supply chain attack', 'auditoria pacotes', 'segurança software']
          : ['npm vulnerability', 'dependency security', 'supply chain attack', 'package audit', 'software security']
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
                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{getText(language, '16 min de leitura', '16 min read')}</span></div>
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
                    'A instalação de dependências é um dos atos mais rotineiros e, ao mesmo tempo, mais negligenciados no desenvolvimento de software. Este artigo analisa os riscos reais de segurança, a responsabilidade do desenvolvedor na escolha de pacotes e a importância de uma mentalidade preventiva para proteger projetos e usuários.',
                    'Installing dependencies is one of the most routine and, at the same time, most neglected acts in software development. This article analyzes the real security risks, the developer\'s responsibility in choosing packages, and the importance of a preventive mindset to protect projects and users.'
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

export default DependencyVulnerabilities;
