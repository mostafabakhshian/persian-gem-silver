<?php
if (!defined('ABSPATH')) exit;

function pgs_setup() {
    load_theme_textdomain('persian-gem-silver', PGS_THEME_DIR . '/languages');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', [
        'height'      => 60,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ]);
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('automatic-feed-links');
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');

    // WooCommerce
    add_theme_support('woocommerce', [
        'thumbnail_image_width' => 600,
        'single_image_width'    => 1200,
        'product_grid'          => [
            'default_columns' => 3,
            'default_rows'    => 4,
        ],
    ]);
    add_theme_support('wc-product-gallery-zoom');
    add_theme_support('wc-product-gallery-lightbox');
    add_theme_support('wc-product-gallery-slider');

    register_nav_menus([
        'primary'    => __('منوی اصلی', 'persian-gem-silver'),
        'footer'     => __('منوی فوتر', 'persian-gem-silver'),
        'categories' => __('منوی دسته‌بندی‌ها', 'persian-gem-silver'),
    ]);

    add_image_size('pgs-card', 600, 750, true);
    add_image_size('pgs-hero', 1920, 1080, true);
    add_image_size('pgs-square', 800, 800, true);
}
add_action('after_setup_theme', 'pgs_setup');

function pgs_widgets_init() {
    register_sidebar([
        'name'          => __('سایدبار فروشگاه', 'persian-gem-silver'),
        'id'            => 'shop-sidebar',
        'before_widget' => '<section class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ]);
    register_sidebar([
        'name'          => __('فوتر', 'persian-gem-silver'),
        'id'            => 'footer-1',
        'before_widget' => '<section class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ]);
}
add_action('widgets_init', 'pgs_widgets_init');
