let currentSlide = 1;

function changeSlide(n) {
    showSlide(currentSlide += n);
}

function showSlide(n) {
    const slides = document.querySelector('.slides2');
    if (n > 3) { currentSlide = 1; }
    if (n < 1) { currentSlide = 3; }
    slides.style.transform = `translateX(${-(currentSlide - 1) * 100}%)`;
}

window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav');
    if (window.pageYOffset > 0) {
        console.log('scroll');
        nav.classList.add('bg-scroll');
    } else {
        nav.classList.remove('bg-scroll');
    }
});


