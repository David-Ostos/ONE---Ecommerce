//GET

const listaProductos = () => fetch('https://bitter-rare-plaster.glitch.me/producto').then(respuesta => respuesta.json());

const agregarProducto = (imageUrl, section,name, price,description) =>{
    return fetch("https://bitter-rare-plaster.glitch.me/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imageUrl,section, name, price, description, id: uuid.v4()})
    })
}

export const productosServices = {
    listaProductos,
    agregarProducto 
} 