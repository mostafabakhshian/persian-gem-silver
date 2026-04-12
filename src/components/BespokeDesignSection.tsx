import { useState } from "react";
import { Upload, Gem, Sparkles, MessageSquare, ArrowLeft, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MessageSquare,
    title: "ایده‌تان را بگویید",
    description: "توضیح دهید چه جواهری در ذهن دارید؛ سبک، سنگ، اندازه یا حکاکی",
  },
  {
    icon: Upload,
    title: "تصویر الهام‌بخش بفرستید",
    description: "عکس یا طرح مرجع آپلود کنید تا دقیق‌تر متوجه سلیقه شما شویم",
  },
  {
    icon: Gem,
    title: "مشاوره اختصاصی",
    description: "کارشناسان ما با شما تماس می‌گیرند و جزئیات طراحی را نهایی می‌کنند",
  },
  {
    icon: Sparkles,
    title: "ساخت و تحویل",
    description: "قطعه منحصربه‌فرد شما با دقت ساخته و ارسال می‌شود",
  },
];

const categories = [
  "انگشتر سفارشی",
  "دستبند سفارشی",
  "گردنبند سفارشی",
  "ست کامل",
  "طراحی با سنگ دلخواه",
];

const BespokeDesignSection = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormOpen(false);
    }, 3000);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-accent mb-4 tracking-wide">
            <Sparkles className="w-4 h-4" />
            خدمات طراحی اختصاصی
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 leading-tight">
            از ایده تا جواهر ساخته‌شده
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            جواهر رویایی‌تان را به ما بسپارید. طرح، سنگ و سبک دلخواهتان را بگویید
            تا کارشناسان ما آن را برایتان بسازند.
          </p>
        </div>

        {/* Two-column editorial layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Process journey */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-8">
              مسیر سفارش اختصاصی شما
            </h3>
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-5 group">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-full min-h-[40px] bg-border my-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "مشاوره رایگان",
                "بدون تعهد اولیه",
                "ضمانت اصالت سنگ و نقره",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/8 border border-primary/15 rounded-full px-3 py-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTA card or form */}
          <div className="relative">
            {!formOpen ? (
              /* Invitation card */
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-luxury">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    جواهر منحصربه‌فرد شما
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    هر ایده‌ای دارید — یک انگشتر خاص، دستبندی با سنگ دلخواه، یا
                    ست کاملی برای هدیه — ما آن را برایتان طراحی و می‌سازیم.
                  </p>
                </div>

                {/* Category pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs font-medium text-foreground/70 bg-secondary border border-border rounded-full px-3.5 py-1.5"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <Button
                  variant="hero"
                  className="w-full gap-2"
                  onClick={() => setFormOpen(true)}
                >
                  ثبت درخواست طراحی اختصاصی
                  <ArrowLeft className="w-4 h-4" />
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  مشاوره رایگان · پاسخ‌دهی در کمتر از ۲۴ ساعت
                </p>
              </div>
            ) : !submitted ? (
              /* Request form */
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-luxury animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-foreground">
                    درخواست طراحی اختصاصی
                  </h3>
                  <button
                    onClick={() => setFormOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
                    aria-label="بستن"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Category select */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
                      نوع جواهر
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedCategory(cat)}
                          className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${
                            selectedCategory === cat
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-secondary text-foreground/70 border-border hover:border-primary/30"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="bespoke-desc"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      توضیح طرح دلخواه
                    </label>
                    <textarea
                      id="bespoke-desc"
                      rows={3}
                      placeholder="سبک، سنگ، اندازه، حکاکی یا هر جزئیاتی که مدنظرتان هست..."
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>

                  {/* Image upload hint */}
                  <div className="border-2 border-dashed border-border rounded-lg p-5 text-center hover:border-primary/30 transition-colors cursor-pointer">
                    <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      تصویر الهام‌بخش یا طرح مرجع آپلود کنید
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-1">
                      JPG, PNG — حداکثر ۵ مگابایت
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="bespoke-name"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        نام
                      </label>
                      <input
                        id="bespoke-name"
                        type="text"
                        placeholder="نام شما"
                        className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bespoke-phone"
                        className="text-sm font-medium text-foreground mb-1.5 block"
                      >
                        شماره تماس
                      </label>
                      <input
                        id="bespoke-phone"
                        type="tel"
                        placeholder="۰۹۱۲..."
                        className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="hero" className="w-full gap-2">
                    ارسال درخواست مشاوره
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            ) : (
              /* Success state */
              <div className="bg-card border border-border rounded-2xl p-10 shadow-luxury text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  درخواست شما ثبت شد
                </h3>
                <p className="text-muted-foreground text-sm">
                  کارشناسان ما در کمتر از ۲۴ ساعت با شما تماس خواهند گرفت.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeDesignSection;
