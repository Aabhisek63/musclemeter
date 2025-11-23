import React from 'react'
import  img1 from'./muscleslogo.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {Link} from 'react-router-dom'
function Navbar(){
 

useGSAP(()=>{
gsap.from('.navbar-brand>*,.navbar-brand>p',{
x:-90,
opacity:0,
delay:0.5,
scale:0.1,
duration:0.5
})

gsap.from('.nav-link',{
  y:-40
  ,opacity:0,
  duration:0.8,
  stagger:0.3
})

gsap.from('.nav-btn',{
  x:-200,
  y:200,
  opacity:0,
  scale:0.1,
  duration:0.8,
  stagger:0.3,
  delay:1
})

})
    return(
<>
<div className="row">
  <div className="col-12">
  <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand d-flex " to="/">
        <img src={img1} className='w-5 my-auto' alt="" />
        &nbsp;&nbsp;
        <p className='my-auto'>MusculesMeter</p>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item dropdown">
          <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Workouts
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Workout">Dashboard</Link></li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Routes 
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Ro">Routes Home</Link></li>
            <li><Link className="dropdown-item" to="#">Find Your City</Link></li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Community
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Activity Feeds</Link></li>
            <li><Link className="dropdown-item" to="#">Challengens</Link></li>
           
          </ul>
        </li>
        
      </ul>
    </div>
   
<Link to="/Signin" className='btn nav-btn btn-light '>LOG IN</Link>
&nbsp;&nbsp;
<Link to="/Signup" className='btn nav-btn btn-dark'>SIGN UP</Link>

  </div>
</nav>
    </div> 
</div>
</>
    )
}
export default Navbar