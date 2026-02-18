export type Criticality = 'critical' | 'important' | 'complementary';

export interface ChecklistItem {
  text: { pt: string; en: string };
  description: { pt: string; en: string };
  risk: { pt: string; en: string };
  criticality: Criticality;
}

export interface ChecklistCategory {
  name: { pt: string; en: string };
  description: { pt: string; en: string };
  items: ChecklistItem[];
}

export interface ChecklistData {
  id: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  path: { pt: string; en: string };
  categories: ChecklistCategory[];
}

export const CRITICALITY_WEIGHTS: Record<Criticality, number> = {
  critical: 3,
  important: 2,
  complementary: 1,
};

export function getTotalItems(checklist: ChecklistData): number {
  return checklist.categories.reduce((sum, cat) => sum + cat.items.length, 0);
}

export function getAllItems(checklist: ChecklistData): ChecklistItem[] {
  return checklist.categories.flatMap((cat) => cat.items);
}

export function calculateWeightedProgress(checklist: ChecklistData, checked: boolean[]): number {
  const allItems = getAllItems(checklist);
  const totalWeight = allItems.reduce((sum, item) => sum + CRITICALITY_WEIGHTS[item.criticality], 0);
  if (totalWeight === 0) return 0;
  const completedWeight = allItems.reduce(
    (sum, item, i) => sum + (checked[i] ? CRITICALITY_WEIGHTS[item.criticality] : 0),
    0
  );
  return Math.round((completedWeight / totalWeight) * 100);
}

export const checklists: ChecklistData[] = [
  {
    id: 'seguranca-conta-discord',
    title: { pt: 'Segurança de Conta Discord', en: 'Discord Account Security' },
    description: {
      pt: 'Protocolo de auditoria para proteger contas Discord contra vetores de ataque comuns, engenharia social e comprometimento de sessões.',
      en: 'Audit protocol to protect Discord accounts against common attack vectors, social engineering, and session compromise.',
    },
    path: { pt: '/checklists/seguranca-conta-discord', en: '/en-us/checklists/discord-account-security' },
    categories: [
      {
        name: { pt: 'Autenticação e Acesso', en: 'Authentication & Access' },
        description: {
          pt: 'Controles primários de autenticação que definem a primeira barreira contra acessos não autorizados.',
          en: 'Primary authentication controls that define the first barrier against unauthorized access.',
        },
        items: [
          {
            text: {
              pt: 'Ativar autenticação de dois fatores (2FA) via aplicativo autenticador',
              en: 'Enable two-factor authentication (2FA) via authenticator app',
            },
            description: {
              pt: 'A 2FA adiciona uma camada de verificação além da senha. Aplicativos autenticadores (TOTP) são preferíveis a SMS, pois não estão sujeitos a ataques de SIM swap.',
              en: '2FA adds a verification layer beyond the password. Authenticator apps (TOTP) are preferable to SMS as they are not subject to SIM swap attacks.',
            },
            risk: {
              pt: 'Sem 2FA, basta a senha ser comprometida para perder acesso total à conta.',
              en: 'Without 2FA, a compromised password alone results in total account loss.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Utilizar senha forte com mínimo de 16 caracteres, sem reutilização',
              en: 'Use a strong password with at least 16 characters, without reuse',
            },
            description: {
              pt: 'Senhas reutilizadas são o vetor mais comum de comprometimento. Use um gerenciador de senhas para gerar e armazenar credenciais únicas por serviço.',
              en: 'Reused passwords are the most common compromise vector. Use a password manager to generate and store unique credentials per service.',
            },
            risk: {
              pt: 'Senhas fracas ou reutilizadas podem ser quebradas por credential stuffing em minutos.',
              en: 'Weak or reused passwords can be cracked via credential stuffing within minutes.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Proteger o e-mail vinculado à conta com 2FA independente',
              en: 'Protect the email linked to the account with independent 2FA',
            },
            description: {
              pt: 'O e-mail é a chave-mestra de recuperação. Se um atacante comprometer o e-mail, pode redefinir a senha do Discord mesmo com 2FA ativo.',
              en: 'Email is the master recovery key. If an attacker compromises the email, they can reset the Discord password even with 2FA enabled.',
            },
            risk: {
              pt: 'Comprometimento do e-mail resulta em bypass completo de todas as proteções da conta.',
              en: 'Email compromise results in complete bypass of all account protections.',
            },
            criticality: 'critical',
          },
        ],
      },
      {
        name: { pt: 'Engenharia Social', en: 'Social Engineering' },
        description: {
          pt: 'Defesas contra manipulação psicológica e ataques de phishing que exploram confiança humana.',
          en: 'Defenses against psychological manipulation and phishing attacks that exploit human trust.',
        },
        items: [
          {
            text: {
              pt: 'Desativar mensagens diretas de servidores públicos',
              en: 'Disable direct messages from public servers',
            },
            description: {
              pt: 'Servidores públicos são a principal origem de ataques de phishing via DM. Desativar essa opção reduz drasticamente a superfície de ataque social.',
              en: 'Public servers are the main source of phishing attacks via DM. Disabling this option drastically reduces the social attack surface.',
            },
            risk: {
              pt: 'DMs abertas de servidores públicos são o canal mais usado para phishing e scam.',
              en: 'Open DMs from public servers are the most used channel for phishing and scams.',
            },
            criticality: 'important',
          },
          {
            text: {
              pt: 'Nunca clicar em links suspeitos enviados por DM, mesmo de contatos conhecidos',
              en: 'Never click suspicious links sent via DM, even from known contacts',
            },
            description: {
              pt: 'Contas comprometidas frequentemente enviam links maliciosos automaticamente. Valide sempre a autenticidade do remetente por outro canal antes de interagir.',
              en: 'Compromised accounts often send malicious links automatically. Always validate sender authenticity through another channel before interacting.',
            },
            risk: {
              pt: 'Links de phishing podem capturar tokens de sessão sem necessidade de senha.',
              en: 'Phishing links can capture session tokens without requiring a password.',
            },
            criticality: 'important',
          },
          {
            text: {
              pt: 'Nunca compartilhar tokens de bot ou credenciais em canais de texto',
              en: 'Never share bot tokens or credentials in text channels',
            },
            description: {
              pt: 'Tokens expostos em mensagens são indexados por bots de scraping em segundos. Mesmo deletar a mensagem pode não impedir o comprometimento se já foi capturada.',
              en: 'Exposed tokens in messages are indexed by scraping bots within seconds. Even deleting the message may not prevent compromise if already captured.',
            },
            risk: {
              pt: 'Token exposto resulta em controle total do bot pelo atacante.',
              en: 'Exposed token results in full bot control by the attacker.',
            },
            criticality: 'critical',
          },
        ],
      },
      {
        name: { pt: 'Sessões e Dispositivos', en: 'Sessions & Devices' },
        description: {
          pt: 'Monitoramento de sessões ativas e controle de dispositivos autorizados para detectar acessos não autorizados.',
          en: 'Active session monitoring and authorized device control to detect unauthorized access.',
        },
        items: [
          {
            text: {
              pt: 'Verificar e revogar sessões ativas desconhecidas periodicamente',
              en: 'Verify and revoke unknown active sessions periodically',
            },
            description: {
              pt: 'Sessões persistentes podem manter acesso mesmo após troca de senha. Revise semanalmente a lista de dispositivos conectados para identificar sessões suspeitas.',
              en: 'Persistent sessions can maintain access even after password change. Review the connected devices list weekly to identify suspicious sessions.',
            },
            risk: {
              pt: 'Sessões não monitoradas podem manter acesso de atacantes por semanas.',
              en: 'Unmonitored sessions can maintain attacker access for weeks.',
            },
            criticality: 'important',
          },
          {
            text: {
              pt: 'Revisar e revogar aplicações OAuth autorizadas desnecessárias',
              en: 'Review and revoke unnecessary authorized OAuth applications',
            },
            description: {
              pt: 'Aplicações OAuth com permissões excessivas podem ler mensagens, manipular servidores e acessar dados pessoais. Mantenha apenas aplicações de confiança.',
              en: 'OAuth applications with excessive permissions can read messages, manipulate servers, and access personal data. Keep only trusted applications.',
            },
            risk: {
              pt: 'Aplicações maliciosas com permissão OAuth podem operar silenciosamente com sua identidade.',
              en: 'Malicious applications with OAuth permission can silently operate with your identity.',
            },
            criticality: 'important',
          },
        ],
      },
      {
        name: { pt: 'Recuperação e Contingência', en: 'Recovery & Contingency' },
        description: {
          pt: 'Procedimentos de recuperação para garantir acesso em cenários de comprometimento ou perda de dispositivo.',
          en: 'Recovery procedures to ensure access in compromise or device loss scenarios.',
        },
        items: [
          {
            text: {
              pt: 'Armazenar códigos de recuperação 2FA em local seguro e offline',
              en: 'Store 2FA recovery codes in a secure, offline location',
            },
            description: {
              pt: 'Códigos de recuperação são a última linha de defesa se o dispositivo autenticador for perdido. Armazene-os impressos ou em cofre digital criptografado, nunca em texto plano.',
              en: 'Recovery codes are the last line of defense if the authenticator device is lost. Store them printed or in an encrypted digital vault, never in plain text.',
            },
            risk: {
              pt: 'Sem códigos de recuperação acessíveis, perda do autenticador significa perda permanente da conta.',
              en: 'Without accessible recovery codes, authenticator loss means permanent account loss.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Manter um e-mail secundário de recuperação configurado e protegido',
              en: 'Keep a secondary recovery email configured and protected',
            },
            description: {
              pt: 'Um e-mail secundário pode acelerar a recuperação em caso de comprometimento do e-mail principal. Deve ter proteções iguais ou superiores ao primário.',
              en: 'A secondary email can speed up recovery if the primary email is compromised. It should have equal or stronger protections than the primary.',
            },
            risk: {
              pt: 'Sem caminho alternativo de recuperação, o processo via suporte pode levar semanas.',
              en: 'Without an alternative recovery path, the support process can take weeks.',
            },
            criticality: 'complementary',
          },
        ],
      },
    ],
  },
  {
    id: 'bot-em-producao',
    title: { pt: 'Bot em Produção', en: 'Bot in Production' },
    description: {
      pt: 'Protocolo de verificação pré-deploy para garantir que um bot Discord opera com resiliência, observabilidade e segurança em ambiente de produção.',
      en: 'Pre-deploy verification protocol to ensure a Discord bot operates with resilience, observability, and security in production.',
    },
    path: { pt: '/checklists/bot-em-producao', en: '/en-us/checklists/bot-in-production' },
    categories: [
      {
        name: { pt: 'Resiliência e Estabilidade', en: 'Resilience & Stability' },
        description: {
          pt: 'Garantias de que o bot se mantém operacional sob falhas, picos de uso e condições adversas.',
          en: 'Guarantees that the bot stays operational under failures, usage spikes, and adverse conditions.',
        },
        items: [
          {
            text: {
              pt: 'Implementar tratamento de erros com fallback gracioso em todos os handlers',
              en: 'Implement error handling with graceful fallback in all handlers',
            },
            description: {
              pt: 'Erros não tratados causam crashes silenciosos. Cada handler deve capturar exceções e fornecer feedback ao usuário, logando o stack trace completo.',
              en: 'Unhandled errors cause silent crashes. Each handler should catch exceptions and provide user feedback while logging the full stack trace.',
            },
            risk: {
              pt: 'Erros não tratados podem derrubar o bot inteiro, afetando todos os servidores.',
              en: 'Unhandled errors can crash the entire bot, affecting all servers.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Configurar rate limiting por usuário e por guild para prevenir abuso',
              en: 'Configure per-user and per-guild rate limiting to prevent abuse',
            },
            description: {
              pt: 'Sem rate limiting, um único usuário pode saturar os recursos do bot. Implemente cooldowns por comando e limites globais por guild.',
              en: 'Without rate limiting, a single user can saturate bot resources. Implement per-command cooldowns and global per-guild limits.',
            },
            risk: {
              pt: 'Ausência de rate limiting permite ataques de negação de serviço por qualquer membro.',
              en: 'Lack of rate limiting enables denial-of-service attacks by any member.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Implementar reconexão automática com backoff exponencial',
              en: 'Implement automatic reconnection with exponential backoff',
            },
            description: {
              pt: 'Desconexões do gateway são normais. O bot deve reconectar automaticamente com intervalos crescentes para evitar ser bloqueado pelo Discord.',
              en: 'Gateway disconnections are normal. The bot should reconnect automatically with increasing intervals to avoid being blocked by Discord.',
            },
            risk: {
              pt: 'Sem reconexão automática, o bot fica offline indefinidamente após uma desconexão.',
              en: 'Without automatic reconnection, the bot stays offline indefinitely after a disconnect.',
            },
            criticality: 'important',
          },
        ],
      },
      {
        name: { pt: 'Segurança e Configuração', en: 'Security & Configuration' },
        description: {
          pt: 'Configurações de segurança e boas práticas de gerenciamento de credenciais e permissões.',
          en: 'Security configurations and best practices for credential and permission management.',
        },
        items: [
          {
            text: {
              pt: 'Armazenar todas as credenciais em variáveis de ambiente, nunca no código-fonte',
              en: 'Store all credentials in environment variables, never in source code',
            },
            description: {
              pt: 'Credenciais hardcoded são expostas em repositórios públicos e logs de CI. Use .env files localmente e secrets do provedor em produção.',
              en: 'Hardcoded credentials are exposed in public repositories and CI logs. Use .env files locally and provider secrets in production.',
            },
            risk: {
              pt: 'Credenciais no código-fonte são comprometidas assim que o repositório é acessado.',
              en: 'Credentials in source code are compromised as soon as the repository is accessed.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Configurar permissões do bot com princípio do menor privilégio',
              en: 'Configure bot permissions with the principle of least privilege',
            },
            description: {
              pt: 'Solicitar apenas as permissões necessárias para o funcionamento. Permissões excessivas ampliam o impacto de um comprometimento.',
              en: 'Request only the permissions necessary for operation. Excessive permissions amplify the impact of a compromise.',
            },
            risk: {
              pt: 'Bot com Administrator pode causar danos irreversíveis se comprometido.',
              en: 'A bot with Administrator permission can cause irreversible damage if compromised.',
            },
            criticality: 'important',
          },
        ],
      },
      {
        name: { pt: 'Observabilidade', en: 'Observability' },
        description: {
          pt: 'Capacidade de monitorar, diagnosticar e entender o comportamento do bot em tempo real.',
          en: 'Ability to monitor, diagnose, and understand bot behavior in real time.',
        },
        items: [
          {
            text: {
              pt: 'Implementar logging estruturado com níveis (info, warn, error) e contexto',
              en: 'Implement structured logging with levels (info, warn, error) and context',
            },
            description: {
              pt: 'Logs estruturados em JSON facilitam filtragem e análise. Inclua sempre guild_id, user_id e command_name como contexto.',
              en: 'Structured JSON logs facilitate filtering and analysis. Always include guild_id, user_id, and command_name as context.',
            },
            risk: {
              pt: 'Sem logs estruturados, diagnosticar problemas em produção é praticamente impossível.',
              en: 'Without structured logs, diagnosing production issues is virtually impossible.',
            },
            criticality: 'important',
          },
          {
            text: {
              pt: 'Configurar monitoramento de uptime com alertas automáticos',
              en: 'Configure uptime monitoring with automatic alerts',
            },
            description: {
              pt: 'Use serviços como UptimeRobot ou BetterStack para detectar quedas. Configure alertas via Discord webhook ou e-mail para resposta rápida.',
              en: 'Use services like UptimeRobot or BetterStack to detect downtime. Configure alerts via Discord webhook or email for quick response.',
            },
            risk: {
              pt: 'Sem monitoramento, o bot pode ficar offline por horas sem ninguém perceber.',
              en: 'Without monitoring, the bot can be offline for hours without anyone noticing.',
            },
            criticality: 'important',
          },
        ],
      },
      {
        name: { pt: 'Entrega e Documentação', en: 'Delivery & Documentation' },
        description: {
          pt: 'Automação de deploy e documentação para garantir manutenção sustentável e onboarding eficiente.',
          en: 'Deploy automation and documentation to ensure sustainable maintenance and efficient onboarding.',
        },
        items: [
          {
            text: {
              pt: 'Configurar pipeline de deploy automatizado (CI/CD) com testes',
              en: 'Configure automated deploy pipeline (CI/CD) with tests',
            },
            description: {
              pt: 'Deploy manual é propenso a erros e lento. Configure GitHub Actions ou similar para build, test e deploy automáticos a cada push.',
              en: 'Manual deploy is error-prone and slow. Configure GitHub Actions or similar for automatic build, test, and deploy on every push.',
            },
            risk: {
              pt: 'Deploys manuais introduzem inconsistências e atrasam correções críticas.',
              en: 'Manual deploys introduce inconsistencies and delay critical fixes.',
            },
            criticality: 'complementary',
          },
          {
            text: {
              pt: 'Manter documentação de comandos e configuração atualizada',
              en: 'Keep command and configuration documentation updated',
            },
            description: {
              pt: 'Documentação desatualizada gera suporte desnecessário e dificulta contribuições. Use geração automática quando possível.',
              en: 'Outdated documentation generates unnecessary support and hinders contributions. Use automatic generation when possible.',
            },
            risk: {
              pt: 'Sem documentação, apenas o desenvolvedor original consegue operar o bot.',
              en: 'Without documentation, only the original developer can operate the bot.',
            },
            criticality: 'complementary',
          },
        ],
      },
    ],
  },
  {
    id: 'abrir-servidor-publico',
    title: { pt: 'Abrir Servidor Público', en: 'Opening a Public Server' },
    description: {
      pt: 'Protocolo de preparação para abertura de servidores Discord ao público, cobrindo governança, estrutura, segurança e estratégia de crescimento.',
      en: 'Preparation protocol for opening Discord servers to the public, covering governance, structure, security, and growth strategy.',
    },
    path: { pt: '/checklists/abrir-servidor-publico', en: '/en-us/checklists/opening-public-server' },
    categories: [
      {
        name: { pt: 'Governança e Regras', en: 'Governance & Rules' },
        description: {
          pt: 'Definição de regras claras e estrutura de governança para manter a comunidade saudável.',
          en: 'Definition of clear rules and governance structure to maintain a healthy community.',
        },
        items: [
          {
            text: {
              pt: 'Definir regras detalhadas com exemplos de comportamento aceitável e inaceitável',
              en: 'Define detailed rules with examples of acceptable and unacceptable behavior',
            },
            description: {
              pt: 'Regras vagas geram interpretações conflitantes. Inclua exemplos concretos e consequências graduais para cada tipo de infração.',
              en: 'Vague rules generate conflicting interpretations. Include concrete examples and graduated consequences for each type of infraction.',
            },
            risk: {
              pt: 'Regras ambíguas resultam em moderação inconsistente e perda de membros.',
              en: 'Ambiguous rules result in inconsistent moderation and member loss.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Configurar sistema de verificação obrigatório para novos membros',
              en: 'Configure mandatory verification system for new members',
            },
            description: {
              pt: 'Verificação por reação, captcha ou nível mínimo de conta reduz bots e raids. Combine com Account Age Screening quando possível.',
              en: 'Verification via reaction, captcha, or minimum account age reduces bots and raids. Combine with Account Age Screening when possible.',
            },
            risk: {
              pt: 'Sem verificação, raids com bots podem inundar o servidor em minutos.',
              en: 'Without verification, bot raids can flood the server within minutes.',
            },
            criticality: 'critical',
          },
        ],
      },
      {
        name: { pt: 'Estrutura e Organização', en: 'Structure & Organization' },
        description: {
          pt: 'Organização lógica de canais e categorias para facilitar navegação e engajamento.',
          en: 'Logical organization of channels and categories to facilitate navigation and engagement.',
        },
        items: [
          {
            text: {
              pt: 'Organizar canais em categorias lógicas com nomes descritivos',
              en: 'Organize channels into logical categories with descriptive names',
            },
            description: {
              pt: 'Categorias claras (ex: Informações, Comunidade, Suporte, Voz) reduzem a fricção de novos membros e aumentam o engajamento.',
              en: 'Clear categories (e.g., Information, Community, Support, Voice) reduce friction for new members and increase engagement.',
            },
            risk: {
              pt: 'Estrutura desorganizada confunde membros novos e reduz retenção.',
              en: 'Disorganized structure confuses new members and reduces retention.',
            },
            criticality: 'important',
          },
          {
            text: {
              pt: 'Configurar cargos com hierarquia de permissões bem definida',
              en: 'Configure roles with a well-defined permission hierarchy',
            },
            description: {
              pt: 'Cada cargo deve ter permissões mínimas necessárias. Evite @everyone com permissões sensíveis. Use cargo de moderador separado do admin.',
              en: 'Each role should have minimum necessary permissions. Avoid @everyone with sensitive permissions. Use a moderator role separate from admin.',
            },
            risk: {
              pt: 'Permissões mal configuradas podem permitir que membros comuns causem danos.',
              en: 'Misconfigured permissions can allow regular members to cause damage.',
            },
            criticality: 'critical',
          },
        ],
      },
      {
        name: { pt: 'Segurança e Moderação', en: 'Security & Moderation' },
        description: {
          pt: 'Ferramentas e processos para manter o servidor seguro e livre de abuso.',
          en: 'Tools and processes to keep the server secure and free from abuse.',
        },
        items: [
          {
            text: {
              pt: 'Ativar bot de moderação com auto-mod, anti-spam e logging de ações',
              en: 'Activate moderation bot with auto-mod, anti-spam, and action logging',
            },
            description: {
              pt: 'Bots como MEE6, Dyno ou Carl-bot automatizam a detecção de spam, flood e palavras proibidas. Configure logging em canal privado para auditoria.',
              en: 'Bots like MEE6, Dyno, or Carl-bot automate spam, flood, and banned word detection. Configure logging in a private channel for auditing.',
            },
            risk: {
              pt: 'Sem automação, moderadores humanos não conseguem reagir a tempo em raids.',
              en: 'Without automation, human moderators cannot react in time during raids.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Configurar canal de audit log para registrar todas as ações de moderação',
              en: 'Configure an audit log channel to record all moderation actions',
            },
            description: {
              pt: 'Logs de moderação são essenciais para transparência e resolução de disputas. Registre bans, kicks, mutes e edições de mensagem.',
              en: 'Moderation logs are essential for transparency and dispute resolution. Record bans, kicks, mutes, and message edits.',
            },
            risk: {
              pt: 'Sem log de auditoria, ações abusivas de moderadores passam despercebidas.',
              en: 'Without audit logs, abusive moderator actions go unnoticed.',
            },
            criticality: 'important',
          },
          {
            text: {
              pt: 'Treinar equipe de moderação com guidelines escritas e cenários práticos',
              en: 'Train moderation team with written guidelines and practical scenarios',
            },
            description: {
              pt: 'Moderadores precisam saber reagir a situações específicas (raids, assédio, doxxing). Crie um documento com procedimentos padrão.',
              en: 'Moderators need to know how to react to specific situations (raids, harassment, doxxing). Create a document with standard procedures.',
            },
            risk: {
              pt: 'Moderadores despreparados podem escalar conflitos ao invés de resolvê-los.',
              en: 'Unprepared moderators can escalate conflicts instead of resolving them.',
            },
            criticality: 'important',
          },
        ],
      },
      {
        name: { pt: 'Crescimento e Estratégia', en: 'Growth & Strategy' },
        description: {
          pt: 'Planejamento de crescimento sustentável para evitar problemas de escala.',
          en: 'Sustainable growth planning to avoid scaling issues.',
        },
        items: [
          {
            text: {
              pt: 'Definir plano de crescimento com metas e métricas de engajamento',
              en: 'Define a growth plan with engagement goals and metrics',
            },
            description: {
              pt: 'Crescimento sem estratégia gera servidores com muitos membros e pouco engajamento. Defina KPIs como mensagens/dia, retenção semanal e ratio de membros ativos.',
              en: 'Growth without strategy creates servers with many members and little engagement. Define KPIs like messages/day, weekly retention, and active member ratio.',
            },
            risk: {
              pt: 'Crescimento desordenado resulta em comunidade morta com milhares de membros inativos.',
              en: 'Disordered growth results in a dead community with thousands of inactive members.',
            },
            criticality: 'complementary',
          },
        ],
      },
    ],
  },
  {
    id: 'infraestrutura-minima',
    title: { pt: 'Infraestrutura Mínima', en: 'Minimum Infrastructure' },
    description: {
      pt: 'Requisitos fundamentais de infraestrutura para projetos digitais profissionais, cobrindo domínio, segurança, automação e recuperação.',
      en: 'Fundamental infrastructure requirements for professional digital projects, covering domain, security, automation, and recovery.',
    },
    path: { pt: '/checklists/infraestrutura-minima', en: '/en-us/checklists/minimum-infrastructure' },
    categories: [
      {
        name: { pt: 'Domínio e Certificação', en: 'Domain & Certification' },
        description: {
          pt: 'Configuração de domínio e certificados SSL como base da presença profissional online.',
          en: 'Domain and SSL certificate configuration as the foundation of professional online presence.',
        },
        items: [
          {
            text: {
              pt: 'Registrar domínio próprio com registrar confiável e renovação automática',
              en: 'Register own domain with a trusted registrar and automatic renewal',
            },
            description: {
              pt: 'Domínios expirados podem ser registrados por terceiros (domain squatting). Configure renovação automática e use registrars com suporte DNSSEC.',
              en: 'Expired domains can be registered by third parties (domain squatting). Configure automatic renewal and use registrars with DNSSEC support.',
            },
            risk: {
              pt: 'Perda de domínio significa perda de identidade digital e SEO acumulado.',
              en: 'Domain loss means loss of digital identity and accumulated SEO.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Configurar SSL/TLS com certificado válido e redirecionamento HTTP→HTTPS',
              en: 'Configure SSL/TLS with valid certificate and HTTP→HTTPS redirection',
            },
            description: {
              pt: 'Certificados SSL são obrigatórios para credibilidade e SEO. Use Let\'s Encrypt para certificados gratuitos ou certificados gerenciados pelo provedor de hosting.',
              en: 'SSL certificates are mandatory for credibility and SEO. Use Let\'s Encrypt for free certificates or provider-managed certificates.',
            },
            risk: {
              pt: 'Sites sem HTTPS são marcados como inseguros pelos navegadores e penalizados pelo Google.',
              en: 'Sites without HTTPS are marked as insecure by browsers and penalized by Google.',
            },
            criticality: 'critical',
          },
        ],
      },
      {
        name: { pt: 'Backup e Recuperação', en: 'Backup & Recovery' },
        description: {
          pt: 'Estratégias de backup e planos de recuperação para garantir continuidade operacional.',
          en: 'Backup strategies and recovery plans to ensure operational continuity.',
        },
        items: [
          {
            text: {
              pt: 'Configurar backups automáticos com retenção mínima de 30 dias',
              en: 'Configure automatic backups with at least 30-day retention',
            },
            description: {
              pt: 'Backups devem ser automáticos, frequentes e testados. Use a regra 3-2-1: 3 cópias, 2 mídias diferentes, 1 off-site.',
              en: 'Backups should be automatic, frequent, and tested. Use the 3-2-1 rule: 3 copies, 2 different media, 1 off-site.',
            },
            risk: {
              pt: 'Sem backup testado, qualquer falha pode significar perda total e irreversível de dados.',
              en: 'Without tested backups, any failure can mean total and irreversible data loss.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Documentar e testar plano de recuperação de desastres (DRP)',
              en: 'Document and test a disaster recovery plan (DRP)',
            },
            description: {
              pt: 'Um DRP define quem faz o quê, com qual prioridade, quando a infraestrutura falha. Teste pelo menos semestralmente com simulação real.',
              en: 'A DRP defines who does what, with which priority, when infrastructure fails. Test at least semi-annually with real simulation.',
            },
            risk: {
              pt: 'Sem DRP testado, a equipe não sabe como reagir em uma crise real.',
              en: 'Without a tested DRP, the team doesn\'t know how to react in a real crisis.',
            },
            criticality: 'important',
          },
        ],
      },
      {
        name: { pt: 'Automação e Entrega', en: 'Automation & Delivery' },
        description: {
          pt: 'Pipeline de entrega automatizada para deploys confiáveis e rastreáveis.',
          en: 'Automated delivery pipeline for reliable and traceable deploys.',
        },
        items: [
          {
            text: {
              pt: 'Implementar versionamento de código com Git e branching strategy definida',
              en: 'Implement code versioning with Git and defined branching strategy',
            },
            description: {
              pt: 'Use GitFlow ou Trunk-based development conforme o tamanho da equipe. Proteja a branch main com reviews obrigatórias.',
              en: 'Use GitFlow or Trunk-based development according to team size. Protect the main branch with mandatory reviews.',
            },
            risk: {
              pt: 'Sem versionamento, não há como reverter mudanças problemáticas ou auditar alterações.',
              en: 'Without versioning, there\'s no way to revert problematic changes or audit modifications.',
            },
            criticality: 'critical',
          },
          {
            text: {
              pt: 'Configurar CI/CD com build, testes e deploy automáticos',
              en: 'Configure CI/CD with automatic build, tests, and deploy',
            },
            description: {
              pt: 'Pipelines automatizados eliminam erros de deploy manual. Configure linting, testes unitários e deploy automático em staging antes de produção.',
              en: 'Automated pipelines eliminate manual deploy errors. Configure linting, unit tests, and automatic deploy to staging before production.',
            },
            risk: {
              pt: 'Deploy manual é inconsistente e pode introduzir regressões não detectadas.',
              en: 'Manual deploy is inconsistent and can introduce undetected regressions.',
            },
            criticality: 'important',
          },
        ],
      },
      {
        name: { pt: 'Monitoramento e Documentação', en: 'Monitoring & Documentation' },
        description: {
          pt: 'Visibilidade operacional e documentação para manutenção sustentável.',
          en: 'Operational visibility and documentation for sustainable maintenance.',
        },
        items: [
          {
            text: {
              pt: 'Configurar monitoramento de disponibilidade com alertas em tempo real',
              en: 'Configure availability monitoring with real-time alerts',
            },
            description: {
              pt: 'Monitore uptime, latência e erros HTTP. Configure alertas via Slack, Discord ou e-mail com escalonamento definido.',
              en: 'Monitor uptime, latency, and HTTP errors. Configure alerts via Slack, Discord, or email with defined escalation.',
            },
            risk: {
              pt: 'Sem monitoramento, problemas de disponibilidade são descobertos pelos usuários.',
              en: 'Without monitoring, availability issues are discovered by users.',
            },
            criticality: 'important',
          },
          {
            text: {
              pt: 'Manter documentação técnica com arquitetura, dependências e procedimentos operacionais',
              en: 'Maintain technical documentation with architecture, dependencies, and operational procedures',
            },
            description: {
              pt: 'Documentação atualizada reduz o bus factor e acelera onboarding. Inclua diagramas de arquitetura, runbooks e lista de dependências com versões.',
              en: 'Updated documentation reduces bus factor and speeds up onboarding. Include architecture diagrams, runbooks, and dependency list with versions.',
            },
            risk: {
              pt: 'Projetos sem documentação dependem exclusivamente do conhecimento tácito da equipe.',
              en: 'Projects without documentation rely exclusively on the team\'s tacit knowledge.',
            },
            criticality: 'complementary',
          },
        ],
      },
    ],
  },
];
