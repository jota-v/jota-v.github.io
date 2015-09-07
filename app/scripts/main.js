// jshint devel:true
'use strict';

InstantClick.init();

 var md = new MobileDetect(window.navigator.userAgent);
 if (md.mobile()) {
     $('body').addClass('mobile');
 } else {
     $('body').addClass('no-mobile');
 }
