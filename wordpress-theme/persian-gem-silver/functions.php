<?php

if (!defined('ABSPATH')) {
    exit;
}

require_once get_template_directory() . '/inc/home-sections.php';
require_once get_template_directory() . '/inc/template-tags.php';
require_once get_template_directory() . '/inc/customizer.php';
require_once get_template_directory() . '/inc/theme-setup.php';

function persian_gem_silver_setup()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);

    add_theme_support('woocommerce', [
        'thumbnail_image_width' => 480,
        'single_image_width' => 720,
        'product_grid' => [
            'default_rows' => 2,
            'min_rows' => 1,
            'max_rows' => 4,
            'default_columns' => 4,
            'min_columns' => 2,
            'max_columns' => 4,
        ],
    ]);

    register_nav_menus([
        'primary' => __('Primary Menu', 'persian-gem-silver'),
        'footer' => __('Footer Menu', 'persian-gem-silver'),
    ]);
}
add_action('after_setup_theme', 'persian_gem_silver_setup');

function persian_gem_silver_assets()
{
    wp_enqueue_style(
        'persian-gem-silver-style',
        get_stylesheet_uri(),
        [],
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'persian_gem_silver_assets');
