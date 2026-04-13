import { Shield, Gem, Award, Fingerprint, Droplets, Gift } from "lucide-react";

interface TrustItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface PDPTrustBarProps {
  items?: TrustItem[];
  variant?: "default" | "gemstone" | "bullion";
}

const defaultItems: TrustItem[] = [
  { icon: Shield, title: "ضمانت اصالت", description: "تمام محصولات دارای شناسنامه و ضمانت اصالت هستند" },
  { icon: Award, title: "نقره مرغوب", description: "استفاده از نقره استرلینگ ۹۲۵ با استاندارد بین‌المللی" },
  { icon: Gem, title: "سنگ طبیعی", description: "سنگ‌های ۱۰۰٪ طبیعی با گواهی گوهرشناسی" },
  { icon: Fingerprint, title: "ساخت دست", description: "هر قطعه با دقت و ظرافت توسط استادکاران ساخته شده" },
  { icon: Droplets, title: "مراقبت آسان", description: "راهنمای نگهداری برای حفظ درخشندگی جواهرات شما" },
  { icon: Gift, title: "آماده هدیه", description: "بسته‌بندی لوکس اختصاصی مناسب هدیه دادن" },
];

const PDPTrustBar = ({ items, variant = "default" }: PDPTrustBarProps) => {
  const trustItems = items || defaultItems;

  return (
    <section className="py-10 md:py-14 border-t border-border">
      <div className="container">
        <h2 className="text-lg font-bold text-foreground mb-8 text-center">چرا آسمون؟</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-3 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PDPTrustBar;
