import { Router } from "express";
import { productsMongo } from "../managers/products/productsMongo.js";

const router = Router();

router.get('/allProducts', async(req,res) => {
  try {
    const products = await productsMongo.findAll();
    if (products.length) {
      res.status(200).json({message: 'Products', products });
    } else {
      res.status(200).json({message: 'No products found' });
    }
  } catch (error) {
    res.status(500).json({error})
  }
});

router.get('/:id', async(req,res) => {
  const id = req.params;
  try {
    const product = await productsMongo.findById(id);
    if (!product) {
      res.status(400).json({message: 'Invalid ID'})
    } else {
      res.status(200).json({message: 'Product', product})
    }
  } catch (error) {
    res.status(500).json({error})
  }
});

router.post('/createProduct', async(req,res) => {
  const {name, price, stock} = req.body;

  if ( !name || !price || !stock ) {
    return res.status(400).json({message: 'Missing Data'});
  } else {
    try {
      const newProduct = await productsMongo.createOne(req.body);
      res.status(200).json({message: 'Product created', product: newProduct});  
    } catch (error) {
      res.status(500).json({error})
    }
  }

});

router.put('/:id', async(req,res) => {
  try {
    
  } catch (error) {
    res.status(500).json({error})
  }
});

router.delete('/:id', async(req,res) => {
  try {
    
  } catch (error) {
    res.status(500).json({error})
  }
});

export default router;