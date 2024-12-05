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
    let totalCards = carousel.children.length;

    // Clone the first and last cards to create an infinite loop effect
    const cloneCount = 1; // Number of cards to clone at both ends
    for (let i = 0; i < cloneCount; i++) {
        const cloneFirst = carousel.children[i].cloneNode(true);
        const cloneLast = carousel.children[totalCards - 1 - i].cloneNode(true);
        carousel.appendChild(cloneFirst); // Clone to the end
        carousel.insertBefore(cloneLast, carousel.firstChild); // Clone to the start
    }

    // Update total card count after cloning
    totalCards = carousel.children.length;

    // Set the carousel width to accommodate all cards
    const totalWidth = totalCards * (cardWidth + gap);
    carousel.style.width = `${totalWidth}px`;
    carousel.style.display = "flex";
    carousel.style.gap = `${gap}px`;
    carousel.style.transition = "transform 0.5s ease-in-out"; // Smooth transition

    // Position the carousel at the "real" first card
    let currentPosition = visibleCards; // Start at the first "real" card
    carousel.style.transform = `translateX(${-currentPosition * (cardWidth + gap)}px)`;

    // Update carousel position
    const updateCarouselPosition = () => {
        const offset = -currentPosition * (cardWidth + gap);
        carousel.style.transform = `translateX(${offset}px)`;
    };

    // Move the carousel forward (next)
    const moveNext = () => {
        currentPosition++;
        updateCarouselPosition();

        // If we've moved past the last "real" card (after the cloned ones)
        if (currentPosition >= totalCards - visibleCards) {
            currentPosition = visibleCards; // Reset to first real card
            carousel.style.transition = "none"; // Disable transition for instant jump
            updateCarouselPosition();
            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
            }, 0);
        }
    };

    // Move the carousel backward (previous)
    const movePrev = () => {
        currentPosition--;
        updateCarouselPosition();

        // If we've moved past the first card (before the cloned ones)
        if (currentPosition < visibleCards) {
            currentPosition = totalCards - visibleCards * 2; // Go to the last "real" card
            carousel.style.transition = "none"; // Disable transition for instant jump
            updateCarouselPosition();
            setTimeout(() => {
                carousel.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
            }, 0);
        }
    };

    // Add event listeners for the buttons
    nextButton.addEventListener("click", moveNext);
    prevButton.addEventListener("click", movePrev);

    // Auto-scroll functionality (optional)
    const autoScrollInterval = setInterval(moveNext, 3000); // Adjust interval as needed

    // Pause auto-scroll on hover
    wrapper.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
    wrapper.addEventListener("mouseleave", () => setInterval(moveNext, 3000));
});
