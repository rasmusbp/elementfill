
# ELEMENTfill: Element queries polyfill

* Author: Rasmus Bangsted Pedersen (c) 2013
* License: MIT/GPLv2

## Usage:

### HTML
´´´
<div class="module">no element query attached</div>
<div class="module" data-elementfill data-max-width="1280" data-min-width="800">
	<div class="query-info">(queries: max: 1280px, min: 800px)</div>
</div>
<div class="module" data-elementfill data-max-width="768" data-min-width="480">
	<div class="query-info">(queries: max: 768px, min: 480px)</div>
</div>
<div class="module" data-elementfill data-min-width="480">
	<div class="query-info">(queries: max: none, min: 800px)</div>
</div>
<div class="module" data-elementfill data-max-width="768">
	<div class="query-info">(queries: max: 640px, min: none)</div>
</div>
´´´

### JS
Refresh all elements
´´´
window.elementfill();
´´´

Only update specific elements (useful if elements are beign added dynamically to the DOM e.g. due to client-side templating)
´´´
// Pass in a DIV element 
var item = getElementByClassName('single-item');
window.elementfill(item);

// ... or an array of DIV
var items = getElementByClassName('items');
window.elementfill(items);

´´´
