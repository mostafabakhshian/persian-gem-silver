import { Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDPBespokePromptProps {
  productType?: string;
}

const PDPBespokePrompt = ({ productType = "محصول" }: PDPBespokePromptProps) => {
  return (
    <section className="py-10 md:py-14 border-t border-border">
      <div className="container">
        <div className="max-w-3xl mx-auto bg-accent/5 border border-accent/15 rounded-2xl p-6 md:p-10 text-center">
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
          <h2 className="text-lg font-bold text-foreground mb-2">این {productType} را به سلیقه خود سفارش دهید</h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-md mx-auto">
            اگر طرح، سنگ یا سایز مورد نظر شما در این محصول نیست، می‌توانید نسخه اختصاصی خود را سفارش دهید. کافیست ایده‌تان را برای ما بفرستید.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" className="gap-2">
              <Sparkles className="w-4 h-4" /> درخواست طراحی اختصاصی
            </Button>
            <Button variant="hero-outline" className="gap-2">
              <MessageCircle className="w-4 h-4" /> مشاوره رایگان
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDPBespokePrompt;
