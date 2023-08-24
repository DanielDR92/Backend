// const socketClient = io();
const agregarProducto = document.getElementById('agregar')
const productinput = document.getElementById('product')
const priceInput = document.getElementById('price')
const quantityInput = document.getElementById('quantity')
const divProducts = document.getElementById('productsDiv')
const containerProducts = document.getElementById(`productsDiv`);


// if ( agregarProducto ) {
//     agregarProducto.onclick = (e) => {
//         e.preventDefault()
//         socketClient.emit('product', { title: productinput.value, price: priceInput.value, quantity: quantityInput.value })
//     }
// }

// if ( divProducts && divProducts.innerHTML == '') {
//     console.log('inicializar')
//     socketClient.emit('inicio', async() => { console.log("Perro")})
// }

// if (divProducts) {
//     socketClient.on('products', (products) => {
//         console.log('agregando')
//         let productsText = '';
//         for (const product of products) {
//             productsText += `<li>${product.title}</li><li>${product.price}</li><li>${product.stock}</li><li><button id=${product.id} class="boton delete-product" href="#">Delete</button>
//             </li>`
//         }
        
//         divProducts.innerHTML = productsText;
//     })
// }

// if ( divProducts && divProducts.innerHTML == '' ) {
//     socketClient.on('inicializarProductos', (products) => {
//         console.log('inicializando')
//         let productsText = '';
//         products.forEach(product => {
//             productsText += `<li>${product.name}</li><li>${product.price}</li><li>${product.stock}</li><li><button id=${product._id} class="boton delete-product" href="#">Delete</button>
//             </li>`
//         })
        
//         divProducts.innerHTML = productsText;
//     })
// }

// containerProducts.addEventListener('click', (e) => {
//     if(e.target.classList.contains('delete-product')) {
//         socketClient.emit('deleteProduct', e.target.id)
//     }
// })


