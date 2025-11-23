import React, { useEffect,useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
function Signup() {
   const navigate= useNavigate();
const validate = ()=>{
        if(localStorage.getItem('user'))
        {
            navigate('/User')
        }
        else if(localStorage.getItem('useradmin'))
         {
 navigate('/Addash')
         }
    }
    useEffect(()=>{
        validate();
    })

   var [firstname,setFirstname]=useState("");
   var [lastname,setLastname]=useState("");
   var [number,setNumber]=useState("");
   var [email,setEmail]=useState("");
   var [password,setPassword]=useState("");
   var [dob,setDob]=useState("");
   var [gender,setGender]=useState("");
   var [country,setCountry]=useState("");
   var [errmsg,setErrmsg]=useState("");
   const regcode=async(e)=>{
e.preventDefault();
let userdata={firstname,lastname,number,email,password,dob,gender,country};
let response=await fetch(`http://localhost:8080/user`,
   {
      method:"POST",
   headers:{
      "Content-Type":"application/json",
   },
   body:JSON.stringify(userdata)
   }
);
let data=await response.json();
console.log(data);
if(data.msg==="Registration success")
{
   window.alert("Registration success");
   setFirstname("");
   setLastname("");
   setNumber("");
   setEmail("");
   setPassword("");
   setDob("");
   setGender("");
   setCountry("");
navigate('/Signin');
}
else{
   console.log(data.msg.errorResponse.errmsg);
 
   setEmail("");
  
   if(data.msg.errorResponse.keyPattern.email){
   setErrmsg("Email Already Taken");
   }
   else{
      setErrmsg("Something went wrong");
   }
}
   }
    useGSAP(()=>{
        gsap.from('.sign>label',{
           scale:0,
           opacity:0,
           duration:1,
           fontSize:50
        })  
        gsap.from('.sign>input,.sign>select',{
           scale:0,
           opacity:0,
           duration:1.5,
           x:-500,
           paddingLeft:150,
           fontSize:50,
           stagger:0.1
        })  
        gsap.from('.signtitle',{
           scale:0,
           opacity:0,
           duration:1,
           x:-500,
           paddingLeft:150,
           fontSize:50,
           stagger:0.3
        })  
        gsap.from('.signtitle+p',{
           scale:0,
           opacity:0,
           duration:1.5,
           x:-500,
           paddingLeft:150,
           fontSize:50,
           stagger:0.3
        }) 
        gsap.from('.sign>div>*',{
           scale:0,
           opacity:0,
           duration:1,
           x:-500,
           paddingLeft:150,
           fontSize:50,
           stagger:0.3
        }) 
       })
       return(
        <>
      <div className="row my-5">
       <div className="col-md-4 col-sm-7 mx-auto p-5 text-center">
           <h2 className='fw-bold mb-4 signtitle'>Welcome to MusculesMeter</h2>
           <p className='small'>Already a member?<Link to="/Signin" className='text-black fw-bold'>Log In</Link></p>
           <p className='text-danger'>{errmsg}</p>
           <form onSubmit={regcode} action="" className='text-start w-75 mx-auto sign'>
           <label className='fw-bolds' htmlFor="firstname">First Name</label>
               <br />
               <input type="text"name="" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} placeholder='Enter First Name' id="firstname" />
               <br /> <br />
               <label className='fw-bolds' htmlFor="lastname">Last Name</label>
               <br />
               <input type="text"name="" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} placeholder='Enter Last Name' id="lastname" />
               <br /> <br />
               <label className='fw-bolds' htmlFor="number">Number</label>
               <br />
               <input type="text"name="" value={number} onChange={(e)=>{setNumber(e.target.value)}} placeholder='Enter  Number' id="number" />
               <br /> <br />
               <label className='fw-bolds' htmlFor="email">Email</label>
               <br />
               <input type="email"name="" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Email' id="email" />
               <br /> <br />
               <label className='fw-bolds' htmlFor="">Password</label>
               <br />
               <input type="password"name="" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' id="password" />
               <br /> <br />
               <label className='fw-bolds' htmlFor="dob">Birthdate</label>
               <br />
               <input type="date"name="" value={dob} onChange={(e)=>{setDob(e.target.value)}} placeholder='dd-mm-yyyy' id="dob" />
               <br /> <br />
               <label className='fw-bolds' htmlFor="gender">Gender</label>
               <br />
               <select name="" value={gender} onChange={(e)=>{setGender(e.target.value)}} id="gender">
                <option value="">Select Gender</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
               </select>
               <br /> <br />
               <label className='fw-bolds' htmlFor="country">Country/Regionr</label>
               <br />
               <select name="" value={country} onChange={(e)=>{setCountry(e.target.value)}} id="country">
                <option value="">Country</option>
               <option value="india">India</option>
               <option value="russia">RUSSIA</option>
               <option value="fr">FRANCE</option>
               <option value="uk">UK</option>
               <option value="jap">JAPAN</option>
               <option value="aus">AUSTRALIA</option>
               <option value="sri">SRILANKA</option>
               </select>
               <br /> <br />
               <input type="checkbox" name="" id="accept" />
<label htmlFor="accept">Yes, I would like to receive by email the latest news, innovation updates, and offers from MapMyFitness and Outside.</label>
        <div className='text-center'>
    
        <br /> <br />
        <input type="submit" value="SIGN UP" className=" fs-5 py-2 bg-black text-light fw-bold w-50 text-center" />
     <br /> <br />
     <p className='small'>By signing up with MapMyFitness, you agree to our
         <Link to="" className='text-black'>Privacy Policy</Link>
         & 
     <Link to=""className='text-black'>Terms of Use</Link></p>
        </div>
           </form>
   
       </div>
      </div>
      </>
  )
}

export default Signup
