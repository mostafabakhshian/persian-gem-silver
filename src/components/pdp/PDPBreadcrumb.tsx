import { ChevronLeft } from "lucide-react";

interface PDPBreadcrumbProps {
  items: { label: string; href: string }[];
}

const PDPBreadcrumb = ({ items }: PDPBreadcrumbProps) => {
  return (
    <nav aria-label="مسیر محصول" className="container py-4">
      <ol className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronLeft className="w-3 h-3" />}
            {i === items.length - 1 ? (
              <span className="text-foreground font-medium line-clamp-1">{item.label}</span>
            ) : (
              <a href={item.href} className="hover:text-primary transition-colors whitespace-nowrap">{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default PDPBreadcrumb;
