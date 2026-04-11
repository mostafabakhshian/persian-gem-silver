import { Button } from "@/components/ui/button";
import { Ruler, Shield, Gem, Sparkles } from "lucide-react";
import mensRingImg from "@/assets/signature-ring-mens.jpg";
import womensRingImg from "@/assets/signature-ring-womens.jpg";

const ringCategories = [
  { label: "انگشتر مردانه", desc: "قدرتمند و سنگین", href: "#" },
  { label: "انگشتر زنانه", desc: "ظریف و شیک", href: "#" },
  { label: "انگشتر نگین‌دار", desc: "سنگ‌های اصیل", href: "#" },
  { label: "انگشتر شاخص", desc: "طراحی منحصربه‌فرد", href: "#" },
  { label: "انگشتر روزمره", desc: "ساده و زیبا", href: "#" },
];

const supportItems = [
  { icon: Ruler, label: "راهنمای سایز انگشتر" },
  { icon: Shield, label: "نقره ۹۲۵ تضمینی" },
  { icon: Gem, label: "سنگ اصل با گواهی" },
];

const SignatureRingSection = () => {
  return (
    <section className="py-20 md:py-32 bg-foreground text-primary-foreground overflow-hidden" aria-labelledby="signature-ring-heading">
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-wider mb-3 block">
            — مجموعه انگشترها —
          </span>
          <h2 id="signature-ring-heading" className="text-3xl md:text-5xl font-bold mb-4">
            انگشتری که <span className="text-accent">شخصیت</span> شماست
          </h2>
          <p className="text-primary-foreground/60 text-sm md:text-base max-w-lg mx-auto">
            هر انگشتر آسمون، ترکیبی از هنر دست‌ساز و سنگ‌های اصیل طبیعی
          </p>
        </div>

        {/* Asymmetric editorial showcase */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-center mb-16">
          {/* Large men's ring - takes 7 cols */}
          <div className="md:col-span-7 relative group">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              <img
                src={mensRingImg}
                alt="انگشتر نقره مردانه با سنگ عقیق"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-6 md:p-10">
                <span className="text-accent text-xs font-bold tracking-wider mb-2 block">مردانه</span>
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                  انگشترهای قدرت
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-4 max-w-sm">
                  انگشترهای سنگین و مردانه با سنگ‌های عقیق، حدید و فیروزه
                </p>
                <Button variant="accent" size="default">
                  مشاهده مجموعه مردانه
                </Button>
              </div>
            </div>
          </div>

          {/* Women's ring - 5 cols, with offset */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-2xl overflow-hidden aspect-square">
              <img
                src={womensRingImg}
                alt="انگشتر نقره زنانه با فیروزه"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-6">
                <span className="text-accent text-xs font-bold tracking-wider mb-2 block">زنانه</span>
                <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                  ظرافت بی‌نظیر
                </h3>
                <Button variant="accent" size="sm">
                  مشاهده مجموعه زنانه
                </Button>
              </div>
            </div>

            {/* Quick discovery paths */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
              <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                کشف سریع انگشتر
              </h4>
              <div className="space-y-2">
                {ringCategories.map((cat) => (
                  <a
                    key={cat.label}
                    href={cat.href}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-primary-foreground/5 transition-colors group/item"
                  >
                    <span className="text-sm font-medium text-primary-foreground">{cat.label}</span>
                    <span className="text-xs text-primary-foreground/40 group-hover/item:text-accent transition-colors">{cat.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Support bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-8 border-t border-primary-foreground/10">
          {supportItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-primary-foreground/50">
              <item.icon className="w-4 h-4" />
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureRingSection;
