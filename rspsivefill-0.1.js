(function( w ){

	'use strict';
	
	w.rspsivefill = function() {
		
		// get all DIV's or "cached" elements if such exist
		var div = w.rspsiveNodes || w.document.getElementsByTagName( 'div' );

		// create global array in order to "cache" elements
		w.rspsiveNodes = w.rspsiveNodes || [];

		// go through all elements and handle all relevant ones
		for( var i = 0, il = div.length; i < il; i++ ){
			if( div[ i ].getAttribute( 'data-rspsive' ) !== null ) {

				var el = div[ i ],
					width = el.offsetWidth,
					maxData = el.getAttribute( 'data-max-width' ),
					minData = el.getAttribute( 'data-min-width' ),
					max = (maxData !== null) ? parseInt(maxData, 10) : window.innerWidth,
					min = (minData !== null) ? parseInt(minData, 10) : 0;

				// add to global array for "caching"
				if ( !div[ i ].rspsiveNode ) {
					w.rspsiveNodes.push( div[ i ] );
					div[ i ].rspsiveNode  = true;
				}

				// reset CSS classes
				el.className = el.className.replace(/\W*rspsive-*[a-z]+/, '');

				// skip element if it's not present in the render tree
				if ( width === 0 && el.offsetHeight === 0 ) {
					continue;
				}
				
				// set CSS classes
				if ( width > max ) {
					el.className = el.className + ' rspsive-abovemax';
				} else if ( width < min ) {
					el.className = el.className + ' rspsive-belowmin';
				} else {
					el.className = el.className + ' rspsive-inrange';
				}

			}
		}

	};

	// set up event listeners, on resize and on DOM ready
	if( w.addEventListener ){
		w.addEventListener( 'resize', w.rspsivefill, false );
		w.addEventListener( 'DOMContentLoaded', function(){
			w.rspsivefill();
			w.removeEventListener( 'load', w.rspsivefill, false );
		}, false );
		w.addEventListener( 'load', w.rspsivefill, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( 'onload', w.rspsivefill );
	}



}( this ));
