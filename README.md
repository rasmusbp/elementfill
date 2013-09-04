# ELEMENTfill: Element queries polyfill

* Author: Rasmus Bangsted Pedersen (c) 2013
* License: MIT/GPLv2

## Usage:

### HTML
```
<div class="module">no element query attached</div>
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
var item = getElementByClassName('single-item');
window.elementfill(item);

// ... or an array of DIV
var items = getElementByClassName('items');
window.elementfill(items);

```
