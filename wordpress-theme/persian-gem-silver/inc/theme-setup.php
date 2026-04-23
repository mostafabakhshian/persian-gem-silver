<?php

if (!defined('ABSPATH')) {
    exit;
}

function pgs_upsert_page($title, $slug, $content)
{
    $existing = get_page_by_path($slug, OBJECT, 'page');

    if ($existing instanceof WP_Post) {
        if ($existing->post_status !== 'publish') {
            wp_update_post([
                'ID' => $existing->ID,
                'post_status' => 'publish',
            ]);
        }

        return (int) $existing->ID;
    }

    return (int) wp_insert_post([
        'post_type' => 'page',
        'post_title' => $title,
        'post_name' => $slug,
        'post_status' => 'publish',
        'post_content' => $content,
    ]);
}

function pgs_seed_home_content()
{
    $pages = [
        'home' => ['خانه', 'home', 'به فروشگاه جواهرات نقره و سنگ خوش آمدید.'],
        'category-discovery' => ['دسته‌بندی‌ها', 'category-discovery', 'معرفی دسته‌بندی‌های اصلی محصول.'],
        'signature-ring' => ['انگشتر شاخص', 'signature-ring', 'مدل‌های خاص و امضادار برند.'],
        'bracelet-collection' => ['کالکشن دستبند', 'bracelet-collection', 'دستبندهای روزمره و مجلسی.'],
        'silver-set' => ['ست نقره', 'silver-set', 'ست‌های کامل برای هدیه و استفاده شخصی.'],
        'spotlight' => ['ویترین ویژه', 'spotlight', 'محصولات ویژه این هفته.'],
        'gemstone-discovery' => ['سنگ‌شناسی', 'gemstone-discovery', 'آشنایی با سنگ‌های طبیعی و خواص آن‌ها.'],
        'stone-personality' => ['شخصیت‌شناسی سنگ', 'stone-personality', 'پیشنهاد سنگ بر اساس سلیقه و شخصیت.'],
        'trust' => ['اعتماد و ضمانت', 'trust', 'ضمانت اصالت، عودت و پشتیبانی خرید.'],
        'silver-bullion' => ['شمش نقره', 'silver-bullion', 'محصولات سرمایه‌ای نقره.'],
        'gift' => ['هدیه', 'gift', 'ایده‌های هدیه مناسبتی.'],
        'bespoke-design' => ['طراحی سفارشی', 'bespoke-design', 'ثبت سفارش طراحی اختصاصی.'],
        'reviews' => ['نظرات مشتریان', 'reviews', 'تجربه خرید مشتریان واقعی.'],
        'brand-story' => ['داستان برند', 'brand-story', 'مسیر شکل‌گیری برند و ارزش‌ها.'],
        'magazine' => ['مجله', 'magazine', 'مقالات آموزشی و ترندهای جواهرات.'],
        'faq' => ['سوالات متداول', 'faq', 'پاسخ سوالات پرتکرار مشتریان.'],
        'newsletter' => ['خبرنامه', 'newsletter', 'عضویت برای دریافت پیشنهادهای ویژه.'],
        'contact' => ['تماس با ما', 'contact', 'برای ارتباط با ما فرم تماس را تکمیل کنید.'],
        'shop' => ['فروشگاه', 'shop', 'محصولات فروشگاه به‌زودی در این بخش نمایش داده می‌شود.'],
    ];

    $ids = [];

    foreach ($pages as $key => $page_data) {
        $ids[$key] = pgs_upsert_page($page_data[0], $page_data[1], $page_data[2]);
    }

    return $ids;
}


function pgs_menu_has_page_item($menu_id, $page_id)
{
    $items = wp_get_nav_menu_items($menu_id) ?: [];

    foreach ($items as $item) {
        if ((int) $item->object_id === (int) $page_id) {
            return true;
        }
    }

    return false;
}

function pgs_seed_menus($page_ids)
{
    $menu_name = 'منوی اصلی قالب';
    $menu_obj = wp_get_nav_menu_object($menu_name);
    $menu_id = $menu_obj ? (int) $menu_obj->term_id : (int) wp_create_nav_menu($menu_name);

    $primary_items = ['home', 'shop', 'category-discovery', 'faq', 'contact'];

    foreach ($primary_items as $key) {
        if (empty($page_ids[$key])) {
            continue;
        }

        if (pgs_menu_has_page_item($menu_id, $page_ids[$key])) {
            continue;
        }

        wp_update_nav_menu_item($menu_id, 0, [
            'menu-item-title' => get_the_title($page_ids[$key]),
            'menu-item-object' => 'page',
            'menu-item-object-id' => $page_ids[$key],
            'menu-item-type' => 'post_type',
            'menu-item-status' => 'publish',
        ]);
    }

    $footer_menu_name = 'منوی فوتر قالب';
    $footer_menu_obj = wp_get_nav_menu_object($footer_menu_name);
    $footer_menu_id = $footer_menu_obj ? (int) $footer_menu_obj->term_id : (int) wp_create_nav_menu($footer_menu_name);

    $footer_items = ['trust', 'brand-story', 'faq', 'contact'];

    foreach ($footer_items as $key) {
        if (empty($page_ids[$key])) {
            continue;
        }

        if (pgs_menu_has_page_item($footer_menu_id, $page_ids[$key])) {
            continue;
        }

        wp_update_nav_menu_item($footer_menu_id, 0, [
            'menu-item-title' => get_the_title($page_ids[$key]),
            'menu-item-object' => 'page',
            'menu-item-object-id' => $page_ids[$key],
            'menu-item-type' => 'post_type',
            'menu-item-status' => 'publish',
        ]);
    }

    $locations = get_theme_mod('nav_menu_locations', []);
    $locations['primary'] = $menu_id;
    $locations['footer'] = $footer_menu_id;
    set_theme_mod('nav_menu_locations', $locations);
}

function pgs_apply_default_theme_mods($page_ids)
{
    set_theme_mod('pgs_announcement_text', 'ارسال رایگان برای سفارش‌های بالای ۳ میلیون تومان');
    set_theme_mod('pgs_hero_title', 'زیبایی طبیعی، هنر دست‌ساز');
    set_theme_mod('pgs_hero_text', 'جواهرات نقره و سنگ‌های اصل با طراحی اصیل ایرانی.');

    $mapping = [
        'pgs_home_category_discovery_page' => 'category-discovery',
        'pgs_home_signature_ring_page' => 'signature-ring',
        'pgs_home_bracelet_page' => 'bracelet-collection',
        'pgs_home_silver_set_page' => 'silver-set',
        'pgs_home_spotlight_page' => 'spotlight',
        'pgs_home_gemstone_discovery_page' => 'gemstone-discovery',
        'pgs_home_stone_personality_page' => 'stone-personality',
        'pgs_home_trust_page' => 'trust',
        'pgs_home_silver_bullion_page' => 'silver-bullion',
        'pgs_home_gift_page' => 'gift',
        'pgs_home_bespoke_design_page' => 'bespoke-design',
        'pgs_home_reviews_page' => 'reviews',
        'pgs_home_brand_story_page' => 'brand-story',
        'pgs_home_magazine_page' => 'magazine',
        'pgs_home_faq_page' => 'faq',
        'pgs_home_newsletter_page' => 'newsletter',
    ];

    foreach ($mapping as $setting_key => $page_key) {
        if (!empty($page_ids[$page_key])) {
            set_theme_mod($setting_key, $page_ids[$page_key]);
        }
    }
}

function pgs_setup_theme_defaults()
{
    $page_ids = pgs_seed_home_content();

    if (!empty($page_ids['home'])) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $page_ids['home']);
    }

    pgs_seed_menus($page_ids);
    pgs_apply_default_theme_mods($page_ids);
}
add_action('after_switch_theme', 'pgs_setup_theme_defaults');
