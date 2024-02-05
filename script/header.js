function headerScroll() {
  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("activate");
      } else {
        header.classList.remove("activate");
      }
    });
  });
}

export default headerScroll;
