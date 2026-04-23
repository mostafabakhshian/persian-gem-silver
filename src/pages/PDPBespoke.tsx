import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDPBreadcrumb from "@/components/pdp/PDPBreadcrumb";
import PDPTrustBar from "@/components/pdp/PDPTrustBar";
import PDPFAQ from "@/components/pdp/PDPFAQ";
import { useState } from "react";
import { Sparkles, Upload, Gem, Palette, Ruler, Send, Check, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ringImg from "@/assets/signature-ring-mens.jpg";
import braceletImg from "@/assets/bracelet.jpg";
import setImg from "@/assets/silver-set.jpg";

const categories = [
  { id: "ring", label: "انگشتر سفارشی", icon: "💍", image: ringImg },
  { id: "bracelet", label: "دستبند سفارشی", icon: "⌚", image: braceletImg },
  { id: "necklace", label: "گردنبند سفارشی", icon: "📿", image: setImg },
  { id: "set", label: "ست سفارشی", icon: "✨", image: setImg },
];

const steps = [
  { icon: Sparkles, title: "ایده شما", desc: "نوع محصول و سبک دلخواه را انتخاب کنید" },
  { icon: Upload, title: "الهام‌بخش", desc: "تصویر یا طرح مورد نظرتان را بفرستید" },
  { icon: MessageCircle, title: "مشاوره", desc: "کارشناسان ما طرح را بررسی و پیشنهاد می‌دهند" },
  { icon: Gem, title: "ساخت", desc: "محصول اختصاصی شما ساخته می‌شود" },
];

const PDPBespoke = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PDPBreadcrumb items={[
          { label: "خانه", href: "/" },
          { label: "طراحی اختصاصی", href: "#" },
        ]} />

        {/* Hero */}
        <section className="container pb-10">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
              خدمات ویژه آسمون
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 leading-relaxed">
              طراحی اختصاصی جواهرات
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              ایده، طرح یا تصویر الهام‌بخش خود را برای ما بفرستید. استادکاران ما قطعه‌ای منحصربفرد و اختصاصی برای شما خواهند ساخت.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-foreground">{step.title}</span>
                <span className="text-[11px] text-muted-foreground leading-tight">{step.desc}</span>
                {i < steps.length - 1 && (
                  <ArrowLeft className="w-4 h-4 text-border hidden md:block absolute" />
                )}
              </div>
            ))}
          </div>

          {/* Request form */}
          <div className="max-w-2xl mx-auto">
            {formSubmitted ? (
              <div className="text-center py-12 bg-primary/5 rounded-2xl border border-primary/10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-2">درخواست شما ثبت شد</h2>
                <p className="text-sm text-muted-foreground">کارشناسان ما در کمتر از ۲۴ ساعت با شما تماس خواهند گرفت</p>
              </div>
            ) : (
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-luxury">
                <h2 className="text-lg font-bold text-foreground mb-6">فرم درخواست طراحی اختصاصی</h2>

                {/* Category selection */}
                <div className="mb-6">
                  <label className="text-sm font-semibold text-foreground mb-3 block">نوع محصول</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                          selectedCategory === cat.id
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border hover:border-muted-foreground"
                        }`}
                      >
                        <span className="text-2xl">{cat.icon}</span>
                        <span className="text-xs font-medium">{cat.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form fields */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">نام</label>
                      <input className="w-full h-11 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="نام شما" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">شماره تماس</label>
                      <input className="w-full h-11 rounded-lg border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="۰۹۱۲..." dir="ltr" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">سبک و سنگ مورد نظر</label>
                    <div className="flex flex-wrap gap-2">
                      {["فیروزه", "عقیق", "یاقوت", "زمرد", "بدون سنگ", "سبک کلاسیک", "سبک مدرن", "مینیمال"].map((tag) => (
                        <button
                          key={tag}
                          className="px-3 py-1.5 text-xs rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">توضیحات طرح دلخواه</label>
                    <textarea
                      className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      rows={4}
                      placeholder="ایده، توضیح طرح، سایز، حکاکی یا هر جزئیات دیگر..."
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">تصویر الهام‌بخش (اختیاری)</label>
                    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
                      <Upload className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">تصویر یا اسکرین‌شات طرح مورد نظر خود را آپلود کنید</p>
                    </div>
                  </div>

                  <Button
                    variant="hero"
                    className="w-full gap-2 mt-2"
                    onClick={() => setFormSubmitted(true)}
                  >
                    <Send className="w-4 h-4" /> ارسال درخواست طراحی
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center">مشاوره رایگان است و هیچ تعهدی ایجاد نمی‌کند</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <PDPTrustBar />

        <PDPFAQ items={[
          { question: "هزینه طراحی اختصاصی چقدر است؟", answer: "مشاوره اولیه رایگان است. پس از بررسی طرح، قیمت دقیق با جزئیات به شما اعلام می‌شود." },
          { question: "مدت زمان ساخت چقدر است؟", answer: "بسته به پیچیدگی طرح، معمولاً ۷ تا ۱۴ روز کاری زمان ساخت نیاز است." },
          { question: "آیا می‌توانم تغییرات بدهم؟", answer: "بله، قبل از شروع ساخت، طرح نهایی برای تأیید شما ارسال می‌شود و امکان اعمال تغییرات وجود دارد." },
          { question: "آیا محصول سفارشی ضمانت دارد؟", answer: "بله، تمام محصولات سفارشی مانند محصولات آماده، دارای ضمانت اصالت و شناسنامه هستند." },
        ]} />
      </main>
      <Footer />
    </div>
  );
};

export default PDPBespoke;
