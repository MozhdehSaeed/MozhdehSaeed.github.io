$(document).ready(function () {
  let scrollThreshold = $(window).height() * 0.6;
  
  $(window).on('scroll', function () {
    let scrollPosition = $(window).scrollTop();
    
    // Handle the fading and zooming of images in the first section
    if (scrollPosition > scrollThreshold) {
      $(".panel.im1, .panel.im2").fadeOut(1000);
      $(".panel.im3").css("transform", "scale(1.5)").css("transition", "transform 1s ease-in-out");
    } else {
      $(".panel.im1, .panel.im2").fadeIn(1000);
      $(".panel.im3").css("transform", "scale(1)").css("transition", "transform 1s ease-in-out");
    }
  });
});
