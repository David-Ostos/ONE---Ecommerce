import { productosServices } from "../js/producto/prducto-service.js";

swal("Bienvenido a la seccion productos",
 "Aqui puedes eliminar y editar los productos, y en 'Agregar producto' puedes agregar un nuevo producto",{
    icon: "warning",
    timer: 10000
});

/* funcion para agregar contenido */
const nuevoProducto = (name, price, imageUrl, id) => {
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
      <i class="fa-solid fa-pen edit" data-edit></i>
      <i class="fa-solid fa-trash delete" data-delete id="${id}"></i>
    </div>
    
  </div>
        <div class="coleccion__container__contenido">
            <p class="coleccion__contenido__titulo">${name}</p>
            <p class="coleccion__contenido__precio">$ ${price}</p>
            <a href="producto.html?id=${id}">
                <p class="coleccion__contenido__ver ver">Ver producto</p>
            </a>
            <p class="coleccion__contenido__id">#${id}</p>
        </div>
    `;

  card.innerHTML = contenido;
  card.classList.add("coleccion__tarjeta");
  card.classList.add("container__column");

  const btnDel = card.querySelector("[data-delete]");
  btnDel.addEventListener("click", () => {
    productosServices
      .deleteProducto(id)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => 
      alert("ocurrio un error, el error fue: " + err));
  });

  const btnEdit = card.querySelector("[data-edit]");

  btnEdit.addEventListener("click", () =>{
    window.location.href = (`/editProducto.html?id=${id}`)
  })


  return card;
};

const productoStar = document.querySelector("[data-productos]");

/* funcion para concectarse con el servidor y pedir los campos contenido */

const render = async () => {
  try {
    const listaProductos = await productosServices.listaProductos();
    listaProductos.forEach(({ name, price, imageUrl, id }) => {
      productoStar.appendChild(nuevoProducto(name, price, imageUrl, id));
    });
  } catch (e) {
    console.log(e);
  }
};

render();

/* funcion para eliminar para elementos fijos*/

const btnDelete = document.querySelectorAll(".delete");

btnDelete.forEach((e) => {
  e.addEventListener("click", () => {
    const divIcon = e.parentElement.parentElement.parentElement;
    divIcon.remove();
  });
});

/* fincion de editar elementos fijos*/
const btnEd = document.querySelectorAll(".edit");


btnEd.forEach((e) => {
  e.addEventListener("click", () => {
    const divIcon = e.parentElement.parentElement.parentElement;
    const id = divIcon.querySelector(".coleccion__container__contenido").querySelector((".coleccion__contenido__id")).innerText
    
    window.location.href = `/editProducto.html?id=${id}`
  });
});

