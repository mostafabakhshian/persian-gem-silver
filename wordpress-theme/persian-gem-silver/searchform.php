<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
  <label for="s" class="screen-reader-text">جستجو</label>
  <input id="s" type="search" name="s" placeholder="جستجو در محصولات و مقالات…" value="<?php echo get_search_query(); ?>">
  <button type="submit" class="btn btn-primary">جستجو</button>
</form>
