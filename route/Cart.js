 

const express=require('express');
const { updateItemCart, deleteoneItemCart, getoneItemCart, getAllItem, AddItem } = require('../controllers/cart');
const route =express.Router();

 


route.put('/updateItemCart:id',updateItemCart);
route.delete('/deleteCart/:id',deleteoneItemCart)
route.get('/getCart/:id',getoneItemCart)
route.get('/getAllcart/',getAllItem)
route.post('/addCart',AddItem)





 module.exports=route;