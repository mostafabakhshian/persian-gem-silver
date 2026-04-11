import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">آسمون</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              جواهرات نقره و سنگ‌های قیمتی اصل با ضمانت اصالت
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors" aria-label="اینستاگرام">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors" aria-label="واتساپ">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors" aria-label="تماس">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              {["انگشتر مردانه", "انگشتر زنانه", "دستبند", "گردنبند", "سنگ‌ها"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer service */}
          <div>
            <h4 className="text-sm font-bold mb-4">خدمات مشتریان</h4>
            <ul className="space-y-2">
              {["راهنمای خرید", "راهنمای سایز", "سیاست بازگشت", "سؤالات متداول", "تماس با ما"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4">تماس با ما</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-foreground/40" />
                <span className="text-sm text-primary-foreground/60">۰۹۱۲۳۴۵۶۷۸۹</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-foreground/40 mt-0.5" />
                <span className="text-sm text-primary-foreground/60">تهران، خیابان ولیعصر</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 flex items-center justify-between">
          <p className="text-xs text-primary-foreground/40">
            © ۱۴۰۴ آسمون. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60">حریم خصوصی</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60">شرایط استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
