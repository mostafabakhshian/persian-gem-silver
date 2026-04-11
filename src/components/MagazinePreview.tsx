import gemstonesImg from "@/assets/gemstones-collection.jpg";
import braceletImg from "@/assets/bracelet.jpg";
import necklaceImg from "@/assets/necklace.jpg";

const articles = [
  {
    image: gemstonesImg,
    title: "سنگ عقیق چیست؟ راهنمای کامل خواص و شناخت",
    category: "آموزشی",
    date: "۱۴۰۴/۰۱/۱۵",
  },
  {
    image: braceletImg,
    title: "چطور سایز دستبند مناسب خود را پیدا کنیم؟",
    category: "راهنما",
    date: "۱۴۰۴/۰۱/۱۰",
  },
  {
    image: necklaceImg,
    title: "۵ نکته مهم برای نگهداری از جواهرات نقره",
    category: "مراقبت",
    date: "۱۴۰۴/۰۱/۰۵",
  },
];

const MagazinePreview = () => {
  return (
    <section className="py-16 md:py-24" aria-labelledby="magazine-heading">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 id="magazine-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              مجله آسمون
            </h2>
            <p className="text-muted-foreground text-sm">دانستنی‌ها و راهنمای سنگ و جواهر</p>
          </div>
          <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            مشاهده همه ←
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#"
              className="group bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={600}
                  height={375}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-relaxed group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagazinePreview;
