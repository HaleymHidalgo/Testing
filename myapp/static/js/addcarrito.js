import { toNumber, toDivisa } from "./precios.js";

export const agregarcarrito = () => {
    console.log('btn presionado');
    const idProducto = parseInt(document.getElementById('idProducto').textContent)
    const modelo = document.getElementById('modeloProd').textContent
    const marca = document.getElementById('marcaProd').textContent
    const precio = toNumber(document.getElementById('precioProd').textContent)
    const img = document.querySelector('.img-carrucel')
    const stock = parseInt(document.getElementById('stockProd').textContent.slice(10,13))
    if (stock > 0) {

        if(localStorage.getItem('carritoCompra') !== null){
            const carrito = JSON.parse(localStorage.getItem('carritoCompra'))
            console.log(carrito)
            const producto = {
                "idProducto":idProducto,
                "modeloProducto":modelo,
                "marcaProducto":marca,
                "precioProducto":precio,
                "imgProducto":img.getAttribute('src'),
                "cantidadProducto": 1 //Aqui se trae cuantas u/producto agrego
            }

            carrito.push(producto)
            localStorage.setItem('carritoCompra', JSON.stringify(carrito))
            swal({
                title: "Producto Añadido Al Carrito!",
                icon: "success",
            });
        }else{
            const producto = {
                "idProducto":idProducto,
                "modeloProducto":modelo,
                "marcaProducto":marca,
                "precioProducto":precio,
                "imgProducto":img.getAttribute('src'),
                "cantidadProducto": 1 //Aqui se trae cuantas u/producto agrego
            }
            localStorage.setItem('carritoCompra', JSON.stringify([producto]))
            swal({ title: "Producto Añadido Al Carrito!", icon: "success"});
        }
    } else{
        swal({ title: "Producto Agotado", icon: "error"});
    }
}

function eliminarProdCarrito(id) {
    swal({
        title: "Producto Eliminado del Carrito!",
        icon: "error",
    });
    let carrito = JSON.parse(localStorage.getItem('carritoCompra')) || [];
    carrito = carrito.filter(item => item.idProducto !== id);
    localStorage.setItem('carritoCompra', JSON.stringify(carrito));
    actualizarCarrito();
}

export function actualizarCarrito() {
    const contenedorProductos = document.getElementById('contenedorProductos')

    contenedorProductos.innerHTML = '';

    if(localStorage.getItem('carritoCompra') !== null){
        const listaProductos = JSON.parse(localStorage.getItem('carritoCompra'))
        let precioTotal = 0
        listaProductos.map((productosAñadidos) => {
            const { idProducto, cantidadProducto, marcaProducto, modeloProducto, precioProducto, imgProducto} = productosAñadidos; 

            const producto = document.createElement('article')
            producto.classList.add('fondo-seccion', 'flex-row-center', 'row', 'texto-blanco')

            //creamos los datos
            const imgProd = document.createElement('img')
            imgProd.setAttribute('src', imgProducto)
            imgProd.setAttribute('alt', `${modeloProducto} - ${marcaProducto}`)
            imgProd.classList.add('imgCarrito', 'col-xl-6', 'col-md-7')

            const divDatos = document.createElement('div')
            divDatos.classList.add('flex-column-center', 'col-xl-6', 'col-md-5')
            
            const idProd = document.createElement('p')
            idProd.textContent = 'ID:' + idProducto
            idProd.classList.add("card-title");

            const nombreProd = document.createElement('p')
            nombreProd.textContent = modeloProducto

            const marcaProd = document.createElement('p')
            marcaProd.textContent = marcaProducto

            const cantidadProd = document.createElement('p')
            cantidadProd.textContent = 'Unidades: ' + cantidadProducto

            const precioProd = document.createElement('p')
            precioProd.textContent = toDivisa(precioProducto)

            const botonEliminar = document.createElement('button')
            botonEliminar.textContent = 'Eliminar'
            botonEliminar.classList.add("btn", "btn-danger")
            botonEliminar.addEventListener("click", async() => {
                await eliminarProdCarrito(idProducto)
                actualizarCarrito()
            })

            divDatos.appendChild(idProd)
            divDatos.appendChild(nombreProd)
            divDatos.appendChild(marcaProd)
            divDatos.appendChild(cantidadProd)
            divDatos.appendChild(precioProd)
            divDatos.appendChild(botonEliminar)

            producto.appendChild(imgProd)
            producto.appendChild(divDatos)

            contenedorProductos.appendChild(producto)

            precioTotal += precioProducto
        })

        //Aside de pago
        const precio = document.getElementById('precioTotal')
        //ARREGLAR -> añadir la funcion toDivisa() cuando este en formato numerico
        precio.textContent = toDivisa(precioTotal)

        document.getElementById('btnComprar').addEventListener('click', () => {
            //validar que el precio sea > 0
            if(toNumber(precio.textContent) > 0){
                realizarCompra(precio.textContent)
            }
        })

    }

}

//Para guardar en la BD la compra, pasamos los datos por parametro
const realizarCompra = (datosCompra) => {
    //Recopila la informacion

    //Pasarela de pago

    //mensaje de exito / error
    swal({title:'Compra Realizada con Exito!', text:`Total: ${datosCompra}` , icon:'success'})
}


document.addEventListener("DOMContentLoaded", () => {
    actualizarCarrito();
    document.getElementById('btnAdd').addEventListener('click', agregarcarrito);
});