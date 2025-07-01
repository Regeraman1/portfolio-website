const track = document.querySelector(".carousel-track");
const previousBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}$)`;
}

function nextSlide() {
    currentslide = (currentSlide + 1) %  totalSlides;
    updateCarousel();
}

function previousSlide() {
    currentSllide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 5000);
}

function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoScroll();
});

previousBtn.addEventListener("click", () => {
    previousSlide();
    resetAutoScroll();
});

updateCarousel();
startAutoScroll();