let menu = document.querySelector(".menu-responsive");

document.querySelector(".boton-menu").addEventListener("click", () =>{
    menu.classList.add("sacar-menu")
})

document.querySelector(".cerrar-menu").addEventListener("click", ()=>{
    menu.classList.remove("sacar-menu")
})
