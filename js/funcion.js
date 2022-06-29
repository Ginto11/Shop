import { cambiarColorDiaSoleado } from "./funcionesGlobales.js";
const $template = document.getElementById("template").content
const $fragmento = document.createDocumentFragment();

//  EN ESTE ARRAY SE GUARDAN LAS TARJETAS
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

    // METODO QUE CREA LAS TARJETAS CON ID
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

    /* static comprar(id){
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

    } */

}

// ARRAY DE OBJETOS, CADA OBJETO TIENE LA INFORMACION DE CADA TARJETA
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
    { nombre: "Camara Web", img: "./img/camara.png", costo: 200000, descripcion: "Camara web de color negro, Full HD 1080p 30 fps Video Signa, 2 x Built-In Beamforming Microphones"},
    { nombre: "Cicla", img: "./img/cicla.png", costo: 1000000, descripcion: "Cicla de color negro, con estructura metalica, guarda barros en pasta de color negro, llantas anchas y frenos con cambios." },
    { nombre: "Base Refrigerante", img: "./img/base_refrigerante.png", costo: 400000, descripcion: "Base regrigerante de 4 ventiladores, de color rojo, con dos soportes en pasta, puertos USB."},
    { nombre: "Todo en Uno", img: "./img/only_one.png", costo: 2000000, descripcion: "Todo en uno, de 22 Pulgadas, con soporte metalico, con mouse optico alambrico y teclado, procesador core i3 10Th, de 4GB de RAM y un disco duro de 1 Tera."},
    { nombre: "Computador", img: "./img/computer.png", costo: 600000, descripcion: "Computador de 20 pulgadas con CPU de $GB de RAM, con teclado y mouse alambrico y con windows 10."},
    { nombre: "Maleta Rodante", img: "./img/maleta_rodante.png", costo: 300000, descripcion: "Maleta Rodante de color rojo, dos ruedas en pasta, y mango en pasta."},
    { nombre: "Impresora", img: "./img/impresora.png", costo: 200000, descripcion: "Impresora de color gris multifuncional, con escaner, fotocopiadora y con menu de botones."},
    { nombre: "Nevera", img: "./img/nevera.png", costo: 1200000, descripcion: "Nevera de color gris, con dispensador de agua, con refrigerador, con temperatura ajustable y 4 soportes."},
    { nombre: "Tableta", img: "./img/tablet.png", costo: 800000, descripcion: "Tablet Lenovo con lapiz Tab P12 pro, pantalla de 12 pulgadas, y con sistema operativo android."}
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

/*
    FOREACH QUE CREA LAS TARJETAS CON ID, DE ACUERDO AL METODO CREARTARJETAS()
    Y LAS VA INGRESANDO A AL ARRAY TARJETAS
*/
card.forEach(elemt =>{

    const tarjeta = new Tarjeta(elemt.nombre, elemt.img, elemt.costo, elemt.descripcion)
    tarjeta.crearTajetas()
    tarjetas.push(tarjeta)
})

// SE AGREGA EL FRAGMENTO AL DOM, ESTE FRAGMENTO TIENE EL CLON CON CADA UNA DE LAS TARJETAS
document.querySelector(".contenedor__tarjetas").appendChild($fragmento);


// BLOQUE DE CODIGO QUE CREA LA INTERFAZ DE PAGO, DE ACUERDO A LA VALIDACION Y AL METODO
let $overlay = document.querySelector(".overlay");
document.addEventListener("click", e =>{
    if(e.target.matches("button")){
        console.log($overlay)
        document.querySelector(".overlay").style.display = "block";
        let id = e.target.dataset.id;
        generarFrameCompra(id);

        /* if(e.target.matches("button")){

            tarjetas.map((item) =>{

                if(item.id == e.target.dataset.id){
                    let id = e.target.dataset.id
                    Tarjeta.comprar(id)
                }
            })
        } */
    }
    // BLOQUE DE CODIGO QUE CANCELA EL PAGO DEL ELEMENTO, DE ACUERDO A LA VALIDACION
    else if(e.target.className == "cancelar__pago"){
        try {
            $("#borrar").remove()
            document.querySelector("body").removeChild($overlay)
        } catch (error) {
            console.log("Error en el " + error)
        }
        let nuevoOverlay = document.createElement("div");
        nuevoOverlay.classList.add("overlay")
        nuevoOverlay.classList.add("inactive")
        nuevoOverlay.setAttribute("id", "borrar")

        let nuevoTemplate = document.createElement("div")
        nuevoTemplate.classList.add("frame_pago")
        nuevoTemplate.setAttribute("id", "ventana__compra")

        nuevoOverlay.appendChild(nuevoTemplate)
        document.body.appendChild(nuevoOverlay)
        alert("Has cancelado la compra")
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

let $frameCompra = document.getElementById("ventana__compra").content;
let $fragmentoCompra = document.createDocumentFragment();

//METODO QUE CREA LA VENTANA DE PAGO
function generarFrameCompra(id){

    tarjetas.filter(item =>{

        if(item.id == id){
            console.log(item)
            console.log("encontrado")
            document.getElementById("ventana__compra").style.transform = "scale(0.7)";
            document.getElementById("ventana__compra").style.transition = ".3s ease all"
            $frameCompra.querySelector("img").setAttribute("src", item.imagen)
            $frameCompra.querySelector("img").setAttribute("alt", item.nombre)
            $frameCompra.querySelector(".descripcion").textContent = item.descripcion
            $frameCompra.querySelector(".nombre").setAttribute("value", item.nombre)
            $frameCompra.querySelector(".costo").setAttribute("value", item.costo)
            $frameCompra.querySelector(".iva").setAttribute("value", item.costo * 0.19)
            $frameCompra.querySelector(".pago").setAttribute("value", (item.costo * 0.19) + item.costo)

            setTimeout(()=>{
                document.getElementById("ventana__compra").style.transform = "scale(1)";
            }, 100)

            let $clone = document.importNode($frameCompra, true);
            $fragmentoCompra.appendChild($clone)
        }

        document.querySelector(".frame_pago").appendChild($fragmentoCompra)
    })
}
