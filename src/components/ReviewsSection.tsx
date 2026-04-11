import { Star } from "lucide-react";

const reviews = [
  {
    name: "محمد رضایی",
    rating: 5,
    text: "انگشتر عقیق مردانه‌ای که خریدم واقعاً فوق‌العاده بود. سنگ اصل و کار دست بسیار با کیفیت. بسته‌بندی هم عالی بود.",
    product: "انگشتر عقیق مردانه",
    date: "۲ هفته پیش",
  },
  {
    name: "سارا احمدی",
    rating: 5,
    text: "گردنبند فیروزه‌ای که سفارش دادم خیلی ظریف و شیک بود. ارسال سریع و بسته‌بندی لوکس داشت. حتماً دوباره خرید می‌کنم.",
    product: "گردنبند فیروزه",
    date: "۱ ماه پیش",
  },
  {
    name: "علی محمدی",
    rating: 4,
    text: "سنگ زمردی که خریدم رنگ و شفافیت عالی داشت. مشاوره قبل از خرید هم خیلی کمک‌کننده بود. ممنون از تیم آسمون.",
    product: "سنگ زمرد طبیعی",
    date: "۳ هفته پیش",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-16 md:py-24 surface-warm" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="text-center mb-12">
          <h2 id="reviews-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            نظرات مشتریان
          </h2>
          <p className="text-muted-foreground text-sm">تجربه خریداران واقعی آسمون</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="bg-background rounded-xl p-6 shadow-luxury"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? "text-accent fill-accent" : "text-border"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-4">{review.text}</p>
              <div className="border-t border-border pt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.product}</p>
                </div>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
