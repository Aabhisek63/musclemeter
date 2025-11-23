const express = require('express');
const adminRoute = express.Router();
const userModel=require('../Models/userModel');
const adminModel=require('../Models/adminModel');
adminRoute.get('/alluser', async(req, res) => {
 const user=await userModel.find();
 return  res.send(user); 
})
adminRoute.post('/admin',async(req,res)=>{
    try {
        const body=req.body;
        const result=await adminModel.create(body);
        return res.send({msg:"Registration success"});
    } catch (error) {
        return res.send({msg:error}); 
    }
    })

    adminRoute.post('/adlogin',async(req,res)=>{
        console.log(req.body)
         try{
             const {email,password}=req.body;  
             const result=await adminModel.findOne({email});
           if(result)
           {
       if(result.password===password)
       {
           return res.send({msg:"Login Success",id:result._id});
       }
       else{
           return res.send({msg:"Password is wrong"});
       }
           }
           else{
             return res.send({msg:"User Not Found"}) 
           } 
       } catch(error){
           return res.send({msg:error});
       }
       })

module.exports = adminRoute; 