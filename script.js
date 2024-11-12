$(document).ready(function () {
  var dd = $(".date__dd");
  var mm = $(".date__mm");
  var yy = $(".date__yy");
  dd.text(new Date().getDate());
  mm.text(new Date().getMonth() + 1);
  yy.text(new Date().getFullYear());

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
