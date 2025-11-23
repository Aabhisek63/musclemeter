import React from 'react'
import { Link, useNavigate, } from 'react-router-dom'
function Sidebar({utype}) {
  const navigate=useNavigate();
  return (
   
      

<div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">{utype==="admin"?"Admin Dashboard":"User Dashboard"}</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className='d-flex side-list'>
 {utype==="admin"?
  <ul type="none" className='pt-4'>
    <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/Addash" className='nav-link'>Dashboard</Link>
        </li>
        <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/Viewuser" className='nav-link'>View All User</Link></li>

        <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/ViewAdMembership" className='nav-link'>View All MemberShip</Link></li>

        <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/ViewAdWorkout" className='nav-link'>View All Workout</Link></li>

        <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/ViewAdFeed" className='nav-link'>View All Feedback</Link></li>

        <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/ViewAdComplain" className='nav-link'>View All Complain</Link></li>

        <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/ViewAdSuggestion" className='nav-link'>View All Suggestion</Link></li>


</ul>:
<>
 <ul type="none" className='pt-4'>
  <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/User" className='nav-link'>Dashboard</Link>
        </li>
        <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/Feed" className='nav-link'>Add Feedback</Link></li>

        <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/ViewFeed" className='nav-link'>View Feedback</Link></li>
        <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/ViewComplain" className='nav-link'>View Complain</Link></li>
        <li className='bg-primary py-3 my-3 px-4 text-light rounded-3'>
        <Link to="/ViewSuggestion" className='nav-link'>View Suggestion</Link></li>
</ul>
<hr />
<ul type="none" className='l '>

<li className='bg-danger py-3 my-3 px-4 text-light rounded-3'>
<Link to="/EditProfile" className='nav-link'>Edit Profile</Link></li>

<li className='bg-danger py-3 my-3 px-4 text-light rounded-3'>
<span onClick={()=>{
          localStorage.removeItem('user');
     navigate('/Signin')}}className='nav-link'>Logout</span></li>
</ul>
</>
}
</div>
</div>
  )
}

export default Sidebar
