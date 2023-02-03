import { productosServices } from "../js/producto/prducto-service.js";

const nuevoProducto = (name,price,imageUrl,id)=>{

    const card = document.createElement("div");

    const contenido = `
    <div class="coleccion__container__img">
    <a href="#"
      ><img
        src="${imageUrl}"
        alt="taza-strom"
        class="coleccion__contenido__img"
    /></a>
    <div class="coleccion__container__img--icon">
      <i class="fa-solid fa-pen edit"></i>
      <i class="fa-solid fa-trash delete"></i>
    </div>
    
  </div>
        <div class="coleccion__container__contenido">
            <p class="coleccion__contenido__titulo">${name}</p>
            <p class="coleccion__contenido__precio">$ ${price}</p>
            <a href="producto.html">
                <p class="coleccion__contenido__ver ver">Ver producto</p>
            </a>
            <p class="coleccion__contenido__id">#${id}</p>
        </div>
    `;
    card.innerHTML = contenido
    card.classList.add('coleccion__tarjeta');
    card.classList.add('container__column');
    return card;
}  

const productoStar = document.querySelector('[data-productos]');
const render = async () => {

    try {
        const listaProductos = await productosServices.listaProductos();
        console.log(listaProductos);
        listaProductos.forEach(element => {
            productoStar.appendChild(nuevoProducto(element.name,element.price,element.imageUrl,element.id))
        });
    } catch (e) {
        console.log(e);
    }
}

render();
