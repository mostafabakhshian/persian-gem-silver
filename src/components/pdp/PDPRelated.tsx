import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";

interface RelatedProduct {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  stoneType?: string;
  purity?: string;
  badge?: string;
  href?: string;
}

interface PDPRelatedProps {
  title: string;
  subtitle?: string;
  products: RelatedProduct[];
}

const PDPRelated = ({ title, subtitle, products }: PDPRelatedProps) => {
  if (products.length === 0) return null;

  return (
    <section className="py-10 md:py-14 border-t border-border">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-foreground">{title}</h2>
          {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard
              key={i}
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              stoneType={product.stoneType}
              purity={product.purity}
              badge={product.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PDPRelated;
