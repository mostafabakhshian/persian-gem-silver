import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface PDPFAQProps {
  items: FAQItem[];
}

const PDPFAQ = ({ items }: PDPFAQProps) => {
  if (items.length === 0) return null;

  return (
    <section className="py-10 md:py-14 border-t border-border">
      <div className="container">
        <h2 className="text-lg font-bold text-foreground mb-6 text-center">پرسش‌های متداول</h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-sm font-medium text-foreground text-right">{item.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PDPFAQ;
