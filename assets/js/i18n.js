// Archivo: assets/js/i18n.js (Versión con la corrección del typo)

document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcherButtons = document.querySelectorAll('.language-switcher');

    const setLanguage = async (lang) => {
        try {
            const response = await fetch(`./assets/languages/${lang}.json`);
            if (!response.ok) {
                console.error(`Error al cargar el archivo de idioma: ${response.statusText}`);
                return;
            }
            const translations = await response.json();

            // Aplicar traducciones a elementos con 'data-i18n-key'
            document.querySelectorAll('[data-i18n-key]').forEach(element => {
                const key = element.getAttribute('data-i18n-key');
                if (translations[key]) {
                    element.innerHTML = translations[key];
                }
            });

            // Aplicar traducciones a placeholders
            document.querySelectorAll('[data-i18n-placeholder-key]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder-key');
                if (translations[key]) {
                    element.placeholder = translations[key];
                }
            });

            // Iniciar la animación de Proyectos Destacados
            const projectsData = translations.featured_projects_data;
            const showcaseContainer = document.querySelector('.project-showcase');

            if (showcaseContainer && projectsData && projectsData.length > 0) {

                showcaseContainer.innerHTML = ''; // Limpiar por si se cambia de idioma

                // 1. Crear las diapositivas
                projectsData.forEach((project, index) => {
                    // CAMBIO 1: Crea un elemento 'a' (enlace) en lugar de un 'div'.
                    const slide = document.createElement('a');

                    // CAMBIO 2: Asigna la URL del JSON al atributo 'href' del enlace.
                    slide.href = project.href;

                    // CAMBIO 3 (Opcional pero recomendado): Haz que el enlace se abra en una nueva pestaña.
                    slide.target = '_blank';
                    slide.rel = 'noopener noreferrer'; // Buena práctica de seguridad

                    // El resto de tu código se mantiene igual
                    slide.className = 'project-slide';
                    slide.dataset.index = index;

                    slide.innerHTML = `
        <div class="project-showcase__bg-image" style="background-image: url('${project.imageUrl}')"></div>
        <div class="project-showcase__content"> 
            <span class="project-showcase__category">${project.category}</span>
            <h3 class="project-showcase__title">${project.title}</h3>
            <p class="project-showcase__description">${project.description}</p>
        </div>`;
                    showcaseContainer.appendChild(slide);
                });
                showcaseContainer.querySelector('.project-slide').classList.add('active');

                // 2. Lógica de la animación
                let currentIndex = 0;
                const slides = showcaseContainer.querySelectorAll('.project-slide');
                const totalSlides = slides.length;

                // Limpiar cualquier intervalo anterior para evitar múltiples animaciones
                if (window.projectInterval) {
                    clearInterval(window.projectInterval);
                }

                function changeSlide() {
                    const currentSlide = slides[currentIndex];
                    const nextIndex = (currentIndex + 1) % totalSlides;
                    const nextSlide = slides[nextIndex];

                    if (currentSlide) {
                        currentSlide.classList.remove('active');
                        currentSlide.classList.add('previous');
                    }
                    if (nextSlide) {
                        nextSlide.classList.add('active');
                    }
                    currentIndex = nextIndex;

                    setTimeout(() => {
                        if (currentSlide) {
                            currentSlide.classList.remove('previous');
                        }
                    }, 1200);
                }

                // 3. Iniciar el intervalo
                window.projectInterval = setInterval(changeSlide, 4000);
            }

            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;

        } catch (error) {
            console.error('Error al aplicar las traducciones o iniciar la animación:', error);
        }
    };

    languageSwitcherButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            setLanguage(lang);
            document.body.classList.remove('mobile-menu--is-open');
        });
    });

    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.split('-')[0];
    const initialLang = savedLang || (['en', 'es', 'pt'].includes(browserLang) ? browserLang : 'en');

    setLanguage(initialLang);
});