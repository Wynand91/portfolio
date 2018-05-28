/* ******************
Author: Wynand Theron
email: wtheron2@yahoo.//

Please note, the reason I use both standard JavaScript and jQuery is just to indicate
that I am familiar with both. 
****************** */

$(document).ready(function(){

  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $('nav').addClass('black')
    }
    else {
      $('nav').removeClass('black');
    }
  })

});
