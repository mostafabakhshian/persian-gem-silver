<?php
if (!defined('ABSPATH')) exit;

/**
 * Seed default pages, menus and theme mods on first activation.
 */

function pgs_upsert_page($title, $slug, $content = '') {
    $existing = get_page_by_path($slug, OBJECT, 'page');
    if ($existing instanceof WP_Post) {
        return (int) $existing->ID;
    }
    return (int) wp_insert_post([
        'post_type'    => 'page',
        'post_title'   => $title,
        'post_name'    => $slug,
        'post_status'  => 'publish',
        'post_content' => $content,
    ]);
}

function pgs_seed_pages() {
    $pages = [
        'home'             => ['خانه', ''],
        'shop'             => ['فروشگاه', ''],
        'category-discovery' => ['دسته‌بندی‌ها', 'مرور تمام دسته‌های محصولات.'],
        'bespoke-design'   => ['طراحی سفارشی', 'ثبت سفارش طراحی اختصاصی جواهرات.'],
        'magazine'         => ['مجله', 'مقالات آموزشی درباره جواهرات و سنگ.'],
        'faq'              => ['سوالات متداول', 'پاسخ سوالات پرتکرار.'],
        'trust'            => ['اعتماد و ضمانت', 'ضمانت اصالت و خدمات پس از فروش.'],
        'brand-story'      => ['داستان برند', 'مسیر شکل‌گیری برند.'],
        'contact'          => ['تماس با ما', 'راه‌های ارتباط با ما.'],
        'gemstone-discovery' => ['سنگ‌شناسی', 'آشنایی با سنگ‌های قیمتی.'],
    ];
    $ids = [];
    foreach ($pages as $slug => $d) {
        $ids[$slug] = pgs_upsert_page($d[0], $slug, $d[1]);
    }
    return $ids;
}

function pgs_seed_menus($ids) {
    $primary_name = 'منوی اصلی';
    $menu = wp_get_nav_menu_object($primary_name);
    $menu_id = $menu ? (int) $menu->term_id : (int) wp_create_nav_menu($primary_name);

    if (!wp_get_nav_menu_items($menu_id)) {
        $items = ['home', 'shop', 'category-discovery', 'bespoke-design', 'magazine', 'contact'];
        foreach ($items as $key) {
            if (empty($ids[$key])) continue;
            wp_update_nav_menu_item($menu_id, 0, [
                'menu-item-title'     => get_the_title($ids[$key]),
                'menu-item-object'    => 'page',
                'menu-item-object-id' => $ids[$key],
                'menu-item-type'      => 'post_type',
                'menu-item-status'    => 'publish',
            ]);
        }
    }

    $footer_name = 'منوی فوتر';
    $fmenu = wp_get_nav_menu_object($footer_name);
    $fmenu_id = $fmenu ? (int) $fmenu->term_id : (int) wp_create_nav_menu($footer_name);
    if (!wp_get_nav_menu_items($fmenu_id)) {
        foreach (['brand-story', 'trust', 'faq', 'contact'] as $key) {
            if (empty($ids[$key])) continue;
            wp_update_nav_menu_item($fmenu_id, 0, [
                'menu-item-title'     => get_the_title($ids[$key]),
                'menu-item-object'    => 'page',
                'menu-item-object-id' => $ids[$key],
                'menu-item-type'      => 'post_type',
                'menu-item-status'    => 'publish',
            ]);
        }
    }

    $locations = get_theme_mod('nav_menu_locations', []);
    if (empty($locations['primary'])) $locations['primary'] = $menu_id;
    if (empty($locations['footer']))  $locations['footer']  = $fmenu_id;
    set_theme_mod('nav_menu_locations', $locations);
}

function pgs_first_activation() {
    $ids = pgs_seed_pages();

    if (!empty($ids['home'])) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $ids['home']);
    }
    pgs_seed_menus($ids);
}
add_action('after_switch_theme', 'pgs_first_activation');
