const divCards = document.querySelector('.price_table')
const vaciarCarrito = document.querySelector('.modal_vaciar')
const precioTotal = document.querySelector('#precio_total')
const procesarCompra = document.querySelector('#modal_finalizar')

let carrito = []
let productosJson = []

document.querySelector('DOMContentLoaded', () => {
    JSON.parse(localStorage.getItem('carrito')) || []
    mostrarCarrito()
})

vaciarCarrito.addEventListener('click', () => {
    carrito.length = []
    mostrarCarrito()
})
    
async function obtenerProductos() {
    const productosFetch = await fetch('./js/consolas.json')
    productosJson = await productosFetch.json()
}

const buscarProductos = async () => {
    await obtenerProductos()
    productosJson.forEach(prod => {
        const { id, price, title, image } = prod
        divCards.innerHTML += `
        <div class="price_element">
            <p class="price_name">${title}</p>
            <img src="${image}" alt="" class="price_cards">
            <p class="price_price">S/ ${price}</p>
            <button onclick="agregarProductos(${id})" class="price_finalizar price_agregar">Agregar al Carrito</button>
        </div>
        `
    })

}
buscarProductos()

async function agregarProductos(id) {
    await obtenerProductos()

    const existe = carrito.some(prod => prod.id === id)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                prod.cantidad++
            }
        })
    } else {
        const items = productosJson.find((prod) => prod.id === id)
        carrito.push(items)
    }


    mostrarCarrito()
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal_body')

    modalBody.innerHTML = ''
    carrito.forEach((prod) => {
        const { id, image, price, title, cantidad } = prod
        modalBody.innerHTML += `
        <div class="modal_contenedor">

            <div>
                <img class="carrito_img" src="${image}"/>
            </div>

                <div>
                    <p class="modal_paragraph">Producto: ${title}</p>
                    <p class="modal_paragraph">Precio: ${price}</p>
                    <p class="modal_paragraph">Cantidad: ${cantidad}</p>
                    <button onclick="eliminarProducto(${id})" class="eliminar_producto">Eliminar Producto</button>
                </div>

        </div>
        `
    })

    if (carrito.length === 0) {
        modalBody.innerHTML = `
        <p class="parrafo">Aun no Agregaste nada!</p>
        `
    }

    precioTotal.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0)
    const precioFinal = precioTotal.innerHTML
    procesarCompra.addEventListener('click', () => {
        if (carrito.length === 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `Tu carrito esta vacio`,
                showConfirmButton: false,
                timer: 5000
            })
        } else {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `El Total de tu Compra es S/ ${precioFinal}`,
                showConfirmButton: false,
                timer: 5000
            })
            modalBody.innerHTML = 'GRACIAS POR TU COMPRA!'
            precioTotal.innerHTML = 0
        }
    })

    guardarStorage()
}

function eliminarProducto(id) {
    const juegoId = id
    carrito = carrito.filter((juego) => juego.id !== juegoId)
    mostrarCarrito()
}

function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}








