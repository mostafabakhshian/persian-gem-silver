import { Button } from "@/components/ui/button";
import { Gift, Sparkles } from "lucide-react";
import braceletImg from "@/assets/bracelet-collection.jpg";
import braceletSmallImg from "@/assets/bracelet.jpg";

const braceletStyles = [
  { label: "دستبند نقره", tag: "کلاسیک", color: "bg-secondary" },
  { label: "دستبند نگین‌دار", tag: "لوکس", color: "bg-accent/10" },
  { label: "دستبند مینیمال", tag: "روزمره", color: "bg-secondary" },
  { label: "دستبند هدیه", tag: "ویژه", color: "bg-accent/10" },
];

const BraceletSection = () => {
  return (
    <section className="py-20 md:py-28 surface-cream" aria-labelledby="bracelet-heading">
      <div className="container">
        {/* Elegant horizontal layout - image left, content right */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Stacked image composition */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-luxury">
              <img
                src={braceletImg}
                alt="مجموعه دستبندهای نقره"
                className="w-full aspect-[3/2] object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
            {/* Floating secondary image */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 w-32 md:w-44 rounded-xl overflow-hidden shadow-luxury-hover border-4 border-background">
              <img
                src={braceletSmallImg}
                alt="دستبند نقره ظریف"
                className="w-full aspect-square object-cover"
                loading="lazy"
                width={400}
                height={400}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-luxury">
              <Gift className="w-3.5 h-3.5" />
              هدیه‌ای خاص
            </div>
          </div>

          {/* Content side */}
          <div>
            <span className="text-accent text-sm font-medium mb-3 block flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              مجموعه دستبندها
            </span>
            <h2 id="bracelet-heading" className="text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              ظرافت در هر حلقه،
              <br />
              <span className="text-primary">زیبایی بر مچ شما</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-md">
              دستبندهای نقره آسمون با طراحی منحصربه‌فرد و سنگ‌های طبیعی، 
              همراهی زیبا برای هر لحظه از زندگی شما هستند.
            </p>

            {/* Style discovery cards */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {braceletStyles.map((style) => (
                <a
                  key={style.label}
                  href="#"
                  className={`${style.color} rounded-xl p-4 hover:shadow-luxury transition-all duration-300 group`}
                >
                  <span className="text-xs text-accent font-bold mb-1 block">{style.tag}</span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {style.label}
                  </span>
                </a>
              ))}
            </div>

            <Button variant="hero" size="lg">
              مشاهده همه دستبندها
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BraceletSection;
