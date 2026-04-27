## هدف

تبدیل کامل سایت React فعلی به یک **قالب کلاسیک PHP وردپرس** با پشتیبانی کامل **WooCommerce**، شامل صفحه اصلی (۲۰ سکشن)، صفحات لیست محصولات (PLP) و صفحه جزئیات محصول (PDP) — کاملاً RTL، با ظاهر یکسان با نسخه React.

خروجی نهایی به‌صورت یک پوشه‌ی قابل ZIP در `wordpress-theme/persian-gem-silver/` تحویل داده می‌شود که می‌توانید مستقیماً در هر وردپرسی نصب کنید.

---

## معماری قالب

```text
wordpress-theme/persian-gem-silver/
├── style.css                      (هدر تم + استایل پایه)
├── functions.php                  (setup + enqueue + ACF fallback)
├── header.php / footer.php
├── front-page.php                 (لود تمام ۲۰ سکشن صفحه اصلی)
├── page.php / single.php / index.php / 404.php / searchform.php
│
├── woocommerce/                   (override کامل ووکامرس)
│   ├── archive-product.php        (PLP)
│   ├── single-product.php         (PDP)
│   ├── content-product.php        (کارت محصول)
│   ├── cart/cart.php
│   ├── checkout/form-checkout.php
│   └── ... (sidebar, sort, pagination)
│
├── template-parts/
│   ├── home/
│   │   ├── announcement.php
│   │   ├── hero.php
│   │   ├── category-discovery.php
│   │   ├── signature-ring.php
│   │   ├── best-sellers.php
│   │   ├── bracelet.php
│   │   ├── silver-set.php
│   │   ├── spotlight.php
│   │   ├── gemstone-discovery.php
│   │   ├── stone-personality.php
│   │   ├── trust.php
│   │   ├── silver-bullion.php
│   │   ├── gift.php
│   │   ├── bespoke-design.php
│   │   ├── reviews.php
│   │   ├── brand-story.php
│   │   ├── magazine.php
│   │   ├── faq.php
│   │   └── newsletter.php
│   ├── plp/
│   │   ├── hero.php / sort-bar.php / filter-sidebar.php
│   │   ├── product-card.php / merchandising.php / faq.php
│   └── pdp/
│       ├── gallery.php / info.php / tabs.php
│       ├── trust-bar.php / bespoke-prompt.php / related.php / faq.php
│
├── inc/
│   ├── theme-setup.php            (post-thumbnails, menus, woo support)
│   ├── enqueue.php                (CSS/JS اصلی + Vazirmatn)
│   ├── customizer.php             (متن‌های Hero, Announcement, شماره تماس)
│   ├── woocommerce.php            (hookها برای حذف عناصر پیش‌فرض و افزودن کارت سفارشی)
│   ├── acf-fields.php             (تعریف فیلدهای محصول مثل سنگ، عیار، اندازه)
│   └── helpers.php
│
├── assets/
│   ├── css/
│   │   ├── theme.css              (متغیرهای رنگ + تایپوگرافی + utilities)
│   │   ├── home.css               (استایل اختصاصی هر سکشن صفحه اصلی)
│   │   ├── plp.css
│   │   └── pdp.css
│   ├── js/
│   │   ├── main.js                (منو موبایل، accordion، tabs)
│   │   ├── plp.js                 (filter drawer، sort)
│   │   └── pdp.js                 (gallery، quantity، tabs)
│   ├── fonts/                     (Vazirmatn local fallback)
│   └── images/                    (تصاویر هیرو، دسته‌ها، سکشن‌ها)
│
└── README.md (راهنمای نصب فارسی)
```

---

## نگاشت سکشن‌های React → فایل‌های PHP

| کامپوننت React | فایل PHP | منبع داده |
|---|---|---|
| HeroSection | `home/hero.php` | Customizer (عنوان، متن، CTA) + تصویر |
| CategoryDiscovery | `home/category-discovery.php` | دسته‌های Woo |
| SignatureRingSection | `home/signature-ring.php` | محصولات با تگ "signature-ring" |
| BestSellers | `home/best-sellers.php` | `wc_get_products` با `total_sales` |
| BraceletSection / SilverSetSection | همین الگو | تگ/دسته مربوطه |
| GemstoneDiscovery | `home/gemstone-discovery.php` | استاتیک + لینک به PLP |
| StonePersonalityFinder | `home/stone-personality.php` | فرم استاتیک با localStorage JS |
| BespokeDesignSection | `home/bespoke-design.php` | Contact Form 7 / فرم HTML داخلی |
| ReviewsSection | `home/reviews.php` | ACF Repeater یا کامنت‌های Woo |
| MagazinePreview | `home/magazine.php` | آخرین پست‌های وبلاگ |
| FAQSection | `home/faq.php` | ACF Repeater |
| Newsletter | `home/newsletter.php` | فرم ساده (قابل اتصال به Mailchimp) |
| باقی سکشن‌ها | همان نام | استاتیک با Customizer |

---

## استراتژی استایل

- **روش:** استخراج Design Tokens از `src/index.css` (رنگ‌های luxury Persian: emerald `160 35% 22%`, gold `38 60% 50%`, کرم warm) و تبدیل به CSS Variables در `theme.css`.
- **Tailwind:** استفاده نمی‌کنیم (سنگین برای قالب کلاسیک). به‌جایش CSS دست‌نویس مدولار با همان نام‌های utility مفید (`.container`, `.btn`, `.grid`, `.card`).
- **فونت:** Vazirmatn از Google Fonts + fallback لوکال.
- **RTL:** `<html dir="rtl">` + کل CSS با logical properties (`margin-inline-start` و …).
- **Responsive:** breakpoints `768px` و `1024px`، موبایل اول.

---

## پشتیبانی WooCommerce

1. `add_theme_support('woocommerce')` + `wc-product-gallery-zoom/lightbox/slider`.
2. **PLP override:** حذف sidebar پیش‌فرض، استفاده از طراحی دو‌ستونه با فیلتر چپ (در RTL: راست) + گرید محصولات.
3. **PDP override:** گالری بزرگ سمت راست، اطلاعات محصول سمت چپ، تب‌های توضیحات/مشخصات/مراقبت، Trust Bar، بخش Bespoke Prompt، محصولات مرتبط.
4. **Custom fields با ACF:** نوع سنگ، عیار نقره، اندازه، وزن، گارانتی.
5. **بخش "استعلام قیمت" برای شمش:** category خاص که دکمه افزودن به سبد را مخفی و دکمه تماس/واتساپ نمایش می‌دهد.

---

## محتوای پیش‌فرض (seed)

موقع فعال‌سازی قالب (`after_switch_theme`):
- ساخت ۲۰ صفحه با محتوای فارسی پیش‌فرض
- ساخت منوی اصلی و فوتر با لینک‌های درست
- تنظیم homepage روی `front-page.php`
- ساخت دسته‌های نمونه Woo: انگشتر، دستبند، سنگ، شمش، ست
- وارد کردن ۸ محصول نمونه با تصاویر placeholder

---

## مراحل اجرا

1. **پاک‌سازی پایه فعلی** و بازنویسی `style.css` + `functions.php` با ساختار جدید
2. **استخراج design tokens** از `src/index.css` به `assets/css/theme.css`
3. **ساخت header / footer / front-page** کامل با تمام سکشن‌ها
4. **ساخت ۱۹ template-part** برای سکشن‌های صفحه اصلی (HTML+CSS هر کدام مطابق React)
5. **ساخت override کامل WooCommerce** (PLP + PDP + کارت)
6. **ساخت assets/css و assets/js** اختصاصی هر بخش
7. **انتقال تصاویر** از `src/assets/` به `assets/images/`
8. **ساخت ACF fields و seed محتوا**
9. **ساخت ZIP نهایی** در `/mnt/documents/persian-gem-silver-theme.zip` برای دانلود

---

## آنچه دریافت می‌کنید

- پوشه‌ی کامل قالب در `wordpress-theme/persian-gem-silver/`
- فایل ZIP آماده‌ی نصب در `/mnt/documents/`
- README فارسی با مراحل نصب، فعال‌سازی، تنظیم Customizer و وارد کردن محصولات نمونه

## محدودیت‌های صادقانه

- **انیمیشن‌های React پیچیده** (مثل scroll-triggered fade-up و hover micro-interactions) به‌صورت ساده‌تر با CSS `@keyframes` و `IntersectionObserver` بازسازی می‌شوند — ۹۰٪ شبیه ولی نه ۱۰۰٪.
- **فرم‌های تعاملی** مثل Stone Personality Finder و Bespoke Request به‌صورت HTML+JS ساده پیاده می‌شوند (نه React state کامل). برای فرم Bespoke پیشنهاد افزونه Contact Form 7 یا WPForms داده می‌شود.
- پروژه React فعلی **همان‌طور که هست باقی می‌ماند** — قالب وردپرس در پوشه‌ی جداگانه ساخته می‌شود.