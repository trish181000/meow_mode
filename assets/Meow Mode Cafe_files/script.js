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

// A Modal when u click a image or video to view it full size. 
function openModal(contentType, contentSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    var modalVideo = document.getElementById("modalVideo");
   
    
    modalImg.style.display = "none";
    modalVideo.style.display = "none";
   
  
    if (contentType === "image") {
        modalImg.style.display = "block";
        modalImg.src = contentSrc;
    } else if (contentType === "video") {
        modalVideo.style.display = "block";
        modalVideo.src = contentSrc;
    }
   
    
    modal.style.display = "block";
  }
   
  //lets you close it
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }