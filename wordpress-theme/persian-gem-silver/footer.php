<footer class="site-footer" role="contentinfo">
  <div class="container">
    <p><?php bloginfo('name'); ?> — جواهرات نقره و سنگ‌های قیمتی.</p>
    <?php
    wp_nav_menu([
        'theme_location' => 'footer',
        'container' => 'nav',
        'container_class' => 'footer-nav',
        'fallback_cb' => false,
    ]);
    ?>
    <p class="muted">© <?php echo esc_html(wp_date('Y')); ?> تمامی حقوق محفوظ است.</p>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
