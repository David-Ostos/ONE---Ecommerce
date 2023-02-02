import { Usuario } from "./usuarios.js";

const btnLogin = document.querySelector("#btnLogin");
const inputUser = document.querySelector("[data-tipo-user]");
const inputPassword = document.querySelector("[data-tipo-password]") ;


//console.log(usuario.email1,usuario.password1);

btnLogin.addEventListener("click",(evento)  => {
    const userValue = inputUser.value;
    const passwordValue = inputPassword.value;
    const usuario = new Usuario(userValue, passwordValue);
    const mensaje = JSON.stringify(usuario.validar());


    if(usuario.validar() == true) {
        console.log("funciona");
    }else{
        alert(mensaje);   
        evento.preventDefault();
    }

});
/*
function verificarLogin(usuario, password){

    
}
*/