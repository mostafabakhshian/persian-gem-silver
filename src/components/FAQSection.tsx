import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "آیا سنگ‌های آسمون اصل هستند؟",
    a: "بله، تمامی سنگ‌های ما از معادن معتبر تهیه شده و با گواهی اصالت ارائه می‌شوند. کارشناسان ما هر سنگ را قبل از عرضه بررسی و تأیید می‌کنند.",
  },
  {
    q: "چطور سایز انگشتر خود را پیدا کنم؟",
    a: "در صفحه هر محصول، راهنمای سایز کاملی قرار داده‌ایم. همچنین می‌توانید با تیم پشتیبانی تماس بگیرید تا در انتخاب سایز به شما کمک کنیم.",
  },
  {
    q: "ارسال محصولات چقدر زمان می‌برد؟",
    a: "ارسال به تهران ۱ تا ۲ روز کاری و به سایر شهرها ۲ تا ۵ روز کاری طول می‌کشد. تمامی سفارشات با بسته‌بندی لوکس و بیمه‌شده ارسال می‌شوند.",
  },
  {
    q: "آیا امکان سفارش‌سازی وجود دارد؟",
    a: "بله، امکان ساخت سفارشی انگشتر و جواهرات با سنگ دلخواه شما وجود دارد. با ما تماس بگیرید تا جزئیات را بررسی کنیم.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 surface-cream" aria-labelledby="faq-heading">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            سؤالات متداول
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-background rounded-xl overflow-hidden shadow-luxury">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-right"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 mr-4 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 animate-fade-in">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
