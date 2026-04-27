<?php
if (!defined('ABSPATH')) exit;
global $product;
?>
<li <?php wc_product_class('', $product); ?> style="list-style:none;">
  <?php set_query_var('pgs_product', $product); get_template_part('template-parts/plp/product-card'); ?>
</li>
