import React, {useState} from 'react'
import work from '../images/work.webp'
function Addworkout() {
   const [name,setName]=useState(""); 
   const [duration,setDuration]=useState(""); 
   const [set,setSet]=useState(""); 
   const [replication,setReplication]=useState(""); 
   const [cat,setCat]=useState(""); 
   const [cal,setCal]=useState(""); 
   const [date,setDate]=useState(""); 
  
   const uid=localStorage.getItem('user');
   const workout=async(e)=>{
    e.preventDefault();
    setDate(Date.now());
const work={uid,name,duration,set,replication,cat,cal,date}
const response= await fetch('http://localhost:8080/workout',{
    method:'POST',
    headers:{
        "Content-Type":"application/json",
    },
    
    body:JSON.stringify(work),
});
const result=await response.json();
if(result.msg="Workout Added success")
{
  alert("Workout Added success");
    setName("");
    setDuration("");
    setSet("");
    setReplication("");
    setCat("");
    setCal("");
}
   }
  return (
    <>
    <div className="col-sm-10 col-md-8 col-lg-4 mx-auto  ms-lg-auto shadw-lg p-2 rounded-5 border border-info ">
    <form onSubmit={workout} className='text-start w-100 h-100 p-5 shadow rounded-5 bg-light mx-auto sign'>
        <h5>Add Workout</h5>
        <br />
        <br />
        <small className='text-danger'></small>
        <br />
            <label className='fw-bolds' htmlFor="name">Name of Workout</label>
            <br />
            <select name=""  value={name} onChange={(e)=>{setName(e.target.value); }} id="name">
                <option value="">Workout Type</option>
               <option value="Push-Up">Push-Up</option>
               <option value="Pull-Up">Pull-Up</option>
              <option value="Hamercut">Hamercut</option>
               <option value="Sit-Up">Sit-Up</option>
               <option value="Bench-Press">Bench-Press</option>
               </select>
            <br /> <br />
            <label className='fw-bolds' htmlFor="duration">Duration</label>
            <br />
       
            <input type="number"  name="" value={duration} onChange={(e)=>{setDuration(e.target.value); }}  placeholder='Enter Duration in Min' id="duration" />
         <br /> <br />
        < label className='fw-bolds' htmlFor="set">Sets</label>
            <br />
       
            <input type="number"  name=""  value={set} onChange={(e)=>{setSet(e.target.value); }}  placeholder='Enter Number of Sets' id="set" />
         <br /> <br />
         < label className='fw-bolds' htmlFor="">Replication of Sets</label>
            <br />
       
            <input type="number"  name=""  value={replication} onChange={(e)=>{setReplication(e.target.value); }} placeholder='Enter Number of Replication' id="replication" />
         <br /> <br />
            <label className='fw-bolds' htmlFor="cat">Category of Workout</label>
               <br />
               <select name=""  value={cat} onChange={(e)=>{setCat(e.target.value); }} id="cat">
                <option value=""> Select Category </option>
               <option value="Arms">Arms</option>
               <option value="Byceps">Byceps</option>
               <option value="Triceps">Triceps</option>
               <option value="Shoulder">Shoulder</option>
               <option value="Chest">Chest</option>
               <option value="Thigh">Thigh</option>
               </select>
               <br /> <br />
         <label className='fw-bolds' htmlFor="cal">Approx Cal Burn</label>
            <br />
            <input type="number"  name="" value={cal} onChange={(e)=>{setCal(e.target.value); }} placeholder='Enter Approx Cal Burn' id="cal" />
         <br /> <br />

     <div className='text-center'>
    
     <input type="submit" value="SUBMIT" className=" fs-5 py-2 bg-black text-light fw-bold w-50 text-center" />
     </div>
        </form>
    </div>
    <div className="col-md-4 d-none d-lg-inline me-auto ">
        <img src={work} className='w-100 h-100 shadw-lg p-2 rounded-5 border border-info bg-transparent' alt="" />
    </div>
    </>
  )
}

export default Addworkout
