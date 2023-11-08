import productos from './arrayProductos.js';
import navbar from '../componentes/navbar.js';
import footer from '../componentes/footer.js';


document.addEventListener('DOMContentLoaded', navbar);
document.addEventListener('DOMContentLoaded', footer);



const contenedorCards = document.querySelector('.contenedorCards');
const botonesCategoria = document.querySelectorAll('.asideBotones');
let botonesAgregar = document.querySelectorAll('.productoAgregar');



const insertarCategoria = (productosElegidos) => {
    contenedorCards.innerHTML = '';
    productosElegidos.forEach(producto => {
        let div = document.createElement('div');
        div.classList.add('card','filtro', 'animate__animated', 'animate__fadeIn');
        div.style = "width: 12rem";
        div.innerHTML = `
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">$${producto.precio}</p>
                <button class="productoAgregar btn btn-success" id="${producto.titulo}">Agregar</button>
            </div>
`;
    contenedorCards.appendChild(div);
    });
    actualizarBotones();
    
}
insertarCategoria(productos);



botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {

        botonesCategoria.forEach(boton => boton.classList.remove('active'));

        e.currentTarget.classList.add('active');

        if (e.currentTarget.id !== 'todos') {
            const productoBotonCategoria = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            insertarCategoria(productoBotonCategoria);
        } else {
            insertarCategoria(productos);
        }


    })
})


//FUNCIONES PARA AGREGAR LOS PRODUCTOS AL CARRITO
function actualizarBotones (){
    botonesAgregar = document.querySelectorAll('.productoAgregar');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito)
    });

    }

const productosCarritoLs = JSON.parse(localStorage.getItem('productosDelCarrito'));
let productosCarrito;

if (productosCarritoLs) {
    productosCarrito = productosCarritoLs;
}else{
    productosCarrito = [];
}

function agregarAlCarrito (e) {
    let idBoton = e.currentTarget.id
    const productoAgregado = productosLocalS.find(producto => producto.titulo === idBoton);
    console.log(productoAgregado);

    
    if(productosCarrito.some(producto => producto.titulo === idBoton)) {
        const index = productosCarrito.findIndex(producto => producto.titulo === idBoton);
        productosCarrito[index].cantidad++;

    } else{
        productoAgregado.cantidad = 1;
        productosCarrito.push(productoAgregado);
    }
    
    localStorage.setItem('productosDelCarrito', JSON.stringify(productosCarrito));

} 



//FUNCION PARA CERRAR SESION
// document.addEventListener('DOMContentLoaded', function (){
//     const botonCerrarSesion = document.getElementById('cerrarSesion');

//     botonCerrarSesion.addEventListener("click", function () {
//         localStorage.removeItem("userLogged");
//         alert('Sesión cerrada');
//         window.location.reload();
//     });
// })




//FUNCION PARA EL BUSCADOR
// const buscador = document.getElementById('inputBuscador');
// console.log(buscador);
// document.addEventListener('keyup', e => {
//     if (e.target.matches('#inputBuscador')) {
//         document.querySelectorAll('.card-title').forEach(card => {
//             card.textContent.toLowerCase().includes(e.target.value.toLowerCase()) 
//             ? card.classList.remove('filtro') 
//             : card.classList.add('filtro')
//         })
//     }
// })

const btnBuscador = document.getElementById('botonBuscador');
btnBuscador.addEventListener('click', buscar)

function buscar (e){
    e.preventDefault()
    let buscador = document.getElementById('inputBuscador').value.toLowerCase();

    if (buscador === 'camisas', 'camisa') {
        let buscadorCategorias = productosLocalS.filter(producto => producto.categoria === buscador)
        
        insertarCategoria(buscadorCategorias)

    } if (buscador === 'pantalones', 'pantalon') {
        
    } if (buscador === 'sacos', 'saco') {
        
    }
    }


// const productoBotonCategoria = productosLocalS.filter(producto => producto.categoria === e.currentTarget.id);
//  console.log(productosLocalS);

// botonesCategoria.forEach(boton => {
//     boton.addEventListener('click', (e) => {

//         botonesCategoria.forEach(boton => boton.classList.remove('active'));

//         e.currentTarget.classList.add('active');

//         if (e.currentTarget.id !== 'todos') {
//             const productoBotonCategoria = productosLocalS.filter(producto => producto.categoria === e.currentTarget.id);
//             insertarCategoria(productoBotonCategoria);
//         } else {
//             insertarCategoria(productosLocalS);
//         }
//     })
// })