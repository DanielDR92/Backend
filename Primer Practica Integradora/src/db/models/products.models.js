import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    require: true
  },
  stock: {
    type: Number,
    required: false,
    default: 0
  }
});

export const productsModel = mongoose.model('products', productsSchema);