export class Usuario{

 
        #email = "login@gmail.com";
        #password = "Alura1324";
        email1 = "";
        password1 =  "";

    
     constructor(email, password){
        this.email1 = email;
        this.password1 = password;
     }

     validar() {
        if(this.#email == this.email1 && this.#password == this.password1){
            
            return true;
        }else if(this.#email == this.email1 && this.#password != this.password1){
            var mensaje = "Contraseña invalida"
            return mensaje;
        }else{
            var mensaje = "El usuario es invalido"
            return mensaje;
        }
            
     }

     get verEmail(){
        return this.#email;
     }

     get verPassword(){
        return this.#password;
}
}