let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Optional: Auto-slide functionality
setInterval(() => {
  moveSlide(1);
}, 5000); // Change slide every 5 seconds
