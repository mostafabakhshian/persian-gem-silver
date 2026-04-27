<?php if (!defined('ABSPATH')) exit; ?>
<?php
$hero_img = pgs_mod('pgs_hero_image');
if (!$hero_img) $hero_img = pgs_img('hero-ring.jpg');
?>
<section class="home-hero" aria-label="بخش اصلی">
  <div class="hero-bg">
    <img src="<?php echo esc_url($hero_img); ?>" alt="<?php echo esc_attr(pgs_mod('pgs_hero_title')); ?>" loading="eager" fetchpriority="high">
    <div class="hero-overlay"></div>
  </div>
  <div class="container">
    <div class="hero-content reveal">
      <p class="hero-eyebrow"><?php echo esc_html(pgs_mod('pgs_hero_eyebrow', 'جواهرات نقره اصیل ایرانی')); ?></p>
      <h1>
        <?php
        $title = pgs_mod('pgs_hero_title', 'زیبایی طبیعی، هنر دست‌ساز');
        $parts = explode('،', $title);
        if (count($parts) === 2) {
            echo esc_html(trim($parts[0])) . '،<br><span class="accent">' . esc_html(trim($parts[1])) . '</span>';
        } else {
            echo esc_html($title);
        }
        ?>
      </h1>
      <p><?php echo esc_html(pgs_mod('pgs_hero_text', 'مجموعه‌ای منتخب از انگشترهای نقره، سنگ‌های اصل و جواهرات دست‌ساز با ضمانت اصالت و کیفیت.')); ?></p>
      <div class="actions">
        <a class="btn btn-accent btn-lg" href="<?php echo esc_url(pgs_mod('pgs_hero_cta1_url', '/shop')); ?>">
          <?php echo esc_html(pgs_mod('pgs_hero_cta1', 'مشاهده محصولات')); ?>
        </a>
        <a class="btn btn-light btn-lg" href="<?php echo esc_url(pgs_mod('pgs_hero_cta2_url', '/gemstone-discovery')); ?>">
          <?php echo esc_html(pgs_mod('pgs_hero_cta2', 'راهنمای سنگ‌ها')); ?>
        </a>
      </div>
    </div>
  </div>
</section>
