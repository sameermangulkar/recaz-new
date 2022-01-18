const header = document.getElementById("header");
let scrollPosition = window.scrollY;
const headerHeight = header.offsetHeight;

const addClassOnScroll = () => header.classList.add("scroll");
const removeClassOnScroll = () => header.classList.remove("scroll");

window.addEventListener("scroll", function () {
  scrollPosition = window.scrollY;

  if (scrollPosition >= headerHeight) {
    addClassOnScroll();
  } else {
    removeClassOnScroll();
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


// ### Clients-slider---

  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });
  