import React from 'react'
import g1 from '../images/g1.webp'
import image from '../images/image.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
function Built() {
    useGSAP(()=>{
      gsap.from('.built>div>h1',{
        x:-500,
        opacity:0,
        scale:0,
        color:"red",
        scrollTrigger:{
          trigger:".built>div>h1",
            scroller:"body",
            start:"top 65%",
            end:"top 55%",
            scrub:3
          
        }

      })  

      gsap.from('.built>div>dl>*',{
        x:-500,
        opacity:0,
        scale:0,
        color:"red",
        // stagger:0.5,
        scrollTrigger:{
          trigger:".built>div>dl>*",
            scroller:"body",
            start:"top 65%",
            end:"top 55%",
            scrub:3
          
        }
}) 

gsap.from('.built>div>img',{
    y:500,
    scale:0,
    scrollTrigger:{
      trigger:".built>div>h1",
        scroller:"body",
        start:"top 65%",
        end:"top 50%",
        scrub:3
      
    }
}) 
 

    })
  return (
    <div className="row my-5 built">

      <div className="col-lg-3 my-auto col-md-6 ms-auto pe-5">
        <h1 className='fw-bold display-5'>Built To Make You Better</h1>
        <dl>
            <dt>Smarter Training</dt>
            <dd className='text-justify'>Turn your phone or smartwatch into your coach
                <br></br>—track your workouts and get tons of data and tips to help you run better.</dd>
                <dt>Custom Workouts</dt>
            <dd className='text-justify'>5K? Marathon? No matter where you’re at, get personalized Training Plans built just for you and your goals.</dd>
            <dt>Strong Community</dt>
            <dd className='text-justify'>Create your own custom challenges to push yourself and your friends. For extra motivation, reach out and find support from the entire MapMyFitness™ community.</dd>

        </dl>
        <img src={image} className='w-50' alt="" />
      </div>
      <div className="col-lg-5 my-auto col-md-6 me-auto">
        <img src={g1} className='w-100' alt="" />
      </div>
    </div>
  )
}

export default Built
