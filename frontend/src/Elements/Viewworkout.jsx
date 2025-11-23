import React, { useEffect, useState } from 'react'

function Viewworkout() {
  const [a,setA]=useState(1);

  // const [x,setX]=useState("");

  // const[tcal,setTcal]=useState(0);

  const [works,setWork]=useState([]);
const uid= localStorage.getItem('user');
  const work=async()=>{
const response=await fetch(`http://localhost:8080/workout/${uid}`);
const data=await response.json();
if(data.msg==="Not Found")
{
  setA("Not Found");
}
else{
  console.log(data.res);
setWork(data.res);


}
  }
  useEffect(()=>{
work();
  },[])
  return (
  <>
  <div className="col-md-8 mx-auto my-5 p-5 table-responsive rounded-4 bg-dark shadow-lg">
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


</tr>

       ))}
       </tbody>

   
    </table>
     
  </div>
  </>
  )
}
export default Viewworkout
