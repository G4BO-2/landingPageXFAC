const menuToggle = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const carousel = document.getElementById("services-carousel");
const items = carousel.getElementsByClassName("carousel-item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

function updateCarousel() {
  const width = carousel.offsetWidth;
  for (let i = 0; i < items.length; i++) {
    items[i].style.transform = `translateX(${-currentIndex * width}px)`;
  }
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 1;
  }
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);
