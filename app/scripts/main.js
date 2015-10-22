
'use strict';
function navPos() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos > 1) {
    $('.nav').addClass('active');
  } else {
    $('.nav').removeClass('active');
  }
}

$(function(){

  navPos();

  $(window).scroll(function () {
    navPos();
  });

  var pathname = window.location.pathname;

  switch (pathname) {
    case '/about.html':
      $('.navMenu-item').removeClass('active');
      $('.navMenu-item--about').addClass('active');
      break;
    case '/work.html':
      $('.navMenu-item').removeClass('active');
      $('.navMenu-item--work').addClass('active');
      break;
    case '/contact.html':
      $('.navMenu-item').removeClass('active');
      $('.navMenu-item--contact').addClass('active');
      break;
  }
});
