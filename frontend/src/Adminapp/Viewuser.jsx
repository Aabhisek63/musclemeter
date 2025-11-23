import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from '../Elements/Sidebar';
function Viewuser() {
    const [user,setAlluser]=useState([]);
    const navigate=useNavigate();

    async function alluser() {
        var response=await fetch('http://localhost:8080/user');
        var data=await response.json();
        console.log(data);
   setAlluser(data);
     }

    const validate = ()=>{
        if(!localStorage.getItem('useradmin'))
        {
            navigate('/Adlogin')
        }
    }

    const userdel = async (id) =>{
        console.log(id);
         var userdata={id};
        var response=await fetch(`http://localhost:8080/user`,{
            method:"DELETE",
            headers:{
               "Content-Type":"application/json",
            },
            body:JSON.stringify(userdata),
         });
         var data=await response.json();
         if(data.msg==="Deleted Successfully")
         {
            window.alert(data.msg);
            alluser();
         }
         else{
            window.alert("Something went wrong");
         }
    }
    
    function edit(id)
    {
        localStorage.setItem('edit',id);
  navigate('/EditUser');
    }
    useEffect(()=>{
        validate();
        alluser();
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
</div>




    <div className="col-10 mx-auto " >
     
    <div className="row">
       <div className="col-sm-12 table-responsive p-5 rounded-5 bg-dark  text-light shadow-lg">
     <h3 className='text-center text-shadow'>All Users</h3>
      <table className='table table-dark mt-5'>
       <thead>
       <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
             <th>Dob</th>
             <th>Country</th>
             <th colSpan={2}>Action</th>
        </tr>
       </thead>
       <tbody>
     {user.map((e)=>(
     
     <tr key={e._id}>
     <td>{e._id}</td>
     <td>{e.firstname}{e.lastname}</td>
     <td>{e.email}</td>
     <td>{e.number}</td>
     <td>{e.dob}</td>
     <td>{e.country}</td>
     <td><button  onClick={()=>{
      userdel(e._id);
     }} className='btn btn-sm  btn-danger'>Delete</button></td>
     <td> <button  onClick={()=>{
    edit(e._id);
     }} className='btn btn-sm  btn-danger'>Edit</button></td>
 </tr>
     ))}
     </tbody>
      </table>
    
        </div> 
    </div>
 
    </div>
 </div>

 </>
  )
}

export default Viewuser
