import mensRingImg from "@/assets/mens-ring.jpg";
import womensRingImg from "@/assets/womens-ring.jpg";
import braceletImg from "@/assets/bracelet.jpg";
import necklaceImg from "@/assets/necklace.jpg";
import gemstonesImg from "@/assets/gemstones-collection.jpg";
import giftImg from "@/assets/gift-box.jpg";

const categories = [
  { title: "انگشتر مردانه", image: mensRingImg, count: "۱۲۰+ محصول" },
  { title: "انگشتر زنانه", image: womensRingImg, count: "۹۵+ محصول" },
  { title: "دستبند", image: braceletImg, count: "۶۰+ محصول" },
  { title: "گردنبند", image: necklaceImg, count: "۴۵+ محصول" },
  { title: "سنگ‌های طبیعی", image: gemstonesImg, count: "۲۰۰+ محصول" },
  { title: "هدیه", image: giftImg, count: "مجموعه ویژه" },
];

const CategoryDiscovery = () => {
  return (
    <section className="py-16 md:py-24" aria-labelledby="categories-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="categories-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            دسته‌بندی محصولات
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            مجموعه‌ای کامل از جواهرات نقره و سنگ‌های قیمتی اصل
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#"
              className="group relative rounded-xl overflow-hidden aspect-square shadow-luxury hover:shadow-luxury-hover transition-all duration-500"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-4">
                <h3 className="text-primary-foreground text-sm md:text-base font-semibold mb-1">
                  {cat.title}
                </h3>
                <p className="text-primary-foreground/70 text-xs">{cat.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryDiscovery;
