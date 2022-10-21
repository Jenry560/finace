(function(){
    const openButton = document.querySelector(".nav__menu");
    const menu = document.querySelector(".nav__link")
    const closeMenu = document.querySelector(".nav__close")
    const cerrar = document.querySelectorAll(".nav__links")


    cerrar.forEach(cerrar=>{
        cerrar.addEventListener("click",()=>{
            menu.classList.remove("nav__link--show")
        });
    })
    


    openButton.addEventListener("click",()=>{
        menu.classList.add("nav__link--show")
    });
    
    closeMenu.addEventListener("click",()=>{
        menu.classList.remove("nav__link--show")
    });

})();