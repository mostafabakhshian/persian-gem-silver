import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDPBreadcrumb from "@/components/pdp/PDPBreadcrumb";
import PDPGallery from "@/components/pdp/PDPGallery";
import PDPInfo from "@/components/pdp/PDPInfo";
import PDPTabs from "@/components/pdp/PDPTabs";
import PDPTrustBar from "@/components/pdp/PDPTrustBar";
import PDPRelated from "@/components/pdp/PDPRelated";
import PDPBespokePrompt from "@/components/pdp/PDPBespokePrompt";
import PDPFAQ from "@/components/pdp/PDPFAQ";
import { Gem, BookOpen, Star, Calendar } from "lucide-react";
import stoneImg from "@/assets/stone-personality.jpg";
import gemImg from "@/assets/gemstones-collection.jpg";

const PDPGemstone = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PDPBreadcrumb items={[
          { label: "خانه", href: "/" },
          { label: "سنگ‌های قیمتی", href: "/gemstones" },
          { label: "فیروزه", href: "/gemstones" },
          { label: "فیروزه نیشابوری اصل درجه یک", href: "#" },
        ]} />

        <section className="container pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <PDPGallery
              badge="اصل نیشابور"
              images={[
                { src: stoneImg, alt: "فیروزه نیشابوری — نمای روبرو" },
                { src: stoneImg, alt: "فیروزه نیشابوری — نمای نزدیک" },
                { src: stoneImg, alt: "فیروزه — در مقایسه با مقیاس" },
                { src: stoneImg, alt: "شناسنامه اصالت فیروزه" },
              ]}
            />
            <PDPInfo
              title="فیروزه نیشابوری اصل درجه یک"
              subtitle="سنگ فیروزه طبیعی معدن نیشابور — بدون بهسازی — با شناسنامه"
              collectionName="سنگ‌های اصیل"
              price="۸۵۰,۰۰۰"
              stoneType="فیروزه نیشابوری"
              weight="۴.۲ قیراط"
              productCode="ASM-GS-5018"
              shortDescription="فیروزه نیشابوری اصل و طبیعی با رنگ آبی آسمانی. این سنگ بدون هیچگونه بهسازی شیمیایی بوده و دارای شناسنامه اصالت گوهرشناسی است. مناسب نصب بر روی انگشتر مردانه و زنانه."
              variations={[
                {
                  id: "usage",
                  label: "کاربرد سنگ",
                  type: "dropdown",
                  options: [
                    { value: "ring-mens", label: "نصب روی انگشتر مردانه", available: true },
                    { value: "ring-womens", label: "نصب روی انگشتر زنانه", available: true },
                    { value: "pendant", label: "نصب روی آویز", available: true },
                    { value: "collection", label: "فقط سنگ (کلکسیون)", available: true },
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Stone meaning / symbolism block */}
        <section className="border-t border-border py-10">
          <div className="container">
            <h2 className="text-lg font-bold text-foreground mb-6">درباره فیروزه</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Gem, title: "معنای سنگ", desc: "فیروزه نماد محافظت، سلامتی و خوش‌اقبالی است" },
                { icon: Star, title: "خواص", desc: "آرامش‌بخش، محافظت‌کننده و تقویت‌کننده اعتماد به نفس" },
                { icon: Calendar, title: "ماه تولد", desc: "سنگ ماه تولد آذر (دی ماه در تقویم غربی)" },
                { icon: BookOpen, title: "تاریخچه", desc: "فیروزه نیشابوری از هزاران سال پیش مورد استفاده ایرانیان بوده است" },
              ].map((item) => (
                <div key={item.title} className="bg-primary/5 border border-primary/10 rounded-xl p-5 text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PDPTabs
          description="فیروزه نیشابوری یکی از ارزشمندترین سنگ‌های نیمه‌قیمتی در جهان است. معدن فیروزه نیشابور یکی از قدیمی‌ترین معادن فیروزه جهان بوده و فیروزه آن به خاطر رنگ آبی آسمانی یکدست و بدون رگه، شهرت جهانی دارد."
          specs={[
            { label: "نوع سنگ", value: "فیروزه طبیعی" },
            { label: "منشا", value: "معدن نیشابور — ایران" },
            { label: "وزن", value: "۴.۲ قیراط" },
            { label: "رنگ", value: "آبی آسمانی" },
            { label: "تراش", value: "کابوشن بیضی" },
            { label: "بهسازی", value: "بدون بهسازی" },
            { label: "شناسنامه", value: "گواهی گوهرشناسی — دارد" },
            { label: "سختی (Mohs)", value: "۵ تا ۶" },
          ]}
          storyTitle="داستان فیروزه نیشابور"
          storyContent="فیروزه نیشابوری یکی از کهن‌ترین سنگ‌های تزئینی و قیمتی شناخته شده توسط بشر است. این سنگ از معادن منطقه نیشابور در خراسان رضوی استخراج می‌شود و به دلیل رنگ آبی یکدست و بدون رگه، بالاترین ارزش را در بین انواع فیروزه دارد. ایرانیان باستان فیروزه را نماد آسمان و محافظت می‌دانستند."
          careContent="فیروزه سنگی حساس است. از تماس با آب، عطر و مواد شیمیایی پرهیز کنید. در جای خشک و دور از نور مستقیم آفتاب نگهداری نمایید."
        />

        <PDPTrustBar />
        <PDPBespokePrompt productType="سنگ" />

        <PDPFAQ items={[
          { question: "چطور مطمئن شوم فیروزه اصل است؟", answer: "تمام فیروزه‌های آسمون دارای شناسنامه گوهرشناسی و ضمانت اصالت هستند." },
          { question: "آیا می‌توانم سنگ را روی انگشتر سفارشی نصب کنم؟", answer: "بله، پس از خرید سنگ می‌توانید درخواست ساخت انگشتر با طرح دلخواه را ثبت کنید." },
          { question: "فرق فیروزه نیشابوری با فیروزه آریزونا چیست؟", answer: "فیروزه نیشابوری رنگ آبی آسمانی خاصی دارد و بدون رگه است، در حالی که فیروزه آریزونا معمولاً دارای رگه‌های قهوه‌ای یا سیاه است." },
        ]} />

        <PDPRelated
          title="سنگ‌های مشابه"
          subtitle="سنگ‌های دیگر را هم ببینید"
          products={[
            { image: stoneImg, title: "عقیق یمنی سرخ طبیعی", price: "۶۵۰,۰۰۰", stoneType: "عقیق" },
            { image: stoneImg, title: "زمرد زامبیا کلکسیونی", price: "۲,۸۰۰,۰۰۰", stoneType: "زمرد", badge: "کلکسیونی" },
            { image: stoneImg, title: "آمتیست تراش اشکی", price: "۴۲۰,۰۰۰", stoneType: "آمتیست" },
            { image: gemImg, title: "یاقوت کبود سریلانکا", price: "۳,۵۰۰,۰۰۰", stoneType: "یاقوت" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PDPGemstone;
