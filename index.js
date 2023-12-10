const express=require('express')
const app= express();
const mongoose=require('mongoose');

const routeuser=require('./route/user');
const routeAuth=require('./route/Auth')
const routePriduct=require('./route/product');
 const orderRoute = require('./route/order');
 const cartRoute = require('./route/Cart');

mongoose.connect('mongodb+srv://user1:lvE2iugJTPZRcx41@atlascluster.ytbxqwi.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connected With monogo db successed')
})


app.use(express.json());
app.use('/user',routeuser);
app.use('/Auth',routeAuth)
app.use('/Product',routePriduct)
app.use('/cart',cartRoute);
app.use('/order',orderRoute)
 
 

app.listen(process.env.PORT||2000,()=>{
    console.log( 'server is created successfully')
   
})