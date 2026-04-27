<!doctype html>
<html <?php language_attributes(); ?> dir="rtl">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">
  <?php wp_head(); ?>
</head>
<body <?php body_class('pgs-body'); ?>>
<?php wp_body_open(); ?>

<a class="skip-link screen-reader-text" href="#content">پرش به محتوا</a>

<?php get_template_part('template-parts/home/announcement'); ?>

<header class="site-header" role="banner">
  <div class="container header-row">
    <button class="menu-toggle" aria-label="باز کردن منو" data-menu-toggle>
      <?php echo pgs_icon('menu', 24); ?>
    </button>

    <a class="brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php bloginfo('name'); ?>">
      <?php
      if (has_custom_logo()) {
          the_custom_logo();
      } else {
          echo '<span class="brand-name">' . esc_html(get_bloginfo('name')) . '</span>';
          echo '<span class="brand-tag">جواهر نقره و سنگ</span>';
      }
      ?>
    </a>

    <nav class="main-nav" aria-label="منوی اصلی" data-main-nav>
      <button class="menu-close" aria-label="بستن منو" data-menu-close>
        <?php echo pgs_icon('close', 24); ?>
      </button>
      <?php
      wp_nav_menu([
          'theme_location' => 'primary',
          'container'      => false,
          'menu_class'     => 'nav-list',
          'fallback_cb'    => 'pgs_nav_fallback',
          'depth'          => 2,
      ]);
      ?>
    </nav>

    <div class="header-actions">
      <button class="icon-btn" aria-label="جستجو" data-search-toggle>
        <?php echo pgs_icon('search', 22); ?>
      </button>
      <a class="icon-btn" href="<?php echo esc_url(wp_login_url()); ?>" aria-label="حساب کاربری">
        <?php echo pgs_icon('user', 22); ?>
      </a>
      <?php if (class_exists('WooCommerce')) : ?>
        <a class="icon-btn cart-btn" href="<?php echo esc_url(wc_get_cart_url()); ?>" aria-label="سبد خرید">
          <?php echo pgs_icon('cart', 22); ?>
          <span class="cart-count"><?php echo pgs_to_fa_digits(WC()->cart ? WC()->cart->get_cart_contents_count() : 0); ?></span>
        </a>
      <?php endif; ?>
    </div>
  </div>

  <div class="search-overlay" data-search-overlay>
    <div class="container">
      <?php get_search_form(); ?>
    </div>
  </div>
</header>

<?php
function pgs_nav_fallback() {
    echo '<ul class="nav-list">';
    $items = [
        '/'                    => 'خانه',
        '/shop'                => 'فروشگاه',
        '/product-category/rings' => 'انگشتر',
        '/product-category/gemstones' => 'سنگ',
        '/product-category/bracelets' => 'دستبند',
        '/bespoke-design'      => 'طراحی سفارشی',
        '/magazine'            => 'مجله',
        '/contact'             => 'تماس با ما',
    ];
    foreach ($items as $url => $label) {
        echo '<li><a href="' . esc_url(home_url($url)) . '">' . esc_html($label) . '</a></li>';
    }
    echo '</ul>';
}
?>

<div id="content" class="site-content">
