import { productsMongo } from "../../managers/products/productsMongo";

const productTableDiv = document.getElementById('productTableDiv')
const productinput = document.getElementById('product')
const priceInput = document.getElementById('price')
const quantityInput = document.getElementById('quantity')

console.log(productTableDiv)

const products = await productsMongo.findAll();

console.log(products)