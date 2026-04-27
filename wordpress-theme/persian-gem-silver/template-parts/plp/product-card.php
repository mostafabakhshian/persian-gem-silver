<?php
/**
 * Reusable PLP/Best-sellers product card.
 * Expects either WC product as $product / pgs_product query var, or fallback.
 */
if (!defined('ABSPATH')) exit;

global $product;
if (!$product) $product = get_query_var('pgs_product');
if (!$product || !is_a($product, 'WC_Product')) return;
?>
<article class="pgs-product-card">
  <a class="pc-thumb" href="<?php echo esc_url($product->get_permalink()); ?>">
    <?php echo $product->get_image('pgs-card'); ?>
    <div class="badges">
      <?php if ($product->is_on_sale()): ?><span class="badge badge-sale">تخفیف</span><?php endif; ?>
      <?php
      $created = strtotime($product->get_date_created());
      if ($created && (time() - $created) < (30 * DAY_IN_SECONDS)) echo '<span class="badge badge-new">جدید</span>';
      ?>
    </div>
  </a>
  <div class="pc-body">
    <?php
    $cats = wc_get_product_category_list($product->get_id(), '، ');
    if ($cats) echo '<span class="pc-cat">' . wp_kses_post($cats) . '</span>';
    ?>
    <h3 class="pc-title"><a href="<?php echo esc_url($product->get_permalink()); ?>"><?php echo esc_html($product->get_name()); ?></a></h3>
    <?php if ($product->get_average_rating()) : ?>
      <div class="pc-stars">★★★★★ <span class="muted" style="font-size:.8rem;">(<?php echo pgs_to_fa_digits($product->get_review_count()); ?>)</span></div>
    <?php endif; ?>
    <div class="pc-price"><?php echo $product->get_price_html(); ?></div>
  </div>
</article>
