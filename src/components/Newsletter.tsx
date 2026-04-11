import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 md:py-20 bg-primary" aria-labelledby="newsletter-heading">
      <div className="container max-w-2xl text-center">
        <Mail className="w-8 h-8 text-gold-soft mx-auto mb-4" />
        <h2 id="newsletter-heading" className="text-xl md:text-2xl font-bold text-primary-foreground mb-3">
          از جدیدترین محصولات و تخفیف‌ها باخبر شوید
        </h2>
        <p className="text-primary-foreground/70 text-sm mb-6">
          ایمیل خود را وارد کنید تا پیشنهادات ویژه و مجموعه‌های جدید را زودتر ببینید.
        </p>
        <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="ایمیل شما"
            className="flex-1 h-12 px-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="آدرس ایمیل"
          />
          <Button variant="accent" className="h-12 px-6">
            عضویت
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
