<?php get_header(); ?>
<main id="primary" class="site-main section">
  <div class="container narrow">
    <?php while (have_posts()): the_post(); ?>
      <article <?php post_class('page-article card'); ?>>
        <?php if (has_post_thumbnail()): ?>
          <div class="page-thumb"><?php the_post_thumbnail('pgs-hero'); ?></div>
        <?php endif; ?>
        <div class="page-body">
          <h1 class="page-title"><?php the_title(); ?></h1>
          <div class="page-content prose"><?php the_content(); ?></div>
        </div>
      </article>
    <?php endwhile; ?>
  </div>
</main>
<?php get_footer(); ?>
