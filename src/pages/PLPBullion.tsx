import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PLPHero from "@/components/plp/PLPHero";
import PLPCategoryFAQ from "@/components/plp/PLPCategoryFAQ";
import { Phone, MessageCircle, FileText, Shield, Award, Clock, Scale } from "lucide-react";
import heroImg from "@/assets/silver-bullion.jpg";

const bullionProducts = [
  { title: "شمش نقره ۹۹۹ — ۱۰۰ گرمی", weight: "۱۰۰ گرم", purity: "نقره ۹۹۹", image: heroImg },
  { title: "شمش نقره ۹۹۹ — ۲۵۰ گرمی", weight: "۲۵۰ گرم", purity: "نقره ۹۹۹", image: heroImg },
  { title: "شمش نقره ۹۹۹ — ۵۰۰ گرمی", weight: "۵۰۰ گرم", purity: "نقره ۹۹۹", image: heroImg },
  { title: "شمش نقره ۹۹۹ — ۱ کیلوگرمی", weight: "۱ کیلوگرم", purity: "نقره ۹۹۹", image: heroImg },
  { title: "گلوله نقره ۹۹۹ — ۵۰ گرمی", weight: "۵۰ گرم", purity: "نقره ۹۹۹", image: heroImg },
  { title: "گلوله نقره ۹۹۹ — ۱۰۰ گرمی", weight: "۱۰۰ گرم", purity: "نقره ۹۹۹", image: heroImg },
];

const faqItems = [
  { question: "قیمت شمش نقره چگونه تعیین می‌شود؟", answer: "قیمت بر اساس نرخ روز جهانی نقره و وزن شمش محاسبه می‌شود. برای دریافت قیمت لحظه‌ای با ما تماس بگیرید." },
  { question: "آیا شمش‌ها دارای گواهی اصالت هستند؟", answer: "بله، تمام شمش‌ها دارای مهر عیار، شناسنامه و گواهی اصالت هستند." },
  { question: "نحوه خرید شمش نقره چگونه است؟", answer: "ابتدا درخواست خود را ثبت کنید، سپس کارشناسان ما قیمت روز را اعلام و هماهنگی ارسال را انجام می‌دهند." },
  { question: "حداقل مقدار خرید شمش چقدر است؟", answer: "حداقل سفارش ۵۰ گرم شمش یا گلوله نقره است." },
];

const PLPBullion = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PLPHero
          title="شمش و گلوله نقره"
          description="نقره خالص ۹۹۹ با گواهی اصالت و مهر عیار — خرید مطمئن با مشاوره رایگان و قیمت لحظه‌ای"
          breadcrumbs={[
            { label: "خانه", href: "/" },
            { label: "شمش و گلوله نقره", href: "#" },
          ]}
          image={heroImg}
          accentBadge="خرید استعلامی"
        />

        {/* Trust strip */}
        <div className="bg-primary/5 border-y border-primary/10">
          <div className="container py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, text: "ضمانت اصالت و عیار" },
                { icon: Award, text: "گواهی رسمی عیار ۹۹۹" },
                { icon: Clock, text: "قیمت لحظه‌ای روز" },
                { icon: Scale, text: "وزن‌کشی دقیق دیجیتال" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-xs font-medium text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product inquiry cards */}
        <div className="container py-10 md:py-14">
          <h2 className="text-lg font-bold text-foreground mb-2">محصولات شمش و گلوله نقره</h2>
          <p className="text-sm text-muted-foreground mb-8">
            برای خرید شمش و گلوله نقره، درخواست خود را ثبت کنید تا کارشناسان ما با قیمت روز و جزئیات ارسال با شما تماس بگیرند.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bullionProducts.map((product) => (
              <article
                key={product.title}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-luxury-hover transition-all duration-500 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-2">{product.title}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-md font-medium">{product.purity}</span>
                    <span className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-md">{product.weight}</span>
                  </div>
                  <p className="text-sm font-bold text-accent mb-4">قیمت: استعلام روزانه</p>
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
                      <Phone className="w-4 h-4" />
                      تماس
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 border border-primary text-primary text-sm font-medium py-2.5 rounded-lg hover:bg-primary/5 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      مشاوره
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Inquiry CTA */}
          <div className="mt-12 bg-primary/5 rounded-2xl border border-primary/15 p-6 md:p-10 text-center">
            <FileText className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-lg font-bold text-foreground mb-2">ثبت درخواست خرید شمش نقره</h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
              مقدار و نوع شمش مورد نظر خود را مشخص کنید. کارشناسان ما در کمتر از ۲ ساعت کاری با شما تماس خواهند گرفت.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                <FileText className="w-4 h-4" />
                ثبت درخواست خرید
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                <Phone className="w-4 h-4" />
                تماس با کارشناس
              </button>
            </div>
          </div>
        </div>

        <PLPCategoryFAQ
          title="شمش نقره"
          items={faqItems}
          categoryDescription="شمش و گلوله نقره خالص ۹۹۹ آسمون با ضمانت اصالت و مهر عیار رسمی عرضه می‌شود. قیمت شمش نقره بر اساس نرخ روز جهانی و با مشاوره رایگان ارائه می‌گردد."
        />
      </main>
      <Footer />
    </div>
  );
};

export default PLPBullion;
