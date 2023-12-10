const express=require('express');
const router = require('./Auth');
const { verfiy, verfiyTokenAuther, verfiyTokenAndAdmin } = require('./verfiyToken');
const User = require('../models/User');
const { updateUser, DeleteOneuser, getoneUser, getUser } = require('../controllers/users');
const route=express.Router();
 

route.put("/updateUser:id",verfiyTokenAuther,updateUser)
route.delete('/DeleteUser:id',verfiyTokenAuther,DeleteOneuser)
route.get('/OneUser:id',verfiyTokenAndAdmin,getoneUser)
route.get('/allUsers',verfiyTokenAndAdmin,getUser)
      

module.exports=route;