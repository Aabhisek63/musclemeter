import React from 'react'
import pend1 from '../images/pend1.png'
function Pending() {
  return (
<div className="col-md-6 mx-auto text-center pt-5">
 <img src={pend1} className='w-50' alt="" />
 <h1>Pending Waiting For Approval</h1>
    </div>
  )
}

export default Pending
