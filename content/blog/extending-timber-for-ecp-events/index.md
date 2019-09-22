---
title: Extending Timber for Events Calendar Pro events
date: "2019-06-24"
---

We recently started using the plugin [Timber](https://www.upstatement.com/timber/) at work. Among other things, it brings an object-oriented feel to WordPress by letting you extend its classes. For example, I extended the `Timber\Post` object so I could access [Events Calendar Pro functions](https://support.theeventscalendar.com/666307-Using-tribe_get_events) in my template files.

```php
class JBREvent extends Timber\Post {

	public function start_date() {
		$start_date = tribe_get_start_date( $this->ID, false, 'M j, Y' );

		return $start_date;
	}

	public function start_time() {
		$start_time = tribe_get_start_date( $this->ID, false, 'g:i a' );

		return $start_time;
	}

	public function end_time() {
		$end_time = tribe_get_end_date( $this->ID, false, 'g:i a' );

		return $end_time;
	}

}
```

Timber's [documentation](https://timber.github.io/docs/guides/extending-timber/#an-example-that-extends-timberpost) has more on this, including some info on internal caching for production sites.