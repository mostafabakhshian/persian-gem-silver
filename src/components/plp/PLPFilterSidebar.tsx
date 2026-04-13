import { useState } from "react";
import { X, ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export interface FilterGroup {
  id: string;
  label: string;
  type: "checkbox" | "range" | "color";
  options?: { value: string; label: string; count?: number }[];
  colors?: { value: string; label: string; hex: string }[];
}

interface PLPFilterSidebarProps {
  filters: FilterGroup[];
  activeFilters: Record<string, string[]>;
  onFilterChange: (groupId: string, value: string) => void;
  onClearAll: () => void;
  onClose?: () => void;
  isMobile?: boolean;
}

const PLPFilterSidebar = ({
  filters,
  activeFilters,
  onFilterChange,
  onClearAll,
  onClose,
  isMobile,
}: PLPFilterSidebarProps) => {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const totalActive = Object.values(activeFilters).flat().length;

  const toggleGroup = (id: string) => {
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <aside
      className={`${isMobile ? "fixed inset-0 z-50 bg-background overflow-y-auto" : "sticky top-24"}`}
      aria-label="فیلترها"
    >
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-bold text-foreground">فیلترها</h2>
          {totalActive > 0 && (
            <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
              {totalActive}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {totalActive > 0 && (
            <button
              onClick={onClearAll}
              className="text-xs text-destructive hover:underline"
            >
              حذف همه
            </button>
          )}
          {isMobile && onClose && (
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-secondary" aria-label="بستن فیلترها">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Active filters */}
      {totalActive > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {Object.entries(activeFilters).map(([groupId, values]) =>
            values.map((val) => {
              const group = filters.find((f) => f.id === groupId);
              const option = group?.options?.find((o) => o.value === val) || group?.colors?.find((c) => c.value === val);
              return (
                <button
                  key={`${groupId}-${val}`}
                  onClick={() => onFilterChange(groupId, val)}
                  className="flex items-center gap-1 text-xs bg-secondary text-foreground px-2.5 py-1 rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                >
                  {option?.label || val}
                  <X className="w-3 h-3" />
                </button>
              );
            })
          )}
        </div>
      )}

      {/* Filter groups */}
      <div className="space-y-1">
        {filters.map((group) => {
          const isOpen = !collapsed[group.id];
          return (
            <div key={group.id} className="border-b border-border last:border-0">
              <button
                onClick={() => toggleGroup(group.id)}
                className="flex items-center justify-between w-full py-3.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                aria-expanded={isOpen}
              >
                {group.label}
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {isOpen && (
                <div className="pb-3 space-y-2 animate-fade-in">
                  {group.type === "color" && group.colors ? (
                    <div className="flex flex-wrap gap-2">
                      {group.colors.map((color) => {
                        const isActive = activeFilters[group.id]?.includes(color.value);
                        return (
                          <button
                            key={color.value}
                            onClick={() => onFilterChange(group.id, color.value)}
                            className={`w-8 h-8 rounded-full border-2 transition-all ${isActive ? "border-primary scale-110 ring-2 ring-primary/30" : "border-border hover:border-muted-foreground"}`}
                            style={{ backgroundColor: color.hex }}
                            aria-label={color.label}
                            title={color.label}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    group.options?.map((option) => {
                      const isActive = activeFilters[group.id]?.includes(option.value);
                      return (
                        <label
                          key={option.value}
                          className="flex items-center gap-2.5 cursor-pointer group/filter py-0.5"
                        >
                          <Checkbox
                            checked={isActive}
                            onCheckedChange={() => onFilterChange(group.id, option.value)}
                          />
                          <span className="text-sm text-foreground group-hover/filter:text-primary transition-colors flex-1">
                            {option.label}
                          </span>
                          {option.count !== undefined && (
                            <span className="text-xs text-muted-foreground">{option.count}</span>
                          )}
                        </label>
                      );
                    })
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile apply button */}
      {isMobile && (
        <div className="sticky bottom-0 bg-background border-t border-border p-4 mt-4">
          <Button onClick={onClose} className="w-full" variant="hero">
            مشاهده نتایج
          </Button>
        </div>
      )}
    </aside>
  );
};

export default PLPFilterSidebar;
