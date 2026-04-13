<?php
$section_page = isset($args['page']) ? $args['page'] : null;
$section_title = isset($args['title']) ? $args['title'] : '';
$button_label = isset($args['button_label']) ? $args['button_label'] : 'مشاهده';

if (!$section_page) {
    return;
}
?>
<section class="section">
  <div class="container">
    <?php if (!empty($section_title)) : ?>
      <h2 class="section-title"><?php echo esc_html($section_title); ?></h2>
    <?php endif; ?>

    <div class="grid grid-single">
      <?php pgs_render_page_card($section_page, $button_label); ?>
    </div>
  </div>
</section>
