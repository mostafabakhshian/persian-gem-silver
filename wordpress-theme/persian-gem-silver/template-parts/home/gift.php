<?php if (!defined('ABSPATH')) exit; ?>
<section class="section home-gift">
  <div class="container">
    <div class="gift-grid">
      <div class="reveal">
        <p class="eyebrow">سرویس هدیه</p>
        <h2 class="section-title">یک هدیه خاص و به‌یادماندنی</h2>
        <p>برای مناسبت‌های ویژه، جواهر را در بسته‌بندی لوکس مخصوص هدیه دریافت کنید. کارت تبریک، روبان مخصوص و جعبه چوبی.</p>
        <ul class="gift-features">
          <li><span class="check"><?php echo pgs_icon('check', 14); ?></span> جعبه چوبی پریمیوم</li>
          <li><span class="check"><?php echo pgs_icon('check', 14); ?></span> کارت تبریک دست‌نویس</li>
          <li><span class="check"><?php echo pgs_icon('check', 14); ?></span> ارسال به آدرس گیرنده با پیام شخصی</li>
          <li><span class="check"><?php echo pgs_icon('check', 14); ?></span> رایگان برای سفارش‌های بالای ۲ میلیون</li>
        </ul>
        <a class="btn btn-primary btn-lg" href="<?php echo esc_url(home_url('/gift')); ?>">سفارش هدیه</a>
      </div>
      <div class="gift-image reveal" style="margin-inline-start: auto;">
        <img src="<?php echo esc_url(pgs_img('gift-box.jpg')); ?>" alt="بسته‌بندی هدیه">
      </div>
    </div>
  </div>
</section>
