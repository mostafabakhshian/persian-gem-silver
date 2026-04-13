import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "انگشتر نقره", href: "/rings" },
  { label: "دستبند", href: "/bracelets" },
  { label: "ست نقره", href: "/silver-sets" },
  { label: "سنگ‌های قیمتی", href: "/gemstones" },
  { label: "شمش نقره", href: "/bullion" },
  { label: "جدیدترین‌ها", href: "#" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container">
        {/* Main header row */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Right: Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
              آسمون
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">جواهرات نقره و سنگ</span>
          </a>

          {/* Center: Search bar (desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="جستجوی محصول، سنگ، انگشتر..."
                className="w-full h-11 pr-4 pl-11 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                aria-label="جستجو"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          {/* Left: Actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="جستجو"
            >
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 rounded-lg hover:bg-secondary transition-colors hidden sm:flex" aria-label="علاقه‌مندی‌ها">
              <Heart className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="حساب کاربری">
              <User className="w-5 h-5 text-foreground" />
            </button>
            <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors" aria-label="سبد خرید">
              <ShoppingBag className="w-5 h-5 text-foreground" />
              <span className="absolute -top-0.5 -left-0.5 w-5 h-5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                ۲
              </span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="منو"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 pb-3 -mt-1" aria-label="منوی اصلی">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary rounded-md hover:bg-secondary transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="px-4 py-2 text-sm font-medium text-accent hover:text-accent/80 rounded-md transition-all duration-200"
          >
            🎁 هدیه
          </a>
        </nav>

        {/* Mobile search */}
        {searchOpen && (
          <div className="md:hidden pb-3 animate-fade-in">
            <input
              type="text"
              placeholder="جستجوی محصول..."
              className="w-full h-11 pr-4 pl-11 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              autoFocus
              aria-label="جستجو"
            />
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 animate-fade-in border-t border-border pt-3" aria-label="منوی موبایل">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a href="#" className="px-4 py-3 text-sm font-medium text-accent rounded-lg">
                🎁 هدیه
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
