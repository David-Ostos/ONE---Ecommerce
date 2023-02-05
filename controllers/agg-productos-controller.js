import { productosServices } from "../js/producto/prducto-service.js";

//alert de espera por el servidor
swal("Notificacion",
 "En este momento no se púede subir archivos, por lo tanto se selecciona una imagen aleatorea, proximamente se podra subir una imagen",{
    icon: "warning",
    timer: 10000
});

const formulario = document.querySelector("[data-form]");

const imagenesSW = [
    "https://i.imgur.com/WqrKZvQ.jpg",
    "https://i.imgur.com/WqrKZvQ.jpg",
    "https://i.imgur.com/1k9lYrU.jpg",
    "https://i.imgur.com/iO6Aopf.jpg",
    "https://i.imgur.com/khSrReJ.jpg",
    "https://i.imgur.com/prp1aIi.jpg",
    "https://i.imgur.com/YUyIkn3.png",
    "https://i.imgur.com/2Cc2LTa.png",
    "https://i.imgur.com/PMNDOUj.png",
    "https://i.imgur.com/Z0zMyC6.png",
    "https://i.imgur.com/F1Y5xYe.png",
    "https://i.imgur.com/TBVXlru.png",

]
const aleatorio = (e) => {
    return (Math.floor(Math.random() * e))
}

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    //
    const imageUrl = imagenesSW[aleatorio(imagenesSW.length)];
    const section = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-nombreProducto]").value;
    const price = document.querySelector("[data-precio]").value;
    const description = document.querySelector("[data-descripcionProducto]").value; 


    productosServices.agregarProducto(imageUrl, section, name, price, description).then(resoponse => {
        window.location.href = "/registroProductoCompletado.html"


    })
    .catch(err => console.log(err));
});
