<?php
if (!defined('ABSPATH')) exit;

function pgs_enqueue_assets() {
    // Vazirmatn font
    wp_enqueue_style(
        'pgs-vazirmatn',
        'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap',
        [],
        null
    );

    // Theme tokens & base
    wp_enqueue_style('pgs-theme', PGS_THEME_URI . '/assets/css/theme.css', [], PGS_THEME_VERSION);
    wp_enqueue_style('pgs-style', get_stylesheet_uri(), ['pgs-theme'], PGS_THEME_VERSION);

    if (is_front_page()) {
        wp_enqueue_style('pgs-home', PGS_THEME_URI . '/assets/css/home.css', ['pgs-theme'], PGS_THEME_VERSION);
    }

    if (function_exists('is_woocommerce') && (is_shop() || is_product_category() || is_product_tag())) {
        wp_enqueue_style('pgs-plp', PGS_THEME_URI . '/assets/css/plp.css', ['pgs-theme'], PGS_THEME_VERSION);
        wp_enqueue_script('pgs-plp-js', PGS_THEME_URI . '/assets/js/plp.js', [], PGS_THEME_VERSION, true);
    }

    if (function_exists('is_product') && is_product()) {
        wp_enqueue_style('pgs-pdp', PGS_THEME_URI . '/assets/css/pdp.css', ['pgs-theme'], PGS_THEME_VERSION);
        wp_enqueue_script('pgs-pdp-js', PGS_THEME_URI . '/assets/js/pdp.js', [], PGS_THEME_VERSION, true);
    }

    wp_enqueue_script('pgs-main', PGS_THEME_URI . '/assets/js/main.js', [], PGS_THEME_VERSION, true);
}
add_action('wp_enqueue_scripts', 'pgs_enqueue_assets');
