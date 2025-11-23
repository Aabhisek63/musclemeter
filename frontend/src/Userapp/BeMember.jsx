// import React, { useState } from 'react'
import MemberForm from '../Elements/MemberForm';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Elements/Sidebar';

function BeMember() {
  const navigate=useNavigate();
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
      

    <div className="col-sm-10 col-md-8 col-lg-6 p-5 mx-auto my-auto ">
<MemberForm></MemberForm>
   </div>
   </div>
  )
}

export default BeMember;
