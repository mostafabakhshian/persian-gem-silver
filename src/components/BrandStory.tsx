import heroImg from "@/assets/hero-ring.jpg";

const BrandStory = () => {
  return (
    <section className="py-16 md:py-24" aria-labelledby="about-heading">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={heroImg}
              alt="کارگاه ساخت جواهرات آسمون"
              className="rounded-2xl shadow-luxury w-full aspect-[4/3] object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
          <div>
            <h2 id="about-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              درباره آسمون
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              آسمون با بیش از یک دهه تجربه در حوزه جواهرات نقره و سنگ‌های قیمتی، 
              مجموعه‌ای منتخب از زیباترین محصولات دست‌ساز و سنگ‌های اصیل را به شما ارائه می‌دهد.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              ما معتقدیم هر قطعه جواهر باید داستانی داشته باشد. از انتخاب سنگ تا ساخت نهایی، 
              هر مرحله با دقت و عشق انجام می‌شود تا محصولی شایسته شما تقدیم شود.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">+۱۰</p>
                <p className="text-xs text-muted-foreground mt-1">سال تجربه</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">+۵۰۰۰</p>
                <p className="text-xs text-muted-foreground mt-1">مشتری راضی</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">+۲۰۰</p>
                <p className="text-xs text-muted-foreground mt-1">نوع سنگ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
