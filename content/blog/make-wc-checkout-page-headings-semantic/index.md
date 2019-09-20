---
title: Make WooCommerce checkout page headings semantic
date: "2019-09-03"
---

On a recent client project, I noticed that the headings on WooCommerce's checkout page jump straight from level one to level three. This isn't great for screen reader users, who often use headings for navigation. To fix it, I added a visually hidden `<h2>` as suggested by a [WordPress developer on GitHub](https://github.com/woocommerce/woocommerce/issues/21173#issuecomment-415705426):

```php
add_action( 'woocommerce_before_checkout_form', 'jbr_add_checkout_h2' );
function jbr_add_checkout_h2( $checkout ) {
    echo '<h2 class="screen-reader-text">Your details and order</h2> ' ;
}
```