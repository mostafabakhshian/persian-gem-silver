<?php get_header(); ?>
<main class="section">
  <div class="container">
    <?php if (have_posts()) : ?>
      <?php while (have_posts()) : the_post(); ?>
        <article class="card" style="margin-bottom:16px;">
          <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
          <div><?php the_excerpt(); ?></div>
        </article>
      <?php endwhile; ?>
    <?php else : ?>
      <p>محتوایی یافت نشد.</p>
    <?php endif; ?>
  </div>
</main>
<?php get_footer(); ?>
