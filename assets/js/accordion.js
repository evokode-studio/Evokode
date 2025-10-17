// Archivo: accordion.js

const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion__header');

    header.addEventListener('click', () => {
        // Primero, cerramos todos los items que no sean el actual
        accordionItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Luego, abrimos o cerramos el item actual
        item.classList.toggle('active');
    });
});