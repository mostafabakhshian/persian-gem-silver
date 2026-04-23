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

interface PLPCategoryFAQProps {
  title: string;
  items: FAQItem[];
  categoryDescription?: string;
}

const PLPCategoryFAQ = ({ title, items, categoryDescription }: PLPCategoryFAQProps) => {
  return (
    <section className="py-10 md:py-14 border-t border-border">
      <div className="container">
        {categoryDescription && (
          <div className="mb-8 max-w-3xl">
            <h2 className="text-lg font-bold text-foreground mb-3">درباره {title}</h2>
            <p className="text-sm text-muted-foreground leading-loose">{categoryDescription}</p>
          </div>
        )}

        <h2 className="text-lg font-bold text-foreground mb-5">پرسش‌های متداول {title}</h2>
        <Accordion type="single" collapsible className="max-w-3xl">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-sm font-medium text-foreground text-right">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PLPCategoryFAQ;
