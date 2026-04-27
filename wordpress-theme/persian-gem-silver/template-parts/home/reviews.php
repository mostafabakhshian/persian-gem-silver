<?php if (!defined('ABSPATH')) exit;
$reviews = [
    ['name' => 'مریم احمدی', 'city' => 'تهران', 'text' => 'انگشتری که خریدم واقعاً منحصر به فرد بود. کیفیت ساخت و سنگ فیروزه فوق‌العاده.'],
    ['name' => 'علی رضایی', 'city' => 'اصفهان', 'text' => 'سفارش طراحی اختصاصی دادم؛ از مشاوره تا تحویل، تجربه‌ای بی‌نظیر بود.'],
    ['name' => 'نگار صدری', 'city' => 'شیراز', 'text' => 'بسته‌بندی هدیه عالی بود. هدیه‌ام را سر وقت رساندند و گیرنده عاشقش شد.'],
];
?>
<section class="section home-reviews">
  <div class="container">
    <div class="section-head text-center reveal">
      <p class="eyebrow">نظرات مشتریان</p>
      <h2 class="section-title">تجربه خریداران واقعی</h2>
    </div>
    <div class="reviews-grid">
      <?php foreach ($reviews as $i => $r): ?>
        <article class="review-card reveal" style="transition-delay: <?php echo $i*100; ?>ms;">
          <div class="review-stars">★★★★★</div>
          <p class="review-text">«<?php echo esc_html($r['text']); ?>»</p>
          <div class="review-author">
            <div class="review-avatar"><?php echo esc_html(mb_substr($r['name'], 0, 1)); ?></div>
            <div>
              <div class="name"><?php echo esc_html($r['name']); ?></div>
              <div class="city"><?php echo esc_html($r['city']); ?></div>
            </div>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  </div>
</section>
