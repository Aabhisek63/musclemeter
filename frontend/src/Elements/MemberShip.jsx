import React from 'react'
import Bronze from '../images/Bronze.png'
import silver from '../images/silver.webp'
import Gold from '../images/Gold.webp'
import {Link} from 'react-router-dom'
function MemberShip() {
  return (
  <div className=" col-8 col-sm-6 col-md-10 col-lg-8 mx-auto my-5">
    <div className="row row-cols-1 row-cols-md-4 g-5">
  <div className="col p-3 border border-dark rounded-4 mx-auto">
    <div className="card h-100 bronze">
      <img src={Bronze} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"><small>Bronze Member</small></h5>
        <p className="card-text  d-flex justify-content-between text-center">
        <span>3 Months</span>
        <span><s className='text-danger'><small>&#8377;80,000/-</small></s>&#8377;30,000/-</span>  
        </p>
      </div>
      <div className="card-footer text-center">
        <Link to={'/BeMember'} className="btn btn-sm btn-outline-danger bronze">Get</Link>
      </div>
    </div>
  </div>
  <div className="col p-3 border border-dark rounded-4 mx-auto">
    <div className="card h-100 silver">
      <img src={silver} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Silver Member</h5>
        <p className="card-text d-flex justify-content-between text-center">
        <span>6 Months</span>
        <span><s className='text-danger'><small>&#8377;1,20,000/-</small></s>&#8377;70,000/-</span>    
        </p>
      </div>
      <div className="card-footer text-center">
        <Link to={'/BeMember'} className="btn btn-sm btn-outline-dark silver">Get</Link>
      </div>
    </div>
  </div>
  <div className="col p-3 border border-dark rounded-4 mx-auto">
    <div className="card h-100 gold">
      <img src={Gold} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title  ">Gold Member</h5>
        <p className="card-text d-flex justify-content-between text-center"> 
            <span>12 Months</span>
            <span><s className='text-danger'><small>&#8377;1,70,000/-</small></s>&#8377;90,000/-</span>
        </p>
      </div>
      <div className="card-footer text-center">
        <Link to={'/BeMember'} className="btn btn-sm btn-outline-warning gold">Get</Link>
      </div>
    </div>
  </div>
 
</div>
  </div>
  )
}

export default MemberShip
