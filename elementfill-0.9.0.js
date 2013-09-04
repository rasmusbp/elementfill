(function( w ){

	'use strict';
	
	w.elementfill = function( element ) {

		// get all or passed DIV's 
		var div = element || w.document.getElementsByTagName( 'div' );
			div = div.length ? div : [div];
		
		// go through all elements and handle all relevant ones
		for( var i = 0, il = div.length; i < il; i++ ){
			if( div[ i ].getAttribute( 'data-elementfill' ) !== null ) {

				var el = div[ i ],
					width = el.offsetWidth,
					maxData = el.getAttribute( 'data-max-width' ),
					minData = el.getAttribute( 'data-min-width' ),
					max = (maxData !== null) ? parseInt(maxData, 10) : window.innerWidth,
					min = (minData !== null) ? parseInt(minData, 10) : 0;

				// reset CSS classes
				el.className = el.className.replace(/\W*elq-*[a-z]+/, '');
				
				// set CSS classes
				if ( width > max ) {
					el.className = el.className + ' elq-abovemax';
				} else if ( width < min ) {
					el.className = el.className + ' elq-belowmin';
				} else {
					el.className = el.className + ' elq-inrange';
				}

			}
		}

	};

	// set up event listeners, on resize and on DOM ready
	if( w.addEventListener ){
		w.addEventListener( 'resize', function () { w.elementfill(); }, false );
		w.addEventListener( 'DOMContentLoaded', function(){
			w.elementfill();
			w.removeEventListener( 'load', function () { w.elementfill(); }, false );
		}, false );
		w.addEventListener( 'load', function () { w.elementfill(); }, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( 'onload', function () { w.elementfill(); } );
	}



}( this ));
