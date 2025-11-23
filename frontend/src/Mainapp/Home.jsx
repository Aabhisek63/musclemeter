import React from 'react'
import Slider from '../Elements/Slider'
import w1 from '../images/w1.webp'
import a2 from '../images/a2.png'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Built from '../Elements/Built'
import Meter from '../Elements/Meter'
import Footer from '../Elements/Footer'
function Home(){
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(()=>{
gsap.from('.ab>div',{
  x:500,
  scale:0,
  duration:0.7,
  stagger:0.2,
  scrollTrigger:{
    trigger:'.ab>div',
    scroller:"body",
    start:"top 70%",
    end:"top 50%",
    scrub:5
  }
})
gsap.from('.ab2>*',{
  x:-500,
  scale:0.2,
  opacity:0,
  duration:1,
  stagger:0.2,
  scrollTrigger:{
    trigger:'.ab2>*',
    scroller:"body",
    start:"top 70%",
    end:"top 50%",
    scrub:5
  }
})
gsap.from('.run>img',{
  x:-500,
  duration:1,
  scrollTrigger:{
    trigger:'.run>img',
    scroller:"body",
    start:"top 70%",
    end:"top 50%",
    scrub:5
  }
})
gsap.from('.run>div',{
  x:500,
  duration:1,
  scrollTrigger:{
    trigger:'.run>div',
    scroller:"body",
    start:"top 70%",
    end:"top 50%",
    scrub:5
  }
})

gsap.from('.push>div>*',{
  x:-500,
  opacity:0,
  scale:0,
  rotate:1440,
  duration:1,
  stagger:0.3,
  scrollTrigger:{
    trigger:'.push>div>*',
    scroller:"body",
    start:"top 70%",
    end:"top 55%",
    scrub:3
  }
})
  })
    return(
<>
<Slider/>
<div className="row my-5 ab">
  <div className="col-md-4 px-5 ms-auto my-auto ab2">
    <h1 className='display-5 fw-bold'>
      Set Goals. <br />
      Log Workouts.
      Stay On Track.</h1>
    <p className='small mt-3'>Easily track your Workouts, set Training Plans, and discover new Workout Routines to crush your goals.</p>
    <button className="bg-black text-light px-5 py-1 fs-5 fw-bold w-75">GET STARTED</button>
  </div>
  <div className="col-md-4 me-auto my-auto">
    <img src={w1} alt="" className='w-100'/>
  </div>
</div>
<div className="row my-5">
  <div className="col-md-7 run d-flex mx-auto bg-black text-light p-3 rounded-1" style={{height:"30vh"}}>
    <img src={a2} className='w-60' alt="" />
    <div className='my-auto ps-3'>
      <h2 className='fw-bold'>YOU VS The YEAR 2025</h2>
      <p className='text-muted'>Log !,024 Km in 2025</p>
    </div>
  </div>
</div>
<div className="row push">
  <div className="col-sm-12 text-center">
    <h1 className='fw-bold'>Push Your Limits</h1>
    <p className='small'>Hit milestones and PR’s by taking on a new challenge every month.</p>
    <button className='bg-dark text-light px-5 py-2 fw-bold'>JOIN A CHALLENGE</button>
  </div>
</div>
<Built/>
<Meter/>
<Footer/>
</>
    )
}
export default Home