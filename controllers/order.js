const Order = require('../models/order');

const Updateorder=   async (req,res)=>{
    try {
        const order=await Order.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json({'updated success':order});
    } catch (error) {
        res.status(200).json(error);
    }
  
}


const getAllorders= async(req,res)=>{
    try {
        const order=await Order.find();
        res.status(200).json(order)
    } catch (error) {
        res.status(200).json(error)
 
    }

}
const getoneOrder= async(req,res)=>{
    try {
        const order=await Order.find({UserId:req.params.id});
        res.status(200).json(order)

    } catch (error) {
        res.status(500).json(error)

    }
}
const  deleteoneOrder=async(req,res)=>{
    try {
         await Order.findByIdAndDelete(req.params.id);
        res.status(200).json('Deleted success');
    } catch (error) {
        res.status(200).json(error);
    }
  
} 
const    Addorder= async (req, res) => {
    
    const newOrder = new Order(req.body)

    try {
        const user = await newOrder.save();
        res.status(201).json({
            newOrder: newOrder
        }
        )
    } catch (error) {
        res.status(500).json(error);
    }

    
}

const getIncome=async(req,res)=>{
     const date=new Date();
    const lastMonth=new  Date(date.setMonth(date.getMonth()-1));
    const PerviousMonth=new Date(new Date().setMonth(lastMonth.getMonth()-1));
try {
    const incom=await Order.aggregation([
        {
            $match:{createdAt:{$gte:PerviousMonth}} },
       
        {
            $project:{month:{$month:"$createdAt"},sales:"$amount"}
        },{
            $group:{
                _id:"$month",
                total:{$sum:"$sales"}
            }
        }
    ]);
    res.status(200).json(incom);
} catch (error) {
    res.status(200).json(error);
}

}



module.exports={Updateorder,getAllorders,getoneOrder,deleteoneOrder,Addorder,getIncome};