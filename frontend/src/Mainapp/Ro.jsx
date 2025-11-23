import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import bg2 from '../images/bg2.png'
import bg3 from '../images/bg3.png'
import Footer from '../Elements/Footer'
function Ro() {

    useGSAP(()=>{
      gsap.from('.baner h1',{
        x:-500,
        opacity:0,
        duration:1
      })  
      gsap.from('.baner p',{
        x:-500,
        y:-100,
        opacity:0,
        duration:1
      })  

    })
  return (
  <>
  {/* banner start */}
  <div className="row">
    <div className="col-md-9 p-5 mx-auto banner">
    <div className="row mt-5 pt-5">
        <div className="col-lg-6 me-auto">
            <h1 className='display-1 fw-bold'>Blaze New Trails</h1>
        </div>
        <div className="col-lg-3 mt-5 my-auto">
            <p>Create, discover, and save your favorites — from your neighborhood to around the world with MapMyFitness Routes.</p>
        </div>
        
    </div>
    </div>
  </div>
  {/* banner end*/}

  {/* create route start */}
  <div className="row">
    <div className="col-md-9 mx-auto">
        <div className="row">
            <div className="col-lg-4 my-auto position-relative" style={{left:"12vw"}}>
            <div class="card p-4 rounded-0 border-0" style={{backgroundColor:"#F3F3F3"}}>
  <div class="card-body">
    <h5 class="card-title">Create Your Own Route</h5>
    <br />
    <p class="card-text">Stay safe, plan logistics, and know the terrain when you create custom running routes.</p>
    <br />
    <a href="#" class="w-100 bg-black text-light fs-5 fw-bold nav-link text-center py-2 ">CREATE ROUTE</a>
  </div>
</div>
            </div>
            <div className="col-lg-7 mx-auto p-5">
            <img src={bg2} alt="" className='w-100' />  
                </div>
        </div>
    </div>
  </div>
    {/* create route end */}
    {/* create route start */}
  <div className="row">
    <div className="col-md-9 mx-auto">
        <div className="row">
            <div className="col-lg-7 mx-auto p-5">
            <img src={bg3} alt="" className='w-100' />  
                </div>
                <div className="col-lg-4 my-auto position-relative" style={{left:"-12vw"}}>
            <div class="card p-4 rounded-0 border-0" style={{backgroundColor:"#F3F3F3"}}>
  <div class="card-body">
    <h5 class="card-title">Create Your Own Route</h5>
    <br />
    <p class="card-text">Stay safe, plan logistics, and know the terrain when you create custom running routes.</p>
    <br />
    <a href="#" class="w-100 bg-black text-light fs-5 fw-bold nav-link text-center py-2 ">CREATE ROUTE</a>
  </div>
</div>
            </div>
        </div>
    </div>
  </div>

    {/* create route end */}

    <div className="row">
    <div className="col-md-9 p-5 mx-auto banner5">
    <div className="row mt-2 pt-5">
        <div className="col-lg-12  text-center">
            <h1 className='fw-bold '>Explore City Routes</h1>
        </div>
        <div className="col-lg-12  text-center mt-5">
            <p>Discover your city or explore a new one with running routes made for chasing your next PR.</p>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5 search text-center rounded-50 my-10">
 
           
           <input type="text" placeholder="Serach Any city"/>
       
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 text-center pt-5 ">
            <ul>
              <li>Pryagraj</li>
       
              <li>Lucknow</li>
              <li>Gorakhpur</li>
              <li>Kanpur</li>
              <li>Noida</li>
              <li>Gazhiyabad</li>
              <li>Agra</li>
              <li>Meertu</li>
            </ul>
          </div>
          <div className="col-lg-4 text-center pt-5">
          <ul>
              <li>Mumbai</li>
              <li>Banglore</li>
              <li>Hydrabad</li>
              <li>Chennai</li>
              <li>Delhi</li>
              <li>Pune</li>
              <li>Chandigrah</li>
              <li>Shimla</li>
            </ul>
          </div>

          <div className="col-lg-4 text-center pt-5">
          <ul>
              <li>New york</li>
              <li>Paris</li>
              <li>Canbera</li>
              <li>London</li>
              <li>Berlin</li>
              <li>Auckland</li>
              <li>Colambo</li>
              <li>Dubai</li>
            </ul>
          </div>

        </div>
        <div className="row ">
          <div className="col-lg-12 text-center mt-5 ">
          <a href="#" className=" w-20 bg-white text-black fs-5 fw-bold nav-link text-center py-2 btns">VIEW ALL CITIES</a>
          </div>
        </div>
    </div>
    </div>
  </div>

 <Footer/>
  </>
  )
}

export default Ro
