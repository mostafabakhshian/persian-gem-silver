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
import ringImg from "@/assets/mens-ring.jpg";
import womenRingImg from "@/assets/womens-ring.jpg";

const PDPRing = () => {
  return (
    <div className="min-h-screen" dir="rtl" lang="fa">
      <AnnouncementBar />
      <Header />
      <main>
        <PDPBreadcrumb items={[
          { label: "خانه", href: "/" },
          { label: "انگشتر نقره", href: "/rings" },
          { label: "انگشتر مردانه", href: "/rings" },
          { label: "انگشتر نقره مردانه طرح شاهین با عقیق یمنی", href: "#" },
        ]} />

        {/* Above the fold */}
        <section className="container pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <PDPGallery
              badge="پرفروش"
              images={[
                { src: ringImg, alt: "انگشتر نقره مردانه طرح شاهین — نمای روبرو" },
                { src: ringImg, alt: "انگشتر نقره مردانه — نمای سنگ عقیق" },
                { src: ringImg, alt: "انگشتر نقره مردانه — نمای کناری" },
                { src: ringImg, alt: "انگشتر نقره مردانه — روی دست" },
                { src: ringImg, alt: "بسته‌بندی اختصاصی", type: "image" },
              ]}
            />
            <PDPInfo
              title="انگشتر نقره مردانه طرح شاهین با عقیق یمنی"
              subtitle="طرح کلاسیک با نگین عقیق اصل یمن — ساخت دست استادکاران"
              collectionName="کلکسیون شاهین"
              price="۱,۸۵۰,۰۰۰"
              originalPrice="۲,۲۰۰,۰۰۰"
              discountPercent={16}
              purity="نقره ۹۲۵"
              stoneType="عقیق یمنی"
              weight="۱۲.۵ گرم"
              productCode="ASM-MR-1024"
              shortDescription="این انگشتر با نقره استرلینگ ۹۲۵ و نگین عقیق طبیعی یمنی ساخته شده. طرح شاهین یکی از محبوب‌ترین طرح‌های مردانه است که ترکیبی از قدرت و ظرافت را به نمایش می‌گذارد."
              showSizeGuide
              variations={[
                {
                  id: "size",
                  label: "سایز انگشتر",
                  type: "button",
                  options: [
                    { value: "8", label: "۸", available: true },
                    { value: "9", label: "۹", available: true },
                    { value: "10", label: "۱۰", available: true },
                    { value: "11", label: "۱۱", available: true },
                    { value: "12", label: "۱۲", available: false },
                    { value: "13", label: "۱۳", available: true },
                  ],
                },
                {
                  id: "finish",
                  label: "نوع پرداخت",
                  type: "button",
                  options: [
                    { value: "polished", label: "براق", available: true },
                    { value: "matte", label: "مات", available: true },
                    { value: "antique", label: "آنتیک", available: true },
                  ],
                },
              ]}
            />
          </div>
        </section>

        <PDPTabs
          description={`انگشتر نقره مردانه طرح شاهین یکی از شاهکارهای مجموعه آسمون است. این انگشتر با دقت و ظرافت بالا توسط استادکاران ماهر ساخته شده و از نقره استرلینگ ۹۲۵ با بالاترین کیفیت استفاده شده است.\n\nنگین عقیق یمنی بکار رفته در این انگشتر، ۱۰۰٪ طبیعی و دارای شناسنامه اصالت است. عقیق یمنی به دلیل رنگ عمیق و زیبایی منحصربفرد، یکی از محبوب‌ترین سنگ‌های نیمه‌قیمتی در جواهرات ایرانی است.\n\nاین انگشتر مناسب استفاده روزمره و مجالس رسمی بوده و با مراقبت مناسب، سال‌ها درخشندگی خود را حفظ خواهد کرد.`}
          specs={[
            { label: "جنس بدنه", value: "نقره استرلینگ ۹۲۵" },
            { label: "نوع سنگ", value: "عقیق طبیعی یمنی" },
            { label: "وزن تقریبی", value: "۱۲.۵ گرم" },
            { label: "رنگ سنگ", value: "قرمز عمیق" },
            { label: "نوع تراش سنگ", value: "کابوشن بیضی" },
            { label: "پرداخت", value: "براق / مات / آنتیک" },
            { label: "سایزهای موجود", value: "۸ تا ۱۳" },
            { label: "ساخت", value: "دست‌ساز — استادکار ایرانی" },
            { label: "شناسنامه", value: "دارد" },
          ]}
          storyTitle="داستان طرح شاهین"
          storyContent="طرح شاهین الهام گرفته از نقوش باستانی ایرانی است. شاهین نماد قدرت، شجاعت و آزادگی در فرهنگ ایرانی است. هر انگشتر شاهین توسط استادکاران با تجربه و با دقت بالا، به صورت دست‌ساز تولید می‌شود. از انتخاب سنگ تا حکاکی نهایی، هر مرحله با نظارت کامل کیفی انجام می‌گیرد."
          careContent="برای حفظ درخشندگی انگشتر، آن را دور از رطوبت و مواد شیمیایی نگهداری کنید. پس از استفاده، با پارچه نرم و خشک تمیز کنید. از تماس با عطر، لوسیون و مواد شوینده پرهیز کنید. برای نگهداری طولانی مدت، انگشتر را در کیسه مخصوص نقره قرار دهید."
          sizeGuideContent="برای اندازه‌گیری سایز انگشتر، یک نخ را دور انگشت مورد نظر بپیچید و طول آن را اندازه بگیرید. سپس با جدول سایز مقایسه کنید:\n\nسایز ۸: محیط ۵۷.۱ میلی‌متر\nسایز ۹: محیط ۵۹.۵ میلی‌متر\nسایز ۱۰: محیط ۶۲.۱ میلی‌متر\nسایز ۱۱: محیط ۶۴.۶ میلی‌متر\nسایز ۱۲: محیط ۶۶.۶ میلی‌متر\nسایز ۱۳: محیط ۶۹.۱ میلی‌متر\n\nنکته: اگر بین دو سایز هستید، سایز بزرگ‌تر را انتخاب کنید."
        />

        <PDPTrustBar />

        <PDPBespokePrompt productType="انگشتر" />

        <PDPFAQ items={[
          { question: "آیا سنگ عقیق این انگشتر طبیعی است؟", answer: "بله، تمام سنگ‌های عقیق استفاده شده ۱۰۰٪ طبیعی و دارای شناسنامه اصالت هستند." },
          { question: "آیا امکان تعویض سنگ وجود دارد؟", answer: "بله، می‌توانید این انگشتر را با سنگ دلخواه (فیروزه، یاقوت، زمرد و...) سفارش دهید." },
          { question: "آیا انگشتر سیاه نمی‌شود؟", answer: "نقره ۹۲۵ با مراقبت مناسب درخشندگی خود را حفظ می‌کند. در صورت تیرگی خفیف با پارچه مخصوص به راحتی تمیز می‌شود." },
        ]} />

        <PDPRelated
          title="محصولات مرتبط"
          subtitle="این محصولات را هم ببینید"
          products={[
            { image: ringImg, title: "انگشتر نقره مردانه با فیروزه نیشابوری", price: "۲,۱۰۰,۰۰۰", stoneType: "فیروزه", purity: "نقره ۹۲۵" },
            { image: womenRingImg, title: "انگشتر نقره زنانه ظریف با عقیق", price: "۱,۲۰۰,۰۰۰", stoneType: "عقیق", purity: "نقره ۹۲۵" },
            { image: ringImg, title: "انگشتر نقره مردانه ساده سنگین‌وزن", price: "۹۸۰,۰۰۰", purity: "نقره ۹۹۰" },
            { image: ringImg, title: "انگشتر نقره مردانه با یاقوت سرخ", price: "۲,۴۵۰,۰۰۰", stoneType: "یاقوت", purity: "نقره ۹۲۵", badge: "جدید" },
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PDPRing;
