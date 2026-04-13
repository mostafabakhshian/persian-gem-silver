<?php

if (!defined('ABSPATH')) {
    exit;
}

function pgs_customize_register($wp_customize)
{
    $wp_customize->add_section('pgs_homepage', [
        'title' => __('Homepage Settings', 'persian-gem-silver'),
        'priority' => 30,
    ]);

    $wp_customize->add_setting('pgs_announcement_text', [
        'default' => 'ارسال رایگان برای سفارش‌های بالای ۳ میلیون تومان',
        'sanitize_callback' => 'sanitize_text_field',
    ]);

    $wp_customize->add_control('pgs_announcement_text', [
        'type' => 'text',
        'section' => 'pgs_homepage',
        'label' => __('Announcement text', 'persian-gem-silver'),
    ]);

    $wp_customize->add_setting('pgs_hero_title', [
        'default' => 'زیبایی طبیعی، هنر دست‌ساز',
        'sanitize_callback' => 'sanitize_text_field',
    ]);

    $wp_customize->add_control('pgs_hero_title', [
        'type' => 'text',
        'section' => 'pgs_homepage',
        'label' => __('Hero title', 'persian-gem-silver'),
    ]);

    $wp_customize->add_setting('pgs_hero_text', [
        'default' => 'مجموعه‌ای منتخب از انگشترهای نقره، سنگ‌های اصل و جواهرات دست‌ساز با ضمانت اصالت و کیفیت.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ]);

    $wp_customize->add_control('pgs_hero_text', [
        'type' => 'textarea',
        'section' => 'pgs_homepage',
        'label' => __('Hero text', 'persian-gem-silver'),
    ]);

    foreach (pgs_get_home_sections() as $setting_key => $label) {
        $wp_customize->add_setting($setting_key, [
            'default' => 0,
            'sanitize_callback' => 'absint',
        ]);

        $wp_customize->add_control($setting_key, [
            'type' => 'dropdown-pages',
            'section' => 'pgs_homepage',
            'label' => $label,
        ]);
    }
}
add_action('customize_register', 'pgs_customize_register');
