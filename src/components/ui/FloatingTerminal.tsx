import { useState } from "react";
import { X } from "lucide-react";
import Terminal from "./Terminal";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";

const FloatingTerminal = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useTheme();

  return (
    <div className="relative">
      {/* Collapsed state - click to expand */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="w-full bg-foreground text-background p-4 text-left font-mono text-sm hover:opacity-90 transition-opacity duration-200"
        >
          <span className="text-muted-foreground/60">$</span> {getText(language, 'clique para abrir o terminal', 'click to open terminal')}_
        </button>
      )}

      {/* Expanded terminal */}
      {isExpanded && (
        <div className="bg-foreground text-background overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-background/10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="w-2.5 h-2.5 rounded-full bg-background/20 hover:bg-background/40 transition-colors duration-200"
                />
                <div className="w-2.5 h-2.5 rounded-full bg-background/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-background/20" />
              </div>
              <span className="text-xs text-background/60 font-mono">terminal</span>
            </div>
            
            <button
              onClick={() => setIsExpanded(false)}
              className="text-background/40 hover:text-background transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Terminal Content */}
          <div className="h-80">
            <Terminal />
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingTerminal;