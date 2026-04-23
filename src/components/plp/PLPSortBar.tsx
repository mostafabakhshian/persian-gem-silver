import { ArrowUpDown, LayoutGrid, List, SlidersHorizontal } from "lucide-react";

interface PLPSortBarProps {
  totalProducts: number;
  sortValue: string;
  onSortChange: (value: string) => void;
  gridMode: "grid" | "list";
  onGridModeChange: (mode: "grid" | "list") => void;
  onOpenFilters?: () => void;
}

const sortOptions = [
  { value: "recommended", label: "پیشنهاد ما" },
  { value: "newest", label: "جدیدترین" },
  { value: "bestselling", label: "پرفروش‌ترین" },
  { value: "price-asc", label: "ارزان‌ترین" },
  { value: "price-desc", label: "گران‌ترین" },
  { value: "discount", label: "بیشترین تخفیف" },
];

const PLPSortBar = ({
  totalProducts,
  sortValue,
  onSortChange,
  gridMode,
  onGridModeChange,
  onOpenFilters,
}: PLPSortBarProps) => {
  return (
    <div className="flex items-center justify-between gap-3 py-3 px-1 border-b border-border mb-6">
      <div className="flex items-center gap-3">
        {/* Mobile filter trigger */}
        {onOpenFilters && (
          <button
            onClick={onOpenFilters}
            className="lg:hidden flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-lg border border-border"
          >
            <SlidersHorizontal className="w-4 h-4" />
            فیلتر
          </button>
        )}

        {/* Sort */}
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-4 h-4 text-muted-foreground hidden sm:block" />
          <select
            value={sortValue}
            onChange={(e) => onSortChange(e.target.value)}
            className="text-sm font-medium text-foreground bg-transparent border-none focus:outline-none focus:ring-0 cursor-pointer appearance-none pl-5 pr-1"
            aria-label="مرتب‌سازی"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground hidden sm:block">
          {totalProducts} محصول
        </span>
        {/* Grid mode toggle */}
        <div className="hidden md:flex items-center border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => onGridModeChange("grid")}
            className={`p-2 transition-colors ${gridMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            aria-label="نمایش شبکه‌ای"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onGridModeChange("list")}
            className={`p-2 transition-colors ${gridMode === "list" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            aria-label="نمایش لیستی"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PLPSortBar;
