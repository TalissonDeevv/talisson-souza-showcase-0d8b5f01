import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlassCard from "@/components/ui/GlassCard";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { ArrowRight } from "lucide-react";

export interface ChecklistData {
  id: string;
  title: { pt: string; en: string };
  description: { pt: string; en: string };
  path: { pt: string; en: string };
  items: { pt: string[]; en: string[] };
}

export const checklists: ChecklistData[] = [
  {
    id: 'seguranca-conta-discord',
    title: { pt: 'Segurança de Conta Discord', en: 'Discord Account Security' },
    description: {
      pt: 'Checklist essencial para proteger sua conta Discord contra acessos não autorizados e ataques.',
      en: 'Essential checklist to protect your Discord account against unauthorized access and attacks.',
    },
    path: { pt: '/checklists/seguranca-conta-discord', en: '/en-us/checklists/discord-account-security' },
    items: {
      pt: [
        'Ativar autenticação de dois fatores (2FA)',
        'Usar senha forte e única',
        'Verificar sessões ativas regularmente',
        'Nunca compartilhar token do bot',
        'Desativar DMs de servidores públicos',
        'Revisar aplicações autorizadas',
        'Configurar backup de códigos de recuperação',
        'Manter e-mail da conta seguro',
      ],
      en: [
        'Enable two-factor authentication (2FA)',
        'Use a strong and unique password',
        'Regularly check active sessions',
        'Never share bot tokens',
        'Disable DMs from public servers',
        'Review authorized applications',
        'Set up recovery code backups',
        'Keep account email secure',
      ],
    },
  },
  {
    id: 'bot-em-producao',
    title: { pt: 'Bot em Produção', en: 'Bot in Production' },
    description: {
      pt: 'Verificações essenciais antes de colocar um bot Discord em produção.',
      en: 'Essential checks before deploying a Discord bot to production.',
    },
    path: { pt: '/checklists/bot-em-producao', en: '/en-us/checklists/bot-in-production' },
    items: {
      pt: [
        'Tratamento de erros implementado',
        'Rate limiting configurado',
        'Logs estruturados ativados',
        'Variáveis de ambiente configuradas',
        'Permissões mínimas definidas',
        'Monitoramento de uptime ativo',
        'Processo de deploy automatizado',
        'Documentação de comandos atualizada',
      ],
      en: [
        'Error handling implemented',
        'Rate limiting configured',
        'Structured logging enabled',
        'Environment variables configured',
        'Minimum permissions defined',
        'Uptime monitoring active',
        'Automated deployment process',
        'Command documentation updated',
      ],
    },
  },
  {
    id: 'abrir-servidor-publico',
    title: { pt: 'Abrir Servidor Público', en: 'Opening a Public Server' },
    description: {
      pt: 'O que verificar antes de abrir um servidor Discord ao público.',
      en: 'What to verify before opening a Discord server to the public.',
    },
    path: { pt: '/checklists/abrir-servidor-publico', en: '/en-us/checklists/opening-public-server' },
    items: {
      pt: [
        'Regras do servidor definidas',
        'Sistema de verificação configurado',
        'Canais organizados por categoria',
        'Cargos e permissões revisados',
        'Bot de moderação ativo',
        'Canal de logs configurado',
        'Equipe de moderação treinada',
        'Plano de crescimento definido',
      ],
      en: [
        'Server rules defined',
        'Verification system configured',
        'Channels organized by category',
        'Roles and permissions reviewed',
        'Moderation bot active',
        'Logging channel configured',
        'Moderation team trained',
        'Growth plan defined',
      ],
    },
  },
  {
    id: 'infraestrutura-minima',
    title: { pt: 'Infraestrutura Mínima', en: 'Minimum Infrastructure' },
    description: {
      pt: 'Requisitos mínimos de infraestrutura para projetos digitais profissionais.',
      en: 'Minimum infrastructure requirements for professional digital projects.',
    },
    path: { pt: '/checklists/infraestrutura-minima', en: '/en-us/checklists/minimum-infrastructure' },
    items: {
      pt: [
        'Domínio próprio registrado',
        'SSL/TLS configurado',
        'Backups automáticos ativos',
        'Monitoramento de disponibilidade',
        'Plano de recuperação de desastres',
        'Versionamento de código',
        'CI/CD configurado',
        'Documentação técnica básica',
      ],
      en: [
        'Own domain registered',
        'SSL/TLS configured',
        'Automatic backups active',
        'Availability monitoring',
        'Disaster recovery plan',
        'Code versioning',
        'CI/CD configured',
        'Basic technical documentation',
      ],
    },
  },
];

const Checklists = () => {
  const { language } = useTheme();

  return (
    <Layout>
      <SEO
        title={getText(language, "Checklists | Talisson Souza", "Checklists | Talisson Souza")}
        description={getText(
          language,
          "Checklists práticos e estratégicos para segurança digital, infraestrutura e gestão de projetos.",
          "Practical and strategic checklists for digital security, infrastructure, and project management."
        )}
        canonical={getText(language, "/checklists", "/en-us/checklists")}
      />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <ScrollReveal>
            <motion.span
              className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {getText(language, 'Referência Prática', 'Practical Reference')}
            </motion.span>
            <AnimatedTitle variant="hero" as="h1" className="mb-8">
              Checklists
            </AnimatedTitle>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-16">
              {getText(
                language,
                'Guias práticos e objetivos para garantir que nenhum passo crítico seja esquecido. Cada checklist foi desenvolvido com base em experiência real de operação.',
                'Practical and objective guides to ensure no critical step is missed. Each checklist was developed based on real operational experience.'
              )}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {checklists.map((checklist, index) => (
              <ScrollReveal key={checklist.id} delay={index * 0.1}>
                <Link to={checklist.path[language]} className="block h-full">
                  <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }} className="h-full">
                    <GlassCard className="p-6 lg:p-8 group hover:border-foreground/20 transition-all duration-500 h-full flex flex-col">
                      <h2 className="font-serif text-xl lg:text-2xl text-foreground group-hover:text-gradient transition-all duration-500 mb-3">
                        {checklist.title[language]}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {checklist.description[language]}
                      </p>
                      <div className="flex items-center text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        <span>{checklist.items[language].length} {getText(language, 'itens', 'items')}</span>
                        <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </GlassCard>
                  </motion.div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checklists;
