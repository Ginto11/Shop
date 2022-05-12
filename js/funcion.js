const $template = document.getElementById("template").content
const $fragmento = document.createDocumentFragment()
card = [
    { nombre: "Guantes", img: "./img/guantes.png", costo: 30000, descripcion: "Guantes para cicla de color negro y material en cuero" },
    { nombre: "Gorro", img: "./img/gorro.png", costo: 15000, descripcion: "Gorro en tela, de color gris y de marca nismo" },
    { nombre: "Gafas", img: "./img/gafas.png", costo: 10000, descripcion: "Gafas con filtro de luz azul, marco metalico, estuche y limpiador"},
    { nombre: "Chaqueta", img: "./img/chaqueta.png", costo: 40000, descripcion: "Chaqueta de color azul y rojo, en tela tipo beisbolista, talla S"},
    { nombre: "Tenis", img: "./img/tenis.png", costo: 120000, descripcion: "Tenis de color azul y blanco, marca nike, cordones de color negro, con garantia de 2 meses"},
    { nombre: "Reloj", img: "./img/reloj.png", costo: 80000, descripcion: "Reloj de color rosado, con medidor de temperatura, distancia, duracion, material metalico."},
    { nombre: "waifu 4k", img: "./img/ardila.jpg", costo: 12000, descripcion: "la que te hara feliz" },
    {  nombre: "Mouse", img: "./img/mouse.png", costo: 120000, descripcion: "Mouse Gamer"},
    { nombre: "Goku", img: "./img/goku.gif", costo:"Tu corazon", descripcion: "Muy fuerte"}
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


document.querySelector(".contenedor__tarjetas").appendChild($fragmento);

const btn = document.getElementById("btn__cambiar--color");

btn.addEventListener("click", ()=>{
    btn.classList.toggle("icon-sol");
    btn.classList.toggle("icon-luna")
})