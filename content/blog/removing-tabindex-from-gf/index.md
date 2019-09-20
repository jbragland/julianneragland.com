---
title: Removing tabindex from Gravity Forms
date: "2019-08-14"
---

During an accessibility audit by a local firm, I learned not to use the `tabindex` attribute (unless absolutely necessary) because it can interfere with the natural tab order of the page for screen reader users. This snippet removes it entirely from Gravity Forms.

```php
add_filter( 'gform_tabindex', '__return_false' );
```