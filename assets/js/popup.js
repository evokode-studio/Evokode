// ---------------------
// 1️⃣ SELECCIONAMOS ELEMENTOS
// ---------------------
const popup = document.getElementById("popup");
const openButtons = document.querySelectorAll(".open-popup-btn");
const closeButton = document.querySelector(".popup-close");
const appointmentForm = document.getElementById("appointment-form");
const emergencyBtn = document.querySelector(".emergency-btn");

// ---------------------
// 2️⃣ FUNCIONES ABRIR / CERRAR
// ---------------------
openButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    popup.classList.add("show");
  });
});

closeButton.addEventListener("click", () => {
  popup.classList.remove("show");
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("show");
  }
});

// ---------------------
// 3️⃣ BOTÓN EMERGENCIA
// ---------------------
emergencyBtn.addEventListener("click", () => {
  window.location.href = "tel:+5211234567890"; // tu número
});

// ---------------------
// 4️⃣ FORMULARIO WHATSAPP
// ---------------------
appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const service = document.getElementById("service").value;
  const time = document.getElementById("time").value;

  const message = `Hola MEDICALL, quiero agendar una cita.\nServicio: ${service}\nHorario preferido: ${time}`;
  const whatsappNumber = "5211234567890";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
});
