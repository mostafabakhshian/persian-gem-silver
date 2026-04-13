import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDPBreadcrumb from "@/components/pdp/PDPBreadcrumb";
import PDPGallery from "@/components/pdp/PDPGallery";
import PDPInfo from "@/components/pdp/PDPInfo";
import PDPTabs from "@/components/pdp/PDPTabs";
import PDPTrustBar from "@/components/pdp/PDPTrustBar";
import PDPFAQ from "@/components/pdp/PDPFAQ";
import { Shield, Award, Scale, Clock } from "lucide-react";
import bullionImg from "@/assets/silver-bullion.jpg";

const PDPBullion = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PDPBreadcrumb items={[
          { label: "خانه", href: "/" },
          { label: "شمش و گلوله نقره", href: "/bullion" },
          { label: "شمش نقره ۹۹۹ — ۲۵۰ گرمی", href: "#" },
        ]} />

        <section className="container pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <PDPGallery
              badge="خرید استعلامی"
              images={[
                { src: bullionImg, alt: "شمش نقره ۲۵۰ گرمی — نمای روبرو" },
                { src: bullionImg, alt: "شمش نقره — مهر عیار" },
                { src: bullionImg, alt: "شمش نقره — ابعاد و مقیاس" },
                { src: bullionImg, alt: "گواهی اصالت" },
              ]}
            />
            <PDPInfo
              title="شمش نقره ۹۹۹ — ۲۵۰ گرمی"
              subtitle="نقره خالص ۹۹۹ با مهر عیار رسمی و گواهی اصالت"
              collectionName="نقره سرمایه‌ای"
              price="استعلام قیمت"
              purity="نقره ۹۹۹"
              weight="۲۵۰ گرم"
              productCode="ASM-BL-7003"
              shortDescription="شمش نقره ۹۹۹ خالص ۲۵۰ گرمی. دارای مهر عیار رسمی و شناسنامه اصالت. قیمت بر اساس نرخ لحظه‌ای بازار جهانی نقره محاسبه می‌شود."
              isInquiryOnly
            />
          </div>
        </section>

        {/* Investment trust strip */}
        <section className="border-t border-border py-8 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: Shield, title: "ضمانت عیار ۹۹۹", desc: "هر شمش دارای مهر عیار رسمی" },
                { icon: Award, title: "گواهی اصالت", desc: "شناسنامه و سریال اختصاصی" },
                { icon: Scale, title: "وزن‌کشی دقیق", desc: "با ترازوی دیجیتال دقیق" },
                { icon: Clock, title: "قیمت لحظه‌ای", desc: "بر اساس نرخ جهانی نقره" },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-[11px] text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PDPTabs
          description="شمش نقره ۹۹۹ خالص آسمون با بالاترین عیار ممکن (۹۹.۹٪ نقره خالص) تولید شده و هر قطعه دارای مهر عیار رسمی و شماره سریال اختصاصی است. مناسب سرمایه‌گذاری، هدیه و مصارف صنعتی."
          specs={[
            { label: "عیار", value: "۹۹۹ (نقره خالص)" },
            { label: "وزن", value: "۲۵۰ گرم" },
            { label: "ابعاد تقریبی", value: "۸ × ۴ × ۱ سانتی‌متر" },
            { label: "مهر عیار", value: "دارد" },
            { label: "شماره سریال", value: "دارد" },
            { label: "گواهی", value: "شناسنامه اصالت" },
            { label: "نحوه خرید", value: "استعلامی — تماس با کارشناس" },
          ]}
        />

        <PDPTrustBar
          items={[
            { icon: Shield, title: "ضمانت اصالت", description: "هر شمش با مهر عیار و شناسنامه رسمی" },
            { icon: Award, title: "عیار ۹۹۹", description: "بالاترین سطح خلوص نقره" },
            { icon: Scale, title: "وزن تضمینی", description: "وزن‌کشی دقیق با ترازوی دیجیتال" },
            { icon: Clock, title: "قیمت منصفانه", description: "محاسبه بر اساس نرخ جهانی لحظه‌ای" },
          ]}
        />

        <PDPFAQ items={[
          { question: "قیمت شمش ۲۵۰ گرمی امروز چقدر است؟", answer: "قیمت شمش هر روز بر اساس نرخ جهانی نقره تغییر می‌کند. برای دریافت قیمت لحظه‌ای با کارشناسان ما تماس بگیرید." },
          { question: "آیا بسته‌بندی امن است؟", answer: "بله، شمش‌ها در بسته‌بندی ضدضربه و محافظ ارسال می‌شوند." },
          { question: "آیا فاکتور رسمی صادر می‌شود؟", answer: "بله، برای تمام خریدهای شمش فاکتور رسمی صادر می‌گردد." },
        ]} />
      </main>
      <Footer />
    </div>
  );
};

export default PDPBullion;
