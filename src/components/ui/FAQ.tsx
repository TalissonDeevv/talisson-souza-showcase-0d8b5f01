
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslation } from "@/utils/translations";

const FAQ = () => {
  const { language } = useTheme();
  const t = useTranslation(language);

  const faqData = [
    {
      question: t.faq.questions.question1,
      answer: t.faq.questions.answer1
    },
    {
      question: t.faq.questions.question2,
      answer: t.faq.questions.answer2
    },
    {
      question: t.faq.questions.question3,
      answer: t.faq.questions.answer3
    },
    {
      question: t.faq.questions.question4,
      answer: t.faq.questions.answer4
    },
    {
      question: t.faq.questions.question5,
      answer: t.faq.questions.answer5
    },
    {
      question: t.faq.questions.question6,
      answer: t.faq.questions.answer6
    }
  ];

  return (
    <section className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <HelpCircle className="w-8 h-8 text-foreground" />
          <h2 className="text-3xl font-bold text-foreground">{t.faq.title}</h2>
        </div>
        
        <div className="bg-card rounded-lg shadow-sm border border-border">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-6 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
