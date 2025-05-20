const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const totalSlides = slides.length;

const showSlide = (i) => {
  index = (i + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${index * 100}vw)`;  // Aquí usé template literals correctamente
};

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

let autoplayInterval = setInterval(() => {
  showSlide(index + 1);
}, 4000);

slider.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
slider.addEventListener('mouseleave', () => {
  autoplayInterval = setInterval(() => showSlide(index + 1), 4000);
});

showSlide(index);

// Audio himno

const audio = document.getElementById('himno-audio');
const boton = document.querySelector('button[onclick="toggleHimno()"]');

function toggleHimno() {
  if (audio.paused) {
    audio.play();
    boton.textContent = 'Pausar Himno';
  } else {
    audio.pause();
    boton.textContent = 'Escuchar Himno';
  }
}