document.addEventListener("DOMContentLoaded", (event) =>{

    //seleccionar mis dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    //funcion mostrar y ocultar menu
    const showHiddenMenu = ()=> {
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            mobile_menu.classList.remove("menu-mobile--show");
        }else{
            mobile_menu.classList.add("menu-mobile--show");
        }
    };
    
    //Al dar click a btnmenu mostrar el menu de navegacion
    mobile_btn.addEventListener("click" , showHiddenMenu);
    
    //Al redimensionar la pantalla ocultar el menu
    window.addEventListener("resize" , () => {
        let window_width = document.body.clientWidth;

        if(window_width >= 1000){
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    //Al clicar X cerrar 
    let btn_close = document.querySelector(".menu-mobile__close");
    btn_close.addEventListener("click" , showHiddenMenu);

    //Desplegar submenus
    let menu_item = document.querySelectorAll(".menu-mobile__item");

    menu_item.forEach(item => {
        let submenu = item.querySelector(".menu-mobile__submenu");

        // Ocultar todos los submenus al cargar
        if (submenu) {
            submenu.style.display = "none";
        }

        item.addEventListener("click" , (event) => {
            if (submenu) {
                // Evita que el enlace navegue si tiene submenu
                event.preventDefault();

                if(submenu.style.display === "block"){
                    submenu.style.display = "none";
                } else {
                    submenu.style.display = "block";
                }
            }
        });
    });

});

