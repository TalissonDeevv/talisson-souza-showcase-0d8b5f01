import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { getText } from "@/utils/translations";
import { Check, Send, AlertCircle, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function generateCaptcha() {
  const ops = ['+', '-', '×'] as const;
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a: number, b: number;
  if (op === '-') {
    a = Math.floor(Math.random() * 20) + 5;
    b = Math.floor(Math.random() * a);
  } else {
    a = Math.floor(Math.random() * 15) + 1;
    b = Math.floor(Math.random() * 15) + 1;
  }
  const answer = op === '+' ? a + b : op === '-' ? a - b : a * b;
  return { question: `${a} ${op} ${b}`, answer };
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  projectType: string;
  budget: string;
  timeline: string;
  preferredContact: string;
  howFound: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  projectType: "",
  budget: "",
  timeline: "",
  preferredContact: "",
  howFound: "",
  message: "",
};

const ContactForm = () => {
  const { language } = useTheme();
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | 'captcha', string>>>({});

  const projectTypes = language === 'pt'
    ? ['Site institucional', 'Landing page', 'E-commerce', 'Sistema web', 'Aplicativo', 'API / Backend', 'Bot / Automação', 'Consultoria', 'Outro']
    : ['Institutional website', 'Landing page', 'E-commerce', 'Web system', 'Application', 'API / Backend', 'Bot / Automation', 'Consulting', 'Other'];

  const budgetRanges = language === 'pt'
    ? ['Até R$ 3.000', 'R$ 3.000 - R$ 8.000', 'R$ 8.000 - R$ 15.000', 'R$ 15.000 - R$ 30.000', 'Acima de R$ 30.000', 'A definir']
    : ['Up to $600', '$600 - $1,500', '$1,500 - $3,000', '$3,000 - $6,000', 'Above $6,000', 'To be defined'];

  const timelines = language === 'pt'
    ? ['Urgente (menos de 2 semanas)', '1 a 2 meses', '2 a 4 meses', '4 a 6 meses', 'Sem prazo definido']
    : ['Urgent (less than 2 weeks)', '1 to 2 months', '2 to 4 months', '4 to 6 months', 'No defined deadline'];

  const contactMethods = language === 'pt'
    ? ['Email', 'WhatsApp', 'Ligação', 'Sem preferência']
    : ['Email', 'WhatsApp', 'Phone call', 'No preference'];

  const howFoundOptions = language === 'pt'
    ? ['Google', 'LinkedIn', 'GitHub', 'YouTube', 'Indicação', 'Redes sociais', 'Outro']
    : ['Google', 'LinkedIn', 'GitHub', 'YouTube', 'Referral', 'Social media', 'Other'];

  const subjectOptions = language === 'pt'
    ? ['Novo projeto', 'Consultoria técnica', 'Parceria', 'Freelance', 'Dúvida geral', 'Outro']
    : ['New project', 'Technical consulting', 'Partnership', 'Freelance', 'General question', 'Other'];

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData | 'captcha', string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = getText(language, 'Nome é obrigatório', 'Name is required');
    } else if (formData.name.length > 100) {
      newErrors.name = getText(language, 'Nome muito longo (máx. 100)', 'Name too long (max. 100)');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = getText(language, 'Email é obrigatório', 'Email is required');
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = getText(language, 'Email inválido', 'Invalid email');
    } else if (formData.email.length > 255) {
      newErrors.email = getText(language, 'Email muito longo', 'Email too long');
    }

    if (formData.phone && formData.phone.length > 30) {
      newErrors.phone = getText(language, 'Telefone muito longo', 'Phone too long');
    }

    if (!formData.subject) {
      newErrors.subject = getText(language, 'Selecione um assunto', 'Select a subject');
    }

    if (!formData.message.trim()) {
      newErrors.message = getText(language, 'Mensagem é obrigatória', 'Message is required');
    } else if (formData.message.length > 5000) {
      newErrors.message = getText(language, 'Mensagem muito longa (máx. 5000)', 'Message too long (max. 5000)');
    }

    if (!captchaInput.trim()) {
      newErrors.captcha = getText(language, 'Resolva o captcha', 'Solve the captcha');
    } else if (parseInt(captchaInput.trim()) !== captcha.answer) {
      newErrors.captcha = getText(language, 'Resposta incorreta', 'Incorrect answer');
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          company: formData.company.trim() || null,
          subject: formData.subject,
          projectType: formData.projectType || null,
          budget: formData.budget || null,
          timeline: formData.timeline || null,
          preferredContact: formData.preferredContact || null,
          howFound: formData.howFound || null,
          message: formData.message.trim(),
        },
      });

      if (error) throw new Error(error.message || 'Erro ao enviar mensagem');

      setIsSubmitted(true);
      setFormData(initialFormData);
      setCaptchaInput("");
      setCaptcha(generateCaptcha());

      toast({
        title: getText(language, "Mensagem enviada!", "Message sent!"),
        description: getText(language, "Entrarei em contato em breve.", "I'll get back to you soon."),
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error: any) {
      console.error('Error sending contact form:', error);
      toast({
        title: getText(language, "Erro ao enviar", "Error sending"),
        description: getText(language,
          "Tente novamente ou entre em contato pelo WhatsApp.",
          "Try again or contact via WhatsApp."
        ),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: keyof FormData | 'captcha') =>
    `w-full px-4 py-3 border bg-background/50 text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all duration-300 placeholder:text-muted-foreground/50 ${errors[field] ? 'border-red-500/50' : 'border-border/30'}`;

  const ErrorMsg = ({ field }: { field: keyof FormData | 'captcha' }) =>
    errors[field] ? (
      <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
        <AlertCircle className="w-3 h-3" />
        {errors[field]}
      </p>
    ) : null;

  const CustomSelect = ({ field, placeholder, options }: { field: keyof FormData; placeholder: string; options: string[] }) => (
    <Select value={formData[field]} onValueChange={(val) => handleSelectChange(field, val)}>
      <SelectTrigger className={`w-full px-4 py-3 h-auto border bg-background/50 text-foreground rounded-xl transition-all duration-300 ${!formData[field] ? 'text-muted-foreground/50' : ''} ${errors[field] ? 'border-red-500/50' : 'border-border/30'}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-background border border-border/50 rounded-xl shadow-lg">
        {options.map((opt) => (
          <SelectItem key={opt} value={opt} className="cursor-pointer rounded-lg">
            {opt}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="w-16 h-16 rounded-2xl border border-border/30 bg-card/50 flex items-center justify-center mx-auto mb-6"
        >
          <Check className="h-8 w-8 text-foreground/70" />
        </motion.div>
        <h3 className="font-serif text-xl text-foreground mb-2">
          {getText(language, 'Mensagem enviada com sucesso!', 'Message sent successfully!')}
        </h3>
        <p className="text-muted-foreground text-sm">
          {getText(language, 'Retornarei o mais breve possível.', "I'll get back to you as soon as possible.")}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-foreground text-sm font-medium mb-2" htmlFor="name">
            {getText(language, 'Nome completo', 'Full name')} <span className="text-red-400">*</span>
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
            className={inputClass('name')} placeholder={getText(language, 'Seu nome completo', 'Your full name')} />
          <ErrorMsg field="name" />
        </div>
        <div>
          <label className="block text-foreground text-sm font-medium mb-2" htmlFor="email">
            Email <span className="text-red-400">*</span>
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
            className={inputClass('email')} placeholder={getText(language, 'seu@email.com', 'your@email.com')} />
          <ErrorMsg field="email" />
        </div>
      </div>

      {/* Row 2: Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-foreground text-sm font-medium mb-2" htmlFor="phone">
            {getText(language, 'Telefone / WhatsApp', 'Phone / WhatsApp')}
          </label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
            className={inputClass('phone')} placeholder={getText(language, '(81) 9 9999-9999', '+1 (555) 000-0000')} />
          <ErrorMsg field="phone" />
        </div>
        <div>
          <label className="block text-foreground text-sm font-medium mb-2" htmlFor="company">
            {getText(language, 'Empresa / Organização', 'Company / Organization')}
          </label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
            className={inputClass('company')} placeholder={getText(language, 'Nome da empresa (opcional)', 'Company name (optional)')} />
        </div>
      </div>

      {/* Row 3: Subject + Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-foreground text-sm font-medium mb-2">
            {getText(language, 'Assunto', 'Subject')} <span className="text-red-400">*</span>
          </label>
          <CustomSelect field="subject" placeholder={getText(language, 'Selecione o assunto', 'Select subject')} options={subjectOptions} />
          <ErrorMsg field="subject" />
        </div>
        <div>
          <label className="block text-foreground text-sm font-medium mb-2">
            {getText(language, 'Tipo de projeto', 'Project type')}
          </label>
          <CustomSelect field="projectType" placeholder={getText(language, 'Selecione o tipo', 'Select type')} options={projectTypes} />
        </div>
      </div>

      {/* Row 4: Budget + Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-foreground text-sm font-medium mb-2">
            {getText(language, 'Orçamento estimado', 'Estimated budget')}
          </label>
          <CustomSelect field="budget" placeholder={getText(language, 'Selecione a faixa', 'Select range')} options={budgetRanges} />
        </div>
        <div>
          <label className="block text-foreground text-sm font-medium mb-2">
            {getText(language, 'Prazo desejado', 'Desired timeline')}
          </label>
          <CustomSelect field="timeline" placeholder={getText(language, 'Selecione o prazo', 'Select timeline')} options={timelines} />
        </div>
      </div>

      {/* Row 5: Preferred Contact + How Found */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-foreground text-sm font-medium mb-2">
            {getText(language, 'Contato preferido', 'Preferred contact')}
          </label>
          <CustomSelect field="preferredContact" placeholder={getText(language, 'Selecione', 'Select')} options={contactMethods} />
        </div>
        <div>
          <label className="block text-foreground text-sm font-medium mb-2">
            {getText(language, 'Como me encontrou?', 'How did you find me?')}
          </label>
          <CustomSelect field="howFound" placeholder={getText(language, 'Selecione', 'Select')} options={howFoundOptions} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-foreground text-sm font-medium mb-2" htmlFor="message">
          {getText(language, 'Mensagem', 'Message')} <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message" name="message" value={formData.message} onChange={handleChange} rows={5}
          className={`${inputClass('message')} resize-none`}
          placeholder={getText(language,
            'Descreva seu projeto, necessidades ou dúvidas em detalhes...',
            'Describe your project, needs or questions in detail...'
          )}
        />
        <ErrorMsg field="message" />
      </div>

      {/* Captcha */}
      <div>
        <label className="block text-foreground text-sm font-medium mb-2" htmlFor="captcha">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-muted-foreground" />
            {getText(language, 'Verificação de segurança', 'Security verification')}
          </span>
        </label>
        <div className="flex items-center gap-3">
          <span className="text-sm font-mono text-foreground bg-card/60 border border-border/30 rounded-lg px-4 py-3 select-none whitespace-nowrap">
            {captcha.question} = ?
          </span>
          <input
            type="text" id="captcha" inputMode="numeric" value={captchaInput}
            onChange={(e) => {
              setCaptchaInput(e.target.value);
              if (errors.captcha) setErrors((prev) => ({ ...prev, captcha: undefined }));
            }}
            className={`w-24 px-4 py-3 border bg-background/50 text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/30 transition-all duration-300 placeholder:text-muted-foreground/50 text-center ${errors.captcha ? 'border-red-500/50' : 'border-border/30'}`}
            placeholder="?"
          />
        </div>
        <ErrorMsg field="captcha" />
      </div>

      {/* Submit */}
      <motion.button
        type="submit" disabled={isSubmitting}
        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        className={`w-full inline-flex items-center justify-center gap-2 bg-foreground hover:opacity-90 text-primary-foreground font-medium py-3.5 px-6 rounded-xl transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        style={{ boxShadow: '0 0 20px hsl(var(--foreground) / 0.15)' }}
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
            />
            {getText(language, 'Enviando...', 'Sending...')}
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {getText(language, 'Enviar mensagem', 'Send message')}
          </>
        )}
      </motion.button>
    </form>
  );
};

export default ContactForm;
