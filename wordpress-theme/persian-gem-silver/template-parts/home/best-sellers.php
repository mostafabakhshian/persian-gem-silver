<?php if (!defined('ABSPATH')) exit; ?>
<section class="section product-row">
  <div class="container">
    <div class="row-head reveal">
      <div>
        <p class="eyebrow">انتخاب مشتریان</p>
        <h2 class="section-title">پرفروش‌ترین‌ها</h2>
      </div>
      <a class="view-all" href="<?php echo esc_url(home_url('/shop')); ?>">مشاهده همه ←</a>
    </div>

    <div class="grid grid-4">
      <?php
      if (function_exists('wc_get_products')) {
          $products = wc_get_products([
              'limit'   => 4,
              'status'  => 'publish',
              'orderby' => 'meta_value_num',
              'meta_key'=> 'total_sales',
              'order'   => 'DESC',
          ]);
          if (empty($products)) {
              $products = wc_get_products(['limit' => 4, 'status' => 'publish']);
          }
          foreach ($products as $p) {
              set_query_var('pgs_product', $p);
              get_template_part('template-parts/plp/product-card');
          }
      } else {
          // Fallback static cards
          $fallbacks = [
              ['انگشتر فیروزه طبیعی', '۲٬۸۵۰٬۰۰۰', 'mens-ring.jpg'],
              ['دستبند نقره دست‌ساز', '۱٬۹۵۰٬۰۰۰', 'bracelet.jpg'],
              ['گردنبند ظریف نقره', '۲٬۲۰۰٬۰۰۰', 'necklace.jpg'],
              ['انگشتر زنانه عقیق', '۱٬۷۵۰٬۰۰۰', 'womens-ring.jpg'],
          ];
          foreach ($fallbacks as $f): ?>
            <article class="pgs-product-card">
              <a class="pc-thumb" href="<?php echo esc_url(home_url('/shop')); ?>">
                <img src="<?php echo esc_url(pgs_img($f[2])); ?>" alt="<?php echo esc_attr($f[0]); ?>" loading="lazy">
              </a>
              <div class="pc-body">
                <span class="pc-cat">جواهرات نقره</span>
                <h3 class="pc-title"><a href="<?php echo esc_url(home_url('/shop')); ?>"><?php echo esc_html($f[0]); ?></a></h3>
                <div class="pc-stars">★★★★★</div>
                <div class="pc-price"><?php echo esc_html($f[1]); ?> تومان</div>
              </div>
            </article>
          <?php endforeach;
      }
      ?>
    </div>
  </div>
</section>
