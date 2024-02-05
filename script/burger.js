function toggleBurger() {
  var hamburger = document.querySelector(".hamburger");
  var menu = document.querySelector(".menu");

  hamburger.addEventListener("click", function () {
    this.classList.toggle("is-active");
    menu.classList.toggle("show-menu");
    document.body.classList.toggle("no-scroll");
  });
}

export default toggleBurger;
