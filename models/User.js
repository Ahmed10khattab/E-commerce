const mongoose=require('mongoose');
const userSchima=new  mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true,},
    isAdmin:{type:Boolean,default:false},

},{timestamps:true})

module.exports=mongoose.model('UserSchima',userSchima)