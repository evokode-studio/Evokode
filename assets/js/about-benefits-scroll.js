// about-benefits.js
(function () {
  const ensureObserver = () => {
    if (!window.animObserver) {
      window.animObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const has = (c) => el.classList.contains(c);
          if (entry.isIntersecting) {
            if (has("hidden-left"))  { el.classList.add("show-left");  el.classList.remove("hide-left"); }
            if (has("hidden-right")) { el.classList.add("show-right"); el.classList.remove("hide-right"); }
            if (has("hidden-up"))    { el.classList.add("show-up");    el.classList.remove("hide-up"); }
          } else {
            if (has("show-left"))  { el.classList.remove("show-left");  el.classList.add("hide-left"); }
            if (has("show-right")) { el.classList.remove("show-right"); el.classList.add("hide-right"); }
            if (has("show-up"))    { el.classList.remove("show-up");    el.classList.add("hide-up"); }
          }
        });
      }, { threshold: 0.18 });
    }
    return window.animObserver;
  };

  const ready = () => {
    const observer = ensureObserver();

    // -------- ABOUT --------
    document.querySelectorAll("#about .about__space1, #about .about__space2").forEach((el, i) => {
      el.classList.add("hidden-left");
      el.style.transitionDelay = `${i * 0.08}s`;
      observer.observe(el);
    });
    document.querySelectorAll("#about .about__space3, #about .about__space4").forEach((el, i) => {
      el.classList.add("hidden-right");
      el.style.transitionDelay = `${i * 0.08}s`;
      observer.observe(el);
    });

    // -------- BENEFITS ------ (4 izq + 1 der con delay mayor)
    document.querySelectorAll("#benefits .benefits__item1, #benefits .benefits__item2, #benefits .benefits__item3, #benefits .benefits__item4")
      .forEach((el, i) => {
        el.classList.add("hidden-left");
        el.style.transitionDelay = `${i * 0.12}s`;
        observer.observe(el);
      });

    const b5 = document.querySelector("#benefits .benefits__item5");
    if (b5) {
      b5.classList.add("hidden-right");
      b5.style.transitionDelay = "0.55s"; // entra un poco después
      observer.observe(b5);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
})();
