const Cart = require('../models/Cart');

const AddItem=  async (req, res)=>{
    try {
        
        await Cart(req.body).save();
        res.status(200).json(req.body)
    } catch (error) {

        res.status(500).json(error);
    }
   
}


const getAllItem=async(req,res)=>{
    try {
        const cart=await Cart.find();
        res.status(200).json(cart)
    } catch (error) {
        res.status(200).json(error)
 
    }

} 
const getoneItemCart=async(req,res)=>{
    try {
        const cart=await Cart.findById(req.params.id);
        res.status(200).json(cart)

    } catch (error) {
        res.status(500).json(error)

    }
}
const  deleteoneItemCart=async(req,res)=>{
    try {
         await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json('Deleted success');
    } catch (error) {
        res.status(200).json(error);
    }
  
}
const   updateItemCart=async (req,res)=>{
    try {
        const cart=await Cart.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json({'updated success':cart});
    } catch (error) {
        res.status(200).json(error);
    }
  
}
module.exports={updateItemCart,getAllItem,getoneItemCart,deleteoneItemCart,AddItem};