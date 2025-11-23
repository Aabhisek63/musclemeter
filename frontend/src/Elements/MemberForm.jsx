
import React, { useState } from 'react'
import qr from '../images/qr.jpg'
import {Link, useNavigate} from 'react-router-dom'
function MemberForm() {
  const [amt,setAmt]=useState(0);
    const [number,setNumber]=useState("");
    const [email,setEmail]=useState("");
    const [age,setAge]=useState("");
    const [weight,setWeight]=useState("");
    const [dur,setDur]=useState("");
    const [tid,setTid]=useState("");
const navigate=useNavigate();
 const getmember =async(e)=>{
e.preventDefault();
var data={email,age,weight,dur,tid};
const response = await fetch('http://localhost:8080/membership',{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data),
});
const result=await response.json();
console.log(result);
if(result.msg=="MemberShip Registration success")
{
    window.alert("MemberShip Registration success");
    setTid("");
    setDur("");
    setWeight("");
    setAge("");
    setNumber("");
    setEmail("");
    setAmt("");
  navigate('/User');
  }
 }


  return (
    <div>
        <form onSubmit={getmember} className='p-5 rounded-5 border shadow-lg sign'>
    <h4 className='text-center'>Be Member</h4>
    <br />
    <br />
               <label className='fw-bolds' htmlFor="number">Number</label>
               <br />
               <input type="text" value={number} onChange={(e)=>{setNumber(e.target.value)}} name=""  placeholder='Enter  Number' id="number" />
               <br /> <br />
               <label className='fw-bolds' htmlFor="email">Email</label>
               <br />
               <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name=""  placeholder='Enter Email' id="email" />
               <br /> <br />
             
               <label className='fw-bolds' htmlFor="age">Age</label>
               <br />
               <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}} name=""  placeholder='Enter Age' id="age" />

   
               <label className='fw-bolds' htmlFor="weight">Weight</label>
               <br />
               <input type="number" value={weight}  onChange={(e)=>{setWeight(e.target.value);}}  name=""  placeholder='Enter Weight' id="weight" />
               <br /> <br />

               <label className='fw-bolds' value={dur}  htmlFor="dur">MemberShip</label>
               <br />
               <select name=""  id="dur" onChange={(e)=>{setDur(e.target.value);e.target.value==3?setAmt(30000):(e.target.value==6?setAmt(50000):(e.target.value==12?setAmt(90000):setAmt(0)))}}>
               <option value="">Select MemberShip</option>
               <option value="3">Bronze</option>
               <option value="6">Silver</option>
               <option value="12">Gold</option>
               </select>
               <br /> <br />
               <label htmlFor="" className='text-center w-100'>
               <img className='w-25' src={qr} alt='Not Found' /></label>
<label htmlFor="accept" className='text-center w-100 pt-3'>Please Pay: &#8377;{amt}</label>
 
      <br /> <br />
       <label className='fw-bolds' htmlFor="tid">Transaction Id</label>
               <br />
               <input type="text" value={tid} onChange={(e)=>{setTid(e.target.value)}} name=""  placeholder='Enter Transaction Id' id="tid" />
               <div className='text-center'>
               <br /> <br />

        <input type="submit" value="Be Member" className=" fs-5 py-2 bg-black text-light fw-bold w-50 text-center" />
     <br /> <br />
     <p className='small'>By signing up with MapMyFitness, you agree to our
         <Link to="" className='text-black'>Privacy Policy</Link>
         & 
     <Link to=""className='text-black'>Terms of Use</Link></p>
        </div>


    </form>
    </div>
  )
}

export default MemberForm
