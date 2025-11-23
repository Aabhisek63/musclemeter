import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect,useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
function Adlogin() {
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
   const[pa,setPa]=useState(true);
   const[emsg,setEmsg]=useState("");
const navigate=useNavigate();
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
    },[])

  const logcode=async(e)=>{
   e.preventDefault();
   var userdata={email,password};
   var response=await fetch(`http://localhost:8080/Adlogin`,{
      method:"POST",
      headers:{
         "Content-Type":"application/json",
      },
      body:JSON.stringify(userdata),
   });
   var data=await response.json()
   console.log(data);
   if(data.msg=="Login Success")
   {
setEmsg("Login Success");
setEmsg(data.msg);
setEmail("");
setPassword("");
localStorage.setItem('useradmin',data.id);
navigate('/Addash');

   }
   else{
      setEmsg(data.msg);
   }
  }
    useGSAP(()=>{
     gsap.from('.sign>label',{
        scale:0,
        opacity:0,
        duration:1,
        fontSize:50
     })  
     gsap.from('.sign>input',{
        scale:0,
        opacity:0,
        duration:1.5,
        x:-500,
        paddingLeft:150,
        fontSize:50,
        stagger:0.3
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
  return (
   <>
   <div className="row my-5">
    <div className="col-md-4 col-sm-7 mx-auto p-5 text-center">
        <h2 className='fw-bold mb-4 signtitle'> Admin Log in</h2>
       
        <p className="text-danger">{emsg}</p>
        <form onSubmit={logcode} className='text-start w-75 mx-auto sign'>
            <label className='fw-bolds' htmlFor="">Email</label>
            <br />
            <input type="email" value={email}onChange={(e)=>{
              setEmail(e.target.value)
            }}name="" placeholder='Enter Email' id="name" />
            <br /> <br />
            <label className='fw-bolds' htmlFor="">Password</label>
            <br />
            <div className='p'>
            <input type={pa?"password":"text"} value={password}onChange={(e)=>{
              setPassword(e.target.value)}} name="" placeholder='Enter Password' id="password" />
<i className={pa?"fa fa-eye-slash":"fa fa-eye"}  onClick={()=>{
   setPa(!pa);
}}></i>
</div>


            
     <div className='text-center'>
     
   
     <br /> <br />
     <input type="submit" value="LOG IN" className=" fs-5 py-2 bg-black text-light fw-bold w-50 text-center" />
     </div>
        </form>

    </div>
   </div>
   </>
  )
}

export default Adlogin
