import AppError from '../helper/errorHandler.js';
import guest from '../model/guestSchema.js';
import crypto from "crypto"
import Razorpay from 'razorpay';
import property from '../model/propertySchema.js';

const razorpay = new Razorpay({
    key_id: 'rzp_test_DvkBYdOe0GeLjp',
    key_secret: 'bR5Jljd84jv6mEBaFlAJYsUc',
});

const createPlan=async (req,res,next)=>{
    const {userId,amount}=req.body
    console.log(amount);
    
    const option={
        "period": "monthly",
        "interval": 1,
        "item": {
          "name": "Rent",
          "amount": amount*100, // in paise
          "currency": "INR"
        }
          }
              try{
            const userInfo=await guest.findById(userId)
              const plan=await razorpay.plans.create(option)
              console.log(plan);
              userInfo.subscription.planId=plan.id
              await userInfo.save()
              return res.status(200).json({ 
                sucess:true,
                message:"Plan created sucessfully",
                data: plan.id 
            });
              }catch(err){
               console.log(err);
              }
    
}
const createSubscription=async (req,res,next)=>{
    const {userId,amount}=req.body
    
    const userInfo=await guest.findById(userId)
     console.log("Subscription",amount);
    let plan;
    const planOption={
        "period": "monthly",
        "interval": 1,
        "item": {
          "name": "Rent",
          "amount": amount*100, // in paise
          "currency": "INR"
        }
          }
              try{
               plan=await razorpay.plans.create(planOption)
              
              }catch(err){
               console.log(err);
              }
    


    const option={
        "plan_id": plan.id, // Replace with the plan ID from the Plan API
        "total_count": 12,
        "customer_notify": 1,
      
    }
    try{
        const subscription=await razorpay.subscriptions.create(option)
        console.log(subscription);
        
        res.status(200).json({ 
            sucess:true,
            message:"Subscribtion created sucessfully",
            subId:subscription.id 
        });
    }catch(err){
        return next(new AppError(err.message,500))
    }
}
const validateSubscription=async (req,res,next)=>{
    const {razorpay_payment_id, razorpay_subscription_id, razorpay_signature}=req.body    
    try{
        const generatedSignature = crypto
            .createHmac('sha256', "bR5Jljd84jv6mEBaFlAJYsUc")
            .update(razorpay_payment_id + "|" + razorpay_subscription_id)
            .digest('hex');            
            if(generatedSignature==razorpay_signature){
                return res.status(200).json({success:true,message:"Vaildation sucessfull"})
            }else{
                res.status(500).json({success:false,message:"Validation failed"})
            }
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Validation failed",err})
    }
}
const createPayment = async (req, res,next) => {
    const {userId,amount}=req.body
        try {
        const userInfo=await guest.findById(userId)
        const options = {
            amount: amount * 100, 
            currency: 'INR',
            receipt: `receipt_order_${Math.random() * 10000}`,
        };
        const order = await razorpay.orders.create(options);

        userInfo.subscription.amount=amount
        userInfo.subscription.lastPaymentDate=new Date()
        await userInfo.save()

       return res.status(200).json({ 
            sucess:true,
            message:"Subscribtion created sucessfully",
            data: order.id 
        });
    } catch (error) {
        return next(new AppError(error.message,500))
    }
};

// const setAmount=async (req,res,next)=>{
//     const {userId,amount}=req.body
//     try{
//         const userInfo=await guest.findById(userId)
//     }
// }

const checkPaymentStatus = async (req, res,next) => {
    const {userId}=req.params
    console.log(userId);
    try {
        const user=await guest.findById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const now = new Date();
        const lastPaymentDate = user.subscription.lastPaymentDate || new Date(0);
        const hasPaidThisMonth = lastPaymentDate.getMonth() === now.getMonth() &&
                                 lastPaymentDate.getFullYear() === now.getFullYear();

       return res.status(200).json({ hasPaidThisMonth });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRevenueData = async (req, res) => {
    const ownerId=req.owner.id
    try {
        const properties = await property.find({ owner: ownerId });

        const propertyIds = properties.map(property => property._id.toString());
    
        const users = await guest.find({ propertyId: { $in: propertyIds } });
        const revenueData = users.reduce((acc, user) => {
            const month = user.subscription.paymentDate.getMonth() + 1;
            const year = user.subscription.paymentDate.getFullYear();
            const key = `${year}-${month}`;

            if (!acc[key]) {
                acc[key] = { totalAmount: 0, userCount: 0 };
            }

            acc[key].totalAmount += user.subscription.amount;
            acc[key].userCount += 1;

            return acc;
        }, {});
        console.log(revenueData);

      return  res.status(200).json(
      
        revenueData
    );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createDeposit = async (req, res,next) => {
    const {userId,amount}=req.body
    console.log(amount);

    try{
        const userInfo=await guest.findById(userId)
    const options = {
        amount: amount * 100, 
        currency: 'INR',
        receipt: `receipt_order_${Math.random() * 10000}`,
    };
    const order = await razorpay.orders.create(options);

    userInfo.deposit.status=true
    await userInfo.save()

   return res.status(200).json({ 
        sucess:true,
        message:"Subscribtion created sucessfully",
        data: order.id 
    });
      }
      catch(err){
        return next(new AppError("Failed to subscribe",500))
      }
    } 

    const cheakDepositStatus=async (req,res,next)=>{
        const {userId}=req.params
        console.log();
        console.log(userId);
        try {
            const user=await guest.findById(userId)
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            let depositStatus;
            if(!user.deposit.status || user.deposit.status==false){
                depositStatus=false
            }
            else{
                depositStatus=user.deposit.status
            }
            return res.status(200).json({ depositStatus });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

export  {createPayment,checkPaymentStatus,getRevenueData,createDeposit,cheakDepositStatus,createSubscription,createPlan,validateSubscription}
