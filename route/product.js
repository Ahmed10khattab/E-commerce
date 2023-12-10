const express=require('express');
const product = require('../models/product');
const { addProduct, getProducts, getoneProduct, deleteProduct, DeleteOneProduct } = require('../controllers/product');
const route=express.Router();

route.post('/addProduct',addProduct);
route.get('/allProducts',getProducts)

route.get('/OneProduct/:id',getoneProduct)


route.delete('/deleteAllProduct',deleteProduct)


route.delete('/deleteProduct/:id',DeleteOneProduct)

module.exports=route