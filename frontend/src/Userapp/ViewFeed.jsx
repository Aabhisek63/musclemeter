import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Elements/Sidebar';

function ViewFeed() {
    const [feed,setFeed]=useState([]);
    const [id,setId]=useState([]);
    const [msg,setMsg]=useState([]);
    const navigate=useNavigate();
    const validate = ()=>{
        setId(localStorage.getItem('user'))
        if(!localStorage.getItem('user'))
        {
            navigate('/Signin')
        }
    }
    async function allfeed() {
       
     
        var a=localStorage.getItem('user')
        console.log(localStorage.getItem('user'))
        var response=await fetch(`http://localhost:8080/feed/${a}/feedback`);
        var data=await response.json();
     if(data.msg==="Found")
     {
        setFeed(data.result);
        console.log(feed);
       
     } 
     else{
        setMsg(data.msg);
     }

     }

     useEffect(()=>{
                validate();
                allfeed();
            },[])

            const userdel = async (id) =>{
                console.log(id);
                 var userdata={id};
                var response=await fetch(`http://localhost:8080/feed`,{
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
                    allfeed();
                 }
                 else{
                    window.alert("Something went wrong");
                 }
            }


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
 
<div className="col-10  col-md-5 p-5 bg-dark rounded-4 mx-auto " >
        
    <div className="row">
    <span className='text-danger bg-info text-center py-2 rounded-pill'>{msg}</span>
       <div className="col-sm-12 table-responsive">
     
      <table className='table table-dark mt-5'>
       <thead>
       <tr>
            <th>Id</th>
            <th>Feedback Type</th>
             <th>Feedback</th>
             <th colSpan={2}>Action</th>
        </tr>
       </thead>
       <tbody>
     {feed.map((e)=>(
     
     <tr key={e._id}>
     <td>{e._id}</td>
     <td>{e.status}</td>
     <td>{e.msg}</td>
     <td><button onClick={()=>{
      userdel(e._id);
     }}  className='btn btn-sm  btn-danger'>Delete</button></td>

 </tr>
     ))}
     </tbody>
      </table>
    
        </div> 
    </div>
 
    </div>
      
    </div>
    
  )
}

export default ViewFeed
