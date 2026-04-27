<?php if (!defined('ABSPATH')) exit;
$gems = [
    ['name' => 'فیروزه نیشابور', 'desc' => 'آرامش و حفاظت', 'color' => '#3CA5C9'],
    ['name' => 'عقیق یمنی', 'desc' => 'برکت و قدرت', 'color' => '#8B2E2E'],
    ['name' => 'یاقوت سرخ', 'desc' => 'عشق و انرژی', 'color' => '#A11D2A'],
    ['name' => 'حدید صینی', 'desc' => 'تمرکز و دفع منفی', 'color' => '#3B3B3B'],
    ['name' => 'زمرد', 'desc' => 'ثروت و حکمت', 'color' => '#1F7A4D'],
    ['name' => 'در نجف', 'desc' => 'صفا و خلوص', 'color' => '#E5E5E5'],
    ['name' => 'مرجان سرخ', 'desc' => 'سلامت و شور', 'color' => '#C53030'],
    ['name' => 'لاجورد', 'desc' => 'آرامش روح', 'color' => '#1E3A8A'],
];
?>
<section class="section home-gemstones">
  <div class="container">
    <div class="section-head text-center reveal">
      <p class="eyebrow">سنگ‌شناسی</p>
      <h2 class="section-title">سنگ‌های اصیل و خواص آن‌ها</h2>
      <p class="section-subtitle" style="margin-inline:auto;">با مهم‌ترین سنگ‌های قیمتی و نیمه‌قیمتی فروشگاه ما آشنا شوید.</p>
    </div>
    <div class="gem-grid">
      <?php foreach ($gems as $i => $g): ?>
        <a class="gem-card reveal" style="transition-delay: <?php echo $i*60; ?>ms;" href="<?php echo esc_url(home_url('/product-category/gemstones')); ?>">
          <div class="gem-swatch" style="background: <?php echo esc_attr($g['color']); ?>;"></div>
          <h3><?php echo esc_html($g['name']); ?></h3>
          <p><?php echo esc_html($g['desc']); ?></p>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>
