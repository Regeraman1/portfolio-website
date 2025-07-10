const carousel = document.getElementById('carousel');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

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
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.cursor = 'grab';
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
});

let autoScrollInterval = setInterval(() => {
    carousel.scrollBy({ left: 250, behavior: 'smooth'});
    if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
        setTimeout(() => {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
        }, 500);
    }
}, 4000);

carousel.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
carousel.addEventListener('mouseleave', () => {
    autoScrollInterval = setInterval(() => {
        carousel.scrollBy({ left: 250, behavior: 'smooth' });
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
            setTimeout(() => {
                carousel.scrollTo({ left: 0, bheavior: 'smooth' });
            }, 500);
        }
    }, 4000);
});