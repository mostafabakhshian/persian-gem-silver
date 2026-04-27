<?php if (!defined('ABSPATH')) exit;
$cats = [
    ['title' => 'انگشتر', 'sub' => 'مردانه و زنانه', 'img' => 'mens-ring.jpg', 'url' => '/product-category/rings'],
    ['title' => 'دستبند', 'sub' => 'دست‌ساز', 'img' => 'bracelet.jpg', 'url' => '/product-category/bracelets'],
    ['title' => 'گردنبند و آویز', 'sub' => 'مجلسی و روزمره', 'img' => 'necklace.jpg', 'url' => '/product-category/necklaces'],
    ['title' => 'سنگ قیمتی', 'sub' => 'فیروزه، عقیق، یاقوت', 'img' => 'gemstones-collection.jpg', 'url' => '/product-category/gemstones'],
];
?>
<section class="section home-categories">
  <div class="container">
    <div class="section-head text-center reveal">
      <p class="eyebrow">دسته‌بندی‌ها</p>
      <h2 class="section-title">مرور دسته‌های جواهرات</h2>
      <p class="section-subtitle" style="margin-inline:auto;">از انگشتر تا سنگ‌های اصل، هر بخش با کیفیت برتر و طراحی منحصر به فرد.</p>
    </div>
    <div class="cat-grid">
      <?php foreach ($cats as $i => $c): ?>
        <a class="cat-card reveal" style="transition-delay: <?php echo $i * 80; ?>ms;" href="<?php echo esc_url(home_url($c['url'])); ?>">
          <img src="<?php echo esc_url(pgs_img($c['img'])); ?>" alt="<?php echo esc_attr($c['title']); ?>" loading="lazy">
          <div class="cat-info">
            <h3><?php echo esc_html($c['title']); ?></h3>
            <span><?php echo esc_html($c['sub']); ?></span>
          </div>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>
