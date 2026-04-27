<?php
if (!defined('ABSPATH')) exit;

function pgs_customize_register($wp_customize) {
    // ===== Brand =====
    $wp_customize->add_section('pgs_brand', [
        'title'    => __('برند و تماس', 'persian-gem-silver'),
        'priority' => 25,
    ]);
    $brand_fields = [
        'pgs_brand_phone'    => ['021-12345678', 'شماره تماس'],
        'pgs_brand_whatsapp' => ['989120000000', 'شماره واتساپ (با کد کشور)'],
        'pgs_brand_address'  => ['تهران، خیابان ولیعصر', 'آدرس'],
        'pgs_brand_email'    => ['info@example.com', 'ایمیل'],
        'pgs_brand_instagram'=> ['https://instagram.com/', 'لینک اینستاگرام'],
        'pgs_brand_telegram' => ['https://t.me/', 'لینک تلگرام'],
    ];
    foreach ($brand_fields as $key => $data) {
        $wp_customize->add_setting($key, ['default' => $data[0], 'sanitize_callback' => 'sanitize_text_field']);
        $wp_customize->add_control($key, ['type' => 'text', 'section' => 'pgs_brand', 'label' => $data[1]]);
    }

    // ===== Announcement =====
    $wp_customize->add_section('pgs_announcement', [
        'title'    => __('نوار اعلان بالایی', 'persian-gem-silver'),
        'priority' => 28,
    ]);
    $wp_customize->add_setting('pgs_announcement_text', [
        'default' => 'ارسال رایگان برای سفارش‌های بالای ۳ میلیون تومان | ضمانت اصالت کالا',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control('pgs_announcement_text', ['type' => 'text', 'section' => 'pgs_announcement', 'label' => 'متن اعلان']);

    // ===== Hero =====
    $wp_customize->add_section('pgs_hero', [
        'title'    => __('بخش هیرو صفحه اصلی', 'persian-gem-silver'),
        'priority' => 30,
    ]);
    $hero_fields = [
        'pgs_hero_eyebrow' => ['جواهرات نقره اصیل ایرانی', 'متن کوچک بالای عنوان', 'text'],
        'pgs_hero_title'   => ['زیبایی طبیعی، هنر دست‌ساز', 'عنوان اصلی', 'text'],
        'pgs_hero_text'    => ['مجموعه‌ای منتخب از انگشترهای نقره، سنگ‌های اصل و جواهرات دست‌ساز با ضمانت اصالت و کیفیت.', 'متن', 'textarea'],
        'pgs_hero_cta1'    => ['مشاهده محصولات', 'متن دکمه اول', 'text'],
        'pgs_hero_cta1_url'=> ['/shop', 'لینک دکمه اول', 'text'],
        'pgs_hero_cta2'    => ['راهنمای سنگ‌ها', 'متن دکمه دوم', 'text'],
        'pgs_hero_cta2_url'=> ['/gemstone-discovery', 'لینک دکمه دوم', 'text'],
    ];
    foreach ($hero_fields as $key => $data) {
        $sanitize = $data[2] === 'textarea' ? 'sanitize_textarea_field' : 'sanitize_text_field';
        $wp_customize->add_setting($key, ['default' => $data[0], 'sanitize_callback' => $sanitize]);
        $wp_customize->add_control($key, ['type' => $data[2], 'section' => 'pgs_hero', 'label' => $data[1]]);
    }
    $wp_customize->add_setting('pgs_hero_image', ['default' => '', 'sanitize_callback' => 'esc_url_raw']);
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'pgs_hero_image', [
        'label' => 'تصویر پس‌زمینه هیرو',
        'section' => 'pgs_hero',
    ]));

    // ===== Toggle home sections =====
    $wp_customize->add_section('pgs_home_sections', [
        'title'    => __('بخش‌های صفحه اصلی', 'persian-gem-silver'),
        'priority' => 35,
    ]);
    foreach (pgs_get_home_sections() as $key => $label) {
        $wp_customize->add_setting('pgs_show_' . $key, [
            'default' => true,
            'sanitize_callback' => 'wp_validate_boolean',
        ]);
        $wp_customize->add_control('pgs_show_' . $key, [
            'type'    => 'checkbox',
            'section' => 'pgs_home_sections',
            'label'   => 'نمایش بخش: ' . $label,
        ]);
    }
}
add_action('customize_register', 'pgs_customize_register');
