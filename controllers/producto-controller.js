import { productosServices } from "../js/producto/prducto-service.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");

if (id == null) {
    window.location.href = "/errorProducto.html"
}

const nuevoProducto = (name, price, imageUrl, description) => {


    const card = document.createElement("div");

    const contenido = `
        <div class="producto__container container">
            <div class="producto__container__img">
                <img src="${imageUrl}" alt="producto-seleccionado" class="img__producto">
            </div>
            <div class="producto__container__contenido">
                <h1 class="producto__titulo">${name}</h1>
            <p class="producto__precio">$ ${price}</p>
            <p class="producto__descripcion">${description}</p>
            </div>
        </div>
        `;

    card.innerHTML = contenido;
    card.classList.add("producto");
    console.log(description);

    return card;
};


const producto = document.querySelector("[data-producto]");

/* funcion para concectarse con el servidor y pedir los campos contenido */

const render = async () => {
    try {
        productosServices.detalleProducto(id).then(({ name, price, imageUrl, description }) => {
            producto.appendChild(nuevoProducto(name, price, imageUrl, description))
        })
    } catch (e) {
        console.log(e);
    }
};

render();


