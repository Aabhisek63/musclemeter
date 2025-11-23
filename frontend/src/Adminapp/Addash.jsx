import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from '../Elements/Sidebar';
function Addash() {
    const [u,setU]=useState("");
    const [m,setM]=useState("");
    const [w,setW]=useState("");
    const [f,setF]=useState("");
    const navigate=useNavigate();
    const validate = ()=>{
        if(!localStorage.getItem('useradmin'))
        {
            navigate('/Adlogin')
        }
    }
async function getalldata()
{
const response1=await fetch('http://localhost:8080/user');
const result1=await response1.json();
setU(result1.length);
const response2=await fetch('http://localhost:8080/membership');
const result2=await response2.json();
setM(result2.res.length);
const response3=await fetch('http://localhost:8080/workout');
const result3=await response3.json();
setW(result3.res.length);
const response4=await fetch('http://localhost:8080/feed');
const result4=await response4.json();
setF(result4.res.length);
}

    useEffect(()=>{
        validate();
        getalldata();
    },[])
  return (
    
 <>
 <div className="row">
 
 
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
       <div className="row col-md-12 mx-auto">
       <h3 className='text-center text-shadow text-danger py-5'>Welcome Admin</h3>
        <div className="row">
            <div className="col-5  align-items-center justify-content-between d-flex align-items-center justify-content-between d-flex my-2 mx-auto border border-3 border-primary shadow-lg rounded-3 p-5">
           <i className="fa fa-user fs-1 text-primary"></i>
               <div>
                <h3>Total User</h3>
                <br /> <br />
                <p>{u}</p>
                </div>
            </div>
            <div className="col-5  align-items-center justify-content-between d-flex my-2 mx-auto p-5 border border-3 border-danger  shadow-lg rounded-3">
            
            <i className="fa-solid fa-people-group fs-1 text-danger"></i>
               <div>
               <h3>Total Members</h3>
                <br /> <br />
                <p>{m}</p>
                </div>
            </div>
            <div className="col-5  align-items-center justify-content-between d-flex my-2 mx-auto   p-5 border border-3 border-warning shadow-lg rounded-3">
            <i className="fa-solid fa-dumbbell fs-1 text-warning"></i>
               <div>
                <h3>Total Workouts</h3>
                <br /> <br />
                <p>{w}</p>
                </div>
            </div>
            <div className="col-5  align-items-center justify-content-between d-flex mx-auto p-5 my-2 border border-3 border-secondary shadow-lg rounded-3">
            <i className="fa-regular fa-comment fs-1 text-secondary"></i>
               <div>
                <h3>Total Feedbacks</h3>
                <br /> <br />
                <p>{f}</p>
                </div>
            </div>
        </div>
       </div>
    </div>
    </div>

 </>
  )
}

export default Addash
