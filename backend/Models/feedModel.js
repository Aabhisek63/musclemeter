const mongoose=require('mongoose');

const feedSchema=mongoose.Schema(
    {
        uid:{
            type:String,
            require:true, 
           },
        
           msg:{
            type:String,
            require:true   
           },
           status:{
            type:String,
            require:true   
           },

       } );
        const feedModel=mongoose.model('feed',feedSchema);
       
           module.exports=feedModel;