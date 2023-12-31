const mongoose=require('mongoose')

const OrderSchima=mongoose.Schema({
    UserId: { type: String, required: true },
    products:[
        {
            productId:{type:String},
            quantity:{
                type:Number,
                default:1
            }
        }
    ],
    amount:{type:Number,required:true},
    adress:{type:Object,required:true},
    status:{type:String,default:'pending'}
    
},{timestamps:true})
module.exports=mongoose.model('OrderSchima',OrderSchima);