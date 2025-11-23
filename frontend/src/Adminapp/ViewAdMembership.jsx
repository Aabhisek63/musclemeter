import React, { useEffect, useState } from 'react'
import Sidebar from '../Elements/Sidebar';
import { useNavigate } from 'react-router-dom';

function ViewAdMembership() {
    const [mem,setMem]=useState([]);
    const [msg,setMsg]=useState("");
    
    const navigate=useNavigate();
    const validate = ()=>{
        if(!localStorage.getItem('useradmin'))
        {
            navigate('/Adlogin')
        }
    }
    const member = async () =>{
     const response=await fetch('http://localhost:8080/membership');   
     const result=await response.json();
     if(result.msg==="Found")
     {
setMem(result.res)
     }
     else{
        window.alert("No Member Found");
        setMsg("No Members Found")
     }
    }
async function approve(id,ps){
   if(ps==="n") 
   {
    ps="a"
   }
   else if(ps==="a"){
ps="n";
   }

  const response =await fetch(`http://localhost:8080/membership/${id}/${ps}`,{
  method:'PATCH',
  headers:{
    "Content-Type":"application/json",
  },
 
  });

  const result=await response.json();
  if(result.msg==="MemberShip Payment status changed")
  {
setMsg("MemberShip Payment status changed");
member();
  }
  else{
    setMsg("MemberShip Payment status changed");
    member();
  }
  
}

    useEffect(()=>{
      validate();
     member();   
    },[]);

    const userdel = async (id) =>{
      console.log(id);
       var userdata={id};
      var response=await fetch(`http://localhost:8080/membership`,{
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
          // allfeed();
       }
       else{
          window.alert("Something went wrong");
       }
  }
    
  return (
    
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

     <div className="col-md-8 mx-auto my-5 p-5 table-responsive rounded-4 bg-dark  text-light shadow-lg">
     <h3 className='text-center text-shadow'>All Memberships</h3>
        <p className='text-center mx-auto w-75 bg-danger text-light'>{msg}</p>
    <table className="table table-dark">
      <thead>
        <tr>
        <th>S.no.</th>
        <th>Email</th>
          <th>Duration</th>
          <th>Status</th>
          <th>Pstatus</th>
          <th>Starting</th>
          <th>Transaction Id</th>
          <th>Ending</th>
          <th>Age</th>
          <th>Weight</th>
          <th>Approval</th>
          <th>Remove</th>
        </tr>
      </thead>
     
    
      <tbody>
     { mem.map((e)=>(

  <tr key={e._id}>
    
    
<td>{e._id}</td>
<td>{e.email}</td>
<td>{e.dur}</td>
<td>{e.status}</td>
<td>{e.pstatus==='n'?"Not Approved":"Approved"}</td>
<td>{e.starting}</td>
<td>{e.tid}</td>
<td>{e.ending}</td>
<td>{e.age}</td>
<td>{e.weight}</td>
<td><button onClick={()=>{approve(e._id,e.pstatus)}} className='btn btn-sm btn-primary'>{e.pstatus==='n'?"Approved":" Not Approved"}</button></td>
<td><button onClick={()=>{
      userdel(e._id);
     }}  className='btn btn-sm  btn-danger'>Remove</button></td>
</tr>

       ))}
       </tbody>
     
   
    </table>
     
  </div>
   </div>
  )
}

export default ViewAdMembership
