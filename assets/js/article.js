// Seleccionamos las secciones y los links del aside
const sections = document.querySelectorAll(".article__section");
const navLinks = document.querySelectorAll(".aside__link");

// IntersectionObserver para detectar qué sección está visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remover activo de todos
        navLinks.forEach((link) => link.classList.remove("active"));

        // Activar el link correspondiente
        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`.aside__link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  },
  { threshold: 0.6 } // se activa cuando el 60% de la sección está visible
);

// Observar todas las secciones
sections.forEach((section) => {
  observer.observe(section);
});
