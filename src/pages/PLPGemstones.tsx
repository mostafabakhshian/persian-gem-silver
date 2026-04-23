import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PLPLayout from "@/components/plp/PLPLayout";
import PLPMerchandising from "@/components/plp/PLPMerchandising";
import type { FilterGroup } from "@/components/plp/PLPFilterSidebar";
import heroImg from "@/assets/gemstones-collection.jpg";
import stoneImg from "@/assets/stone-personality.jpg";

const filters: FilterGroup[] = [
  {
    id: "stone-type",
    label: "نوع سنگ",
    type: "checkbox",
    options: [
      { value: "turquoise", label: "فیروزه", count: 45 },
      { value: "agate", label: "عقیق", count: 38 },
      { value: "ruby", label: "یاقوت", count: 15 },
      { value: "emerald", label: "زمرد", count: 12 },
      { value: "amethyst", label: "آمتیست", count: 10 },
      { value: "garnet", label: "گارنت", count: 8 },
      { value: "opal", label: "اوپال", count: 6 },
    ],
  },
  {
    id: "color",
    label: "رنگ",
    type: "color",
    colors: [
      { value: "blue", label: "آبی", hex: "#3B82F6" },
      { value: "green", label: "سبز", hex: "#10B981" },
      { value: "red", label: "قرمز", hex: "#EF4444" },
      { value: "purple", label: "بنفش", hex: "#8B5CF6" },
      { value: "brown", label: "قهوه‌ای", hex: "#92400E" },
      { value: "white", label: "سفید", hex: "#F8FAFC" },
      { value: "black", label: "مشکی", hex: "#1E293B" },
    ],
  },
  {
    id: "meaning",
    label: "نماد و معنا",
    type: "checkbox",
    options: [
      { value: "protection", label: "محافظت", count: 28 },
      { value: "power", label: "قدرت", count: 22 },
      { value: "love", label: "عشق", count: 15 },
      { value: "wisdom", label: "حکمت", count: 18 },
      { value: "health", label: "سلامتی", count: 12 },
      { value: "luck", label: "شانس و اقبال", count: 10 },
    ],
  },
  {
    id: "birth-month",
    label: "ماه تولد",
    type: "checkbox",
    options: [
      { value: "farvardin", label: "فروردین" },
      { value: "ordibehesht", label: "اردیبهشت" },
      { value: "khordad", label: "خرداد" },
      { value: "tir", label: "تیر" },
      { value: "mordad", label: "مرداد" },
      { value: "shahrivar", label: "شهریور" },
    ],
  },
  {
    id: "usage",
    label: "کاربرد",
    type: "checkbox",
    options: [
      { value: "ring", label: "برای انگشتر", count: 60 },
      { value: "bracelet", label: "برای دستبند", count: 30 },
      { value: "necklace", label: "برای گردنبند", count: 25 },
      { value: "collection", label: "کلکسیون", count: 15 },
    ],
  },
  {
    id: "price",
    label: "محدوده قیمت",
    type: "checkbox",
    options: [
      { value: "0-300", label: "تا ۳۰۰ هزار تومان", count: 40 },
      { value: "300-700", label: "۳۰۰ تا ۷۰۰ هزار", count: 45 },
      { value: "700-1500", label: "۷۰۰ تا ۱.۵ میلیون", count: 30 },
      { value: "1500+", label: "بیش از ۱.۵ میلیون", count: 18 },
    ],
  },
];

const products = [
  { image: stoneImg, title: "فیروزه نیشابوری اصل درجه یک — مناسب انگشتر", price: "۸۵۰,۰۰۰", stoneType: "فیروزه", badge: "اصل نیشابور", isBestseller: true },
  { image: stoneImg, title: "عقیق یمنی سرخ طبیعی با شناسنامه", price: "۶۵۰,۰۰۰", stoneType: "عقیق", isNew: true },
  { image: stoneImg, title: "زمرد زامبیا ناب — کلکسیونی", price: "۲,۸۰۰,۰۰۰", stoneType: "زمرد", badge: "کلکسیونی" },
  { image: stoneImg, title: "یاقوت کبود سریلانکا — درجه AA", price: "۳,۵۰۰,۰۰۰", stoneType: "یاقوت" },
  { image: stoneImg, title: "آمتیست طبیعی تراش اشکی", price: "۴۲۰,۰۰۰", stoneType: "آمتیست" },
  { image: stoneImg, title: "عقیق سلیمانی خاص — دور طلایی", price: "۷۸۰,۰۰۰", stoneType: "عقیق", originalPrice: "۹۵۰,۰۰۰", discountPercent: 18 },
  { image: stoneImg, title: "فیروزه آریزونا آبی شفاف", price: "۱,۲۰۰,۰۰۰", stoneType: "فیروزه" },
  { image: stoneImg, title: "گارنت قرمز عمیق — مناسب حکاکی", price: "۵۵۰,۰۰۰", stoneType: "گارنت", isNew: true },
];

const faqItems = [
  { question: "چطور مطمئن شوم سنگ طبیعی است؟", answer: "تمامی سنگ‌های آسمون دارای شناسنامه اصالت و گواهی گوهرشناسی هستند." },
  { question: "آیا سنگ را می‌توانم روی انگشتر سفارشی کار بگذارم؟", answer: "بله، پس از خرید سنگ می‌توانید درخواست نصب بر روی انگشتر دلخواه را ثبت کنید." },
  { question: "سنگ ماه تولد من چیست؟", answer: "هر ماه شمسی یک سنگ تولد مخصوص دارد. از راهنمای سنگ ماه تولد در سایت استفاده کنید." },
];

const PLPGemstones = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PLPLayout
          heroTitle="سنگ‌های قیمتی و نیمه‌قیمتی"
          heroDescription="مجموعه سنگ‌های اصیل و طبیعی با شناسنامه — فیروزه، عقیق، یاقوت، زمرد و سنگ‌های کلکسیونی"
          heroBreadcrumbs={[
            { label: "خانه", href: "/" },
            { label: "سنگ‌های قیمتی", href: "#" },
          ]}
          heroImage={heroImg}
          heroAccentBadge="همه سنگ‌ها دارای شناسنامه"
          heroSubcategories={[
            { label: "فیروزه", href: "#", count: 45 },
            { label: "عقیق", href: "#", count: 38 },
            { label: "یاقوت", href: "#", count: 15 },
            { label: "زمرد", href: "#", count: 12 },
            { label: "آمتیست", href: "#", count: 10 },
            { label: "سنگ ماه تولد", href: "#" },
          ]}
          filters={filters}
          products={products}
          totalProducts={133}
          faqTitle="سنگ‌های قیمتی"
          faqItems={faqItems}
          categoryDescription="سنگ‌های قیمتی و نیمه‌قیمتی آسمون شامل فیروزه نیشابوری، عقیق یمنی، یاقوت، زمرد، آمتیست و گارنت هستند. تمامی سنگ‌ها ۱۰۰٪ طبیعی، دارای شناسنامه اصالت و مناسب برای نصب بر روی انگشتر، دستبند و گردنبند می‌باشند."
          merchandisingSlot={
            <>
              <PLPMerchandising variant="stone-finder" />
              <PLPMerchandising variant="trust" />
              <PLPMerchandising variant="bespoke" />
            </>
          }
          relatedCategories={[
            { label: "انگشتر نگین‌دار", href: "/rings" },
            { label: "دستبند نقره", href: "/bracelets" },
            { label: "طراحی اختصاصی", href: "#" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PLPGemstones;
