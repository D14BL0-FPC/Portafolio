let slideIndex = 0;

function moveSlide(step) {
    let slides = document.querySelectorAll('.carousel-item');
    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1; // Va al último si está en el primero
    }

    if (slideIndex >= slides.length) {
        slideIndex = 0; // Va al primero si está en el último
    }

    document.querySelector('.carousel-container').style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Opcional: Hacer que el carrusel avance automáticamente
setInterval(() => {
    moveSlide(1);
}, 5000); // Cambia de imagen cada 5 segundos
