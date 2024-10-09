import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_img from '../../assets/edusity_assets/play-icon.png'

function About({setPlayState}) {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_img} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knnowledge, skills and needed to excel in the dynamic fiels of educaton.</p>
        <p>With a fouus on innovation, hands-on learining, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools and Communities.</p>
        <p>Whether you aspire to become a teacher, administrator, counsellor, or educational leader , our dicerse range of programs offers th eperfect pathway to achieve your goals and unoack your full potential in shaping the future of educaton.</p>
      </div>
    </div>
  )
}

export default About
