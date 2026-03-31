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
      }
    ],
    items: [
      { pt: 'Spam, autopromoção excessiva e flood são proibidos', en: 'Spam, excessive self-promotion, and flooding are prohibited' },
      { pt: 'Compartilhamento de conteúdo ilegal resulta em banimento imediato', en: 'Sharing illegal content results in immediate ban' },
      { pt: 'Discussões devem ser construtivas e focadas nos temas do servidor', en: 'Discussions should be constructive and focused on server topics' },
      { pt: 'A equipe de moderação pode remover conteúdo ou membros a qualquer momento', en: 'The moderation team may remove content or members at any time' },
      { pt: 'Tentativas de manipulação, phishing ou engenharia social são tratadas com tolerância zero', en: 'Manipulation attempts, phishing, or social engineering are treated with zero tolerance' }
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
      }
    ],
    items: [
      { pt: 'Desenvolvimento de sistemas personalizados (web, APIs, dashboards, plataformas)', en: 'Custom systems development (web, APIs, dashboards, platforms)' },
      { pt: 'Arquitetura de software para projetos novos ou reestruturação de projetos existentes', en: 'Software architecture for new projects or restructuring existing ones' },
      { pt: 'Automações de processos internos e integrações entre sistemas', en: 'Internal process automations and system integrations' },
      { pt: 'Consultoria técnica para decisões estratégicas de tecnologia', en: 'Technical consulting for strategic technology decisions' },
      { pt: 'Bots e ferramentas para Discord com foco em comunidades profissionais', en: 'Discord bots and tools focused on professional communities' },
      { pt: 'Projetos de infraestrutura e deploy com foco em custo-benefício', en: 'Infrastructure and deployment projects focused on cost-effectiveness' }
    ]
  },
  {
    id: 'o-que-nao-faco',
    title: { pt: 'O Que Eu Não Faço', en: 'What I Don\'t Do' },
    paragraphs: [
      {
        pt: 'Tão importante quanto saber o que ofereço é entender o que não faz parte do meu escopo. Essa clareza protege ambas as partes e evita frustrações.',
        en: 'As important as knowing what I offer is understanding what is not part of my scope. This clarity protects both parties and avoids frustrations.'
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
      { pt: 'Não presto suporte ilimitado após a entrega sem acordo prévio', en: 'I do not provide unlimited support after delivery without prior agreement' }
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
