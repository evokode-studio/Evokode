// all-scroll.js
(function () {
  // Crea o reutiliza un único observer global
  const animObserver = window.animObserver || new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      const has = (c) => el.classList.contains(c);

      if (entry.isIntersecting) {
        if (has("hidden-left"))  { el.classList.add("show-left");  el.classList.remove("hide-left"); }
        if (has("hidden-right")) { el.classList.add("show-right"); el.classList.remove("hide-right"); }
        if (has("hidden-up"))    { el.classList.add("show-up");    el.classList.remove("hide-up"); }
      } else {
        // fade-out al salir
        if (has("show-left"))  { el.classList.remove("show-left");  el.classList.add("hide-left"); }
        if (has("show-right")) { el.classList.remove("show-right"); el.classList.add("hide-right"); }
        if (has("show-up"))    { el.classList.remove("show-up");    el.classList.add("hide-up"); }
      }
    });
  }, { threshold: 0.18 });
  window.animObserver = animObserver;

  const ready = () => {
    // -------- SERVICES (desde abajo en cascada) ----------
    document.querySelectorAll("#services .services__grid a").forEach((el, i) => {
      el.classList.add("hidden-up");
      el.style.transitionDelay = `${i * 0.12}s`;
      animObserver.observe(el);
    });

    // -------- VISION (texto izq, imagen der) -------------
    const vTitle = document.querySelector("#vision .display__title");
    const vImg   = document.querySelector("#vision .vision__img");
    if (vTitle) { vTitle.classList.add("hidden-left");  animObserver.observe(vTitle); }
    if (vImg)   { vImg.classList.add("hidden-right");   animObserver.observe(vImg);   }

    // -------- PROCESS (grid en cascada + bloque visual) ---
    document.querySelectorAll("#process .process__grid > div").forEach((el, i) => {
      el.classList.add("hidden-up");
      el.style.transitionDelay = `${i * 0.1}s`;
      animObserver.observe(el);
    });
    const pImg   = document.querySelector("#process .process__image");
    const pSteps = document.querySelector("#process .process__steps");
    if (pImg)   { pImg.classList.add("hidden-left");  animObserver.observe(pImg);   }
    if (pSteps) { pSteps.classList.add("hidden-right"); animObserver.observe(pSteps); }

    // -------- TESTIMONIALS (columnas desde abajo) --------
    document.querySelectorAll("#testimonials .testimonials__column").forEach((col, i) => {
      col.classList.add("hidden-up");
      col.style.transitionDelay = `${i * 0.18}s`;
      animObserver.observe(col);
    });

    // -------- BLOGS (cards desde abajo) ------------------
    document.querySelectorAll("#blog .blogs__blog").forEach((el, i) => {
      el.classList.add("hidden-up");
      el.style.transitionDelay = `${i * 0.1}s`;
      animObserver.observe(el);
    });

    // -------- FAQS (preguntas desde abajo) ---------------
    document.querySelectorAll("#faqs .faqs__item").forEach((el, i) => {
      el.classList.add("hidden-up");
      el.style.transitionDelay = `${i * 0.06}s`;
      animObserver.observe(el);
    });
  };

  // Ejecuta cuando el DOM esté listo
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();
