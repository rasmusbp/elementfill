(function( w ){

	// Enable strict mode
	"use strict";

	w.rspsivefill = function( div ) {

		var div = w.rspsiveNodes || w.document.getElementsByTagName( "div" );

		// Create global array for caching elements
		w.rspsiveNodes = w.rspsiveNodes || [];

		// Loop the elements
		for( var i = 0, il = div.length; i < il; i++ ){
			if( div[ i ].getAttribute( "data-rspsive" ) !== null ) {

				// Get range
				var el = div[ i ],
					width = el.offsetWidth,
					maxData = el.getAttribute( "data-max-width" ),
					minData = el.getAttribute( "data-min-width" ),
					max = (maxData !== null) ? parseInt(maxData, 10) : window.innerWidth,
					min = (minData !== null) ? parseInt(minData, 10) : 0;

				// cache elem
				if ( !div[ i ].rspsiveNode ) {
					w.rspsiveNodes.push( div[ i ] );
					div[ i ].rspsiveNode  = true;
				}

				// reset CSS classes
				el.className = el.className.replace(/\W*rspsive-*[a-z]+/, '');

				// Is element invisible? If so, skip it!
				if ( width === 0 && el.offsetHeight === 0 ) {
					continue;
				}

				if ( width > max ) {
					el.className = el.className + " rspsive-abovemax";
				} else if ( width < min ) {
					el.className = el.className + " rspsive-belowmin";
				} else {
					el.className = el.className + " rspsive-inrange";
				}

			}
		}

	};

	// Run on resize and domready (w.load as a fallback)
	if( w.addEventListener ){
		w.addEventListener( "resize", w.rspsivefill, false );
		w.addEventListener( "DOMContentLoaded", function(){
			w.rspsivefill();
			// Run once only
			w.removeEventListener( "load", w.rspsivefill, false );
		}, false );
		w.addEventListener( "load", w.rspsivefill, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onload", w.rspsivefill );
	}



}( this ));