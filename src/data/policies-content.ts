type Lang = 'pt' | 'en';

interface TextPair {
  pt: string;
  en: string;
}

export interface PolicySection {
  id: string;
  title: TextPair;
  paragraphs: TextPair[];
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
      },
      {
        pt: 'Ao longo dos anos, percebi que a maioria dos conflitos em projetos de tecnologia nasce de expectativas desalinhadas. O cliente espera uma coisa, o desenvolvedor entende outra, e o resultado é frustração mútua. Documentar tudo desde o início não é burocracia, é proteção. Para mim e para quem trabalha comigo.',
        en: 'Over the years, I realized that most conflicts in technology projects are born from misaligned expectations. The client expects one thing, the developer understands another, and the result is mutual frustration. Documenting everything from the start is not bureaucracy, it is protection. For me and for those who work with me.'
      },
      {
        pt: 'Essa central de políticas também funciona como um filtro natural. Clientes que leem e concordam com o que está aqui tendem a ser os clientes com quem tenho as melhores experiências. A clareza inicial gera respeito mútuo, e respeito mútuo gera projetos bem-sucedidos.',
        en: 'This policies hub also works as a natural filter. Clients who read and agree with what is here tend to be the clients with whom I have the best experiences. Initial clarity generates mutual respect, and mutual respect generates successful projects.'
      }
    ]
  },
  {
    id: 'termos-de-uso',
    title: { pt: 'Termos de Uso', en: 'Terms of Use' },
    paragraphs: [
      {
        pt: 'Ao acessar e utilizar este site, você concorda com os termos descritos nesta seção. Todo o conteúdo publicado, incluindo textos, imagens, código-fonte, materiais educativos e elementos visuais, é de propriedade intelectual de Talisson Souza, salvo quando explicitamente indicado o contrário.',
        en: 'By accessing and using this website, you agree to the terms described in this section. All published content, including texts, images, source code, educational materials, and visual elements, is the intellectual property of Talisson Souza, unless explicitly stated otherwise.'
      },
      {
        pt: 'É proibida a reprodução, distribuição ou modificação de qualquer conteúdo sem autorização prévia por escrito. Citações com atribuição adequada são permitidas, desde que não desvirtuem o contexto original. O uso do conteúdo para fins comerciais sem autorização configura violação de direitos autorais e será tratado com as medidas legais cabíveis.',
        en: 'The reproduction, distribution, or modification of any content without prior written authorization is prohibited. Quotes with proper attribution are allowed, as long as they do not distort the original context. Using content for commercial purposes without authorization constitutes a copyright violation and will be dealt with through appropriate legal measures.'
      },
      {
        pt: 'Este site é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas. Não me responsabilizo por danos diretos ou indiretos decorrentes do uso das informações aqui disponibilizadas. Links para sites de terceiros são oferecidos como conveniência e não implicam endosso ou responsabilidade pelo conteúdo desses sites.',
        en: 'This website is provided "as is," without warranties of any kind, express or implied. I am not responsible for direct or indirect damages resulting from the use of the information provided here. Links to third-party websites are offered as a convenience and do not imply endorsement or responsibility for the content of those sites.'
      },
      {
        pt: 'Todo código-fonte exibido em artigos, tutoriais ou repositórios públicos vinculados a este site é disponibilizado para fins educacionais. A utilização desse código em projetos comerciais sem modificação substancial e sem crédito ao autor original pode configurar uso indevido. Quando houver dúvida sobre o que constitui uso aceitável, entre em contato antes de utilizar.',
        en: 'All source code displayed in articles, tutorials, or public repositories linked to this site is provided for educational purposes. Using this code in commercial projects without substantial modification and without crediting the original author may constitute misuse. When there is doubt about what constitutes acceptable use, contact me before using it.'
      },
      {
        pt: 'O design visual do site, incluindo layout, tipografia, paleta de cores, animações e componentes customizados, é resultado de trabalho autoral e não pode ser replicado integralmente sem autorização. Inspirações são naturais no mundo do design, mas cópias literais serão tratadas com as medidas cabíveis.',
        en: 'The visual design of the site, including layout, typography, color palette, animations, and custom components, is the result of original work and cannot be fully replicated without authorization. Inspiration is natural in the design world, but literal copies will be dealt with appropriately.'
      },
      {
        pt: 'Qualquer tentativa de explorar vulnerabilidades, realizar engenharia reversa dos sistemas ou acessar áreas restritas do site sem autorização será considerada violação grave e poderá resultar em ações legais. A segurança do site é monitorada continuamente e incidentes são registrados.',
        en: 'Any attempt to exploit vulnerabilities, reverse-engineer systems, or access restricted areas of the site without authorization will be considered a serious violation and may result in legal action. The security of the site is continuously monitored and incidents are logged.'
      },
      {
        pt: 'Reservo-me o direito de modificar estes termos a qualquer momento, sem aviso prévio. O uso continuado do site após alterações implica aceitação automática dos novos termos. É responsabilidade do usuário verificar periodicamente se houve atualizações nesta seção.',
        en: 'I reserve the right to modify these terms at any time without prior notice. Continued use of the site after changes implies automatic acceptance of the new terms. It is the user\'s responsibility to periodically check for updates in this section.'
      },
      {
        pt: 'O conteúdo educativo disponibilizado neste site não substitui formação profissional, mentoria individual ou consultoria especializada. São materiais complementares baseados na minha experiência e devem ser interpretados como tal. A aplicação prática de qualquer conceito é de responsabilidade do leitor.',
        en: 'The educational content provided on this site does not replace professional training, individual mentoring, or specialized consulting. These are complementary materials based on my experience and should be interpreted as such. The practical application of any concept is the reader\'s responsibility.'
      },
      {
        pt: 'Ao utilizar os formulários de contato disponíveis no site, o usuário concorda em fornecer informações verdadeiras e atualizadas. O envio de mensagens com conteúdo ofensivo, spam ou tentativas de phishing resultará no bloqueio imediato do remetente e, quando aplicável, na comunicação às autoridades competentes.',
        en: 'By using the contact forms available on the site, the user agrees to provide truthful and up-to-date information. Sending messages with offensive content, spam, or phishing attempts will result in the immediate blocking of the sender and, when applicable, reporting to the competent authorities.'
      },
      {
        pt: 'Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada ao uso deste site será submetida ao foro da comarca de residência do titular, com exclusão de qualquer outro, por mais privilegiado que seja.',
        en: 'These terms are governed by the laws of the Federative Republic of Brazil. Any dispute related to the use of this site will be submitted to the jurisdiction of the holder\'s residence, to the exclusion of any other, however privileged it may be.'
      }
    ]
  },
  {
    id: 'politica-de-privacidade',
    title: { pt: 'Política de Privacidade', en: 'Privacy Policy' },
    paragraphs: [
      {
        pt: 'Levo a privacidade dos visitantes a sério. Este site pode coletar dados pessoais limitados por meio de formulários de contato, como nome, endereço de e-mail e mensagem. Essas informações são utilizadas exclusivamente para responder às solicitações feitas pelo próprio usuário e para melhorar a experiência de navegação.',
        en: 'I take visitor privacy seriously. This website may collect limited personal data through contact forms, such as name, email address, and message. This information is used exclusively to respond to requests made by the user and to improve the browsing experience.'
      },
      {
        pt: 'Seus dados não são vendidos, compartilhados ou transferidos a terceiros para fins de marketing. Informações pessoais podem ser compartilhadas apenas quando exigido por lei, por determinação judicial ou para proteger direitos legais em situações de litígio.',
        en: 'Your data is not sold, shared, or transferred to third parties for marketing purposes. Personal information may only be shared when required by law, by court order, or to protect legal rights in litigation situations.'
      },
      {
        pt: 'Os dados são armazenados em servidores seguros com criptografia em trânsito (TLS/SSL) e em repouso. Medidas técnicas e organizacionais são continuamente adotadas para prevenir acesso não autorizado, perda acidental ou destruição dos dados armazenados.',
        en: 'Data is stored on secure servers with encryption in transit (TLS/SSL) and at rest. Technical and organizational measures are continuously adopted to prevent unauthorized access, accidental loss, or destruction of stored data.'
      },
      {
        pt: 'Não utilizo newsletter por e-mail. Minha comunicação com a comunidade acontece exclusivamente via WhatsApp e Discord. Isso significa que não armazeno endereços de e-mail para fins de marketing ou envio de comunicações em massa. Quando você envia uma mensagem pelo formulário de contato, seu e-mail é usado apenas para responder aquela conversa específica.',
        en: 'I do not use email newsletters. My communication with the community happens exclusively through WhatsApp and Discord. This means I do not store email addresses for marketing purposes or mass communications. When you send a message through the contact form, your email is used only to respond to that specific conversation.'
      },
      {
        pt: 'O site pode utilizar cookies técnicos necessários para o funcionamento correto da navegação, como preferências de tema (claro/escuro) e idioma selecionado. Esses cookies não coletam informações pessoais identificáveis e são armazenados localmente no seu navegador. Você pode desativá-los nas configurações do navegador, mas isso pode afetar funcionalidades do site.',
        en: 'The site may use technical cookies necessary for proper navigation, such as theme preferences (light/dark) and selected language. These cookies do not collect personally identifiable information and are stored locally in your browser. You can disable them in your browser settings, but this may affect site functionality.'
      },
      {
        pt: 'Ferramentas de análise de tráfego podem ser utilizadas para entender o comportamento agregado dos visitantes, como páginas mais acessadas, tempo de permanência e origem do tráfego. Esses dados são completamente anonimizados e não permitem identificação individual de nenhum visitante.',
        en: 'Traffic analysis tools may be used to understand aggregate visitor behavior, such as most visited pages, time spent, and traffic source. This data is completely anonymized and does not allow individual identification of any visitor.'
      },
      {
        pt: 'Caso o site venha a integrar serviços de terceiros no futuro, como processadores de pagamento ou plataformas de autenticação, esta política será atualizada para refletir quais dados serão compartilhados, com quem e com qual finalidade específica. Nenhuma integração será implementada sem comunicação prévia e atualização deste documento.',
        en: 'Should the site integrate third-party services in the future, such as payment processors or authentication platforms, this policy will be updated to reflect which data will be shared, with whom, and for what specific purpose. No integration will be implemented without prior communication and update of this document.'
      },
      {
        pt: 'Você tem o direito de solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer momento, conforme previsto pela Lei Geral de Proteção de Dados (LGPD). Para exercer esses direitos, basta entrar em contato através dos canais disponíveis no site. O prazo de resposta é de até 15 dias úteis.',
        en: 'You have the right to request access, correction, or deletion of your personal data at any time, as provided by the Brazilian General Data Protection Law (LGPD). To exercise these rights, simply contact me through the channels available on the site. The response time is up to 15 business days.'
      },
      {
        pt: 'Menores de 18 anos devem utilizar este site sob supervisão de um responsável legal. Não coleto intencionalmente dados de menores de idade. Se identificar que dados de um menor foram coletados inadvertidamente, procederei com a exclusão imediata e notificarei o responsável quando possível.',
        en: 'Minors under 18 should use this site under the supervision of a legal guardian. I do not intentionally collect data from minors. If I identify that data from a minor has been inadvertently collected, I will proceed with immediate deletion and notify the guardian when possible.'
      },
      {
        pt: 'Este site está hospedado em infraestrutura que pode operar em servidores localizados fora do Brasil. Nesses casos, as transferências internacionais de dados seguem os padrões de segurança exigidos pela LGPD e pelas melhores práticas do setor.',
        en: 'This site is hosted on infrastructure that may operate on servers located outside of Brazil. In these cases, international data transfers follow the security standards required by the LGPD and industry best practices.'
      },
      {
        pt: 'Esta política de privacidade pode ser revisada a qualquer momento para se adequar a novas exigências legais, tecnológicas ou operacionais. A data da última atualização está sempre visível no topo desta página. O uso continuado do site após qualquer alteração constitui aceitação da versão vigente.',
        en: 'This privacy policy may be revised at any time to comply with new legal, technological, or operational requirements. The date of the last update is always visible at the top of this page. Continued use of the site after any change constitutes acceptance of the current version.'
      }
    ]
  },
  {
    id: 'disclaimer',
    title: { pt: 'Disclaimer', en: 'Disclaimer' },
    paragraphs: [
      {
        pt: 'Todo o conteúdo publicado neste site tem caráter informativo e opinativo. Os artigos, análises e materiais educativos refletem minha experiência profissional e visão pessoal sobre os temas abordados. São perspectivas construídas ao longo de anos de prática no mercado de tecnologia.',
        en: 'All content published on this website is informational and opinion-based. Articles, analyses, and educational materials reflect my professional experience and personal view on the topics covered. These are perspectives built over years of practice in the technology market.'
      },
      {
        pt: 'Nenhum conteúdo aqui presente constitui aconselhamento jurídico, financeiro, contábil ou técnico formal. Antes de tomar qualquer decisão baseada nas informações deste site, consulte um profissional qualificado na área correspondente. A responsabilidade pela aplicação de qualquer conceito apresentado é inteiramente do leitor.',
        en: 'No content herein constitutes formal legal, financial, accounting, or technical advice. Before making any decision based on the information on this site, consult a qualified professional in the corresponding field. The responsibility for applying any concept presented rests entirely with the reader.'
      },
      {
        pt: 'Todas as decisões tomadas com base no conteúdo deste site são de responsabilidade exclusiva do usuário. Não me responsabilizo por resultados, perdas ou danos de qualquer natureza decorrentes da aplicação das informações aqui compartilhadas, seja em contexto pessoal, profissional ou empresarial.',
        en: 'All decisions made based on the content of this site are the sole responsibility of the user. I am not responsible for results, losses, or damages of any nature resulting from the application of the information shared here, whether in a personal, professional, or business context.'
      },
      {
        pt: 'Opiniões expressas em artigos sobre mercado de trabalho, tecnologia, empreendedorismo e carreira são baseadas na minha vivência pessoal e profissional. O mercado de tecnologia é dinâmico e muda constantemente. O que funciona para mim pode não funcionar para todos. Cada profissional deve avaliar sua própria realidade, contexto e limitações antes de seguir qualquer recomendação.',
        en: 'Opinions expressed in articles about the job market, technology, entrepreneurship, and career are based on my personal and professional experience. The tech market is dynamic and constantly changing. What works for me may not work for everyone. Each professional should evaluate their own reality, context, and limitations before following any recommendation.'
      },
      {
        pt: 'Estudos de caso, exemplos e referências a projetos reais são apresentados com finalidade ilustrativa. Resultados passados não garantem resultados futuros. Cada projeto tem variáveis únicas, como orçamento, equipe, prazo, complexidade técnica e maturidade organizacional, que influenciam diretamente o resultado final.',
        en: 'Case studies, examples, and references to real projects are presented for illustrative purposes. Past results do not guarantee future results. Each project has unique variables, such as budget, team, timeline, technical complexity, and organizational maturity, that directly influence the final outcome.'
      },
      {
        pt: 'Menções a ferramentas, tecnologias, plataformas ou serviços de terceiros não constituem endosso comercial. São citações baseadas em experiência técnica e podem não refletir o estado atual dessas ferramentas no momento da leitura. Recomendo sempre consultar a documentação oficial e as avaliações mais recentes antes de adotar qualquer ferramenta.',
        en: 'Mentions of tools, technologies, platforms, or third-party services do not constitute commercial endorsement. They are citations based on technical experience and may not reflect the current state of those tools at the time of reading. I always recommend consulting the official documentation and the most recent reviews before adopting any tool.'
      },
      {
        pt: 'Estimativas de custo, prazo ou esforço mencionadas em qualquer conteúdo do site são aproximações baseadas em cenários genéricos e na minha experiência com projetos similares. Valores reais dependem de análise detalhada do projeto específico e são definidos apenas após diagnóstico formal, levantamento de requisitos e definição clara de escopo.',
        en: 'Cost, deadline, or effort estimates mentioned in any site content are approximations based on generic scenarios and my experience with similar projects. Actual values depend on detailed analysis of the specific project and are defined only after a formal diagnosis, requirements gathering, and clear scope definition.'
      },
      {
        pt: 'Este site não se responsabiliza por indisponibilidades temporárias, erros de carregamento ou inconsistências causadas por fatores externos como falhas de rede, atualizações de navegadores ou incompatibilidades de dispositivos. Embora eu mantenha o site com alto padrão de disponibilidade, imprevistos podem acontecer.',
        en: 'This site is not responsible for temporary unavailability, loading errors, or inconsistencies caused by external factors such as network failures, browser updates, or device incompatibilities. Although I maintain the site with a high standard of availability, unexpected issues may occur.'
      },
      {
        pt: 'O conteúdo deste site é produzido de forma independente e não é patrocinado por nenhuma empresa, organização ou entidade governamental, salvo quando explicitamente indicado. Minha independência editorial é um compromisso que mantenho em todas as publicações.',
        en: 'The content of this site is produced independently and is not sponsored by any company, organization, or government entity, unless explicitly stated. My editorial independence is a commitment I maintain in all publications.'
      }
    ]
  },
  {
    id: 'diretrizes-comunidade',
    title: { pt: 'Diretrizes de Comunidade', en: 'Community Guidelines' },
    paragraphs: [
      {
        pt: 'Mantenho comunidades ativas no Discord voltadas para desenvolvimento, tecnologia e mercado. Esses espaços existem para promover troca de conhecimento genuína e networking entre profissionais e estudantes da área. São ambientes construídos com cuidado, e a manutenção da qualidade depende de todos os membros.',
        en: 'I maintain active communities on Discord focused on development, technology, and the market. These spaces exist to promote genuine knowledge exchange and networking among professionals and students in the field. They are carefully built environments, and maintaining quality depends on all members.'
      },
      {
        pt: 'O respeito entre membros é inegociável. Não são tolerados assédio, discriminação, discurso de ódio, ameaças ou qualquer forma de abuso verbal ou psicológico. Tratamos todos com dignidade, independentemente de nível de experiência, gênero, etnia, orientação sexual, religião ou qualquer outra característica pessoal. A diversidade é uma força, não um problema.',
        en: 'Respect among members is non-negotiable. Harassment, discrimination, hate speech, threats, or any form of verbal or psychological abuse are not tolerated. We treat everyone with dignity, regardless of experience level, gender, ethnicity, sexual orientation, religion, or any other personal characteristic. Diversity is a strength, not a problem.'
      },
      {
        pt: 'As comunidades possuem canais organizados por tema. Respeitar a organização dos canais é fundamental para manter a qualidade das discussões. Mensagens fora de contexto podem ser movidas ou removidas pela moderação sem aviso prévio. Essa organização existe para que todos encontrem o que precisam sem ter que filtrar ruído.',
        en: 'Communities have channels organized by topic. Respecting channel organization is fundamental to maintaining the quality of discussions. Off-topic messages may be moved or removed by moderation without prior notice. This organization exists so that everyone can find what they need without having to filter noise.'
      },
      {
        pt: 'A participação na comunidade é um privilégio, não um direito. Membros que demonstrem padrões repetidos de comportamento tóxico, desrespeito às regras ou tentativas de prejudicar outros membros serão removidos permanentemente, sem possibilidade de recurso. A decisão da moderação é final.',
        en: 'Community participation is a privilege, not a right. Members who demonstrate repeated patterns of toxic behavior, disregard for rules, or attempts to harm other members will be permanently removed, without the possibility of appeal. The moderation\'s decision is final.'
      },
      {
        pt: 'Compartilhar conhecimento é encorajado, mas com responsabilidade. Informações incorretas, desinformação intencional ou conselhos potencialmente prejudiciais serão removidos. Se não tem certeza sobre algo, indique isso claramente antes de compartilhar. Dizer "não sei" é sempre mais respeitável do que inventar uma resposta.',
        en: 'Sharing knowledge is encouraged, but with responsibility. Incorrect information, intentional misinformation, or potentially harmful advice will be removed. If you are not sure about something, clearly indicate that before sharing. Saying "I don\'t know" is always more respectable than making up an answer.'
      },
      {
        pt: 'A privacidade dos membros é levada a sério. Compartilhar informações pessoais de outros membros sem consentimento, capturar e distribuir conversas privadas ou expor situações pessoais de terceiros resultará em banimento imediato e permanente. Essa é uma regra sem exceções.',
        en: 'Members\' privacy is taken seriously. Sharing personal information of other members without consent, capturing and distributing private conversations, or exposing personal situations of third parties will result in immediate and permanent banning. This is a rule without exceptions.'
      },
      {
        pt: 'Spam, autopromoção excessiva e flood são proibidos em todos os canais. Entendemos que membros têm seus próprios projetos e conquistas, e há espaços apropriados para compartilhá-los. Porém, usar a comunidade como plataforma de marketing pessoal sem contribuir com valor é inaceitável.',
        en: 'Spam, excessive self-promotion, and flooding are prohibited in all channels. We understand that members have their own projects and achievements, and there are appropriate spaces to share them. However, using the community as a personal marketing platform without contributing value is unacceptable.'
      },
      {
        pt: 'Compartilhamento de conteúdo ilegal, incluindo software pirata, ferramentas de hacking malicioso, conteúdo NSFW, gore, apologia a drogas ou qualquer material que viole leis brasileiras, resultará em banimento imediato sem aviso. Não existe tolerância para esse tipo de conteúdo em nenhum contexto.',
        en: 'Sharing illegal content, including pirated software, malicious hacking tools, NSFW content, gore, drug apology, or any material that violates Brazilian laws, will result in immediate ban without warning. There is no tolerance for this type of content in any context.'
      },
      {
        pt: 'Não é permitido recrutar membros para servidores externos sem autorização da administração. Bots não autorizados não podem ser adicionados ao servidor sem aprovação prévia. Tentativas de manipulação, phishing ou engenharia social são tratadas com tolerância zero e podem resultar em denúncia às plataformas e autoridades.',
        en: 'Recruiting members for external servers without administration approval is not allowed. Unauthorized bots cannot be added to the server without prior approval. Manipulation attempts, phishing, or social engineering are treated with zero tolerance and may result in reports to platforms and authorities.'
      },
      {
        pt: 'Pedidos de ajuda são bem-vindos, mas devem ser específicos e incluir contexto suficiente para que outros possam contribuir. Perguntas vagas como "meu código não funciona" sem nenhum detalhe adicional dificultam a colaboração. Quanto mais contexto você fornecer, melhor será a ajuda que receberá.',
        en: 'Help requests are welcome, but should be specific and include enough context for others to contribute. Vague questions like "my code doesn\'t work" without any additional detail make collaboration difficult. The more context you provide, the better help you will receive.'
      },
      {
        pt: 'Discussões sobre política partidária, religião ou temas altamente polarizadores são desencorajadas nos canais gerais. Entendemos que esses assuntos são importantes, mas a comunidade tem um foco técnico e profissional. Existem outros espaços mais adequados para debates dessa natureza.',
        en: 'Discussions about partisan politics, religion, or highly polarizing topics are discouraged in general channels. We understand that these subjects are important, but the community has a technical and professional focus. There are other more appropriate spaces for debates of this nature.'
      }
    ]
  },
  {
    id: 'como-trabalho',
    title: { pt: 'Como Eu Trabalho', en: 'How I Work' },
    paragraphs: [
      {
        pt: 'Meu processo de desenvolvimento é estruturado em etapas claras e sequenciais: diagnóstico do problema, definição de escopo, proposta técnica, desenvolvimento iterativo, testes rigorosos e entrega documentada. Cada etapa é comunicada ao cliente com transparência total, sem surpresas e sem atalhos.',
        en: 'My development process is structured in clear, sequential stages: problem diagnosis, scope definition, technical proposal, iterative development, rigorous testing, and documented delivery. Each stage is communicated to the client with full transparency, without surprises and without shortcuts.'
      },
      {
        pt: 'Trabalho com comunicação assíncrona organizada. Relatórios de progresso, decisões técnicas documentadas e alinhamentos periódicos fazem parte do meu fluxo padrão. Não trabalho com suposições. Cada decisão técnica é justificada e registrada em documentação acessível ao cliente.',
        en: 'I work with organized asynchronous communication. Progress reports, documented technical decisions, and periodic alignments are part of my standard workflow. I do not work with assumptions. Every technical decision is justified and recorded in documentation accessible to the client.'
      },
      {
        pt: 'Meu compromisso com qualidade vai além do código. Penso em manutenibilidade, escalabilidade e custo operacional desde o primeiro dia do projeto. Isso inclui escolhas conscientes de tecnologia, arquitetura pensada para evolução e documentação como parte integrante da entrega, não como um extra.',
        en: 'My commitment to quality goes beyond code. I think about maintainability, scalability, and operational cost from day one of the project. This includes conscious technology choices, architecture designed for evolution, and documentation as an integral part of the delivery, not as an extra.'
      },
      {
        pt: 'Antes de escrever qualquer linha de código, dedico tempo significativo para entender o problema real. Muitos projetos fracassam porque começaram pela solução antes de compreender o problema. Meu processo sempre começa com perguntas: qual é o objetivo de negócio? Quem são os usuários finais? Quais são as restrições técnicas, financeiras e de prazo? Só depois de responder essas perguntas é que começo a pensar em arquitetura e código.',
        en: 'Before writing any line of code, I dedicate significant time to understanding the real problem. Many projects fail because they started with the solution before understanding the problem. My process always begins with questions: what is the business objective? Who are the end users? What are the technical, financial, and timeline constraints? Only after answering these questions do I start thinking about architecture and code.'
      },
      {
        pt: 'A definição de escopo é tratada como um documento vivo. Ele é detalhado o suficiente para evitar ambiguidades, mas flexível para acomodar ajustes durante o desenvolvimento. Mudanças de escopo são permitidas, desde que documentadas, aprovadas por ambas as partes e com impacto claro e acordado em prazo e custo.',
        en: 'Scope definition is treated as a living document. It is detailed enough to avoid ambiguities, but flexible enough to accommodate adjustments during development. Scope changes are allowed, as long as they are documented, approved by both parties, and with clear and agreed impact on timeline and cost.'
      },
      {
        pt: 'Utilizo controle de versão desde o primeiro minuto do projeto. Cada funcionalidade é desenvolvida em branches isoladas, revisada criteriosamente e testada antes de ser integrada ao código principal. Isso garante que a base de código esteja sempre estável, funcional e pronta para deploy a qualquer momento.',
        en: 'I use version control from the first minute of the project. Each feature is developed in isolated branches, carefully reviewed, and tested before being integrated into the main codebase. This ensures that the codebase is always stable, functional, and ready for deployment at any time.'
      },
      {
        pt: 'Testes não são opcionais no meu processo. Dependendo da complexidade e criticidade do projeto, implemento testes unitários, de integração e end-to-end. O nível de cobertura é definido em conjunto com o cliente, equilibrando custo, velocidade de entrega e segurança. Prefiro entregar menos funcionalidades com mais confiança do que muitas funcionalidades instáveis.',
        en: 'Testing is not optional in my process. Depending on the complexity and criticality of the project, I implement unit, integration, and end-to-end tests. The coverage level is defined together with the client, balancing cost, delivery speed, and safety. I prefer to deliver fewer features with more confidence than many unstable features.'
      },
      {
        pt: 'A entrega não termina quando o código vai para produção. Cada projeto inclui documentação técnica completa, instruções detalhadas de deploy e um período de acompanhamento pós-entrega. O objetivo é que o cliente ou a equipe que assumir o projeto consiga dar continuidade de forma autônoma, sem depender de mim para operações do dia a dia.',
        en: 'Delivery does not end when the code goes to production. Each project includes complete technical documentation, detailed deployment instructions, and a post-delivery follow-up period. The goal is for the client or the team that takes over the project to be able to continue autonomously, without depending on me for day-to-day operations.'
      },
      {
        pt: 'Comunicação é parte técnica do projeto, não um extra. Mantenho o cliente informado em cada etapa com linguagem acessível e sem jargões desnecessários. Se algo muda, se um risco é identificado ou se uma decisão precisa ser tomada, o cliente fica sabendo imediatamente. Não acumulo más notícias.',
        en: 'Communication is a technical part of the project, not an extra. I keep the client informed at every stage with accessible language and without unnecessary jargon. If something changes, if a risk is identified, or if a decision needs to be made, the client knows immediately. I do not accumulate bad news.'
      },
      {
        pt: 'Minha abordagem é colaborativa, mas não permissiva. Respeito a visão do cliente, mas quando identifico que uma decisão pode comprometer o projeto, apresento alternativas com argumentos técnicos sólidos. O cliente sempre tem a palavra final, mas meu papel é garantir que essa decisão seja informada.',
        en: 'My approach is collaborative, but not permissive. I respect the client\'s vision, but when I identify that a decision may compromise the project, I present alternatives with solid technical arguments. The client always has the final word, but my role is to ensure that decision is informed.'
      },
      {
        pt: 'Trabalho com horários definidos e respeito os do cliente também. Urgências são tratadas como exceção, não como regra. Projetos que operam em regime de urgência constante geralmente indicam falhas de planejamento, e eu prefiro resolver a causa do que tratar sintomas infinitamente.',
        en: 'I work with defined hours and respect the client\'s as well. Urgencies are treated as exceptions, not as the rule. Projects that operate under constant urgency usually indicate planning failures, and I prefer to solve the cause rather than treat symptoms indefinitely.'
      }
    ]
  },
  {
    id: 'o-que-faco',
    title: { pt: 'O Que Eu Faço', en: 'What I Do' },
    paragraphs: [
      {
        pt: 'Minha atuação é focada em criar soluções digitais completas, do planejamento à entrega, com foco em resultados reais e mensuráveis para o cliente. Não entrego apenas código, entrego sistemas que funcionam, que podem ser mantidos e que resolvem problemas concretos.',
        en: 'My work is focused on creating complete digital solutions, from planning to delivery, with a focus on real and measurable results for the client. I don\'t just deliver code, I deliver systems that work, that can be maintained, and that solve concrete problems.'
      },
      {
        pt: 'Cada projeto que aceito recebe atenção total. Não trabalho com volume alto de projetos simultâneos porque acredito que qualidade exige foco. Quando assumo um projeto, ele se torna prioridade até a entrega. Essa é uma escolha consciente que se reflete diretamente na qualidade do resultado.',
        en: 'Each project I accept receives full attention. I do not work with a high volume of simultaneous projects because I believe quality requires focus. When I take on a project, it becomes a priority until delivery. This is a conscious choice that is directly reflected in the quality of the result.'
      },
      {
        pt: 'Minha especialidade é transformar necessidades de negócio em sistemas funcionais, escaláveis e bem documentados. Isso significa que cada entrega considera infraestrutura, segurança, performance e manutenção a longo prazo. Um sistema que funciona hoje mas não pode ser mantido amanhã não é uma entrega de qualidade.',
        en: 'My specialty is transforming business needs into functional, scalable, and well-documented systems. This means each delivery considers infrastructure, security, performance, and long-term maintenance. A system that works today but cannot be maintained tomorrow is not a quality delivery.'
      },
      {
        pt: 'Trabalho com tecnologias modernas e consolidadas. A escolha de stack nunca é por tendência ou preferência pessoal, é por adequação ao problema. Um projeto que precisa de velocidade de entrega tem necessidades completamente diferentes de um que precisa escalar para milhões de usuários. Cada decisão técnica é tomada com base em dados, não em hype.',
        en: 'I work with modern and established technologies. Stack choice is never about trends or personal preference, it is about adequacy to the problem. A project that needs delivery speed has completely different needs from one that needs to scale to millions of users. Every technical decision is made based on data, not hype.'
      },
      {
        pt: 'Além do desenvolvimento técnico, ofereço consultoria estratégica para empresas que precisam tomar decisões sobre tecnologia. Isso inclui avaliação de arquitetura existente, recomendações de modernização, planejamento de migração e análise de viabilidade técnica para novos produtos.',
        en: 'Beyond technical development, I offer strategic consulting for companies that need to make technology decisions. This includes evaluation of existing architecture, modernization recommendations, migration planning, and technical feasibility analysis for new products.'
      },
      {
        pt: 'Desenvolvo sistemas personalizados para web, incluindo APIs robustas, dashboards interativos, plataformas completas e aplicações internas de gestão. Cada sistema é construído sob medida para o contexto do cliente, sem templates genéricos e sem soluções de prateleira que não se adaptam à realidade do negócio.',
        en: 'I develop custom web systems, including robust APIs, interactive dashboards, complete platforms, and internal management applications. Each system is built to measure for the client\'s context, without generic templates and without off-the-shelf solutions that don\'t adapt to the business reality.'
      },
      {
        pt: 'Arquitetura de software é uma das minhas áreas de maior profundidade. Tanto para projetos novos que precisam de uma base sólida desde o início, quanto para projetos existentes que cresceram de forma desordenada e precisam de reestruturação. Entendo que refatorar sem quebrar é tão desafiador quanto construir do zero.',
        en: 'Software architecture is one of my areas of greatest depth. Both for new projects that need a solid foundation from the start, and for existing projects that grew in a disorderly way and need restructuring. I understand that refactoring without breaking is as challenging as building from scratch.'
      },
      {
        pt: 'Automações de processos internos e integrações entre sistemas fazem parte do meu portfólio. Muitas empresas perdem horas diárias em tarefas repetitivas que poderiam ser automatizadas com soluções simples e bem implementadas. Identifico esses gargalos e construo automações que liberam tempo para o que realmente importa.',
        en: 'Internal process automations and system integrations are part of my portfolio. Many companies lose daily hours on repetitive tasks that could be automated with simple and well-implemented solutions. I identify these bottlenecks and build automations that free up time for what really matters.'
      },
      {
        pt: 'Bots e ferramentas para Discord fazem parte da minha experiência, com foco em comunidades profissionais que precisam de moderação inteligente, engajamento automatizado e integração com sistemas externos. Também desenvolvo landing pages e sites institucionais de alta performance, auditorias de código e segurança, e painéis administrativos para gestão operacional.',
        en: 'Discord bots and tools are part of my experience, focused on professional communities that need intelligent moderation, automated engagement, and integration with external systems. I also develop high-performance landing pages and institutional websites, code and security audits, and admin panels for operational management.'
      },
      {
        pt: 'Integrações com APIs de terceiros, como processadores de pagamento, plataformas de notificação, ferramentas de analytics e serviços de autenticação, são implementadas com segurança e seguindo as melhores práticas de cada provedor. Entendo que uma integração mal feita pode comprometer todo o sistema.',
        en: 'Third-party API integrations, such as payment processors, notification platforms, analytics tools, and authentication services, are implemented securely and following the best practices of each provider. I understand that a poorly done integration can compromise the entire system.'
      }
    ]
  },
  {
    id: 'o-que-nao-faco',
    title: { pt: 'O Que Eu Não Faço', en: 'What I Don\'t Do' },
    paragraphs: [
      {
        pt: 'Tão importante quanto saber o que ofereço é entender o que não faz parte do meu escopo. Essa clareza protege ambas as partes e evita frustrações que poderiam ser prevenidas com uma conversa honesta no início.',
        en: 'As important as knowing what I offer is understanding what is not part of my scope. This clarity protects both parties and avoids frustrations that could be prevented with an honest conversation at the beginning.'
      },
      {
        pt: 'Essa seção não existe para afastar clientes. Existe para atrair os certos. Profissionais e empresas que valorizam processo, organização e transparência encontram aqui um alinhamento natural. Quem busca atalhos, promessas irreais ou trabalho sem compromisso perceberá rapidamente que não somos compatíveis.',
        en: 'This section does not exist to push clients away. It exists to attract the right ones. Professionals and companies that value process, organization, and transparency will find a natural alignment here. Those seeking shortcuts, unrealistic promises, or work without commitment will quickly realize we are not compatible.'
      },
      {
        pt: 'Cada item descrito nesta seção nasceu de uma situação real. São limites que estabeleci ao longo da carreira para proteger a qualidade do meu trabalho, a minha saúde mental e a relação com os clientes. Não são caprichos ou arrogância. São princípios construídos com base em experiências concretas.',
        en: 'Each item described in this section was born from a real situation. These are limits I established throughout my career to protect the quality of my work, my mental health, and my relationship with clients. They are not whims or arrogance. They are principles built from concrete experiences.'
      },
      {
        pt: 'Se algum desses pontos parecer rígido demais, considere o seguinte: cada regra aqui listada existe porque, em algum momento, a ausência dela causou prejuízo real. Para mim, para o cliente ou para ambos. Aprendi da forma mais difícil que flexibilidade sem critério é o caminho mais rápido para o fracasso.',
        en: 'If any of these points seem too rigid, consider the following: each rule listed here exists because, at some point, its absence caused real harm. To me, to the client, or to both. I learned the hard way that flexibility without criteria is the fastest path to failure.'
      },
      {
        pt: 'Não trabalho sem contrato formal que defina escopo, prazos e condições de pagamento. Isso não é burocracia, é proteção. Um contrato bem feito alinha expectativas, define responsabilidades e previne conflitos. Projetos sem contrato são projetos sem compromisso, e eu não participo de arranjos assim.',
        en: 'I do not work without a formal contract defining scope, deadlines, and payment conditions. This is not bureaucracy, it is protection. A well-made contract aligns expectations, defines responsibilities, and prevents conflicts. Projects without contracts are projects without commitment, and I do not participate in such arrangements.'
      },
      {
        pt: 'Não participo de projetos que envolvam atividades ilegais, antiéticas ou que possam causar danos a terceiros. Isso inclui sistemas projetados para fraude, invasão de privacidade, manipulação de dados, jogos de azar ilegais ou qualquer finalidade que viole a legislação brasileira ou internacional.',
        en: 'I do not participate in projects involving illegal, unethical activities, or that could harm third parties. This includes systems designed for fraud, privacy invasion, data manipulation, illegal gambling, or any purpose that violates Brazilian or international law.'
      },
      {
        pt: 'Não aceito escopos indefinidos ou projetos do tipo "vai fazendo e a gente vê". Esse tipo de abordagem inevitavelmente gera retrabalho, frustração e disputas sobre o que foi ou não acordado. Se o escopo não pode ser definido com clareza antes do início, o projeto não está pronto para começar.',
        en: 'I do not accept undefined scopes or "just start and we\'ll see" type projects. This type of approach inevitably generates rework, frustration, and disputes about what was or was not agreed upon. If the scope cannot be clearly defined before the start, the project is not ready to begin.'
      },
      {
        pt: 'Não assumo prazos irreais sem planejamento técnico adequado. Quando um cliente pede um prazo impossível, explico os riscos e proponho alternativas viáveis. Se a posição for irredutível e o prazo comprometer a qualidade, prefiro não aceitar o projeto. Entregar rápido e mal não é entregar.',
        en: 'I do not commit to unrealistic deadlines without proper technical planning. When a client asks for an impossible deadline, I explain the risks and propose viable alternatives. If the position is non-negotiable and the deadline compromises quality, I prefer not to accept the project. Delivering fast and poorly is not delivering.'
      },
      {
        pt: 'Não faço trabalho gratuito em troca de "visibilidade" ou "parceria futura". Meu trabalho tem valor, e esse valor está refletido em anos de estudo, prática e aperfeiçoamento. Parcerias genuínas existem, mas são construídas com base em respeito mútuo, não na desvalorização do trabalho alheio.',
        en: 'I do not do free work in exchange for "visibility" or "future partnership." My work has value, and that value is reflected in years of study, practice, and refinement. Genuine partnerships exist, but they are built on the basis of mutual respect, not on devaluing others\' work.'
      },
      {
        pt: 'Não aceito microgerenciamento ou interferência técnica sem justificativa. O cliente contrata minha experiência e minha capacidade de tomar decisões técnicas informadas. Se cada linha de código precisa ser aprovada antes de ser escrita, o projeto perde velocidade e eu perco autonomia. Confiança é a base de qualquer parceria produtiva.',
        en: 'I do not accept micromanagement or technical interference without justification. The client hires my experience and my ability to make informed technical decisions. If every line of code needs to be approved before being written, the project loses speed and I lose autonomy. Trust is the foundation of any productive partnership.'
      },
      {
        pt: 'Não presto suporte ilimitado após a entrega sem acordo prévio. O período de acompanhamento pós-entrega é definido em contrato. Depois desse período, qualquer manutenção, atualização ou suporte adicional é tratado como um novo escopo, com orçamento e prazo próprios.',
        en: 'I do not provide unlimited support after delivery without prior agreement. The post-delivery follow-up period is defined in the contract. After this period, any maintenance, update, or additional support is treated as a new scope, with its own budget and timeline.'
      },
      {
        pt: 'Não inicio projetos sem pelo menos 50% do valor acordado como entrada. Esse modelo protege o investimento de tempo e recursos que dedico desde o primeiro dia. O restante é pago conforme marcos de entrega definidos no contrato. Não trabalho a prazo aberto nem com promessas de pagamento futuro.',
        en: 'I do not start projects without at least 50% of the agreed value as a down payment. This model protects the investment of time and resources I dedicate from day one. The remainder is paid according to delivery milestones defined in the contract. I do not work on an open-ended basis or with promises of future payment.'
      },
      {
        pt: 'Não trabalho com clientes que desrespeitam horários de comunicação previamente definidos. Mensagens fora de horário são aceitáveis em emergências reais, não como rotina. O respeito pelo meu tempo é tão importante quanto o respeito pelo tempo do cliente.',
        en: 'I do not work with clients who disrespect previously defined communication hours. Messages outside of hours are acceptable in real emergencies, not as routine. Respect for my time is as important as respect for the client\'s time.'
      },
      {
        pt: 'Não aceito revisões infinitas que descaracterizem o escopo original do projeto. Revisões fazem parte do processo, mas têm limite. Quando as alterações solicitadas ultrapassam o que foi acordado, elas são tratadas como escopo adicional, com impacto proporcional em custo e prazo.',
        en: 'I do not accept infinite revisions that distort the original project scope. Revisions are part of the process, but they have limits. When requested changes exceed what was agreed, they are treated as additional scope, with proportional impact on cost and timeline.'
      },
      {
        pt: 'Não copio projetos de terceiros, não utilizo código pirata e não faço promessas de resultados que dependem de fatores fora do meu controle. Cada entrega é original, ética e baseada em padrões profissionais que mantenho inegociáveis.',
        en: 'I do not copy third-party projects, I do not use pirated code, and I do not make promises of results that depend on factors outside my control. Each delivery is original, ethical, and based on professional standards I keep non-negotiable.'
      }
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
