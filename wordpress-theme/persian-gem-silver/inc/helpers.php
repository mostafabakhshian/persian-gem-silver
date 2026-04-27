<?php
if (!defined('ABSPATH')) exit;

/**
 * Get image URL from theme assets
 */
function pgs_img($name) {
    return PGS_THEME_URI . '/assets/images/' . ltrim($name, '/');
}

/**
 * Format Persian price (Toman)
 */
function pgs_price_fa($amount) {
    if (!is_numeric($amount)) return $amount;
    $formatted = number_format((float)$amount);
    // Convert to Persian digits
    $en = ['0','1','2','3','4','5','6','7','8','9'];
    $fa = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return str_replace($en, $fa, $formatted) . ' تومان';
}

/**
 * Convert numbers to Persian digits
 */
function pgs_to_fa_digits($str) {
    $en = ['0','1','2','3','4','5','6','7','8','9'];
    $fa = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return str_replace($en, $fa, (string)$str);
}

/**
 * Safe get theme mod
 */
function pgs_mod($key, $default = '') {
    return get_theme_mod($key, $default);
}

/**
 * Render an icon (inline SVG names from /assets/images/icons or simple set)
 */
function pgs_icon($name, $size = 20) {
    $icons = [
        'shield'    => '<path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/>',
        'truck'     => '<path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
        'gem'       => '<path d="M6 3h12l3 6-9 12L3 9z"/>',
        'sparkles'  => '<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z"/>',
        'phone'     => '<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>',
        'whatsapp'  => '<path d="M20 4a10 10 0 00-15 13L4 22l5-1a10 10 0 0011-17z"/>',
        'arrow-left'=> '<path d="M19 12H5m7-7l-7 7 7 7"/>',
        'arrow-right'=> '<path d="M5 12h14m-7-7l7 7-7 7"/>',
        'star'      => '<path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/>',
        'heart'     => '<path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0112 6a5.5 5.5 0 019.5 6c-2.5 4.5-9.5 9-9.5 9z"/>',
        'cart'      => '<path d="M3 3h2l2.4 12.3a2 2 0 002 1.7h9.2a2 2 0 002-1.6L22 8H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/>',
        'menu'      => '<path d="M3 6h18M3 12h18M3 18h18"/>',
        'close'     => '<path d="M18 6L6 18M6 6l12 12"/>',
        'plus'      => '<path d="M12 5v14M5 12h14"/>',
        'minus'     => '<path d="M5 12h14"/>',
        'check'     => '<path d="M5 12l5 5 9-9"/>',
        'search'    => '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
        'user'      => '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>',
        'upload'    => '<path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5-5 5 5M12 5v12"/>',
        'award'     => '<circle cx="12" cy="8" r="6"/><path d="M9 14l-2 7 5-3 5 3-2-7"/>',
    ];
    $body = isset($icons[$name]) ? $icons[$name] : '';
    return sprintf(
        '<svg class="pgs-icon" width="%1$d" height="%1$d" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">%2$s</svg>',
        (int)$size,
        $body
    );
}
