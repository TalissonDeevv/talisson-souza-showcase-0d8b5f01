import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  const { language } = useTheme();

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/TalinhoDev" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/talinho" },
    { name: "Instagram", href: "https://instagram.com/talisson.dev" },
    { name: "Twitter/X", href: "https://x.com/talinhozx" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">
            {language === 'pt' ? 'Entre em contato' : 'Get in touch'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-6 space-y-8">
          {/* Email */}
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
              E-mail
            </p>
            <a 
              href="mailto:talinhodev@gmail.com" 
              className="group inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity duration-200"
            >
              <span>talinhodev@gmail.com</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>
          
          <div className="h-px bg-border/40" />
          
          {/* Social */}
          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
              {language === 'pt' ? 'Redes Sociais' : 'Social'}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
