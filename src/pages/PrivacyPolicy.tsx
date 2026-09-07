import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { contactEmails, mailtoHref } from "@/data/contact-channels";

const PrivacyPolicy = () => {
  const { language } = useTheme();

  const lastUpdated = getText(language, "6 de julho de 2026", "July 6, 2026");

  return (
    <Layout>
      <SEO
        title={getText(language,
          "Política de Privacidade | Talisson Souza",
          "Privacy Policy | Talisson Souza"
        )}
        description={getText(language,
          "Política de privacidade e proteção de dados do site de Talisson Souza.",
          "Privacy policy and data protection for Talisson Souza's website."
        )}
        canonical={language === "en" ? "/en-us/policies/politica-de-privacidade" : "/politicas/politica-de-privacidade"}
      />

      <section className="pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <AnimatedTitle variant="hero" as="h1" className="mb-4">
                {getText(language, "Política de Privacidade", "Privacy Policy")}
              </AnimatedTitle>
              <p className="text-sm text-muted-foreground/50 mb-10">
                {getText(language, "Última atualização:", "Last updated:")} {lastUpdated}
              </p>
            </ScrollReveal>

            <div className="space-y-10">
              {/* 1. Introdução */}
              <ScrollReveal delay={0.05}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "1. Introdução", "1. Introduction")}
                  </h2>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed mb-3">
                    {getText(language,
                      "Esta Política de Privacidade descreve como Talisson Souza coleta, utiliza e protege as informações pessoais dos visitantes deste site. O compromisso com a privacidade e a proteção de dados é levado a sério, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018) e demais normas aplicáveis.",
                      "This Privacy Policy describes how Talisson Souza collects, uses, and protects visitors' personal information on this website. The commitment to privacy and data protection is taken seriously, in compliance with applicable data protection laws."
                    )}
                  </p>
                </section>
              </ScrollReveal>

              {/* 2. Dados coletados */}
              <ScrollReveal delay={0.08}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "2. Dados coletados", "2. Data collected")}
                  </h2>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed mb-3">
                    {getText(language,
                      "Os dados pessoais coletados podem incluir:",
                      "Personal data collected may include:"
                    )}
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground/70 leading-relaxed space-y-2 ml-2">
                    <li>
                      <strong className="text-foreground/80">
                        {getText(language, "Newsletter (WhatsApp):", "Newsletter (WhatsApp):")}
                      </strong>{" "}
                      {getText(language,
                        `A newsletter é distribuída via canal do WhatsApp. Nenhum dado pessoal é coletado diretamente por este site para esse fim. Dúvidas sobre publicações e assinatura podem ser enviadas para ${contactEmails.newsletter}.`,
                        `The newsletter is distributed via WhatsApp channel. No personal data is collected directly by this site for that purpose. Questions about posts and subscription can be sent to ${contactEmails.newsletter}.`
                      )}
                    </li>
                    <li>
                      <strong className="text-foreground/80">
                        {getText(language, "Formulário de contato:", "Contact form:")}
                      </strong>{" "}
                      {getText(language,
                        "Nome, email e mensagem, utilizados exclusivamente para responder à comunicação.",
                        "Name, email, and message, used exclusively to respond to communication."
                      )}
                    </li>
                    <li>
                      <strong className="text-foreground/80">
                        {getText(language, "Comentários:", "Comments:")}
                      </strong>{" "}
                      {getText(language,
                        "UID do Supabase, ID do Discord, username, nome de exibição, avatar e conteúdo do comentário. O login Discord não solicita nem armazena o endereço de e-mail.",
                        "Supabase UID, Discord ID, username, display name, avatar, and comment content. Discord login neither requests nor stores an email address."
                      )}
                    </li>
                    <li>
                      <strong className="text-foreground/80">
                        {getText(language, "Dados de navegação:", "Navigation data:")}
                      </strong>{" "}
                      {getText(language,
                        "Informações técnicas como endereço IP, tipo de navegador e páginas visitadas, coletadas automaticamente para fins analíticos.",
                        "Technical information such as IP address, browser type, and pages visited, collected automatically for analytical purposes."
                      )}
                    </li>
                  </ul>
                </section>
              </ScrollReveal>

              {/* 3. Finalidade */}
              <ScrollReveal delay={0.1}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "3. Finalidade do uso dos dados", "3. Purpose of data use")}
                  </h2>
                  <ul className="list-disc list-inside text-sm text-muted-foreground/70 leading-relaxed space-y-2 ml-2">
                    <li>{getText(language, "Acesso a newsletters e conteúdos relevantes pelos canais oficiais", "Access to newsletters and relevant content through official channels")}</li>
                    <li>{getText(language, "Resposta a mensagens de contato", "Responding to contact messages")}</li>
                    <li>{getText(language, "Melhoria da experiência do usuário no site", "Improving user experience on the site")}</li>
                    <li>{getText(language, "Análise estatística de uso do site", "Statistical analysis of site usage")}</li>
                    <li>{getText(language, "Cumprimento de obrigações legais", "Compliance with legal obligations")}</li>
                  </ul>
                </section>
              </ScrollReveal>

              {/* 4. Base legal */}
              <ScrollReveal delay={0.12}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "4. Base legal para tratamento", "4. Legal basis for processing")}
                  </h2>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">
                    {getText(language,
                      "O tratamento dos dados pessoais é realizado com base no consentimento do titular (Art. 7, I da LGPD), no legítimo interesse (Art. 7, IX) e no cumprimento de obrigações legais (Art. 7, II). O consentimento pode ser revogado a qualquer momento, sem prejuízo do tratamento realizado anteriormente.",
                      "Personal data processing is carried out based on the data subject's consent, legitimate interest, and compliance with legal obligations. Consent can be revoked at any time, without prejudice to processing carried out previously."
                    )}
                  </p>
                </section>
              </ScrollReveal>

              {/* 5. Newsletter */}
              <ScrollReveal delay={0.14}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "5. Newsletter e comunicações", "5. Newsletter and communications")}
                  </h2>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">
                    {getText(language,
                      `A newsletter é distribuída exclusivamente via canal do WhatsApp. Para segui-la, o usuário acessa o link do canal e opta por seguir dentro da própria plataforma do WhatsApp. Nenhum dado pessoal adicional é coletado por este site para esse fim. O e-mail ${contactEmails.newsletter} existe apenas como canal oficial para dúvidas, correções ou solicitações relacionadas às publicações. A política de privacidade do WhatsApp (Meta) se aplica ao uso do canal.`,
                      `The newsletter is distributed exclusively via WhatsApp channel. To follow it, the user accesses the channel link and opts to follow within WhatsApp itself. No additional personal data is collected by this site for that purpose. The email ${contactEmails.newsletter} exists only as an official channel for questions, corrections or requests related to publications. WhatsApp's (Meta) privacy policy applies to channel usage.`
                    )}
                  </p>
                </section>
              </ScrollReveal>

              {/* 6. Compartilhamento */}
              <ScrollReveal delay={0.16}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "6. Compartilhamento de dados", "6. Data sharing")}
                  </h2>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">
                    {getText(language,
                      "Os dados pessoais não são vendidos, alugados ou compartilhados com terceiros para fins comerciais. Podem ser compartilhados apenas com prestadores de serviços essenciais (como provedores de email e hospedagem), sempre sob acordos de confidencialidade e em conformidade com a LGPD.",
                      "Personal data is not sold, rented, or shared with third parties for commercial purposes. It may only be shared with essential service providers (such as email and hosting providers), always under confidentiality agreements and in compliance with applicable data protection laws."
                    )}
                  </p>
                </section>
              </ScrollReveal>

              {/* 7. Segurança */}
              <ScrollReveal delay={0.18}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "7. Segurança dos dados", "7. Data security")}
                  </h2>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">
                    {getText(language,
                      "São adotadas medidas técnicas e organizacionais apropriadas para proteger os dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia em trânsito (HTTPS), controle de acesso ao banco de dados e políticas de segurança no nível da aplicação (Row Level Security).",
                      "Appropriate technical and organizational measures are adopted to protect personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption in transit (HTTPS), database access control, and application-level security policies (Row Level Security)."
                    )}
                  </p>
                </section>
              </ScrollReveal>

              {/* 8. Direitos */}
              <ScrollReveal delay={0.2}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "8. Seus direitos", "8. Your rights")}
                  </h2>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed mb-3">
                    {getText(language,
                      "Em conformidade com a LGPD, você tem direito a:",
                      "In compliance with data protection laws, you have the right to:"
                    )}
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground/70 leading-relaxed space-y-2 ml-2">
                    <li>{getText(language, "Acessar seus dados pessoais", "Access your personal data")}</li>
                    <li>{getText(language, "Corrigir dados incompletos ou desatualizados", "Correct incomplete or outdated data")}</li>
                    <li>{getText(language, "Solicitar a exclusão dos seus dados", "Request deletion of your data")}</li>
                    <li>{getText(language, "Revogar consentimento a qualquer momento", "Revoke consent at any time")}</li>
                    <li>{getText(language, "Solicitar portabilidade dos dados", "Request data portability")}</li>
                    <li>{getText(language, "Obter informações sobre compartilhamento", "Obtain information about data sharing")}</li>
                  </ul>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed mt-3">
                    {getText(language,
                      `Para exercer qualquer desses direitos, entre em contato através da página de contato ou envie um email diretamente para ${contactEmails.privacy}.`,
                      `To exercise any of these rights, get in touch through the contact page or send an email directly to ${contactEmails.privacy}.`
                    )}
                  </p>
                </section>
              </ScrollReveal>

              {/* 9. Cookies */}
              <ScrollReveal delay={0.22}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "9. Cookies", "9. Cookies")}
                  </h2>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">
                    {getText(language,
                      "Este site pode utilizar cookies para melhorar a experiência de navegação, armazenar preferências (como idioma e tema) e coletar dados analíticos. Cookies essenciais são necessários para o funcionamento do site. Cookies analíticos podem ser desativados nas configurações do navegador.",
                      "This site may use cookies to improve the browsing experience, store preferences (such as language and theme), and collect analytical data. Essential cookies are necessary for site operation. Analytical cookies can be disabled in browser settings."
                    )}
                  </p>
                </section>
              </ScrollReveal>

              {/* 10. Alterações */}
              <ScrollReveal delay={0.24}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "10. Alterações nesta política", "10. Changes to this policy")}
                  </h2>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">
                    {getText(language,
                      "Esta política pode ser atualizada periodicamente para refletir mudanças nas práticas de tratamento de dados ou em requisitos legais. A data de última atualização será sempre indicada no topo da página. Recomenda-se a revisão periódica desta política.",
                      "This policy may be updated periodically to reflect changes in data processing practices or legal requirements. The last update date will always be indicated at the top of the page. Periodic review of this policy is recommended."
                    )}
                  </p>
                </section>
              </ScrollReveal>

              {/* 11. Contato */}
              <ScrollReveal delay={0.26}>
                <section>
                  <h2 className="font-serif text-xl text-foreground mb-3">
                    {getText(language, "11. Contato", "11. Contact")}
                  </h2>
                  <p className="text-sm text-muted-foreground/70 leading-relaxed">
                    {getText(language,
                      "Para dúvidas, solicitações ou exercício de direitos relacionados à proteção de dados, entre em contato através da ",
                      "For questions, requests, or exercise of rights related to data protection, get in touch through the "
                    )}
                    <a
                      href={getText(language, "/contato", "/en-us/contact")}
                      className="text-foreground/70 underline underline-offset-4 hover:text-foreground transition-colors"
                    >
                      {getText(language, "página de contato", "contact page")}
                    </a>.
                    {" "}
                    <a
                      href={mailtoHref(contactEmails.privacy)}
                      className="break-all text-foreground/70 underline underline-offset-4 hover:text-foreground transition-colors"
                    >
                      {contactEmails.privacy}
                    </a>
                  </p>
                </section>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
