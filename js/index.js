const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.close-burger');
const menu = document.querySelector('.nav-list');
burger.addEventListener('click', function () {
  menu.classList.add('nav-list--active');
});

burgerClose.addEventListener('click', function () {
  menu.classList.remove('nav-list--active');
});
