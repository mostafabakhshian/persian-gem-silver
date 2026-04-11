import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ring.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden" aria-label="بخش اصلی">
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="انگشتر نقره با سنگ فیروزه"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-foreground/80 via-foreground/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-xl mr-auto text-left" style={{ direction: "rtl" }}>
            <p className="text-gold-soft text-sm md:text-base font-medium mb-4 animate-fade-in">
              جواهرات نقره اصیل ایرانی
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
              زیبایی طبیعی،
              <br />
              <span className="text-gradient-gold">هنر دست‌ساز</span>
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8 leading-relaxed max-w-md animate-fade-in">
              مجموعه‌ای منتخب از انگشترهای نقره، سنگ‌های اصل و جواهرات دست‌ساز
              با ضمانت اصالت و کیفیت
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up">
              <Button variant="accent" size="lg" className="text-base px-8">
                مشاهده محصولات
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                راهنمای سنگ‌ها
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
