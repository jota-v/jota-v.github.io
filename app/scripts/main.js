// jshint devel:true
'use strict';
function navPos() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos > 1) {
    $('.nav').addClass('active');
  } else {
    $('.nav').removeClass('active');
  }
}

$(document).ready(function(){

  InstantClick.init();

  $('.owl-carousel').owlCarousel({
    items: 1,
    smartSpeed: 600
  });

  navPos();

  $(window).scroll(function () {
    navPos();
  });
});

 // var md = new MobileDetect(window.navigator.userAgent);
 // if (md.mobile()) {
 //     $('body').addClass('mobile');
 // } else {
 //     $('body').addClass('no-mobile');
 // }
