</div><!-- /#content -->

<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col footer-brand">
        <h3 class="footer-brand-name"><?php bloginfo('name'); ?></h3>
        <p class="footer-tagline">جواهرات نقره و سنگ‌های قیمتی دست‌ساز با ضمانت اصالت.</p>
        <div class="footer-social">
          <?php if ($ig = pgs_mod('pgs_brand_instagram')): ?>
            <a href="<?php echo esc_url($ig); ?>" aria-label="اینستاگرام" target="_blank" rel="noopener">اینستاگرام</a>
          <?php endif; ?>
          <?php if ($tg = pgs_mod('pgs_brand_telegram')): ?>
            <a href="<?php echo esc_url($tg); ?>" aria-label="تلگرام" target="_blank" rel="noopener">تلگرام</a>
          <?php endif; ?>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="widget-title">دسترسی سریع</h4>
        <?php
        wp_nav_menu([
            'theme_location' => 'footer',
            'container'      => false,
            'menu_class'     => 'footer-menu',
            'fallback_cb'    => false,
            'depth'          => 1,
        ]);
        ?>
      </div>

      <div class="footer-col">
        <h4 class="widget-title">پشتیبانی</h4>
        <ul class="footer-menu">
          <li><a href="<?php echo esc_url(home_url('/faq')); ?>">سوالات متداول</a></li>
          <li><a href="<?php echo esc_url(home_url('/trust')); ?>">ضمانت اصالت</a></li>
          <li><a href="<?php echo esc_url(home_url('/contact')); ?>">تماس با ما</a></li>
          <li><a href="<?php echo esc_url(home_url('/bespoke-design')); ?>">سفارش طراحی اختصاصی</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="widget-title">تماس</h4>
        <ul class="footer-contact">
          <?php if ($ph = pgs_mod('pgs_brand_phone')): ?>
            <li><?php echo pgs_icon('phone', 16); ?> <span><?php echo pgs_to_fa_digits(esc_html($ph)); ?></span></li>
          <?php endif; ?>
          <?php if ($em = pgs_mod('pgs_brand_email')): ?>
            <li>ایمیل: <a href="mailto:<?php echo esc_attr($em); ?>"><?php echo esc_html($em); ?></a></li>
          <?php endif; ?>
          <?php if ($ad = pgs_mod('pgs_brand_address')): ?>
            <li>نشانی: <?php echo esc_html($ad); ?></li>
          <?php endif; ?>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="muted">© <?php echo pgs_to_fa_digits(wp_date('Y')); ?> <?php bloginfo('name'); ?> — تمامی حقوق محفوظ است.</p>
      <div class="footer-trust">
        <span><?php echo pgs_icon('shield', 16); ?> ضمانت اصالت</span>
        <span><?php echo pgs_icon('truck', 16); ?> ارسال امن</span>
        <span><?php echo pgs_icon('award', 16); ?> کیفیت برتر</span>
      </div>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
