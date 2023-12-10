const mongoose=require('mongoose')
const CardSchima=mongoose.Schema({
    UserId: { type: String, required: true },
    products:[
        {
            productId:{type:String},
            quantity:{
                type:Number,
                default:1
            }
        }
    ]
    
},{timestamps:true})
module.exports=mongoose.model('CartSchima',CardSchima);