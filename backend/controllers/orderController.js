import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const userOrder = async (req, res) =>{
    try {
        const order = await orderModel.find({userId:req.body.userId});
        res.json({success:true, data:order}) 
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

const listOrder = async (req,res) =>{
    try {
        const order = await orderModel.find({});
        res.json({success:true, data:order}) 
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}
export {userOrder,listOrder}