import { Shield, Gem, Truck, RefreshCcw, Headphones, FileCheck } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "ضمانت اصالت",
    desc: "تمامی محصولات با گواهی اصالت نقره و سنگ ارائه می‌شوند",
  },
  {
    icon: Gem,
    title: "سنگ‌های طبیعی اصل",
    desc: "سنگ‌های ما از معادن معتبر تهیه و توسط کارشناس تأیید شده‌اند",
  },
  {
    icon: FileCheck,
    title: "قیمت شفاف",
    desc: "قیمت‌ها بدون واسطه و با شفافیت کامل اعلام می‌شوند",
  },
  {
    icon: Truck,
    title: "ارسال امن و سریع",
    desc: "بسته‌بندی لوکس و ارسال بیمه‌شده به سراسر ایران",
  },
  {
    icon: RefreshCcw,
    title: "۷ روز ضمانت بازگشت",
    desc: "اگر رضایت نداشتید، بدون سؤال و جواب پس می‌گیریم",
  },
  {
    icon: Headphones,
    title: "مشاوره تخصصی",
    desc: "کارشناسان ما برای انتخاب سنگ و سایز در کنار شما هستند",
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 surface-cream" aria-labelledby="trust-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="trust-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            چرا آسمون؟
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto">
            اعتماد شما، سرمایه ماست. با خیال راحت خرید کنید.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="bg-background rounded-xl p-6 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
