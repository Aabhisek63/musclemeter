const express = require('express');
const feedRoute = express.Router();
const userModel=require('../Models/userModel');
const feedModel=require('../Models/feedModel');

feedRoute.post('/feed',async(req,res)=>{
    try {
        const {email,message,feedtype}=req.body;
        const result=await userModel.findOne({email});
const uid=result._id;
const result2=await feedModel.create({uid:uid,msg:message,status:feedtype});
return res.send({msg:"Feedback Submitted"});

    } catch (error) {
        return res.send({msg:error}); 
    }
    })

    feedRoute.get('/feed/:id/:status',async(req,res)=>{
        // console.log(req.params);
p=req.params;
uid=p.id;
status=p.status;
const result=await feedModel.find({uid:uid,status:status});
if(result && result.length>0)
{
      return res.send({msg:"Found",'result':result});
    

}
else{
                return res.send({msg:"No Data Avilable"});
}
    })

    feedRoute.get('/feed',async(req,res)=>{
        // console.log(req.params);

const result=await feedModel.find();
if(result && result.length>0)
{
      return res.send({msg:"Found",'res':result});
    

}
else{
                return res.send({msg:"No Data Avilable"});
}
    })    

feedRoute.get('/feed/:status',async(req,res)=>{
    status=req.params.status;
    const result=await feedModel.find({status:status});
    if(result)
    {
        return res.send({msg:"Found",'result':result});
    }
    else{
        return res.send({msg:"Not Found"});
    }
})


feedRoute.delete('/feed',async(req,res)=>{
    try { 
     const {id}=req.body;
    const result=await feedModel.findByIdAndDelete(id);
     return res.send({msg:"Deleted Successfully"});
    } catch (error) {
     return res.send({msg:error});
    }
 
 });

    module.exports=feedRoute;