<?php if (!defined('ABSPATH')) exit; ?>
<section class="section home-bullion">
  <div class="container">
    <div class="bullion-grid">
      <div class="bullion-image reveal">
        <img src="<?php echo esc_url(pgs_img('silver-bullion.jpg')); ?>" alt="شمش نقره">
      </div>
      <div class="reveal">
        <p class="eyebrow">سرمایه‌گذاری مطمئن</p>
        <h2 class="section-title">شمش و سکه نقره خالص</h2>
        <p>شمش‌های نقره ۹۹۹.۹ با کارت اصالت بین‌المللی، گزینه‌ای مطمئن برای سرمایه‌گذاری و حفظ ارزش دارایی.</p>
        <div class="stats">
          <div class="stat"><span class="num">۹۹۹.۹</span><span class="label">عیار خلوص</span></div>
          <div class="stat"><span class="num">۱-۱۰۰</span><span class="label">گرم وزن</span></div>
          <div class="stat"><span class="num">۱۰۰٪</span><span class="label">تضمین خرید</span></div>
        </div>
        <p style="font-size:.9rem; color: var(--gold-soft);">قیمت بر اساس نرخ روز جهانی نقره. لطفاً برای استعلام تماس بگیرید.</p>
        <div class="actions" style="display:flex; gap:12px; flex-wrap:wrap;">
          <a class="btn btn-accent" href="tel:<?php echo esc_attr(pgs_mod('pgs_brand_phone')); ?>">
            <?php echo pgs_icon('phone', 16); ?> استعلام قیمت روز
          </a>
          <a class="btn btn-light" href="<?php echo esc_url(home_url('/product-category/bullion')); ?>">مشاهده محصولات</a>
        </div>
      </div>
    </div>
  </div>
</section>
