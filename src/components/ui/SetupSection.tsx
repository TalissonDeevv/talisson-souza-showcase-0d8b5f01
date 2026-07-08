import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxSection from "@/components/ui/ParallaxSection";
import { getText } from "@/utils/translations";
import { useTheme } from "@/contexts/ThemeContext";
import { 
  Cpu, MemoryStick, HardDrive, Monitor, Fan, 
  CircuitBoard, Zap, ArrowUpRight, Headphones,
  Box, ChevronRight, TrendingUp, Target, Shield
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import setupImage from "@/assets/setup-pc.jpeg";

interface SetupComponent {
  icon: LucideIcon;
  name: string;
  spec: string;
  reason: string;
}

const SetupSection = () => {
  const { language } = useTheme();

  const components: SetupComponent[] = language === 'pt' ? [
    {
      icon: Cpu,
      name: "Processador",
      spec: "AMD Ryzen 5 5600 (6C/12T, 3.5–4.4GHz, 35MB Cache)",
      reason: "Arquitetura Zen 3, eficiência energética de 65W TDP e desempenho multithread suficiente para compilação, containers Docker e múltiplas instâncias de IDE simultâneas."
    },
    {
      icon: CircuitBoard,
      name: "Placa-mãe",
      spec: "ASRock B450M Steel Legend (AM4, DDR4)",
      reason: "Plataforma AM4 madura com VRM estável, suporte a NVMe e caminho de upgrade até Ryzen 7 5800X3D sem trocar placa."
    },
    {
      icon: MemoryStick,
      name: "Memória RAM",
      spec: "2x8GB Corsair Vengeance LPX DDR4 3200MHz",
      reason: "16GB em dual-channel é o mínimo funcional para dev moderno: navegador com 20+ abas, VS Code, Docker e terminal rodando simultaneamente."
    },
    {
      icon: HardDrive,
      name: "Armazenamento",
      spec: "Mancer Blink BM400 480GB SATA III",
      reason: "SSD SATA resolve 90% dos gargalos de I/O para desenvolvimento. Custo por GB significativamente menor que NVMe, com impacto imperceptível na rotina de código."
    },
    {
      icon: Monitor,
      name: "Placa de Vídeo",
      spec: "Asus GeForce RTX 3050 Dual OC 6GB",
      reason: "Aceleração CUDA para builds, suporte a múltiplos monitores e NVENC para gravação/streaming. Não preciso de RTX 4090 para compilar TypeScript."
    },
    {
      icon: Zap,
      name: "Fonte",
      spec: "Pichau Stardust 650W Full Modular Bronze",
      reason: "650W com certificação 80 Plus Bronze garante headroom para upgrades futuros. Full modular elimina cabos desnecessários e melhora o fluxo de ar."
    },
    {
      icon: Fan,
      name: "Cooler",
      spec: "Hawin VC-120 120mm",
      reason: "Tower cooler de 120mm mantém o 5600 abaixo de 70°C sob carga. Silencioso o suficiente para sessões longas de foco."
    },
    {
      icon: Box,
      name: "Gabinete",
      spec: "Mancer Narok V2 Mid Tower (3 fans)",
      reason: "Fluxo de ar positivo com 3 ventoinhas incluídas. Painel lateral em vidro temperado e espaço interno organizado para manutenção."
    },
    {
      icon: Headphones,
      name: "Headset",
      spec: "Mancer Crater 50mm",
      reason: "Drivers de 50mm com boa isolação passiva. Conforto para sessões extensas de código e calls com equipe."
    }
  ] : [
    {
      icon: Cpu,
      name: "Processor",
      spec: "AMD Ryzen 5 5600 (6C/12T, 3.5–4.4GHz, 35MB Cache)",
      reason: "Zen 3 architecture, 65W TDP energy efficiency and enough multithread performance for compilation, Docker containers and multiple simultaneous IDE instances."
    },
    {
      icon: CircuitBoard,
      name: "Motherboard",
      spec: "ASRock B450M Steel Legend (AM4, DDR4)",
      reason: "Mature AM4 platform with stable VRM, NVMe support and upgrade path up to Ryzen 7 5800X3D without changing the board."
    },
    {
      icon: MemoryStick,
      name: "RAM",
      spec: "2x8GB Corsair Vengeance LPX DDR4 3200MHz",
      reason: "16GB in dual-channel is the functional minimum for modern dev: browser with 20+ tabs, VS Code, Docker and terminal running simultaneously."
    },
    {
      icon: HardDrive,
      name: "Storage",
      spec: "Mancer Blink BM400 480GB SATA III",
      reason: "SATA SSD resolves 90% of I/O bottlenecks for development. Cost per GB significantly lower than NVMe, with imperceptible impact on coding routine."
    },
    {
      icon: Monitor,
      name: "Graphics Card",
      spec: "Asus GeForce RTX 3050 Dual OC 6GB",
      reason: "CUDA acceleration for builds, multi-monitor support and NVENC for recording/streaming. I don't need an RTX 4090 to compile TypeScript."
    },
    {
      icon: Zap,
      name: "Power Supply",
      spec: "Pichau Stardust 650W Full Modular Bronze",
      reason: "650W with 80 Plus Bronze certification ensures headroom for future upgrades. Full modular eliminates unnecessary cables and improves airflow."
    },
    {
      icon: Fan,
      name: "Cooler",
      spec: "Hawin VC-120 120mm",
      reason: "120mm tower cooler keeps the 5600 below 70°C under load. Quiet enough for long focus sessions."
    },
    {
      icon: Box,
      name: "Case",
      spec: "Mancer Narok V2 Mid Tower (3 fans)",
      reason: "Positive airflow with 3 included fans. Tempered glass side panel and organized internal space for maintenance."
    },
    {
      icon: Headphones,
      name: "Headset",
      spec: "Mancer Crater 50mm",
      reason: "50mm drivers with good passive isolation. Comfortable for extended coding sessions and team calls."
    }
  ];

  const realWorldPerformance = language === 'pt' ? [
    { task: "Compilação TypeScript/React", result: "Builds em <5s com Vite, HMR instantâneo" },
    { task: "Docker Compose (3-5 containers)", result: "Inicialização em ~15s, sem travamentos" },
    { task: "VS Code + 15 extensões", result: "Consumo médio de 800MB RAM, responsivo" },
    { task: "Navegador (20+ abas) + IDE + Terminal", result: "Multitarefa fluida sem swap" },
    { task: "Git operations (repos grandes)", result: "Push/pull/merge sem gargalos perceptíveis" },
    { task: "PostgreSQL local + testes", result: "Queries e migrations sem lentidão" }
  ] : [
    { task: "TypeScript/React Compilation", result: "Builds in <5s with Vite, instant HMR" },
    { task: "Docker Compose (3-5 containers)", result: "Startup in ~15s, no freezes" },
    { task: "VS Code + 15 extensions", result: "Average 800MB RAM usage, responsive" },
    { task: "Browser (20+ tabs) + IDE + Terminal", result: "Smooth multitasking without swap" },
    { task: "Git operations (large repos)", result: "Push/pull/merge without noticeable bottlenecks" },
    { task: "Local PostgreSQL + tests", result: "Queries and migrations without slowdown" }
  ];

  const upgradeStrategy = language === 'pt' ? [
    { upgrade: "RAM → 32GB (2x16GB DDR4 3200MHz)", why: "Quando projetos com Kubernetes local ou VMs se tornarem rotina" },
    { upgrade: "SSD NVMe 1TB (slot M.2)", why: "Quando o espaço de 480GB se tornar limitante com múltiplos projetos Docker" },
    { upgrade: "CPU → Ryzen 7 5800X3D", why: "Último upgrade possível na AM4, ganho significativo em cache L3 (96MB)" }
  ] : [
    { upgrade: "RAM → 32GB (2x16GB DDR4 3200MHz)", why: "When projects with local Kubernetes or VMs become routine" },
    { upgrade: "NVMe SSD 1TB (M.2 slot)", why: "When 480GB space becomes limiting with multiple Docker projects" },
    { upgrade: "CPU → Ryzen 7 5800X3D", why: "Last possible AM4 upgrade, significant L3 cache gain (96MB)" }
  ];

  return (
    <ParallaxSection 
      className="py-20 lg:py-24"
      speed={0.1}
      backgroundElement={
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-foreground/[0.02] to-transparent blur-3xl hidden md:block" />
        </>
      }
    >
      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 mb-6 font-medium"
          >
            {getText(language, 'Estação de Trabalho', 'Workstation')}
          </motion.span>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 leading-[1.05]">
            {getText(language, 'Setup Principal', 'Main Setup')}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
            {getText(language, 
              'Ferramenta boa é ferramenta que resolve o problema sem criar outro. Meu setup foi montado com uma premissa simples: máxima produtividade por real investido, com caminho de upgrade claro e sem desperdício.',
              'A good tool is one that solves the problem without creating another. My setup was built with a simple premise: maximum productivity per dollar invested, with a clear upgrade path and no waste.'
            )}
          </p>
          <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-2xl mb-16">
            {getText(language,
              'Escolhi AM4 conscientemente. É uma plataforma madura, com preços estabilizados, compatibilidade ampla e peças disponíveis no mercado secundário. Não preciso da última geração para compilar código. preciso de estabilidade, headroom térmico e custo controlado.',
              "I chose AM4 consciously. It's a mature platform with stabilized prices, wide compatibility and parts available on the secondary market. I don't need the latest generation to compile code. I need stability, thermal headroom and controlled cost."
            )}
          </p>
        </ScrollReveal>

        {/* Setup Photo */}
        <ScrollReveal>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="mb-16"
          >
            <div 
              className="relative rounded-2xl overflow-hidden border border-border/20"
              style={{ boxShadow: '0 8px 40px hsl(var(--foreground) / 0.05)' }}
            >
              <img 
                src={setupImage} 
                alt={getText(language, 'Setup de trabalho. PC principal com iluminação RGB', 'Work setup. main PC with RGB lighting')} 
                className="w-full h-auto object-cover max-h-[500px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <p className="text-xs text-foreground/60 tracking-wider uppercase">
                  {getText(language, 'IMAGEM DO COMPUTADOR', 'COMPUTER IMAGE')}
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Components Grid */}
        <ScrollReveal>
          <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground/60 mb-8 font-medium">
            {getText(language, 'Configuração completa', 'Full configuration')}
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {components.map((comp, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <div 
                  className="h-full p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm group hover:border-foreground/10 transition-all duration-300"
                  style={{ boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center group-hover:border-foreground/20 transition-colors duration-300 flex-shrink-0">
                      <comp.icon className="w-4 h-4 text-foreground/50 group-hover:text-foreground/80 transition-colors duration-300" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-foreground/40 font-medium">
                      {comp.name}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-foreground mb-2 leading-snug">
                    {comp.spec}
                  </h4>
                  <p className="text-xs text-muted-foreground/70 leading-relaxed">
                    {comp.reason}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Real-World Performance */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                <Target className="w-4 h-4 text-foreground/50" />
              </div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground/60 font-medium">
                {getText(language, 'Desempenho real', 'Real-world performance')}
              </h3>
            </div>

            <div 
              className="rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm overflow-hidden"
              style={{ boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)' }}
            >
              {realWorldPerformance.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-6 py-4 ${
                    index !== realWorldPerformance.length - 1 ? 'border-b border-border/10' : ''
                  }`}
                >
                  <span className="text-sm text-foreground/80 font-medium">{item.task}</span>
                  <span className="text-xs text-muted-foreground/60 sm:text-right">{item.result}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Upgrade Strategy */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-9 h-9 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-foreground/50" />
              </div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-muted-foreground/60 font-medium">
                {getText(language, 'Estratégia de upgrade', 'Upgrade strategy')}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {upgradeStrategy.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div 
                    className="h-full p-6 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm"
                    style={{ boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <ChevronRight className="w-3 h-3 text-foreground/30" />
                      <span className="text-xs uppercase tracking-wider text-foreground/40 font-medium">
                        Upgrade {index + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-foreground mb-2">{item.upgrade}</h4>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">{item.why}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Closing Philosophy */}
        <ScrollReveal>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
          >
            <div 
              className="relative p-8 lg:p-10 rounded-2xl border border-border/20 bg-card/30 backdrop-blur-sm max-w-3xl"
              style={{ boxShadow: '0 4px 20px hsl(var(--foreground) / 0.02)' }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl border border-border/30 bg-card/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield className="w-5 h-5 text-foreground/50" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {getText(language,
                      'Essa máquina não é sobre ter o melhor hardware do mercado. É sobre ter exatamente o que eu preciso para entregar código de qualidade todos os dias, sem gargalos e sem desperdício. Qualquer desenvolvedor pode ser produtivo com menos do que isso o que define seu trabalho é conhecimento, disciplina e consistência.',
                      "This machine isn't about having the best hardware on the market. It's about having exactly what I need to deliver quality code every day, without bottlenecks and without waste. Any developer can be productive with less than this what defines your work is knowledge, discipline and consistency."
                    )}
                  </p>
                  <p className="text-xs text-foreground/40 italic">
                    {getText(language,
                      'Ferramentas importam. Mentalidade importa mais.',
                      'Tools matter. Mindset matters more.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </ParallaxSection>
  );
};

export default SetupSection;
