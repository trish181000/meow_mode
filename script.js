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

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".cat-carousel");
    const wrapper = document.querySelector(".cat-carousel-wrapper");
    const nextButton = document.querySelector(".next-button");
    const prevButton = document.querySelector(".prev-button");

    const cardWidth = 300; // Width of each card
    const gap = 10; // Gap between cards
    const visibleCards = 3; // Number of cards visible at a time
    const totalCards = carousel.children.length;

    // Clone the first and last few cards to create a seamless loop
    for (let i = 0; i < visibleCards; i++) {
        const cloneFirst = carousel.children[i].cloneNode(true);
        const cloneLast = carousel.children[totalCards - 1 - i].cloneNode(true);
        carousel.appendChild(cloneFirst);
        carousel.insertBefore(cloneLast, carousel.firstChild);
    }

    // Update carousel width to account for clones
    const totalWidth = (totalCards + 2 * visibleCards) * (cardWidth + gap);
    carousel.style.width = `${totalWidth}px`;
    carousel.style.display = "flex";
    carousel.style.gap = `${gap}px`;
    carousel.style.transition = "transform 0.5s ease-in-out";

    // Position carousel to start at the "real" first card
    let currentPosition = visibleCards;
    carousel.style.transform = `translateX(${-currentPosition * (cardWidth + gap)}px)`;

    const updateCarouselPosition = () => {
        const offset = -currentPosition * (cardWidth + gap);
        carousel.style.transform = `translateX(${offset}px)`;
    };

    const resetPositionIfNeeded = () => {
        // If we've scrolled past the last card
        if (currentPosition >= totalCards + visibleCards) {
            currentPosition = visibleCards;
            carousel.style.transition = "none"; // Disable animation for instant reset
            updateCarouselPosition();
            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out"; // Re-enable animation
            }, 0);
        }
        // If we've scrolled before the first card
        if (currentPosition < visibleCards) {
            currentPosition = totalCards + visibleCards - 1;
            carousel.style.transition = "none"; // Disable animation for instant reset
            updateCarouselPosition();
            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out"; // Re-enable animation
            }, 0);
        }
    };

    const moveNext = () => {
        currentPosition++;
        updateCarouselPosition();
        resetPositionIfNeeded();
    };

    const movePrev = () => {
        currentPosition--;
        updateCarouselPosition();
        resetPositionIfNeeded();
    };

    // Add event listeners for buttons
    nextButton.addEventListener("click", moveNext);
    prevButton.addEventListener("click", movePrev);

    // Auto-scroll (optional)
    setInterval(moveNext, 3000); // Adjust interval as needed
});
