<?php
/**
 * Custom shop / archive-product (PLP)
 */
if (!defined('ABSPATH')) exit;
get_header('shop');

$term = is_product_taxonomy() ? get_queried_object() : null;
$title = $term ? $term->name : 'فروشگاه';
$desc  = $term && !empty($term->description) ? $term->description : 'مرور تمام محصولات نقره و سنگ‌های قیمتی.';
?>

<section class="plp-hero">
  <div class="container">
    <div class="breadcrumbs"><?php woocommerce_breadcrumb(); ?></div>
    <h1><?php echo esc_html($title); ?></h1>
    <p><?php echo esc_html($desc); ?></p>
  </div>
</section>

<main class="site-main">
  <div class="container">
    <div class="plp-layout">

      <aside class="plp-sidebar" data-plp-sidebar>
        <h3>دسته‌ها</h3>
        <ul>
          <?php
          $cats = get_terms(['taxonomy' => 'product_cat', 'hide_empty' => true, 'parent' => 0]);
          foreach ($cats as $c) {
              echo '<li><a href="' . esc_url(get_term_link($c)) . '">' . esc_html($c->name) . ' <span class="muted">(' . pgs_to_fa_digits($c->count) . ')</span></a></li>';
          }
          ?>
        </ul>

        <div class="filter-group" style="margin-top: 24px;">
          <h3>محدوده قیمت</h3>
          <?php if (function_exists('the_widget')) the_widget('WC_Widget_Price_Filter'); ?>
        </div>

        <div class="filter-group">
          <h3>وضعیت</h3>
          <?php if (function_exists('the_widget')) the_widget('WC_Widget_Layered_Nav', ['attribute' => 'pa_color', 'display_type' => 'list']); ?>
        </div>
      </aside>

      <div class="plp-content">
        <div class="plp-sort">
          <button class="btn btn-outline btn-sm filter-toggle" data-filter-toggle>فیلترها</button>
          <div class="count">
            <?php woocommerce_result_count(); ?>
          </div>
          <div class="orderby"><?php woocommerce_catalog_ordering(); ?></div>
        </div>

        <?php if (woocommerce_product_loop()) : ?>
          <div class="plp-grid">
            <?php
            if (wc_get_loop_prop('is_shortcode')) {
                $columns = absint(wc_get_loop_prop('columns'));
            }
            while (have_posts()) {
                the_post();
                global $product;
                set_query_var('pgs_product', $product);
                get_template_part('template-parts/plp/product-card');
            }
            ?>
          </div>

          <div class="pagination"><?php woocommerce_pagination(); ?></div>
        <?php else : ?>
          <p class="muted">در این بخش محصولی یافت نشد.</p>
        <?php endif; ?>
      </div>

    </div>
  </div>
</main>

<?php get_footer('shop'); ?>
