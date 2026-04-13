<?php
$query_args = [
    'post_type' => 'post',
    'posts_per_page' => 4,
    'post_status' => 'publish',
];

if (class_exists('WooCommerce')) {
    $query_args = [
        'post_type' => 'product',
        'posts_per_page' => 4,
        'post_status' => 'publish',
        'meta_key' => 'total_sales',
        'orderby' => 'meta_value_num',
        'order' => 'DESC',
    ];
}

$best_sellers = new WP_Query($query_args);

if (!$best_sellers->have_posts()) {
    return;
}
?>
<section class="section">
  <div class="container">
    <h2 class="section-title">پرفروش‌ها</h2>
    <div class="grid">
      <?php while ($best_sellers->have_posts()) : $best_sellers->the_post(); ?>
        <article class="card">
          <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
          <p><?php echo esc_html(wp_trim_words(get_the_excerpt(), 18)); ?></p>
          <a class="card-link" href="<?php the_permalink(); ?>">مشاهده</a>
        </article>
      <?php endwhile; ?>
    </div>
  </div>
</section>
<?php wp_reset_postdata(); ?>
