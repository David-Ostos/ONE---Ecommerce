import { productosServices } from "../js/producto/prducto-service";

const nuevoProducto = (name,precio,imageUrl)=>{

    const card = document.createElement("div");
    card.classList.add('coleccion__tarjeta container__column');

    const contenido = `
    <div>
        <a href="#">
            <img
                src="${imageUrl}"
                alt=""
                class="coleccion__contenido__img"
            />
        </a>
        <div class="coleccion__container__contenido">
            <p class="coleccion__contenido__titulo">${name}</p>
            <p class="coleccion__contenido__precio">$ ${precio}</p>
            <a href="producto.html">
                <p class="coleccion__contenido__ver ver">Ver producto</p>
            </a>
        </div>
    </div>
    `;

    card.innerHTML = contenido
    return card;
}  

