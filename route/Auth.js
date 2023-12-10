const express = require('express');
const router = express.Router();
 const encrypt=require('crypto-js');
const User = require('../models/User');
const jwt=require('jsonwebtoken');

 



router.post('/register', async (req, res) => {
    
    const newUser = new User({
        "username": req.body.username,
        "email": req.body.email,
        "password" :encrypt.AES.encrypt( req.body.password,'anna').toString(),
    })
    try {
        const user = await newUser.save();
        res.status(201).json({
            newUser: newUser
        }
        )
    } catch (error) {
        res.status(500).json(error);
    }

    

})



router.post('/login',async(req,res)=>{

try {   
    const user=await User.findOne({username:req.body.username});
    !user&& res.status(401).json('error in email');
    const hashpassword=encrypt.AES.decrypt(user.password,"anna");
    const Originalpassword=hashpassword.toString(encrypt.enc.Utf8)
     Originalpassword !==req.body.password && res.status(401).json('error in password');

const accessToken=jwt.sign({ id:user._id, isAdmin:user.isAdmin },"anna" ) 
   



     const { password ,...other}= user._doc
     res.status(200).json({
        "msg":"login Success",
        user:other,accessToken:accessToken}); 
} catch (error) {
    res.status(500).json(error); 
 
}

})
module.exports = router




