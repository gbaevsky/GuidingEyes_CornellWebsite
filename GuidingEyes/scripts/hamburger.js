$(document).ready(function () {
    $(".nav-bar-button").click(function() {
        if($("#nav-bar-content").hasClass("hidden")) {
          $("#nav-bar-content").removeClass("hidden");
        }else{
          $("#nav-bar-content").addClass("hidden");
        }
      });
    });


$(window).resize(function() {
  if ($(window).width() >= 760) {
    $("#nav-bar-content").removeClass("hidden");
  } else {
    $("#nav-bar-content").addClass("hidden");
  }
});
