import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PDPBreadcrumb from "@/components/pdp/PDPBreadcrumb";
import PDPGallery from "@/components/pdp/PDPGallery";
import PDPInfo from "@/components/pdp/PDPInfo";
import PDPTabs from "@/components/pdp/PDPTabs";
import PDPTrustBar from "@/components/pdp/PDPTrustBar";
import PDPRelated from "@/components/pdp/PDPRelated";
import PDPFAQ from "@/components/pdp/PDPFAQ";
import setImg from "@/assets/silver-set.jpg";
import ringImg from "@/assets/womens-ring.jpg";
import braceletImg from "@/assets/bracelet.jpg";

const PDPSet = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PDPBreadcrumb items={[
          { label: "خانه", href: "/" },
          { label: "ست نقره", href: "/silver-sets" },
          { label: "ست نقره زنانه رویال — انگشتر و دستبند", href: "#" },
        ]} />

        <section className="container pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <PDPGallery
              badge="ست هدیه"
              images={[
                { src: setImg, alt: "ست نقره زنانه رویال — نمای کامل" },
                { src: setImg, alt: "ست نقره — انگشتر به تنهایی" },
                { src: setImg, alt: "ست نقره — دستبند به تنهایی" },
                { src: setImg, alt: "ست نقره — بسته‌بندی هدیه" },
              ]}
            />
            <PDPInfo
              title="ست نقره زنانه رویال — انگشتر و دستبند"
              subtitle="ست هماهنگ انگشتر و دستبند با طراحی لوکس — ایده‌آل برای هدیه"
              collectionName="کلکسیون رویال"
              price="۳,۲۰۰,۰۰۰"
              purity="نقره ۹۲۵"
              weight="۲۸ گرم"
              productCode="ASM-ST-3012"
              shortDescription="این ست شامل انگشتر و دستبند هماهنگ با طراحی رویال است. هر دو قطعه از نقره استرلینگ ۹۲۵ ساخته شده و در جعبه هدیه اختصاصی ارسال می‌شود."
              showSizeGuide
              variations={[
                {
                  id: "ring-size",
                  label: "سایز انگشتر",
                  type: "button",
                  options: [
                    { value: "6", label: "۶", available: true },
                    { value: "7", label: "۷", available: true },
                    { value: "8", label: "۸", available: true },
                    { value: "9", label: "۹", available: true },
                  ],
                },
                {
                  id: "bracelet-size",
                  label: "سایز دستبند",
                  type: "button",
                  options: [
                    { value: "16", label: "۱۶ سانتی", available: true },
                    { value: "18", label: "۱۸ سانتی", available: true },
                    { value: "20", label: "۲۰ سانتی", available: true },
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Set includes */}
        <section className="border-t border-border py-8">
          <div className="container">
            <h2 className="text-lg font-bold text-foreground mb-6">اقلام این ست</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                { img: ringImg, name: "انگشتر نقره زنانه رویال", detail: "نقره ۹۲۵ — ۱۲ گرم" },
                { img: braceletImg, name: "دستبند نقره زنانه رویال", detail: "نقره ۹۲۵ — ۱۶ گرم" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-4 bg-secondary/50 rounded-xl p-4 border border-border">
                  <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PDPTabs
          description="ست نقره زنانه رویال، مجموعه‌ای هماهنگ شامل انگشتر و دستبند است. هر دو قطعه از نقره استرلینگ ۹۲۵ با طرح لوکس و مدرن ساخته شده‌اند. این ست بهترین انتخاب برای هدیه دادن یا تکمیل استایل شخصی شماست."
          specs={[
            { label: "ترکیب ست", value: "انگشتر + دستبند" },
            { label: "جنس", value: "نقره استرلینگ ۹۲۵" },
            { label: "وزن کل", value: "۲۸ گرم" },
            { label: "بسته‌بندی", value: "جعبه هدیه اختصاصی" },
            { label: "شناسنامه", value: "دارد — هر قطعه جداگانه" },
          ]}
          careContent="هر قطعه را جداگانه و در کیسه مخصوص نقره نگهداری کنید. از تماس با آب و مواد شیمیایی پرهیز نمایید."
        />

        <PDPTrustBar />

        <PDPFAQ items={[
          { question: "آیا هر قطعه جداگانه هم قابل خرید است؟", answer: "بله، هر قطعه از ست به صورت جداگانه نیز در فروشگاه موجود است." },
          { question: "بسته‌بندی ست‌ها مناسب هدیه است؟", answer: "بله، تمام ست‌ها در جعبه هدیه اختصاصی آسمون با شناسنامه ارسال می‌شوند." },
        ]} />

        <PDPRelated
          title="ست‌های مشابه"
          products={[
            { image: setImg, title: "ست کامل عروس با فیروزه", price: "۵,۸۰۰,۰۰۰", stoneType: "فیروزه", purity: "نقره ۹۲۵" },
            { image: setImg, title: "ست مردانه انگشتر و دستبند", price: "۲,۴۰۰,۰۰۰", purity: "نقره ۹۲۵" },
            { image: setImg, title: "ست هدیه ولنتاین", price: "۲,۱۰۰,۰۰۰", purity: "نقره ۹۲۵", badge: "هدیه" },
            { image: setImg, title: "ست نقره لوکس با عقیق", price: "۴,۵۰۰,۰۰۰", stoneType: "عقیق", purity: "نقره ۹۲۵" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PDPSet;
