const express=require('express');
 const Order = require('../models/order');
const { Updateorder, deleteoneOrder, getoneOrder, Addorder, getAllorders, getIncome } = require('../controllers/order');
 
const route =express.Router();

route.put('/UpdateOrder:id',Updateorder);
route.delete('/deleteOrder/:id',deleteoneOrder)
route.get('/getOrder/:id',getoneOrder)
route.get('/getAllOrders/',getAllorders)
route.post('/addOrder',Addorder )
route.get('/income',getIncome)



 module.exports=route;