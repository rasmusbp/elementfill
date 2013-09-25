(function( w ){

	'use strict';

	w.ef_classHandler = function ( el, o ) {
		var reset,
			hasClassList = el.classList;

		if ( hasClassList ) {
			for (var i = o.remove.length - 1; i >= 0; i--) {
				el.classList.remove(o.remove[i]);
			}
			el.classList.add(o.add);
		} else {
			reset = /\W*elq-*[a-z]+/;
			el.className = el.className.replace(reset, '');
			el.className = el.className + ' ' + o.add;
		}
	};
	
	w.elementfill = function( element ) {

		// get all or passed DIV's 
		var div = element || w.document.getElementsByTagName( 'div' );
			div = div.length ? div : [div];
		
		// go through all elements and handle all relevant ones
		for( var i = 0, il = div.length; i < il; i++ ){
			if( div[ i ].getAttribute( 'data-elementfill' ) !== null ) {

				var el 		= div[ i ],
					width 	= el.offsetWidth,
					maxData = el.getAttribute( 'data-max-width' ),
					minData = el.getAttribute( 'data-min-width' ),
					max 	= (maxData !== null) ? parseInt(maxData, 10) : window.innerWidth,
					min 	= (minData !== null) ? parseInt(minData, 10) : 0;

				
				// set CSS classes
				if ( width > max ) {
					ef_classHandler( el, {
						add: 'elq-abovemax',
						remove: ['elq-belowmin', 'elq-inrange']
					});
				} else if ( width < min ) {
					ef_classHandler( el, {
						add: 'elq-belowmin',
						remove: ['elq-abovemax', 'elq-inrange']
					});
				} else {
					ef_classHandler( el, {
						add: 'elq-inrange',
						remove: ['elq-abovemax', 'elq-belowmin']
					});
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
