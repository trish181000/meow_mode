document.querySelector('.left-btn').addEventListener('click', function() {
    const carousel = document.querySelector('.cat-carousel');
    const itemWidth = document.querySelector('.cat-item').offsetWidth + 20; // Add gap between items
    const currentTransform = carousel.style.transform ? parseInt(carousel.style.transform.replace('translateX(', '').replace('px)', '')) : 0;
    const maxTransform = -((carousel.children.length - 3) * itemWidth); // Loop when the last item is reached
    if (currentTransform < 0) {
        carousel.style.transform = `translateX(${Math.min(currentTransform + itemWidth, 0)}px)`;
    }
});

document.querySelector('.right-btn').addEventListener('click', function() {
    const carousel = document.querySelector('.cat-carousel');
    const itemWidth = document.querySelector('.cat-item').offsetWidth + 20; // Add gap between items
    const currentTransform = carousel.style.transform ? parseInt(carousel.style.transform.replace('translateX(', '').replace('px)', '')) : 0;
    const maxTransform = -((carousel.children.length - 3) * itemWidth); // Loop when the last item is reached
    if (currentTransform > maxTransform) {
        carousel.style.transform = `translateX(${Math.max(currentTransform - itemWidth, maxTransform)}px)`;
    }
});
