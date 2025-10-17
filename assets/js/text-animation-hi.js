// Archivo: text-animation-hi.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionamos el elemento de texto y definimos las palabras
    const textElement = document.querySelector('.hero__icon-text');
    const greetings = ["Hi", "Hola", "Oí"];
    let currentIndex = 0;

    // Asegurarnos de que el elemento existe antes de correr la animación
    if (textElement) {
        
        // 2. Creamos un intervalo que se ejecutará cada 2 segundos (2000 ms)
        setInterval(() => {
            // 3. Hacemos que el texto actual se desvanezca
            textElement.classList.add('is-fading');

            // 4. Esperamos un poco para que la animación de desvanecimiento termine
            setTimeout(() => {
                // 5. Actualizamos el índice para obtener la siguiente palabra
                // El operador % asegura que volvamos al inicio del array (0, 1, 2, 0, 1, 2, ...)
                currentIndex = (currentIndex + 1) % greetings.length;
                
                // 6. Cambiamos el texto
                textElement.textContent = greetings[currentIndex];
                
                // 7. Hacemos que el nuevo texto aparezca
                textElement.classList.remove('is-fading');

            }, 400); // Este tiempo debe coincidir con la duración de la transición en CSS

        }, 2000); // 2 segundos en total para cada ciclo de palabra
    }
});