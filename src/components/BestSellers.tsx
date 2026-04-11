import ProductCard from "./ProductCard";
import mensRingImg from "@/assets/mens-ring.jpg";
import womensRingImg from "@/assets/womens-ring.jpg";
import braceletImg from "@/assets/bracelet.jpg";
import necklaceImg from "@/assets/necklace.jpg";

const products = [
  {
    image: mensRingImg,
    title: "انگشتر نقره مردانه با سنگ عقیق سیاه اصل",
    price: "۱,۸۵۰,۰۰۰",
    originalPrice: "۲,۲۰۰,۰۰۰",
    stoneType: "عقیق",
    purity: "نقره ۹۲۵",
    badge: "پرفروش",
  },
  {
    image: womensRingImg,
    title: "انگشتر ظریف زنانه با فیروزه نیشابوری",
    price: "۱,۴۵۰,۰۰۰",
    stoneType: "فیروزه",
    purity: "نقره ۹۲۵",
  },
  {
    image: braceletImg,
    title: "دستبند نقره زنانه با نگین‌های آبی",
    price: "۲,۱۰۰,۰۰۰",
    stoneType: "توپاز",
    purity: "نقره ۹۲۵",
    badge: "جدید",
  },
  {
    image: necklaceImg,
    title: "گردنبند آویز نقره با مروارید اصل",
    price: "۱,۹۵۰,۰۰۰",
    stoneType: "مروارید",
    purity: "نقره ۹۲۵",
  },
];

const BestSellers = () => {
  return (
    <section className="py-16 md:py-24 surface-warm" aria-labelledby="bestsellers-heading">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 id="bestsellers-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              پرفروش‌ترین‌ها
            </h2>
            <p className="text-muted-foreground text-sm">محبوب‌ترین انتخاب‌های مشتریان ما</p>
          </div>
          <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            مشاهده همه ←
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
