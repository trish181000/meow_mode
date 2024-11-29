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