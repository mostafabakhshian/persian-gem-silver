<?php
if (!defined('ABSPATH')) exit;

/**
 * Order and labels for home page sections.
 * Slug matches template-parts/home/{slug}.php
 */
function pgs_get_home_sections() {
    return [
        'category-discovery'  => 'دسته‌بندی‌ها',
        'signature-ring'      => 'انگشتر شاخص',
        'best-sellers'        => 'پرفروش‌ترین‌ها',
        'bracelet'            => 'کالکشن دستبند',
        'silver-set'          => 'ست نقره',
        'spotlight'           => 'ویترین ویژه',
        'gemstone-discovery'  => 'سنگ‌شناسی',
        'stone-personality'   => 'شخصیت‌شناسی سنگ',
        'trust'               => 'اعتماد و ضمانت',
        'silver-bullion'      => 'شمش نقره',
        'gift'                => 'هدیه',
        'bespoke-design'      => 'طراحی سفارشی',
        'reviews'             => 'نظرات مشتریان',
        'brand-story'         => 'داستان برند',
        'magazine'            => 'مجله',
        'faq'                 => 'سوالات متداول',
        'newsletter'          => 'خبرنامه',
    ];
}

function pgs_section_visible($slug) {
    return (bool) get_theme_mod('pgs_show_' . $slug, true);
}
