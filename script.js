$(document).ready(function () {
  var dd = $(".date__dd");
  var mm = $(".date__mm");
  var yy = $(".date__yy");
  dd.text(new Date().getDate());
  mm.text(new Date().getMonth() + 1);
  yy.text(new Date().getFullYear());

  let location = ["North Shore", "South Shore", "West Shore", "East Shore"];

  var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    loop: "true",
    speed: "500",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-prev",
      prevEl: ".swiper-button-next",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

      renderBullet: function (index, className) {
        return (
          '<div class="' +
          className +
          '">' +
          "<span>0" +
          (index + 1) +
          "</span>" +
          "<span>" +
          location[index] +
          "</span>" +
          "</div>"
        );
      },
    },
  });
});
