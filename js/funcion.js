import { cambiarColorDiaSoleado } from "./funcionesGlobales.js";
const $template = document.getElementById("template").content
const $fragmento = document.createDocumentFragment();

const tarjetas = []

class Tarjeta{
    static id = 0
    constructor(titulo, imagen, costo, descripcion){
        this.nombre = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion; 
        this.costo = costo;
        this.id = Tarjeta.id
        Tarjeta.id++
    }

    crearTajetas(){
        $template.querySelector("h1").textContent = this.nombre;
        $template.querySelector("img").setAttribute("src", this.imagen);
        $template.querySelector("img").setAttribute("alt", "imagen");
        $template.querySelector("p").textContent = this.descripcion;
        $template.querySelector("h2").textContent = "Costo: " + this.costo
        $template.querySelector(".card").dataset.id = this.id
        $template.querySelector("button").dataset.id = this.id
        let $clone = document.importNode($template, true);
        $fragmento.appendChild($clone)
    }

    static comprar(id){
        tarjetas.map(item =>{
            if(item.id == id){
                console.log(item)
                let confirmar = confirm("Deseas comprar el elemento?");
                
                if(confirmar){
                    let costo = parseInt(prompt("Ingresa el valor?"));
                    if(!costo) return alert("Ingrese caracteres validos");
                    (item.costo > costo) ? alert("Sin fondos suficientes")
                        : alert("Comprado con exito");
                        
                }
            }
        })
        
    }

}

const card = [
    { nombre: "Guantes", img: "./img/guantes.png", costo: 30000, descripcion: "Guantes para cicla de color negro y material en cuero" },
    { nombre: "Gorro", img: "./img/gorro.png", costo: 15000, descripcion: "Gorro en tela, de color gris y de marca nismo" },
    { nombre: "Gafas", img: "./img/gafas.png", costo: 10000, descripcion: "Gafas con filtro de luz azul, marco metalico, estuche y limpiador"},
    { nombre: "Chaqueta", img: "./img/chaqueta.png", costo: 40000, descripcion: "Chaqueta de color azul y rojo, en tela tipo beisbolista, talla S"},
    { nombre: "Tenis", img: "./img/tenis.png", costo: 120000, descripcion: "Tenis de color azul y blanco, marca nike, cordones de color negro, con garantia de 2 meses"},
    { nombre: "Reloj", img: "./img/reloj.png", costo: 80000, descripcion: "Reloj de color rosado, con medidor de temperatura, distancia, duracion, material metalico."},
    { nombre: "Mouse", img: "./img/mouse.png", costo: 25000, descripcion: "Mouse optico de color negro tipo gamer, con luces de colores"},
    { nombre: "Celular", img: "./img/celular.png", costo: 800000, descripcion: "Celular Samsung A3, con 8GB RAM, android 11, 164 GB de almacenamiento interno y con manos libre" },
    { nombre: "Portatil", img: "./img/portatil.png", costo: 1800000, descripcion: "Portatil intel core 5, 500GB de disco duro, 4 GB RAM, windows 10 pro"},
    { nombre: "Televisor", img: "./img/tv.png", costo: 400000, descripcion: "Televisor con pantalla led de 32 pulgadas HD smart Tv, Garantia de 1 año" },
    { nombre: "Camara Web", img: "./img/camara.png", costo: 200000, descripcion: "Camara web de color negro, Full HD 1080p 30 fps Video Signa, 2 x Built-In Beamforming Microphones"}
];


// card.forEach(element => {
//     $template.querySelector("h1").textContent = element.nombre;
//     $template.querySelector("img").setAttribute("src", element.img);
//     $template.querySelector("img").setAttribute("alt", "imagen");
//     $template.querySelector("p").textContent = element.descripcion;
//     $template.querySelector("h2").textContent = "Costo: " + element.costo

//     let $clone = document.importNode($template, true);
//     $fragmento.appendChild($clone)
// });
card.forEach(elemt =>{

    const tarjeta = new Tarjeta(elemt.nombre, elemt.img, elemt.costo, elemt.descripcion)
    tarjeta.crearTajetas()
    tarjetas.push(tarjeta)
})
document.querySelector(".contenedor__tarjetas").appendChild($fragmento);


const btn = document.getElementById("btn__cambiar--color");

btn.addEventListener("click", ()=>{
    btn.classList.toggle("icon-sol");
    btn.classList.toggle("icon-luna")
    if(btn.classList.contains("icon-sol")){
        cambiarColorDiaSoleado();
    }
});

document.addEventListener("click", e =>{
    if(e.target.dataset.id){
        console.log(e.target.dataset.id)
        
        if(e.target.matches("button")){
            
            tarjetas.map((item) =>{

                if(item.id == e.target.dataset.id){
                    let id = e.target.dataset.id
                    Tarjeta.comprar(id)
                }
            })
        }
    }
})

/* document.getElementById("btnAgregar").addEventListener("click", ()=>{
    nombre = prompt("ingrese el nombre")
    imagen = prompt("ingrese la ruta")
    costo = parseInt(prompt("Ingrese el costo"))
    descripcion = prompt("ingrese la descripcion")

    card.push({nombre, imagen, costo, descripcion})

    card.forEach(elemt =>{

        const tarjeta = new Tarjeta(elemt.nombre, elemt.img, elemt.costo, elemt.descripcion)
        tarjeta.crearTajetas()
    })
})
 */


