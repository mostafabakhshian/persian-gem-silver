import { Heart, ShoppingBag, Eye, Phone } from "lucide-react";

interface PLPProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  stoneType?: string;
  purity?: string;
  badge?: string;
  discountPercent?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  isOutOfStock?: boolean;
  isInquiryOnly?: boolean;
  isCustom?: boolean;
  gridMode?: "grid" | "list";
}

const PLPProductCard = ({
  image,
  title,
  price,
  originalPrice,
  stoneType,
  purity,
  badge,
  discountPercent,
  isNew,
  isBestseller,
  isOutOfStock,
  isInquiryOnly,
  isCustom,
  gridMode = "grid",
}: PLPProductCardProps) => {
  if (gridMode === "list") {
    return (
      <article className="group flex gap-4 bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 p-3">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
          {discountPercent && (
            <span className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
              {discountPercent}٪-
            </span>
          )}
        </div>
        <div className="flex flex-col justify-between flex-1 py-1">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2 leading-relaxed">{title}</h3>
            <div className="flex items-center gap-2 mb-2">
              {stoneType && <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">{stoneType}</span>}
              {purity && <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">{purity}</span>}
              {isNew && <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-md font-medium">جدید</span>}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {isInquiryOnly ? (
                <span className="text-sm font-bold text-accent">استعلام قیمت</span>
              ) : (
                <>
                  <span className="text-base font-bold text-primary">{price}</span>
                  {originalPrice && <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>}
                  <span className="text-xs text-muted-foreground">تومان</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="علاقه‌مندی">
                <Heart className="w-4 h-4 text-foreground" />
              </button>
              {isInquiryOnly ? (
                <button className="p-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors" aria-label="تماس">
                  <Phone className="w-4 h-4 text-accent" />
                </button>
              ) : (
                <button className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors" aria-label="افزودن به سبد">
                  <ShoppingBag className="w-4 h-4 text-primary" />
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${isOutOfStock ? "opacity-60" : ""}`}
          loading="lazy"
          width={400}
          height={400}
        />
        {/* Badges top-right */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1">
          {discountPercent && (
            <span className="bg-destructive text-destructive-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              {discountPercent}٪-
            </span>
          )}
          {badge && (
            <span className="bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              {badge}
            </span>
          )}
          {isNew && (
            <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              جدید
            </span>
          )}
          {isBestseller && (
            <span className="bg-foreground text-background text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              پرفروش
            </span>
          )}
          {isCustom && (
            <span className="bg-accent/90 text-accent-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              سفارشی
            </span>
          )}
        </div>

        {/* Wishlist top-left */}
        <button
          className="absolute top-2.5 left-2.5 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
          aria-label="افزودن به علاقه‌مندی"
        >
          <Heart className="w-4 h-4 text-foreground" />
        </button>

        {/* Out of stock overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/40">
            <span className="text-sm font-bold text-foreground bg-background/90 px-4 py-1.5 rounded-full">ناموجود</span>
          </div>
        )}

        {/* Hover actions */}
        {!isOutOfStock && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex gap-2">
              {isInquiryOnly ? (
                <button className="flex-1 flex items-center justify-center gap-1.5 bg-accent text-accent-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-accent/90 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  استعلام قیمت
                </button>
              ) : (
                <button className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-primary-foreground text-sm font-medium py-2.5 rounded-lg hover:bg-primary/90 transition-colors">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  افزودن به سبد
                </button>
              )}
              <button className="p-2.5 bg-background/90 rounded-lg hover:bg-background transition-colors" aria-label="مشاهده سریع">
                <Eye className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 leading-relaxed">{title}</h3>
        <div className="flex items-center gap-1.5 mb-2.5 flex-wrap">
          {stoneType && (
            <span className="text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">{stoneType}</span>
          )}
          {purity && (
            <span className="text-[11px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">{purity}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isInquiryOnly ? (
            <span className="text-sm font-bold text-accent">تماس بگیرید</span>
          ) : (
            <>
              <span className="text-base font-bold text-primary">{price}</span>
              {originalPrice && (
                <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
              )}
              <span className="text-xs text-muted-foreground">تومان</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

export default PLPProductCard;
