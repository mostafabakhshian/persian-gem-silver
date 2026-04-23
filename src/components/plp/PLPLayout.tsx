import { useState, useCallback } from "react";
import PLPHero from "./PLPHero";
import PLPFilterSidebar, { type FilterGroup } from "./PLPFilterSidebar";
import PLPSortBar from "./PLPSortBar";
import PLPProductCard from "./PLPProductCard";
import PLPCategoryFAQ from "./PLPCategoryFAQ";

interface Product {
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
}

interface PLPLayoutProps {
  heroTitle: string;
  heroDescription: string;
  heroBreadcrumbs: { label: string; href: string }[];
  heroImage?: string;
  heroSubcategories?: { label: string; href: string; count?: number }[];
  heroAccentBadge?: string;
  filters: FilterGroup[];
  products: Product[];
  totalProducts: number;
  faqTitle?: string;
  faqItems?: { question: string; answer: string }[];
  categoryDescription?: string;
  merchandisingSlot?: React.ReactNode;
  afterGridSlot?: React.ReactNode;
  relatedCategories?: { label: string; href: string; image?: string }[];
}

const PLPLayout = ({
  heroTitle,
  heroDescription,
  heroBreadcrumbs,
  heroImage,
  heroSubcategories,
  heroAccentBadge,
  filters,
  products,
  totalProducts,
  faqTitle,
  faqItems,
  categoryDescription,
  merchandisingSlot,
  afterGridSlot,
  relatedCategories,
}: PLPLayoutProps) => {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [sortValue, setSortValue] = useState("recommended");
  const [gridMode, setGridMode] = useState<"grid" | "list">("grid");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleFilterChange = useCallback((groupId: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[groupId] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [groupId]: updated.length > 0 ? updated : [] };
    });
  }, []);

  const handleClearAll = useCallback(() => {
    setActiveFilters({});
  }, []);

  return (
    <>
      <PLPHero
        title={heroTitle}
        description={heroDescription}
        breadcrumbs={heroBreadcrumbs}
        image={heroImage}
        subcategories={heroSubcategories}
        accentBadge={heroAccentBadge}
      />

      <div className="container py-6 md:py-10">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <PLPFilterSidebar
              filters={filters}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAll}
            />
            {/* Merchandising in sidebar */}
            {merchandisingSlot && (
              <div className="mt-6 space-y-4">{merchandisingSlot}</div>
            )}
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <PLPSortBar
              totalProducts={totalProducts}
              sortValue={sortValue}
              onSortChange={setSortValue}
              gridMode={gridMode}
              onGridModeChange={setGridMode}
              onOpenFilters={() => setMobileFiltersOpen(true)}
            />

            {/* Product grid */}
            <div
              className={
                gridMode === "grid"
                  ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5"
                  : "flex flex-col gap-4"
              }
            >
              {products.map((product, i) => (
                <PLPProductCard key={i} {...product} gridMode={gridMode} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-10">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                    page === 1
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 h-10 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                بعدی ←
              </button>
            </div>

            {afterGridSlot}
          </div>
        </div>

        {/* Related categories */}
        {relatedCategories && relatedCategories.length > 0 && (
          <section className="mt-12 pt-8 border-t border-border">
            <h2 className="text-lg font-bold text-foreground mb-5">دسته‌بندی‌های مرتبط</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {relatedCategories.map((cat) => (
                <a
                  key={cat.label}
                  href={cat.href}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-luxury transition-all duration-300 group"
                >
                  {cat.image && (
                    <img src={cat.image} alt={cat.label} className="w-16 h-16 rounded-full object-cover" />
                  )}
                  <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors text-center">
                    {cat.label}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* FAQ / SEO section */}
      {faqItems && faqTitle && (
        <PLPCategoryFAQ
          title={faqTitle}
          items={faqItems}
          categoryDescription={categoryDescription}
        />
      )}

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-background shadow-luxury-hover overflow-y-auto p-5 animate-fade-in">
            <PLPFilterSidebar
              filters={filters}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearAll={handleClearAll}
              onClose={() => setMobileFiltersOpen(false)}
              isMobile
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PLPLayout;
