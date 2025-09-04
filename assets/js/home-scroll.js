document.addEventListener("DOMContentLoaded", () => {
  const leftElements = document.querySelectorAll(".home__left");
  const rightElements = document.querySelectorAll(".home__right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.add("hidden");
        }
      });
    },
    { threshold: 0.2 } // 20% visible para activar
  );

  leftElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

  rightElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});
