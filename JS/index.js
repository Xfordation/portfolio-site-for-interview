$(document).ready(function () {
  $("#toggle").click(function () {
    $("#toggleMenu").toggle({ direction: "right" }, 1000);
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 400) {
      $(".navbar").css("background", "#fff");
    } else {
      $(".navbar").css("background", "transparent");
    }
  });
  $(window).on("resize", function () {
    if ($(window).width() > 992) {
      $("#toggleMenu").show();
      $("#toggleMenu").css("display", "flex");
    }
  });
});
