// Select the button
const scrollToTopBtn = document.getElementById("scrollToTop");

// Listen for scroll events to toggle the button visibility
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Add the 'show' class when scrolled past 200px
    scrollToTopBtn.classList.add("show");
  } else {
    // Remove the 'show' class when scrolled back up
    scrollToTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carousel = document.querySelector('.cat-carousel');
    const items = document.querySelectorAll('.cat-item');
    const totalItems = items.length;
    const itemWidth = document.querySelector('.cat-item').offsetWidth + 30; // Including margin
    let currentIndex = 0;

    // Clone the first set of cards and append them to the end of the carousel
    const cloneItems = Array.from(items).map(item => item.cloneNode(true));
    cloneItems.forEach(item => carousel.appendChild(item));

    // Function to update the carousel position
    function updateCarouselPosition() {
        const offset = -(currentIndex * itemWidth);
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // Move to next slide and ensure smooth loop
    function nextSlide() {
        currentIndex++;
        if (currentIndex === totalItems) {
            currentIndex = 0; // Reset to the first set of cards
        }
        updateCarouselPosition();
    }

    // Move to previous slide and ensure smooth loop
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalItems - 1; // Go to the last set of cards
        }
        updateCarouselPosition();
    }

    // Event listener for Next button
    nextButton.addEventListener('click', nextSlide);

    // Event listener for Prev button
    prevButton.addEventListener('click', prevSlide);

    // Initialize the carousel by setting it to the first position
    updateCarouselPosition();
});
