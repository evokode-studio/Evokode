// ---------------------
// 1️⃣ SELECCIONAMOS ELEMENTOS
// ---------------------
const popup = document.getElementById("popup");
const openButtons = document.querySelectorAll(".open-popup-btn");
const closeButton = document.querySelector(".popup-close");
const contactForm = document.getElementById("contact-form"); // ID del formulario actualizado

// ---------------------
// 2️⃣ FUNCIONES ABRIR / CERRAR
// ---------------------
// Función para abrir el popup
const openPopup = () => {
  popup.classList.add("show");
};

// Función para cerrar el popup
const closePopup = () => {
  popup.classList.remove("show");
};

// Asignar evento a todos los botones de apertura
openButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevenir comportamiento por defecto del enlace
    openPopup();
  });
});

// Asignar evento al botón de cierre
closeButton.addEventListener("click", closePopup);

// Asignar evento para cerrar al hacer clic fuera del contenido
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});

// ---------------------
// 3️⃣ FORMULARIO WHATSAPP
// ---------------------
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Obtenemos el valor del servicio seleccionado
  const service = document.getElementById("service").value;

  // CAMBIA ESTO: Tu número de WhatsApp
  const whatsappNumber = "5218712630722"; 

  // Mensaje actualizado para EVOKODE
  const message = `Hola EVOKODE STUDIO, me gustaría cotizar un proyecto.\n\nServicio de interés: ${service}`;

  // Creamos y abrimos la URL de WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");

  // Opcional: Cerrar el popup después de enviar
  closePopup();
});