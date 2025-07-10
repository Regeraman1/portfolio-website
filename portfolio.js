const carousel = document.getElementById('carousel');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

let scrollSpeed = 0.5;
let animationFrameId;

function startAutoScroll() {
    animationFrameId = requestAnimationFrame(autoScroll);
}

function autoScroll() {
    carousel.scrollLeft += scrollSpeed;

    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
        carousel.scrollLeft = 0;
    }

    animationFrameId = requestAnimationFrame(autoScroll);
}

carousel.addEventListener('mouseenter', () => {
    cancelAnimationFrame(animationFrameId);
});

carousel.addEventListener('mouseleave', () => {
    startAutoScroll();
});

leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = 'grabbing';
    cancelAnimationFrame(animationFrameId);
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
    startAutoScroll();
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
});

startAutoScroll();