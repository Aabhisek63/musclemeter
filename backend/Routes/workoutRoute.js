const express = require('express');
const membershipModel = require('../Models/membershipModel');
const workoutModel=require('../Models/workoutModel');

const workoutRoute = express.Router();


workoutRoute.post('/workout',async(req,res)=>{
    try {
      body=req.body;
const result=await workoutModel.create(body);       
return res.send({msg:"Workout Added success"});
    } catch (error) {
        return res.send({msg:error}); 
    }
    })

 workoutRoute.get('/workout',async(req,res)=>{

    const result=await workoutModel.find();
   
    if(result===null)
    {
        return res.send({msg:"Not Found"}); 
    }
    else
{
 return res.send({msg:"Found",res:result});
}
        })

        workoutRoute.get('/workout:/id',async(req,res)=>{
            const uid=req.params.id;
            const result=await workoutModel.find({uid});
           
            if(result===null)
            {
                return res.send({msg:"Not Found"}); 
            }
            else
        {
         return res.send({msg:"Found",res:result});
        }
                })        

   

module.exports = workoutRoute; 