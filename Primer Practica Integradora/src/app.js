import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import { Server } from 'socket.io'
// import productManager from './productManager.js'
import './db/dbConfig.js'
import productsRouter from './routes/products.routers.js';
import cartsRouter from './routes/carts.routers.js';
import { productsModel } from './db/models/products.models.js'
import { productsMongo } from './managers/products/productsMongo.js'
import { cartsMongo } from './managers/carts/cartsMongo.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// public
app.use(express.static(__dirname + '/public'))

// HANDLEBARS
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//routes
app.use('/api/views', viewsRouter)
app.use('/api/views/products', productsRouter)
app.use('/api/views/carts', cartsRouter)

const PORT = 8080

const httpServer = app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})

// const socketServer = new Server(httpServer)

// socketServer.on('connection', async (socket) => {
//   console.log(await productsMongo.findAll())
//   // const allProducts = await productsMongo.findAll()

  
//   socket.on('inicio',  () => {
//     console.log("Daniel")
//     socket.emit('inicializarProductos')
//   })


//   // socket.on('product',(product)=>{
//   //   // products.push({id:socket.id,product})
//   //   products.addProduct(product.title, product.price, product.quantity)

//   //   socketServer.emit('products',products.getProducts())
//   // })

//   // socket.on('deleteProduct', (id) => {
//   //   products.deleteProduct(id);

//   //   const allProducts = products.getProducts()

//   //   socket.emit('inicializarProductos', allProducts)
//   // })

  

// })
