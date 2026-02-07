import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { motion } from "framer-motion";

const DiscordBotsGuide = () => {
  const { language } = useTheme();

  const sections = language === 'pt' ? [
    {
      title: '1. Falta de responsabilidade de donos e equipes',
      content: `Um dos problemas mais recorrentes em projetos de bots para Discord e a falta de responsabilidade por parte dos proprios donos e das equipes envolvidas. Muitos iniciam projetos sem planejamento, sem definicao clara de objetivos e sem compreender o peso das decisoes que serao tomadas ao longo do caminho.

Quando nao existe responsabilidade, as consequencias sao inevitaveis: dados de usuarios ficam expostos, decisoes arbitrarias sao tomadas sem embasamento tecnico, e o projeto perde credibilidade rapidamente. A responsabilidade nao e apenas sobre o codigo, mas sobre cada pessoa que tera contato com o sistema, seus dados e sua experiencia.

Donos de projetos precisam entender que liderar um bot e liderar um produto digital. E como tal, exige postura profissional, compromisso com a qualidade e respeito pelos usuarios finais.`
    },
    {
      title: '2. Concessao de acessos indevidos e sem criterio',
      content: `Conceder acessos administrativos sem criterio e uma das falhas mais perigosas em projetos de bots. Muitos donos distribuem permissoes elevadas para amigos, conhecidos ou membros da equipe sem avaliar a real necessidade ou o nivel de confianca tecnica dessas pessoas.

O resultado e previsivel: alteracoes indevidas no codigo, exclusao acidental de dados, vazamento de tokens e chaves de API, e em casos mais graves, comprometimento total da infraestrutura do bot.

A regra deve ser simples: ninguem recebe acesso alem do estritamente necessario para executar sua funcao. Tokens, chaves de API e credenciais de banco de dados devem ser tratados como informacoes confidenciais e jamais compartilhados de forma casual.`
    },
    {
      title: '3. Falta de maturidade para lidar com concorrencia e exposicao',
      content: `Projetos de bots estao inseridos em um ecossistema competitivo. Muitos donos e equipes nao possuem maturidade para lidar com a existencia de projetos concorrentes, reagindo de forma impulsiva, agressiva ou antiProfissional.

Atitudes como difamar concorrentes, copiar funcionalidades sem agregar valor, ou tentar sabotar outros projetos sao sinais claros de imaturidade e prejudicam todo o ecossistema.

A postura correta e focar na qualidade do proprio projeto, aprender com o que o mercado oferece e buscar diferenciacao atraves de inovacao genuina e excelencia tecnica. Projetos maduros nao precisam diminuir outros para crescer.`
    },
    {
      title: '4. Falhas de seguranca em bots e infraestrutura',
      content: `Seguranca deve ser tratada como prioridade desde o primeiro dia de desenvolvimento, nao como algo a ser adicionado depois. As falhas mais comuns incluem:

- Armazenamento de tokens e segredos diretamente no codigo fonte
- Ausencia de variaveis de ambiente para configuracoes sensiveis
- Falta de validacao e sanitizacao de entradas de usuarios
- Endpoints de API expostos sem autenticacao adequada
- Ausencia de rate limiting, permitindo abuso e ataques DDoS
- Logs excessivos que expoem informacoes sensiveis
- Falta de atualizacao de dependencias com vulnerabilidades conhecidas

Cada um desses pontos pode ser explorado por agentes maliciosos para comprometer o bot, os dados dos usuarios e a infraestrutura do servidor. A seguranca comeca na mentalidade do desenvolvedor e se estende a cada linha de codigo e cada configuracao do ambiente.`
    },
    {
      title: '5. Equipes grandes sem necessidade real',
      content: `Muitos projetos de bots cometem o erro de montar equipes excessivamente grandes sem que haja demanda real para tantas pessoas. Isso gera problemas como:

- Diluicao de responsabilidades, onde ninguem sabe exatamente o que e de quem
- Conflitos de comunicacao e decisao
- Acessos desnecessarios a sistemas e dados sensiveis
- Aumento da superficie de ataque por conta de mais credenciais circulando
- Burocracia desnecessaria que atrasa o desenvolvimento

Uma equipe enxuta, com responsabilidades bem definidas, e mais eficiente, segura e produtiva. A qualidade de uma equipe se mede pela competencia de seus membros, nao pela quantidade.`
    },
    {
      title: '6. Ma gestao do bot, do codigo e dos processos',
      content: `A gestao de um projeto de bot vai muito alem de escrever codigo. Envolve planejamento de releases, controle de versao, documentacao, monitoramento de performance, gestao de incidentes e comunicacao com a comunidade de usuarios.

Projetos sem gestao adequada acumulam divida tecnica rapidamente, perdem a capacidade de evoluir e se tornam frageis a ponto de qualquer mudanca causar falhas em cascata.

Boas praticas de gestao incluem: uso consistente de controle de versao (Git), revisao de codigo por pares, testes automatizados, documentacao atualizada, e processos claros para deploy e rollback.`
    },
    {
      title: '7. Comportamento inadequado do dono e da equipe',
      content: `O comportamento dos responsaveis por um projeto reflete diretamente na imagem e na confiabilidade do bot. Atitudes como arrogancia, desrespeito com usuarios, abuso de poder em servidores e falta de transparencia destroem a reputacao de qualquer projeto.

Lideres de projetos de bots precisam entender que estao gerenciando um produto que serve a uma comunidade. A postura deve ser sempre profissional, transparente e respeitosa, independentemente do tamanho do projeto ou da base de usuarios.

Feedbacks negativos devem ser recebidos com maturidade e usados como oportunidade de melhoria, nao como motivo para retaliacao.`
    },
    {
      title: '8. Abuso de poder e decisoes sem criterio tecnico',
      content: `Decisoes tecnicas devem ser tomadas com base em criterios tecnicos, nao em preferencias pessoais, vaidade ou politica interna. Quando donos ou lideres de equipe tomam decisoes arbitrarias sem embasamento, o projeto sofre.

Exemplos comuns incluem: escolher tecnologias por modismo, ignorar boas praticas por conveniencia, priorizar funcionalidades visiveis em detrimento da seguranca, e tomar decisoes de arquitetura sem consultar a equipe tecnica.

O abuso de poder tambem se manifesta na forma como acessos e permissoes sao gerenciados. Donos que usam seu acesso privilegiado para tomar decisoes unilaterais sem consulta ou justificativa tecnica prejudicam a confianca da equipe e a qualidade do projeto.`
    },
    {
      title: '9. Como manter seguranca no bot e nos dados',
      content: `Manter a seguranca de um bot e um processo continuo que exige disciplina e conhecimento. As praticas essenciais incluem:

- Utilizar variaveis de ambiente para todos os segredos e configuracoes sensiveis
- Implementar autenticacao e autorizacao robustas em todas as APIs
- Aplicar o principio do menor privilegio em todos os niveis de acesso
- Manter todas as dependencias atualizadas e monitorar vulnerabilidades
- Implementar logging e monitoramento para detectar atividades suspeitas
- Realizar backups regulares e testar procedimentos de recuperacao
- Criptografar dados sensiveis em repouso e em transito
- Conduzir revisoes de seguranca periodicas no codigo e na infraestrutura

Seguranca nao e um destino, e uma jornada. Cada decisao de desenvolvimento deve considerar as implicacoes de seguranca.`
    },
    {
      title: '10. Como estruturar permissoes corretas do bot',
      content: `A configuracao de permissoes de um bot no Discord e um dos aspectos mais criticos e frequentemente negligenciados. A regra fundamental e: a permissao de Administrador nao deve ser padrao.

A permissao de Administrador concede controle total sobre o servidor, incluindo a capacidade de excluir canais, banir membros, alterar configuracoes do servidor e acessar todas as mensagens. Nenhum bot deveria ter esse nivel de acesso por padrao.

O principio do menor privilegio deve ser aplicado rigorosamente:

- Identifique exatamente quais acoes o bot precisa executar
- Conceda apenas as permissoes especificas para essas acoes
- Documente claramente por que cada permissao e necessaria
- Revise periodicamente se todas as permissoes ainda sao necessarias
- Crie comandos de auditoria para verificar as permissoes atuais do bot

Ma configuracao de permissoes e causa direta de incidentes graves, incluindo exclusao acidental de dados, vazamento de informacoes e comprometimento de servidores inteiros.`
    },
    {
      title: '11. Boas praticas para evitar ataques e incidentes',
      content: `A prevencao de ataques e incidentes comeca com uma mentalidade de seguranca proativa:

- Nunca confie em entrada de usuarios sem validacao
- Implemente rate limiting em todos os comandos e endpoints
- Use tokens com escopo limitado e rotacione-os regularmente
- Monitore logs em tempo real para detectar padroes anomalos
- Tenha um plano de resposta a incidentes documentado e testado
- Mantenha canais de comunicacao seguros para a equipe
- Faca testes de penetracao periodicos
- Mantenha um inventario atualizado de todos os acessos e credenciais

A maioria dos ataques bem-sucedidos explora falhas basicas de seguranca que poderiam ter sido evitadas com praticas simples e consistentes.`
    },
    {
      title: '12. Como montar uma equipe profissional',
      content: `Uma equipe profissional para um projeto de bot deve ser construida com criterio e proposito. Cada membro deve ter um papel claro e responsabilidades bem definidas:

- Defina cargos com descricoes claras de responsabilidades e limites de acesso
- Avalie competencias tecnicas antes de conceder qualquer acesso
- Estabeleca processos de onboarding e offboarding para membros da equipe
- Crie canais de comunicacao estruturados e documentados
- Implemente revisao de codigo obrigatoria antes de qualquer merge
- Defina politicas claras sobre uso de credenciais e acessos
- Realize reunioes periodicas de alinhamento e planejamento
- Documente todas as decisoes tecnicas e seus motivos

Uma equipe pequena e competente sempre sera superior a uma equipe grande e desorganizada. Qualidade sobre quantidade, sempre.`
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
          'Guia de Maturidade, Gestao e Seguranca para Projetos de Bots no Discord | Talisson Souza',
          'Maturity, Management & Security Guide for Discord Bot Projects | Talisson Souza'
        )}
        description={getText(language,
          'Guia completo sobre maturidade, gestao e seguranca em projetos de bots no Discord, abordando boas praticas, permissoes, postura profissional e prevencao de falhas graves.',
          'A comprehensive guide on maturity, management and security in Discord bot projects, covering best practices, permissions, professional conduct and prevention of critical failures.'
        )}
        canonical={getText(language, '/artigos/bots-discord', '/en-us/articles/discord-bots')}
        type="article"
        publishedTime="2025-02-07"
        keywords={getText(language,
          'bots discord, seguranca em bots, gestao de bots, permissoes discord, maturidade em projetos, desenvolvimento de bots',
          'discord bots, bot security, bot management, discord permissions, project maturity, bot development'
        ).split(', ')}
      />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          {/* Back link */}
          <ScrollReveal>
            <Link
              to={getText(language, '/artigos', '/en-us/articles')}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              {getText(language, 'Voltar aos artigos', 'Back to articles')}
            </Link>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal>
            <div className="mb-16">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
              >
                {getText(language, 'Artigo', 'Article')}
              </motion.span>
              <h1 className="font-serif text-3xl lg:text-5xl text-foreground mb-6 leading-[1.1]">
                {getText(language,
                  'Guia de Maturidade, Gestao e Seguranca para Projetos de Bots no Discord',
                  'Maturity, Management & Security Guide for Discord Bot Projects'
                )}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {getText(language,
                  'Um guia responsavel para prevenir falhas graves e promover maturidade, boa gestao e seguranca real em projetos de bots.',
                  'A responsible guide to prevent critical failures and promote maturity, good management and real security in bot projects.'
                )}
              </p>
              <div className="flex items-center gap-3 mt-6 text-xs text-muted-foreground">
                <span>{getText(language, '7 de Fevereiro, 2025', 'February 7, 2025')}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                <span>25 min {getText(language, 'de leitura', 'read')}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Introduction */}
          <ScrollReveal>
            <div className="mb-16 p-8 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm">
              <p className="text-base text-foreground/90 leading-[1.9]">
                {getText(language,
                  'O ecossistema de bots para Discord cresceu exponencialmente nos ultimos anos, atraindo desenvolvedores de todos os niveis de experiencia. No entanto, esse crescimento trouxe consigo uma serie de problemas que vao muito alem da parte tecnica. Este guia aborda os aspectos mais criticos e frequentemente ignorados na gestao de projetos de bots: maturidade, responsabilidade, seguranca e postura profissional.',
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
                  'A maioria dos problemas em projetos de bots nao e tecnica. Os maiores erros sao de postura, gestao e falta de maturidade. Projetos que desejam crescer de forma sustentavel precisam assumir responsabilidade em todas as frentes.',
                  'Most problems in bot projects are not technical. The biggest mistakes come from poor conduct, management, and lack of maturity. Projects that wish to grow sustainably need to take responsibility on all fronts.'
                )}
              </p>
              <p className="text-base text-foreground/90 font-medium leading-[1.9] max-w-2xl mx-auto">
                {getText(language,
                  'Seguranca comeca na mentalidade, nao apenas no codigo.',
                  'Security starts in the mindset, not just in the code.'
                )}
              </p>
            </div>
          </ScrollReveal>

          {/* Signature */}
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
      </section>
    </Layout>
  );
};

export default DiscordBotsGuide;
