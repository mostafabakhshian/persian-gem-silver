<?php
/**
 * Single product (PDP)
 */
if (!defined('ABSPATH')) exit;
get_header('shop');

while (have_posts()) : the_post();
global $product;
?>

<main class="site-main">
  <div class="container">
    <nav class="pdp-breadcrumb"><?php woocommerce_breadcrumb(); ?></nav>

    <div class="pdp-grid">
      <div class="pdp-gallery" data-pdp-gallery>
        <div class="main"><?php echo $product->get_image('pgs-hero', ['data-pdp-main' => '1']); ?></div>
        <?php
        $attachment_ids = $product->get_gallery_image_ids();
        if ($attachment_ids) :
        ?>
          <div class="thumbs">
            <?php foreach ($attachment_ids as $i => $aid):
              $thumb = wp_get_attachment_image_src($aid, 'thumbnail');
              $full  = wp_get_attachment_image_src($aid, 'pgs-hero');
              if (!$thumb) continue; ?>
              <img data-pdp-thumb data-full="<?php echo esc_url($full[0]); ?>" src="<?php echo esc_url($thumb[0]); ?>" alt="">
            <?php endforeach; ?>
          </div>
        <?php endif; ?>
      </div>

      <div class="pdp-info summary entry-summary">
        <h1 class="product_title entry-title"><?php the_title(); ?></h1>
        <div class="price"><?php echo $product->get_price_html(); ?></div>
        <div class="desc"><?php echo wpautop(wp_kses_post($product->get_short_description())); ?></div>

        <?php
        do_action('woocommerce_single_product_summary');
        ?>

        <div class="meta">
          <?php if ($sku = $product->get_sku()) : ?>
            <div><strong>کد محصول:</strong> <?php echo esc_html($sku); ?></div>
          <?php endif; ?>
          <?php $cats = wc_get_product_category_list($product->get_id(), '، ');
          if ($cats) : ?><div><strong>دسته:</strong> <?php echo wp_kses_post($cats); ?></div><?php endif; ?>
        </div>

        <div class="pdp-trust-bar">
          <div class="item"><?php echo pgs_icon('shield', 22); ?> <span>ضمانت اصالت ۱۰۰٪</span></div>
          <div class="item"><?php echo pgs_icon('truck', 22); ?> <span>ارسال امن سراسری</span></div>
          <div class="item"><?php echo pgs_icon('award', 22); ?> <span>دست‌ساز ایرانی</span></div>
        </div>
      </div>
    </div>

    <div class="pdp-bespoke">
      <div>
        <h3>به‌دنبال طرح اختصاصی هستید؟</h3>
        <p>این محصول را با سنگ، سایز یا حکاکی دلخواه خود سفارش دهید.</p>
      </div>
      <a class="btn btn-primary" href="<?php echo esc_url(home_url('/bespoke-design')); ?>">درخواست طراحی اختصاصی</a>
    </div>

    <div class="pdp-tabs"><?php woocommerce_output_product_data_tabs(); ?></div>

    <div class="pdp-related"><?php woocommerce_output_related_products(); ?></div>
  </div>
</main>

<?php endwhile; ?>
<?php get_footer('shop'); ?>
