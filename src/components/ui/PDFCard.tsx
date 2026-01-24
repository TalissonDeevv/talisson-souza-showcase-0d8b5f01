import { motion } from "framer-motion";
import { FileText, ExternalLink, Download } from "lucide-react";

interface PDFCardProps {
  title: string;
  description: string;
  fileUrl: string;
  index: number;
}

const PDFCard = ({ title, description, fileUrl, index }: PDFCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-lg shadow-sm border border-border p-6 group"
    >
      <div className="flex items-center gap-4">
        <div className="shrink-0 w-12 h-12 rounded bg-secondary flex items-center justify-center text-foreground">
          <FileText className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between">
        <a 
          href={fileUrl} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
        >
          Visualizar
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
        
        <a 
          href={fileUrl} 
          download
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Download
          <Download className="ml-1 h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default PDFCard;
