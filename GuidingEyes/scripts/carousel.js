/* <!-- Source: Carousel Code Snippet taken from instructor ->
https://pages.github.coecis.cornell.edu/info1300-2021fa/info1300-2021fa-hosting/interactivity-snippets.html -->
*/
const SLIDES1 = $(".current-dogs > .slide1");
const DOTS1 = $(".carousel-dots1 > .dot1");

const SLIDES2 = $(".working-dogs > .slide2");
const DOTS2 = $(".carousel-dots2 > .dot2");

const SLIDES3 = $(".released-dogs > .slide3");
const DOTS3 = $(".carousel-dots3 > .dot3");

function nextSlide1() {
  let nextNum = SLIDES1.index($(".slide1:not(.hidden)")) + 1 + 1;/* +1 for 0-index array */
  if (nextNum > SLIDES1.length) {
    nextNum = 1;
  }
  showSlide1(nextNum);
}

function nextSlide2() {
  let nextNum = SLIDES2.index($(".slide2:not(.hidden)")) + 1 + 1;/* +1 for 0-index array */
  if (nextNum > SLIDES2.length) {
    nextNum = 1;
  }
  showSlide2(nextNum);
}

function nextSlide3() {
  let nextNum = SLIDES3.index($(".slide3:not(.hidden)")) + 1 + 1;/* +1 for 0-index array */
  if (nextNum > SLIDES3.length) {
    nextNum = 1;
  }
  showSlide3(nextNum);
}

function prevSlide1() {
  let prevNum = SLIDES1.index($(".slide1:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES1.length;
  }
  showSlide1(prevNum);
}

function prevSlide2() {
  let prevNum = SLIDES2.index($(".slide2:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES2.length;
  }
  showSlide2(prevNum);
}

function prevSlide3() {
  let prevNum = SLIDES3.index($(".slide3:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES3.length;
  }
  showSlide3(prevNum);
}

function showSlide1(num) {
  let index = num - 1;
  let currentSlide = SLIDES1.eq(index);
  let currentDot = DOTS1.eq(index);

  $(".slide1").addClass("hidden");
  currentSlide.removeClass("hidden");

  $(".dot1").removeClass("active");
  currentDot.addClass("active");
}

function showSlide2(num) {
  let index = num - 1;
  let currentSlide = SLIDES2.eq(index);
  let currentDot = DOTS2.eq(index);

  $(".slide2").addClass("hidden");
  currentSlide.removeClass("hidden");

  $(".dot2").removeClass("active");
  currentDot.addClass("active");
}

function showSlide3(num) {
  let index = num - 1;
  let currentSlide = SLIDES3.eq(index);
  let currentDot = DOTS3.eq(index);

  $(".slide3").addClass("hidden");
  currentSlide.removeClass("hidden");

  $(".dot3").removeClass("active");
  currentDot.addClass("active");
}

$("#right-arrow1").click(function() {
  nextSlide1();
});

$("#right-arrow2").click(function() {
  nextSlide2();
});

$("#right-arrow3").click(function() {
  nextSlide3();
});

$("#left-arrow1").click(function() {
  prevSlide1();
});

$("#left-arrow2").click(function() {
  prevSlide2();
});

$("#left-arrow3").click(function() {
  prevSlide3();
});

$("#dot11").click(function() {
  showSlide1(1);
});

$("#dot21").click(function() {
  showSlide1(2);
});

$("#dot31").click(function() {
  showSlide1(3);
});

$("#dot41").click(function() {
  showSlide1(4);
});

$("#dot12").click(function() {
  showSlide2(1);
});

$("#dot22").click(function() {
  showSlide2(2);
});

$("#dot32").click(function() {
  showSlide2(3);
});

$("#dot42").click(function() {
  showSlide2(4);
});

$("#dot52").click(function() {
  showSlide2(5);
});

$("#dot13").click(function() {
  showSlide3(1);
});

$("#dot23").click(function() {
  showSlide3(2);
});

$("#dot33").click(function() {
  showSlide3(3);
});

$("#dot43").click(function() {
  showSlide3(4);
});

$("#dot53").click(function() {
  showSlide3(5);
});

$("#dot63").click(function() {
  showSlide3(6);
});

$("#dot73").click(function() {
  showSlide3(7);
});

$(document).ready(function () {
  $(".slide1").addClass("hidden");
  $(".slide2").addClass("hidden");
  $(".slide3").addClass("hidden");
  $("#slide11").removeClass("hidden");
  $("#slide12").removeClass("hidden");
  $("#slide13").removeClass("hidden");
  $("#dot11").addClass("active");
  $("#dot12").addClass("active");
  $("#dot13").addClass("active");
});
