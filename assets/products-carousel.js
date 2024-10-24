let currentIndex = 0;

function moveCarousel(direction) {
  const items = document.querySelector('.carousel-items');
  const totalItems = items.children.length;
  const itemWidth = items.children[0].offsetWidth;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  items.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
