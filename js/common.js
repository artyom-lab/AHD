$(function () {

  function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('.navbar.fixed-top').addClass("sticky");
    } else {
      $('.navbar.fixed-top').removeClass("sticky");
    }
  };

  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();

  Waves.attach('.wave', ['waves-light']);
  Waves.attach('.wave2', ['waves-dark']);
  Waves.init();

  AOS.init({
    duration: 500,
    disable: 'mobile'
  });

  $('.owl-1').owlCarousel({
      loop: true,
      // autoplay: true,
      smartSpeed: 1200,
      items: 1,
      nav: true,
      dots: false,
      margin: 30,
  });

  $(".service-box a").on("click", function(){
      $(this).closest(".service-box").find(".box-hover").toggleClass("active");
  });

});



