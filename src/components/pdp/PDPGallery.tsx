import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, Play } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  type?: "image" | "video";
}

interface PDPGalleryProps {
  images: GalleryImage[];
  badge?: string;
}

const PDPGallery = ({ images, badge }: PDPGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const goNext = () => setActiveIndex((i) => (i + 1) % images.length);
  const goPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-secondary group cursor-zoom-in" onClick={() => setZoomed(!zoomed)}>
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className={`w-full h-full object-cover transition-transform duration-500 ${zoomed ? "scale-150" : "group-hover:scale-105"}`}
        />
        {badge && (
          <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full z-10">
            {badge}
          </span>
        )}
        <button
          className="absolute top-4 left-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors z-10"
          onClick={(e) => { e.stopPropagation(); setZoomed(!zoomed); }}
          aria-label="بزرگ‌نمایی"
        >
          <ZoomIn className="w-4 h-4 text-foreground" />
        </button>

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors opacity-0 group-hover:opacity-100 z-10"
              aria-label="تصویر بعدی"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors opacity-0 group-hover:opacity-100 z-10"
              aria-label="تصویر قبلی"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image counter mobile */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-foreground/60 text-background text-xs px-3 py-1 rounded-full md:hidden">
          {activeIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="hidden md:flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="تصاویر محصول">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              role="tab"
              aria-selected={i === activeIndex}
              className={`relative flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                i === activeIndex ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-muted-foreground"
              }`}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              {img.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/20">
                  <Play className="w-4 h-4 text-background fill-background" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Mobile dots */}
      {images.length > 1 && (
        <div className="flex md:hidden justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-primary w-5" : "bg-border"}`}
              aria-label={`تصویر ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PDPGallery;
