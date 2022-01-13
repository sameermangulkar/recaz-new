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
