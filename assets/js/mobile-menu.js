// Archivo: mobile-menu.js

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (hamburgerBtn && closeBtn && mobileMenu) {
        // Función para abrir el menú
        hamburgerBtn.addEventListener('click', () => {
            body.classList.add('mobile-menu--is-open');
        });

        // Función para cerrar el menú
        closeBtn.addEventListener('click', () => {
            body.classList.remove('mobile-menu--is-open');
        });

        // Opcional: Cerrar el menú si se hace clic en un enlace
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                body.classList.remove('mobile-menu--is-open');
            });
        });
    }
});