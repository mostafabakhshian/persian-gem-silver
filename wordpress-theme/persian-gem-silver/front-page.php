<?php
get_header();
?>
<main>
  <?php get_template_part('template-parts/home/announcement'); ?>
  <?php get_template_part('template-parts/home/hero'); ?>
  <?php get_template_part('template-parts/home/best-sellers'); ?>
  <?php get_template_part('template-parts/home/latest-products'); ?>

  <?php foreach (pgs_get_home_sections() as $setting_key => $section_label) : ?>
    <?php
    $page = pgs_get_theme_page($setting_key);
    if (!$page) {
        continue;
    }
    get_template_part('template-parts/home/dynamic-page-section', null, [
        'page' => $page,
        'title' => $section_label,
        'button_label' => 'مشاهده جزئیات',
    ]);
    ?>
  <?php endforeach; ?>
</main>
<?php get_footer(); ?>
