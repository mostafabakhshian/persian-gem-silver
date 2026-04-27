<?php if (!defined('ABSPATH')) exit;
$faqs = [
    ['آیا محصولات شما گارانتی اصالت دارند؟', 'بله، تمام محصولات با کارت اصالت و گارانتی برند ارائه می‌شوند. در صورت اثبات تقلب، وجه پرداختی به‌صورت کامل عودت داده می‌شود.'],
    ['آیا امکان مرجوع کردن کالا وجود دارد؟', 'بله، تا ۷ روز پس از تحویل می‌توانید بدون عنوان دلیل، کالا را مرجوع کنید (به جز محصولات سفارشی).'],
    ['زمان تحویل سفارش‌ها چقدر است؟', 'سفارش‌های آماده ۱ تا ۳ روز کاری و سفارش‌های اختصاصی ۲ تا ۴ هفته زمان نیاز دارند.'],
    ['آیا امکان تغییر سایز انگشتر وجود دارد؟', 'بله، یک‌بار تغییر سایز رایگان است. مراحل را در صفحه ضمانت توضیح داده‌ایم.'],
    ['شرایط ارسال به شهرستان چگونه است؟', 'ارسال با پست پیشتاز و اسنپ‌باکس در تهران. سفارش‌های بالای ۳ میلیون رایگان ارسال می‌شوند.'],
];
?>
<section class="section home-faq">
  <div class="container">
    <div class="section-head text-center reveal">
      <p class="eyebrow">سوالات متداول</p>
      <h2 class="section-title">پاسخ سوالات شما</h2>
    </div>
    <div class="faq-list" data-accordion>
      <?php foreach ($faqs as $i => $f): ?>
        <div class="faq-item" data-accordion-item>
          <button class="faq-trigger" data-accordion-trigger aria-expanded="false">
            <span><?php echo esc_html($f[0]); ?></span>
            <span class="icon"><?php echo pgs_icon('plus', 18); ?></span>
          </button>
          <div class="faq-panel"><?php echo esc_html($f[1]); ?></div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
