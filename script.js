function abrirImagem(img) {
  document.getElementById("modalImagem").style.display = "block";
  document.getElementById("imgAmpliada").src = img.src;
}

function fecharImagem() {
  document.getElementById("modalImagem").style.display = "none";
}

window.onclick = function(e) {
  const modal = document.getElementById("modalImagem");
  if (e.target === modal) fecharImagem();
}

let currentSlide = 0;

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');

function updateCarousel() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

