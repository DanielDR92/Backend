import express from 'express'
import { __dirname } from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import { Server } from 'socket.io'
import productManager from './productManager.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

// HANDLEBARS
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

//routes
app.use('/api/views', viewsRouter)

const PORT = 8080

const httpServer = app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`)
})

const socketServer = new Server(httpServer)
const products = new productManager(__dirname + '/products.json')

socketServer.on('connection', (socket) => {
  const allProducts = products.getProducts()
  socket.on('inicio', () => {
    socket.emit('inicializarProductos', allProducts)
  })

  socket.on('product',(product)=>{
    // products.push({id:socket.id,product})
    products.addProduct(product.title, product.price, product.quantity)

    socketServer.emit('products',products.getProducts())
  })

  socket.on('deleteProduct', (id) => {
    products.deleteProduct(id);

    const allProducts = products.getProducts()

    socket.emit('inicializarProductos', allProducts)
  })

  

})
