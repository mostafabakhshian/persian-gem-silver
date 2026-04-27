<?php
/**
 * Persian Gem Silver – Theme functions
 */

if (!defined('ABSPATH')) {
    exit;
}

define('PGS_THEME_VERSION', '1.0.0');
define('PGS_THEME_DIR', get_template_directory());
define('PGS_THEME_URI', get_template_directory_uri());

require_once PGS_THEME_DIR . '/inc/helpers.php';
require_once PGS_THEME_DIR . '/inc/theme-setup.php';
require_once PGS_THEME_DIR . '/inc/enqueue.php';
require_once PGS_THEME_DIR . '/inc/customizer.php';
require_once PGS_THEME_DIR . '/inc/home-sections.php';
require_once PGS_THEME_DIR . '/inc/woocommerce.php';
require_once PGS_THEME_DIR . '/inc/seed-content.php';
