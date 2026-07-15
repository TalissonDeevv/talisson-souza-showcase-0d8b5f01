type Lang = 'pt' | 'en';

interface TextPair {
  pt: string;
  en: string;
}

export interface PolicySection {
  id: string;
  title: TextPair;
  paragraphs: Array<TextPair & { heading?: TextPair }>;
}

const officialPtBlock = (heading: string | null, text: string): TextPair & { heading?: TextPair } => ({
  pt: text,
  en: text,
  ...(heading ? { heading: { pt: heading, en: heading } } : {}),
});

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
        pt: 'Para autenticar comentários com o Discord, o site solicita somente os escopos identify e guilds.join. São tratados o UID do Supabase, ID do Discord, username, nome de exibição e avatar. O endereço de e-mail não é solicitado ao Discord nem armazenado no perfil do leitor.',
        en: 'To authenticate article comments with Discord, the site requests only the identify and guilds.join scopes. The Supabase UID, Discord ID, username, display name, and avatar are processed. The user’s email address is neither requested from Discord nor stored in the reader profile.'
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
        pt: 'O Discord e o Supabase são utilizados como operadores essenciais do fluxo de autenticação e comentários. Tokens de sessão permanecem protegidos no navegador apenas pelo período necessário para manter a sessão; o token OAuth do Discord é removido do armazenamento local após a sincronização com a comunidade.',
        en: 'Discord and Supabase act as essential processors for authentication and comments. Session tokens remain protected in the browser only as needed to maintain the session; the Discord OAuth token is removed from local storage after community synchronization.'
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
    id: 'canais-oficiais-comunicacao-institucional',
    title: {
      pt: 'Política de Canais Oficiais e Comunicação Institucional',
      en: 'Política de Canais Oficiais e Comunicação Institucional'
    },
    paragraphs: [
      officialPtBlock(null, "Esta política existe para deixar claro quais canais realmente representam minha identidade profissional, meus projetos, minhas empresas, minhas comunidades e minhas comunicações institucionais. Ela não substitui a página de canais oficiais do site e também não lista perfis, números, domínios ou links individualmente. Essa lista já fica em uma página própria, mantida de forma mais prática e atualizada. Aqui ficam as regras que orientam a leitura desses canais. Se um meio de contato não aparece na página oficial, ele não deve ser tratado como meu canal institucional, mesmo que use meu nome, minha foto, minha assinatura, minha marca, meu estilo visual ou informações reais sobre minha trajetória."),
      officialPtBlock("1. Finalidade", "A finalidade desta política é proteger quem acompanha meu trabalho e também proteger a integridade da minha identidade profissional. Em um ambiente digital onde perfis falsos, domínios parecidos, mensagens manipuladas e golpes financeiros podem surgir com facilidade, não basta reconhecer uma foto ou um nome. É preciso confirmar a origem. Por isso, considero oficial apenas o canal divulgado no meu próprio site, dentro da página indicada para esse fim. Essa regra evita confusão, reduz risco de fraude e cria um critério simples para qualquer pessoa verificar se está falando comigo, com uma iniciativa minha ou com alguém que apenas tenta parecer legítimo. A finalidade também é deixar documentado que comunicações fora desses canais não são automaticamente reconhecidas como minhas."),
      officialPtBlock("2. Abrangência", "Esta política se aplica ao meu site, às minhas páginas institucionais, aos meus projetos autorais, à Cheetah Solutions Network, às comunidades em que atuo, aos conteúdos publicados, aos serviços oferecidos, às propostas profissionais, aos formulários, aos perfis públicos e a qualquer canal que alegue representar Talisson Souza. Ela vale para visitantes, leitores, clientes, possíveis clientes, membros de comunidades, parceiros, fornecedores, seguidores e qualquer pessoa que receba uma comunicação vinculada ao meu nome. Também se aplica quando terceiros usam minha imagem, logotipo, assinatura, textos, cargos, histórico profissional, identidade visual ou qualquer outro elemento capaz de criar aparência de vínculo. O meio não importa. Pode ser site, rede social, aplicativo de mensagens, e-mail, comunidade, plataforma de pagamento ou qualquer outro ambiente digital."),
      officialPtBlock("3. Conceitos e Definições", "Para esta política, canal oficial é todo meio divulgado expressamente na página de canais oficiais do meu site. Comunicação institucional é qualquer mensagem, publicação, proposta, cobrança, orientação, resposta, convite, aviso ou interação que diga representar Talisson Souza, a Cheetah Solutions Network ou alguma iniciativa ligada ao meu trabalho. Canal não reconhecido é qualquer perfil, conta, número, domínio, página, grupo, e-mail ou link que não esteja divulgado oficialmente no site. Comunicação fraudulenta é aquela que tenta criar confiança usando elementos reais ou parecidos com os meus para induzir alguém a erro. Usuário é qualquer pessoa que acessa, comenta, contrata, negocia, paga, compartilha dados, responde mensagens ou interage com conteúdos relacionados ao meu trabalho."),
      officialPtBlock("4. Reconhecimento dos Canais Oficiais", "O reconhecimento de um canal depende de uma regra simples. Ele precisa estar divulgado no meu site oficial. Não reconheço como institucional um perfil encontrado por busca, uma conta com foto parecida, um número enviado por terceiro, um e-mail com nome semelhante, um domínio com grafia próxima ou uma página que copie minha identidade visual sem constar na página oficial. Também posso adicionar, remover, trocar ou reorganizar canais conforme meu trabalho evolui, sem precisar alterar esta política a cada mudança. A página de canais oficiais funciona como a fonte prática e atualizada. Esta política funciona como a regra de interpretação. Se determinado meio não está ali, a pessoa deve agir com cautela e considerar que ele não representa oficialmente minha identidade profissional."),
      officialPtBlock("5. Domínios Oficiais", "Domínios oficiais são aqueles divulgados no meu site como parte da minha presença institucional. Domínios parecidos, com letras trocadas, extensões diferentes, hífens, subdomínios estranhos, encurtadores não indicados ou páginas com visual semelhante não devem ser aceitos como legítimos apenas pela aparência. Um certificado HTTPS mostra que a conexão é criptografada, mas não prova que o domínio pertence a mim. Também não recomendo confiar em resultado de busca, anúncio patrocinado ou link recebido por mensagem sem confirmar na página oficial. Antes de enviar dados, acessar áreas restritas, realizar pagamento, baixar arquivos ou iniciar uma contratação, o usuário deve verificar se o domínio faz parte dos canais reconhecidos no site."),
      officialPtBlock("6. Plataformas e Serviços de Terceiros", "Parte da minha presença digital pode acontecer dentro de plataformas de terceiros, como redes sociais, comunidades, repositórios, formulários, serviços de autenticação, comentários, hospedagem ou pagamento. O uso dessas plataformas não autoriza ninguém a criar páginas paralelas com aparência institucional. Também não significa que toda conta encontrada dentro dessas plataformas seja minha. Quando eu uso uma plataforma de forma oficial, o acesso legítimo parte do meu site ou de um canal já reconhecido. Cada plataforma possui regras próprias e mecanismos próprios de denúncia, mas a validação da minha identidade continua dependendo da página oficial. Se a pessoa encontrou um perfil por fora, sem confirmação no site, deve tratar esse contato como não reconhecido até que exista verificação adequada."),
      officialPtBlock("7. Comunicações Institucionais", "Comunicações institucionais são aquelas feitas por canais oficiais e relacionadas ao meu trabalho, aos meus serviços, aos meus conteúdos, às minhas comunidades, aos meus projetos ou às minhas empresas. Podem envolver propostas, respostas, orientações, publicações, avisos, suporte, convites, cobranças, materiais educativos ou informações sobre políticas. Mensagens recebidas fora desses canais não me vinculam automaticamente. Também não reconheço como institucional uma conversa em que alguém tente impedir a verificação pelo site. Comunicações legítimas não precisam criar pressão artificial para que a pessoa aja sem pensar. Se uma mensagem pede urgência incomum, pagamento imediato, senha, código de autenticação, acesso a conta, download duvidoso ou segredo absoluto, a orientação é interromper a interação e confirmar tudo por canal oficial."),
      officialPtBlock("8. Critérios para Verificação de Autenticidade", "A verificação deve começar pelo site oficial. O usuário deve acessar o site diretamente, evitar links suspeitos recebidos por mensagem e conferir se o canal aparece na página própria de canais oficiais. Não recomendo validar autenticidade por número de seguidores, foto de perfil, selo visual, print, linguagem parecida, logotipo copiado ou menção de terceiros. Esses elementos podem ser falsificados. Também é importante observar se o domínio está correto, se a abordagem faz sentido, se o pedido combina com as políticas publicadas e se existe coerência entre a comunicação recebida e a forma como trabalho. Antes de fornecer dados, documentos, acessos ou valores, a pessoa tem responsabilidade de fazer essa checagem mínima."),
      officialPtBlock("9. Utilização Indevida da Identidade Profissional", "É proibido usar meu nome, minha imagem, minha assinatura, minha reputação, minha biografia, meus cargos, meus projetos, meus textos, minhas empresas ou minhas comunidades para criar aparência de autorização, parceria, representação ou intermediação que não existe. Informações públicas sobre mim não dão a ninguém o direito de se passar por mim ou de usar minha identidade para vender serviços, cobrar valores, atrair seguidores, manipular pessoas ou gerar confiança indevida. O uso indevido da minha identidade profissional pode causar danos para mim e para terceiros. Quando identificado, poderá resultar em denúncia na plataforma, pedido de remoção, preservação de provas, notificação extrajudicial, registro de ocorrência e adoção das medidas civis e criminais cabíveis conforme a legislação brasileira."),
      officialPtBlock("10. Utilização Indevida da Marca, Nome, Logotipo, Assinatura e Identidade Visual", "Meu nome profissional, logotipos, assinatura, fotografias, composições visuais, textos, layouts, materiais de divulgação, identidade institucional e demais elementos autorais não podem ser copiados ou usados para criar confusão. A proteção desses elementos decorre das normas brasileiras de direitos autorais, propriedade industrial, responsabilidade civil e concorrência desleal, quando aplicáveis. Mesmo quando um elemento não está registrado como marca, ele pode ter proteção por uso, autoria, identidade distintiva ou possibilidade de confusão perante o público. Não autorizo reprodução, adaptação, associação, venda, distribuição, anúncio ou uso desses elementos em páginas falsas, propostas, perfis, produtos ou serviços sem autorização prévia e verificável por canal oficial."),
      officialPtBlock("11. Perfis Falsos", "Perfis falsos podem copiar foto, nome, logotipo, biografia, publicações, comentários, depoimentos e informações verdadeiras para parecerem confiáveis. Alguns perfis não tentam copiar tudo. Às vezes usam apenas uma variação do nome ou uma identidade visual parecida para confundir quem não confere a origem. A regra continua a mesma. Se o perfil não aparece na página oficial de canais, ele não deve ser tratado como institucional. Caso alguém encontre um perfil suspeito, o ideal é guardar link, print, nome usado, data, plataforma e descrição da abordagem. Esses dados ajudam a analisar o caso, denunciar a conta e preservar evidências quando for necessário tomar providências."),
      officialPtBlock("12. Phishing", "Phishing é uma tentativa de levar a pessoa a clicar em link, preencher formulário, baixar arquivo, informar senha, inserir dados pessoais ou realizar pagamento acreditando estar em um ambiente legítimo. Esse tipo de golpe pode aparecer como proposta, cobrança, convite para comunidade, suporte técnico, aviso de segurança, material gratuito, acesso a conteúdo ou confirmação de compra. Eu não solicito senhas, códigos de autenticação, tokens, chaves privadas ou credenciais por mensagens informais. Se uma comunicação usar meu nome para pedir esse tipo de informação, ela deve ser tratada como suspeita. A orientação é não clicar, não responder, registrar evidências e confirmar pelo canal oficial indicado no site."),
      officialPtBlock("13. Engenharia Social", "Engenharia social é manipulação. O golpe não depende apenas de tecnologia. Muitas vezes depende de pressa, medo, autoridade falsa, simpatia forçada, promessa de oportunidade ou tentativa de criar intimidade. Alguém pode dizer que trabalha comigo, que representa uma empresa ligada a mim ou que recebeu autorização para agir em meu nome. Sem confirmação pelo site, essa afirmação não basta. O usuário deve desconfiar de pedidos que tentem impedir verificação independente, que peçam sigilo sem motivo, que acelerem decisões ou que coloquem a pessoa contra procedimentos básicos de segurança. Comunicação séria suporta verificação. Quem representa um canal legítimo não precisa que o usuário abandone o próprio cuidado."),
      officialPtBlock("14. Golpes Financeiros", "Golpes financeiros podem envolver cobranças falsas, QR Codes adulterados, chaves de pagamento não reconhecidas, boletos falsos, propostas inventadas, descontos irreais, venda de acesso a comunidades, falsas mentorias, falsas consultorias, revenda não autorizada ou intermediação inexistente. Nenhum pagamento deve ser feito apenas porque uma mensagem usa meu nome ou minha identidade visual. Antes de pagar, o usuário deve confirmar a origem da cobrança, o canal utilizado, os dados do recebedor e a relação com uma contratação legítima. Pagamentos feitos a terceiros não reconhecidos, perfis falsos ou canais ausentes da página oficial não geram obrigação de entrega, suporte, reembolso ou reconhecimento institucional por minha parte, sem prejuízo da colaboração possível em casos de fraude comprovada."),
      officialPtBlock("15. Pagamentos e Cobranças", "Pagamentos e cobranças só devem ocorrer por meios formalmente indicados ou confirmados dentro de uma relação iniciada por canal oficial. Qualquer cobrança enviada por perfil desconhecido, número não listado, domínio semelhante, link encurtado, conta de terceiro ou intermediário sem autorização deve ser recusada até verificação. Não reconheço cobrança que não possa ser relacionada a um serviço, produto, proposta ou documento formal vinculado aos canais oficiais. Em caso de dúvida, o pagamento deve ser interrompido. Nenhuma oportunidade, desconto, prazo ou condição comercial justifica ignorar a verificação. Em ambiente digital, cuidado antes do pagamento vale mais do que tentar corrigir o problema depois."),
      officialPtBlock("16. Comunicações Fraudulentas", "Uma comunicação pode ser fraudulenta mesmo quando contém informações verdadeiras. Golpistas podem usar meu nome correto, foto real, cargo verdadeiro, projeto existente, linguagem profissional e ainda assim não ter qualquer vínculo comigo. O critério principal não é a aparência. É o reconhecimento oficial. Mensagens, anúncios, propostas, e-mails, documentos, comentários ou formulários criados sem autorização não me vinculam e não devem ser tratados como manifestação institucional. Quando identificadas, essas comunicações podem ser denunciadas, removidas, bloqueadas e utilizadas como prova em medidas administrativas, civis ou criminais. O usuário deve tratar como suspeita qualquer comunicação que pareça minha, mas não consiga ser confirmada pelos canais divulgados no site."),
      officialPtBlock("17. Responsabilidades dos Usuários", "O usuário também tem responsabilidade na própria segurança. Antes de fornecer dados pessoais, informações empresariais, documentos, arquivos, acessos, credenciais ou valores, deve verificar se o canal é oficial. Também deve manter senhas protegidas, desconfiar de links incomuns, evitar downloads suspeitos e não compartilhar códigos de autenticação. A boa-fé do usuário é importante, mas a falta de verificação pode tornar uma fraude mais difícil de conter. Esta política não existe para transferir culpa. Ela existe para deixar claro que segurança digital é responsabilidade compartilhada. Eu organizo os canais oficiais e publico regras claras. O usuário, por sua vez, precisa consultar essas informações antes de agir."),
      officialPtBlock("18. Responsabilidades da Organização", "Minha responsabilidade institucional é manter uma página clara com os canais reconhecidos, organizar as informações do site, atualizar links quando necessário e adotar medidas razoáveis para proteger minha identidade profissional. Também posso denunciar perfis falsos, revisar comunicações suspeitas, orientar usuários, solicitar remoções e preservar evidências quando houver indício relevante de fraude. Isso não significa que eu consiga monitorar toda a internet ou impedir previamente qualquer uso indevido do meu nome. Nenhum profissional ou empresa tem controle absoluto sobre plataformas externas. Minha atuação seguirá critérios de razoabilidade, gravidade do risco, capacidade técnica, provas disponíveis e possibilidade real de resposta perante plataformas, provedores ou autoridades."),
      officialPtBlock("19. Comunicação de Incidentes", "Suspeitas de perfil falso, domínio fraudulento, golpe financeiro, phishing, engenharia social, cobrança irregular, anúncio enganoso ou comunicação não reconhecida devem ser enviadas pelos canais oficiais do site. Quanto mais objetiva for a comunicação, melhor. O ideal é incluir link, print, data, horário, nome do perfil, plataforma, mensagem recebida, valores solicitados e qualquer dado que ajude a entender o caso. O registro não garante remoção imediata, recuperação de valores ou responsabilização automática de terceiros, porque muitas medidas dependem das plataformas e autoridades competentes. Ainda assim, comunicar rápido ajuda a reduzir danos, orientar outras pessoas e preservar provas antes que o conteúdo desapareça."),
      officialPtBlock("20. Medidas de Segurança", "As medidas de segurança podem incluir revisão de links, controle de acessos, autenticação em contas, organização de canais oficiais, orientação pública, remoção de canais descontinuados, registro de evidências, denúncias em plataformas, uso de conexões seguras e ajustes técnicos conforme a necessidade. Nenhuma dessas medidas elimina todos os riscos. Perfis falsos e domínios parecidos podem ser criados em poucos minutos. Por isso, a proteção real depende da combinação entre organização institucional e atenção do usuário. Meu compromisso é manter critérios claros. O compromisso de quem interage comigo é verificar esses critérios antes de confiar em uma comunicação, principalmente quando há dinheiro, dados ou acesso envolvido."),
      officialPtBlock("21. Cooperação com Autoridades Competentes", "Quando houver indícios de fraude, uso indevido de identidade, violação de direitos, tentativa de obtenção indevida de dados, golpe financeiro, ameaça, extorsão, falsidade, invasão de dispositivo, estelionato ou qualquer outro ilícito, poderei cooperar com autoridades competentes, plataformas digitais, provedores, instituições financeiras, meios de pagamento e registradores de domínio. Essa cooperação pode envolver envio de evidências disponíveis, solicitação de preservação de registros, denúncia formal, pedido de remoção e adoção de medidas judiciais ou extrajudiciais. Quando houver tratamento de dados pessoais nesse contexto, a atuação observará a Lei Geral de Proteção de Dados e será limitada ao necessário para proteção de direitos, prevenção a fraudes, cumprimento de obrigação legal ou exercício regular de direitos."),
      officialPtBlock("22. Limitação de Responsabilidade", "Não me responsabilizo por prejuízos decorrentes de interações feitas fora dos canais oficiais, pagamentos enviados a terceiros não reconhecidos, fornecimento voluntário de dados a perfis falsos, acesso a domínios fraudulentos, instalação de arquivos maliciosos ou contratação por intermediários não autorizados. Isso não significa ausência de cuidado. Significa que uma fraude praticada por terceiro não cria automaticamente responsabilidade por um ato que eu não pratiquei, não autorizei, não reconheci e não tinha como impedir de forma razoável. Cada situação será analisada de acordo com o caso concreto, com a legislação brasileira aplicável, com a conduta do usuário, com os canais oficiais disponíveis e com as medidas de segurança adotadas."),
      officialPtBlock("23. Atualizações desta Política", "Esta política pode ser atualizada quando houver mudança de legislação, alteração operacional, novo risco digital, mudança nas plataformas utilizadas, aprimoramento de segurança ou necessidade institucional. A inclusão ou remoção de canais na página oficial não exige alteração deste texto, porque esta política define a regra geral e a página de canais mantém a lista prática e atualizada. Recomendo que o usuário consulte periodicamente essa página, principalmente antes de contratar, pagar, enviar documentos, entrar em comunidades, responder mensagens ou confiar em perfis que aleguem ligação comigo. A versão válida será sempre a versão publicada no portal de políticas do site."),
      officialPtBlock("24. Vigência", "Esta política entra em vigor na data de sua publicação no site e permanece válida enquanto estiver disponível no portal de políticas. Ela substitui orientações informais anteriores sobre canais oficiais e comunicação institucional. A continuidade do uso do site, dos canais oficiais, dos conteúdos, das comunidades e dos serviços indica ciência das regras aqui descritas. Se alguma disposição for considerada inválida ou inaplicável por autoridade competente, as demais continuarão produzindo efeitos na maior extensão permitida pela legislação brasileira. Uma tolerância pontual diante de determinada situação não significa autorização permanente, renúncia de direito ou alteração desta política."),
      officialPtBlock("25. Disposições Finais", "Esta política deve ser lida junto com os Termos de Uso, a Política de Privacidade, as Diretrizes de Comunidade, as políticas do livro, as regras de propriedade intelectual, os documentos contratuais eventualmente firmados e as demais políticas publicadas no site. Conforme o caso, podem ser aplicadas a Lei Geral de Proteção de Dados, o Marco Civil da Internet, o Código de Defesa do Consumidor, a Lei de Direitos Autorais, a Lei da Propriedade Industrial, o Código Civil e o Código Penal. Nada aqui autoriza terceiros a usar meu nome, marca, imagem, assinatura, conteúdo ou identidade visual. Em caso de dúvida, a regra é simples e continua sendo a mais segura. Confirme pelo site oficial antes de agir.")
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
      },
      {
        pt: 'O escopo de cada projeto é definido antes do início do desenvolvimento e faz parte do acordo firmado entre as partes. Qualquer funcionalidade que não esteja expressamente prevista no escopo aprovado será tratada como serviço adicional, exigindo novo orçamento e aprovação formal. Isso não é rigidez, é organização. Mudanças de escopo após o início do desenvolvimento podem impactar prazo, valor e complexidade do projeto, e por isso precisam ser formalizadas para proteger ambas as partes.',
        en: 'The scope of each project is defined before development begins and is part of the agreement between the parties. Any functionality not expressly included in the approved scope will be treated as an additional service, requiring a new budget and formal approval. This is not rigidity, it is organization. Scope changes after development begins may impact timeline, cost, and project complexity, which is why they need to be formalized to protect both parties.'
      },
      {
        pt: 'O prazo estimado de desenvolvimento começa a contar a partir de dois marcos: a confirmação do pagamento inicial e o recebimento de todas as informações necessárias para iniciar o trabalho. Atrasos no envio de materiais, mudanças de escopo durante a execução, falta de validação em etapas intermediárias ou eventos de força maior podem resultar em prorrogação do prazo. O andamento do projeto depende tanto de mim quanto da participação ativa do cliente.',
        en: 'The estimated development timeline starts from two milestones: confirmation of the initial payment and receipt of all necessary information to begin the work. Delays in sending materials, scope changes during execution, lack of validation at intermediate stages, or force majeure events may result in timeline extensions. The project\'s progress depends on me as much as on the client\'s active participation.'
      },
      {
        pt: 'O modelo de pagamento que adoto é 50% antecipado e 50% na entrega. Esse modelo não é negociável para projetos padrão. O não pagamento de qualquer parcela me autoriza a suspender o desenvolvimento, suspender o acesso ao sistema e não realizar a entrega do código-fonte. O código-fonte somente é cedido após a quitação integral de todos os valores. Enquanto houver pendências financeiras, todos os direitos patrimoniais permanecem comigo.',
        en: 'The payment model I adopt is 50% upfront and 50% upon delivery. This model is non-negotiable for standard projects. Non-payment of any installment authorizes me to suspend development, suspend system access, and withhold source code delivery. The source code is only transferred after full payment of all amounts. While there are outstanding financial obligations, all property rights remain with me.'
      },
      {
        pt: 'Cada etapa entregue tem direito a até 5 rodadas de ajustes. Ajustes não solicitados dentro de 5 dias úteis após a entrega são considerados automaticamente aprovados. Solicitações adicionais além das rodadas previstas serão orçadas separadamente. A ausência de manifestação do cliente no prazo de 5 dias úteis após o envio de qualquer etapa implica aprovação formal, e essa aprovação tácita não poderá ser usada como justificativa para retrabalho gratuito.',
        en: 'Each delivered stage is entitled to up to 5 rounds of adjustments. Adjustments not requested within 5 business days after delivery are automatically considered approved. Additional requests beyond the planned rounds will be quoted separately. The client\'s lack of response within 5 business days after submission of any stage implies formal approval, and this tacit approval cannot be used as justification for free rework.'
      },
      {
        pt: 'Não garanto resultado financeiro, aumento de faturamento ou performance comercial de nenhum sistema que desenvolvo. Minha responsabilidade se limita ao funcionamento técnico dentro do escopo contratado. O sistema é uma ferramenta de apoio, e a gestão do negócio é responsabilidade exclusiva do cliente. Da mesma forma, não me responsabilizo por danos indiretos, lucros cessantes, perda de dados causada por terceiros ou ataques cibernéticos.',
        en: 'I do not guarantee financial results, revenue increases, or commercial performance for any system I develop. My responsibility is limited to technical functionality within the contracted scope. The system is a support tool, and business management is the client\'s exclusive responsibility. Likewise, I am not responsible for indirect damages, lost profits, data loss caused by third parties, or cyber attacks.'
      },
      {
        pt: 'Servidores, hospedagem, domínios e toda a infraestrutura em geral são de responsabilidade exclusiva do cliente, salvo quando houver serviço adicional expressamente contratado para esse fim. Não me responsabilizo por falhas de infraestrutura de terceiros, instabilidades de APIs ou plataformas externas, nem por mudanças ou descontinuação de serviços de terceiros que afetem o sistema.',
        en: 'Servers, hosting, domains, and all infrastructure in general are the client\'s exclusive responsibility, unless there is an additional service expressly contracted for that purpose. I am not responsible for third-party infrastructure failures, API instabilities or external platforms, nor for changes or discontinuation of third-party services that affect the system.'
      },
      {
        pt: 'A entrega do projeto ocorre após a confirmação do pagamento integral, podendo acontecer via servidor, envio de arquivos, ambiente de produção ou repositório, conforme o caso. A entrega não inclui instalação, configuração de servidores ou suporte contínuo, salvo quando expressamente contratado. Após a entrega, ofereço uma garantia técnica de 30 dias que cobre exclusivamente correção de erros de funcionamento relacionados ao escopo original. Novas funcionalidades, melhorias estéticas, mudanças estratégicas ou alterações solicitadas após aprovação não estão incluídas na garantia.',
        en: 'Project delivery occurs after confirmation of full payment, and may happen via server, file transfer, production environment, or repository, as applicable. Delivery does not include installation, server configuration, or ongoing support unless expressly contracted. After delivery, I offer a 30-day technical warranty covering exclusively bug fixes related to the original scope. New features, aesthetic improvements, strategic changes, or modifications requested after approval are not included in the warranty.'
      },
      {
        pt: 'Após o término do período de garantia, todo suporte, manutenção ou intervenção técnica passa a ser tratado como serviço adicional, cobrado separadamente com orçamento e prazo próprios. Os arquivos do projeto são mantidos por no mínimo 30 dias após a entrega final, e após esse período podem ser excluídos. Backups periódicos são responsabilidade exclusiva do cliente ou do provedor de hospedagem utilizado.',
        en: 'After the warranty period ends, all support, maintenance, or technical intervention is treated as an additional service, charged separately with its own budget and timeline. Project files are kept for at least 30 days after final delivery, and may be deleted after this period. Periodic backups are the exclusive responsibility of the client or the hosting provider used.'
      },
      {
        pt: 'A comunicação oficial ocorre exclusivamente pelos canais formais que estabeleço no início de cada projeto. Não me responsabilizo por comunicações realizadas fora desses canais. Toda comunicação relevante sobre o projeto deve ser documentada e acessível para ambas as partes. O cliente é responsável por fornecer todos os acessos, credenciais e informações necessárias para a execução do projeto, e não me responsabilizo por falhas decorrentes de acessos inválidos ou permissões insuficientes.',
        en: 'Official communication occurs exclusively through the formal channels I establish at the beginning of each project. I am not responsible for communications made outside these channels. All relevant project communication must be documented and accessible to both parties. The client is responsible for providing all access, credentials, and information necessary for project execution, and I am not responsible for failures resulting from invalid access or insufficient permissions.'
      },
      {
        pt: 'Atuo como profissional independente, sem vínculo empregatício, societário ou de subordinação. O código-fonte, arquitetura, scripts e elementos técnicos de cada projeto são obra intelectual de minha titularidade. O cliente recebe uma licença de uso limitada e intransferível, exclusivamente para uso do sistema em suas atividades. É vedado replicar, adaptar, sublicenciar ou comercializar a base técnica em outros projetos ou empresas. Permanecem do cliente sua marca, identidade visual, conteúdos e dados empresariais.',
        en: 'I work as an independent professional, without employment, corporate, or subordination ties. The source code, architecture, scripts, and technical elements of each project are intellectual works under my ownership. The client receives a limited, non-transferable license of use, exclusively for using the system in their activities. It is prohibited to replicate, adapt, sublicense, or commercialize the technical base in other projects or companies. The client retains their brand, visual identity, content, and business data.'
      },
      {
        pt: 'Modificações realizadas após a entrega por terceiros ou pelo próprio cliente são de responsabilidade exclusiva de quem as realizou, e qualquer garantia ou suporte fica automaticamente encerrado a partir desse momento. O projeto poderá ser suspenso em caso de inadimplência, ausência de informações, falta de validação ou alterações constantes de escopo sem formalização. Durante a suspensão, os prazos ficam parados, e a suspensão não implica cancelamento nem devolução de valores.',
        en: 'Modifications made after delivery by third parties or by the client themselves are the exclusive responsibility of whoever made them, and any warranty or support is automatically terminated from that point. The project may be suspended in case of non-payment, absence of information, lack of validation, or constant scope changes without formalization. During suspension, timelines are paused, and suspension does not imply cancellation or refund of amounts.'
      },
      {
        pt: 'O desenvolvimento pode ocorrer em ambiente de homologação antes da publicação em produção, e não me responsabilizo por falhas de testes feitos diretamente no ambiente de produção pelo cliente. A retomada de projetos suspensos depende da regularização de todas as pendências que motivaram a suspensão, podendo exigir revisão de prazos e custos. Sem manifestação do cliente em até 5 dias úteis após a entrega final, o sistema é considerado aceito definitivamente, encerrando a prestação de serviços e permanecendo apenas as obrigações de garantia previstas.',
        en: 'Development may occur in a staging environment before publishing to production, and I am not responsible for failures from tests performed directly in the production environment by the client. Resumption of suspended projects depends on regularization of all pending issues that motivated the suspension, and may require timeline and cost revisions. Without client response within 5 business days after final delivery, the system is considered definitively accepted, concluding the service provision with only the planned warranty obligations remaining.'
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
  },
  {
    id: 'disclaimer-livro',
    title: { pt: 'Disclaimer do Livro', en: 'Book Disclaimer' },
    paragraphs: [
      {
        pt: 'O livro "Superando Limites: da Rejeição ao Sucesso" é uma obra de desenvolvimento pessoal, escrita inteiramente a partir de vivências reais, reflexões próprias e aprendizados acumulados ao longo de anos de trajetória profissional e pessoal do autor. Cada capítulo foi construído com base em experiências concretas de superação, disciplina e construção de resultados.',
        en: 'The book "Overcoming Limits: from Rejection to Success" is a personal development work, written entirely from real experiences, personal reflections, and learnings accumulated over years of the author\'s professional and personal journey. Each chapter was built based on concrete experiences of overcoming, discipline, and building results.'
      },
      {
        pt: 'Esta obra não é um material técnico de psicologia, psiquiatria ou qualquer especialidade clínica. O conteúdo apresentado não substitui, em nenhuma circunstância, acompanhamento profissional de saúde mental, terapia, tratamento médico ou orientação clínica especializada. Se você enfrenta dificuldades emocionais ou psicológicas, procure um profissional habilitado.',
        en: 'This work is not a technical psychology, psychiatry, or any clinical specialty material. The content presented does not replace, under any circumstances, professional mental health support, therapy, medical treatment, or specialized clinical guidance. If you face emotional or psychological difficulties, seek a qualified professional.'
      },
      {
        pt: 'O objetivo do livro é inspirar, provocar reflexão e compartilhar uma perspectiva honesta e prática sobre temas como resiliência, autoconfiança, liderança e mentalidade de crescimento. As lições apresentadas são fruto da experiência pessoal do autor e devem ser interpretadas como tal, não como prescrições universais ou verdades absolutas.',
        en: 'The book\'s goal is to inspire, provoke reflection, and share an honest and practical perspective on themes such as resilience, self-confidence, leadership, and growth mindset. The lessons presented are the result of the author\'s personal experience and should be interpreted as such, not as universal prescriptions or absolute truths.'
      },
      {
        pt: 'A autenticidade é o pilar central desta obra. Tudo o que foi escrito foi vivido. Não há teorias emprestadas, fórmulas genéricas ou promessas de transformação instantânea. O livro existe para mostrar que é possível construir resultados mesmo diante de cenários adversos, mas o caminho de cada pessoa é único e depende de fatores individuais que nenhum livro pode controlar.',
        en: 'Authenticity is the central pillar of this work. Everything that was written was lived. There are no borrowed theories, generic formulas, or promises of instant transformation. The book exists to show that it is possible to build results even in adverse scenarios, but each person\'s path is unique and depends on individual factors that no book can control.'
      },
      {
        pt: 'Ao adquirir e ler esta obra, o leitor reconhece que o conteúdo é de natureza informativa e motivacional, baseado na trajetória pessoal do autor. A aplicação prática de qualquer conceito, reflexão ou aprendizado apresentado é de inteira responsabilidade do leitor.',
        en: 'By purchasing and reading this work, the reader acknowledges that the content is informational and motivational in nature, based on the author\'s personal trajectory. The practical application of any concept, reflection, or learning presented is entirely the reader\'s responsibility.'
      }
    ]
  },
  {
    id: 'livro-direitos-autorais',
    title: { pt: 'Livro Direitos Autorais', en: 'Book Copyright' },
    paragraphs: [
      {
        pt: 'A obra "Superando Limites: da Rejeição ao Sucesso" é integralmente protegida pela legislação brasileira de direitos autorais, em especial pela Lei nº 9.610/98, e está devidamente registrada na Fundação Biblioteca Nacional. Todos os direitos sobre o conteúdo, estrutura, título, capa, diagramação e identidade visual da obra são reservados ao autor.',
        en: 'The book "Overcoming Limits: from Rejection to Success" is fully protected by Brazilian copyright law, in particular Law No. 9,610/98, and is duly registered with the National Library Foundation. All rights over the content, structure, title, cover, layout, and visual identity of the work are reserved to the author.'
      },
      {
        pt: 'É expressamente proibida a cópia, reprodução, digitalização, transcrição, tradução, adaptação ou qualquer outra forma de duplicação do conteúdo, total ou parcial, por qualquer meio físico ou digital, sem autorização prévia e por escrito do autor. Essa proibição inclui o compartilhamento de trechos extensos em redes sociais, blogs, comunidades, grupos de mensagem e plataformas de armazenamento em nuvem.',
        en: 'The copy, reproduction, scanning, transcription, translation, adaptation, or any other form of duplication of the content, in whole or in part, by any physical or digital means, without prior written authorization from the author, is expressly prohibited. This prohibition includes sharing extensive excerpts on social networks, blogs, communities, messaging groups, and cloud storage platforms.'
      },
      {
        pt: 'A distribuição não autorizada da obra, seja gratuita ou onerosa, configura violação de direitos autorais e está sujeita às sanções civis e criminais previstas em lei, incluindo indenização por danos materiais e morais, além das penalidades estabelecidas pelo Código Penal Brasileiro nos artigos 184 e seguintes.',
        en: 'Unauthorized distribution of the work, whether free or paid, constitutes a copyright violation and is subject to the civil and criminal sanctions provided by law, including compensation for material and moral damages, in addition to the penalties established by the Brazilian Penal Code in articles 184 and following.'
      },
      {
        pt: 'A revenda da obra, em qualquer formato, sem autorização formal do autor, é igualmente proibida. Isso inclui marketplaces, sebos digitais, plataformas de revenda de e-books, grupos de Telegram, fóruns e qualquer canal não oficial. A comercialização legítima ocorre exclusivamente pelos canais autorizados informados na página oficial do livro.',
        en: 'Resale of the work, in any format, without formal authorization from the author, is equally prohibited. This includes marketplaces, digital used-book stores, e-book resale platforms, Telegram groups, forums, and any unofficial channel. Legitimate commercialization occurs exclusively through the authorized channels listed on the official book page.'
      },
      {
        pt: 'Citações breves para fins críticos, acadêmicos ou jornalísticos são permitidas desde que respeitem o limite razoável previsto em lei, mantenham a integridade do contexto original e atribuam a autoria de forma explícita, com nome do autor e título da obra. Qualquer uso que ultrapasse esse limite exige autorização formal.',
        en: 'Brief quotations for critical, academic, or journalistic purposes are permitted provided they respect the reasonable limit established by law, preserve the integrity of the original context, and explicitly attribute authorship, including the author\'s name and the title of the work. Any use beyond this limit requires formal authorization.'
      },
      {
        pt: 'Casos identificados de pirataria, distribuição ilegal ou apropriação indevida do conteúdo serão tratados com as medidas legais cabíveis, incluindo notificações extrajudiciais, solicitações de remoção junto a plataformas e provedores, e ações judiciais quando necessário. A proteção da obra é uma responsabilidade ativa, não uma formalidade.',
        en: 'Identified cases of piracy, illegal distribution, or undue appropriation of content will be addressed with the appropriate legal measures, including extrajudicial notifications, takedown requests to platforms and providers, and judicial actions when necessary. Protecting the work is an active responsibility, not a formality.'
      }
    ]
  },
  {
    id: 'livro-licenca-de-uso',
    title: { pt: 'Livro Licença de Uso', en: 'Book Usage License' },
    paragraphs: [
      {
        pt: 'A aquisição da obra "Superando Limites: da Rejeição ao Sucesso" concede ao comprador uma licença pessoal, intransferível e não exclusiva para a leitura e o uso particular do conteúdo. Essa licença autoriza o leitor a utilizar a obra como ferramenta de desenvolvimento pessoal, estudo individual e enriquecimento próprio, dentro dos limites estabelecidos nesta política.',
        en: 'The acquisition of the book "Overcoming Limits: from Rejection to Success" grants the buyer a personal, non-transferable, and non-exclusive license for reading and private use of the content. This license authorizes the reader to use the work as a tool for personal development, individual study, and self-enrichment, within the limits established in this policy.'
      },
      {
        pt: 'O comprador pode ler a obra integralmente, fazer anotações pessoais em sua cópia, citar trechos curtos com a devida atribuição em conversas, palestras ou produções autorais, e utilizar os aprendizados em sua vida pessoal e profissional. Esse é o uso legítimo e esperado da obra.',
        en: 'The buyer may read the work in full, make personal notes on their copy, cite short excerpts with proper attribution in conversations, lectures, or original productions, and apply the learnings in personal and professional life. This is the legitimate and expected use of the work.'
      },
      {
        pt: 'Não é permitido revender, alugar, emprestar comercialmente, ceder, doar versões digitais, compartilhar arquivos, postar em grupos de mensagem, anexar em e-mails, hospedar em nuvens públicas, transmitir em lives ou qualquer outra forma de redistribuição do conteúdo. A licença adquirida é estritamente individual.',
        en: 'It is not permitted to resell, rent, lend commercially, transfer, donate digital versions, share files, post in messaging groups, attach to emails, host on public clouds, broadcast on live streams, or any other form of redistribution of the content. The acquired license is strictly individual.'
      },
      {
        pt: 'Também não é permitido reproduzir partes substanciais da obra em cursos, treinamentos, materiais didáticos, produtos digitais, livros próprios ou qualquer conteúdo de terceiros, ainda que com atribuição. Esse tipo de uso configura aproveitamento comercial indevido e exige licenciamento formal.',
        en: 'It is also not permitted to reproduce substantial parts of the work in courses, trainings, educational materials, digital products, own books, or any third-party content, even with attribution. This type of use constitutes undue commercial exploitation and requires formal licensing.'
      },
      {
        pt: 'A licença não autoriza traduções não oficiais, adaptações em outros formatos (audiobooks, vídeos, podcasts, resumos comerciais) ou criação de obras derivadas. Qualquer iniciativa nesse sentido depende de contrato específico firmado diretamente com o autor.',
        en: 'The license does not authorize unofficial translations, adaptations in other formats (audiobooks, videos, podcasts, commercial summaries), or the creation of derivative works. Any initiative in this regard depends on a specific contract signed directly with the author.'
      },
      {
        pt: 'O descumprimento das condições desta licença extingue automaticamente o direito de uso da obra e sujeita o infrator às medidas previstas na seção de direitos autorais, sem prejuízo de outras providências legais cabíveis.',
        en: 'Failure to comply with the conditions of this license automatically terminates the right to use the work and subjects the infringer to the measures provided in the copyright section, without prejudice to other applicable legal actions.'
      }
    ]
  },
  {
    id: 'livro-termos-de-compra',
    title: { pt: 'Livro Termos de Compra e Acesso', en: 'Book Purchase and Access Terms' },
    paragraphs: [
      {
        pt: 'A obra está disponível em duas modalidades oficiais: o livro físico, comercializado pela Amazon, e a versão digital, também distribuída pelos canais autorizados informados na página oficial do livro. Toda compra deve ser realizada exclusivamente nesses canais para garantir autenticidade, qualidade e suporte adequado.',
        en: 'The work is available in two official modalities: the physical book, sold through Amazon, and the digital version, also distributed by the authorized channels listed on the official book page. All purchases must be made exclusively through these channels to ensure authenticity, quality, and proper support.'
      },
      {
        pt: 'A entrega do livro físico segue as condições de prazo, frete e logística da plataforma de venda escolhida pelo comprador. Eventuais atrasos, extravios ou problemas de transporte devem ser tratados diretamente com a plataforma responsável pela operação logística, conforme as políticas vigentes em cada serviço.',
        en: 'Delivery of the physical book follows the deadline, shipping, and logistics conditions of the sales platform chosen by the buyer. Any delays, losses, or transport issues must be handled directly with the platform responsible for the logistics operation, according to the policies in force on each service.'
      },
      {
        pt: 'A versão digital é entregue por meio de download seguro ou acesso autenticado, conforme o canal oficial utilizado na compra. O acesso é liberado após a confirmação do pagamento, em prazo geralmente imediato, podendo levar até algumas horas em casos excepcionais relacionados à validação da transação pelo intermediário financeiro.',
        en: 'The digital version is delivered via secure download or authenticated access, depending on the official channel used at the time of purchase. Access is granted after payment confirmation, usually immediately, and may take up to a few hours in exceptional cases related to transaction validation by the financial intermediary.'
      },
      {
        pt: 'Em caso de problema técnico no acesso à versão digital, como falha de download, link expirado ou erro na plataforma, o comprador deve entrar em contato pelos canais oficiais de atendimento informados no site, apresentando o comprovante de compra. O suporte é prestado em horário comercial e o tempo de resposta varia conforme a complexidade do caso.',
        en: 'In case of a technical issue accessing the digital version, such as download failure, expired link, or platform error, the buyer should contact the official support channels listed on the site, presenting the proof of purchase. Support is provided during business hours and response time varies according to the complexity of the case.'
      },
      {
        pt: 'É responsabilidade do comprador armazenar adequadamente o arquivo digital adquirido, mantendo cópias de segurança em locais privados e seguros. A reemissão de acesso depende da verificação da compra original e pode estar sujeita à disponibilidade técnica da plataforma utilizada na transação.',
        en: 'It is the buyer\'s responsibility to properly store the acquired digital file, keeping secure backups in private and safe locations. Reissuing access depends on verifying the original purchase and may be subject to the technical availability of the platform used in the transaction.'
      },
      {
        pt: 'Compras realizadas fora dos canais oficiais não são reconhecidas pelo autor e não geram direito a suporte, atualizações, garantia ou qualquer relacionamento pós-venda. Adquirir a obra apenas pelos canais autorizados é a forma de garantir a experiência completa que ela foi desenhada para oferecer.',
        en: 'Purchases made outside the official channels are not recognized by the author and do not entitle the buyer to support, updates, warranty, or any post-sale relationship. Acquiring the work only through authorized channels is the way to ensure the complete experience it was designed to deliver.'
      }
    ]
  },
  {
    id: 'livro-politica-de-reembolso',
    title: { pt: 'Livro Política de Reembolso', en: 'Book Refund Policy' },
    paragraphs: [
      {
        pt: 'O reembolso da obra "Superando Limites: da Rejeição ao Sucesso" segue as regras estabelecidas pelo Código de Defesa do Consumidor brasileiro e pelas políticas específicas das plataformas oficiais utilizadas na venda. Para o livro físico, vale a política da plataforma de comercialização, que normalmente garante prazo de arrependimento de sete dias corridos a contar da data de recebimento.',
        en: 'Refunds for the book "Overcoming Limits: from Rejection to Success" follow the rules established by the Brazilian Consumer Protection Code and the specific policies of the official platforms used in the sale. For the physical book, the policy of the sales platform applies, which typically guarantees a withdrawal period of seven calendar days from the date of receipt.'
      },
      {
        pt: 'Para a versão digital, o prazo padrão de solicitação de reembolso é de sete dias corridos contados a partir da liberação do acesso, conforme previsto na legislação brasileira para produtos digitais adquiridos fora do estabelecimento comercial. A solicitação deve ser feita pelo mesmo canal oficial onde a compra foi realizada.',
        en: 'For the digital version, the standard refund request period is seven calendar days from the release of access, as established by Brazilian law for digital products purchased outside the commercial establishment. The request must be made through the same official channel where the purchase was made.'
      },
      {
        pt: 'O reembolso será processado integralmente quando a solicitação ocorrer dentro do prazo legal e o comprador apresentar o comprovante de aquisição. O valor é devolvido pela mesma forma de pagamento utilizada na compra, podendo levar alguns dias úteis para ser refletido conforme as regras do meio de pagamento e da plataforma.',
        en: 'The refund will be processed in full when the request occurs within the legal period and the buyer presents proof of purchase. The amount is returned via the same payment method used in the purchase and may take a few business days to be reflected, according to the rules of the payment method and the platform.'
      },
      {
        pt: 'Solicitações fora do prazo legal serão analisadas individualmente, considerando o motivo apresentado, o histórico da compra e a integridade do produto. Não há obrigação legal de reembolso após o período de arrependimento, mas situações excepcionais podem ser avaliadas com bom senso e proporcionalidade.',
        en: 'Requests outside the legal period will be analyzed individually, considering the reason presented, the purchase history, and the integrity of the product. There is no legal obligation to refund after the withdrawal period, but exceptional situations may be evaluated with reasonableness and proportionality.'
      },
      {
        pt: 'Não serão aceitos pedidos de reembolso baseados em divergência de expectativa subjetiva sobre o conteúdo, uma vez que a página oficial do livro descreve com clareza a proposta da obra, seu propósito como material de desenvolvimento pessoal e seus limites em relação a temas técnicos. Recomenda-se a leitura atenta da apresentação antes da compra.',
        en: 'Refund requests based on subjective expectation divergence about the content will not be accepted, since the official book page clearly describes the proposal of the work, its purpose as personal development material, and its limits regarding technical subjects. It is recommended to read the presentation carefully before purchasing.'
      },
      {
        pt: 'Compras realizadas fora dos canais oficiais não estão cobertas por esta política e devem ser tratadas diretamente com o vendedor responsável. Mais um motivo para adquirir a obra apenas pelos canais autorizados, garantindo todos os direitos previstos em lei e a transparência completa da relação de consumo.',
        en: 'Purchases made outside the official channels are not covered by this policy and must be handled directly with the seller responsible. Another reason to acquire the work only through authorized channels, ensuring all rights provided by law and full transparency in the consumer relationship.'
      }
    ]
  },
  {
    id: 'livro-limitacao-de-responsabilidade',
    title: { pt: 'Livro Limitação de Responsabilidade', en: 'Book Limitation of Liability' },
    paragraphs: [
      {
        pt: 'O conteúdo da obra "Superando Limites: da Rejeição ao Sucesso" tem natureza estritamente informativa, educacional e motivacional. As reflexões, histórias e aprendizados apresentados são frutos da experiência pessoal do autor e devem ser compreendidos como uma perspectiva, não como prescrição universal, fórmula garantida ou método clínico.',
        en: 'The content of the book "Overcoming Limits: from Rejection to Success" is strictly informational, educational, and motivational in nature. The reflections, stories, and learnings presented are the result of the author\'s personal experience and should be understood as a perspective, not as a universal prescription, guaranteed formula, or clinical method.'
      },
      {
        pt: 'O autor não se responsabiliza por decisões pessoais, profissionais, financeiras, emocionais ou de qualquer outra natureza tomadas pelo leitor a partir da interpretação do conteúdo. Cada pessoa possui contexto, histórico e circunstâncias únicas, e qualquer aplicação prática das ideias apresentadas é de responsabilidade integral do leitor.',
        en: 'The author is not responsible for personal, professional, financial, emotional, or any other type of decisions made by the reader based on interpretation of the content. Each person has a unique context, history, and circumstances, and any practical application of the ideas presented is entirely the reader\'s responsibility.'
      },
      {
        pt: 'A obra não substitui acompanhamento profissional especializado em áreas como psicologia, psiquiatria, medicina, direito, finanças ou consultoria de carreira. Quando o leitor identificar necessidade de orientação técnica em qualquer dessas áreas, deve buscar profissionais habilitados, com formação reconhecida e capacidade de avaliar individualmente o caso concreto.',
        en: 'The work does not replace specialized professional support in areas such as psychology, psychiatry, medicine, law, finance, or career consulting. When the reader identifies a need for technical guidance in any of these areas, they should seek qualified professionals with recognized training and the ability to individually assess the specific case.'
      },
      {
        pt: 'Resultados, transformações ou conquistas relatados na obra refletem a trajetória individual do autor e não constituem promessa, garantia ou expectativa replicável. Fatores externos como contexto socioeconômico, saúde, mercado, oportunidades, esforço pessoal e elementos imprevisíveis influenciam diretamente qualquer resultado real obtido por terceiros.',
        en: 'Results, transformations, or achievements reported in the work reflect the author\'s individual trajectory and do not constitute a promise, guarantee, or replicable expectation. External factors such as socioeconomic context, health, market, opportunities, personal effort, and unpredictable elements directly influence any real result obtained by third parties.'
      },
      {
        pt: 'Ao adquirir e ler a obra, o leitor reconhece e aceita expressamente que o autor, seus colaboradores e parceiros não respondem por danos diretos, indiretos, incidentais ou consequenciais decorrentes da leitura, interpretação ou aplicação do conteúdo, salvo nos limites estritamente previstos pela legislação consumerista brasileira.',
        en: 'By purchasing and reading the work, the reader expressly acknowledges and accepts that the author, their collaborators, and partners are not liable for direct, indirect, incidental, or consequential damages arising from the reading, interpretation, or application of the content, except within the limits strictly provided by Brazilian consumer law.'
      }
    ]
  },
  {
    id: 'livro-uso-de-marca',
    title: { pt: 'Livro Uso de Marca e Nome', en: 'Book Brand and Name Usage' },
    paragraphs: [
      {
        pt: 'O nome do autor, o título da obra "Superando Limites: da Rejeição ao Sucesso", a identidade visual associada ao livro, capa, tipografia, paleta de cores e demais elementos de marca são protegidos como ativos autorais e de identidade profissional. Sua utilização requer autorização prévia, formal e específica para cada finalidade pretendida.',
        en: 'The author\'s name, the title of the work "Overcoming Limits: from Rejection to Success", the visual identity associated with the book, cover, typography, color palette, and other brand elements are protected as authorial and professional identity assets. Their use requires prior, formal, and specific authorization for each intended purpose.'
      },
      {
        pt: 'É proibido o uso comercial da marca, do nome do autor ou da obra em produtos, serviços, cursos, mentorias, eventos, materiais publicitários ou qualquer iniciativa que sugira vínculo, parceria, endosso ou recomendação que não tenha sido formalmente estabelecida. Associações indevidas configuram apropriação de marca e podem ser tratadas judicialmente.',
        en: 'Commercial use of the brand, author\'s name, or the work in products, services, courses, mentorships, events, advertising materials, or any initiative suggesting a link, partnership, endorsement, or recommendation that has not been formally established is prohibited. Improper associations constitute brand appropriation and may be addressed judicially.'
      },
      {
        pt: 'Citações em conteúdos jornalísticos, acadêmicos ou em produções autorais legítimas que mencionem o livro ou o autor são bem-vindas, desde que feitas com precisão, sem distorção do contexto original e com a devida atribuição. Resenhas, recomendações espontâneas e debates honestos sobre a obra são incentivados e fazem parte da vida natural de qualquer livro.',
        en: 'Quotations in journalistic, academic content, or legitimate authorial productions that mention the book or the author are welcome, provided they are made accurately, without distortion of the original context, and with proper attribution. Reviews, spontaneous recommendations, and honest debates about the work are encouraged and are part of the natural life of any book.'
      },
      {
        pt: 'O uso da imagem, voz ou trechos de entrevistas do autor em conteúdos próprios de terceiros depende de autorização formal, especialmente quando houver finalidade comercial, educacional remunerada ou veiculação em larga escala. Recortes descontextualizados que comprometam a integridade do discurso do autor não são aceitos.',
        en: 'The use of the author\'s image, voice, or excerpts from interviews in third-party content depends on formal authorization, especially when there is commercial, paid educational, or large-scale broadcasting purposes. Out-of-context clips that compromise the integrity of the author\'s discourse are not accepted.'
      },
      {
        pt: 'Solicitações de uso de marca, nome ou obra para fins comerciais, parcerias institucionais, divulgação em eventos ou publicações profissionais devem ser encaminhadas pelos canais oficiais de contato. Cada pedido é analisado individualmente, considerando o alinhamento com os valores do autor e o contexto específico da iniciativa.',
        en: 'Requests for brand, name, or work usage for commercial purposes, institutional partnerships, event promotion, or professional publications must be submitted through the official contact channels. Each request is analyzed individually, considering alignment with the author\'s values and the specific context of the initiative.'
      }
    ]
  },
  {
    id: 'livro-canais-oficiais',
    title: { pt: 'Livro Canais Oficiais e Compra Segura', en: 'Book Official Channels and Safe Purchase' },
    paragraphs: [
      {
        pt: 'A forma mais segura, completa e correta de adquirir "Superando Limites: da Rejeição ao Sucesso" é pelos canais oficiais informados na página do livro. São eles que garantem o conteúdo na íntegra, na sua versão mais atual, com a qualidade editorial original e com todo o suporte vinculado à experiência de leitura que a obra foi pensada para entregar.',
        en: 'The safest, most complete, and correct way to acquire "Overcoming Limits: from Rejection to Success" is through the official channels listed on the book page. They guarantee the full content, in its most up-to-date version, with the original editorial quality and all the support linked to the reading experience the work was designed to deliver.'
      },
      {
        pt: 'Comprar pelos canais oficiais significa receber a obra exatamente como ela foi concebida pelo autor, sem cortes, sem versões intermediárias e sem perda de qualidade. Significa também ter acesso a eventuais atualizações, ao atendimento direto em caso de problemas com o material e à garantia de estar dentro de uma relação de consumo legítima e protegida pela legislação brasileira.',
        en: 'Buying through official channels means receiving the work exactly as conceived by the author, without cuts, without intermediate versions, and without loss of quality. It also means having access to any updates, direct support in case of issues with the material, and the assurance of being within a legitimate consumer relationship protected by Brazilian law.'
      },
      {
        pt: 'Cópias circulando em grupos de Telegram, fóruns, redes sociais e plataformas não autorizadas costumam ser versões incompletas, desatualizadas, com erros de formatação, capítulos ausentes ou trechos editados sem autorização. Além de comprometerem a experiência de leitura, esses arquivos não dão acesso a suporte, atualizações ou qualquer canal direto com o autor.',
        en: 'Copies circulating in Telegram groups, forums, social networks, and unauthorized platforms are usually incomplete, outdated versions, with formatting errors, missing chapters, or excerpts edited without authorization. In addition to compromising the reading experience, these files do not grant access to support, updates, or any direct channel with the author.'
      },
      {
        pt: 'Quem adquire pelos canais oficiais investe não apenas em um livro, mas no trabalho autoral por trás dele e no compromisso contínuo do autor em produzir conteúdo de valor real. É uma escolha que protege a obra, fortalece o ecossistema de produção independente e assegura que cada nova versão, edição e entrega futura mantenha o mesmo padrão de profissionalismo.',
        en: 'Those who purchase through official channels invest not only in a book, but in the authorial work behind it and in the author\'s ongoing commitment to producing content of real value. It is a choice that protects the work, strengthens the independent production ecosystem, and ensures that each new version, edition, and future delivery maintains the same standard of professionalism.'
      },
      {
        pt: 'Se você recebeu o livro por outra fonte e gostou do conteúdo, considere apoiar o trabalho adquirindo a versão oficial. Mais do que uma questão de legalidade, é o gesto que sustenta a continuidade da obra e permite que o autor siga produzindo material com a profundidade e o cuidado que esse tipo de leitura exige.',
        en: 'If you received the book from another source and enjoyed the content, consider supporting the work by acquiring the official version. More than a matter of legality, it is the gesture that sustains the continuity of the work and allows the author to keep producing material with the depth and care this type of reading requires.'
      }
    ]
  },
  {
    id: 'livro-jurisdicao',
    title: { pt: 'Livro Jurisdição', en: 'Book Jurisdiction' },
    paragraphs: [
      {
        pt: 'Todas as relações jurídicas decorrentes da aquisição, leitura, distribuição ou qualquer uso da obra "Superando Limites: da Rejeição ao Sucesso" são regidas pelas leis da República Federativa do Brasil, em especial pela Lei nº 9.610/98 (Direitos Autorais), pela Lei nº 8.078/90 (Código de Defesa do Consumidor) e pela Lei nº 13.709/18 (LGPD), no que couber.',
        en: 'All legal relationships arising from the acquisition, reading, distribution, or any use of the book "Overcoming Limits: from Rejection to Success" are governed by the laws of the Federative Republic of Brazil, in particular Law No. 9,610/98 (Copyright), Law No. 8,078/90 (Consumer Protection Code), and Law No. 13,709/18 (LGPD), where applicable.'
      },
      {
        pt: 'Fica eleito o foro da comarca de Recife, estado de Pernambuco, como competente para dirimir quaisquer controvérsias decorrentes desta política, da obra ou de sua comercialização, com renúncia expressa a qualquer outro, por mais privilegiado que seja, salvo nos casos em que a legislação consumerista determinar foro diverso em favor do consumidor.',
        en: 'The jurisdiction of the district of Recife, state of Pernambuco, is hereby elected as competent to resolve any disputes arising from this policy, the work, or its commercialization, with express waiver of any other, however privileged, except in cases where consumer legislation determines a different jurisdiction in favor of the consumer.'
      },
      {
        pt: 'A escolha da jurisdição não restringe os direitos do consumidor previstos em lei. Sempre que a legislação aplicável determinar foro mais favorável ao adquirente, especialmente em relações de consumo a distância, prevalecerá o entendimento mais protetivo, conforme orientação dos tribunais brasileiros.',
        en: 'The choice of jurisdiction does not restrict the consumer rights provided by law. Whenever applicable legislation determines a more favorable jurisdiction to the buyer, especially in distance consumer relations, the most protective understanding shall prevail, in accordance with the guidance of Brazilian courts.'
      },
      {
        pt: 'Notificações extrajudiciais, solicitações formais e comunicações oficiais relacionadas à obra devem ser direcionadas pelos canais de contato indicados no site, em formato escrito, contendo identificação completa do remetente e descrição clara do assunto. O tempo de resposta varia conforme a complexidade da demanda apresentada.',
        en: 'Extrajudicial notifications, formal requests, and official communications related to the work must be addressed through the contact channels indicated on the site, in written form, containing complete identification of the sender and a clear description of the subject. Response time varies according to the complexity of the demand presented.'
      },
      {
        pt: 'Disputas internacionais envolvendo aquisições realizadas por leitores fora do Brasil são igualmente regidas pela legislação brasileira, sem prejuízo da aplicação de tratados internacionais de proteção de direitos autorais dos quais o Brasil seja signatário, como a Convenção de Berna.',
        en: 'International disputes involving purchases made by readers outside Brazil are equally governed by Brazilian law, without prejudice to the application of international copyright protection treaties to which Brazil is a signatory, such as the Berne Convention.'
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
