import { Router } from "express";
import { cartsMongo } from "../managers/carts/cartsMongo.js";

const router = Router();

router.get('/', async(req,res) => {
  try {
    
  } catch (error) {
    res.status(500).json({error})
  }
});

router.get('/:id', async(req,res) => {
  try {
    
  } catch (error) {
    res.status(500).json({error})
  }
});

router.post('/', async(req,res) => {
  try {
    
  } catch (error) {
    res.status(500).json({error})
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