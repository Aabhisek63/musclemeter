import React from 'react'
import image from '../images/image.png'
import appstore1 from '../images/appstore1.png'
import  img1 from'./muscleslogo.jpg'
function Footer() {
  return (
  

 <div className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col-1">
                <h3>Dowload Our App</h3>
                <p>Download App for Android and icons mobile phone.</p>
                <div className="app-logo">
<img src={image} alt="" />
<img src={appstore1} alt="" />
                </div>
            </div>
             <div className="footer-col-2">
            <img src={img1} alt="" />
                <p> Our purpose Is To Sustainably Make the Pleasure and Benfits of sports Accessible to th/e Many.</p>
            </div>
            <div className="footer-col-3">
                <h3>Useful Links</h3>
               <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Coupons</li>
                <li>Join Affiliate</li>
               </ul>
            </div>
            <div className="footer-col-4">
                <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
        </div>
        <hr/>
        <div className="footer1">
        <marquee>
        <p >&copy; 2025 Fitness Website. All rights reserved.</p>
    </marquee>
    </div>
 </div>
  
    </div>
 

  )
}

export default Footer
