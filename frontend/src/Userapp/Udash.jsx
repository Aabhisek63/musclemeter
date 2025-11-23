import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Elements/Sidebar';
import MemberShip from '../Elements/MemberShip';
import Pending from '../Elements/Pending';
import Addworkout from '../Elements/Addworkout';
import Viewworkout from '../Elements/Viewworkout';
function Udash() {
  const [st,setSt]=useState(0);
  const [x,setX]=useState(true);
    const navigate=useNavigate();
    const validate = ()=>{
        if(!localStorage.getItem('user'))
        {
            navigate('/Signin')
        }
    }
  const check =async()=>{
 const response=await fetch(`http://localhost:8080/membership/${localStorage.getItem('user')}`);
 const data=await response.json();
 if(data.msg==='Found')
{
  console.log(data.res);
  setSt(data.res.pstatus);// checking for approval pending
  // setSt('s');         //Both comment use for taking membership

}
else{
  console.log("Something went wrong");
  console.log(data);
  console.log(`http://localhost:8080/membership/${localStorage.getItem('user')}`);
}
  }
    useEffect(()=>{
        validate();
       check();
    },[])
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
      
    

<div className="col-sm-12">
<div className="row">
  {st && st!=='e'?
  (st==='n'?<Pending />:(st==='a' ?  (x?<><button className='col-1 my-auto btn btn-danger' onClick={()=>{setX(!x)}}> View WorkOut</button><Addworkout/></>:<> <Viewworkout/><button  className='col-1 my-auto btn btn-danger' onClick={()=>{setX(!x)}}>Addworkout</button> </>):"Something went wrong"))
  :
   <MemberShip/>
  }

</div>
</div>

    </div>
  )
}

export default Udash
