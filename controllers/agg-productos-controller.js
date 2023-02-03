import { productosServices } from "../js/producto/prducto-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const imageUrl = "https://i.imgur.com/WqrKZvQ.jpg";
    const section = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-nombreProducto]").value;
    const price = document.querySelector("[data-precio]").value;
    const description = document.querySelector("[data-descripcionProducto]").value; 

    productosServices.agregarProducto(imageUrl, section, name, price, description).then(resoponse => {
        window.location.href = "/registroProductoCompletado.html"
    })
    .catch(err => console.log(err));
});
