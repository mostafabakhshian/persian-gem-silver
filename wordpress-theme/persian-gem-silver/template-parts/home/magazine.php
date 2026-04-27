<?php if (!defined('ABSPATH')) exit; ?>
<section class="section home-magazine">
  <div class="container">
    <div class="row-head reveal">
      <div>
        <p class="eyebrow">مجله آسمون</p>
        <h2 class="section-title">آخرین مقالات</h2>
      </div>
      <a class="view-all" href="<?php echo esc_url(home_url('/magazine')); ?>">همه مقالات ←</a>
    </div>
    <div class="magazine-grid">
      <?php
      $posts = get_posts(['numberposts' => 3, 'post_status' => 'publish']);
      if ($posts) {
          foreach ($posts as $post): setup_postdata($post); ?>
            <article class="magazine-card">
              <a class="mc-thumb" href="<?php the_permalink(); ?>">
                <?php if (has_post_thumbnail()): the_post_thumbnail('pgs-card');
                else: ?><img src="<?php echo esc_url(pgs_img('gemstones-collection.jpg')); ?>" alt=""><?php endif; ?>
              </a>
              <div class="mc-body">
                <div class="mc-cat"><?php $cats = get_the_category(); echo $cats ? esc_html($cats[0]->name) : 'مجله'; ?></div>
                <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <div class="mc-meta"><?php echo pgs_to_fa_digits(get_the_date()); ?></div>
              </div>
            </article>
          <?php endforeach;
          wp_reset_postdata();
      } else {
          $fallbacks = [
              ['راهنمای انتخاب فیروزه اصل', 'سنگ‌شناسی', 'gemstones-collection.jpg'],
              ['تفاوت نقره ۹۲۵ و نقره خالص', 'آموزش', 'silver-bullion.jpg'],
              ['نگهداری از جواهرات نقره', 'مراقبت', 'bracelet.jpg'],
          ];
          foreach ($fallbacks as $f): ?>
            <article class="magazine-card">
              <a class="mc-thumb" href="#"><img src="<?php echo esc_url(pgs_img($f[2])); ?>" alt=""></a>
              <div class="mc-body">
                <div class="mc-cat"><?php echo esc_html($f[1]); ?></div>
                <h3><a href="#"><?php echo esc_html($f[0]); ?></a></h3>
                <div class="mc-meta">۵ دقیقه مطالعه</div>
              </div>
            </article>
          <?php endforeach;
      }
      ?>
    </div>
  </div>
</section>
