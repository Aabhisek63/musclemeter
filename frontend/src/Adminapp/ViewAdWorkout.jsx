import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Elements/Sidebar';

function ViewAdWorkout() {
    const [a,setA]=useState("");
    const [works,setWork]=useState([]);
   
  
      const navigate=useNavigate();
      const validate = ()=>{
          if(!localStorage.getItem('useradmin'))
          {
              navigate('/Adlogin')
          }
      }
  const allwork=async()=>{
    const response=await fetch(`http://localhost:8080/workout/`);
const data=await response.json();
if(data.msg==="Found")
{
  setA("Not Found");

  
}
else{
 
  
  console.log(data.res);
  setWork(data.res);
}

  }

  useEffect(()=>{
    validate();
    allwork();
  },[]);
  return (
    <div className='row'>
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


<div className="col-md-8 mx-auto my-5 p-5 table-responsive rounded-4 bg-dark text-light shadow-lg">
<h3 className='text-center text-shadow'>All Workouts</h3>
  <p className='text-center mx-auto w-75 bg-danger text-light'>{a}</p>
    <table className="table table-dark">
      <thead>
        <tr>
        <th>S.no.</th>
          <th>Name</th>
          <th>Duration</th>
          <th>Sets</th>
          <th>Replication</th>
          <th>Category</th>
          <th>Burn Cal</th>
          <th>User Id</th>
         
        </tr>
      </thead>
     
    
      <tbody>
     { works.map((e)=>(

  <tr key={e._id}>
    
    
<td>{e._id}</td>
<td>{e.name}</td>
<td>{e.duration}</td>
<td>{e.set}</td>
<td>{e.replication}</td>
<td>{e.cat}</td>
<td>{e.cal}</td>
<td>{e.uid}</td>


</tr>

       ))}
       </tbody>
     
   
    </table>
     
  </div>

</div>

  )
}

export default ViewAdWorkout
