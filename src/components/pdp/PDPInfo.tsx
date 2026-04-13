import { useState } from "react";
import { Heart, ShoppingBag, Phone, Bell, Sparkles, Ruler, Shield, Truck, Package, RotateCcw, Award, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Variation {
  label: string;
  value: string;
  available?: boolean;
  swatch?: string; // hex for color swatches
}

interface VariationGroup {
  id: string;
  label: string;
  type: "button" | "swatch" | "dropdown";
  options: Variation[];
}

interface PDPInfoProps {
  title: string;
  subtitle?: string;
  collectionName?: string;
  price: string;
  originalPrice?: string;
  discountPercent?: number;
  purity?: string;
  stoneType?: string;
  weight?: string;
  shortDescription?: string;
  variations?: VariationGroup[];
  inStock?: boolean;
  isInquiryOnly?: boolean;
  isCustom?: boolean;
  showSizeGuide?: boolean;
  productCode?: string;
}

const PDPInfo = ({
  title,
  subtitle,
  collectionName,
  price,
  originalPrice,
  discountPercent,
  purity,
  stoneType,
  weight,
  shortDescription,
  variations,
  inStock = true,
  isInquiryOnly = false,
  isCustom = false,
  showSizeGuide = false,
  productCode,
}: PDPInfoProps) => {
  const [selectedVariations, setSelectedVariations] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const handleVariationSelect = (groupId: string, value: string) => {
    setSelectedVariations((prev) => ({ ...prev, [groupId]: value }));
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Collection / subtitle */}
      {collectionName && (
        <span className="text-xs font-semibold text-accent tracking-wide">{collectionName}</span>
      )}

      {/* Title */}
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-relaxed">{title}</h1>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>

      {/* Key attributes */}
      <div className="flex flex-wrap gap-2">
        {purity && (
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
            <Award className="w-3 h-3" /> {purity}
          </span>
        )}
        {stoneType && (
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-accent/10 text-accent px-3 py-1.5 rounded-full">
            <Sparkles className="w-3 h-3" /> {stoneType}
          </span>
        )}
        {weight && (
          <span className="text-xs font-medium bg-secondary text-muted-foreground px-3 py-1.5 rounded-full">{weight}</span>
        )}
        {productCode && (
          <span className="text-xs text-muted-foreground">کد: {productCode}</span>
        )}
      </div>

      {/* Price */}
      <div className="flex items-end gap-3 py-2 border-b border-border">
        {isInquiryOnly ? (
          <div>
            <span className="text-lg font-bold text-accent">استعلام قیمت</span>
            <p className="text-xs text-muted-foreground mt-1">قیمت بر اساس نرخ روز — تماس بگیرید</p>
          </div>
        ) : (
          <>
            <span className="text-2xl md:text-3xl font-bold text-primary">{price}</span>
            <span className="text-sm text-muted-foreground mb-1">تومان</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through mb-1">{originalPrice}</span>
            )}
            {discountPercent && (
              <span className="text-xs font-bold bg-destructive text-destructive-foreground px-2 py-0.5 rounded-full mb-1">
                {discountPercent}٪ تخفیف
              </span>
            )}
          </>
        )}
      </div>

      {/* Short description */}
      {shortDescription && (
        <p className="text-sm text-muted-foreground leading-relaxed">{shortDescription}</p>
      )}

      {/* Variations */}
      {variations && variations.map((group) => (
        <div key={group.id} className="space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-foreground">{group.label}</label>
            {group.id === "size" && showSizeGuide && (
              <button className="inline-flex items-center gap-1 text-xs text-primary hover:underline underline-offset-4">
                <Ruler className="w-3 h-3" /> راهنمای سایز
              </button>
            )}
          </div>

          {group.type === "swatch" ? (
            <div className="flex flex-wrap gap-2">
              {group.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => opt.available !== false && handleVariationSelect(group.id, opt.value)}
                  disabled={opt.available === false}
                  className={`w-9 h-9 rounded-full border-2 transition-all relative ${
                    selectedVariations[group.id] === opt.value
                      ? "border-primary ring-2 ring-primary/30 scale-110"
                      : opt.available === false
                      ? "border-border opacity-40 cursor-not-allowed"
                      : "border-border hover:border-muted-foreground"
                  }`}
                  style={{ backgroundColor: opt.swatch }}
                  title={opt.label}
                  aria-label={`${group.label}: ${opt.label}`}
                >
                  {opt.available === false && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-destructive rotate-45 rounded" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          ) : group.type === "dropdown" ? (
            <select
              value={selectedVariations[group.id] || ""}
              onChange={(e) => handleVariationSelect(group.id, e.target.value)}
              className="w-full h-11 rounded-lg border border-border bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label={group.label}
            >
              <option value="">انتخاب کنید</option>
              {group.options.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.available === false}>
                  {opt.label} {opt.available === false ? "(ناموجود)" : ""}
                </option>
              ))}
            </select>
          ) : (
            <div className="flex flex-wrap gap-2">
              {group.options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => opt.available !== false && handleVariationSelect(group.id, opt.value)}
                  disabled={opt.available === false}
                  className={`min-w-[3rem] px-4 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                    selectedVariations[group.id] === opt.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : opt.available === false
                      ? "bg-secondary text-muted-foreground border-border opacity-50 cursor-not-allowed line-through"
                      : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                  aria-label={`${group.label}: ${opt.label}`}
                  aria-pressed={selectedVariations[group.id] === opt.value}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Quantity + CTA */}
      <div className="flex flex-col gap-3 pt-2">
        {!isInquiryOnly && !isCustom && inStock && (
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-foreground">تعداد:</span>
            <div className="flex items-center border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors text-lg"
                aria-label="کاهش"
              >−</button>
              <span className="w-10 h-10 flex items-center justify-center text-sm font-semibold border-x border-border">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center hover:bg-secondary transition-colors text-lg"
                aria-label="افزایش"
              >+</button>
            </div>
          </div>
        )}

        {/* Primary CTA */}
        <div className="flex gap-2">
          {isInquiryOnly ? (
            <>
              <Button variant="hero" className="flex-1 gap-2">
                <Phone className="w-4 h-4" /> استعلام قیمت
              </Button>
              <Button variant="hero-outline" className="gap-2">
                <MessageCircle className="w-4 h-4" /> مشاوره
              </Button>
            </>
          ) : isCustom ? (
            <>
              <Button variant="hero" className="flex-1 gap-2">
                <Sparkles className="w-4 h-4" /> ثبت درخواست سفارشی
              </Button>
              <Button variant="hero-outline" className="gap-2">
                <MessageCircle className="w-4 h-4" /> مشاوره
              </Button>
            </>
          ) : inStock ? (
            <>
              <Button variant="hero" className="flex-1 gap-2">
                <ShoppingBag className="w-4 h-4" /> افزودن به سبد خرید
              </Button>
            </>
          ) : (
            <Button variant="hero-outline" className="flex-1 gap-2">
              <Bell className="w-4 h-4" /> اطلاع از موجود شدن
            </Button>
          )}

          <button
            onClick={() => setWishlisted(!wishlisted)}
            className={`w-12 h-12 flex items-center justify-center rounded-lg border transition-all ${
              wishlisted ? "bg-destructive/10 border-destructive text-destructive" : "border-border hover:border-primary text-foreground"
            }`}
            aria-label={wishlisted ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"}
            aria-pressed={wishlisted}
          >
            <Heart className={`w-5 h-5 ${wishlisted ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Stock state */}
        {!inStock && !isInquiryOnly && (
          <p className="text-xs text-destructive font-medium">این محصول در حال حاضر ناموجود است</p>
        )}
      </div>

      {/* Trust strip */}
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
        {[
          { icon: Shield, text: "ضمانت اصالت کالا" },
          { icon: Truck, text: "ارسال سریع و مطمئن" },
          { icon: Package, text: "بسته‌بندی هدیه اختصاصی" },
          { icon: RotateCcw, text: "۷ روز ضمانت بازگشت" },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-2">
            <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="text-[11px] text-muted-foreground leading-tight">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDPInfo;
