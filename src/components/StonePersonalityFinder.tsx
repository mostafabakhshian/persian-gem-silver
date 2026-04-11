import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Moon, Heart, Shield, Flame, Eye } from "lucide-react";
import stoneImg from "@/assets/stone-personality.jpg";

const personalities = [
  {
    icon: Shield,
    trait: "محافظت و آرامش",
    stone: "فیروزه نیشابوری",
    color: "hsl(175, 60%, 45%)",
    desc: "سنگ محافظت و شادکامی، مناسب کسانی که آرامش درونی می‌خواهند",
  },
  {
    icon: Flame,
    trait: "قدرت و اراده",
    stone: "عقیق سرخ",
    color: "hsl(15, 60%, 40%)",
    desc: "سنگ قدرت و شجاعت، مناسب شخصیت‌های مصمم و رهبر",
  },
  {
    icon: Heart,
    trait: "عشق و احساس",
    stone: "یاقوت صورتی",
    color: "hsl(340, 55%, 50%)",
    desc: "سنگ عشق و صمیمیت، مناسب قلب‌های عاشق و حساس",
  },
  {
    icon: Eye,
    trait: "بینش و خرد",
    stone: "زمرد",
    color: "hsl(140, 50%, 30%)",
    desc: "سنگ خرد و بصیرت، مناسب متفکران و جستجوگران حقیقت",
  },
  {
    icon: Moon,
    trait: "شهود و الهام",
    stone: "مهتابی (مون‌استون)",
    color: "hsl(220, 30%, 70%)",
    desc: "سنگ شهود و الهام، مناسب ذهن‌های خلاق و رؤیایی",
  },
  {
    icon: Sparkles,
    trait: "ایمان و استقامت",
    stone: "حدید",
    color: "hsl(220, 10%, 35%)",
    desc: "سنگ ایمان و استحکام، مناسب روح‌های استوار و مؤمن",
  },
];

const StonePersonalityFinder = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" aria-labelledby="personality-heading"
      style={{ background: "linear-gradient(180deg, hsl(40 30% 97%) 0%, hsl(35 25% 94%) 100%)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4">
            <Sparkles className="w-5 h-5" />
            <span>تجربه‌ای منحصربه‌فرد در آسمون</span>
          </div>
          <h2 id="personality-heading" className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            سنگ شما کدام است؟
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            هر سنگ قیمتی انرژی و معنای خاصی دارد. شخصیت خود را انتخاب کنید
            و سنگ مناسب خود را کشف کنید.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Personality cards - interactive */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {personalities.map((p, i) => (
              <button
                key={p.trait}
                onClick={() => setSelected(selected === i ? null : i)}
                className={`text-right p-5 rounded-2xl transition-all duration-300 border-2 group ${
                  selected === i
                    ? "bg-background shadow-luxury-hover border-accent"
                    : "bg-background/60 border-transparent hover:bg-background hover:shadow-luxury"
                }`}
                aria-pressed={selected === i}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${p.color}20` }}
                >
                  <p.icon className="w-5 h-5" style={{ color: p.color }} />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">{p.trait}</h4>
                <p className="text-xs text-accent font-medium">{p.stone}</p>
                {selected === i && (
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed animate-fade-in">
                    {p.desc}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Visual + CTA side */}
          <div className="md:col-span-5">
            <div className="sticky top-28">
              <div className="rounded-2xl overflow-hidden shadow-luxury-hover mb-6">
                <img
                  src={stoneImg}
                  alt="مجموعه سنگ‌های قیمتی بر اساس شخصیت"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
              
              {selected !== null ? (
                <div className="bg-background rounded-2xl p-6 shadow-luxury border border-border animate-fade-in">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: personalities[selected].color }}
                    />
                    <div>
                      <p className="text-sm font-bold text-foreground">{personalities[selected].stone}</p>
                      <p className="text-xs text-muted-foreground">{personalities[selected].trait}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {personalities[selected].desc}
                  </p>
                  <Button variant="hero" size="default" className="w-full">
                    مشاهده جواهرات {personalities[selected].stone}
                  </Button>
                </div>
              ) : (
                <div className="bg-background/60 rounded-2xl p-6 border border-dashed border-border text-center">
                  <Sparkles className="w-6 h-6 text-accent mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    یکی از ویژگی‌های شخصیتی را انتخاب کنید
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StonePersonalityFinder;
