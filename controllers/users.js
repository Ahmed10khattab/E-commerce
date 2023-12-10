const User = require('../models/User');

const updateUser=  async(req,res)=>{
    if(req.body.passowrd){

        req.body.password = encrypt.AES.encrypt( req.body.password,'anna').toString();

    }
    try{
        const updateuser=await User.findByIdAndUpdate(
            req.params.id,{$set:req.body},{new:true}
        )
        res.json(updateuser);
    }
    catch(err){
        console.log(err)
    }
   
} 


const getUser=async(req,res)=>{
    try {
      const user =await User.find();
        

      res.status(200).json(user);
   } catch (error) {
       res.status(500).json(error);
       
   }
    }
const getoneUser=async(req,res)=>{
    //  res.send(await User.findById(req.params.id))
      try {
         const user =await User.findById(req.params.id)
         //const {passowrd,...others}=user._doc;
  
          res.status(200).json(user);
      } catch (error) {
          res.status(500).json(error);
          
      }
       }
 const   DeleteOneuser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('user has been deleted')
    } catch (error) {
        res.status(500).json(error);
        
    }
    }
module.exports={DeleteOneuser,getUser,getoneUser,updateUser,};