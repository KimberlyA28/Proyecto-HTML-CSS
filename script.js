// ----- Carrusel (Slider) -----
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const totalSlides = slides.length;
let autoplayInterval;

// Mostrar la diapositiva actual
function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}vw)`;
}

// Cambiar diapositiva manualmente
prevBtn?.addEventListener('click', () => showSlide(index - 1));
nextBtn?.addEventListener('click', () => showSlide(index + 1));

// Autoplay
function startAutoplay() {
    autoplayInterval = setInterval(() => showSlide(index + 1), 4000);
}
function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Pausar autoplay al pasar el mouse
slider?.addEventListener('mouseenter', stopAutoplay);
slider?.addEventListener('mouseleave', startAutoplay);

showSlide(index);
startAutoplay();

// ----- Audio Himno -----
const audio = document.getElementById('himno-audio');
const botonHimno = document.getElementById('himno-btn');

function toggleHimno() {
    if (!audio) return;

    if (audio.paused) {
        audio.play();
        botonHimno.textContent = 'Pausar Himno';
    } else {
        audio.pause();
        botonHimno.textContent = 'Escuchar Himno';
    }
}

botonHimno?.addEventListener('click', toggleHimno);