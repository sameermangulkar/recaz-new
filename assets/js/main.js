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

  console.log(scrollPosition);
});
