<?php get_header(); ?>
<main id="primary" class="site-main section">
  <div class="container">
    <?php if (have_posts()): ?>
      <div class="post-grid">
        <?php while (have_posts()): the_post(); ?>
          <article <?php post_class('post-card card'); ?>>
            <?php if (has_post_thumbnail()): ?>
              <a class="post-thumb" href="<?php the_permalink(); ?>">
                <?php the_post_thumbnail('pgs-card'); ?>
              </a>
            <?php endif; ?>
            <div class="post-body">
              <h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
              <div class="post-excerpt"><?php the_excerpt(); ?></div>
              <a class="card-link" href="<?php the_permalink(); ?>">ادامه مطلب</a>
            </div>
          </article>
        <?php endwhile; ?>
      </div>
      <div class="pagination"><?php the_posts_pagination(['prev_text' => 'قبلی', 'next_text' => 'بعدی']); ?></div>
    <?php else: ?>
      <p>مطلبی یافت نشد.</p>
    <?php endif; ?>
  </div>
</main>
<?php get_footer(); ?>
