import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PLPLayout from "@/components/plp/PLPLayout";
import PLPMerchandising from "@/components/plp/PLPMerchandising";
import type { FilterGroup } from "@/components/plp/PLPFilterSidebar";
import heroImg from "@/assets/silver-set.jpg";
import setImg from "@/assets/silver-set.jpg";

const filters: FilterGroup[] = [
  {
    id: "type",
    label: "نوع ست",
    type: "checkbox",
    options: [
      { value: "ring-bracelet", label: "انگشتر و دستبند", count: 15 },
      { value: "full-set", label: "ست کامل", count: 8 },
      { value: "ring-necklace", label: "انگشتر و گردنبند", count: 12 },
      { value: "bridal", label: "ست عروس", count: 5 },
    ],
  },
  {
    id: "occasion",
    label: "مناسبت",
    type: "checkbox",
    options: [
      { value: "gift", label: "هدیه", count: 25 },
      { value: "wedding", label: "عروسی", count: 5 },
      { value: "daily", label: "روزمره", count: 18 },
      { value: "formal", label: "مجلسی", count: 10 },
    ],
  },
  {
    id: "gender",
    label: "جنسیت",
    type: "checkbox",
    options: [
      { value: "women", label: "زنانه", count: 28 },
      { value: "men", label: "مردانه", count: 12 },
    ],
  },
  {
    id: "price",
    label: "محدوده قیمت",
    type: "checkbox",
    options: [
      { value: "0-2000", label: "تا ۲ میلیون تومان", count: 15 },
      { value: "2000-5000", label: "۲ تا ۵ میلیون", count: 18 },
      { value: "5000+", label: "بیش از ۵ میلیون", count: 7 },
    ],
  },
];

const products = [
  { image: setImg, title: "ست نقره زنانه انگشتر و دستبند طرح رویال", price: "۳,۲۰۰,۰۰۰", purity: "نقره ۹۲۵", badge: "ست هدیه", isBestseller: true },
  { image: setImg, title: "ست نقره کامل عروس با فیروزه نیشابوری", price: "۵,۸۰۰,۰۰۰", stoneType: "فیروزه", purity: "نقره ۹۲۵", isNew: true },
  { image: setImg, title: "ست مردانه انگشتر و دستبند مینیمال", price: "۲,۴۰۰,۰۰۰", purity: "نقره ۹۲۵" },
  { image: setImg, title: "ست نقره زنانه گردنبند و گوشواره", price: "۲,۸۰۰,۰۰۰", originalPrice: "۳,۴۰۰,۰۰۰", purity: "نقره ۹۲۵", discountPercent: 18 },
  { image: setImg, title: "ست نقره لوکس با عقیق سلیمانی", price: "۴,۵۰۰,۰۰۰", stoneType: "عقیق", purity: "نقره ۹۲۵" },
  { image: setImg, title: "ست هدیه ولنتاین انگشتر و گردنبند", price: "۲,۱۰۰,۰۰۰", purity: "نقره ۹۲۵", badge: "هدیه ویژه" },
];

const faqItems = [
  { question: "آیا امکان سفارش ست با سنگ دلخواه وجود دارد؟", answer: "بله، می‌توانید ست مورد نظر خود را با سنگ و طرح دلخواه سفارش دهید. برای اطلاعات بیشتر با واحد طراحی اختصاصی تماس بگیرید." },
  { question: "بسته‌بندی ست‌ها چگونه است؟", answer: "تمام ست‌ها در جعبه هدیه اختصاصی و شناسنامه اصالت ارسال می‌شوند." },
];

const PLPSilverSets = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PLPLayout
          heroTitle="ست نقره"
          heroDescription="مجموعه‌های هماهنگ و ست‌های نقره اصل — هدیه‌ای خاص برای لحظه‌های ویژه"
          heroBreadcrumbs={[
            { label: "خانه", href: "/" },
            { label: "جواهرات", href: "#" },
            { label: "ست نقره", href: "#" },
          ]}
          heroImage={heroImg}
          heroAccentBadge="مجموعه‌های هماهنگ"
          heroSubcategories={[
            { label: "ست عروس", href: "#", count: 5 },
            { label: "ست هدیه", href: "#", count: 25 },
            { label: "ست کامل", href: "#", count: 8 },
            { label: "ست روزمره", href: "#", count: 18 },
          ]}
          filters={filters}
          products={products}
          totalProducts={40}
          faqTitle="ست نقره"
          faqItems={faqItems}
          categoryDescription="ست‌های نقره آسمون شامل ترکیب‌های هماهنگ از انگشتر، دستبند، گردنبند و گوشواره هستند. هر ست با دقت طراحی و ساخته شده تا یک ظاهر هماهنگ و لوکس ایجاد کند."
          merchandisingSlot={
            <>
              <PLPMerchandising variant="gift-guide" />
              <PLPMerchandising variant="bespoke" />
            </>
          }
          relatedCategories={[
            { label: "انگشتر نقره", href: "/rings" },
            { label: "دستبند نقره", href: "/bracelets" },
            { label: "سنگ‌های قیمتی", href: "/gemstones" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PLPSilverSets;
