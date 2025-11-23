const express = require('express');
const userRoute = express.Router();
const userModel=require('../Models/userModel');
const { main } = require('../helper');

userRoute.get('/user', async(req, res) => {
try {
    const user=await userModel.find();
 return  res.send(user); 
} catch (error) {
    return  res.send(error);   
}
})

userRoute.get('/user/:id', async(req, res) => {
 try {
    const id=req.params.id;
    const user=await userModel.findById(id);
    return  res.send(user); 
 } catch (error) {
    return  res.send(error); 
 }
   })

userRoute.post('/user',async(req,res)=>{
try {
    const body=req.body;
    const result=await userModel.create(body);
    var sub="Thankyou | Mail";
    var msg="<p style='background-color:Aqua; color:red;padding:20px;margin-top:20px;'>Thanks For Registration on Musclesmete ❤️</p>";
    main(req.body.email,sub,msg);
    return res.send({msg:"Registration success"});
   
} catch (error) {
    return res.send({msg:error}); 
}
})

userRoute.post('/userlog',async(req,res)=>{
 console.log(req.body)
  try{
      const {email,password}=req.body;  
      const result=await userModel.findOne({email});
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

userRoute.delete('/user',async(req,res)=>{
   try { 
    const {id}=req.body;
   const result=await userModel.findByIdAndDelete(id);
    return res.send({msg:"Deleted Successfully"});
   } catch (error) {
    return res.send({msg:error});
   }

});

userRoute.patch('/user/:id',async(req,res)=>{
    try {
       const id =req.params.id;
       const body=req.body;
        const result=await userModel.findByIdAndUpdate(id,body)
        return res.send({msg:"Profile Updated Successfully"});
    } catch (error) {
        return res.send({msg:error}); 
    }
    })    


module.exports = userRoute; 
