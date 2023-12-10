const jwt =require('jsonwebtoken');
const User = require('../models/User');



const verfiy=(req,res,next)=>{

const header= req.headers.token;

if(header){
    const token=header.split(" ")[1];
jwt.verify(token,'anna',(err,user)=>{
    if(err) res.status(403).json('token  is not valid');
 req.user=user 
next();

});
}
else{
  return  res.status(401).json('you are not authenticated');
}

}  
const verfiyTokenAuther= (req,res,next)=>{
    verfiy(req,res,()=>{
        if(req.user.id==req.params.id|| req.user.isAdmin){
            next();
        
        }
        else{
            return  res.status(401).json('you are not allowd to do that')   ;
        }
    })
}


const verfiyTokenAndAdmin= (req,res,next)=>{
    verfiy(req,res,()=>{
        if(  req.user.isAdmin){
            next();
        
        }
        else{
            return  res.status(401).json('you are not allowd to do that')   
        }
    })
}
module.exports={verfiy,verfiyTokenAuther,verfiyTokenAndAdmin}