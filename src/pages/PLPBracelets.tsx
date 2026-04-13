import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PLPLayout from "@/components/plp/PLPLayout";
import PLPMerchandising from "@/components/plp/PLPMerchandising";
import type { FilterGroup } from "@/components/plp/PLPFilterSidebar";
import heroImg from "@/assets/bracelet-collection.jpg";
import braceletImg from "@/assets/bracelet.jpg";

const filters: FilterGroup[] = [
  {
    id: "style",
    label: "سبک",
    type: "checkbox",
    options: [
      { value: "classic", label: "کلاسیک", count: 22 },
      { value: "minimal", label: "مینیمال", count: 18 },
      { value: "luxury", label: "لوکس", count: 14 },
      { value: "chain", label: "زنجیری", count: 20 },
      { value: "bangle", label: "النگویی", count: 10 },
    ],
  },
  {
    id: "stone",
    label: "نوع سنگ",
    type: "checkbox",
    options: [
      { value: "turquoise", label: "فیروزه", count: 12 },
      { value: "agate", label: "عقیق", count: 9 },
      { value: "none", label: "بدون سنگ", count: 35 },
    ],
  },
  {
    id: "gender",
    label: "جنسیت",
    type: "checkbox",
    options: [
      { value: "men", label: "مردانه", count: 30 },
      { value: "women", label: "زنانه", count: 45 },
      { value: "unisex", label: "یونیسکس", count: 12 },
    ],
  },
  {
    id: "price",
    label: "محدوده قیمت",
    type: "checkbox",
    options: [
      { value: "0-500", label: "تا ۵۰۰ هزار تومان", count: 25 },
      { value: "500-1000", label: "۵۰۰ تا ۱ میلیون", count: 35 },
      { value: "1000+", label: "بیش از ۱ میلیون", count: 22 },
    ],
  },
];

const products = [
  { image: braceletImg, title: "دستبند نقره زنجیری مردانه طرح کارتیه", price: "۸۵۰,۰۰۰", purity: "نقره ۹۲۵", isBestseller: true },
  { image: braceletImg, title: "دستبند نقره زنانه ظریف با فیروزه", price: "۱,۱۰۰,۰۰۰", stoneType: "فیروزه", purity: "نقره ۹۲۵", isNew: true },
  { image: braceletImg, title: "دستبند نقره مینیمال روزمره", price: "۵۵۰,۰۰۰", purity: "نقره ۹۲۵" },
  { image: braceletImg, title: "دستبند النگویی نقره با حکاکی", price: "۱,۴۰۰,۰۰۰", purity: "نقره ۹۲۵", badge: "ویژه" },
  { image: braceletImg, title: "دستبند نقره لوکس با عقیق سبز", price: "۱,۶۵۰,۰۰۰", originalPrice: "۱,۹۰۰,۰۰۰", stoneType: "عقیق", purity: "نقره ۹۲۵", discountPercent: 13 },
  { image: braceletImg, title: "دستبند نقره زنانه پهن مدرن", price: "۹۸۰,۰۰۰", purity: "نقره ۹۲۵" },
];

const faqItems = [
  { question: "سایز دستبند را چگونه تشخیص دهم؟", answer: "دور مچ دست خود را با متر نواری اندازه بگیرید و ۱ تا ۱.۵ سانتیمتر به آن اضافه کنید." },
  { question: "آیا دستبندها ضدحساسیت هستند؟", answer: "بله، تمام دستبندهای نقره ۹۲۵ ما ضدحساسیت هستند و برای پوست‌های حساس مناسبند." },
];

const PLPBracelets = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PLPLayout
          heroTitle="دستبند نقره"
          heroDescription="مجموعه دستبندهای نقره اصل با طراحی‌های ظریف و لوکس — مناسب هدیه و استفاده روزمره"
          heroBreadcrumbs={[
            { label: "خانه", href: "/" },
            { label: "جواهرات", href: "#" },
            { label: "دستبند نقره", href: "#" },
          ]}
          heroImage={heroImg}
          heroSubcategories={[
            { label: "زنجیری", href: "#", count: 20 },
            { label: "النگویی", href: "#", count: 10 },
            { label: "مینیمال", href: "#", count: 18 },
            { label: "لوکس", href: "#", count: 14 },
            { label: "هدیه", href: "#" },
          ]}
          filters={filters}
          products={products}
          totalProducts={87}
          faqTitle="دستبند نقره"
          faqItems={faqItems}
          categoryDescription="دستبند نقره از محبوب‌ترین زیورآلات برای مردان و زنان است. مجموعه آسمون شامل دستبندهای زنجیری، النگویی، مینیمال و لوکس با سنگ‌های طبیعی می‌باشد."
          merchandisingSlot={
            <>
              <PLPMerchandising variant="gift-guide" />
              <PLPMerchandising variant="bespoke" />
            </>
          }
          relatedCategories={[
            { label: "انگشتر نقره", href: "/rings" },
            { label: "ست نقره", href: "/silver-sets" },
            { label: "گردنبند", href: "#" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PLPBracelets;
