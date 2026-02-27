import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { ChevronUp, ChevronDown, ChevronsUp, ChevronsDown } from "lucide-react";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ command: string; output: string; type: 'command' | 'output' | 'error' }>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { language } = useTheme();

  // Scroll functions
  const scrollUp = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    }
  };

  const scrollDown = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({ top: terminalRef.current.scrollHeight, behavior: 'smooth' });
    }
  };

  // Check if scroll buttons should be shown
  useEffect(() => {
    const checkScroll = () => {
      if (terminalRef.current) {
        const { scrollHeight, clientHeight } = terminalRef.current;
        setShowScrollButtons(scrollHeight > clientHeight);
      }
    };
    
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [history]);

  const allCommands = [
    'help', 'sobre', 'about', 'projetos', 'projects', 'contato', 'contact',
    'empresas', 'companies', 'servicos', 'services', 'blog', 'carreira', 'career',
    'livro', 'book', 'parcerias', 'partnerships', 'skills', 'habilidades',
    'clear', 'whoami', 'ls', 'pwd', 'date', 'neofetch', 'matrix', 'joke'
  ];

  const commands: { [key: string]: { pt: string; en: string } } = {
    help: {
      pt: "📋 Comandos disponíveis:\n\n  📄 Navegação:\n  • sobre      - Informações sobre mim\n  • projetos   - Meus projetos\n  • contato    - Entre em contato\n  • empresas   - Minhas empresas\n  • servicos   - Serviços prestados\n  • blog       - Artigos e tutoriais\n  • carreira   - Minha trajetória\n  • livro      - Meu livro\n  • parcerias  - Parcerias e atuações\n\n  🛠️ Utilitários:\n  • skills     - Minhas habilidades\n  • whoami     - Quem sou eu\n  • neofetch   - Info do sistema\n  • date       - Data atual\n  • ls         - Listar páginas\n  • joke       - Piada de dev\n  • matrix     - Efeito matrix\n  • clear      - Limpar terminal\n\n  💡 Dicas:\n  • Use 'open <página>' para navegar\n  • Use ↑↓ para histórico de comandos\n  • Tab para autocompletar",
      en: "📋 Available commands:\n\n  📄 Navigation:\n  • about      - Information about me\n  • projects   - My projects\n  • contact    - Get in touch\n  • companies  - My companies\n  • services   - Services provided\n  • blog       - Articles and tutorials\n  • career     - My journey\n  • book       - My book\n  • partnerships - Partnerships & activities\n\n  🛠️ Utilities:\n  • skills     - My skills\n  • whoami     - Who am I\n  • neofetch   - System info\n  • date       - Current date\n  • ls         - List pages\n  • joke       - Dev joke\n  • matrix     - Matrix effect\n  • clear      - Clear terminal\n\n  💡 Tips:\n  • Use 'open <page>' to navigate\n  • Use ↑↓ for command history\n  • Tab to autocomplete"
    },
    sobre: {
      pt: "👨‍💻 Talisson Souza (Talinho)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💼 Empreendedor Executivo | Diretor de Negócios | Dev Full Stack\n📍 Recife, Pernambuco, Brasil\n\n🎯 Especialista em:\n   • React, Node.js, TypeScript, Python\n   • Gestão de Projetos e Equipes\n   • Consultoria Empresarial\n\n🚀 Fundador:\n   • Cheetah Solutions Network (CEO)\n   • Werneck Group (Diretor Estratégico)\n\n🤝 Parcerias:\n   • Square Cloud (Parceiro Oficial)\n   • Rocketseat (Influencer)\n\n📚 Autor do livro 'Superando Limites'\n\n💡 Digite 'open sobre' para ver mais",
      en: "👨‍💻 Talisson Souza (Talinho)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💼 Executive Entrepreneur | Business Director | Full Stack Dev\n📍 Recife, Pernambuco, Brazil\n\n🎯 Specialist in:\n   • React, Node.js, TypeScript, Python\n   • Project & Team Management\n   • Business Consulting\n\n🚀 Founder:\n   • Cheetah Solutions Network (CEO)\n   • Werneck Group (Strategic Director)\n\n🤝 Partnerships:\n   • Square Cloud (Official Partner)\n   • Rocketseat (Influencer)\n\n📚 Author of 'Overcoming Limits'\n\n💡 Type 'open about' to see more"
    },
    about: { pt: "", en: "" },
    whoami: {
      pt: "┌──────────────────────────────────────┐\n│  talinho@dev ~ Talisson Souza        │\n│  ─────────────────────────────────── │\n│  🎂 20 anos                          │\n│  💼 CEO & Full Stack Developer       │\n│  🌍 Recife, PE - Brasil              │\n│  ❤️ Tecnologia, Música, Café         │\n│  🎯 Criando o futuro, uma linha      │\n│     de código por vez! 🚀            │\n└──────────────────────────────────────┘",
      en: "┌──────────────────────────────────────┐\n│  talinho@dev ~ Talisson Souza        │\n│  ─────────────────────────────────── │\n│  🎂 20 years old                     │\n│  💼 CEO & Full Stack Developer       │\n│  🌍 Recife, PE - Brazil              │\n│  ❤️ Tech, Music, Coffee              │\n│  🎯 Building the future, one line    │\n│     of code at a time! 🚀            │\n└──────────────────────────────────────┘"
    },
    projetos: {
      pt: "🚀 Projetos em Destaque:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📁 sagiri-bot/\n   └── Landing page para bot de Discord\n       Tech: React, Tailwind, Framer Motion\n\n📁 werneck-group/\n   └── Plataforma corporativa completa\n       Tech: TypeScript, React, Node.js, MongoDB\n\n📁 familia-werneck/\n   └── Portal familiar personalizado\n       Tech: React, Firebase, Styled Components\n\n💡 Digite 'open projetos' para ver todos",
      en: "🚀 Featured Projects:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📁 sagiri-bot/\n   └── Discord bot landing page\n       Tech: React, Tailwind, Framer Motion\n\n📁 werneck-group/\n   └── Complete corporate platform\n       Tech: TypeScript, React, Node.js, MongoDB\n\n📁 familia-werneck/\n   └── Custom family portal\n       Tech: React, Firebase, Styled Components\n\n💡 Type 'open projects' to see all"
    },
    projects: { pt: "", en: "" },
    contato: {
      pt: "📬 Informações de Contato:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📧 Email:     talinhodev@gmail.com\n📱 WhatsApp:  +55 (81) 9 9396-4261\n🔗 LinkedIn:  /in/talisson-souza\n🐙 GitHub:    /talissontbf\n📍 Local:     Recife, PE - Brasil\n\n💡 Digite 'open contato' para o formulário",
      en: "📬 Contact Information:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📧 Email:     talinhodev@gmail.com\n📱 WhatsApp:  +55 (81) 9 9396-4261\n🔗 LinkedIn:  /in/talisson-souza\n🐙 GitHub:    /talissontbf\n📍 Location:  Recife, PE - Brazil\n\n💡 Type 'open contact' for the form"
    },
    contact: { pt: "", en: "" },
    empresas: {
      pt: "🏢 Minhas Empresas:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🐆 Cheetah Solutions Network\n   └── CEO & Founder (2020 - Presente)\n       Soluções digitais: bots, sites, sistemas\n\n🏛️ Werneck Group\n   └── Diretor Estratégico (2024 - Presente)\n       Consultoria empresarial e tecnologia\n\n💡 Digite 'open empresas' para mais detalhes",
      en: "🏢 My Companies:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🐆 Cheetah Solutions Network\n   └── CEO & Founder (2020 - Present)\n       Digital solutions: bots, websites, systems\n\n🏛️ Werneck Group\n   └── Strategic Director (2024 - Present)\n       Business consulting and technology\n\n💡 Type 'open companies' for more details"
    },
    companies: { pt: "", en: "" },
    servicos: {
      pt: "🛠️ Serviços Oferecidos:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n💻 Desenvolvimento Web\n🤖 Desenvolvimento de Bots\n📱 Desenvolvimento Mobile\n🎨 UI/UX Design\n☁️ Soluções em Nuvem\n📊 Consultoria Tech\n\n💡 Digite 'open servicos' para detalhes",
      en: "🛠️ Services Offered:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n💻 Web Development\n🤖 Bot Development\n📱 Mobile Development\n🎨 UI/UX Design\n☁️ Cloud Solutions\n📊 Tech Consulting\n\n💡 Type 'open services' for details"
    },
    services: { pt: "", en: "" },
    carreira: {
      pt: "📈 Minha Trajetória:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n2018 │ 🚀 Início da jornada (14 anos)\n     │    Primeiros bots para Discord\n     │\n2020 │ 🐆 Fundação Cheetah Solutions Network\n     │    Criação da própria empresa\n     │\n2021 │ 💪 Momento decisivo\n     │    Superação de desafios pessoais\n     │\n2024 │ 🏛️ Werneck Group\n     │    Diretor Estratégico\n     │\n2025 │ 🤝 Parcerias\n     │    Square Cloud + Rocketseat\n\n💡 Digite 'open carreira' para história completa",
      en: "📈 My Journey:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n2018 │ 🚀 Journey begins (14 years old)\n     │    First Discord bots\n     │\n2020 │ 🐆 Cheetah Solutions Network Founded\n     │    Created my own company\n     │\n2021 │ 💪 Decisive moment\n     │    Overcoming personal challenges\n     │\n2024 │ 🏛️ Werneck Group\n     │    Strategic Director\n     │\n2025 │ 🤝 Partnerships\n     │    Square Cloud + Rocketseat\n\n💡 Type 'open career' for full story"
    },
    career: { pt: "", en: "" },
    livro: {
      pt: "📚 Meu Livro:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📖 'Superando Limites: da Rejeição ao Sucesso'\n\n✨ 121 capítulos de inspiração\n📚 Lições de resiliência e liderança\n💡 Estratégias para superar obstáculos\n🎯 Guia para construir seu legado\n\n🛒 Disponível na Amazon!\n\n💡 Digite 'open sobre' para mais info",
      en: "📚 My Book:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📖 'Overcoming Limits: from Rejection to Success'\n\n✨ 121 chapters of inspiration\n📚 Lessons on resilience and leadership\n💡 Strategies to overcome obstacles\n🎯 Guide to building your legacy\n\n🛒 Available on Amazon!\n\n💡 Type 'open about' for more info"
    },
    book: { pt: "", en: "" },
    parcerias: {
      pt: "🤝 Parcerias & Atuações:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n☁️ Square Cloud\n   └── Parceiro Oficial\n       Maior hospedagem de bots da LATAM\n\n🚀 Rocketseat\n   └── Influencer\n       Maior comunidade de devs do Brasil\n\n👑 Tech Leaders Network\n   └── Fundador\n       Comunidade para empreendedores\n\n🎮 Brasil Play Shox\n   └── Ex Moderador Discord\n       Maior servidor GTA SA Online da LATAM",
      en: "🤝 Partnerships & Activities:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n☁️ Square Cloud\n   └── Official Partner\n       Largest bot hosting in LATAM\n\n🚀 Rocketseat\n   └── Influencer\n       Largest dev community in Brazil\n\n👑 Tech Leaders Network\n   └── Founder\n       Community for entrepreneurs\n\n🎮 Brasil Play Shox\n   └── Former Discord Moderator\n       Largest GTA SA Online server in LATAM"
    },
    partnerships: { pt: "", en: "" },
    skills: {
      pt: "⚡ Tech Stack:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🟨 JavaScript   ████████████████ 95%\n🔷 TypeScript   ███████████████░ 90%\n⚛️ React        ███████████████░ 90%\n🟢 Node.js      ██████████████░░ 85%\n🐍 Python       █████████████░░░ 80%\n🍃 MongoDB      ██████████████░░ 85%\n🐘 PostgreSQL   █████████████░░░ 80%\n🐳 Docker       ████████████░░░░ 75%\n☁️ AWS/Cloud    ███████████░░░░░ 70%",
      en: "⚡ Tech Stack:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n🟨 JavaScript   ████████████████ 95%\n🔷 TypeScript   ███████████████░ 90%\n⚛️ React        ███████████████░ 90%\n🟢 Node.js      ██████████████░░ 85%\n🐍 Python       █████████████░░░ 80%\n🍃 MongoDB      ██████████████░░ 85%\n🐘 PostgreSQL   █████████████░░░ 80%\n🐳 Docker       ████████████░░░░ 75%\n☁️ AWS/Cloud    ███████████░░░░░ 70%"
    },
    habilidades: { pt: "", en: "" },
    blog: {
      pt: "📝 Blog & Artigos:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📰 Artigos sobre:\n   • Desenvolvimento Web\n   • Bots e Automação\n   • Gestão de Projetos\n   • Empreendedorismo Tech\n\n💡 Digite 'open blog' para ler",
      en: "📝 Blog & Articles:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📰 Articles about:\n   • Web Development\n   • Bots and Automation\n   • Project Management\n   • Tech Entrepreneurship\n\n💡 Type 'open blog' to read"
    },
    ls: {
      pt: "📁 Páginas disponíveis:\n\n  📄 /           (home)\n  📄 /about      (sobre)\n  📄 /projects   (projetos)\n  📄 /services   (servicos)\n  📄 /career     (carreira)\n  📄 /blog       (blog)\n  📄 /contact    (contato)",
      en: "📁 Available pages:\n\n  📄 /           (home)\n  📄 /about      (about)\n  📄 /projects   (projects)\n  📄 /services   (services)\n  📄 /career     (career)\n  📄 /blog       (blog)\n  📄 /contact    (contact)"
    },
    pwd: {
      pt: "/home/talinho/portfolio",
      en: "/home/talinho/portfolio"
    },
    date: {
      pt: new Date().toLocaleString('pt-BR'),
      en: new Date().toLocaleString('en-US')
    },
    neofetch: {
      pt: `       ████████████████       talinho@dev
    ██                 ██     ─────────────────
  ██   ████     ████    ██   OS: Talinho OS v2.0
 ██   ██████   ██████   ██   Host: Portfolio Web
██    ██████   ██████    ██  Kernel: React 18.x
██    ██████   ██████    ██  Uptime: 8+ anos coding
██      ████     ████    ██  Packages: 50+ projects
 ██                     ██   Shell: TypeScript
  ██                   ██    Resolution: Responsive
    ██               ██      DE: Tailwind CSS
       ████████████████       WM: Framer Motion
                              Theme: Dark/Light
                              CPU: Coffee-powered
                              Memory: Unlimited ideas`,
      en: `       ████████████████       talinho@dev
    ██                 ██     ─────────────────
  ██   ████     ████    ██   OS: Talinho OS v2.0
 ██   ██████   ██████   ██   Host: Portfolio Web
██    ██████   ██████    ██  Kernel: React 18.x
██    ██████   ██████    ██  Uptime: 8+ years coding
██      ████     ████    ██  Packages: 50+ projects
 ██                     ██   Shell: TypeScript
  ██                   ██    Resolution: Responsive
    ██               ██      DE: Tailwind CSS
       ████████████████       WM: Framer Motion
                              Theme: Dark/Light
                              CPU: Coffee-powered
                              Memory: Unlimited ideas`
    },
    matrix: {
      pt: "🔲 Iniciando Matrix...\n\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n█▀█ █▀▀ █ █▀▀   ▀█▀ █▀█ █▀█ ▀█▀\n█▄█ ██▄ █ █▄█   ░█░ █▄█ █▄█ ░█░\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n\n⬛⬛⬛🟩⬛⬛🟩⬛⬛⬛🟩⬛⬛⬛\n⬛🟩⬛⬛⬛🟩⬛⬛🟩⬛⬛⬛🟩⬛\n🟩⬛⬛🟩⬛⬛⬛🟩⬛⬛🟩⬛⬛🟩\n⬛⬛🟩⬛⬛🟩⬛⬛⬛🟩⬛⬛🟩⬛\n\n💊 Você escolheu a pílula vermelha...",
      en: "🔲 Starting Matrix...\n\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n█▀█ █▀▀ █ █▀▀   ▀█▀ █▀█ █▀█ ▀█▀\n█▄█ ██▄ █ █▄█   ░█░ █▄█ █▄█ ░█░\n░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░\n\n⬛⬛⬛🟩⬛⬛🟩⬛⬛⬛🟩⬛⬛⬛\n⬛🟩⬛⬛⬛🟩⬛⬛🟩⬛⬛⬛🟩⬛\n🟩⬛⬛🟩⬛⬛⬛🟩⬛⬛🟩⬛⬛🟩\n⬛⬛🟩⬛⬛🟩⬛⬛⬛🟩⬛⬛🟩⬛\n\n💊 You chose the red pill..."
    },
    joke: {
      pt: "😂 Piada de Dev:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" + [
        "Por que programadores preferem o escuro?\nPorque a luz atrai bugs! 🐛",
        "O que um código disse pro outro?\nVocê tem classe! 💪",
        "Como o programador termina o relacionamento?\nEle dá um break! 💔",
        "Por que o programador morreu no chuveiro?\nPorque o shampoo dizia: lavar, enxaguar, repetir. 🔄",
        "Quantos programadores precisa pra trocar uma lâmpada?\nNenhum, isso é problema de hardware! 💡"
      ][Math.floor(Math.random() * 5)],
      en: "😂 Dev Joke:\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n" + [
        "Why do programmers prefer the dark?\nBecause light attracts bugs! 🐛",
        "What did one code say to another?\nYou've got class! 💪",
        "How does a programmer end a relationship?\nWith a break statement! 💔",
        "Why did the programmer die in the shower?\nThe shampoo said: wash, rinse, repeat. 🔄",
        "How many programmers does it take to change a light bulb?\nNone, that's a hardware problem! 💡"
      ][Math.floor(Math.random() * 5)]
    }
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    
    if (value.length > 0) {
      const filtered = allCommands.filter(cmd => 
        cmd.startsWith(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 3));
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[0]);
        setSuggestions([]);
      }
    }
  };

  const processCommand = (command: string): string => {
    const cmd = command.toLowerCase().trim();
    
    if (cmd === "clear") {
      setHistory([]);
      return "";
    }

    if (command.startsWith("open ") || command.startsWith("cd ")) {
      const page = command.split(" ")[1];
      const pageMap: { [key: string]: string } = {
        contato: "/contact", contact: "/contact",
        projetos: "/projects", projects: "/projects",
        sobre: "/about", about: "/about",
        empresas: "/career", companies: "/career",
        servicos: "/services", services: "/services",
        blog: "/blog",
        carreira: "/career", career: "/career",
      };
      
      if (pageMap[page]) {
        setTimeout(() => navigate(pageMap[page]), 500);
        return getText(language, `Redirecionando para ${page}...`, `Redirecting to ${page}...`);
      }
      return getText(language, `Página '${page}' não encontrada`, `Page '${page}' not found`);
    }

    const commandKey = command as keyof typeof commands;
    if (commands[commandKey]) {
      const langKey = language as 'pt' | 'en';
      return commands[commandKey][langKey] || commands[commandKey]['en'];
    }

    return getText(language, 
      `Comando '${command}' não encontrado. Digite 'help' para ver os comandos disponíveis.`,
      `Command '${command}' not found. Type 'help' to see available commands.`
    );
  };

  const executeCommand = async (command: string) => {
    setIsTyping(true);
    setCommandHistory(prev => [command, ...prev]);
    setHistoryIndex(-1);
    
    const newHistory = [...history, { command, output: "", type: 'command' as const }];
    setHistory(newHistory);
    
    await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 200));
    
    const output = processCommand(command);
    
    if (output) {
      setHistory([...newHistory, { command: "", output, type: 'output' as const }]);
    }
    
    setIsTyping(false);
    setSuggestions([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isTyping) {
      executeCommand(input.trim());
      setInput("");
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    setHistory([
      { 
        command: "", 
        output: getText(language,
          "Bem-vindo ao Talinho Terminal! 🚀\nDigite 'help' para ver os comandos disponíveis.\n\n💡 Dica: Use ↑↓ para navegar no histórico e Tab para autocompletar.",
          "Welcome to Talinho Terminal! 🚀\nType 'help' to see available commands.\n\n💡 Tip: Use ↑↓ to navigate history and Tab to autocomplete."
        ),
        type: 'output' 
      }
    ]);
  }, [language]);

  return (
    <div className="font-mono text-sm h-full relative bg-foreground text-background">
      <div 
        ref={terminalRef}
        className="p-4 h-full overflow-y-auto"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            {entry.type === 'command' && (
              <div className="flex items-center gap-1 text-background/60">
                <span>$</span>
                <span className="text-background ml-1">{entry.command}</span>
              </div>
            )}
            {entry.type === 'output' && entry.output && (
              <div className="whitespace-pre-line text-background/80 mt-1 text-xs leading-relaxed">
                {entry.output}
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-center gap-1 text-background/60">
            <span>$</span>
            <span className="text-background/40 ml-1">...</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="mt-2">
          <div className="flex items-center gap-1 text-background/60">
            <span>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-background outline-none caret-background ml-1 placeholder:text-background/30"
              placeholder={getText(language, "digite um comando...", "type a command...")}
              autoFocus
            />
          </div>
          {suggestions.length > 0 && (
            <div className="ml-4 mt-1 text-background/40 text-xs">
              {suggestions.join(' · ')}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Terminal;
