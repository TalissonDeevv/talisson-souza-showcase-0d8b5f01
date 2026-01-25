import { useState } from "react";
import { Copy, Terminal, Check } from "lucide-react";
import { motion } from "framer-motion";

interface CodeTerminalProps {
  code: string;
  language?: string;
  title?: string;
  showOutput?: boolean;
  output?: string;
}

const CodeTerminal = ({ code, language = "bash", title, showOutput = false, output }: CodeTerminalProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="my-6 rounded-2xl overflow-hidden border border-border/30 bg-background/80 backdrop-blur-sm"
      style={{
        boxShadow: '0 4px 20px hsl(var(--foreground) / 0.05)'
      }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-card/50 px-4 py-3 border-b border-border/20">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-foreground/20 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-foreground/20 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-foreground/20 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal size={14} />
            <span className="text-xs font-medium tracking-wide">{title || `${language}`}</span>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-card/50 hover:bg-card text-muted-foreground hover:text-foreground rounded-lg text-xs transition-all duration-300 border border-border/20"
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>

      {/* Code Content */}
      <div className="relative bg-background/50">
        <pre className="p-5 overflow-x-auto">
          <code className="text-sm text-foreground font-mono whitespace-pre leading-relaxed">
            {language === "bash" && <span className="text-muted-foreground">$ </span>}
            {code}
          </code>
        </pre>
      </div>

      {/* Output Section */}
      {showOutput && output && (
        <div className="border-t border-border/20 bg-card/30">
          <div className="px-4 py-2 bg-card/50 text-[10px] tracking-[0.2em] uppercase text-muted-foreground/70 font-medium">
            Output
          </div>
          <pre className="p-5 text-sm text-foreground/70 font-mono">
            {output}
          </pre>
        </div>
      )}
    </motion.div>
  );
};

export default CodeTerminal;
