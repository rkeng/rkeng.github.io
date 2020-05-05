// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Fade-in animation using jQuery animate
$(document).ready(function() {
  $('.section-offset').each( function(i){
    var top_of_element = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > top_of_element ){
      $(this).animate({'opacity':'1'},1000);
    }
  });
  $(window).scroll( function(){
    $('.section-offset').each( function(i){
      var top_of_element = $(this).offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > top_of_element ){
        $(this).animate({'opacity':'1'},1000);
      }
    }); 
  });
});