import { productosServices } from "../js/producto/prducto-service.js";

const formulario = document.querySelector("[data-form");

        // esta funcion es para obtener la informacion
const  obtenerInformacion = async () =>{

        //constante para llamar la url y el ide de la url 
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    console.log(id);
            // esta validacion es para no tener id = "null"
    if(id == null){
        window.location.href = "/error.html"
    }


                //variables para obtener las tags del formulario
    const imageUrl = document.querySelector("[data-url]");
    const section = document.querySelector("[data-categoria]");
    const name = document.querySelector("[data-nombreProducto]");
    const price = document.querySelector("[data-precio]");
    const description = document.querySelector("[data-descripcionProducto]"); 


    
        //funcion que se dedica a obtener los resultados enviado spor la url y mostrarla en los campos del formulario
        const producto = await productosServices.detalleProducto(id) 
 
        imageUrl.file = "https://i.imgur.com/B2fcKcL.jpg";
        section.value = producto.section;
        name.value = producto.name;
        price.value = producto.price;
        description.value = producto.description;

        console.log(id);
}

obtenerInformacion();

        //aqui se llama a al comportamioento del boton al editar los campos
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

            //constante para llamar la url y el id de la url 
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

            //variables para llamar los datos del formulario
    const imageUrl = document.querySelector("[data-url]").file;
    const section = document.querySelector("[data-categoria]").value;
    const name = document.querySelector("[data-nombreProducto]").value;
    const price = document.querySelector("[data-precio]").value;
    const description = document.querySelector("[data-descripcionProducto]").value; 

    console.log(description, price,name, /*imageUrl,*/section )

    productosServices.actualizarProducto(imageUrl,section,name,price,description,id ).then( ()=>{
        window.location.href = "/EdicionProductoCompletado.html";
    })


})