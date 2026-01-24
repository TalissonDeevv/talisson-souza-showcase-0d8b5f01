import { useState } from "react";
import { Copy, Terminal, Check } from "lucide-react";

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
    <div className="my-6 bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800">
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-3 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Terminal size={16} />
            <span className="text-sm font-medium">{title || `${language} terminal`}</span>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded text-sm transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code Content */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-gray-100 font-mono whitespace-pre">
            {language === "bash" && <span className="text-green-400">$ </span>}
            {code}
          </code>
        </pre>
      </div>

      {/* Output Section */}
      {showOutput && output && (
        <>
          <div className="border-t border-gray-700 bg-gray-850">
            <div className="px-4 py-2 bg-gray-800 text-xs text-gray-400 font-medium">
              Output:
            </div>
            <pre className="p-4 text-sm text-green-400 font-mono">
              {output}
            </pre>
          </div>
        </>
      )}
    </div>
  );
};

export default CodeTerminal;