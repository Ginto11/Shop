const $formulario_Registro = document.getElementById("formulario__registro");
const $formulario_Sesion = document.getElementById("formulario__sesion");
const $btnRegistro = document.getElementById("btn__registrarse")
const $btnLogearme = document.getElementById("btn__logearse");
const $btnRegistrarme2 = document.getElementById("btn__registrarse2");
const $btnLogearme2 = document.getElementById("btn__logearme2");

const listaUsuarios = [
    { correo: "empresanvs@gmail.com", password: 1001944317 }
]


$formulario_Sesion.addEventListener("submit", e =>{
    e.preventDefault()

    const datos = new FormData($formulario_Sesion);
    const [correo, password] = [...datos.values()];

    listaUsuarios.some(element =>{
        if(element.correo == correo && element.password == password){
            return setTimeout("location.href = './inicio.html'");
        } 
    });

    listaUsuarios.some(element => {
        if(element.correo != correo || element.password != password){
            document.getElementById("correo").value = ""
            document.getElementById("password").value = ""
            return alert("Datos incorrectos.");
        }
    })

    /*listaUsuarios.filter(element =>{
        //document.getElementById("correo").value = ""
        //document.getElementById("password").value = ""
        if(element.correo == correo && element.password != password) {
            document.getElementById("correo").value = ""
            document.getElementById("password").value = ""
            return alert("Contraseña incorrecta");
        }
        if(element.correo != correo && element.password != password) {
            document.getElementById("correo").value = ""
            document.getElementById("password").value = ""
            return alert("Usuario no registrado.")
        }
        if(element.correo == correo && element.password == password) {
            return setTimeout("location.href = './inicio.html'");
        }
        
    }); */
});

$formulario_Registro.addEventListener("submit", e =>{
    e.preventDefault()

    const datos1 = new FormData($formulario_Registro);
    const [correo1, password1] = [...datos1.values()]

    listaUsuarios.forEach(element =>{
        if(element.correo !== correo1){

            document.getElementById("correo2").value = ""
            document.getElementById("password2").value = ""
            alert("Usuario registrado exitosamente")
            listaUsuarios.push({correo: correo1, password: password1})
            crearFrameLogin();
        }else{
            alert("Este usuario ya se encuentra registrado")
        }
    })
})



$btnRegistro.addEventListener("click", ()=>{
    crearFrameRegistro()
});



$btnLogearme.addEventListener("click", ()=>{
    crearFrameLogin()
});

$btnRegistrarme2.addEventListener("click", (e)=>{
    e.preventDefault()
    crearFrameRegistro()
});

$btnLogearme2.addEventListener("click", (e)=>{
    e.preventDefault();
    crearFrameLogin()
})


function crearFrameRegistro(){
    $formulario_Sesion.style.display = "none"
    $formulario_Registro.style.display = "flex"
    $btnLogearme.style.display = "flex"
    $btnRegistro.style.display = "none"
}

function crearFrameLogin(){
    $formulario_Registro.style.display = "none"
    $btnRegistro.style.display = "flex"
    $btnLogearme.style.display = "none"
    $formulario_Sesion.style.display = "flex"
}
