"use strict";

document.addEventListener("click", function (e) {
  var toggle = document.getElementsByClassName("page-nav__toggle")[0];
  if (!e.target.closest('.page-nav__list') && e.target !== toggle && e.target.parentNode !== toggle) {
    document.getElementsByClassName("page-nav__list")[0].classList.remove('show');
  }
});
document.getElementsByClassName("page-nav__toggle")[0].addEventListener("click", function (e) {
  document.getElementsByClassName("page-nav__list")[0].classList.toggle("show");
});
//# sourceMappingURL=../js/app.js.map