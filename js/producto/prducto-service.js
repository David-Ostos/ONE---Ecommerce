//GET

const listaProductos = () => fetch('http://localhost:3000/producto').then(respuesta => respuesta.json());

export const productosServices = {
    listaProductos,
} 