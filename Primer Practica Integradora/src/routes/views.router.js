import { Router } from "express";

const router = Router()

router.get('/products',(req,res)=>{
    res.render('productsHome')
})

router.get('/',(req,res)=>{
    res.render('home')
})

router.get('/',(req,res)=>{
    res.render('home')
})

export default router