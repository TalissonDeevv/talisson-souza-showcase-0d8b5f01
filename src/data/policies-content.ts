type Lang = 'pt' | 'en';

interface TextPair {
  pt: string;
  en: string;
}

export interface PolicySection {
  id: string;
  title: TextPair;
  paragraphs: TextPair[];
  items?: TextPair[];
}

export const policySections: PolicySection[] = [
  {
    id: 'visao-geral',
    title: { pt: 'Visão Geral', en: 'Overview' },
    paragraphs: [
      {
        pt: 'Esta página reúne todas as políticas, termos e diretrizes que orientam minha atuação profissional como desenvolvedor e arquiteto de sistemas. Ela existe para garantir transparência total sobre como trabalho, como me relaciono com clientes e comunidade, e quais são os limites e responsabilidades envolvidos.',
        en: 'This page gathers all the policies, terms, and guidelines that govern my professional work as a developer and systems architect. It exists to ensure full transparency about how I work, how I relate to clients and the community, and what limits and responsibilities are involved.'
      },
      {
        pt: 'Acredito que relações profissionais saudáveis começam com clareza. Cada seção foi escrita para eliminar ambiguidades, proteger ambas as partes e demonstrar o nível de organização que aplico em tudo que faço. Se você está considerando trabalhar comigo, recomendo a leitura completa.',
        en: 'I believe that healthy professional relationships start with clarity. Each section was written to eliminate ambiguities, protect both parties, and demonstrate the level of organization I apply to everything I do. If you are considering working with me, I recommend reading it in full.'
      },
      {
        pt: 'Estas políticas são atualizadas periodicamente para refletir mudanças no meu processo, na legislação aplicável e nas necessidades do mercado.',
        en: 'These policies are updated periodically to reflect changes in my process, applicable legislation, and market needs.'
      },
      {
        pt: 'A transparência não é apenas uma prática, é um princípio que guia cada decisão que tomo. Quando um cliente entende exatamente como funciona o meu processo, quais são os limites e o que pode esperar, a relação profissional se torna mais produtiva para ambos os lados. Esse documento existe para que ninguém precise adivinhar como as coisas funcionam.',
        en: 'Transparency is not just a practice, it is a principle that guides every decision I make. When a client understands exactly how my process works, what the limits are, and what to expect, the professional relationship becomes more productive for both sides. This document exists so that nobody needs to guess how things work.'
      },
      {
        pt: 'Cada política aqui descrita foi construída ao longo de anos de experiência real com projetos, clientes e situações diversas. Não são cláusulas genéricas copiadas de modelos. São regras que nasceram da prática e que foram refinadas com o tempo para proteger a qualidade do meu trabalho e a satisfação de quem contrata.',
        en: 'Each policy described here was built over years of real experience with projects, clients, and diverse situations. These are not generic clauses copied from templates. They are rules born from practice and refined over time to protect the quality of my work and the satisfaction of those who hire me.'
      },
      {
        pt: 'Meu objetivo com esta central de políticas é simples: eliminar ruído. Quanto mais claro for o acordo entre as partes desde o início, menor a chance de problemas durante a execução. Profissionalismo começa antes do primeiro commit.',
        en: 'My goal with this policies hub is simple: eliminate noise. The clearer the agreement between the parties from the beginning, the lower the chance of problems during execution. Professionalism starts before the first commit.'
      },
      {
        pt: 'Se você chegou até aqui por curiosidade ou por estar avaliando uma parceria, saiba que esse nível de documentação é intencional. Ele reflete como conduzo projetos: com estrutura, previsibilidade e responsabilidade.',
        en: 'If you arrived here out of curiosity or because you are evaluating a partnership, know that this level of documentation is intentional. It reflects how I conduct projects: with structure, predictability, and accountability.'
      }
    ]
  },
  {
    id: 'termos-de-uso',
    title: { pt: 'Termos de Uso', en: 'Terms of Use' },
    paragraphs: [
      {
        pt: 'Ao acessar e utilizar este site, você concorda com os termos descritos abaixo. Todo o conteúdo publicado, incluindo textos, imagens, código e materiais educativos, é de propriedade intelectual de Talisson Souza, salvo quando explicitamente indicado o contrário.',
        en: 'By accessing and using this website, you agree to the terms described below. All published content, including texts, images, code, and educational materials, is the intellectual property of Talisson Souza, unless explicitly stated otherwise.'
      },
      {
        pt: 'É proibida a reprodução, distribuição ou modificação de qualquer conteúdo sem autorização prévia por escrito. Citações com atribuição adequada são permitidas, desde que não desvirtuem o contexto original. O uso do conteúdo para fins comerciais sem autorização configura violação de direitos autorais.',
        en: 'The reproduction, distribution, or modification of any content without prior written authorization is prohibited. Quotes with proper attribution are allowed, as long as they do not distort the original context. Using content for commercial purposes without authorization constitutes a copyright violation.'
      },
      {
        pt: 'Este site é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas. Não me responsabilizo por danos diretos ou indiretos decorrentes do uso das informações aqui disponibilizadas. Links para sites de terceiros são oferecidos como conveniência e não implicam endosso.',
        en: 'This website is provided "as is," without warranties of any kind, express or implied. I am not responsible for direct or indirect damages resulting from the use of the information provided here. Links to third-party websites are offered as a convenience and do not imply endorsement.'
      },
      {
        pt: 'Todo código-fonte exibido em artigos, tutoriais ou repositórios públicos vinculados a este site é disponibilizado para fins educacionais. A utilização desse código em projetos comerciais sem modificação substancial e sem crédito ao autor original pode configurar uso indevido. Em caso de dúvida, entre em contato antes de utilizar.',
        en: 'All source code displayed in articles, tutorials, or public repositories linked to this site is provided for educational purposes. Using this code in commercial projects without substantial modification and without crediting the original author may constitute misuse. If in doubt, contact me before using it.'
      },
      {
        pt: 'O design visual do site, incluindo layout, tipografia, paleta de cores, animações e componentes customizados, é resultado de trabalho autoral e não pode ser replicado integralmente sem autorização. Inspirações são naturais no mundo do design, mas cópias literais serão tratadas com as medidas cabíveis.',
        en: 'The visual design of the site, including layout, typography, color palette, animations, and custom components, is the result of original work and cannot be fully replicated without authorization. Inspiration is natural in the design world, but literal copies will be dealt with appropriately.'
      },
      {
        pt: 'Qualquer tentativa de explorar vulnerabilidades, realizar engenharia reversa dos sistemas ou acessar áreas restritas do site sem autorização será considerada violação grave e poderá resultar em ações legais. A segurança do site é monitorada continuamente.',
        en: 'Any attempt to exploit vulnerabilities, reverse-engineer systems, or access restricted areas of the site without authorization will be considered a serious violation and may result in legal action. The security of the site is continuously monitored.'
      },
      {
        pt: 'Reservo-me o direito de modificar estes termos a qualquer momento, sem aviso prévio. O uso continuado do site após alterações implica aceitação automática dos novos termos. É responsabilidade do usuário verificar periodicamente se houve atualizações.',
        en: 'I reserve the right to modify these terms at any time without prior notice. Continued use of the site after changes implies automatic acceptance of the new terms. It is the user\'s responsibility to periodically check for updates.'
      },
      {
        pt: 'O conteúdo educativo disponibilizado não substitui formação profissional, mentoria individual ou consultoria especializada. São materiais complementares baseados na minha experiência e devem ser interpretados como tal.',
        en: 'The educational content provided does not replace professional training, individual mentoring, or specialized consulting. These are complementary materials based on my experience and should be interpreted as such.'
      }
    ]
  },
  {
    id: 'politica-de-privacidade',
    title: { pt: 'Política de Privacidade', en: 'Privacy Policy' },
    paragraphs: [
      {
        pt: 'Levo a privacidade dos visitantes a sério. Este site pode coletar dados pessoais limitados por meio de formulários de contato (nome, e-mail, mensagem) e ferramentas de análise de tráfego. Essas informações são utilizadas exclusivamente para responder solicitações e melhorar a experiência do usuário.',
        en: 'I take visitor privacy seriously. This website may collect limited personal data through contact forms (name, email, message) and traffic analysis tools. This information is used exclusively to respond to requests and improve the user experience.'
      },
      {
        pt: 'Seus dados não são vendidos, compartilhados ou transferidos a terceiros para fins de marketing. Informações podem ser compartilhadas apenas quando exigido por lei ou para proteger direitos legais.',
        en: 'Your data is not sold, shared, or transferred to third parties for marketing purposes. Information may only be shared when required by law or to protect legal rights.'
      },
      {
        pt: 'Os dados são armazenados em servidores seguros com criptografia em trânsito e em repouso. Medidas técnicas e organizacionais são adotadas para prevenir acesso não autorizado, perda ou destruição dos dados.',
        en: 'Data is stored on secure servers with encryption in transit and at rest. Technical and organizational measures are adopted to prevent unauthorized access, loss, or destruction of data.'
      },
      {
        pt: 'Não utilizo newsletter por e-mail. Minha comunicação com a comunidade acontece exclusivamente via WhatsApp e Discord. Isso significa que não armazeno endereços de e-mail para fins de marketing. Este site está em conformidade com a Lei Geral de Proteção de Dados (LGPD). Você pode solicitar a exclusão dos seus dados a qualquer momento entrando em contato diretamente.',
        en: 'I do not use email newsletters. My communication with the community happens exclusively through WhatsApp and Discord. This means I do not store email addresses for marketing purposes. This website complies with the Brazilian General Data Protection Law (LGPD). You may request the deletion of your data at any time by contacting me directly.'
      },
      {
        pt: 'O site pode utilizar cookies técnicos necessários para o funcionamento correto da navegação, como preferências de tema (claro/escuro) e idioma selecionado. Esses cookies não coletam informações pessoais identificáveis e são armazenados localmente no seu navegador.',
        en: 'The site may use technical cookies necessary for proper navigation, such as theme preferences (light/dark) and selected language. These cookies do not collect personally identifiable information and are stored locally in your browser.'
      },
      {
        pt: 'Ferramentas de análise de tráfego podem ser utilizadas para entender o comportamento agregado dos visitantes, como páginas mais acessadas, tempo de permanência e origem do tráfego. Esses dados são anonimizados e não permitem identificação individual.',
        en: 'Traffic analysis tools may be used to understand aggregate visitor behavior, such as most visited pages, time spent, and traffic source. This data is anonymized and does not allow individual identification.'
      },
      {
        pt: 'Caso o site venha a integrar serviços de terceiros no futuro (como processadores de pagamento ou plataformas de autenticação), esta política será atualizada para refletir quais dados serão compartilhados e com qual finalidade. Nenhuma integração será feita sem comunicação prévia.',
        en: 'Should the site integrate third-party services in the future (such as payment processors or authentication platforms), this policy will be updated to reflect which data will be shared and for what purpose. No integration will be made without prior communication.'
      },
      {
        pt: 'Você tem o direito de solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento. Para exercer esses direitos, basta entrar em contato através dos canais disponíveis no site. Responderei em até 15 dias úteis, conforme previsto pela LGPD.',
        en: 'You have the right to request access, correction, or deletion of your personal data at any time. To exercise these rights, simply contact me through the channels available on the site. I will respond within 15 business days, as provided by the LGPD.'
      },
      {
        pt: 'Menores de 18 anos devem utilizar este site sob supervisão de um responsável legal. Não coleto intencionalmente dados de menores de idade. Se identificar que dados de um menor foram coletados inadvertidamente, procederei com a exclusão imediata.',
        en: 'Minors under 18 should use this site under the supervision of a legal guardian. I do not intentionally collect data from minors. If I identify that data from a minor has been inadvertently collected, I will proceed with immediate deletion.'
      }
    ]
  },
  {
    id: 'disclaimer',
    title: { pt: 'Disclaimer', en: 'Disclaimer' },
    paragraphs: [
      {
        pt: 'Todo o conteúdo publicado neste site tem caráter informativo e opinativo. Os artigos, análises e materiais educativos refletem minha experiência profissional e visão pessoal sobre os temas abordados.',
        en: 'All content published on this website is informational and opinion-based. Articles, analyses, and educational materials reflect my professional experience and personal view on the topics covered.'
      },
      {
        pt: 'Nenhum conteúdo aqui presente constitui aconselhamento jurídico, financeiro, contábil ou técnico formal. Antes de tomar qualquer decisão baseada nas informações deste site, consulte um profissional qualificado na área correspondente.',
        en: 'No content herein constitutes formal legal, financial, accounting, or technical advice. Before making any decision based on the information on this site, consult a qualified professional in the corresponding field.'
      },
      {
        pt: 'Todas as decisões tomadas com base no conteúdo deste site são de responsabilidade exclusiva do usuário. Não me responsabilizo por resultados, perdas ou danos de qualquer natureza decorrentes da aplicação das informações aqui compartilhadas.',
        en: 'All decisions made based on the content of this site are the sole responsibility of the user. I am not responsible for results, losses, or damages of any nature resulting from the application of the information shared here.'
      },
      {
        pt: 'Opiniões expressas em artigos sobre mercado de trabalho, tecnologia, empreendedorismo e carreira são baseadas na minha vivência pessoal e profissional. O mercado de tecnologia é dinâmico e o que funciona para mim pode não funcionar para todos. Cada profissional deve avaliar sua própria realidade antes de seguir qualquer recomendação.',
        en: 'Opinions expressed in articles about the job market, technology, entrepreneurship, and career are based on my personal and professional experience. The tech market is dynamic, and what works for me may not work for everyone. Each professional should evaluate their own reality before following any recommendation.'
      },
      {
        pt: 'Estudos de caso, exemplos e referências a projetos reais são apresentados com finalidade ilustrativa. Resultados passados não garantem resultados futuros. Cada projeto tem variáveis únicas que influenciam diretamente o resultado.',
        en: 'Case studies, examples, and references to real projects are presented for illustrative purposes. Past results do not guarantee future results. Each project has unique variables that directly influence the outcome.'
      },
      {
        pt: 'Menções a ferramentas, tecnologias, plataformas ou serviços de terceiros não constituem endosso comercial. São citações baseadas em experiência técnica e podem não refletir o estado atual dessas ferramentas no momento da leitura.',
        en: 'Mentions of tools, technologies, platforms, or third-party services do not constitute commercial endorsement. They are citations based on technical experience and may not reflect the current state of those tools at the time of reading.'
      },
      {
        pt: 'Estimativas de custo, prazo ou esforço mencionadas em qualquer conteúdo do site são aproximações baseadas em cenários genéricos. Valores reais dependem de análise detalhada do projeto específico e são definidos apenas após diagnóstico formal.',
        en: 'Cost, deadline, or effort estimates mentioned in any site content are approximations based on generic scenarios. Actual values depend on detailed analysis of the specific project and are defined only after a formal diagnosis.'
      },
      {
        pt: 'Este site não se responsabiliza por indisponibilidades temporárias, erros de carregamento ou inconsistências causadas por fatores externos como falhas de rede, atualizações de navegadores ou incompatibilidades de dispositivos.',
        en: 'This site is not responsible for temporary unavailability, loading errors, or inconsistencies caused by external factors such as network failures, browser updates, or device incompatibilities.'
      }
    ]
  },
  {
    id: 'diretrizes-comunidade',
    title: { pt: 'Diretrizes de Comunidade', en: 'Community Guidelines' },
    paragraphs: [
      {
        pt: 'Mantenho comunidades ativas no Discord voltadas para desenvolvimento, tecnologia e mercado. Esses espaços existem para promover troca de conhecimento genuína e networking entre profissionais e estudantes da área.',
        en: 'I maintain active communities on Discord focused on development, technology, and the market. These spaces exist to promote genuine knowledge exchange and networking among professionals and students in the field.'
      },
      {
        pt: 'O respeito entre membros é inegociável. Não são tolerados: assédio, discriminação, discurso de ódio, ameaças ou qualquer forma de abuso verbal ou psicológico. Tratamos todos com dignidade, independentemente de nível de experiência, gênero, etnia ou qualquer outra característica.',
        en: 'Respect among members is non-negotiable. The following are not tolerated: harassment, discrimination, hate speech, threats, or any form of verbal or psychological abuse. We treat everyone with dignity, regardless of experience level, gender, ethnicity, or any other characteristic.'
      },
      {
        pt: 'As comunidades possuem canais organizados por tema. Respeitar a organização dos canais é fundamental para manter a qualidade das discussões. Mensagens fora de contexto podem ser movidas ou removidas pela moderação sem aviso prévio.',
        en: 'Communities have channels organized by topic. Respecting channel organization is fundamental to maintaining the quality of discussions. Off-topic messages may be moved or removed by moderation without prior notice.'
      },
      {
        pt: 'A participação na comunidade é um privilégio, não um direito. Membros que demonstrem padrões repetidos de comportamento tóxico, desrespeito às regras ou tentativas de prejudicar outros membros serão removidos permanentemente, sem possibilidade de recurso.',
        en: 'Community participation is a privilege, not a right. Members who demonstrate repeated patterns of toxic behavior, disregard for rules, or attempts to harm other members will be permanently removed, without the possibility of appeal.'
      },
      {
        pt: 'Compartilhar conhecimento é encorajado, mas com responsabilidade. Informações incorretas, desinformação intencional ou conselhos potencialmente prejudiciais serão removidos. Se não tem certeza sobre algo, indique isso claramente antes de compartilhar.',
        en: 'Sharing knowledge is encouraged, but with responsibility. Incorrect information, intentional misinformation, or potentially harmful advice will be removed. If you are not sure about something, clearly indicate that before sharing.'
      },
      {
        pt: 'A privacidade dos membros é respeitada. Compartilhar informações pessoais de outros membros sem consentimento (doxxing), capturar e distribuir conversas privadas ou expor situações pessoais de terceiros resultará em banimento imediato e permanente.',
        en: 'Members\' privacy is respected. Sharing personal information of other members without consent (doxxing), capturing and distributing private conversations, or exposing personal situations of third parties will result in immediate and permanent banning.'
      }
    ],
    items: [
      { pt: 'Spam, autopromoção excessiva e flood são proibidos', en: 'Spam, excessive self-promotion, and flooding are prohibited' },
      { pt: 'Compartilhamento de conteúdo ilegal resulta em banimento imediato', en: 'Sharing illegal content results in immediate ban' },
      { pt: 'Discussões devem ser construtivas e focadas nos temas do servidor', en: 'Discussions should be constructive and focused on server topics' },
      { pt: 'A equipe de moderação pode remover conteúdo ou membros a qualquer momento', en: 'The moderation team may remove content or members at any time' },
      { pt: 'Tentativas de manipulação, phishing ou engenharia social são tratadas com tolerância zero', en: 'Manipulation attempts, phishing, or social engineering are treated with zero tolerance' },
      { pt: 'Não é permitido recrutar membros para servidores externos sem autorização da administração', en: 'Recruiting members for external servers without administration approval is not allowed' },
      { pt: 'Conteúdo NSFW, gore, apologia a drogas ou qualquer material impróprio resulta em banimento sem aviso', en: 'NSFW content, gore, drug apology, or any inappropriate material results in a ban without warning' },
      { pt: 'Bots não autorizados não podem ser adicionados ao servidor sem aprovação prévia', en: 'Unauthorized bots cannot be added to the server without prior approval' },
      { pt: 'Pedidos de ajuda devem ser específicos e incluir contexto suficiente para que outros possam contribuir', en: 'Help requests should be specific and include enough context for others to contribute' },
      { pt: 'Discussões sobre política partidária, religião ou temas que gerem polarização são desencorajadas nos canais gerais', en: 'Discussions about partisan politics, religion, or polarizing topics are discouraged in general channels' }
    ]
  },
  {
    id: 'como-trabalho',
    title: { pt: 'Como Eu Trabalho', en: 'How I Work' },
    paragraphs: [
      {
        pt: 'Meu processo de desenvolvimento é estruturado em etapas claras: diagnóstico do problema, definição de escopo, proposta técnica, desenvolvimento iterativo, testes e entrega documentada. Cada etapa é comunicada ao cliente com transparência total.',
        en: 'My development process is structured in clear stages: problem diagnosis, scope definition, technical proposal, iterative development, testing, and documented delivery. Each stage is communicated to the client with full transparency.'
      },
      {
        pt: 'Trabalho com comunicação assíncrona organizada. Relatórios de progresso, decisões técnicas documentadas e alinhamentos periódicos fazem parte do meu fluxo padrão. Não trabalho com suposições. Cada decisão técnica é justificada e registrada.',
        en: 'I work with organized asynchronous communication. Progress reports, documented technical decisions, and periodic alignments are part of my standard workflow. I do not work with assumptions. Every technical decision is justified and recorded.'
      },
      {
        pt: 'Meu compromisso com qualidade vai além do código. Penso em manutenibilidade, escalabilidade e custo operacional desde o primeiro dia do projeto. Isso inclui escolhas conscientes de tecnologia, arquitetura pensada para evolução e documentação como parte da entrega.',
        en: 'My commitment to quality goes beyond code. I think about maintainability, scalability, and operational cost from day one of the project. This includes conscious technology choices, architecture designed for evolution, and documentation as part of the delivery.'
      },
      {
        pt: 'Antes de escrever qualquer linha de código, dedico tempo para entender o problema real. Muitos projetos fracassam porque começaram pela solução antes de compreender o problema. Meu processo sempre começa com perguntas: qual é o objetivo de negócio? Quem são os usuários? Quais são as restrições técnicas e financeiras?',
        en: 'Before writing any line of code, I dedicate time to understanding the real problem. Many projects fail because they started with the solution before understanding the problem. My process always begins with questions: what is the business objective? Who are the users? What are the technical and financial constraints?'
      },
      {
        pt: 'A definição de escopo é tratada como um documento vivo. Ele é detalhado o suficiente para evitar ambiguidades, mas flexível para acomodar ajustes durante o desenvolvimento. Mudanças de escopo são permitidas, desde que documentadas, aprovadas e com impacto claro em prazo e custo.',
        en: 'Scope definition is treated as a living document. It is detailed enough to avoid ambiguities, but flexible enough to accommodate adjustments during development. Scope changes are allowed, as long as they are documented, approved, and with clear impact on timeline and cost.'
      },
      {
        pt: 'Utilizo controle de versão desde o primeiro minuto do projeto. Cada funcionalidade é desenvolvida em branches isoladas, revisada e testada antes de ser integrada. Isso garante que o código principal esteja sempre estável e funcional.',
        en: 'I use version control from the first minute of the project. Each feature is developed in isolated branches, reviewed, and tested before being integrated. This ensures that the main codebase is always stable and functional.'
      },
      {
        pt: 'Testes não são opcionais no meu processo. Dependendo da complexidade do projeto, implemento testes unitários, de integração e end-to-end. O nível de cobertura é definido em conjunto com o cliente, equilibrando custo e segurança.',
        en: 'Testing is not optional in my process. Depending on the project complexity, I implement unit, integration, and end-to-end tests. The coverage level is defined together with the client, balancing cost and safety.'
      },
      {
        pt: 'A entrega não termina quando o código vai para produção. Cada projeto inclui documentação técnica, instruções de deploy e um período de acompanhamento pós-entrega. O objetivo é que o cliente ou a equipe que assumir o projeto consiga dar continuidade sem depender de mim.',
        en: 'Delivery does not end when the code goes to production. Each project includes technical documentation, deployment instructions, and a post-delivery follow-up period. The goal is for the client or the team that takes over the project to be able to continue without depending on me.'
      },
      {
        pt: 'Comunicação é parte técnica do projeto, não um extra. Mantenho o cliente informado em cada etapa com linguagem acessível. Se algo muda, se um risco é identificado ou se uma decisão precisa ser tomada, o cliente fica sabendo imediatamente.',
        en: 'Communication is a technical part of the project, not an extra. I keep the client informed at every stage with accessible language. If something changes, if a risk is identified, or if a decision needs to be made, the client knows immediately.'
      }
    ]
  },
  {
    id: 'o-que-faco',
    title: { pt: 'O Que Eu Faço', en: 'What I Do' },
    paragraphs: [
      {
        pt: 'Minha atuação é focada em criar soluções digitais completas, do planejamento à entrega, com foco em resultados reais para o cliente.',
        en: 'My work is focused on creating complete digital solutions, from planning to delivery, with a focus on real results for the client.'
      },
      {
        pt: 'Cada projeto que aceito recebe atenção total. Não trabalho com volume alto de projetos simultâneos porque acredito que qualidade exige foco. Quando assumo um projeto, ele se torna prioridade até a entrega.',
        en: 'Each project I accept receives full attention. I do not work with a high volume of simultaneous projects because I believe quality requires focus. When I take on a project, it becomes a priority until delivery.'
      },
      {
        pt: 'Minha especialidade é transformar necessidades de negócio em sistemas funcionais, escaláveis e bem documentados. Isso significa que não entrego apenas código, entrego soluções completas que consideram infraestrutura, segurança, performance e manutenção a longo prazo.',
        en: 'My specialty is transforming business needs into functional, scalable, and well-documented systems. This means I don\'t just deliver code, I deliver complete solutions that consider infrastructure, security, performance, and long-term maintenance.'
      },
      {
        pt: 'Trabalho com tecnologias modernas e consolidadas. A escolha de stack nunca é por tendência, é por adequação ao problema. Um projeto que precisa de velocidade de entrega tem necessidades diferentes de um que precisa escalar para milhões de usuários.',
        en: 'I work with modern and established technologies. Stack choice is never about trends, it is about adequacy to the problem. A project that needs delivery speed has different needs from one that needs to scale to millions of users.'
      },
      {
        pt: 'Além do desenvolvimento técnico, ofereço consultoria estratégica para empresas que precisam tomar decisões sobre tecnologia. Isso inclui avaliação de arquitetura existente, recomendações de modernização e planejamento de migração.',
        en: 'Beyond technical development, I offer strategic consulting for companies that need to make technology decisions. This includes evaluation of existing architecture, modernization recommendations, and migration planning.'
      }
    ],
    items: [
      { pt: 'Desenvolvimento de sistemas personalizados (web, APIs, dashboards, plataformas)', en: 'Custom systems development (web, APIs, dashboards, platforms)' },
      { pt: 'Arquitetura de software para projetos novos ou reestruturação de projetos existentes', en: 'Software architecture for new projects or restructuring existing ones' },
      { pt: 'Automações de processos internos e integrações entre sistemas', en: 'Internal process automations and system integrations' },
      { pt: 'Consultoria técnica para decisões estratégicas de tecnologia', en: 'Technical consulting for strategic technology decisions' },
      { pt: 'Bots e ferramentas para Discord com foco em comunidades profissionais', en: 'Discord bots and tools focused on professional communities' },
      { pt: 'Projetos de infraestrutura e deploy com foco em custo-benefício', en: 'Infrastructure and deployment projects focused on cost-effectiveness' },
      { pt: 'Auditorias de código e segurança para projetos em andamento', en: 'Code and security audits for ongoing projects' },
      { pt: 'Desenvolvimento de landing pages e sites institucionais de alta performance', en: 'Development of high-performance landing pages and institutional websites' },
      { pt: 'Integrações com APIs de terceiros (pagamentos, notificações, analytics)', en: 'Third-party API integrations (payments, notifications, analytics)' },
      { pt: 'Criação de painéis administrativos e ferramentas internas para gestão', en: 'Creation of admin panels and internal management tools' }
    ]
  },
  {
    id: 'o-que-nao-faco',
    title: { pt: 'O Que Eu Não Faço', en: 'What I Don\'t Do' },
    paragraphs: [
      {
        pt: 'Tão importante quanto saber o que ofereço é entender o que não faz parte do meu escopo. Essa clareza protege ambas as partes e evita frustrações.',
        en: 'As important as knowing what I offer is understanding what is not part of my scope. This clarity protects both parties and avoids frustrations.'
      },
      {
        pt: 'Essa seção não existe para afastar clientes. Existe para atrair os certos. Profissionais e empresas que valorizam processo, organização e transparência encontram aqui um alinhamento natural. Quem busca atalhos, promessas irreais ou trabalho sem compromisso perceberá rapidamente que não somos compatíveis.',
        en: 'This section does not exist to push clients away. It exists to attract the right ones. Professionals and companies that value process, organization, and transparency will find a natural alignment here. Those seeking shortcuts, unrealistic promises, or work without commitment will quickly realize we are not compatible.'
      },
      {
        pt: 'Cada item abaixo nasceu de uma situação real. São limites que estabeleci ao longo da carreira para proteger a qualidade do meu trabalho, a minha saúde mental e a relação com os clientes. Não são caprichos, são princípios.',
        en: 'Each item below was born from a real situation. These are limits I established throughout my career to protect the quality of my work, my mental health, and my relationship with clients. They are not whims, they are principles.'
      },
      {
        pt: 'Se algum desses pontos parecer rígido demais, considere o seguinte: cada regra aqui listada existe porque, em algum momento, a ausência dela causou prejuízo real. Para mim, para o cliente ou para ambos.',
        en: 'If any of these points seem too rigid, consider the following: each rule listed here exists because, at some point, its absence caused real harm. To me, to the client, or to both.'
      }
    ],
    items: [
      { pt: 'Não trabalho sem contrato formal que defina escopo, prazos e condições', en: 'I do not work without a formal contract defining scope, deadlines, and conditions' },
      { pt: 'Não participo de projetos que envolvam atividades ilegais ou antiéticas', en: 'I do not participate in projects involving illegal or unethical activities' },
      { pt: 'Não desenvolvo sistemas com finalidade duvidosa ou que possam causar danos a terceiros', en: 'I do not develop systems with dubious purposes or that could harm third parties' },
      { pt: 'Não aceito escopos indefinidos ou projetos do tipo "vai fazendo e a gente vê"', en: 'I do not accept undefined scopes or "just start and we\'ll see" type projects' },
      { pt: 'Não assumo prazos irreais sem planejamento técnico adequado', en: 'I do not commit to unrealistic deadlines without proper technical planning' },
      { pt: 'Não faço trabalho gratuito em troca de "visibilidade" ou "parceria futura"', en: 'I do not do free work in exchange for "visibility" or "future partnership"' },
      { pt: 'Não aceito microgerenciamento ou interferência técnica sem justificativa', en: 'I do not accept micromanagement or technical interference without justification' },
      { pt: 'Não presto suporte ilimitado após a entrega sem acordo prévio', en: 'I do not provide unlimited support after delivery without prior agreement' },
      { pt: 'Não inicio projetos sem pelo menos 50% do valor acordado como entrada', en: 'I do not start projects without at least 50% of the agreed value as a down payment' },
      { pt: 'Não trabalho com clientes que desrespeitam horários de comunicação previamente definidos', en: 'I do not work with clients who disrespect previously defined communication hours' },
      { pt: 'Não aceito revisões infinitas que descaracterizem o escopo original do projeto', en: 'I do not accept infinite revisions that distort the original project scope' },
      { pt: 'Não crio sistemas sem pensar em segurança desde o início', en: 'I do not create systems without thinking about security from the start' },
      { pt: 'Não copio projetos de terceiros ou utilizo código pirata em entregas', en: 'I do not copy third-party projects or use pirated code in deliveries' },
      { pt: 'Não faço promessas de resultados que dependem de fatores fora do meu controle', en: 'I do not make promises of results that depend on factors outside my control' }
    ]
  }
];

export const policiesPageMeta = {
  title: {
    pt: 'Políticas, Termos e Diretrizes',
    en: 'Policies, Terms & Guidelines'
  },
  description: {
    pt: 'Central de políticas, termos de uso, privacidade e diretrizes profissionais de Talisson Souza. Transparência total sobre como trabalho e me relaciono com clientes.',
    en: 'Policies hub, terms of use, privacy, and professional guidelines by Talisson Souza. Full transparency about how I work and relate to clients.'
  }
};
