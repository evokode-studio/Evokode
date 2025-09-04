document.addEventListener("DOMContentLoaded", (event) => {

    // Seleccionar mis dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    // Función para mostrar y ocultar menu
    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if (show) {
            mobile_menu.classList.remove("menu-mobile--show");
        } else {
            mobile_menu.classList.add("menu-mobile--show");
        }
    };

    // Al dar click al botón del menú mostrar el menú de navegación
    mobile_btn.addEventListener("click", showHiddenMenu);

    // Al redimensionar la pantalla ocultar el menú
    window.addEventListener("resize", () => {
        let window_width = document.body.clientWidth;

        if (window_width >= 1000) {
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    // Al clicar X cerrar
    let btn_close = document.querySelector(".menu-mobile__close");
    btn_close.addEventListener("click", showHiddenMenu);

    // Desplegar submenus
    let menu_item = document.querySelectorAll(".menu-mobile__item");

    menu_item.forEach(item => {
        let submenu = item.querySelector(".menu-mobile__submenu");

        // Ocultar todos los submenus al cargar
        if (submenu) {
            submenu.style.display = "none";
        }

        item.addEventListener("click", (event) => {
            let target = event.target;

            // Solo prevenir default si el click es en el título del item que tiene submenu
            if (submenu && target.classList.contains("menu-mobile__title")) {
                event.preventDefault(); // Solo para abrir/cerrar submenu

                // Alternar submenu
                if (submenu.style.display === "block") {
                    submenu.style.display = "none";
                } else {
                    submenu.style.display = "block";
                }
            }
        });
    });

});
