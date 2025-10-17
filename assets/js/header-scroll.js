// Archivo: header-scroll.js

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Si hemos scrolleado más allá de la altura del header (ej. 100px)
        if (currentScrollY > 100) {
            // Scrolleando hacia abajo
            if (currentScrollY > lastScrollY) {
                header.classList.add('header--scrolled-down');
            } 
            // Scrolleando hacia arriba
            else {
                header.classList.remove('header--scrolled-down');
            }
        } 
        // Si estamos cerca de la parte superior, siempre mostrar el menú completo
        else {
            header.classList.remove('header--scrolled-down');
        }

        // Actualizar la última posición de scroll
        lastScrollY = currentScrollY;
    });
});