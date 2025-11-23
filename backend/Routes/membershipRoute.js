const express = require('express');
const userModel=require('../Models/userModel');
const membershipModel = require('../Models/membershipModel');
const membershipRoute = express.Router();

membershipRoute.get('/membership/:id',async(req,res)=>{
    try{
    const id=req.params.id;
    const result=await userModel.findById(id);
    const email=result.email;
    const result2=await membershipModel.findOne({email});
    if(result2===null)
    {
        return res.send({msg:"Not Found"}); 
    }
    else
{
 return res.send({msg:"Found",res:result2});
}
    }
    catch(error)
    {
        return res.send({msg:error}); 
    }
})
membershipRoute.get('/membership',async(req,res)=>{
 try{
    const result=await membershipModel.find();
    return res.send({msg:"Found",res:result});
  
 }
 catch(e)
 {
    return res.send({msg:e}); 
 }
})
membershipRoute.post('/membership',async(req,res)=>{
    try {
        const {email,age,weight,dur,tid}=req.body;
var sd=Date.now();
var date=new Date();
var ed=new Date(date).setMonth(date.getMonth()+3);
if(dur==='3')
{
    var s='b';
}
else if(dur==='6')
{
    var s='s';
}
else{
    var s='g';
}
        const result=await membershipModel.create({email:email,age:age,weight:weight,dur:dur,tid:tid,status:s,pstatus:"n",starting:sd,ending:ed});
        return res.send({msg:"MemberShip Registration success"});
    } catch (error) {
        return res.send({msg:error}); 
    }
    })

    membershipRoute.patch('/membership/:id/:ps',async(req,res)=>{
        try {
           const id =req.params.id;
           const ps=req.params.ps;
            const result=await membershipModel.findByIdAndUpdate(id, {pstatus:ps})
            return res.send({msg:"MemberShip Payment status changed"});
        } catch (error) {
            return res.send({msg:error}); 
        }
        })    
        membershipRoute.delete('/membership',async(req,res)=>{
            try { 
             const {id}=req.body;
            const result=await membershipModel.findByIdAndDelete(id);
             return res.send({msg:"Deleted Successfully"});
            } catch (error) {
             return res.send({msg:error});
            }
         
         });

   

module.exports = membershipRoute; 