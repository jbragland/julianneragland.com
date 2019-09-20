---
title: Indicating required fields in Gravity Forms
date: "2019-09-05"
description: "Hi"
---

By default, the plugin [Gravity Forms](https://www.gravityforms.com/) indicates required fields with an asterisk. This snippet changes the asterisk to <em>(required)</em> for accessibility purposes.

```javascript
jQuery('.gfield_required').html(" (required)");
```