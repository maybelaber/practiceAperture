const navBtn = document.querySelector('.header__nav-btn');
const navIcon = document.querySelector('.nav-icon');

navBtn.addEventListener('click', function() {
    navIcon.classList.toggle('nav-icon--active');
});