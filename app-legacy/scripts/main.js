
'use strict';

var nav = $('.nav');

function navPos() {
  var scrollPos = $(window).scrollTop();
  if (scrollPos > 1) {
    nav.addClass('active');
  } else {
    nav.removeClass('active');
  }
}

$(function(){

  var body = $('body'),
      pathname = window.location.pathname,
      menuLink = $('.navMenu-item');

  navPos();

  $(window).scroll(function () {
    navPos();
  });

  if (isMobile.phone === true) {
    body.addClass('mobile');
  }

  $('.nav-btn').on('click', function() {
    $('body').toggleClass('block');
    $('.nav').toggleClass('nav--on');
    $('.nav-overlay').addClass('on').toggleClass('open');
  });

  switch (pathname) {
    case '/about.html':
      menuLink.removeClass('active');
      $('.navMenu-item--about').addClass('active');
      break;
    case '/work.html':
      menuLink.removeClass('active');
      $('.navMenu-item--work').addClass('active');
      break;
    case '/contact.html':
      menuLink.removeClass('active');
      $('.navMenu-item--contact').addClass('active');
      break;
  }
});
