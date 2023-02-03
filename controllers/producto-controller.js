import { productosServices } from "../js/producto/prducto-service.js";

//alert de espera por el servidor
swal("Bienvenido",
 "Si no aparece el contenido espera unos segundos que el servidor responda. gracias por su visita",{
    icon: "info",
    timer: 10000
});


const nuevoProducto = (name,price,imageUrl)=>{

    const card = document.createElement("div");

    const contenido = `
        <a href="#">
            <img
                src="${imageUrl}"
                alt=""
                class="coleccion__contenido__img"
            />
        </a>
        <div class="coleccion__container__contenido">
            <p class="coleccion__contenido__titulo">${name}</p>
            <p class="coleccion__contenido__precio">$ ${price}</p>
            <a href="producto.html">
                <p class="coleccion__contenido__ver ver">Ver producto</p>
            </a>
        </div>
    `;
    card.innerHTML = contenido
    card.classList.add('coleccion__tarjeta');
    card.classList.add('container__column');
    return card;
}  

const producto = document.querySelector('[data-producto-starWars]');
const render = async () => {

    try {
        const listaProductos = await productosServices.listaProductos();
        listaProductos.forEach(element => {
            producto.appendChild(nuevoProducto(element.name,element.price,element.imageUrl))
        });
    } catch (e) {
        console.log(e);
    }
}

render();
