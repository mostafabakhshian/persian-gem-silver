<?php
if (!defined('ABSPATH')) exit;

/**
 * WooCommerce hooks & overrides
 */

// Wrap main content
remove_action('woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10);
remove_action('woocommerce_after_main_content', 'woocommerce_output_content_wrapper_end', 10);

add_action('woocommerce_before_main_content', function () {
    echo '<main id="primary" class="site-main woocommerce-main"><div class="container">';
}, 10);

add_action('woocommerce_after_main_content', function () {
    echo '</div></main>';
}, 10);

// Remove default sidebar (we use custom layout)
remove_action('woocommerce_sidebar', 'woocommerce_get_sidebar', 10);

// Products per row (desktop)
add_filter('loop_shop_columns', function () { return 3; });
add_filter('loop_shop_per_page', function () { return 12; });

// Remove default page title (we use PLP hero)
add_filter('woocommerce_show_page_title', '__return_false');

// Result count + sort already shown — keep
add_action('woocommerce_before_shop_loop', 'woocommerce_result_count', 20);
add_action('woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30);

// Custom breadcrumb separator
add_filter('woocommerce_breadcrumb_defaults', function ($args) {
    $args['delimiter'] = ' <span class="bc-sep">/</span> ';
    return $args;
});

// Add badges (new, sale, bestseller) on product card
add_action('woocommerce_before_shop_loop_item_title', function () {
    global $product;
    $badges = [];
    if ($product->is_on_sale()) $badges[] = '<span class="badge badge-sale">تخفیف</span>';
    $created = strtotime($product->get_date_created());
    if ($created && (time() - $created) < (30 * DAY_IN_SECONDS)) {
        $badges[] = '<span class="badge badge-new">جدید</span>';
    }
    if ($product->get_total_sales() > 20) $badges[] = '<span class="badge badge-best">پرفروش</span>';
    if ($badges) echo '<div class="card-badges">' . implode('', $badges) . '</div>';
}, 8);

// Quick wishlist heart icon
add_action('woocommerce_after_shop_loop_item', function () {
    echo '<button type="button" class="card-fav" aria-label="افزودن به علاقه‌مندی‌ها">' . pgs_icon('heart', 18) . '</button>';
}, 9);

// PDP: replace summary order
remove_action('woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40);
