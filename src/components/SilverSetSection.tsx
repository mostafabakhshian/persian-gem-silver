import { Button } from "@/components/ui/button";
import { Crown, Package, Sparkles } from "lucide-react";
import silverSetImg from "@/assets/silver-set.jpg";

const setCollections = [
  {
    name: "ست عروس",
    desc: "انگشتر + دستبند + گردنبند",
    occasion: "مراسم عروسی",
  },
  {
    name: "ست هدیه لوکس",
    desc: "انگشتر + دستبند با جعبه ویژه",
    occasion: "هدیه خاص",
  },
  {
    name: "ست روزمره",
    desc: "دستبند + گردنبند مینیمال",
    occasion: "استفاده روزانه",
  },
];

const SilverSetSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary/5" aria-labelledby="silver-set-heading">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-medium mb-3 block flex items-center justify-center gap-2">
            <Crown className="w-4 h-4" />
            ست‌های هماهنگ
          </span>
          <h2 id="silver-set-heading" className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            یک <span className="text-primary">ظاهر کامل</span> هدیه دهید
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            ست‌های هماهنگ جواهرات نقره، طراحی‌شده برای لحظات خاص زندگی
          </p>
        </div>

        {/* Editorial showcase: large image with overlaid collection cards */}
        <div className="relative rounded-3xl overflow-hidden mb-10">
          <img
            src={silverSetImg}
            alt="ست جواهرات نقره شامل انگشتر، دستبند و گردنبند"
            className="w-full h-[400px] md:h-[550px] object-cover"
            loading="lazy"
            width={1200}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/40 to-transparent" />
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <div className="max-w-lg" style={{ direction: "rtl" }}>
                <Sparkles className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                  ست‌های منتخب آسمون
                </h3>
                <p className="text-primary-foreground/70 text-sm md:text-base mb-6 leading-relaxed">
                  به جای خرید تکی، یک ظاهر کامل و هماهنگ انتخاب کنید. 
                  هر ست با دقت طراحی شده تا زیبایی و هارمونی کامل داشته باشد.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="accent" size="lg">
                    مشاهده ست‌ها
                  </Button>
                  <Button variant="hero-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                    <Package className="w-4 h-4 ml-2" />
                    سفارش ست اختصاصی
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Collection cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {setCollections.map((set) => (
            <a
              key={set.name}
              href="#"
              className="bg-background rounded-xl p-6 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group border border-border hover:border-accent/30"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {set.name}
                </h4>
                <span className="text-xs text-accent bg-accent/10 px-2.5 py-1 rounded-full font-medium">
                  {set.occasion}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{set.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SilverSetSection;
