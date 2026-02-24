import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ShareButtons from "@/components/ui/ShareButtons";
import ArticleSEOFooter from "@/components/ui/ArticleSEOFooter";
import RelatedArticles from "@/components/ui/RelatedArticles";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const DiscordBotsGuide = () => {
  const { language } = useTheme();

  const tags = ['Discord', 'Security', 'Management', 'Bots', 'Infrastructure'];

  const sections = language === 'pt' ? [
    {
      title: '1. Falta de responsabilidade de donos e equipes',
      content: `Um dos problemas mais recorrentes em projetos de bots para Discord é a falta de responsabilidade por parte dos próprios donos e das equipes envolvidas. Muitos iniciam projetos sem planejamento, sem definição clara de objetivos e sem compreender o peso das decisões que serão tomadas ao longo do caminho.

Quando não existe responsabilidade, as consequências são inevitáveis: dados de usuários ficam expostos, decisões arbitrárias são tomadas sem embasamento técnico, e o projeto perde credibilidade rapidamente. A responsabilidade não é apenas sobre o código, mas sobre cada pessoa que terá contato com o sistema, seus dados e sua experiência.

Donos de projetos precisam entender que liderar um bot é liderar um produto digital. E como tal, exige postura profissional, compromisso com a qualidade e respeito pelos usuários finais.`
    },
    {
      title: '2. Concessão de acessos indevidos e sem critério',
      content: `Conceder acessos administrativos sem critério é uma das falhas mais perigosas em projetos de bots. Muitos donos distribuem permissões elevadas para amigos, conhecidos ou membros da equipe sem avaliar a real necessidade ou o nível de confiança técnica dessas pessoas.

O resultado é previsível: alterações indevidas no código, exclusão acidental de dados, vazamento de tokens e chaves de API, e em casos mais graves, comprometimento total da infraestrutura do bot.

A regra deve ser simples: ninguém recebe acesso além do estritamente necessário para executar sua função. Tokens, chaves de API e credenciais de banco de dados devem ser tratados como informações confidenciais e jamais compartilhados de forma casual.`
    },
    {
      title: '3. Falta de maturidade para lidar com concorrência e exposição',
      content: `Projetos de bots estão inseridos em um ecossistema competitivo. Muitos donos e equipes não possuem maturidade para lidar com a existência de projetos concorrentes, reagindo de forma impulsiva, agressiva ou antiprofissional.

Atitudes como difamar concorrentes, copiar funcionalidades sem agregar valor, ou tentar sabotar outros projetos são sinais claros de imaturidade e prejudicam todo o ecossistema.

A postura correta é focar na qualidade do próprio projeto, aprender com o que o mercado oferece e buscar diferenciação através de inovação genuína e excelência técnica. Projetos maduros não precisam diminuir outros para crescer.`
    },
    {
      title: '4. Falhas de segurança em bots e infraestrutura',
      content: `Segurança deve ser tratada como prioridade desde o primeiro dia de desenvolvimento, não como algo a ser adicionado depois. As falhas mais comuns incluem:

- Armazenamento de tokens e segredos diretamente no código fonte
- Ausência de variáveis de ambiente para configurações sensíveis
- Falta de validação e sanitização de entradas de usuários
- Endpoints de API expostos sem autenticação adequada
- Ausência de rate limiting, permitindo abuso e ataques DDoS
- Logs excessivos que expõem informações sensíveis
- Falta de atualização de dependências com vulnerabilidades conhecidas

Cada um desses pontos pode ser explorado por agentes maliciosos para comprometer o bot, os dados dos usuários e a infraestrutura do servidor. A segurança começa na mentalidade do desenvolvedor e se estende a cada linha de código e cada configuração do ambiente.`
    },
    {
      title: '5. Equipes grandes sem necessidade real',
      content: `Muitos projetos de bots cometem o erro de montar equipes excessivamente grandes sem que haja demanda real para tantas pessoas. Isso gera problemas como:

- Diluição de responsabilidades, onde ninguém sabe exatamente o que é de quem
- Conflitos de comunicação e decisão
- Acessos desnecessários a sistemas e dados sensíveis
- Aumento da superfície de ataque por conta de mais credenciais circulando
- Burocracia desnecessária que atrasa o desenvolvimento

Uma equipe enxuta, com responsabilidades bem definidas, é mais eficiente, segura e produtiva. A qualidade de uma equipe se mede pela competência de seus membros, não pela quantidade.`
    },
    {
      title: '6. Má gestão do bot, do código e dos processos',
      content: `A gestão de um projeto de bot vai muito além de escrever código. Envolve planejamento de releases, controle de versão, documentação, monitoramento de performance, gestão de incidentes e comunicação com a comunidade de usuários.

Projetos sem gestão adequada acumulam dívida técnica rapidamente, perdem a capacidade de evoluir e se tornam frágeis a ponto de qualquer mudança causar falhas em cascata.

Boas práticas de gestão incluem: uso consistente de controle de versão (Git), revisão de código por pares, testes automatizados, documentação atualizada, e processos claros para deploy e rollback.`
    },
    {
      title: '7. Comportamento inadequado do dono e da equipe',
      content: `O comportamento dos responsáveis por um projeto reflete diretamente na imagem e na confiabilidade do bot. Atitudes como arrogância, desrespeito com usuários, abuso de poder em servidores e falta de transparência destroem a reputação de qualquer projeto.

Líderes de projetos de bots precisam entender que estão gerenciando um produto que serve a uma comunidade. A postura deve ser sempre profissional, transparente e respeitosa, independentemente do tamanho do projeto ou da base de usuários.

Feedbacks negativos devem ser recebidos com maturidade e usados como oportunidade de melhoria, não como motivo para retaliação.`
    },
    {
      title: '8. Abuso de poder e decisões sem critério técnico',
      content: `Decisões técnicas devem ser tomadas com base em critérios técnicos, não em preferências pessoais, vaidade ou política interna. Quando donos ou líderes de equipe tomam decisões arbitrárias sem embasamento, o projeto sofre.

Exemplos comuns incluem: escolher tecnologias por modismo, ignorar boas práticas por conveniência, priorizar funcionalidades visíveis em detrimento da segurança, e tomar decisões de arquitetura sem consultar a equipe técnica.

O abuso de poder também se manifesta na forma como acessos e permissões são gerenciados. Donos que usam seu acesso privilegiado para tomar decisões unilaterais sem consulta ou justificativa técnica prejudicam a confiança da equipe e a qualidade do projeto.`
    },
    {
      title: '9. Como manter segurança no bot e nos dados',
      content: `Manter a segurança de um bot é um processo contínuo que exige disciplina e conhecimento. As práticas essenciais incluem:

- Utilizar variáveis de ambiente para todos os segredos e configurações sensíveis
- Implementar autenticação e autorização robustas em todas as APIs
- Aplicar o princípio do menor privilégio em todos os níveis de acesso
- Manter todas as dependências atualizadas e monitorar vulnerabilidades
- Implementar logging e monitoramento para detectar atividades suspeitas
- Realizar backups regulares e testar procedimentos de recuperação
- Criptografar dados sensíveis em repouso e em trânsito
- Conduzir revisões de segurança periódicas no código e na infraestrutura

Segurança não é um destino, é uma jornada. Cada decisão de desenvolvimento deve considerar as implicações de segurança.`
    },
    {
      title: '10. Como estruturar permissões corretas do bot',
      content: `A configuração de permissões de um bot no Discord é um dos aspectos mais críticos e frequentemente negligenciados. A regra fundamental é: a permissão de Administrador não deve ser padrão.

A permissão de Administrador concede controle total sobre o servidor, incluindo a capacidade de excluir canais, banir membros, alterar configurações do servidor e acessar todas as mensagens. Nenhum bot deveria ter esse nível de acesso por padrão.

O princípio do menor privilégio deve ser aplicado rigorosamente:

- Identifique exatamente quais ações o bot precisa executar
- Conceda apenas as permissões específicas para essas ações
- Documente claramente por que cada permissão é necessária
- Revise periodicamente se todas as permissões ainda são necessárias
- Crie comandos de auditoria para verificar as permissões atuais do bot

Má configuração de permissões é causa direta de incidentes graves, incluindo exclusão acidental de dados, vazamento de informações e comprometimento de servidores inteiros.`
    },
    {
      title: '11. Boas práticas para evitar ataques e incidentes',
      content: `A prevenção de ataques e incidentes começa com uma mentalidade de segurança proativa:

- Nunca confie em entrada de usuários sem validação
- Implemente rate limiting em todos os comandos e endpoints
- Use tokens com escopo limitado e rotacione-os regularmente
- Monitore logs em tempo real para detectar padrões anômalos
- Tenha um plano de resposta a incidentes documentado e testado
- Mantenha canais de comunicação seguros para a equipe
- Faça testes de penetração periódicos
- Mantenha um inventário atualizado de todos os acessos e credenciais

A maioria dos ataques bem-sucedidos explora falhas básicas de segurança que poderiam ter sido evitadas com práticas simples e consistentes.`
    },
    {
      title: '12. Como montar uma equipe profissional',
      content: `Uma equipe profissional para um projeto de bot deve ser construída com critério e propósito. Cada membro deve ter um papel claro e responsabilidades bem definidas:

- Defina cargos com descrições claras de responsabilidades e limites de acesso
- Avalie competências técnicas antes de conceder qualquer acesso
- Estabeleça processos de onboarding e offboarding para membros da equipe
- Crie canais de comunicação estruturados e documentados
- Implemente revisão de código obrigatória antes de qualquer merge
- Defina políticas claras sobre uso de credenciais e acessos
- Realize reuniões periódicas de alinhamento e planejamento
- Documente todas as decisões técnicas e seus motivos

Uma equipe pequena e competente sempre será superior a uma equipe grande e desorganizada. Qualidade sobre quantidade, sempre.`
    },
  ] : [
    {
      title: '1. Lack of responsibility from owners and teams',
      content: `One of the most recurring problems in Discord bot projects is the lack of responsibility from the owners themselves and the teams involved. Many start projects without planning, without clear goal definition, and without understanding the weight of the decisions that will be made along the way.

When there is no responsibility, consequences are inevitable: user data becomes exposed, arbitrary decisions are made without technical basis, and the project quickly loses credibility. Responsibility is not just about code, but about every person who will interact with the system, their data, and their experience.

Project owners need to understand that leading a bot is leading a digital product. As such, it requires professional conduct, commitment to quality, and respect for end users.`
    },
    {
      title: '2. Granting undue and uncritical access',
      content: `Granting administrative access without criteria is one of the most dangerous failures in bot projects. Many owners distribute elevated permissions to friends, acquaintances, or team members without assessing the real need or the level of technical trust these people deserve.

The result is predictable: unauthorized code changes, accidental data deletion, token and API key leaks, and in more severe cases, total compromise of the bot's infrastructure.

The rule should be simple: no one receives access beyond what is strictly necessary to perform their function. Tokens, API keys, and database credentials must be treated as confidential information and never shared casually.`
    },
    {
      title: '3. Lack of maturity to deal with competition and exposure',
      content: `Bot projects exist within a competitive ecosystem. Many owners and teams lack the maturity to deal with competing projects, reacting impulsively, aggressively, or unprofessionally.

Attitudes such as defaming competitors, copying features without adding value, or attempting to sabotage other projects are clear signs of immaturity and harm the entire ecosystem.

The correct approach is to focus on your own project's quality, learn from what the market offers, and seek differentiation through genuine innovation and technical excellence. Mature projects don't need to diminish others to grow.`
    },
    {
      title: '4. Security failures in bots and infrastructure',
      content: `Security must be treated as a priority from day one of development, not as something to be added later. The most common failures include:

- Storing tokens and secrets directly in source code
- Absence of environment variables for sensitive configurations
- Lack of input validation and sanitization from users
- API endpoints exposed without proper authentication
- Absence of rate limiting, enabling abuse and DDoS attacks
- Excessive logging that exposes sensitive information
- Failure to update dependencies with known vulnerabilities

Each of these points can be exploited by malicious actors to compromise the bot, user data, and server infrastructure. Security starts with the developer's mindset and extends to every line of code and every environment configuration.`
    },
    {
      title: '5. Oversized teams without real necessity',
      content: `Many bot projects make the mistake of assembling excessively large teams without real demand for so many people. This generates problems such as:

- Dilution of responsibilities, where nobody knows exactly what belongs to whom
- Communication and decision conflicts
- Unnecessary access to sensitive systems and data
- Increased attack surface due to more credentials circulating
- Unnecessary bureaucracy that delays development

A lean team with well-defined responsibilities is more efficient, secure, and productive. A team's quality is measured by its members' competence, not by quantity.`
    },
    {
      title: '6. Poor management of the bot, code, and processes',
      content: `Managing a bot project goes far beyond writing code. It involves release planning, version control, documentation, performance monitoring, incident management, and communication with the user community.

Projects without adequate management accumulate technical debt rapidly, lose the ability to evolve, and become so fragile that any change causes cascading failures.

Good management practices include: consistent use of version control (Git), peer code review, automated testing, updated documentation, and clear processes for deployment and rollback.`
    },
    {
      title: '7. Inappropriate behavior from owner and team',
      content: `The behavior of those responsible for a project directly reflects on the bot's image and reliability. Attitudes such as arrogance, disrespect toward users, abuse of power in servers, and lack of transparency destroy any project's reputation.

Bot project leaders need to understand they are managing a product that serves a community. Their conduct must always be professional, transparent, and respectful, regardless of the project's size or user base.

Negative feedback should be received with maturity and used as an opportunity for improvement, not as a reason for retaliation.`
    },
    {
      title: '8. Abuse of power and decisions without technical criteria',
      content: `Technical decisions should be made based on technical criteria, not personal preferences, vanity, or internal politics. When owners or team leaders make arbitrary decisions without foundation, the project suffers.

Common examples include: choosing technologies based on trends, ignoring best practices for convenience, prioritizing visible features over security, and making architecture decisions without consulting the technical team.

Abuse of power also manifests in how access and permissions are managed. Owners who use their privileged access to make unilateral decisions without consultation or technical justification harm team trust and project quality.`
    },
    {
      title: '9. How to maintain security in the bot and data',
      content: `Maintaining bot security is a continuous process that requires discipline and knowledge. Essential practices include:

- Use environment variables for all secrets and sensitive configurations
- Implement robust authentication and authorization across all APIs
- Apply the principle of least privilege at all access levels
- Keep all dependencies updated and monitor for vulnerabilities
- Implement logging and monitoring to detect suspicious activity
- Perform regular backups and test recovery procedures
- Encrypt sensitive data at rest and in transit
- Conduct periodic security reviews of code and infrastructure

Security is not a destination, it's a journey. Every development decision should consider security implications.`
    },
    {
      title: '10. How to structure correct bot permissions',
      content: `Bot permission configuration in Discord is one of the most critical and frequently neglected aspects. The fundamental rule is: Administrator permission should not be the default.

Administrator permission grants total control over the server, including the ability to delete channels, ban members, change server settings, and access all messages. No bot should have this level of access by default.

The principle of least privilege must be rigorously applied:

- Identify exactly which actions the bot needs to perform
- Grant only the specific permissions for those actions
- Clearly document why each permission is necessary
- Periodically review whether all permissions are still needed
- Create audit commands to verify the bot's current permissions

Poor permission configuration is a direct cause of serious incidents, including accidental data deletion, information leaks, and compromise of entire servers.`
    },
    {
      title: '11. Best practices to prevent attacks and incidents',
      content: `Attack and incident prevention starts with a proactive security mindset:

- Never trust user input without validation
- Implement rate limiting on all commands and endpoints
- Use scoped tokens and rotate them regularly
- Monitor logs in real-time to detect anomalous patterns
- Have a documented and tested incident response plan
- Maintain secure communication channels for the team
- Conduct periodic penetration testing
- Keep an updated inventory of all access and credentials

Most successful attacks exploit basic security flaws that could have been prevented with simple and consistent practices.`
    },
    {
      title: '12. How to build a professional team',
      content: `A professional team for a bot project should be built with criteria and purpose. Each member should have a clear role and well-defined responsibilities:

- Define positions with clear descriptions of responsibilities and access limits
- Assess technical competencies before granting any access
- Establish onboarding and offboarding processes for team members
- Create structured and documented communication channels
- Implement mandatory code review before any merge
- Define clear policies on credential and access usage
- Conduct periodic alignment and planning meetings
- Document all technical decisions and their reasons

A small, competent team will always be superior to a large, disorganized one. Quality over quantity, always.`
    },
  ];

  return (
    <Layout>
      <SEO
        title={getText(language,
          'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord | Talisson Souza',
          'Maturity, Management & Security Guide for Discord Bot Projects | Talisson Souza'
        )}
        description={getText(language,
          'Guia completo sobre maturidade, gestão e segurança em projetos de bots no Discord, abordando boas práticas, permissões, postura profissional e prevenção de falhas graves.',
          'A comprehensive guide on maturity, management and security in Discord bot projects, covering best practices, permissions, professional conduct and prevention of critical failures.'
        )}
        canonical={language === 'en' ? '/en-us/articles/discord-bots' : '/artigos/bots-discord'}
        type="article"
        publishedTime="2025-02-07"
        keywords={language === 'pt'
          ? ['bots discord', 'segurança em bots', 'gestão de bots', 'permissões discord', 'maturidade em projetos', 'desenvolvimento de bots']
          : ['discord bots', 'bot security', 'bot management', 'discord permissions', 'project maturity', 'bot development']
        }
      />

      {/* Hero Section - Blog Post Style */}
      <section className="pt-20 pb-8 lg:pt-24 lg:pb-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <ScrollReveal>
            <Link
              to={language === 'en' ? '/en-us/articles' : '/artigos'}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              {getText(language, 'Voltar aos artigos', 'Back to articles')}
            </Link>

            <div className="max-w-4xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-4 font-medium"
              >
                {getText(language, 'Artigo', 'Article')}
              </motion.span>

              <AnimatedTitle variant="hero" as="h1" className="mb-4">
                {getText(language,
                  'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord',
                  'Maturity, Management & Security Guide for Discord Bot Projects'
                )}
              </AnimatedTitle>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{getText(language, '7 de Fevereiro, 2025', 'February 7, 2025')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{getText(language, '25 min de leitura', '25 min read')}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-lg border border-border/30 bg-card/50 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Share Buttons */}
              <ShareButtons title={getText(language,
                'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord',
                'Maturity, Management & Security Guide for Discord Bot Projects'
              )} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 lg:py-12 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <ScrollReveal>
              <div className="mb-16 p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm">
                <p className="text-base text-foreground/90 leading-[1.9]">
                  {getText(language,
                    'O ecossistema de bots para Discord cresceu exponencialmente nos últimos anos, atraindo desenvolvedores de todos os níveis de experiência. No entanto, esse crescimento trouxe consigo uma série de problemas que vão muito além da parte técnica. Este guia aborda os aspectos mais críticos e frequentemente ignorados na gestão de projetos de bots: maturidade, responsabilidade, segurança e postura profissional.',
                    'The Discord bot ecosystem has grown exponentially in recent years, attracting developers of all experience levels. However, this growth has brought a series of problems that go far beyond the technical aspects. This guide addresses the most critical and frequently overlooked aspects of bot project management: maturity, responsibility, security, and professional conduct.'
                  )}
                </p>
              </div>
            </ScrollReveal>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <ScrollReveal key={index} delay={0.05}>
                  <article className="relative">
                    <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6 leading-tight">
                      {section.title}
                    </h2>
                    <div className="text-base text-muted-foreground leading-[1.9] whitespace-pre-line">
                      {section.content}
                    </div>
                    {index < sections.length - 1 && (
                      <div className="mt-12 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
                    )}
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {/* Central Message */}
            <ScrollReveal>
              <div className="my-16 p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm text-center">
                <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6 leading-tight">
                  {getText(language, 'Mensagem Central', 'Core Message')}
                </h2>
                <p className="text-base text-muted-foreground leading-[1.9] max-w-2xl mx-auto mb-4">
                  {getText(language,
                    'A maioria dos problemas em projetos de bots não é técnica. Os maiores erros são de postura, gestão e falta de maturidade. Projetos que desejam crescer de forma sustentável precisam assumir responsabilidade em todas as frentes.',
                    'Most problems in bot projects are not technical. The biggest mistakes come from poor conduct, management, and lack of maturity. Projects that wish to grow sustainably need to take responsibility on all fronts.'
                  )}
                </p>
                <p className="text-base text-foreground/90 font-medium leading-[1.9] max-w-2xl mx-auto">
                  {getText(language,
                    'Segurança começa na mentalidade, não apenas no código.',
                    'Security starts in the mindset, not just in the code.'
                  )}
                </p>
              </div>
            </ScrollReveal>

            {/* Share at end */}
            <div className="mt-12 pt-8 border-t border-border/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  {getText(language, 'Gostou do artigo? Compartilhe!', 'Enjoyed the article? Share it!')}
                </p>
                <ShareButtons title={getText(language,
                  'Guia de Maturidade, Gestão e Segurança para Projetos de Bots no Discord',
                  'Maturity, Management & Security Guide for Discord Bot Projects'
                )} />
              </div>
            </div>

            {/* Signature */}
            <ArticleSEOFooter />
            <RelatedArticles currentArticleId="discord-bots-guide" />
            <ScrollReveal>
              <div className="mt-20 pt-10 border-t border-border/30">
                <div className="flex flex-col items-center text-center">
                  <p className="text-lg font-serif text-foreground mb-1">Talisson Souza</p>
                  <p className="text-sm text-muted-foreground">CEO {getText(language, 'e Fundador da', 'and Founder of')} Cheetah Solutions Network</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Cheetah Developers Brasil</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DiscordBotsGuide;
