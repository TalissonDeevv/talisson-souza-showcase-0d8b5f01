import BlogPost from "@/components/ui/BlogPost";
import BlogSection from "@/components/ui/BlogSection";
import CodeTerminal from "@/components/ui/CodeTerminal";
import TechList from "@/components/ui/TechList";
import { useTheme } from "@/contexts/ThemeContext";
import { Bot, Settings, Code, Lightbulb } from "lucide-react";

const BotDiscord = () => {
  const { language } = useTheme();
  
  return (
    <BlogPost
      id="bot-discord"
      title={language === 'pt' ? "Criando Bots para Discord: Um Guia Completo" : "Creating Discord Bots: A Complete Guide"}
      date={language === 'pt' ? "10 de Maio, 2024" : "May 10, 2024"}
      tags={["Discord", "Bot", "JavaScript", "Node.js"]}
      image="https://i.ibb.co/G30Wf7JB/Top-10-Best-Discord-Bots-to-Improve-Your-Discord-Server.jpg"
      content={
        language === 'pt' ? (
        <>
          <BlogSection 
            title="Introdução aos Bots do Discord" 
            icon={<Bot className="w-5 h-5 text-foreground" />}
            variant="highlight"
          >
            <p className="text-lg leading-relaxed">
              Os bots do Discord transformaram completamente a maneira como interagimos em servidores, 
              oferecendo desde funcionalidades simples de moderação até complexas integrações com serviços externos. 
              Com o crescimento constante da plataforma, a demanda por bots personalizados também aumentou, 
              tornando o desenvolvimento dessas ferramentas uma habilidade valiosa para programadores.
            </p>
            <p>
              Neste guia abrangente, vamos explorar todas as etapas necessárias para criar um bot funcional 
              para o Discord utilizando JavaScript e Node.js com a biblioteca Discord.js.
            </p>
          </BlogSection>

          <BlogSection 
            title="Configurando o Ambiente" 
            icon={<Settings className="w-5 h-5 text-foreground" />}
          >
            <TechList 
              title="Pré-requisitos"
              items={[
                "Node.js (versão 16.9.0 ou superior)",
                "Um editor de código (VS Code recomendado)", 
                "Conta no Discord",
                "Conhecimento básico de JavaScript"
              ]}
              variant="requirements"
            />
            
            <h4 className="text-lg font-semibold mt-6 mb-3">Instalando dependências</h4>
            <CodeTerminal 
              code="npm install discord.js dotenv"
              language="bash"
              title="Terminal - Instalação"
              showOutput={true}
              output="added 2 packages in 3s"
            />
          </BlogSection>

          <BlogSection 
            title="Estrutura Básica do Bot" 
            icon={<Code className="w-5 h-5 text-foreground" />}
            variant="code"
          >
            <p>Vamos criar a estrutura básica do nosso bot. Primeiro, crie um arquivo <code>index.js</code>:</p>
            
            <CodeTerminal 
              code={`// index.js
require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({ 
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ] 
});

client.on('ready', () => {
  console.log('Bot está online!');
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);`}
              language="javascript"
              title="index.js - Código principal"
            />

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-3">Arquivo de configuração (.env)</h4>
              <CodeTerminal 
                code="BOT_TOKEN=seu_token_aqui"
                language="env"
                title=".env - Configurações"
              />
            </div>
          </BlogSection>

          <BlogSection 
            title="Executando o Bot" 
            icon={<Lightbulb className="w-5 h-5 text-foreground" />}
            variant="highlight"
          >
            <p>Para executar seu bot, use o seguinte comando:</p>
            <CodeTerminal 
              code="node index.js"
              language="bash"
              title="Executando o bot"
              showOutput={true}
              output="Bot está online!"
            />
            
            <TechList 
              title="Funcionalidades implementadas"
              items={[
                "Bot se conecta ao Discord automaticamente",
                "Responde ao comando !ping com 'Pong!'",
                "Ignora mensagens de outros bots",
                "Logs de status no console"
              ]}
              variant="features"
            />
          </BlogSection>

          <BlogSection title="Conclusão" variant="highlight">
            <p className="text-lg">
              Criar bots para Discord é uma excelente forma de aprender programação e automação. 
              Com este conhecimento básico, você pode criar bots que agregam valor a qualquer servidor.
            </p>
            <TechList 
              title="Próximos passos"
              items={[
                "Adicionar mais comandos personalizados",
                "Implementar sistema de moderação",
                "Conectar com banco de dados",
                "Criar interface web para configuração"
              ]}
              variant="benefits"
            />
          </BlogSection>
        </>
        ) : (
        <>
          <BlogSection 
            title="Introduction to Discord Bots" 
            icon={<Bot className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p className="text-lg leading-relaxed">
              Discord bots have completely transformed how we interact in servers, offering everything from simple 
              moderation features to complex integrations with external services. With the platform's constant growth, 
              the demand for custom bots has also increased, making bot development a valuable skill for programmers.
            </p>
            <p>
              In this comprehensive guide, we'll explore all the necessary steps to create a functional Discord bot 
              using JavaScript and Node.js with the Discord.js library.
            </p>
          </BlogSection>

          <BlogSection 
            title="Setting up the Environment" 
            icon={<Settings className="w-5 h-5 text-accent-blue" />}
          >
            <TechList 
              title="Prerequisites"
              items={[
                "Node.js (version 16.9.0 or higher)",
                "A code editor (VS Code recommended)",
                "Discord account", 
                "Basic JavaScript knowledge"
              ]}
              variant="requirements"
            />
            
            <h4 className="text-lg font-semibold mt-6 mb-3">Installing dependencies</h4>
            <CodeTerminal 
              code="npm install discord.js dotenv"
              language="bash"
              title="Terminal - Installation"
              showOutput={true}
              output="added 2 packages in 3s"
            />
          </BlogSection>

          <BlogSection 
            title="Basic Bot Structure" 
            icon={<Code className="w-5 h-5 text-accent-blue" />}
            variant="code"
          >
            <p>Let's create the basic structure of our bot. First, create an <code>index.js</code> file:</p>
            
            <CodeTerminal 
              code={`// index.js
require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({ 
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ] 
});

client.on('ready', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);`}
              language="javascript"
              title="index.js - Main code"
            />

            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-3">Configuration file (.env)</h4>
              <CodeTerminal 
                code="BOT_TOKEN=your_token_here"
                language="env"
                title=".env - Configuration"
              />
            </div>
          </BlogSection>

          <BlogSection 
            title="Running the Bot" 
            icon={<Lightbulb className="w-5 h-5 text-accent-blue" />}
            variant="highlight"
          >
            <p>To run your bot, use the following command:</p>
            <CodeTerminal 
              code="node index.js"
              language="bash"
              title="Running the bot"
              showOutput={true}
              output="Bot is online!"
            />
            
            <TechList 
              title="Implemented features"
              items={[
                "Bot connects to Discord automatically",
                "Responds to !ping command with 'Pong!'",
                "Ignores messages from other bots",
                "Status logs in console"
              ]}
              variant="features"
            />
          </BlogSection>

          <BlogSection title="Conclusion" variant="highlight">
            <p className="text-lg">
              Creating Discord bots is an excellent way to learn programming and automation. 
              With this basic knowledge, you can create bots that add value to any Discord server.
            </p>
            <TechList 
              title="Next steps"
              items={[
                "Add more custom commands",
                "Implement moderation system",
                "Connect to database",
                "Create web interface for configuration"
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

export default BotDiscord;