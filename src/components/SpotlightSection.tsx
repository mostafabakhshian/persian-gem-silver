import mensRingImg from "@/assets/mens-ring.jpg";
import womensRingImg from "@/assets/womens-ring.jpg";
import { Button } from "@/components/ui/button";

const SpotlightSection = () => {
  return (
    <section className="py-16 md:py-24" aria-label="بخش ویژه">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Men's spotlight */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[420px] group">
            <img
              src={mensRingImg}
              alt="انگشتر مردانه"
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                انگشترهای مردانه
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4 max-w-xs">
                مجموعه‌ای از انگشترهای سنگین و قدرتمند با سنگ‌های اصیل
              </p>
              <Button variant="accent" size="default">
                مشاهده مجموعه
              </Button>
            </div>
          </div>

          {/* Women's spotlight */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[420px] group">
            <img
              src={womensRingImg}
              alt="انگشتر زنانه"
              className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
            <div className="absolute bottom-0 right-0 left-0 p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                جواهرات زنانه
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4 max-w-xs">
                ظرافت و زیبایی در هر قطعه با سنگ‌های طبیعی
              </p>
              <Button variant="accent" size="default">
                مشاهده مجموعه
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
