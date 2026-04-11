import { Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  stoneType?: string;
  purity?: string;
  badge?: string;
}

const ProductCard = ({ image, title, price, originalPrice, stoneType, purity, badge }: ProductCardProps) => {
  return (
    <article className="group bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          width={400}
          height={400}
        />
        {badge && (
          <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
        <button
          className="absolute top-3 left-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
          aria-label="افزودن به علاقه‌مندی"
        >
          <Heart className="w-4 h-4 text-foreground" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-primary text-primary-foreground text-sm font-medium py-2 rounded-lg hover:bg-primary/90 transition-colors">
            افزودن به سبد
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2 leading-relaxed">
          {title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          {stoneType && (
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">
              {stoneType}
            </span>
          )}
          {purity && (
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">
              {purity}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-primary">{price}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
          )}
          <span className="text-xs text-muted-foreground">تومان</span>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
