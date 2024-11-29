// Get the button
const scrollToTopBtn = document.getElementById("scrollToTop");

// Listen for scroll events
window.addEventListener("scroll", () => {
  // Show the button if scrolled down 300px
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});