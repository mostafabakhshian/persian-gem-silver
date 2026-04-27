<?php if (!defined('ABSPATH')) exit;
$items = [
    ['icon' => 'shield', 'title' => 'ضمانت اصالت', 'desc' => 'تمام محصولات با کارت اصالت ارائه می‌شود.'],
    ['icon' => 'truck',  'title' => 'ارسال امن سراسری', 'desc' => 'بسته‌بندی استاندارد و بیمه ارسال.'],
    ['icon' => 'award',  'title' => 'کیفیت دست‌ساز', 'desc' => 'ساخت توسط هنرمندان نقره‌ساز ایرانی.'],
    ['icon' => 'sparkles','title'=> 'مرجوعی ۷ روزه', 'desc' => 'تضمین رضایت و امکان عودت کالا.'],
];
?>
<section class="section section-tight home-trust">
  <div class="container">
    <div class="section-head text-center reveal">
      <p class="eyebrow">تعهد ما به شما</p>
      <h2 class="section-title">چرا آسمون؟</h2>
    </div>
    <div class="trust-grid">
      <?php foreach ($items as $i => $t): ?>
        <div class="trust-item reveal" style="transition-delay: <?php echo $i*80; ?>ms;">
          <div class="trust-icon"><?php echo pgs_icon($t['icon'], 28); ?></div>
          <h4><?php echo esc_html($t['title']); ?></h4>
          <p><?php echo esc_html($t['desc']); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
