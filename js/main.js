/* Nav icon */
const navBtn = document.querySelector('.header__nav-btn');
const navIcon = document.querySelector('.nav-icon');
const row = document.querySelector('.header__row');
const navAccent = document.querySelector('.nav__item--accent');

navBtn.addEventListener('click', function() {
    navIcon.classList.toggle('nav-icon--active');
    row.classList.toggle('header__row--mobile');
    document.body.classList.toggle("no-scroll");
    navAccent.classList.toggle("nav__item--accent")
});