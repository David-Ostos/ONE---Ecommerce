//GET

const listaProductos = () => fetch('https://bitter-rare-plaster.glitch.me/producto').then(respuesta => respuesta.json());

export const productosServices = {
    listaProductos,
} 