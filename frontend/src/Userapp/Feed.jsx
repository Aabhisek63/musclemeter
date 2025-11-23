
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Elements/Sidebar';
import Footer from '../Elements/Footer';
import F from '../images/F.png'
function Feed() {
    const[email,setEmail]=useState("");
       const[number,setNumber]=useState("");
       const[feedtype,setFeedtype]=useState("");
       const[message,setMessage]=useState("");
       const[msg,setMsg]=useState("");
    const navigate=useNavigate();

        const validate = ()=>{
            if(!localStorage.getItem('user'))
            {
                navigate('/Signin')
            }
        }
const uploadfeed=async(e)=>{
    e.preventDefault();
   var feeddata={email,number,feedtype,message};
   var response=await fetch(`http://localhost:8080/feed`,{
      method:"POST",
      headers:{
         "Content-Type":"application/json",
      },
      body:JSON.stringify(feeddata),
   });
   var data= await response.json();
if(data.msg=="Feedback Submitted")
{
    setMsg(data.msg);
    setEmail("");
    setNumber("");
    setFeedtype("");
    setMessage("");

}
else{
    setMsg(data.msg);
}
}

        useEffect(()=>{
            validate();
        },[])
  return (
   <div>
    
    
       <Sidebar utype="user"></Sidebar>
       <div className="col-10 mx-auto py-3" >
        <div className="text-end d-flex justify-content-between">
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
    <i className="fa-solid fa-bars"></i></button>
    <button  className="btn btn-outline-danger mx-1  w-10" onClick={()=>{
          localStorage.removeItem('user');
     navigate('/Signin')
       }}> Logout</button>
</div>
</div>

<div className="row my-3 p-2">
    <div className="col-sm-10 col-md-8 col-lg-4 mx-auto  ms-lg-auto shadw-lg p-2 rounded-5 border border-info ">
    <form onSubmit={uploadfeed} className='text-start w-100 h-100 p-5 shadow rounded-5 bg-light mx-auto sign'>
        <h5>Feedback</h5>
        <br />
        <br />
        <small className='text-danger'>{msg}</small>
        <br />
            <label className='fw-bolds' htmlFor="">Email</label>
            <br />
            <input type="email" value={email}onChange={(e)=>{
              setEmail(e.target.value)
            }}name="" placeholder='Enter Email' id="name" />
            <br /> <br />
            <label className='fw-bolds' htmlFor="feedtype">Feed Type</label>
               <br />
               <select name="" value={feedtype} onChange={(e)=>{setFeedtype(e.target.value)}} id="feedtype">
                <option value="">Feed Type</option>
               <option value="complain">Complain</option>
               <option value="suggestion">Suggestion</option>
               <option value="feedback">Feedback</option>
               </select>
               <br /> <br />

            <label className='fw-bolds' htmlFor="">Number</label>
            <br />
       
            <input type="number" value={number}onChange={(e)=>{
              setNumber(e.target.value)}} name="" placeholder='Enter Number' id="number" />
         <br /> <br />
         <label className='fw-bolds' htmlFor="message">Message</label>
            <br />
              <textarea  value={message} onChange={(e)=>{
setMessage(e.target.value);
              }} placeholder='Message' id="message"></textarea>
         <br /> <br />

     <div className='text-center'>
    
     <input type="submit" value="SUBMIT" className=" fs-5 py-2 bg-black text-light fw-bold w-50 text-center" />
     </div>
        </form>
    </div>
    <div className="col-md-4 d-none d-lg-inline me-auto ">
        <img src={F} className='w-100 h-100 shadw-lg p-2 rounded-5 border border-info bg-transparent' alt="" />
    </div>
</div>

<Footer></Footer>
      </div>
  )
}

export default Feed

