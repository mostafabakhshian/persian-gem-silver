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
import braceletImg from "@/assets/bracelet.jpg";

const PDPBracelet = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PDPBreadcrumb items={[
          { label: "خانه", href: "/" },
          { label: "دستبند نقره", href: "/bracelets" },
          { label: "دستبند نقره زنجیری مردانه طرح کارتیه", href: "#" },
        ]} />

        <section className="container pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <PDPGallery
              badge="پرفروش"
              images={[
                { src: braceletImg, alt: "دستبند نقره زنجیری — نمای کلی" },
                { src: braceletImg, alt: "دستبند نقره — روی مچ" },
                { src: braceletImg, alt: "دستبند نقره — جزئیات قفل" },
                { src: braceletImg, alt: "بسته‌بندی هدیه" },
              ]}
            />
            <PDPInfo
              title="دستبند نقره زنجیری مردانه طرح کارتیه"
              subtitle="زنجیر کارتیه کلاسیک — سبک و مقاوم برای استفاده روزمره"
              collectionName="کلکسیون کلاسیک"
              price="۸۵۰,۰۰۰"
              purity="نقره ۹۲۵"
              weight="۱۵ گرم"
              productCode="ASM-BR-2031"
              shortDescription="دستبند زنجیری طرح کارتیه از نقره ۹۲۵ با قفل محکم و طراحی کلاسیک. مناسب استفاده روزمره و ست کردن با انگشتر."
              variations={[
                {
                  id: "length",
                  label: "طول دستبند",
                  type: "button",
                  options: [
                    { value: "18", label: "۱۸ سانتی", available: true },
                    { value: "20", label: "۲۰ سانتی", available: true },
                    { value: "22", label: "۲۲ سانتی", available: true },
                  ],
                },
                {
                  id: "width",
                  label: "ضخامت",
                  type: "button",
                  options: [
                    { value: "thin", label: "نازک", available: true },
                    { value: "medium", label: "متوسط", available: true },
                    { value: "thick", label: "ضخیم", available: true },
                  ],
                },
              ]}
            />
          </div>
        </section>

        <PDPTabs
          description="دستبند زنجیری طرح کارتیه یکی از محبوب‌ترین مدل‌های دستبند مردانه است. این دستبند از نقره استرلینگ ۹۲۵ با قفل لابستر محکم ساخته شده و برای استفاده روزمره طراحی شده است."
          specs={[
            { label: "جنس", value: "نقره استرلینگ ۹۲۵" },
            { label: "وزن تقریبی", value: "۱۵ گرم" },
            { label: "نوع قفل", value: "لابستر" },
            { label: "طول", value: "۱۸ / ۲۰ / ۲۲ سانتی‌متر" },
            { label: "ساخت", value: "ماشینی با پرداخت دستی" },
          ]}
          careContent="دستبند نقره را دور از رطوبت نگهداری کنید. از تماس با عطر و مواد شیمیایی پرهیز نمایید. برای تمیز کردن از پارچه مخصوص نقره استفاده کنید."
        />

        <PDPTrustBar />
        <PDPBespokePrompt productType="دستبند" />

        <PDPFAQ items={[
          { question: "چگونه سایز مچ‌بند خود را اندازه بگیرم؟", answer: "دور مچ دست خود را با نخ یا متر نواری اندازه بگیرید و ۱ تا ۱.۵ سانتی‌متر اضافه کنید." },
          { question: "آیا این دستبند ضدحساسیت است؟", answer: "بله، نقره ۹۲۵ ضدحساسیت است و برای پوست‌های حساس مناسب می‌باشد." },
        ]} />

        <PDPRelated
          title="دستبندهای مشابه"
          products={[
            { image: braceletImg, title: "دستبند نقره النگویی زنانه", price: "۱,۱۰۰,۰۰۰", purity: "نقره ۹۲۵" },
            { image: braceletImg, title: "دستبند نقره با فیروزه", price: "۱,۴۰۰,۰۰۰", stoneType: "فیروزه", purity: "نقره ۹۲۵" },
            { image: braceletImg, title: "دستبند نقره مینیمال", price: "۵۵۰,۰۰۰", purity: "نقره ۹۲۵" },
            { image: braceletImg, title: "دستبند نقره لوکس", price: "۱,۶۵۰,۰۰۰", purity: "نقره ۹۲۵", badge: "ویژه" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PDPBracelet;
