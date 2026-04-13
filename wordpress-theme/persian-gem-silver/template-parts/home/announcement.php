<?php $announcement = get_theme_mod('pgs_announcement_text'); ?>
<?php if (!empty($announcement)) : ?>
<section class="announcement-bar" aria-label="اعلان سایت">
  <div class="container">
    <?php echo esc_html($announcement); ?>
  </div>
</section>
<?php endif; ?>
