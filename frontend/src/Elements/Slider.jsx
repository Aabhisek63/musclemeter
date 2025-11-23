import React from 'react'
import s1 from '../images/s1.webp'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function Slider(){
useGSAP(()=>{
    gsap.from('.sdiv',{
// rotate:1440,
x:-1440,
scale:0.1,
opacity:0,
duration:0.8,
borderRadius:"50%"
    })
gsap.from('.sdiv>div',{
    x:1000,
    duration:1.3
})

gsap.from('.sdiv>div>*',{
    x:100,
    opacity:0,
    scale:0.2,
 duration:2,
 stagger:0.3
})
})
    return(
<>
<div className="row">
    <div className="col-sm-12 text-center sdiv">
    <div>
        <h1>Reach Your Best</h1>
        <p>Whether you’re training for a marathon or your biggest <br></br>season yet, we’re here to help you make serious progress.</p>
    <button className="btn btn-light w-25">SIGN UP</button>
    </div>
    <img src={s1} alt="" className='w-75'/>
</div>
</div>
</>
    )
}
export default Slider