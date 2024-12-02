document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los carruseles
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = carousel.querySelectorAll('img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        const indicators = carousel.querySelectorAll('.indicator');
        let currentIndex = 0;

        // Actualizar el carrusel al índice actual
        const updateCarousel = () => {
            // Mover el contenedor de imágenes
            const offset = currentIndex * -100;
            imagesContainer.style.transform = `translateX(${offset}%)`;

            // Actualizar indicadores activos (opcional)
            if (indicators.length) {
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentIndex);
                });
            }
        };

        // Evento para el botón "Siguiente"
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length; // Avanza al siguiente índice
            updateCarousel();
        });

        // Evento para el botón "Anterior"
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // Retrocede al índice anterior
            updateCarousel();
        });

        // Evento para los indicadores (si existen)
        if (indicators.length) {
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    currentIndex = index;
                    updateCarousel();
                });
            });
        }

        // Inicializar posición del carrusel
        updateCarousel();
    });
});
