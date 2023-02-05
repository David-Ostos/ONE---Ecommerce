import { Usuario } from "./usuarios.js";

swal("El usuario es login@gmail.com y la contraseña es Alura1",
 "",{
    icon: "warning",
    timer: 10000
});

const btnLogin = document.querySelector("#btnLogin");
const inputUser = document.querySelector("[data-tipo-user]");
const inputPassword = document.querySelector("[data-tipo-password]") ;

console.log(inputUser, inputPassword,btnLogin)


//console.log(usuario.email1,usuario.password1);

btnLogin.addEventListener("click",(evento)  => {
    const userValue = inputUser.value;
    const passwordValue = inputPassword.value;
    const usuario = new Usuario(userValue, passwordValue);
    const mensaje = JSON.stringify(usuario.validar());
    evento.preventDefault();

    if(usuario.validar() == true) {
        console.log("funciona");
        window.location.href = "/productos.html"
    }else{
        alert(mensaje);   
        evento.preventDefault();
    }

});
/*
function verificarLogin(usuario, password){

    
}
*/