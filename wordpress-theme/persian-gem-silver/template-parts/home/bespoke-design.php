<?php if (!defined('ABSPATH')) exit; ?>
<section class="section home-bespoke">
  <div class="container">
    <div class="section-head text-center reveal">
      <span class="badge badge-soft">مشاوره رایگان</span>
      <h2 class="section-title" style="margin-top:14px;">طراحی اختصاصی جواهر شما</h2>
      <p class="section-subtitle" style="margin-inline:auto;">ایده، الهام یا طرح خود را برای ما بفرستید. کارشناسان طراحی ما در کنار شما هستند تا قطعه‌ای منحصربه‌فرد بسازیم.</p>
    </div>
    <div class="bespoke-grid">
      <ol class="bespoke-steps reveal">
        <li>
          <span class="step-num">۱</span>
          <h4>ایده اولیه</h4>
          <p>نوع جواهر، سنگ مدنظر یا الهام خود را با ما در میان بگذارید.</p>
        </li>
        <li>
          <span class="step-num">۲</span>
          <h4>تصاویر مرجع</h4>
          <p>عکس‌های الهام‌بخش یا اسکیس‌های اولیه را برای ما بفرستید.</p>
        </li>
        <li>
          <span class="step-num">۳</span>
          <h4>مشاوره طراحی</h4>
          <p>طراح ما با شما تماس می‌گیرد و طرح نهایی را تأیید می‌کنید.</p>
        </li>
        <li>
          <span class="step-num">۴</span>
          <h4>ساخت و تحویل</h4>
          <p>هنرمند نقره‌ساز ما قطعه را در ۲ تا ۴ هفته آماده تحویل می‌کند.</p>
        </li>
      </ol>

      <form class="bespoke-form reveal" data-bespoke-form>
        <h3>ثبت درخواست طراحی</h3>
        <p class="muted" style="margin-bottom: 18px;">پر کردن فرم زیر شما را به هیچ خریدی متعهد نمی‌کند.</p>

        <label>نوع قطعه مدنظر:</label>
        <div class="chip-row">
          <?php foreach (['انگشتر', 'دستبند', 'گردنبند', 'گوشواره', 'ست کامل'] as $cat): ?>
            <label class="chip"><input type="checkbox" name="cat[]" value="<?php echo esc_attr($cat); ?>"><?php echo esc_html($cat); ?></label>
          <?php endforeach; ?>
        </div>

        <div class="field">
          <label for="bespoke-name">نام و نام خانوادگی</label>
          <input id="bespoke-name" name="name" type="text" required>
        </div>
        <div class="field">
          <label for="bespoke-phone">شماره تماس</label>
          <input id="bespoke-phone" name="phone" type="tel" required>
        </div>
        <div class="field">
          <label for="bespoke-desc">توضیح ایده شما</label>
          <textarea id="bespoke-desc" name="desc" rows="4" placeholder="مثلاً: انگشتر مردانه با سنگ فیروزه، طرح کلاسیک با حکاکی…"></textarea>
        </div>
        <div class="field">
          <label class="upload-box">
            <?php echo pgs_icon('upload', 22); ?>
            <span>افزودن تصویر مرجع (اختیاری)</span>
            <input type="file" accept="image/*" hidden multiple>
          </label>
        </div>

        <button type="submit" class="btn btn-primary btn-block btn-lg">ارسال درخواست</button>
      </form>
    </div>
  </div>
</section>
