# ELEMENTfill: Element queries polyfill

* Author: Rasmus Bangsted Pedersen (c) 2013
* License: MIT/GPLv2

## About:
A simple polyfill that adds CSS hooks to DOM elements _(for now only DIVs)_ based on the element's width.

Instead of relying on ``@media`` queries to control the styling and layout of a responsive website, you sometimes need a bit more control over individual elements.
This polyfill helps you achieve that!


## Usage:

### HTML
```
<div class="module" data-elementfill data-max-width="1280" data-min-width="800">
	...
</div>
<div class="module" data-elementfill data-max-width="768" data-min-width="480">
	...
</div>
<div class="module" data-elementfill data-min-width="480">
	...
</div>
<div class="module" data-elementfill data-max-width="768">
	...
</div>
```

### JS
The ``elementfill`` method will automatically execute on load and on resize.
If you need to run the method manually heres how:

Update all elements
```
window.elementfill();
```

Only update specific elements (useful if elements are beign added dynamically to the DOM e.g. via client-side templating)
```
// Pass in a DIV element 
var item = getElementsByClassName('single-item');
window.elementfill(item);

// ... or an array of DIV
var items = getElementsByClassName('items');
window.elementfill(items);

```

### CSS
Depending on the width of the element and the queries applied, the following CSS classes will be toggled on the element:
```
.elq-abovemax {
	/* The element is wider than the specified max-width */
}
.elq-belowmin {
	/* The element is more narrow than the specified min-width */
}
.elq-inrange {
	/* The element width is between the min-width and max-width */
}

```
