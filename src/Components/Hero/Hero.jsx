import React from 'react'
import './Hero.css'
import dark_arrow from  '../../assets/edusity_assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
       <h1>We Ensure better education for a better World</h1> 
       <p>Our Cutting-edge curriculu is designed to empower students with the knowledge, skills, and experiences needed to excel in dynamic field of education.</p>
       <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>

    </div>
  )
}

export default Hero
