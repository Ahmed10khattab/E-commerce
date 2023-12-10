const product = require('../models/product');

const addProduct=  async(req,res)=>{
    try {
        const saveproduct=await new  product({
            title:req.body.title ,
            desc: req.body.desc,
            img:req.body.img,
            category: req.body.category ,
            size:req.body.size ,
            colors: req.body.colors ,
            price:req.body.price
        }).save();
        res.status(200).json(saveproduct);
    } catch (error) {
        res.status(500).json(error);
    }
   
}


const getProducts=async(req,res)=>{
    try {
        const allProducts= await product.find();
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(500).json(error);
    }
 
}
const getoneProduct=async(req,res)=>{
    try {
        const Product= await product.findById(req.params.id);
        res.status(200).json(Product)
    } catch (error) {
        res.status(500).json(error);
    }
 
}
const  deleteProduct=async(req,res)=>{
    try {
        await  product.deleteMany();
        res.status(200).json('deleted success')   
    } catch (error) {
       res.status(500).json(error) 
    }
 

}
const   DeleteOneProduct=async(req,res)=>{
    try {
        await  product.findByIdAndDelete(req.params.id);
        res.status(200).json('deleted success')   
    } catch (error) {
       res.status(500).json(error) 
    }
 

}
module.exports={addProduct,getProducts,getoneProduct,deleteProduct,DeleteOneProduct};