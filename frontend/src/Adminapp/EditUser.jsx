import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Elements/Sidebar';

function EditUser(p) {
 var [firstname,setFirstname]=useState("");
   var [lastname,setLastname]=useState("");
   var [number,setNumber]=useState("");
   var [email,setEmail]=useState("");
   var [password,setPassword]=useState("");
   var [dob,setDob]=useState("");
   var [gender,setGender]=useState("");
   var [country,setCountry]=useState("");
  var [errmsg,setErrmsg]=useState("");
//   var [pid,setPid]=useState(p.id);
 const navigate=useNavigate();
    const validate = ()=>{
        if(!localStorage.getItem('useradmin'))
        {
           navigate('/Adlogin')
        }
       else if(!localStorage.getItem('edit'))
            {
               navigate('/Addash')
            }
    }
  const getdata=async()=>{
    let response=await fetch(`http://localhost:8080/user/${localStorage.getItem('edit')}`);
    let data= await response.json();
    console.log(data);

    setFirstname(data.firstname);
    setLastname(data.lastname);
    setNumber(data.number);
    setEmail(data.email);
    setPassword(data.password)
    setDob(data.dob);
    setGender(data.gender);
    setCountry(data.country);

  }

    const editcode=async(e)=>{
      e.preventDefault();
      let userdata={firstname,lastname,number,email,password,dob,gender,country};
      let response=await fetch(`http://localhost:8080/user/${localStorage.getItem('edit')}`,
         {
            method:"PATCH",
         headers:{
            "Content-Type":"application/json",
         },
         body:JSON.stringify(userdata)
         }
      );
      let data=await response.json();
      console.log(data);
      if(data.msg==="Profile Updated Successfully")
      {
        alert("Profile Updated Successfully");
         setFirstname("");
         setLastname("");
         setNumber("");
         setEmail("");
         setPassword("");
         setDob("");
         setGender("");
         setCountry("");
         localStorage.removeItem('edit')
      navigate('/User');
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


    useEffect(()=>{
      validate();
    getdata();
  },[]);

  return (
  <div>
 <Sidebar utype="admin"></Sidebar>
 <div className="col-10 mx-auto py-3" >
        <div className="text-end d-flex justify-content-between">
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
    <i className="fa-solid fa-bars"></i></button>
    <button  className="btn btn-outline-danger mx-1  w-10" onClick={()=>{
          localStorage.removeItem('useradmin');
     navigate('/Adlogin')
       }}> Logout</button>
</div>
</div>

       <div className="row my-5">
       <div className="col-md-5 col-sm-7 mx-auto p-5 text-center">
           <h2 className='fw-bold mb-4 signtitle'>Update User Profile</h2>

           <p className='text-danger'>{errmsg}</p>
           <form onSubmit={editcode} action="" className='text-start w-75 mx-auto sign'>
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
              
        <div className='text-center'>
    
        <br /> <br />
        <input type="submit" value="UPDATE" className=" fs-5 py-2 bg-black text-light fw-bold w-50 text-center" />
     <br /> <br />
    
        </div>
           </form>
   
       </div>
      </div>


  </div>
  )
}

 
export default EditUser
