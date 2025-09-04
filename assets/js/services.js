document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".service-detail__item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("fade-out");
        } else {
          entry.target.classList.remove("visible");
          entry.target.classList.add("fade-out");
        }
      });
    },
    { threshold: 0.5 } // visible cuando está al 50% en viewport
  );

  items.forEach((item) => observer.observe(item));
});
