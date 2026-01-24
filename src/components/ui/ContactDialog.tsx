import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SocialIcons from "@/components/ui/SocialIcons";
import { Mail } from "lucide-react";

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-lg border border-border shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Entre em contato
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Redes Sociais</h3>
              <p className="text-muted-foreground mb-4">Conecte-se comigo nas redes sociais</p>
              <SocialIcons className="justify-center" />
            </div>
            
            <div className="w-full border-t border-border my-4"></div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-foreground">E-mail</h3>
              <p className="text-muted-foreground mb-2">Envie-me uma mensagem diretamente</p>
              <a 
                href="mailto:talinhodev@gmail.com" 
                className="inline-flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors duration-300 bg-secondary px-4 py-2 rounded-lg border border-border hover:border-foreground/30 hover:shadow-md"
              >
                <Mail className="h-4 w-4" />
                talinhodev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
