export {cambiarColorDiaSoleado}


function cambiarColorDiaSoleado(){
    document.querySelector(".cabecera").style.backgroundColor = "#fff";
    document.querySelector(".titulo__cabecera").style.color = "#000";
    document.querySelector("body").style.backgroundColor = "#afafaf";
    document.querySelector(".registrarse").style.color = "#f00";
    document.querySelector(".icon-sol").style.color = "#000";        
    document.querySelector(".icon-sol").style.borderColor = "#000";
    const cards = document.querySelectorAll(".card").forEach(element =>{
        element.style.backgroundColor = "#fff"
        element.querySelector("h1").style.color = "#000";
        element.querySelector("h1").style.backgroundColor = "#0002"
    })
    const links1 = document.querySelectorAll(".contenedor__links1 a");
    links1.forEach(element =>{
        element.style.color = "#f00";
    })

    return true;
}