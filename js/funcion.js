const $template = document.getElementById("template").content
const $fragmento = document.createDocumentFragment()
card = [
    { nombre: "Guantes", img: "./img/guantes.png", costo: 30000, descripcion: "Guantes para cicla de color negro y material en cuero" },
    { nombre: "Gorro", img: "./img/gorro.png", costo: 15000, descripcion: "Gorro en tela, de color gris y de marca nismo" },
    { nombre: "Gafas", img: "./img/gafas.png", costo: 10000, descripcion: "Gafas con filtro de luz azul, marco metalico, estuche y limpiador"}
];

card.forEach(element => {
    $template.querySelector("h1").textContent = element.nombre;
    $template.querySelector("img").setAttribute("src", element.img);
    $template.querySelector("img").setAttribute("alt", "imagen");
    $template.querySelector("p").textContent = element.descripcion;
    $template.querySelector("h2").textContent = "Costo: " + element.costo

    let $clone = document.importNode($template, true);
    $fragmento.appendChild($clone)
});

document.querySelector("main").appendChild($fragmento);

const btn = document.getElementById("btn__cambiar--color");

btn.addEventListener("click", ()=>{
    btn.classList.toggle("icon-sol");
    btn.classList.toggle("icon-luna")
})