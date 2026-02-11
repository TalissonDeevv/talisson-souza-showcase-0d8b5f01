import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedTitle from "@/components/ui/AnimatedTitle";
import ShareButtons from "@/components/ui/ShareButtons";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const INPIGuide = () => {
  const { language } = useTheme();

  const tags = language === 'pt'
    ? ['Registro de Marca', 'INPI', 'Empreendedorismo', 'Propriedade Intelectual', 'MEI']
    : ['Trademark Registration', 'INPI', 'Entrepreneurship', 'Intellectual Property', 'MEI'];

  const sections = language === 'pt' ? [
    {
      title: '1. Introdução',
      content: `Se você tem uma empresa, um projeto ou até mesmo uma ideia de negócio, provavelmente já ouviu falar sobre registro de marca. Mas será que você realmente entende o que isso significa e por que é tão importante?

O INPI (Instituto Nacional da Propriedade Industrial) é o órgão responsável por registrar marcas no Brasil. Registrar sua marca é uma das decisões mais estratégicas que um empreendedor pode tomar para proteger o seu negócio.

É fundamental entender a diferença entre "pedido de registro" e "marca registrada". Quando você entra com o pedido no INPI, você tem uma expectativa de direito, mas a marca só é oficialmente sua quando o registro é concedido. Até lá, o processo pode levar meses ou até anos, dependendo da complexidade.

Este artigo foi criado para esclarecer o processo de forma didática, acessível e direta, ajudando empreendedores, freelancers e donos de pequenas empresas a entenderem como proteger legalmente suas marcas.`
    },
    {
      title: '2. O que é o INPI?',
      content: `O Instituto Nacional da Propriedade Industrial (INPI) é uma autarquia federal vinculada ao Ministério do Desenvolvimento, Indústria, Comércio e Serviços. Ele é responsável pelo registro e concessão de:

• Marcas
• Patentes
• Desenhos industriais
• Indicações geográficas
• Programas de computador
• Contratos de transferência de tecnologia

É importante saber o que o INPI NÃO faz:

• Não cria marcas para você
• Não fiscaliza o uso comercial direto de marcas no mercado
• Não oferece consultoria sobre branding ou design
• Não garante exclusividade apenas pelo depósito do pedido

O papel do INPI é analisar, conceder e manter registros de propriedade industrial, garantindo que os direitos dos titulares sejam respeitados dentro do território nacional.`
    },
    {
      title: '3. O que é Registro de Marca?',
      content: `Uma marca é todo sinal distintivo que identifica e diferencia produtos ou serviços de uma empresa no mercado. Pode ser um nome, um logotipo, um símbolo ou até uma combinação de elementos.

Existem quatro tipos principais de marca reconhecidos pelo INPI:

Nominativa: composta apenas por palavras, letras ou números. Exemplo: "Cheetah Solutions".

Figurativa: composta por um desenho, imagem ou símbolo, sem elementos textuais. Exemplo: o swoosh da Nike.

Mista: combina elementos nominativos e figurativos. Exemplo: logotipo com nome e ícone juntos.

Tridimensional: é a forma do produto em si, quando é suficientemente distintiva. Exemplo: a garrafa da Coca-Cola.

O registro de marca é a garantia legal de que você é o único titular autorizado a usar aquele sinal distintivo para os produtos ou serviços registrados, em todo o território nacional. Sem o registro, qualquer pessoa pode usar um nome igual ou semelhante ao seu, e você pode ter dificuldades para se defender juridicamente.

Estrategicamente, a marca registrada agrega valor ao negócio, facilita negociações, protege contra concorrência desleal e pode ser licenciada ou vendida como um ativo da empresa.`
    },
    {
      title: '4. Quem pode registrar uma marca no INPI?',
      content: `Qualquer pessoa física ou jurídica que exerça atividade legalizada pode registrar uma marca no INPI. Isso inclui:

Pessoa Física (CPF): profissionais autônomos, artistas, consultores independentes. É necessário comprovar o exercício da atividade relacionada à marca.

MEI (Microempreendedor Individual): pode registrar marcas vinculadas às atividades permitidas no seu CNAE. Tem desconto nas taxas do INPI.

ME (Microempresa): mesma lógica do MEI, com acesso a descontos nas taxas.

LTDA, S/A e outras naturezas jurídicas: qualquer empresa constituída pode registrar marcas para os produtos e serviços que comercializa.

A principal diferença prática entre registrar como pessoa física e como pessoa jurídica está na comprovação de atividade. A pessoa física precisa demonstrar que exerce a atividade de forma regular. A pessoa jurídica já tem isso implícito no seu contrato social ou CNAE.

Uma dica importante: se você tem empresa, registre sempre em nome da empresa (CNPJ), não no seu CPF. Isso facilita a gestão do ativo e evita problemas em caso de sociedade ou venda do negócio.`
    },
    {
      title: '5. Passo a passo para registrar uma marca no INPI',
      content: `O processo de registro de marca no INPI pode ser resumido em etapas claras:

1. Busca prévia de marca
Antes de qualquer coisa, faça uma busca no banco de dados do INPI para verificar se já existe marca igual ou semelhante registrada na mesma classe. Essa etapa é fundamental para evitar perda de tempo e dinheiro.

2. Escolha da classe (Classificação de Nice)
O sistema internacional de Nice classifica produtos e serviços em 45 classes. Você precisa identificar em qual classe sua marca se enquadra. Exemplo: serviços de tecnologia geralmente ficam na classe 42.

3. Criação do pedido
Acesse o sistema e-INPI, crie sua conta e preencha o formulário de pedido de registro. Tenha em mãos: dados do titular, imagem da marca (se figurativa ou mista), descrição dos produtos/serviços e a classe escolhida.

4. Pagamento da GRU (Guia de Recolhimento da União)
Após preencher o pedido, gere e pague a GRU. Sem o pagamento, o pedido não é processado. Os valores variam conforme o tipo de solicitante (PF, MEI, ME ou empresa de maior porte).

5. Acompanhamento do processo
Após o depósito, o INPI publica o pedido na Revista da Propriedade Industrial (RPI). Terceiros têm 60 dias para apresentar oposição. Você deve acompanhar as publicações semanalmente para não perder prazos.

6. Exame e decisão
O INPI analisa o pedido e pode deferir (aprovar), indeferir (negar) ou formular exigências. Se houver exigência, você tem prazo para responder. Se for deferido, você paga as taxas finais de concessão.

7. Concessão do registro
Após o pagamento das taxas de concessão, o certificado de registro é emitido. Sua marca está oficialmente protegida por 10 anos, renováveis indefinidamente.`
    },
    {
      title: '6. Quanto custa registrar uma marca?',
      content: `Os custos de registro de marca no INPI variam conforme o tipo de solicitante. Os valores abaixo são aproximados e podem ser atualizados pelo INPI:

Taxas de depósito do pedido:
• Pessoa Física, MEI e ME: a partir de R$ 142,00 (com desconto)
• Demais empresas: a partir de R$ 355,00

Taxas de concessão (após aprovação):
• Pessoa Física, MEI e ME: a partir de R$ 298,00
• Demais empresas: a partir de R$ 745,00

Outros custos possíveis:
• Oposição (se alguém contestar sua marca): taxa adicional
• Recursos contra indeferimento: taxa adicional
• Renovação (a cada 10 anos): valor semelhante às taxas iniciais

Importante: esses valores são as taxas oficiais do INPI. Se você contratar um escritório ou profissional especializado para acompanhar o processo, haverá custos adicionais de honorários.

Para empreendedores em início de jornada, o custo do registro é um investimento pequeno comparado ao risco de perder o direito sobre sua própria marca no futuro.`
    },
    {
      title: '7. Quanto tempo demora?',
      content: `O tempo médio para o INPI concluir a análise de um pedido de registro de marca gira em torno de 6 a 12 meses, mas pode variar bastante dependendo de fatores como:

• Volume de pedidos na classe escolhida
• Existência de oposições de terceiros
• Exigências formuladas pelo examinador
• Complexidade do caso

As principais etapas e prazos são:

Depósito do pedido: imediato após pagamento da GRU.

Publicação na RPI: geralmente em 2 a 4 semanas.

Prazo de oposição: 60 dias após a publicação.

Exame de mérito: pode levar de 4 a 10 meses após o período de oposição.

Concessão: após deferimento e pagamento das taxas finais.

Uma dica essencial: acompanhe a RPI semanalmente. O INPI publica todas as movimentações lá, e se você perder um prazo de manifestação, pode ter o pedido arquivado ou indeferido.`
    },
    {
      title: '8. Erros comuns ao registrar uma marca',
      content: `Muitos empreendedores cometem erros que poderiam ser facilmente evitados com um mínimo de pesquisa. Os mais comuns são:

Não fazer busca prévia: depositar o pedido sem verificar se já existe marca semelhante é jogar dinheiro fora. A busca prévia é gratuita no site do INPI.

Escolher a classe errada: se você registra na classe errada, sua marca não está protegida para os produtos/serviços que realmente oferece.

Achar que domínio de internet garante marca: ter o domínio "suamarca.com.br" não significa que você tem direitos sobre a marca. O registro no INPI é completamente independente do registro de domínios.

Achar que CNPJ garante marca: o fato de ter uma empresa registrada com determinado nome empresarial na Junta Comercial não garante exclusividade sobre a marca. Nome empresarial e marca são coisas diferentes.

Achar que pagar a taxa significa marca registrada: pagar a taxa de depósito é apenas o primeiro passo. A marca só é registrada após todo o processo de exame e concessão.

Não acompanhar o processo: muitos pedidos são arquivados porque o titular não respondeu a uma exigência do INPI dentro do prazo. Acompanhamento é obrigatório.

Registrar apenas o nome e esquecer do logotipo (ou vice-versa): idealmente, registre tanto a marca nominativa quanto a figurativa/mista para ter proteção mais ampla.`
    },
    {
      title: '9. O que acontece se alguém usar sua marca sem registro?',
      content: `Se você não tem o registro da sua marca no INPI e alguém passa a usar um nome ou logotipo igual ou semelhante ao seu, a situação se torna extremamente complicada. Veja os riscos:

Você pode ser obrigado a mudar de nome: se outra pessoa registrar a marca antes de você, ela terá o direito legal de uso exclusivo. Você precisará trocar o nome do seu negócio, refazer toda a identidade visual, alterar domínios, redes sociais e materiais de marketing.

Dificuldade jurídica para se defender: sem o registro, provar que você usava a marca antes é muito mais difícil e custoso. A lei brasileira segue o princípio atributivo, ou seja, o direito pertence a quem registra, não necessariamente a quem usou primeiro.

Perda de investimento em marketing: todo o valor que você investiu em branding, tráfego pago, SEO e reconhecimento de marca pode ser perdido se você for obrigado a mudar de nome.

Concorrência desleal: sem o registro, é mais difícil processar concorrentes que copiam sua identidade visual ou nome.

A proteção legal que o registro oferece é a prova mais forte que existe de que a marca é sua. Sem ela, você fica vulnerável.`
    },
    {
      title: '10. Dicas estratégicas para empreendedores',
      content: `Além do passo a passo técnico, aqui vão algumas dicas práticas para quem está começando:

Registre sua marca o mais cedo possível: não espere crescer para proteger seu negócio. Quanto antes registrar, menor o risco de alguém fazer isso antes de você.

Faça uma busca completa: não verifique apenas nomes idênticos. Busque variações, grafias semelhantes e marcas que possam gerar confusão no mercado.

Considere registrar em mais de uma classe: se sua empresa atua em diferentes segmentos, pode ser interessante proteger a marca em múltiplas classes.

Mantenha o registro atualizado: se mudar o endereço, razão social ou qualquer dado do titular, atualize no INPI. Informações desatualizadas podem causar problemas.

Acompanhe o mercado: mesmo com a marca registrada, fique atento a usos indevidos por terceiros. A fiscalização ativa é responsabilidade do titular.

Registre variações: se sua marca tem uma versão com e sem tagline, com cores diferentes ou em outro idioma, considere registrar as variações mais importantes.`
    },
  ] : [
    {
      title: '1. Introduction',
      content: `If you have a business, a project, or even a business idea, you've probably heard about trademark registration. But do you really understand what it means and why it's so important?

INPI (National Institute of Industrial Property) is the Brazilian government body responsible for registering trademarks in Brazil. Registering your trademark is one of the most strategic decisions an entrepreneur can make to protect their business.

It's essential to understand the difference between a "registration application" and a "registered trademark." When you file an application with INPI, you have an expectation of rights, but the trademark is only officially yours when the registration is granted. Until then, the process can take months or even years, depending on the complexity.

This article was created to clarify the process in a didactic, accessible, and straightforward way, helping entrepreneurs, freelancers, and small business owners understand how to legally protect their trademarks.`
    },
    {
      title: '2. What is INPI?',
      content: `The National Institute of Industrial Property (INPI) is a Brazilian federal agency linked to the Ministry of Development, Industry, Commerce, and Services. It is responsible for the registration and granting of:

• Trademarks
• Patents
• Industrial designs
• Geographical indications
• Computer programs
• Technology transfer contracts

It's important to know what INPI does NOT do:

• It doesn't create trademarks for you
• It doesn't directly monitor commercial use of trademarks in the market
• It doesn't offer branding or design consulting
• It doesn't guarantee exclusivity just by filing an application

INPI's role is to analyze, grant, and maintain industrial property registrations, ensuring that the rights of holders are respected within national territory.`
    },
    {
      title: '3. What is Trademark Registration?',
      content: `A trademark is any distinctive sign that identifies and differentiates a company's products or services in the market. It can be a name, a logo, a symbol, or even a combination of elements.

There are four main types of trademarks recognized by INPI:

Word mark (Nominativa): composed only of words, letters, or numbers. Example: "Cheetah Solutions."

Figurative mark: composed of a drawing, image, or symbol, without textual elements. Example: Nike's swoosh.

Mixed mark: combines word and figurative elements. Example: a logo with name and icon together.

Three-dimensional mark: the shape of the product itself, when sufficiently distinctive. Example: the Coca-Cola bottle.

Trademark registration is the legal guarantee that you are the sole authorized holder to use that distinctive sign for the registered products or services throughout the national territory. Without registration, anyone can use a name identical or similar to yours, and you may have difficulties defending yourself legally.

Strategically, a registered trademark adds value to the business, facilitates negotiations, protects against unfair competition, and can be licensed or sold as a company asset.`
    },
    {
      title: '4. Who can register a trademark at INPI?',
      content: `Any individual or legal entity that engages in a legalized activity can register a trademark at INPI. This includes:

Individual (CPF): freelancers, artists, independent consultants. Proof of activity related to the trademark is required.

MEI (Individual Microentrepreneur): can register trademarks linked to activities allowed in their CNAE. Has discounted INPI fees.

ME (Microenterprise): same logic as MEI, with access to fee discounts.

LTDA, S/A, and other legal structures: any established company can register trademarks for the products and services it commercializes.

The main practical difference between registering as an individual versus a legal entity is in proving activity. Individuals need to demonstrate they regularly engage in the activity. Legal entities already have this implied in their articles of incorporation or CNAE.

An important tip: if you have a company, always register under the company name (CNPJ), not your personal ID (CPF). This facilitates asset management and avoids problems in case of partnership changes or business sales.`
    },
    {
      title: '5. Step by step to register a trademark at INPI',
      content: `The trademark registration process at INPI can be summarized in clear steps:

1. Prior trademark search
Before anything else, search INPI's database to check if there's already an identical or similar trademark registered in the same class. This step is essential to avoid wasting time and money.

2. Choose the class (Nice Classification)
The international Nice system classifies products and services into 45 classes. You need to identify which class your trademark falls under. Example: technology services are usually in class 42.

3. Create the application
Access the e-INPI system, create your account, and fill out the registration application form. Have ready: holder's data, trademark image (if figurative or mixed), description of products/services, and the chosen class.

4. Pay the GRU (Federal Collection Guide)
After filling out the application, generate and pay the GRU. Without payment, the application is not processed. Values vary according to the type of applicant.

5. Monitor the process
After filing, INPI publishes the application in the Industrial Property Journal (RPI). Third parties have 60 days to file opposition. You must monitor publications weekly to avoid missing deadlines.

6. Examination and decision
INPI analyzes the application and may approve, reject, or issue requirements. If there are requirements, you have a deadline to respond.

7. Registration grant
After payment of final fees, the registration certificate is issued. Your trademark is officially protected for 10 years, indefinitely renewable.`
    },
    {
      title: '6. How much does it cost to register a trademark?',
      content: `Trademark registration costs at INPI vary according to the type of applicant. The values below are approximate and may be updated by INPI:

Application filing fees:
• Individuals, MEI, and ME: starting at R$ 142.00 (with discount)
• Other companies: starting at R$ 355.00

Grant fees (after approval):
• Individuals, MEI, and ME: starting at R$ 298.00
• Other companies: starting at R$ 745.00

Other possible costs:
• Opposition (if someone contests your trademark): additional fee
• Appeals against rejection: additional fee
• Renewal (every 10 years): similar to initial fees

Important: these values are official INPI fees. If you hire an office or specialized professional to manage the process, there will be additional costs for fees.

For entrepreneurs just starting out, the registration cost is a small investment compared to the risk of losing rights over your own trademark in the future.`
    },
    {
      title: '7. How long does it take?',
      content: `The average time for INPI to complete the analysis of a trademark registration application is around 6 to 12 months, but it can vary significantly depending on factors such as:

• Volume of applications in the chosen class
• Existence of third-party oppositions
• Requirements issued by the examiner
• Case complexity

The main stages and deadlines are:

Application filing: immediate after GRU payment.
Publication in RPI: usually within 2 to 4 weeks.
Opposition period: 60 days after publication.
Merit examination: can take 4 to 10 months after the opposition period.
Grant: after approval and payment of final fees.

An essential tip: monitor the RPI weekly. INPI publishes all movements there, and if you miss a response deadline, your application may be archived or rejected.`
    },
    {
      title: '8. Common mistakes when registering a trademark',
      content: `Many entrepreneurs make mistakes that could be easily avoided with minimal research. The most common are:

Not doing a prior search: filing an application without checking if a similar trademark already exists is throwing money away. The prior search is free on the INPI website.

Choosing the wrong class: if you register in the wrong class, your trademark is not protected for the products/services you actually offer.

Thinking a domain guarantees a trademark: having the domain "yourbrand.com.br" doesn't mean you have rights over the trademark. INPI registration is completely independent of domain registration.

Thinking a CNPJ guarantees a trademark: having a company registered with a certain business name at the Commercial Board doesn't guarantee exclusivity over the trademark. Business name and trademark are different things.

Thinking paying the fee means a registered trademark: paying the filing fee is only the first step. The trademark is only registered after the entire examination and grant process.

Not monitoring the process: many applications are archived because the holder didn't respond to an INPI requirement within the deadline. Monitoring is mandatory.

Registering only the name and forgetting the logo (or vice versa): ideally, register both the word mark and the figurative/mixed mark for broader protection.`
    },
    {
      title: '9. What happens if someone uses your trademark without registration?',
      content: `If you don't have your trademark registered at INPI and someone starts using an identical or similar name or logo, the situation becomes extremely complicated. Here are the risks:

You may be forced to change your name: if someone else registers the trademark before you, they will have the legal right of exclusive use. You'll need to change your business name, redo all visual identity, change domains, social media, and marketing materials.

Legal difficulty in defending yourself: without registration, proving you used the trademark first is much harder and costlier. Brazilian law follows the attributive principle, meaning the right belongs to whoever registers, not necessarily whoever used it first.

Loss of marketing investment: all the value you invested in branding, paid traffic, SEO, and brand recognition can be lost if you're forced to change your name.

Unfair competition: without registration, it's harder to sue competitors who copy your visual identity or name.

The legal protection that registration offers is the strongest proof that exists that the trademark is yours. Without it, you're vulnerable.`
    },
    {
      title: '10. Strategic tips for entrepreneurs',
      content: `Beyond the technical step-by-step, here are some practical tips for those just starting out:

Register your trademark as early as possible: don't wait to grow to protect your business. The sooner you register, the lower the risk of someone doing it before you.

Do a thorough search: don't just check for identical names. Search for variations, similar spellings, and trademarks that could cause confusion in the market.

Consider registering in more than one class: if your company operates in different segments, it may be worth protecting the trademark in multiple classes.

Keep the registration updated: if you change address, company name, or any holder data, update it at INPI. Outdated information can cause problems.

Monitor the market: even with a registered trademark, stay alert to improper use by third parties. Active monitoring is the holder's responsibility.

Register variations: if your trademark has a version with and without a tagline, with different colors, or in another language, consider registering the most important variations.`
    },
  ];

  const legalDisclaimer = language === 'pt'
    ? `Este artigo tem caráter exclusivamente informativo e educacional. O conteúdo aqui apresentado não constitui assessoria ou consultoria jurídica, e não deve ser interpretado como tal. Para questões específicas relacionadas ao registro de marcas, recomenda-se a consulta a um advogado especializado em propriedade intelectual ou a um agente de propriedade industrial devidamente habilitado. O INPI (Instituto Nacional da Propriedade Industrial) é uma autarquia federal independente, e este artigo não possui qualquer vínculo institucional com o órgão. Os valores, prazos e procedimentos mencionados podem sofrer alterações sem aviso prévio. Consulte sempre o site oficial do INPI (inpi.gov.br) para informações atualizadas.`
    : `This article is exclusively informational and educational. The content presented here does not constitute legal advice or consulting and should not be interpreted as such. For specific questions related to trademark registration, it is recommended to consult a lawyer specialized in intellectual property or a duly qualified industrial property agent. INPI (National Institute of Industrial Property) is an independent federal agency, and this article has no institutional affiliation with the body. The values, deadlines, and procedures mentioned may change without prior notice. Always consult the official INPI website (inpi.gov.br) for updated information.`;

  const articleTitle = getText(language,
    'Como Registrar uma Marca no INPI',
    'How to Register a Trademark at INPI'
  );

  return (
    <Layout>
      <SEO
        title={getText(language,
          'Como Registrar uma Marca no INPI | Talisson Souza',
          'How to Register a Trademark at INPI | Talisson Souza'
        )}
        description={getText(language,
          'Guia completo sobre como registrar uma marca no INPI. Passo a passo, custos, prazos e erros comuns para empreendedores e empresas.',
          'Complete guide on how to register a trademark at INPI in Brazil. Step by step, costs, deadlines and common mistakes for entrepreneurs and businesses.'
        )}
        canonical={language === 'en' ? '/en-us/articles/inpi' : '/artigos/inpi'}
        type="article"
        publishedTime="2025-02-11"
        keywords={language === 'pt'
          ? ['registro de marca', 'INPI', 'como registrar marca', 'marca registrada', 'propriedade intelectual', 'empreendedorismo']
          : ['trademark registration', 'INPI', 'how to register trademark', 'registered trademark', 'intellectual property', 'entrepreneurship']
        }
      />

      {/* Hero Section */}
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
                {getText(language, 'Guia Completo', 'Complete Guide')}
              </motion.span>

              <AnimatedTitle variant="hero" as="h1" className="mb-4">
                {articleTitle}
              </AnimatedTitle>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
                {getText(language,
                  'Guia completo e didático sobre o processo de registro de marca no INPI para empreendedores, freelancers, startups e donos de pequenas empresas no Brasil.',
                  'A complete and didactic guide on the trademark registration process at INPI for entrepreneurs, freelancers, startups, and small business owners in Brazil.'
                )}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{getText(language, '11 de Fevereiro, 2025', 'February 11, 2025')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{getText(language, '20 min de leitura', '20 min read')}</span>
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
              <ShareButtons title={articleTitle} />
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

            {/* Legal Disclaimer */}
            <ScrollReveal>
              <div className="my-16 p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm">
                <h2 className="font-serif text-xl lg:text-2xl text-foreground mb-4 leading-tight">
                  {getText(language, 'Aviso Legal', 'Legal Disclaimer')}
                </h2>
                <p className="text-sm text-muted-foreground leading-[1.9]">
                  {legalDisclaimer}
                </p>
              </div>
            </ScrollReveal>

            {/* Share at end */}
            <div className="mt-12 pt-8 border-t border-border/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  {getText(language, 'Gostou do artigo? Compartilhe!', 'Enjoyed the article? Share it!')}
                </p>
                <ShareButtons title={articleTitle} />
              </div>
            </div>

            {/* Signature */}
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

export default INPIGuide;
