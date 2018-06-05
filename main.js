/* ******************
Author: Wynand Theron
email: wtheron2@yahoo.//

Please note, the reason I use both standard JavaScript and jQuery is just to indicate
that I am familiar with both.
****************** */

$(document).ready(function(){

//For the nav bar color change when scrolling
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $('.nav').addClass('black');
      $(".nav #logo a").css("color","#fff");
    }
    else {
      $('.nav').removeClass('black');
      $(".nav #logo a").css("color","#333");
    }
  });

//burger-nav open/close
  $("#burger-nav").on("click", function(){
    $(".nav ul").toggleClass("open");
  });

  $(".nav li a").on("click", function(){
    if ($(".nav ul").hasClass("open")) {
      $(".nav ul").removeClass("open");
    }
  });


//social media arrow appear/disappear
  $("#toSocialMedia").on("click", function(){
    $("#arrow").css("visibility","visible");
  })

});
