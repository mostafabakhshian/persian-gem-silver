import { Ruler, Gift, Gem, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MerchandisingBlockProps {
  variant: "size-guide" | "gift-guide" | "stone-finder" | "bespoke" | "trust" | "custom";
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const PLPMerchandising = ({ variant, title, description, ctaLabel, ctaHref }: MerchandisingBlockProps) => {
  const configs: Record<string, { icon: React.ReactNode; defaultTitle: string; defaultDesc: string; defaultCta: string; bgClass: string }> = {
    "size-guide": {
      icon: <Ruler className="w-6 h-6 text-primary" />,
      defaultTitle: "راهنمای سایز انگشتر",
      defaultDesc: "سایز دقیق انگشتر خود را در ۳۰ ثانیه پیدا کنید",
      defaultCta: "مشاهده راهنما",
      bgClass: "bg-primary/5 border-primary/15",
    },
    "gift-guide": {
      icon: <Gift className="w-6 h-6 text-accent" />,
      defaultTitle: "راهنمای هدیه",
      defaultDesc: "بهترین انتخاب‌ها برای هدیه دادن به عزیزانتان",
      defaultCta: "مشاهده پیشنهادها",
      bgClass: "bg-accent/5 border-accent/15",
    },
    "stone-finder": {
      icon: <Gem className="w-6 h-6 text-emerald" />,
      defaultTitle: "سنگ مناسب خود را پیدا کنید",
      defaultDesc: "بر اساس ماه تولد، شخصیت یا نماد مورد نظرتان",
      defaultCta: "شروع کنید",
      bgClass: "bg-emerald/5 border-emerald/15",
    },
    bespoke: {
      icon: <Sparkles className="w-6 h-6 text-accent" />,
      defaultTitle: "طراحی اختصاصی",
      defaultDesc: "ایده خود را بفرستید، ما برایتان می‌سازیم",
      defaultCta: "ثبت درخواست",
      bgClass: "bg-accent/5 border-accent/15",
    },
    trust: {
      icon: <Shield className="w-6 h-6 text-primary" />,
      defaultTitle: "ضمانت اصالت",
      defaultDesc: "تمام محصولات دارای شناسنامه اصالت و ضمانت کیفیت هستند",
      defaultCta: "اطلاعات بیشتر",
      bgClass: "bg-primary/5 border-primary/15",
    },
    custom: {
      icon: null,
      defaultTitle: "",
      defaultDesc: "",
      defaultCta: "",
      bgClass: "bg-secondary border-border",
    },
  };

  const config = configs[variant];

  return (
    <div className={`rounded-xl border p-5 md:p-6 ${config.bgClass} transition-all duration-300`}>
      <div className="flex items-start gap-4">
        {config.icon && <div className="flex-shrink-0 mt-0.5">{config.icon}</div>}
        <div className="flex-1">
          <h3 className="text-sm font-bold text-foreground mb-1">{title || config.defaultTitle}</h3>
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{description || config.defaultDesc}</p>
          <a
            href={ctaHref || "#"}
            className="inline-flex text-xs font-semibold text-primary hover:text-primary/80 transition-colors underline-offset-4 hover:underline"
          >
            {ctaLabel || config.defaultCta} ←
          </a>
        </div>
      </div>
    </div>
  );
};

export default PLPMerchandising;
