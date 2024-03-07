import React from 'react'
import Hero_Image from '../assets/images/Hero_Image.webp'
import '../assets/css/Hero.css'

const Hero = () => {
  return (
    <div className='container-fluid'>
        <div className="row align-items-center justify-content-center">
            <div className="col-md-5 p-3">
                <h4>Let's Begin New Era</h4>
                <h2 style={{fontSize:"10vh"}}>Step into Real Dynamic World</h2>
                <p style={{fontSize:"20px"}}>Product starting from <b>₹499*</b></p>
                <button class="shop-btn"><span>Shop Now</span></button>
            </div>
            <div className="col-md-6">
                <img src={Hero_Image} alt="Hero_Image" className='img-fluid'/>
            </div>
        </div>
    </div>
  )
}

export default Hero