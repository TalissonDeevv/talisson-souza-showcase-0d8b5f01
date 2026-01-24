import BlogPost from "@/components/ui/BlogPost";
import BlogSection from "@/components/ui/BlogSection";
import CodeTerminal from "@/components/ui/CodeTerminal";
import TechList from "@/components/ui/TechList";
import { useTheme } from "@/contexts/ThemeContext";
import { Bot, Settings, Shield, Zap } from "lucide-react";

const WebAutomation = () => {
  const { language } = useTheme();
  
  return (
    <BlogPost
      id="web-automation"
      title={language === 'pt' ? "Automação Web: Ferramentas e Estratégias" : "Web Automation: Tools and Strategies"}
      date={language === 'pt' ? "17 de Setembro, 2024" : "September 17, 2024"}
      tags={["Automação", "Web", "Puppeteer", "JavaScript"]}
      image="https://i.ibb.co/kVpRGdg5/representation-user-experience-interface-design.jpg"
      content={
        language === 'pt' ? (
        <>
          <BlogSection 
            title="O Poder da Automação Web" 
            icon={<Bot className="w-5 h-5 text-foreground" />}
            variant="highlight"
          >
            <p className="text-lg leading-relaxed">
              Em um mundo digital cada vez mais complexo, a automação web emerge como uma ferramenta essencial para 
              profissionais e empresas que buscam aumentar produtividade, reduzir erros humanos e liberar tempo para 
              atividades que realmente exigem criatividade e pensamento estratégico.
            </p>
            
            <TechList 
              title="Benefícios da Automação"
              items={[
                "Redução de 70% em tarefas repetitivas",
                "Diminuição de erros humanos em 85%",
                "Economia de tempo para atividades estratégicas",
                "Disponibilidade 24/7 para monitoramento",
                "Escalabilidade para grandes volumes de dados"
              ]}
              variant="benefits"
            />
          </BlogSection>

          <BlogSection 
            title="Ferramentas Principais para Automação Web" 
            icon={<Settings className="w-5 h-5 text-foreground" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Puppeteer</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Controle preciso do Chrome</li>
                  <li>• Geração de PDFs e screenshots</li>
                  <li>• Automação de formulários</li>
                  <li>• Crawling e scraping</li>
                </ul>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Playwright</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Suporte multi-browser</li>
                  <li>• Chrome, Firefox, Safari</li>
                  <li>• Testes automatizados</li>
                  <li>• Emulação mobile</li>
                </ul>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Selenium</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Veterano confiável</li>
                  <li>• Múltiplas linguagens</li>
                  <li>• Grande ecossistema</li>
                  <li>• Selenium Grid</li>
                </ul>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Cypress</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Focado em testes E2E</li>
                  <li>• Depuração avançada</li>
                  <li>• Time travel</li>
                  <li>• Captura automática</li>
                </ul>
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Implementação Prática" 
            icon={<Zap className="w-5 h-5 text-foreground" />}
            variant="code"
          >
            <h4 className="text-lg font-semibold mb-4">Exemplo com Puppeteer</h4>
            
            <div className="space-y-4">
              <div>
                <p className="mb-2">1. Configuração básica:</p>
                <CodeTerminal 
                  code={`const puppeteer = require('puppeteer');

(async () => {
  // Iniciar o navegador
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navegar para URL
  await page.goto('https://exemplo.com');
  
  // Tirar screenshot
  await page.screenshot({ path: 'exemplo.png' });
  
  await browser.close();
})();`}
                  language="javascript"
                  title="Setup básico"
                />
              </div>

              <div>
                <p className="mb-2">2. Automação de formulários:</p>
                <CodeTerminal 
                  code={`// Preenchimento de formulário
await page.type('#email', 'usuario@exemplo.com');
await page.type('#senha', 'minhasenha123');
await page.click('#botao-login');

// Aguardar navegação
await page.waitForNavigation();

// Extrair dados
const dados = await page.evaluate(() => {
  return {
    titulo: document.title,
    mensagens: document.querySelectorAll('.mensagem').length
  };
});`}
                  language="javascript"
                  title="Automação de formulários"
                />
              </div>

              <div>
                <p className="mb-2">3. Função robusta com retry:</p>
                <CodeTerminal 
                  code={`async function clickWithRetry(page, selector, maxAttempts = 3) {
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    try {
      await page.waitForSelector(selector, { visible: true, timeout: 5000 });
      await page.click(selector);
      console.log(\`Sucesso ao clicar em: \${selector}\`);
      return;
    } catch (error) {
      attempts++;
      if (attempts >= maxAttempts) {
        throw new Error(\`Falha após \${attempts} tentativas\`);
      }
      await page.waitForTimeout(1000);
    }
  }
}`}
                  language="javascript"
                  title="Função robusta"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Estratégias Eficazes" 
            icon={<Shield className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p>Desenvolva scripts de automação que sobrevivam a mudanças de site e condições inesperadas:</p>
            
            <TechList 
              title="Melhores Práticas"
              items={[
                "Use seletores estáveis (IDs e data-attributes)",
                "Implemente mecanismos de espera inteligentes",
                "Trate exceções graciosamente",
                "Adicione retry logic para operações críticas",
                "Mantenha logs detalhados para depuração"
              ]}
              variant="requirements"
            />

            <div className="mt-4">
              <h5 className="font-semibold mb-2">Superando Desafios Comuns:</h5>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Autenticação:</strong> Armazene e reutilize cookies de sessão</li>
                <li><strong>Conteúdo Dinâmico:</strong> Espere por eventos de rede específicos</li>
                <li><strong>CAPTCHAs:</strong> Use APIs oficiais sempre que possível</li>
                <li><strong>Anti-bot:</strong> Adicione delays aleatórios e varie user-agents</li>
              </ul>
            </div>
          </BlogSection>

          <BlogSection 
            title="Casos de Uso Transformadores" 
            icon={<Bot className="w-5 h-5 text-accent-blue" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <TechList 
                title="Web Scraping Ético"
                items={[
                  "Monitoramento de preços",
                  "Coleta de leads",
                  "Agregação de notícias",
                  "Análise de sentimentos"
                ]}
                variant="features"
              />
              
              <TechList 
                title="Automação de Processos"
                items={[
                  "Processamento de pedidos",
                  "Entrada de dados",
                  "Geração de relatórios",
                  "Sincronização entre sistemas"
                ]}
                variant="benefits"
              />
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4 border-l-4 border-yellow-500">
              <h5 className="font-bold text-yellow-800 dark:text-yellow-300">Nota sobre Legalidade</h5>
              <p className="text-yellow-700 dark:text-yellow-400">
                Sempre respeite os termos de serviço dos sites, arquivo robots.txt, e leis de privacidade. 
                Web scraping não autorizado pode ter implicações legais.
              </p>
            </div>
          </BlogSection>

          <BlogSection title="Conclusão" variant="highlight">
            <p className="text-lg">
              A automação web é uma habilidade essencial no mundo digital atual. Com as ferramentas e 
              estratégias apresentadas, você pode transformar processos manuais em fluxos automatizados 
              eficientes e confiáveis.
            </p>
            
            <TechList 
              title="Próximos Passos"
              items={[
                "Identifique tarefas repetitivas em seu fluxo de trabalho",
                "Comece com automações simples usando Puppeteer",
                "Implemente tratamento de erros robusto",
                "Monitore e otimize seus scripts continuamente",
                "Explore integração com APIs quando disponível"
              ]}
              variant="benefits"
            />
          </BlogSection>
        </>
        ) : (
        <>
          <BlogSection 
            title="The Power of Web Automation" 
            icon={<Bot className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p className="text-lg leading-relaxed">
              In an increasingly complex digital world, web automation emerges as an essential tool for 
              professionals and companies seeking to increase productivity, reduce human errors, and free up time for 
              activities that truly require creativity and strategic thinking.
            </p>
            
            <TechList 
              title="Automation Benefits"
              items={[
                "70% reduction in repetitive tasks",
                "85% decrease in human errors",
                "Time savings for strategic activities",
                "24/7 availability for monitoring",
                "Scalability for large data volumes"
              ]}
              variant="benefits"
            />
          </BlogSection>

          <BlogSection 
            title="Key Web Automation Tools" 
            icon={<Settings className="w-5 h-5 text-accent-blue" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Puppeteer</h4>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Precise Chrome control</li>
                  <li>• PDF and screenshot generation</li>
                  <li>• Form automation</li>
                  <li>• Crawling and scraping</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">Playwright</h4>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Multi-browser support</li>
                  <li>• Chrome, Firefox, Safari</li>
                  <li>• Automated testing</li>
                  <li>• Mobile emulation</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                <h4 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Selenium</h4>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Reliable veteran</li>
                  <li>• Multiple languages</li>
                  <li>• Large ecosystem</li>
                  <li>• Selenium Grid</li>
                </ul>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Cypress</h4>
                <ul className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <li>• Focused on E2E testing</li>
                  <li>• Advanced debugging</li>
                  <li>• Time travel</li>
                  <li>• Automatic capture</li>
                </ul>
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Practical Implementation" 
            icon={<Zap className="w-5 h-5 text-accent-blue" />}
            variant="code"
          >
            <h4 className="text-lg font-semibold mb-4">Example with Puppeteer</h4>
            
            <div className="space-y-4">
              <div>
                <p className="mb-2">1. Basic setup:</p>
                <CodeTerminal 
                  code={`const puppeteer = require('puppeteer');

(async () => {
  // Launch browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Navigate to URL
  await page.goto('https://example.com');
  
  // Take screenshot
  await page.screenshot({ path: 'example.png' });
  
  await browser.close();
})();`}
                  language="javascript"
                  title="Basic setup"
                />
              </div>

              <div>
                <p className="mb-2">2. Form automation:</p>
                <CodeTerminal 
                  code={`// Form filling
await page.type('#email', 'user@example.com');
await page.type('#password', 'mypassword123');
await page.click('#login-button');

// Wait for navigation
await page.waitForNavigation();

// Extract data
const data = await page.evaluate(() => {
  return {
    title: document.title,
    messages: document.querySelectorAll('.message').length
  };
});`}
                  language="javascript"
                  title="Form automation"
                />
              </div>

              <div>
                <p className="mb-2">3. Robust function with retry:</p>
                <CodeTerminal 
                  code={`async function clickWithRetry(page, selector, maxAttempts = 3) {
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    try {
      await page.waitForSelector(selector, { visible: true, timeout: 5000 });
      await page.click(selector);
      console.log(\`Successfully clicked: \${selector}\`);
      return;
    } catch (error) {
      attempts++;
      if (attempts >= maxAttempts) {
        throw new Error(\`Failed after \${attempts} attempts\`);
      }
      await page.waitForTimeout(1000);
    }
  }
}`}
                  language="javascript"
                  title="Robust function"
                />
              </div>
            </div>
          </BlogSection>

          <BlogSection 
            title="Effective Strategies" 
            icon={<Shield className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p>Develop automation scripts that survive site changes and unexpected conditions:</p>
            
            <TechList 
              title="Best Practices"
              items={[
                "Use stable selectors (IDs and data-attributes)",
                "Implement smart waiting mechanisms",
                "Handle exceptions gracefully",
                "Add retry logic for critical operations",
                "Maintain detailed logs for debugging"
              ]}
              variant="requirements"
            />

            <div className="mt-4">
              <h5 className="font-semibold mb-2">Overcoming Common Challenges:</h5>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Authentication:</strong> Store and reuse session cookies</li>
                <li><strong>Dynamic Content:</strong> Wait for specific network events</li>
                <li><strong>CAPTCHAs:</strong> Use official APIs whenever possible</li>
                <li><strong>Anti-bot:</strong> Add random delays and vary user-agents</li>
              </ul>
            </div>
          </BlogSection>

          <BlogSection 
            title="Transformative Use Cases" 
            icon={<Bot className="w-5 h-5 text-accent-blue" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <TechList 
                title="Ethical Web Scraping"
                items={[
                  "Price monitoring",
                  "Lead collection",
                  "News aggregation",
                  "Sentiment analysis"
                ]}
                variant="features"
              />
              
              <TechList 
                title="Process Automation"
                items={[
                  "Order processing",
                  "Data entry",
                  "Report generation",
                  "System synchronization"
                ]}
                variant="benefits"
              />
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4 border-l-4 border-yellow-500">
              <h5 className="font-bold text-yellow-800 dark:text-yellow-300">Legal Note</h5>
              <p className="text-yellow-700 dark:text-yellow-400">
                Always respect website terms of service, robots.txt files, and privacy laws. 
                Unauthorized web scraping may have legal implications.
              </p>
            </div>
          </BlogSection>

          <BlogSection title="Conclusion" variant="highlight">
            <p className="text-lg">
              Web automation is an essential skill in today's digital world. With the tools and 
              strategies presented, you can transform manual processes into efficient and 
              reliable automated workflows.
            </p>
            
            <TechList 
              title="Next Steps"
              items={[
                "Identify repetitive tasks in your workflow",
                "Start with simple automations using Puppeteer",
                "Implement robust error handling",
                "Monitor and optimize your scripts continuously",
                "Explore API integration when available"
              ]}
              variant="benefits"
            />
          </BlogSection>
        </>
        )
      }
    />
  );
};

export default WebAutomation;