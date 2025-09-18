let currentIndex = 0;
let SECONDS = 5;
const carouselItems = document.querySelectorAll('.carousel-item');

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

function startCarousel() {
    showCarouselItem(currentIndex);
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCarouselItem(currentIndex);
    }, SECONDS * 1000);
}

document.addEventListener('DOMContentLoaded', startCarousel);