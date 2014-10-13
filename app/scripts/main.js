(function () {
  'use strict';

  	// custom transformation: scale header's title
    var titleStyle = document.querySelector('.navbar-brand').style;
    var titleTagStyle = document.querySelector('.navbar-brand-tag').style;
    var toggleMobileMenu = document.querySelector('.navbar-toggle');

    addEventListener('core-header-transform', function(e) {
		var d = e.detail;
		var m = d.height - d.condensedHeight;
		var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75);
        var scaleOp = (m - d.y) / m;

		titleStyle.webkitTransform = titleStyle.transform =
			'scale(' + (scale) + ') translateZ(0)';
        titleTagStyle.opacity = scaleOp;
    });

    toggleMobileMenu.addEventListener('click', function() {
    	document.querySelector('core-drawer-panel').togglePanel();
    });

    // Follow button
    // window.twttr = (function (d, s, id) {
    //     var t, js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) return;
    //     js = d.createElement(s); js.id = id;
    //     js.src= 'https://platform.twitter.com/widgets.js';
    //     fjs.parentNode.insertBefore(js, fjs);
    //
    //     return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) }});
    // }(document, 'script', 'twitter-wjs'));

    // Grid plugin init
    $('.experience-list').gridalicious({
        gutter: 20,
        width: 280,
        selector: '.experience-item'
    });
})();
