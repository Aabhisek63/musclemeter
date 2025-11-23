
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
function Meter() {
    useGSAP(()=>{
      gsap.from('.meter>div>*',{
        x:500,
        duration:1,
        stagger:0.3,
        scrollTrigger:{
   trigger:'.meter>div>*',
   scroller:"body",
   start:"top 65%",
    end:"top 50%",


        }
      })  
    })
  return (
   <div className="row my-5">
    <div className="col-lg-10 bg-black text-light mx-auto px-5 text-center py-4">
        <div className="row px-5 meter">
            <div className="col-lg-4 p-4"><i className="fa-solid fa-road fa-beat-fade fs-1"></i>
            <p className='pt-3 fs-5 fw-bold'>MILES LOGGED</p>
            <h1 className='display-3 fw-bold'>9.42</h1>
            <p className='fw-bold'>BILLION</p>
            </div>
            <div className="col-lg-4 p-4"><i className="fa-solid fa-location-dot fa-beat-fade  fs-1"></i>
            <p className='pt-3 fs-5 fw-bold'>ROUTES CREATED</p>
            <h1 className='display-3 fw-bold'>1.85</h1>
            <p className='fw-bold'>BILLION</p></div>
            <div className="col-lg-4 p-4"><i className="fa-solid fa-person-running fa-beat-fade  fs-1"></i>
            <p className='pt-3 fs-5 fw-bold'>WORKOUTS LOGGED</p>
            <h1 className='display-3 fw-bold'>2.44</h1>
            <p className='fw-bold'>BILLION</p></div>
        </div>
    </div>
   </div>
  )
}

export default Meter
