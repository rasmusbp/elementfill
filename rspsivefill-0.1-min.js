(function(a){"use strict";a.rspsivefill=function(b){var b=a.rspsiveNodes||a.document.getElementsByTagName("div");a.rspsiveNodes=a.rspsiveNodes||[];for(var c=0,d=b.length;d>c;c++)if(null!==b[c].getAttribute("data-rspsive")){var e=b[c],f=e.offsetWidth,g=e.getAttribute("data-max-width"),h=e.getAttribute("data-min-width"),i=null!==g?parseInt(g,10):window.innerWidth,j=null!==h?parseInt(h,10):0;if(b[c].rspsiveNode||(a.rspsiveNodes.push(b[c]),b[c].rspsiveNode=!0),e.className=e.className.replace(/\W*rspsive-*[a-z]+/,""),0===f&&0===e.offsetHeight)continue;e.className=f>i?e.className+" rspsive-abovemax":j>f?e.className+" rspsive-belowmin":e.className+" rspsive-inrange"}},a.addEventListener?(a.addEventListener("resize",a.rspsivefill,!1),a.addEventListener("DOMContentLoaded",function(){a.rspsivefill(),a.removeEventListener("load",a.rspsivefill,!1)},!1),a.addEventListener("load",a.rspsivefill,!1)):a.attachEvent&&a.attachEvent("onload",a.rspsivefill)})(this);