---
title: Indicating required fields in Gravity Forms
date: "2019-09-05"
---

By default, Gravity Forms indicates required fields with an asterisk. This jQuery snippet changes the asterisk to <em>(required)</em> for accessibility purposes.

```javascript
jQuery('.gfield_required').html(" (required)");
```