<?php

if (!defined('ABSPATH')) {
    exit;
}

function pgs_get_theme_page($theme_mod_key)
{
    $page_id = absint(get_theme_mod($theme_mod_key));

    if (!$page_id) {
        return null;
    }

    $page = get_post($page_id);

    if (!$page || $page->post_status !== 'publish' || $page->post_type !== 'page') {
        return null;
    }

    return $page;
}

function pgs_render_page_card($page, $button_label = 'مشاهده بیشتر')
{
    if (!$page) {
        return;
    }

    $excerpt = has_excerpt($page) ? $page->post_excerpt : wp_trim_words(wp_strip_all_tags($page->post_content), 40);
    $thumbnail = get_the_post_thumbnail_url($page, 'large');
    ?>
    <article class="card card-detailed">
      <?php if (!empty($thumbnail)) : ?>
        <div class="card-media">
          <img src="<?php echo esc_url($thumbnail); ?>" alt="<?php echo esc_attr(get_the_title($page)); ?>">
        </div>
      <?php endif; ?>
      <div class="card-content">
        <h3><?php echo esc_html(get_the_title($page)); ?></h3>
        <p><?php echo esc_html($excerpt); ?></p>
        <a class="card-link" href="<?php echo esc_url(get_permalink($page)); ?>"><?php echo esc_html($button_label); ?></a>
      </div>
    </article>
    <?php
}

function pgs_get_best_selling_products($limit = 4)
{
    if (!class_exists('WooCommerce')) {
        return null;
    }

    return new WP_Query([
        'post_type' => 'product',
        'posts_per_page' => $limit,
        'post_status' => 'publish',
        'meta_key' => 'total_sales',
        'orderby' => 'meta_value_num',
        'order' => 'DESC',
    ]);
}

function pgs_get_latest_products($limit = 8)
{
    if (!class_exists('WooCommerce')) {
        return null;
    }

    return new WP_Query([
        'post_type' => 'product',
        'posts_per_page' => $limit,
        'post_status' => 'publish',
        'orderby' => 'date',
        'order' => 'DESC',
    ]);
}

function pgs_render_product_card($product_id)
{
    if (!class_exists('WooCommerce')) {
        return;
    }

    $product = wc_get_product($product_id);

    if (!$product) {
        return;
    }

    $thumbnail = get_the_post_thumbnail_url($product_id, 'medium');
    ?>
    <article class="card product-card">
      <a href="<?php echo esc_url(get_permalink($product_id)); ?>">
        <?php if (!empty($thumbnail)) : ?>
          <img class="product-thumb" src="<?php echo esc_url($thumbnail); ?>" alt="<?php echo esc_attr(get_the_title($product_id)); ?>">
        <?php endif; ?>
        <div class="card-content">
          <h3><?php echo esc_html(get_the_title($product_id)); ?></h3>
          <p class="price"><?php echo wp_kses_post($product->get_price_html()); ?></p>
        </div>
      </a>
    </article>
    <?php
}
