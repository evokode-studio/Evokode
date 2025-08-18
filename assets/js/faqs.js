document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faqs__item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faqs__question");
    const answer = item.querySelector(".faqs__answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");

      // Cerrar todos
      faqItems.forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".faqs__answer").style.maxHeight = null;
      });

      // Si estaba cerrado, abrir este
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
