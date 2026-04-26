<?php
$latest_products = pgs_get_latest_products(8);

if (!($latest_products instanceof WP_Query) || !$latest_products->have_posts()) {
    return;
}
?>
<section class="section section-muted">
  <div class="container">
    <h2 class="section-title">جدیدترین محصولات</h2>
    <div class="grid products-grid">
      <?php while ($latest_products->have_posts()) : $latest_products->the_post(); ?>
        <?php pgs_render_product_card(get_the_ID()); ?>
      <?php endwhile; ?>
    </div>
  </div>
</section>
<?php wp_reset_postdata(); ?>
