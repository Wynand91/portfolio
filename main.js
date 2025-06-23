/* ******************
Author: Wynand Theron
email: wtheron2@yahoo.com
****************** */

$(document).ready(function(){

    // For the nav bar color change when scrolling
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

    // burger-nav open/close
    $('#burger').on('click', function () {
      $('#nav-links').toggleClass('show');
    });

    // Navbar scrolling logic
    const $nav = $('.nav');

    function updateNavVisibility(e) {
      const scrollTop = $(window).scrollTop();
      const isAtTopOfPage = scrollTop < 10;
      const isMouseNearTop = e && e.clientY < 80;

      if (isAtTopOfPage || isMouseNearTop) {
        $nav.addClass('visible');
      } else {
        $nav.removeClass('visible');
      }
    }

    // Show when mouse moves near the top
    $(document).on('mousemove', function (e) {
      updateNavVisibility(e);
    });

    // Show if user scrolls to top of page
    $(window).on('scroll', function () {
      updateNavVisibility();
    });

    // Initial check on page load
    updateNavVisibility();

    // Age calculation and population
    const birthDate = new Date("1991-04-09");

    function calculateAge(birthday) {
        const today = new Date();
        let age = today.getFullYear() - birthday.getFullYear();
        const monthDiff = today.getMonth() - birthday.getMonth();
        const dayDiff = today.getDate() - birthday.getDate();

        // Subtract one year if birthday hasn't happened yet this year
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
          age--;
        }

        return age;
    }

    document.getElementById("age").textContent = calculateAge(birthDate);




    //social media arrow appear/disappear
    $("#toSocialMedia").on("click", function(){
    $("#arrow").css("visibility","visible");

    setTimeout(function(){
      $("#arrow").fadeOut(1000,function() {
        $("#arrow").css("visibility","hidden");
        $("#arrow").fadeIn(100);
      });
    },3000)

    });



});
