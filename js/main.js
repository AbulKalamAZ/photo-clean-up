$(document).ready(function () {
  // Active class on nav links

  const nav = document.querySelector(".pcu-nav");
  const hamburger = document.querySelector(".hamburger");
  const navItems = document.querySelectorAll(".nav-item");
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      // removing open & hamburger-open class from pcu nav

      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        hamburger.classList.remove("hamburger-open");
      }
    });
  }

  // handle toggle hamburger menu

  hamburger.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      hamburger.classList.remove("hamburger-open");
    } else {
      nav.classList.add("open");
      hamburger.classList.add("hamburger-open");
    }
  });

  // Owl carousel on Hero section

  $(".hero-slider").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });

  // Owl carousel on Testimonial section

  $(".testimonial-slider").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1170: {
        items: 3,
      },
    },
  });

  // BeerSlider on Before After Block

  $.fn.BeerSlider = function (options) {
    options = options || {};
    return this.each(function () {
      new BeerSlider(this, options);
    });
  };
  $(".beer-slider").BeerSlider({ start: 50 });
});
