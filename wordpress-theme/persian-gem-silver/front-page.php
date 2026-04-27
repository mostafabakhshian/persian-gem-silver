<?php get_header(); ?>

<main id="primary" class="site-main home" role="main">
  <?php get_template_part('template-parts/home/hero'); ?>

  <?php foreach (pgs_get_home_sections() as $slug => $label): ?>
    <?php if (pgs_section_visible($slug)): ?>
      <?php get_template_part('template-parts/home/' . $slug); ?>
    <?php endif; ?>
  <?php endforeach; ?>
</main>

<?php get_footer(); ?>
