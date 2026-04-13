import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PLPLayout from "@/components/plp/PLPLayout";
import PLPMerchandising from "@/components/plp/PLPMerchandising";
import type { FilterGroup } from "@/components/plp/PLPFilterSidebar";
import heroImg from "@/assets/signature-ring-mens.jpg";
import ringImg from "@/assets/mens-ring.jpg";
import womenRingImg from "@/assets/womens-ring.jpg";

const filters: FilterGroup[] = [
  {
    id: "gender",
    label: "جنسیت",
    type: "checkbox",
    options: [
      { value: "men", label: "مردانه", count: 124 },
      { value: "women", label: "زنانه", count: 98 },
      { value: "unisex", label: "یونیسکس", count: 15 },
    ],
  },
  {
    id: "style",
    label: "سبک",
    type: "checkbox",
    options: [
      { value: "classic", label: "کلاسیک", count: 45 },
      { value: "statement", label: "استیتمنت", count: 32 },
      { value: "minimal", label: "مینیمال", count: 28 },
      { value: "gemstone", label: "نگین‌دار", count: 67 },
      { value: "engraved", label: "حکاکی‌شده", count: 19 },
    ],
  },
  {
    id: "stone",
    label: "نوع سنگ",
    type: "checkbox",
    options: [
      { value: "turquoise", label: "فیروزه", count: 34 },
      { value: "agate", label: "عقیق", count: 28 },
      { value: "ruby", label: "یاقوت", count: 12 },
      { value: "emerald", label: "زمرد", count: 8 },
      { value: "none", label: "بدون سنگ", count: 55 },
    ],
  },
  {
    id: "purity",
    label: "عیار نقره",
    type: "checkbox",
    options: [
      { value: "925", label: "نقره ۹۲۵", count: 180 },
      { value: "990", label: "نقره ۹۹۰", count: 42 },
    ],
  },
  {
    id: "size",
    label: "سایز انگشتر",
    type: "checkbox",
    options: Array.from({ length: 10 }, (_, i) => ({
      value: String(i + 6),
      label: `سایز ${i + 6}`,
    })),
  },
  {
    id: "price",
    label: "محدوده قیمت",
    type: "checkbox",
    options: [
      { value: "0-500", label: "تا ۵۰۰ هزار تومان", count: 35 },
      { value: "500-1000", label: "۵۰۰ تا ۱ میلیون", count: 68 },
      { value: "1000-2000", label: "۱ تا ۲ میلیون", count: 52 },
      { value: "2000+", label: "بیش از ۲ میلیون", count: 30 },
    ],
  },
];

const products = [
  { image: ringImg, title: "انگشتر نقره مردانه طرح شاهین با عقیق یمنی", price: "۱,۸۵۰,۰۰۰", originalPrice: "۲,۲۰۰,۰۰۰", stoneType: "عقیق", purity: "نقره ۹۲۵", discountPercent: 16, isBestseller: true },
  { image: womenRingImg, title: "انگشتر نقره زنانه ظریف با فیروزه نیشابوری", price: "۱,۲۵۰,۰۰۰", stoneType: "فیروزه", purity: "نقره ۹۲۵", isNew: true },
  { image: ringImg, title: "انگشتر نقره مردانه سنگین وزن ساده", price: "۹۸۰,۰۰۰", purity: "نقره ۹۹۰" },
  { image: womenRingImg, title: "انگشتر نقره زنانه با یاقوت سرخ طبیعی", price: "۲,۴۵۰,۰۰۰", stoneType: "یاقوت", purity: "نقره ۹۲۵", badge: "ویژه" },
  { image: ringImg, title: "انگشتر نقره مردانه حکاکی دستی اسلیمی", price: "۱,۶۰۰,۰۰۰", purity: "نقره ۹۲۵", isCustom: true },
  { image: womenRingImg, title: "انگشتر نقره زنانه مینیمال روزمره", price: "۶۵۰,۰۰۰", purity: "نقره ۹۲۵" },
  { image: ringImg, title: "انگشتر نقره مردانه با زمرد زامبیا", price: "۳,۲۰۰,۰۰۰", stoneType: "زمرد", purity: "نقره ۹۲۵", isNew: true },
  { image: womenRingImg, title: "انگشتر نقره زنانه پرنسسی با نگین مارکیز", price: "۱,۱۰۰,۰۰۰", originalPrice: "۱,۴۰۰,۰۰۰", purity: "نقره ۹۲۵", discountPercent: 21 },
];

const faqItems = [
  { question: "چگونه سایز انگشتر خود را تشخیص دهم؟", answer: "با استفاده از نخ یا نوار کاغذی دور انگشت خود را اندازه بگیرید و با جدول سایز ما مقایسه کنید. همچنین می‌توانید از راهنمای آنلاین سایز ما استفاده نمایید." },
  { question: "نقره ۹۲۵ چیست و آیا سیاه می‌شود؟", answer: "نقره ۹۲۵ (استرلینگ سیلور) حاوی ۹۲.۵٪ نقره خالص است. با گذشت زمان ممکن است کمی تیره شود اما با پارچه مخصوص به راحتی تمیز می‌شود." },
  { question: "آیا سنگ‌های انگشترها طبیعی هستند؟", answer: "بله، تمامی سنگ‌های استفاده شده در محصولات ما ۱۰۰٪ طبیعی و دارای شناسنامه اصالت هستند." },
  { question: "آیا امکان تغییر سایز انگشتر پس از خرید وجود دارد؟", answer: "بله، برای اکثر مدل‌ها امکان تغییر سایز تا ۷ روز پس از دریافت وجود دارد. کافیست با پشتیبانی تماس بگیرید." },
];

const PLPRings = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PLPLayout
          heroTitle="انگشتر نقره"
          heroDescription="کلکسیون انگشترهای نقره مردانه و زنانه با سنگ‌های اصیل و طراحی‌های منحصربفرد — از کلاسیک تا مدرن"
          heroBreadcrumbs={[
            { label: "خانه", href: "/" },
            { label: "جواهرات", href: "#" },
            { label: "انگشتر نقره", href: "#" },
          ]}
          heroImage={heroImg}
          heroAccentBadge="بیش از ۲۰۰ مدل"
          heroSubcategories={[
            { label: "انگشتر مردانه", href: "#", count: 124 },
            { label: "انگشتر زنانه", href: "#", count: 98 },
            { label: "نگین‌دار", href: "#", count: 67 },
            { label: "استیتمنت", href: "#", count: 32 },
            { label: "مینیمال", href: "#", count: 28 },
            { label: "حکاکی", href: "#", count: 19 },
          ]}
          filters={filters}
          products={products}
          totalProducts={237}
          faqTitle="انگشتر نقره"
          faqItems={faqItems}
          categoryDescription="انگشتر نقره یکی از محبوب‌ترین زیورآلات در ایران است. مجموعه انگشترهای نقره آسمون شامل طرح‌های مردانه و زنانه با سنگ‌های طبیعی مانند فیروزه نیشابوری، عقیق یمنی، یاقوت و زمرد است. هر انگشتر با دقت و ظرافت ساخته شده و دارای شناسنامه اصالت است."
          merchandisingSlot={
            <>
              <PLPMerchandising variant="size-guide" />
              <PLPMerchandising variant="bespoke" />
              <PLPMerchandising variant="trust" />
            </>
          }
          relatedCategories={[
            { label: "دستبند نقره", href: "/bracelets" },
            { label: "ست نقره", href: "/silver-sets" },
            { label: "سنگ‌های قیمتی", href: "/gemstones" },
            { label: "گردنبند", href: "#" },
            { label: "هدیه", href: "#" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PLPRings;
