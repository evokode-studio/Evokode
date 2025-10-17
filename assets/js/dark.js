// Archivo: assets/js/dark.js (Versión Completa y Funcional)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar los elementos necesarios
    const themeSwitcher = document.querySelector('.theme-switcher');
    const body = document.body;

    // Si no encuentra el botón, no hace nada más.
    if (!themeSwitcher) {
        return;
    }

    // 2. Función para cambiar el tema
    const toggleTheme = () => {
        // Añade o quita la clase 'light-theme' del body
        body.classList.toggle('light-theme');

        // 3. Guardar la preferencia del usuario en su navegador
        if (body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    };

    // 4. Añadir el evento de 'click' al botón
    themeSwitcher.addEventListener('click', toggleTheme);

    // 5. Al cargar la página, revisar si el usuario ya tenía una preferencia guardada
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        body.classList.add('light-theme');
    }
});