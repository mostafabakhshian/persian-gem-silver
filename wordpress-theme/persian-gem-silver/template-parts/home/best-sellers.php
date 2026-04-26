<?php
$best_sellers = pgs_get_best_selling_products(4);
?>
<section class="section">
  <div class="container">
    <h2 class="section-title">پرفروش‌ها</h2>

    <?php if ($best_sellers instanceof WP_Query && $best_sellers->have_posts()) : ?>
      <div class="grid products-grid">
        <?php while ($best_sellers->have_posts()) : $best_sellers->the_post(); ?>
          <?php pgs_render_product_card(get_the_ID()); ?>
        <?php endwhile; ?>
      </div>
      <?php wp_reset_postdata(); ?>
    <?php else : ?>
      <?php
      $fallback_posts = new WP_Query([
          'post_type' => 'post',
          'posts_per_page' => 4,
          'post_status' => 'publish',
      ]);
      ?>
      <?php if ($fallback_posts->have_posts()) : ?>
        <div class="grid">
          <?php while ($fallback_posts->have_posts()) : $fallback_posts->the_post(); ?>
            <article class="card">
              <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
              <p><?php echo esc_html(wp_trim_words(get_the_excerpt(), 18)); ?></p>
              <a class="card-link" href="<?php the_permalink(); ?>">مشاهده</a>
            </article>
          <?php endwhile; ?>
        </div>
        <?php wp_reset_postdata(); ?>
      <?php endif; ?>
    <?php endif; ?>
  </div>
</section>
