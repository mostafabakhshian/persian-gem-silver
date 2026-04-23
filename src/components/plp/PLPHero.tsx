import { ChevronLeft } from "lucide-react";

interface PLPHeroProps {
  title: string;
  description: string;
  breadcrumbs: { label: string; href: string }[];
  image?: string;
  subcategories?: { label: string; href: string; count?: number }[];
  accentBadge?: string;
}

const PLPHero = ({ title, description, breadcrumbs, image, subcategories, accentBadge }: PLPHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-secondary/50">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="w-full h-full object-cover opacity-10" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/95 to-background/80" />
        </div>
      )}
      <div className="container relative py-8 md:py-12">
        {/* Breadcrumb */}
        <nav aria-label="مسیر دسته‌بندی" className="mb-4">
          <ol className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronLeft className="w-3 h-3" />}
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                ) : (
                  <a href={crumb.href} className="hover:text-primary transition-colors">{crumb.label}</a>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            {accentBadge && (
              <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                {accentBadge}
              </span>
            )}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">{title}</h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Subcategory pills */}
        {subcategories && subcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {subcategories.map((sub) => (
              <a
                key={sub.label}
                href={sub.href}
                className="px-4 py-2 text-xs font-medium rounded-full border border-border bg-background hover:border-primary hover:text-primary transition-all duration-200"
              >
                {sub.label}
                {sub.count !== undefined && (
                  <span className="mr-1 text-muted-foreground">({sub.count})</span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PLPHero;
