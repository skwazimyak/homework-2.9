let currentSlide = 0
const [...slides] = document.querySelectorAll(".slide")
const slidesLenght = slides.length

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slidesLenght;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);