import { Button } from "@/components/ui/button";
import { Phone, FileText, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import silverBullionImg from "@/assets/silver-bullion.jpg";

const features = [
  {
    icon: Phone,
    title: "استعلام قیمت روز",
    desc: "قیمت‌ها بر اساس نرخ لحظه‌ای نقره محاسبه می‌شوند",
  },
  {
    icon: FileText,
    title: "فرآیند سفارش اختصاصی",
    desc: "ثبت درخواست و هماهنگی تحویل به صورت آفلاین",
  },
  {
    icon: ShieldCheck,
    title: "تضمین اصالت و عیار",
    desc: "تمامی شمش‌ها با گواهی عیار و فاکتور رسمی ارائه می‌شوند",
  },
  {
    icon: Clock,
    title: "مشاوره قبل از خرید",
    desc: "کارشناسان ما برای راهنمایی خرید در کنار شما هستند",
  },
];

const SilverBullionSection = () => {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="bullion-heading"
      style={{ background: "linear-gradient(135deg, hsl(220 20% 10%), hsl(220 15% 16%))" }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100%) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/15 text-accent px-4 py-2 rounded-full text-xs font-bold mb-6">
              <ShieldCheck className="w-4 h-4" />
              خرید حضوری و استعلامی
            </div>
            <h2 id="bullion-heading" className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
              شمش و گرانول
              <br />
              <span className="text-accent">نقره خالص</span>
            </h2>
            <p className="text-primary-foreground/60 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              شمش‌ها و گرانول‌های نقره با عیار استاندارد، مناسب سرمایه‌گذاری و مصرف صنعتی. 
              این محصولات از طریق فرآیند سفارش اختصاصی و با مشاوره قبل از خرید ارائه می‌شوند.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((f) => (
                <div key={f.title} className="bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/8">
                  <f.icon className="w-5 h-5 text-accent mb-2" />
                  <h4 className="text-xs font-bold text-primary-foreground mb-1">{f.title}</h4>
                  <p className="text-xs text-primary-foreground/40 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button variant="accent" size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                درخواست مشاوره
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/5 hover:text-primary-foreground gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                استعلام قیمت روز
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-luxury-hover">
              <img
                src={silverBullionImg}
                alt="شمش و گرانول نقره خالص"
                className="w-full aspect-[3/2] object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
            </div>
            {/* Trust badge overlay */}
            <div className="absolute -bottom-4 left-4 right-4 md:left-8 md:right-8 bg-foreground/90 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10">
              <div className="flex items-center justify-around text-center">
                <div>
                  <p className="text-accent text-lg font-bold">۹۹۹</p>
                  <p className="text-primary-foreground/50 text-[10px]">عیار خلوص</p>
                </div>
                <div className="w-px h-8 bg-primary-foreground/10" />
                <div>
                  <p className="text-accent text-lg font-bold">رسمی</p>
                  <p className="text-primary-foreground/50 text-[10px]">فاکتور معتبر</p>
                </div>
                <div className="w-px h-8 bg-primary-foreground/10" />
                <div>
                  <p className="text-accent text-lg font-bold">تضمینی</p>
                  <p className="text-primary-foreground/50 text-[10px]">ضمانت اصالت</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilverBullionSection;
