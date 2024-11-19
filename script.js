$(document).ready(function () {
  const calendar = () => {
    var dd = $(".date__dd");
    var mm = $(".date__mm");
    var yy = $(".date__yy");
    dd.text(new Date().getDate());
    mm.text(new Date().getMonth() + 1);
    yy.text(new Date().getFullYear());
  };

  const locationPopup = () => {
    let btnArray = $(".map__marks");
    let infoArray = $(".weather-info");
    let markArray = $(".map__mark");

    const fadeIn = (el, timeout, display) => {
      el.style.opacity = 0;
      el.style.display = display || "block";
      el.style.transition = `opacity ${timeout}ms`;
      setTimeout(() => {
        el.style.opacity = 1;
      }, 10);
    };

    const fadeOut = (el, timeout) => {
      el.style.opacity = 1;
      el.style.transition = `opacity ${timeout}ms`;
      el.style.opacity = 0;

      setTimeout(() => {
        el.style.display = "none";
      }, timeout);
    };

    for (let i = 0; i <= btnArray.length; i++) {
      btnArray[i].addEventListener("mouseover", function () {
        let selectedIndex =
          Array.from(this.parentNode.children).indexOf(this) - 1;
        fadeIn(infoArray[selectedIndex], 500, "flex");
        infoArray[selectedIndex].style.zIndex = "3";

        infoArray[selectedIndex].addEventListener("mouseover", function () {
          infoArray[selectedIndex].style.display = "flex";
          infoArray[selectedIndex].style.opacity = 1;
        });
        console.log(selectedIndex);
      });

      btnArray[i].addEventListener("mouseleave", function () {
        let selectedIndex =
          Array.from(this.parentNode.children).indexOf(this) - 1;
        fadeOut(infoArray[selectedIndex], 500);
        infoArray[selectedIndex].style.zIndex = "2";
        fadeOut(infoArray[selectedIndex], 500);

        infoArray[selectedIndex].addEventListener("mouseleave", function () {
          fadeOut(infoArray[selectedIndex], 500);
        });
      });
    }
  };

  let location = ["North Shore", "South Shore", "West Shore", "East Shore"];

  var swiperHero = new Swiper(".mySwiper", {
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

  calendar();
  locationPopup();
});
