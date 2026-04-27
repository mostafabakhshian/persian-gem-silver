<?php get_header(); ?>
<main id="primary" class="site-main section">
  <div class="container narrow">
    <?php while (have_posts()): the_post(); ?>
      <article <?php post_class('single-article'); ?>>
        <header class="single-header">
          <p class="eyebrow">مجله</p>
          <h1 class="single-title"><?php the_title(); ?></h1>
          <p class="single-meta"><?php echo pgs_to_fa_digits(get_the_date()); ?> · <?php the_author(); ?></p>
        </header>
        <?php if (has_post_thumbnail()): ?>
          <figure class="single-thumb"><?php the_post_thumbnail('pgs-hero'); ?></figure>
        <?php endif; ?>
        <div class="single-content prose"><?php the_content(); ?></div>
      </article>
    <?php endwhile; ?>
  </div>
</main>
<?php get_footer(); ?>
