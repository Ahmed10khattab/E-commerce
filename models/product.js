const mongoose=require('mongoose');

const productschima=mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: Array },
    size: { type: String },
    colors: { type: String },
    price: { type: Number },
},{timestamps:true})
module.exports=mongoose.model('productModel',productschima)